import HeaderSocial from "./HeaderSocial";
import CommandKey from "./CommandKey";

import commands from "@/data/commands";

const Header = () => {
    return (
        <header className="fixed left-1/2 -translate-x-1/2 top-3 max-w-2xl w-full px-5 z-20">
            <div className="flex items-center justify-between backdrop-blur-sm bg-opacity-50 bg-white border p-3 rounded-lg">
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
            </div>
        </header>
    );
};

export default Header;
