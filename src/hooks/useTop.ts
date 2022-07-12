import { useEffect, useState } from "react";
import { defaultCommand } from "@/commands";

const useTop = (parent: HTMLElement | null) => {
    const [activeCommand, setActiveCommand] = useState<string>(defaultCommand);
    const [placeholder, setPlaceholder] = useState<string>(defaultCommand);
    const [top, setTop] = useState<number>(0);

    // const tabBoundingBox = node.getBoundingClientRect()
    // const parentBoundingBox = parent.getBoundingClientRect()
    // const highlightOffset = tabBoundingBox.top - parentBoundingBox.top
    //   setTransform(`translate(0, ${highlightOffset + parent.scrollTop}px)`)

    // update top
    useEffect(() => {
        const tabPlaceholder = document
            .getElementById(activeCommand)
            ?.textContent?.trim();

        tabPlaceholder && setPlaceholder(tabPlaceholder);

        const onScroll = () => {
            const node = document.getElementById(activeCommand);

            if (!(node && parent)) {
                setTop(36); // hardcode default to prevent flickering
                return;
            }

            const tabBoundingBox = node.getBoundingClientRect();
            const parentBoundingBox = parent.getBoundingClientRect();

            setTop(tabBoundingBox.top - parentBoundingBox.top + node.scrollTop);
        };
        // update top
        onScroll();
        window.addEventListener("scroll", onScroll, true);
        return () => window.removeEventListener("scroll", onScroll);
    }, [activeCommand]);

    return {
        top,
        placeholder,
        activeCommand,
        setActiveCommand,
    };
};

export default useTop;
