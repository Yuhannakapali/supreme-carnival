import { useEffect } from "react";
import { useUser } from "@/auth/hooks/useUser";
import { useLocalStorage } from "@/auth/hooks/useLocalStorage";
import { DefaultConstant } from "@/defaults";

export const useAuth = () => {
    const { user, addUser, removeUser } = useUser();
    const { getItem } = useLocalStorage();
    useEffect(() => {
        const user = getItem(DefaultConstant.User);
        if (user) {
            addUser(JSON.parse(user));
        }
    }, [addUser, getItem]);

    const login = (user: User) => {
        addUser(user);
    };

    const logout = () => {
        removeUser();
    };
    return { user, login, logout };
};
