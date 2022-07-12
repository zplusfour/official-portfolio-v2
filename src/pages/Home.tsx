import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Project from "@/components/Project";
import { PageContent, H, P } from "@/components/styles";
import { FiInfo } from "react-icons/fi";

import useRepos from "@/hooks/useRepos";
import { useEffect } from "react";

import CommandsModal from "@/components/CommandsModal";

const Home = () => {
    const { repos, loadMoreRepos } = useRepos();

    useEffect(() => {
        // infinite scroll to keep loading repos
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
            <CommandsModal />
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

                <div className="flex items-center gap-2 mt-6">
                    <H $as="h2">Projects</H>
                    <div className="relative flex items-center cursor-pointer group">
                        <FiInfo />
                        <span className="bg-black rounded-sm text-sm px-1 text-white translate-x-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:translate-x-6 transition-all absolute whitespace-nowrap">
                            Yes, all of these are mine.
                        </span>
                    </div>
                </div>

                {repos.map((repo) => (
                    <Project key={repo.name} repo={repo} />
                ))}
                <Footer />
            </PageContent>
        </>
    );
};

export default Home;
