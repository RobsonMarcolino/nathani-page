import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const TechBackground = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, 500]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -500]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 0.3, 0.6]);

    return (
        <div ref={ref} className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-secondary">
            {/* Grid Pattern with Parallax */}
            <motion.div
                style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
                className="absolute inset-0 opacity-[0.05]"
            >
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                        backgroundSize: '60px 60px'
                    }}
                />
            </motion.div>

            {/* Glowing Gradient Orbs - Primary (Top Right) */}
            <motion.div
                style={{ y: y2, opacity }}
                className="absolute -top-[10%] -right-[10%] w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px]"
            />

            {/* Glowing Gradient Orbs - Accent (Bottom Left) */}
            <motion.div
                style={{ y: y1, opacity }}
                className="absolute -bottom-[10%] -left-[10%] w-[900px] h-[900px] bg-accent/15 rounded-full blur-[150px]"
            />

            {/* Additional Detail Elements for Parallax Depth */}
            <motion.div
                style={{ y: useTransform(scrollYProgress, [0, 1], [0, -200]) }}
                className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary rounded-full blur-sm opacity-20"
            />
            <motion.div
                style={{ y: useTransform(scrollYProgress, [0, 1], [0, 300]) }}
                className="absolute bottom-1/3 right-1/4 w-8 h-8 bg-accent rounded-full blur-md opacity-20"
            />
        </div>
    );
};

export default TechBackground;
