import Twemoji from "@/components/Twemoji";
import { Button, P } from "@/components/styles";
import { AnimatePresence, motion } from "framer-motion";
import CommandKey from "@/components/CommandKey";

import { useState, FormEvent, ChangeEvent } from "react";

import tw from "tailwind-styled-components";

// intended to keep weirdos away, not actual security lol
// the resume is actually public in the repo 😂
const pa$$word = "lmao";

const ResumeIframe = tw.iframe`
    border-none outline-none 
    h-screen w-screen 
    absolute top-0 left-0
`;

const LockCenter = tw.div`
    grid place-items-center 
    h-screen w-screen 
    absolute left-0 top-0 
    overflow-hidden
`;

const LockText = tw(motion.div)`
    max-w-sm text-center
`;

const LockInput = tw.input`
    border outline-none rounded-md
    py-1 px-2  
    focus:border-gray-300
`;

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
                    <ResumeIframe src="/resume.pdf"></ResumeIframe>
                ) : (
                    <LockCenter>
                        <LockText>
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
                                <LockInput
                                    type="text"
                                    className="border py-1 px-2 outline-none rounded-md focus:border-gray-300"
                                    placeholder="bruh"
                                    value={input}
                                    onChange={(
                                        e: ChangeEvent<HTMLInputElement>
                                    ) => setInput(e.target.value)}
                                />
                                <Button>Submit</Button>
                            </form>
                        </LockText>
                    </LockCenter>
                )}
            </AnimatePresence>
        </>
    );
};

export default Resume;
