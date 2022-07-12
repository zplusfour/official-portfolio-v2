import tw from "tailwind-styled-components";

export const PageContent = tw.main`
    mt-36 mx-auto
    max-w-xl w-full
`;

export const H = tw.h1`
    font-semibold text-lg
`;

export const P = tw.p`
    leading-snug text-gray-600
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
`;
