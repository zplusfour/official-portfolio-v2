interface HeaderSocialProps {
    src: string;
    icon: React.ReactNode;
}

const HeaderSocial = ({ src, icon }: HeaderSocialProps) => (
    <a
        href={src}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-black pointer"
    >
        {icon}
    </a>
);

export default HeaderSocial;
