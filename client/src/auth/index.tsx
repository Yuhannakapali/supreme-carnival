import { FunctionComponent } from "react";
import { AuthProvider } from "./context";

export const PublicRoute: FunctionComponent<{ children: JSX.Element }> = ({children}) => children;

export const PrivateRoute: FunctionComponent<{ children: JSX.Element }> = ({children}) => <AuthProvider>{children}</AuthProvider>;
