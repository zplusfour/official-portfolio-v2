import {
    FaEdge,
    FaFigma,
    FaGithub,
    FaTwitter,
    FaWindows,
} from "react-icons/fa";

import { SiVisualstudiocode } from "react-icons/si";

export interface Tool {
    icon: React.ReactNode;
    href: string;
    name: string;
    description: string;
}

const tools: Tool[] = [
    {
        icon: <SiVisualstudiocode />,
        href: "https://code.visualstudio.com/",
        name: "Visual Studio Code",
        description:
            "The workshop - where all code is forged! Filled with dozens of extensions and themes that make my life easier.",
    },
    {
        icon: <FaEdge />,
        href: "https://www.microsoft.com/en-us/edge?r=1",
        name: "Microsoft Edge",
        description:
            "I literally got too lazy to download something else and it's Chromium based so whatever.",
    },
    {
        icon: <FaFigma />,
        href: "https://www.figma.com/",
        name: "Figma",
        description:
            "Primary tool for designing graphics and layouts. Possibly the most important step in the development process.",
    },
    {
        icon: <FaGithub />,
        href: "https://github.com/nathan-pham",
        name: "Github",
        description:
            "Hosts all of my project source code and tracks my changes and contributions.",
    },
    {
        icon: <FaWindows />,
        href: "https://www.microsoft.com/en-us/windows/",
        name: "Windows 11",
        description:
            "Default operating system on my Dell laptop. It gets the job done and doesn't cost a significant premium like Apple.",
    },
    {
        icon: <FaTwitter />,
        href: "https://twitter.com/phamn23",
        name: "Twitter",
        description:
            "Great place to look for inspiration (or humble myself). Unfortunately I have no friends on Twitter...",
    },
];

export default tools;
