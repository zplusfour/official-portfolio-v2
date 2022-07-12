import { motion, AnimatePresence } from "framer-motion";

import { useEffect, useRef, useState, WheelEvent } from "react";
import useStore from "@/hooks/useStore";

import tw from "tailwind-styled-components";

import Commands from "@/Commands";
import CommandBar from "@/components/CommandBar";

const CommandsModal = () => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    const commandsOpen = useStore((state) => state.commandsOpen);
    const setCommandsOpen = useStore((state) => state.setCommandsOpen);
    const [activeCommand, setActiveCommand] = useState<HTMLAnchorElement>();
    const [forceRefresh, setForceRefresh] = useState<boolean>(false);

    // hide scroll bar
    useEffect(() => {
        commandsOpen
            ? document.body.classList.add("overflow-hidden")
            : document.body.classList.remove("overflow-hidden");
    }, [commandsOpen]);

    // open command bar on ctrl + k
    useEffect(() => {
        let keys: string[] = [];

        const onKeyDown = (e: KeyboardEvent) => {
            if (!keys.includes(e.key)) {
                keys.push(e.key);
            }

            if (keys.includes("Control") && keys.includes("k")) {
                e.preventDefault();
                setCommandsOpen(true);
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

    return (
        <AnimatePresence>
            {commandsOpen && (
                <motion.div
                    key="commandsWrapper"
                    className="bg-opacity-50 bg-white h-screen w-screen fixed top-0 left-0 z-50 grid place-items-center"
                    ref={wrapperRef}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={(e) => {
                        if (e.target == wrapperRef.current) {
                            setCommandsOpen(false);
                        }
                    }}
                >
                    <motion.div
                        key="commandsCard"
                        className="relative border rounded-lg shadow-lg max-w-xl w-full bg-white pb-4 isolate overflow-hidden"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        ref={cardsRef}
                    >
                        <input
                            className="outline-none rounded-t-lg p-4 border-b w-full"
                            type="text"
                            placeholder={activeCommand?.textContent || "Home"}
                        />

                        <CommandHighlighted
                            style={{
                                top: `${
                                    (activeCommand?.getBoundingClientRect()
                                        .top || 357) -
                                    (cardsRef.current?.offsetHeight || 0) +
                                    50
                                }px`,
                            }}
                        />

                        <div
                            className="px-4 max-h-60 overflow-y-scroll"
                            onScroll={() => {
                                setForceRefresh(!forceRefresh);
                            }}
                        >
                            <div>
                                {Object.entries(Commands).map(
                                    ([commandLabel, commands]) => (
                                        <div key={commandLabel}>
                                            <CommandLabel>
                                                {commandLabel}
                                            </CommandLabel>

                                            {commands.map((command) => (
                                                <CommandBar
                                                    key={command.name}
                                                    {...command}
                                                    setActiveCommand={
                                                        setActiveCommand
                                                    }
                                                />
                                            ))}
                                        </div>
                                    )
                                )}
                            </div>

                            <CommandBottomPadding />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CommandsModal;

export const CommandLabel = tw.span`
    block
    text-sm text-gray-500
    mt-3
    mb-1
`;

export const CommandHighlighted = tw.div`
    absolute -z-10
    h-12 max-w-xl w-full 
    bg-gray-100 
    transition-all
`;

export const CommandBottomPadding = tw.div`
    absolute bottom-0 left-0 right-0 z-10
    h-4 bg-white
`;
