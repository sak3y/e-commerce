// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./hooks/scrollTop.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/novelty-bakery">
    <ScrollToTop />
    <App />
  </BrowserRouter>
);
