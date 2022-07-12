import { FiArrowRight, FiDribbble, FiTwitter, FiGithub } from "react-icons/fi";
import { FaDiscord, FaDev } from "react-icons/fa";

export interface Command {
    icon: React.ReactNode;
    href: string;
    name: string;
}

const createCommand = (
    icon: Command["icon"],
    href: Command["href"],
    name: Command["name"]
) => ({ icon, href, name });

const commands: Record<string, Command[]> = {
    Navigation: [
        createCommand(<FiArrowRight />, "/", "Home"),
        createCommand(<FiArrowRight />, "/", "Writing"),
        createCommand(<FiArrowRight />, "/", "Tools"),
    ],
    Socials: [
        createCommand(<FiTwitter />, "https://twitter.com/phamn23", "Twitter"),
        createCommand(<FiGithub />, "https://github.com/nathan-pham", "Github"),
        createCommand(
            <FiDribbble />,
            "https://dribbble.com/nathan-pham",
            "Dribbble"
        ),
    ],
};

export default commands;

export const commandsFlattened = Object.entries(commands)
    .map(([_, commandValue]) => commandValue)
    .flat(Infinity);

export const defaultCommand = (commandsFlattened[0] as Command).name;
