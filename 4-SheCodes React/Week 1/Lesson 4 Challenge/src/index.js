import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <h1>Challenge</h1>
      <p>
        Make european cities blue and north american cities red from CSS in
        React
      </p>

      <ul>
        <li>Sydney</li>
        <li id="euro">Paris</li>
        <li id="north-am">Montreal</li>
        <li id="euro">Lisbon</li>
        <li id="north-am">San Francisco</li>
      </ul>
    </div>
  </StrictMode>
);
