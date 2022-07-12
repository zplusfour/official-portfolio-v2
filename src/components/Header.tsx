import HeaderSocial from "./HeaderSocial";
import CommandKey from "./CommandKey";

import commands from "@/data/commands";

const Header = () => {
    return (
        <header className="fixed left-1/2 -translate-x-1/2 top-3 max-w-xl w-full p-3 rounded-lg flex items-center justify-between backdrop-blur-sm bg-opacity-10 bg-gray-500 z-20">
            <CommandKey />
            <div className="flex gap-3 text-gray-600">
                {commands.Socials.slice(0, 2).map((props) => (
                    <HeaderSocial
                        href={props.href}
                        icon={props.icon}
                        key={props.name}
                    />
                ))}
            </div>
        </header>
    );
};

export default Header;
