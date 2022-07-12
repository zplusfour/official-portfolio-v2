interface HeaderSocialProps {
    href: string;
    icon: React.ReactNode;
}

const HeaderSocial = ({ href, icon }: HeaderSocialProps) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-black pointer"
    >
        {icon}
    </a>
);

export default HeaderSocial;
