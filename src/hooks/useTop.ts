import { useEffect, useState } from "react";
import { defaultCommand } from "@/data/commands";

const isVisible = (node: HTMLElement) =>
    !!(node.offsetWidth || node.offsetHeight || node.getClientRects().length);

const useTop = (parent: HTMLElement | null, ...dependencies: any[]) => {
    const [activeCommand, setActiveCommand] = useState<string>(defaultCommand);
    const [placeholder, setPlaceholder] = useState<string>(defaultCommand);
    const [top, setTop] = useState<number>(0);
    const [visible, setVisible] = useState<boolean>(false);

    // update top
    useEffect(() => {
        const tabPlaceholder = document
            .getElementById(activeCommand)
            ?.textContent?.trim();

        tabPlaceholder && setPlaceholder(tabPlaceholder);

        const updateTop = () => {
            const node = document.getElementById(activeCommand);
            if (!(node && parent) || !isVisible(node)) {
                setTop(36); // hardcode default to prevent flickering
                setVisible(false);
                return;
            }

            setVisible(true);

            const tabBoundingBox = node.getBoundingClientRect();
            const parentBoundingBox = parent.getBoundingClientRect();

            setTop(tabBoundingBox.top - parentBoundingBox.top + node.scrollTop);
        };

        updateTop();

        window.addEventListener("scroll", updateTop, true);
        return () => window.removeEventListener("scroll", updateTop);
    }, [activeCommand, ...dependencies]);

    return {
        css: {
            transform: `translateY(${top}px)`,
            opacity: visible ? 1 : 0,
        },
        placeholder,
        activeCommand,
        setActiveCommand,
    };
};

export default useTop;
