import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { UserDataProvider } from "./Context/userContactContext.jsx";
createRoot(document.getElementById("root")).render(
      <UserDataProvider>
        <App/>
      </UserDataProvider>
);
