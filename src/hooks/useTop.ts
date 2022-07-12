import { useEffect, useState } from "react";
import { defaultCommand } from "@/commands";

const useTop = (cardsRefHeight: number = 0) => {
    const [activeCommand, setActiveCommand] = useState<string>(defaultCommand);
    const [placeholder, setPlaceholder] = useState<string>(defaultCommand);
    const [top, setTop] = useState<number>(0);

    // update top
    useEffect(() => {
        const activeCommandRef = document.getElementById(activeCommand);

        // set placeholder
        if (activeCommandRef) {
            setPlaceholder(activeCommandRef.textContent!.trim());
        }

        const onScroll = () =>
            setTop(
                (activeCommandRef?.getBoundingClientRect().top || 0) - // y position
                    cardsRefHeight +
                    3 * 16 + // height of command highlighter
                    3 // hard-coded offset
            );

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
