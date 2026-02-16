import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import { ApolloProvider } from "@apollo/client/react";
import { HttpLink } from "@apollo/client/link/http";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import App from "./App.tsx";
import "./index.css";

const apolloClient = new ApolloClient({
  link: new HttpLink({ uri: "/graphql" }),
  cache: new InMemoryCache(),
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={apolloClient}>
      <FluentProvider theme={webLightTheme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FluentProvider>
    </ApolloProvider>
  </StrictMode>
);
