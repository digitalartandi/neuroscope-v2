import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ZustandProvider } from "./lib/zustand";
import "./styles.css";
import { laderAusblenden } from "./lib/lader";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ZustandProvider>
      <App />
    </ZustandProvider>
  </StrictMode>,
);

laderAusblenden();
