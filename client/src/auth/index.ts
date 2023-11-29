import { FunctionComponent } from "react";

import { createContext } from "react";

export const AuthContext = createContext<IAuthContext>({
    user: null,
    setUser: () => {},
});

export const PublicRoute: FunctionComponent<{ children: JSX.Element }> = ({
    children,
}) => children;

