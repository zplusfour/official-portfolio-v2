import twemoji from "twemoji";

interface TwemojiProps {
    emoji: string;
}

const Twemoji = ({ emoji }: TwemojiProps) => (
    <span
        dangerouslySetInnerHTML={{
            __html: twemoji.parse(emoji, {
                folder: "svg",
                ext: ".svg",
            }),
        }}
    ></span>
);

export default Twemoji;
