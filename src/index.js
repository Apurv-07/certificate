import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import States from "./states";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <States />
  </StrictMode>
);