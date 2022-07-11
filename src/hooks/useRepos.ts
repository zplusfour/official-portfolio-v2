import { useEffect, useState } from "react";

const GITHUB_API = "https://api.github.com/users/nathan-pham/repos";

const useRepos = () => {
    const [repos, setRepos] = useState<Repos>([]);

    useEffect(() => {
        (async () => {
            const allRepos = await Promise.all(
                new Array(8)
                    .fill(0)
                    .map((_, i) =>
                        fetch(`${GITHUB_API}?per_page=100&page=${i + 1}`).then(
                            (res) => res.json()
                        )
                    )
            );

            setRepos(
                allRepos
                    .flat(Infinity)
                    .filter(
                        (repo: Repo) =>
                            !repo.fork && repo.name.toLowerCase() === repo.name
                    )
                    .sort(
                        (a, b) =>
                            new Date(b.updated_at).getTime() -
                            new Date(a.updated_at).getTime()
                    )
            );
        })();
    }, []);

    return repos;
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
