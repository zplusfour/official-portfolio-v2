import {
    FiArrowRight,
    FiAlertTriangle,
    FiLink,
    FiDribbble,
    FiTwitter,
    FiGithub,
} from "react-icons/fi";

import { SiNotion } from "react-icons/si";

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
        createCommand(<FiArrowRight />, "/tools", "Tools"),
        createCommand(<FiArrowRight />, "/resume", "Resume"),
    ],
    Socials: [
        createCommand(<FiTwitter />, "https://twitter.com/phamn23", "Twitter"),
        createCommand(<FiGithub />, "https://github.com/nathan-pham", "Github"),
        createCommand(
            <FiDribbble />,
            "https://dribbble.com/nathan-pham",
            "Dribbble"
        ),
        createCommand(<FiLink />, "https://dev.to/phamn23", "Dev.to"),
        createCommand(<FiLink />, "https://discord.gg/7VfXs3B4z4", "Discord"),
    ],
    Other: [
        createCommand(
            <SiNotion />,
            "https://phamn23.notion.site/Programming-Notes-9bd717055867453ab631dab0a1ce2604",
            "Notion Notes"
        ),
    ],
};

export default commands;

export const commandsFlattened = Object.entries(commands)
    .map(([_, commandValue]) => commandValue)
    .flat(Infinity);

export const defaultCommand = (commandsFlattened[0] as Command).name;
