import { motion, AnimatePresence } from "framer-motion";

import { ChangeEvent, useEffect, useRef, useState } from "react";
import useStore from "@/hooks/useStore";
import useTop from "@/hooks/useTop";

import tw from "tailwind-styled-components";

import commands from "@/commands";
import CommandBar from "@/components/CommandBar";
import useHideBody from "@/hooks/useHideBody";
import useKeyboard from "@/hooks/useKeyboard";

const CommandsModal = () => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    const commandsOpen = useStore((state) => state.commandsOpen);
    const setCommandsOpen = useStore((state) => state.setCommandsOpen);

    const [filter, setFilter] = useState<string>("");

    // custom hooks to simplify modal logic
    // update command highlighter
    const { top, setActiveCommand } = useTop(cardsRef.current?.offsetHeight);

    // hide scrollbar when modal is open
    useHideBody(commandsOpen);

    // open modal on ctrl + k
    useKeyboard({
        shortcut: ["Control", "k"],
        onShortcut: (e) => {
            e.preventDefault();
            setCommandsOpen(true);
        },
    });

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
                            placeholder={"Home"}
                            value={filter}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                setFilter(e.target.value);
                            }}
                        />

                        <CommandHighlighted
                            style={{
                                top: `${top}px`,
                            }}
                        />

                        <div className="px-4 max-h-60 overflow-y-scroll">
                            <div>
                                {Object.entries(commands).map(
                                    ([commandLabel, commandValues]) => (
                                        <div key={commandLabel}>
                                            <CommandLabel>
                                                {commandLabel}
                                            </CommandLabel>

                                            {commandValues
                                                .filter((command) =>
                                                    command.name.includes(
                                                        filter
                                                    )
                                                )
                                                .map((command) => (
                                                    <CommandBar
                                                        key={command.name}
                                                        {...command}
                                                        setActiveCommand={(
                                                            target
                                                        ) => {
                                                            setActiveCommand(
                                                                target.id
                                                            );
                                                        }}
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
    mt-3 mb-1
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
