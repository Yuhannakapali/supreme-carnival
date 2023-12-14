import { FunctionComponent, createContext } from "react";
import { useUser } from "../hooks/useUser";

export const AuthContext = createContext<IAuthContext>({
    user: null,
    setUser: () => {},
});

export const AuthProvider:FunctionComponent<{ children: JSX.Element }> = ({children}) => {
    const {user,  addUser} = useUser();
    return (
        <AuthContext.Provider value={{user, setUser:addUser}}>
            {children}
        </AuthContext.Provider>
    );
};
