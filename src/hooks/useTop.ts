import { useEffect, useState } from "react";
import { defaultCommand } from "@/data/commands";

const useTop = (parent: HTMLElement | null) => {
    const [activeCommand, setActiveCommand] = useState<string>(defaultCommand);
    const [placeholder, setPlaceholder] = useState<string>(defaultCommand);
    const [top, setTop] = useState<number>(0);

    // update top
    useEffect(() => {
        const tabPlaceholder = document
            .getElementById(activeCommand)
            ?.textContent?.trim();

        tabPlaceholder && setPlaceholder(tabPlaceholder);

        const updateTop = () => {
            const node = document.getElementById(activeCommand);

            if (!(node && parent)) {
                setTop(36); // hardcode default to prevent flickering
                return;
            }

            const tabBoundingBox = node.getBoundingClientRect();
            const parentBoundingBox = parent.getBoundingClientRect();

            setTop(tabBoundingBox.top - parentBoundingBox.top + node.scrollTop);
        };

        updateTop();

        window.addEventListener("scroll", updateTop, true);
        return () => window.removeEventListener("scroll", updateTop);
    }, [activeCommand]);

    return {
        css: {
            transform: `translateY(${top}px)`,
        },
        placeholder,
        activeCommand,
        setActiveCommand,
    };
};

export default useTop;
