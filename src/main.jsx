import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import i18n from "./i18n";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
theme;
import "./index.css";
import theme from "../theme";

if (window.Cypress) {
  window.i18n = i18n;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
