import React from 'react';

const SectionDivider = () => {
    return (
        <div className="relative py-8 flex items-center justify-center overflow-hidden">
            {/* Main Gradient Line */}
            <div className="absolute w-[80%] max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

            {/* Center "Gem" Effect */}
            <div className="relative z-10 w-3 h-3 rotate-45 bg-primary/20 border border-primary/50 shadow-[0_0_10px_rgba(255,69,0,0.5)] flex items-center justify-center">
                <div className="w-1 h-1 bg-primary rounded-full shadow-[0_0_5px_#ff4500]"></div>
            </div>

            {/* Secondary lines for "Tech" feel */}
            <div className="absolute w-[40%] max-w-lg h-[1px] mt-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent blur-[1px]"></div>
        </div>
    );
};

export default SectionDivider;
