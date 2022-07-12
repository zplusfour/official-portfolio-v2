import { FiCommand } from "react-icons/fi";
import useStore from "@/hooks/useStore";
import tw from "tailwind-styled-components";

interface CommandKeyProps {
    className?: string;
}

const CommandKey = ({ className }: CommandKeyProps) => {
    const setCommandsOpen = useStore((state) => state.setCommandsOpen);

    return (
        <CommandButton
            onClick={() => setCommandsOpen(true)}
            className={className}
        >
            <FiCommand />
        </CommandButton>
    );
};

export default CommandKey;

export const CommandButton = tw.button`
    h-9 w-9 grid place-items-center 
    rounded-md border pointer 
    bg-white 
    hover:border-gray-300 
    transition-colors
`;
