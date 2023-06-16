"use client";

import { User } from "oidc-client-ts";
import React from "react";
import { AuthProvider, AuthProviderProps } from "react-oidc-context";

type Props = {
  children?: React.ReactNode;
};

const oidcConfig: AuthProviderProps = {
  authority: "...",
  client_id: "...",
  redirect_uri: "http://localhost:3000",
  onSigninCallback: (user: User | void): void => {
    window.history.replaceState({}, document.title, window.location.pathname);
  },
};

const AuthSessionProvider = ({ children }: Props) => {
  return <AuthProvider {...oidcConfig}>{children}</AuthProvider>;
};

export default AuthSessionProvider;
