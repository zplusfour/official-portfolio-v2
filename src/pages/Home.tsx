import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PageContent, Button, H, P } from "@/components/styles";
import { FiArrowUpRight } from "react-icons/fi";

import useRepos from "@/hooks/useRepos";
import { useEffect } from "react";

import Tooltip from "@/components/Tooltip";
import Projects from "@/components/Projects";

import { Link } from "react-router-dom";

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

                <P className="mt-6">
                    Mathematician, designer, farmer, student. Engineer would be
                    stretching the titles a bit. Focused on creating beautiful
                    and functional apps.
                </P>

                <P className="mt-3">
                    Experimenting with machine learning, game development, and
                    3D. Currently using Typescript, Java, and Python, but
                    attempting to learn Rust. Building products with React,
                    Next.js and Tailwind.
                </P>

                <P className="mt-3">Listening to Lo-Fi.</P>

                <Button className="mt-3" $as={Link} to="/resume">
                    See resume{" "}
                    <FiArrowUpRight className="icon group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Button>

                <div className="flex items-center gap-2 mt-6">
                    <H $as="h2">Projects</H>
                    <Tooltip text="Yes, these are all mine." />
                </div>

                <Projects repos={repos} skeletonCount={STEP} />

                <Footer />
            </PageContent>
        </>
    );
};

export default Home;
