import { FiCommand } from "react-icons/fi";
import useStore from "@/hooks/useStore";

const CommandKey = () => {
    const setCommandsOpen = useStore((state) => state.setCommandsOpen);

    return (
        <button
            className="bg-white h-9 w-9 grid place-items-center rounded-md border pointer"
            onClick={() => setCommandsOpen(true)}
        >
            <FiCommand />
        </button>
    );
};

export default CommandKey;
