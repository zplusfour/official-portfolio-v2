import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PageContent, Button, H, P } from "@/components/styles";
import { FiArrowUpRight } from "react-icons/fi";

import useRepos from "@/hooks/useRepos";
import { useEffect } from "react";

import Tooltip from "@/components/Tooltip";
import Projects from "@/components/Projects";

import { Link } from "react-router-dom";
import Twemoji from "@/components/Twemoji";

const STEP = 10;

const Home = () => {
    const { repos, loadMoreRepos } = useRepos(STEP);

    // infinite scroll to keep loading repos
    useEffect(() => {
        const onScroll = () => {
            const { scrollHeight, scrollTop, clientHeight } =
                document.documentElement;

            if (scrollTop + clientHeight > scrollHeight - 5) {
                loadMoreRepos();
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <Header />
            <PageContent>
                <div className="flex items-center gap-3">
                    <img src="/logo.png" className="w-9 h-9 rounded-full" />
                    <H>Nathan Pham</H>
                </div>

                <P $mtLarge>
                    Mathematician, designer, farmer, student. Engineer would be
                    stretching the titles a bit <Twemoji emoji="😅" />.
                </P>

                <P $mt>
                    Experimenting with machine learning <Twemoji emoji="🤖" />,
                    game development, and 3D. Currently using Typescript, Java,
                    and Python <Twemoji emoji="🐍" />, but attempting to learn
                    Rust <Twemoji emoji="🦀" />. Focused on building apps that
                    shine with React, Next.js and Tailwind.
                </P>

                <P $mt>Listening to Lo-Fi.</P>

                <Button $mt $as={Link} to="/resume">
                    See resume <FiArrowUpRight className="icon icon-button" />
                </Button>

                <H $as="h2" $mtLarge>
                    Awesome Projects
                </H>
                <P $mt>
                    Curated list of projects that showcase my interests and
                    skills.
                </P>

                <div className="flex items-center gap-2 mt-6">
                    <H $as="h2">Projects</H>
                    <Tooltip text="Yes, all of these projects are mine." />
                </div>

                <P $mt>
                    A near infinite list of all of my projects, sorted by last
                    updated.
                </P>

                <Projects repos={repos} skeletonCount={STEP} />

                <Footer />
            </PageContent>
        </>
    );
};

export default Home;
