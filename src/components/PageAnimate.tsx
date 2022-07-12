import { motion } from "framer-motion";

interface PageAnimateProps {
    children: React.ReactNode;
}

const PageAnimate = ({ children }: PageAnimateProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
        >
            {children}
        </motion.div>
    );
};

export default PageAnimate;
