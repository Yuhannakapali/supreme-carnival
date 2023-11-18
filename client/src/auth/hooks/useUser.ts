import { DefaultConstant } from "@/defaults";
import { useLocalStorage } from "@/auth/hooks/useLocalStorage";
import { useContext } from "react";
import { AuthContext } from "@/auth/context";

export const useUser = () => {
    const { user, setUser } = useContext(AuthContext);
    const { setItem } = useLocalStorage();
    const addUser = (user: User) => {
        setItem(DefaultConstant.User, JSON.stringify(user));
        setUser(user);
    };

    const removeUser = () => {
        setUser(null);
        setItem(DefaultConstant.User, "");
    };

    return { user, addUser, removeUser };
};
