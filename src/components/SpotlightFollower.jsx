import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const SpotlightFollower = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 700 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-screen hidden md:block" // Hidden on mobile for performance
            style={{
                x: springX,
                y: springY,
                translateX: '-50%',
                translateY: '-50%'
            }}
        >
            {/* The Light */}
            <div className="w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(255,69,0,0.08)_0%,rgba(0,0,0,0)_70%)] rounded-full blur-3xl"></div>
        </motion.div>
    );
};

export default SpotlightFollower;
