import React, { useState } from "react";
import { XCircle } from "lucide-react";

function searchNodes(query) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { nodeId: "node1", name: "Node Alpha" },
        { nodeId: "node2", name: "Node Beta" },
      ]);
    }, 500);
  });
}

const NodeSearchModal = ({ onClose, onAddNode }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selectedNode, setSelectedNode] = useState(null);

  async function handleSearch() {
    const nodes = await searchNodes(query);
    setResults(nodes);
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-6 max-w-md w-full relative">
        <button className="absolute top-2 right-2" onClick={onClose}>
          <XCircle className="w-6 h-6 text-gray-500" />
        </button>
        <h3 className="text-xl font-bold mb-4">Search/Add Node</h3>
        <input
          type="text"
          placeholder="Search node..."
          className="input mb-2 w-full"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg mb-4"
          onClick={handleSearch}
        >
          Search
        </button>
        <div>
          {results.map((node) => (
            <div
              key={node.nodeId}
              className="flex items-center justify-between border p-2 rounded-lg mb-2"
            >
              <span>{node.name}</span>
              <button
                className="bg-green-600 text-white px-3 py-1 rounded-lg"
                onClick={() => {
                  setSelectedNode(node);
                  onAddNode(node);
                }}
              >
                Add to Validator
              </button>
            </div>
          ))}
          {selectedNode && (
            <div className="mt-2 text-green-700">
              Node {selectedNode.name} added!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NodeSearchModal;
