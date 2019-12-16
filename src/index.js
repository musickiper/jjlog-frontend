import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo-hooks";
import { BrowserRouter } from "react-router-dom";
import App from "./Components/App";
import Client from "./Apollo/Client";

ReactDOM.render(
  <ApolloProvider client={Client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById("root")
);
