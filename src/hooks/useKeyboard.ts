import { useEffect } from "react";

interface keyboardShortcut {
    shortcut: string[];
    onShortcut: (e: KeyboardEvent) => void;
}

type useKeyboardProps = keyboardShortcut[];

const useKeyboard = (...shortcuts: useKeyboardProps) => {
    useEffect(() => {
        let keys: string[] = [];

        const onKeyDown = (e: KeyboardEvent) => {
            if (!keys.includes(e.key)) {
                keys.push(e.key);
            }

            for (const keyboardShortcut of shortcuts) {
                const { shortcut, onShortcut } = keyboardShortcut;

                if (
                    shortcut
                        .map((key) => keys.includes(key))
                        .every((isIncluded) => isIncluded)
                ) {
                    onShortcut(e);
                }
            }
        };

        const onKeyUp = (e: KeyboardEvent) => {
            keys = keys.filter((key) => key !== e.key);
        };

        window.addEventListener("keydown", onKeyDown);
        window.addEventListener("keyup", onKeyUp);

        return () => {
            window.removeEventListener("keydown", onKeyDown);
            window.removeEventListener("keyup", onKeyUp);
        };
    }, []);
};

export default useKeyboard;
