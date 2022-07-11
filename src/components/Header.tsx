import { FiCommand, FiTwitter, FiGithub } from "react-icons/fi";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
    return (
        <header className="fixed left-1/2 -translate-x-1/2 top-4 max-w-xl w-full p-3 rounded-lg flex items-center justify-between bg-gray-100">
            <button className="bg-white h-9 w-9 grid place-items-center rounded-md border pointer">
                <FiCommand />
            </button>

            <div className="flex gap-3 text-gray-500">
                <HeaderSocial
                    src="https://twitter.com/phamn23"
                    icon={<FiTwitter />}
                />
                <HeaderSocial
                    src="https://github.com/nathan-pham"
                    icon={<FiGithub />}
                />
            </div>
        </header>
    );
};

export default Header;
