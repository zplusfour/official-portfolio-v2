import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PageContent, Button, H, P, A } from "@/components/styles";
import { FiArrowUpRight, FiSmile } from "react-icons/fi";

import useRepos from "@/hooks/useRepos";
import { useEffect, useState } from "react";

import Tooltip from "@/components/Tooltip";
import Projects from "@/components/Projects";

import { Link } from "react-router-dom";
import Twemoji from "@/components/Twemoji";

const STEP = 10;

const Home = () => {
    const { repos, loadMoreRepos } = useRepos(STEP);
    const [infiniteEnabled, setInfiniteEnabled] = useState<boolean>(false);

    // infinite scroll to keep loading repos
    useEffect(() => {
        const onScroll = () => {
            const { scrollHeight, scrollTop, clientHeight } =
                document.documentElement;

            if (
                scrollTop + clientHeight > scrollHeight - 5 &&
                infiniteEnabled
            ) {
                loadMoreRepos();
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [infiniteEnabled]);

    return (
        <>
            <Header />
            <PageContent>
                <div className="flex gap-3 w-20 h-20 relative rounded-md border overflow-hidden select-none">
                    <img
                        draggable={false}
                        src="/logo.png"
                        className="object-cover w-full h-full hover:opacity-0 transition-opacity"
                    />
                    <img
                        draggable={false}
                        src="/me.jpg"
                        className="object-cover w-full h-full absolute -z-10"
                    />
                </div>
                <H $mtLarge>Nathan Pham</H>

                <P $mt>Programmer, designer, farmer, leader.</P>

                <P $mt>
                    Over the summer I interned with{" "}
                    <A href="https://www.arubanetworks.com/">HPE Aruba</A> and{" "}
                    <A href="https://www.csus.edu/center/center-california-studies/legischool-project.html">
                        LegiSchool
                    </A>
                    .
                </P>

                <P $mt>
                    Experimenting with machine learning <Twemoji emoji="🤖" />,
                    game development, and 3D. Currently using Typescript, Java,
                    and Python <Twemoji emoji="🐍" />, but attempting to learn
                    Rust <Twemoji emoji="🦀" />. Focused on building apps that
                    shine with React, Next.js and Tailwind.
                </P>

                <P $mt>
                    Listening to{" "}
                    <A href="https://www.youtube.com/playlist?list=PLmzoY5mF73HsrCann9U0DN0xelmEyPOrb">
                        Lo-Fi
                    </A>
                    .
                </P>

                <Button $mt $as={Link} to="/resume">
                    See resume <FiArrowUpRight className="icon icon-button" />
                </Button>

                <H $as="h2" $mtLarge>
                    Curated Projects
                </H>
                <P $mt>The more important list of projects.</P>

                <div className="flex items-center gap-2 mt-6">
                    <H $as="h2">Projects</H>
                    <Tooltip text="Yes, all of these projects are mine." />
                </div>

                <P $mt>
                    A near infinite list of all of my projects, sorted by last
                    updated.
                </P>

                <Projects repos={repos} skeletonCount={STEP} />
                {!infiniteEnabled && (
                    <Button $mt onClick={() => setInfiniteEnabled(true)}>
                        Load infinite projects <FiSmile className="icon" />
                    </Button>
                )}
                <Footer />
            </PageContent>
        </>
    );
};

export default Home;
