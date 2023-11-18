import { createContext } from "react";

export const AuthContext = createContext<AuthContext>({
    user: null,
    setUser: () => {},
});
