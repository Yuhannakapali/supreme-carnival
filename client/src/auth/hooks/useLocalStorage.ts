import { useState } from "react";

export const useLocalStorage = () => {
    const [state, setState] = useState<string | null>(null);

    const setItem = (key: string, value: string) => {
        localStorage.setItem(key, value);
        setState(value);
    };

    const getItem = (key: string) => {
        const value = localStorage.getItem(key);
        setState(value);
        return value;
    };

    const removeItem = (key: string) => {
        localStorage.removeItem(key);
        setState(null);
    };

    return { state, setItem, getItem, removeItem };
};
