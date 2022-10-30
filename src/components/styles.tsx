import { RoughNotation } from "react-rough-notation";

import tw from "tailwind-styled-components";

interface MarginProps {
    $mt?: boolean;
    $mtLarge?: boolean;
}

export const PageContent = tw.main`
    mt-36 mx-auto
    max-w-2xl w-full px-5
`;

// cannot reuse margin styles because "styled-components".css is not supported
const PrivateH = tw.h1`
    font-semibold text-lg
    
    ${({ $mt }: MarginProps) => $mt && "mt-3"}
    ${({ $mtLarge }: MarginProps) => $mtLarge && "mt-6"}
`;

export const H = ({ children, ...props }: any) => {
    return (
        <PrivateH {...props}>
            <RoughNotation type="highlight" color="rgb(254, 240, 138)" show>
                {children}
            </RoughNotation>
        </PrivateH>
    );
};

export const P = tw.p`
    text-gray-600
    
    ${({ $mt }: MarginProps) => $mt && "mt-3"}
    ${({ $mtLarge }: MarginProps) => $mtLarge && "mt-6"}
`;

export const Ul = tw.ul`
    list-disc ml-4 leading-relaxed text-gray-600
    
    ${({ $mt }: MarginProps) => $mt && "mt-3"}
    ${({ $mtLarge }: MarginProps) => $mtLarge && "mt-6"}
`;

export const Button = tw.button`
    flex items-center gap-2
    py-1 px-2 w-fit
    border rounded-md shadow-md
    hover:border-gray-300
    text-gray-800
    font-semibold
    group
    transition-colors
    hover:text-black
    bg-white

    ${({ $mt }: MarginProps) => $mt && "mt-3"}
    ${({ $mtLarge }: MarginProps) => $mtLarge && "mt-6"}
`;

const PrivateA = tw.a`
    relative
`;

export const A = ({ children, href }: any) => (
    <PrivateA href={href} target="_blank" rel="noopener noreferrer">
        <RoughNotation type="underline" color="#447bff" show strokeWidth={2}>
            {children}
        </RoughNotation>
    </PrivateA>
);
