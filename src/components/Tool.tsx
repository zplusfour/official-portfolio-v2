import { Tool as ToolProps } from "@/data/tools";
import { H, P } from "@/components/styles";

const Tool = ({
    href,
    icon,
    name,
    description,
    lastChild,
}: ToolProps & { lastChild: boolean }) => (
    <>
        <a
            className="hover:bg-gray-100 transition-colors flex items-center gap-6 p-3 rounded-lg"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
        >
            <span className="text-2xl">{icon}</span>
            <div>
                <H className="text-base font-medium">{name}</H>
                <P className="text-sm text-gray-500 leading-snug">
                    {description}
                </P>
            </div>
        </a>
        {!lastChild && <hr className="my-2 ml-[3.75rem] max-w-full" />}
    </>
);

export default Tool;
