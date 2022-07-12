import { Command } from "@/Commands";
import { Link } from "react-router-dom";

import tw from "tailwind-styled-components";

type CommandBarProps = Command & {
    setActiveCommand: Function;
};

const CommandBar = ({
    icon,
    href,
    name,
    setActiveCommand,
}: CommandBarProps) => {
    const props = {};

    if (href.startsWith("/")) {
        Object.assign(props, {
            to: href,
        });
    } else {
        Object.assign(props, {
            $as: "a",
            href,
            target: "_blank",
            rel: "noopener noreferrer",
        });
    }

    return (
        <CommandBarLink
            {...props}
            onMouseOver={(e: MouseEvent) => {
                setActiveCommand(e.target);
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
