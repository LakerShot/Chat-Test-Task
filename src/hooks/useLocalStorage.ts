import { useState, useEffect } from "react";

export const useLocalStorage = <T>(storageKey: string, fallbackState: T): [T, (val: T) => void] => {
    const [value, setValue] = useState(
        JSON.parse(localStorage.getItem(storageKey)) ?? fallbackState
    );

    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(value));
    }, [value, storageKey]);

    return [value, setValue] as [T, (val: T) => void];
};
