import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import '../src/index.css';
import { NavigationProvider } from "./context/navigation.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NavigationProvider>
      <App /> 
    </NavigationProvider>

  </StrictMode>
);
