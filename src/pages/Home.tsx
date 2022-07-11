import Header from "@/components/Header";
import { PageContent, Heading } from "@/components/styles";
import Project from "@/components/Project";
import useRepos from "@/hooks/useRepos";

const Home = () => {
    const repos = useRepos();

    return (
        <>
            <Header />
            <PageContent>
                <div className="flex items-center gap-3">
                    <img src="/logo.png" className="w-9 h-9 rounded-full" />
                    <Heading>Nathan Pham</Heading>
                </div>

                <div className="leading-snug mt-6 text-gray-600">
                    <p>
                        Mathematician, designer, farmer, student. Engineer would
                        be stretching the titles a bit. Focused on creating
                        beautiful and functional apps.
                    </p>

                    <p className="mt-2">
                        Experimenting with machine learning and 3D. Currently
                        using Typescript, Java, and Python, but attempting to
                        learn Rust. Building products with React, Next.js and
                        Tailwind.
                    </p>

                    <p className="mt-2">Listening to Lo-Fi.</p>
                </div>

                <Heading $as="h2" className="mt-6">
                    Projects
                </Heading>

                {repos.map((repo) => (
                    <Project key={repo.name} repo={repo} />
                ))}
            </PageContent>
        </>
    );
};

export default Home;
