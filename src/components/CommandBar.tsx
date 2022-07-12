import { Command } from "@/data/commands";
import { Link } from "react-router-dom";

import tw from "tailwind-styled-components";
import useStore from "@/hooks/useStore";

type CommandBarProps = Command & {
    setActiveCommand: (target: HTMLElement) => void;
};

const CommandBar = ({
    icon,
    href,
    name,
    setActiveCommand,
}: CommandBarProps) => {
    const setCommandsOpen = useStore((state) => state.setCommandsOpen);
    const props = {};

    if (href.startsWith("/")) {
        Object.assign(props, {
            to: href,
        });
    } else {
        Object.assign(props, {
            $as: "a",
            href: href.startsWith("http") ? href : `https://${href}`,
            target: "_blank",
            rel: "noopener noreferrer",
        });
    }

    return (
        <CommandBarLink
            {...props}
            id={`command${name}`}
            onMouseOver={(e: MouseEvent) => {
                setActiveCommand(e.target as HTMLElement);
            }}
            onClick={() => {
                setCommandsOpen(false);
            }}
        >
            {icon} {name}
        </CommandBarLink>
    );
};

export default CommandBar;

export const CommandBarLink = tw(Link)`
    flex items-center gap-3
    rounded-md
    p-3
    text-gray-500
    hover:text-black
    transition-colors
`;
