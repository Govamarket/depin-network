import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Fixed import

const firebaseConfig = {
  apiKey: "AIzaSyCisoS7IN6C2kW2JeKxYJnopfF4tWtUGwg",
  authDomain: "depin-center.firebaseapp.com",
  projectId: "depin-center",
  storageBucket: "depin-center.appspot.com",
  messagingSenderId: "766719132725",
  appId: "1:766719132725:web:604cd4ae36fba77182dd7c",
  measurementId: "G-4WNGMV2LGF",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, analytics, auth };
