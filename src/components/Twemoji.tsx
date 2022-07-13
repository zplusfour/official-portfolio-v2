import twemoji from "twemoji";
import { motion } from "framer-motion";

interface TwemojiProps {
    emoji: string;
}

const Twemoji = ({ emoji }: TwemojiProps) => (
    <motion.span
        drag
        whileHover={{ scale: 1.5 }}
        whileDrag={{ scale: 1.5 }}
        className="cursor-pointer inline-block z-50"
    >
        <span
            className="pointer-events-none"
            dangerouslySetInnerHTML={{
                __html: twemoji.parse(emoji, {
                    folder: "svg",
                    ext: ".svg",
                }),
            }}
        ></span>
    </motion.span>
);

export default Twemoji;
