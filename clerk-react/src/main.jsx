import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"; // Change to .jsx
import "./index.css";
import { ClerkProvider } from "@clerk/clerk-react";

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Clerk Publishable Key. Make sure it's set in the .env file");
}

// Safely check if the element exists before rendering
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found!");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <App />
    </ClerkProvider>
  </React.StrictMode>
);
