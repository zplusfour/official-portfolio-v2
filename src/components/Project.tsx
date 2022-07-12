import { Repo } from "@/hooks/useRepos";

interface ProjectProps {
    repo: Repo;
}

const formatDate = (date: string) =>
    new Date(date).toLocaleString("default", {
        month: "long",
        year: "numeric",
    });

const Project = ({ repo }: ProjectProps) => {
    const createdAt = formatDate(repo.created_at);
    const updatedAt = formatDate(repo.updated_at);

    const date =
        createdAt == updatedAt ? createdAt : `${createdAt} - ${updatedAt}`;

    return (
        <a
            href={repo.homepage || repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-3"
        >
            <div
                key={repo.name}
                className="border p-4 rounded-lg hover:bg-gray-100 transition-colors"
            >
                <h3 className="font-semibold">{repo.name}</h3>
                <p className="max-w-md">{repo.description}</p>
                <p className="text-sm mt-2 text-gray-600">{date}</p>
            </div>
        </a>
    );
};

export default Project;
