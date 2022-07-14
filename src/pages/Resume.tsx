import { Button, H, P } from "@/components/styles";

import { useState, FormEvent, ChangeEvent } from "react";
import tw from "tailwind-styled-components";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PageContent } from "@/components/styles";
import { FiArrowUpRight } from "react-icons/fi";

import Twemoji from "@/components/Twemoji";

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
            <Header />
            <PageContent>
                <H>Resume</H>
                <P $mt>
                    A 5 page list of all of my achievements and
                    extracurriculars! Unfortunately, I've restricted this page{" "}
                    <Twemoji emoji="🔒" /> to keep out non-tech savvy weirdos.
                    Ask me for the password or maybe you can find it yourself
                    lmao.
                </P>

                {showResume ? (
                    <Button $as="a" href="/resume.pdf" $mtLarge>
                        Download resume.pdf{" "}
                        <FiArrowUpRight className="icon icon-button" />
                    </Button>
                ) : (
                    <form
                        className="mt-6"
                        onSubmit={verifyPassword}
                        autoComplete="off"
                        spellCheck="false"
                    >
                        <LockInput
                            type="password"
                            className="border py-1 px-2 outline-none rounded-md focus:border-gray-300"
                            placeholder="bruh"
                            value={input}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setInput(e.target.value)
                            }
                        />
                        <Button $mt>Submit</Button>

                        <div
                            dangerouslySetInnerHTML={{
                                __html: `<!-- lmao -->`,
                            }}
                        />
                    </form>
                )}

                <Footer />
            </PageContent>
        </>
    );
};

export default Resume;

const LockInput = tw.input`
    border outline-none rounded-md
    py-1 px-2  
    focus:border-gray-300
`;
