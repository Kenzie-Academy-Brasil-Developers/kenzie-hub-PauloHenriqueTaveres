import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { TechnoProvider } from "./contexts/technoContext";
import { UserProvider } from "./contexts/userContext";
import { GlobalStyle } from "./styles/reset";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <TechnoProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </TechnoProvider>
    </BrowserRouter>
  </React.StrictMode>
);
