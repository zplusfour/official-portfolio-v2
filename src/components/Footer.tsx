import { FiMail } from "react-icons/fi";
import ScrollTop from "@/components/ScrollTop";

const Footer = () => (
    <>
        <footer className="w-full flex justify-between py-3 mt-6 border-t text-gray-500">
            <span>Be all you can be.</span>
            <a
                href="mailto:nathanpham.me@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition-colors flex items-center gap-2"
            >
                <FiMail className="icon" />
                nathanpham.me@gmail.com
            </a>
        </footer>
        <ScrollTop />
    </>
);

export default Footer;
