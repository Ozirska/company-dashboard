import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MosaicLayout from "./components/MosaicLayout.tsx";

const container = document.getElementById("root");
const root = createRoot(container!); // "!" говорить TS, що container точно існує

root.render(
  <React.StrictMode>
    <MosaicLayout />
  </React.StrictMode>
);
