"use client";
import { motion } from "framer-motion";

type Props = {
    children: React.ReactNode;
};

export default function Reveal({ children }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 5, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            {children}
        </motion.div>
    );
}
