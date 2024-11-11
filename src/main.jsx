import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { UserDataProvider } from "./Context/userContactContext.jsx";
import { Provider } from "react-redux";
import {store} from "./ReduxToolkit/Store/ContactStore.jsx";
createRoot(document.getElementById("root")).render(
      <Provider store={store}>
        <App/>
      </Provider>
);

{/* <UserDataProvider>
        <App/>
      </UserDataProvider> */}
