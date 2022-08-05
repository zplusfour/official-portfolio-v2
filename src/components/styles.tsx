import tw from "tailwind-styled-components";

interface MarginProps {
    $mt?: boolean;
    $mtLarge?: boolean;
}

export const PageContent = tw.main`
    mt-36 mx-auto
    max-w-2xl w-full px-5
`;

export const H = tw.h1`
    font-semibold text-lg
    
    ${({ $mt }: MarginProps) => $mt && "mt-3"}
    ${({ $mtLarge }: MarginProps) => $mtLarge && "mt-6"}
`; //cannot reuse margin styles because "styled-components".css is not supported

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

    ${({ $mt }: MarginProps) => $mt && "mt-3"}
    ${({ $mtLarge }: MarginProps) => $mtLarge && "mt-6"}
`;

const PrivateA = tw.a`
    relative
    text-yellow-500
    before:content-[""]
    before:w-0 before:h-[0.1rem] before:bg-yellow-500
    before:absolute before:bottom-0 before:left-0
    hover:before:w-full
    before:transition-all
`;

export const A = ({ children, href }: any) => (
    <PrivateA href={href} target="_blank" rel="noopener noreferrer">
        {children}
    </PrivateA>
);
