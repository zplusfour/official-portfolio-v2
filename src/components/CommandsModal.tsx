import { motion, AnimatePresence } from "framer-motion";

import { ChangeEvent, useRef, useState } from "react";
import useStore from "@/hooks/useStore";
import useTop from "@/hooks/useTop";
import CommandBar from "@/components/CommandBar";
import useHideBody from "@/hooks/useHideBody";
import useKeyboard from "@/hooks/useKeyboard";

import tw from "tailwind-styled-components";

import commands, { Command, commandsFlattened } from "@/data/commands";

const CommandsModal = () => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    const commandsOpen = useStore((state) => state.commandsOpen);
    const setCommandsOpen = useStore((state) => state.setCommandsOpen);

    const [filter, setFilter] = useState<string>("");

    // custom hooks to simplify modal logic
    // update command highlighter
    const { css, placeholder, setActiveCommand } = useTop(
        cardsRef.current,
        filter
    );

    // hide scrollbar when modal is open
    // useHideBody(commandsOpen);

    // open modal on ctrl + k
    useKeyboard({
        shortcut: ["Control", "k"],
        onShortcut: (e) => {
            e.preventDefault();
            setCommandsOpen(true);
        },
    });

    const searchFilter = (command: any) =>
        (command as Command).name.toLowerCase().includes(filter.toLowerCase());

    const searchLength = commandsFlattened.filter(searchFilter).length > 0;

    return (
        <AnimatePresence>
            {commandsOpen && (
                <motion.div
                    key="commandsWrapper"
                    className="bg-opacity-60 bg-white h-screen w-screen fixed top-0 left-0 z-50"
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
                    <CommandCenter>
                        <motion.div
                            key="commandsCard"
                            className="relative border rounded-lg shadow-xl bg-white pb-4 isolate overflow-hidden"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                        >
                            <input
                                className="outline-none rounded-t-lg p-4 border-b w-full"
                                type="text"
                                placeholder={placeholder}
                                value={filter}
                                onChange={(
                                    e: ChangeEvent<HTMLInputElement>
                                ) => {
                                    setFilter(e.target.value);
                                }}
                            />

                            {searchLength && <CommandHighlighted style={css} />}

                            <div
                                className="px-4 max-h-60 overflow-y-auto"
                                ref={cardsRef}
                            >
                                <div>
                                    {!searchLength ? (
                                        <p className="mt-4">
                                            No results found.
                                        </p>
                                    ) : (
                                        Object.entries(commands).map(
                                            ([commandLabel, commandValues]) => (
                                                <div key={commandLabel}>
                                                    <CommandLabel>
                                                        {commandLabel}
                                                    </CommandLabel>

                                                    {commandValues
                                                        .filter(searchFilter)
                                                        .map((command) => (
                                                            <CommandBar
                                                                key={
                                                                    command.name
                                                                }
                                                                {...command}
                                                                setActiveCommand={(
                                                                    target: HTMLElement
                                                                ) => {
                                                                    setActiveCommand(
                                                                        target.id
                                                                    );
                                                                }}
                                                            />
                                                        ))}
                                                </div>
                                            )
                                        )
                                    )}
                                </div>
                            </div>

                            <CommandBottomPadding />
                        </motion.div>
                    </CommandCenter>
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

export const CommandCenter = tw.div`
    absolute top-40 left-1/2 -translate-x-1/2 
    max-w-xl w-full
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
