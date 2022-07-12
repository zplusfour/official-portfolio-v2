import { useEffect, useState } from "react";

const GITHUB_API = "https://api.github.com/users/nathan-pham/repos";

const useRepos = (step: number = 30) => {
    const [repos, setRepos] = useState<Repos>([]);
    const [page, setPage] = useState<number>(1);

    const [fetchedAllRepos, setFetchedAllRepos] = useState<boolean>(false);
    const [maxRepos, setMaxRepos] = useState<number>(step);
    const maxReposPage = 100;

    const removeDuplicates = (repos: Repos) => {
        const newRepos: Repos = [];

        for (const repo of repos) {
            if (!newRepos.some((r) => r.name === repo.name)) {
                newRepos.push(repo);
            }
        }

        return newRepos;
    };

    const fetchRepos = async () => {
        if (fetchedAllRepos) {
            return;
        }

        const newRepos = await fetch(
            `${GITHUB_API}?sort=updated&per_page=${maxReposPage}&page=${page}`
        )
            .then((res) => res.json() || [])
            .catch(() => []);

        if (newRepos.length < maxRepos) {
            setFetchedAllRepos(true);
        }

        setRepos((oldRepos) =>
            removeDuplicates([...oldRepos, ...newRepos]).filter(
                (repo: Repo) =>
                    !repo.fork && repo.name.toLowerCase() === repo.name
            )
        );
    };

    const loadMore = () => {
        setMaxRepos((maxRepos) => maxRepos + step);
        if (maxRepos > repos.length && !fetchedAllRepos) {
            setPage((page) => page + 1);
        }
    };

    useEffect(() => {
        fetchRepos();
    }, [page]);

    return { repos: repos.slice(0, maxRepos), loadMoreRepos: loadMore };
};

export default useRepos;

// types
export interface Repo {
    html_url: string;
    fork: boolean;
    name: string;
    description: string;
    homepage: string;
    created_at: string;
    updated_at: string;
}

export type Repos = Repo[];
