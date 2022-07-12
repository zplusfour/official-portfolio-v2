import Twemoji from "@/components/Twemoji";
import { useState, FormEvent, useRef, useEffect } from "react";
import { Button, P } from "@/components/styles";
import { AnimatePresence, motion } from "framer-motion";
import CommandKey from "@/components/CommandKey";
import tw from "tailwind-styled-components";

// intended to keep weirdos away, not actual security lol
// the resume is actually public in the repo 😂
const pa$$word = "lmao";

const Resume = () => {
    const [showResume, setShowResume] = useState<boolean>(false);
    const [input, setInput] = useState<string>("");

    const verifyPassword = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (input === pa$$word) {
            setShowResume(true);
        }

        setInput("");
    };

    return (
        <>
            <CommandKey className="fixed bottom-3 left-3 z-10" />

            <AnimatePresence>
                {showResume ? (
                    <ResumeIframe
                        src="/resume.pdf"
                        className="border-none outline-none h-screen w-screen absolute top-0 left-0"
                    ></ResumeIframe>
                ) : (
                    <div className="grid place-items-center h-screen w-screen absolute left-0 top-0 overflow-hidden">
                        <motion.div
                            className="max-w-sm text-center"
                            key="resumeBlocker"
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                        >
                            <h1 className="text-5xl">
                                <Twemoji emoji="🔒" />
                            </h1>
                            <P className="mt-3">
                                Sorry, this area is restricted. Give me the
                                password and I might let you through!
                            </P>

                            <form
                                className="mt-6 flex gap-3 justify-center"
                                onSubmit={verifyPassword}
                                autoComplete="off"
                                spellCheck="false"
                            >
                                <input
                                    type="text"
                                    className="border py-1 px-2 outline-none rounded-md focus:border-gray-300"
                                    placeholder="bruh"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                />
                                <Button>Submit</Button>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Resume;

export const ResumeIframe = tw.iframe`
    border-none outline-none 
    h-screen w-screen 
    absolute top-0 left-0
`;
