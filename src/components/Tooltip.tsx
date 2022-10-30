import { FiInfo } from "react-icons/fi";

interface TooltipProps {
    text: string;
}

const Tooltip = ({ text }: TooltipProps) => (
    <div className="relative flex items-center cursor-pointer group bg-white">
        <FiInfo />
        <span className="bg-black rounded-sm text-sm px-1 text-white translate-x-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:translate-x-6 transition-all absolute whitespace-nowrap">
            {text}
        </span>
    </div>
);

export default Tooltip;
