import React from "react";
import { ApolloProvider } from "react-apollo";

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <ApolloProvider>
    {children}
  </ApolloProvider>
);
