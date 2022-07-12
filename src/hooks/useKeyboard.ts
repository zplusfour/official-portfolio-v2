import { useEffect, useState } from "react";

interface keyboardShortcut {
    shortcut: string[];
    onShortcut: (e: KeyboardEvent) => void;
}

type useKeyboardProps = keyboardShortcut[];

const useKeyboard = (...shortcuts: useKeyboardProps) => {
    const [keys, setKeys] = useState<string[]>([]);

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            const newKeys = [...keys, e.key];
            setKeys([...new Set(newKeys)]);

            for (const keyboardShortcut of shortcuts) {
                const { shortcut, onShortcut } = keyboardShortcut;

                if (
                    shortcut
                        .map((key) => newKeys.includes(key))
                        .every((isIncluded) => isIncluded)
                ) {
                    onShortcut(e);
                }
            }
        };

        const onKeyUp = (e: KeyboardEvent) => {
            setKeys(keys.filter((key) => key !== e.key));
        };

        window.addEventListener("keydown", onKeyDown);
        window.addEventListener("keyup", onKeyUp);

        return () => {
            window.removeEventListener("keydown", onKeyDown);
            window.removeEventListener("keyup", onKeyUp);
        };
    }, []);

    return {
        keyboard: keys,
    };
};

export default useKeyboard;
