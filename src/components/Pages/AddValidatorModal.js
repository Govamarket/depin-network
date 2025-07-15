import React, { useState } from "react";
import { db } from "./firebase"; // your firebase config
import { collection, doc, setDoc } from "firebase/firestore";
import { AlertCircle, CheckCircle } from "lucide-react";

// Helper to add validator to Firestore
async function addValidatorToUser(uid, validator) {
  const ref = doc(
    collection(db, "users", uid, "validators"),
    validator.validatorId
  );
  await setDoc(ref, validator, { merge: true });
}

// Chrome extension detection (example for Nodepay)
function isExtensionInstalled() {
  return new Promise((resolve) => {
    // This assumes your extension listens for a custom event; adjust as needed!
    window.postMessage({ type: "NODEPAY_PING" }, "*");
    window.addEventListener("message", function handler(event) {
      if (event.data.type === "NODEPAY_PONG") {
        window.removeEventListener("message", handler);
        resolve(true);
      }
    });
    setTimeout(() => resolve(false), 1000);
  });
}

const AddValidatorModal = ({ user, availableProjects, onClose, onAdd }) => {
  const [step, setStep] = useState("choose");
  const [selected, setSelected] = useState(null);
  const [uploadDesktopApp, setUploadDesktopApp] = useState(null);
  const [statusMsg, setStatusMsg] = useState("");

  async function handleSelect(project) {
    setSelected(project);
    setStep("details");
    setStatusMsg("");
  }

  async function handleAdd() {
    if (selected.method === "chrome_extension") {
      setStatusMsg("Checking for extension...");
      const installed = await isExtensionInstalled();
      if (!installed) {
        setStatusMsg("Extension not detected. Please install it first.");
        // Optionally provide install link
        return;
      }
      const validator = {
        validatorId: selected.name.toLowerCase(),
        name: selected.name,
        method: selected.method,
        status: "active",
        installSource: "chrome://extensions/",
        meta: {},
        addedAt: new Date().toISOString(),
      };
      await addValidatorToUser(user.uid, validator);
      setStatusMsg("Extension connected!");
      onAdd();
    } else if (selected.method === "desktop_app") {
      if (!uploadDesktopApp) {
        setStatusMsg("Please upload or select your desktop app/config first.");
        return;
      }
      const validator = {
        validatorId: selected.name.toLowerCase(),
        name: selected.name,
        method: selected.method,
        status: "inactive",
        installSource: uploadDesktopApp.name,
        meta: {},
        addedAt: new Date().toISOString(),
      };
      await addValidatorToUser(user.uid, validator);
      setStatusMsg("Desktop app attached!");
      onAdd();
    }
  }

  return (
    <div className="modal">
      <h3 className="text-xl font-bold mb-2">Add DePIN Project</h3>
      {step === "choose" && (
        <div>
          <ul>
            {availableProjects.map((p) => (
              <li key={p.name}>
                <button onClick={() => handleSelect(p)}>
                  {p.name}{" "}
                  <span className="badge">{p.method.replace("_", " ")}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      {step === "details" && selected && (
        <div>
          <p className="font-bold">{selected.name}</p>
          <p>Method: {selected.method.replace("_", " ")}</p>
          <p>{selected.setupInstructions}</p>
          {selected.method === "chrome_extension" && (
            <div>
              <a
                href="https://chrome.google.com/webstore/detail/nodepay-extension/your-id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Install Extension
              </a>
              <button className="btn" onClick={handleAdd}>
                Connect Extension
              </button>
            </div>
          )}
          {selected.method === "desktop_app" && (
            <div>
              <input
                type="file"
                onChange={(e) => setUploadDesktopApp(e.target.files[0])}
              />
              <button className="btn" onClick={handleAdd}>
                Attach Desktop App
              </button>
            </div>
          )}
          <div className="mt-2 text-sm text-gray-600">{statusMsg}</div>
        </div>
      )}
      <button className="absolute top-2 right-2" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default AddValidatorModal;
