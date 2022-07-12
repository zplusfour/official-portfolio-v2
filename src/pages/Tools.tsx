import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PageContent, H, P } from "@/components/styles";

import tools from "@/data/tools";
import Tool from "@/components/Tool";

const Tools = () => {
    return (
        <>
            <Header />
            <PageContent>
                <H $as="h2">Tools</H>
                <P className="mt-3">
                    I use this list of apps and technolgies daily to learn new
                    skills and finish projects.
                </P>
                <div className="mt-6">
                    {tools.map((tool, i) => (
                        <Tool {...tool} lastChild={i == tools.length - 1} />
                    ))}
                </div>
                <Footer />
            </PageContent>
        </>
    );
};

export default Tools;
