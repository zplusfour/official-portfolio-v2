import { Repos as ReposArray } from "@/hooks/useRepos";
import { AnimatePresence, motion } from "framer-motion";

import ProjectSkeleton from "./ProjectSkeleton";
import Project from "./Project";

interface ReposProps {
    repos: ReposArray;
    skeletonCount: number;
}

const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
};

const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
};

const Projects = ({ repos, skeletonCount }: ReposProps) => (
    <AnimatePresence>
        <motion.div
            key="animateRepos"
            variants={container}
            initial="hidden"
            animate="show"
            exit="hidden"
        >
            {repos.length == 0
                ? new Array(skeletonCount).fill(0).map((_, i) => (
                      <motion.div key={`skeleton-${i}`} variants={item}>
                          <ProjectSkeleton />
                      </motion.div>
                  ))
                : repos.map((repo) => (
                      <motion.div key={repo.name} variants={item}>
                          <Project repo={repo} />
                      </motion.div>
                  ))}
        </motion.div>
    </AnimatePresence>
);

export default Projects;
