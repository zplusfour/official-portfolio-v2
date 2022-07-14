import { FiChevronUp } from "react-icons/fi";
import { CommandButton } from "@/components/CommandKey";

const ScrollTop = () => (
    <CommandButton
        className="fixed bottom-3 right-5 shadow-lg"
        onClick={() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }}
    >
        <FiChevronUp />
    </CommandButton>
);

export default ScrollTop;
