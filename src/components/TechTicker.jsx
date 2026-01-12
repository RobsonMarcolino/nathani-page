import React from 'react';
import { BarChart2, Flame, Target } from 'lucide-react';

// Custom SVG Icons for brands not in Lucide or needing exact shapes
const MetaLogo = () => (
    <svg viewBox="0 0 16 16" fill="currentColor" className="w-8 h-8">
        <path d="M8.217 5.243C9.145 3.988 10.171 3 11.483 3 13.96 3 16 6.153 16.001 9.907c0 2.29-.986 3.725-2.757 3.725-1.543 0-2.395-.866-3.924-3.424l-.667-1.123-.118-.197a55 55 0 0 0-.53-.877l-1.178 2.08c-1.673 2.925-2.615 3.541-3.923 3.541C1.086 13.632 0 12.217 0 9.973 0 6.388 1.995 3 4.598 3q.477-.001.924.122c.31.086.611.22.913.407.577.359 1.154.915 1.782 1.714m1.516 2.224q-.378-.615-.727-1.133L9 6.326c.845-1.305 1.543-1.954 2.372-1.954 1.723 0 3.102 2.537 3.102 5.653 0 1.188-.39 1.877-1.195 1.877-.773 0-1.142-.51-2.61-2.87zM4.846 4.756c.725.1 1.385.634 2.34 2.001A212 212 0 0 0 5.551 9.3c-1.357 2.126-1.826 2.603-2.581 2.603-.777 0-1.24-.682-1.24-1.9 0-2.602 1.298-5.264 2.846-5.264q.137 0 .27.018" />
    </svg>
);

const TikTokLogo = () => (
    <svg viewBox="0 0 16 16" fill="currentColor" className="w-8 h-8">
        <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
    </svg>
);

const LinkedInLogo = () => (
    <svg viewBox="0 0 16 16" fill="currentColor" className="w-8 h-8">
        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
    </svg>
);

const RDStationLogo = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm5.111 14.896c-.461 1.704-2.148 2.502-4.062 2.502-1.917 0-3.585-.828-4.04-2.527-.042-.143-.067-.291-.067-.442 0-.964.672-1.802 1.583-2.11v-1.76c-.911-.308-1.583-1.146-1.583-2.11 0-.151.025-.3.067-.441.455-1.699 2.123-2.528 4.04-2.528 1.914 0 3.601.798 4.062 2.502.042.143.067.291.067.442 0 .964-.672 1.802-1.583 2.11v1.76c.911.308 1.583 1.146 1.583 2.11 0 .151-.025.3-.067.441zM12 7.215c-1.127 0-2.048.497-2.048 1.109s.921 1.109 2.048 1.109 2.048-.497 2.048-1.109-.921-1.109-2.048-1.109zm0 8.012c-1.127 0-2.048.497-2.048 1.109s.921 1.109 2.048 1.109 2.048-.497 2.048-1.109-.921-1.109-2.048-1.109z" />
    </svg>
);

const partners = [
    { name: "Google Ads", icon: Target },
    { name: "Meta", component: MetaLogo },
    { name: "TikTok", component: TikTokLogo },
    { name: "LinkedIn", component: LinkedInLogo },
    { name: "Google Analytics", icon: BarChart2 },
    { name: "Hotmart", icon: Flame },
    { name: "RD Station", component: RDStationLogo }
];

const TechTicker = () => {
    return (
        <section className="bg-secondary/95 border-y border-white/5 py-8 overflow-hidden relative z-20 backdrop-blur-sm">
            <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
            <div className="flex animate-marquee whitespace-nowrap">
                {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
                    <div key={index} className="mx-6 md:mx-12 flex items-center justify-center opacity-40 hover:opacity-100 transition-all duration-300 cursor-default grayscale group">
                        {partner.component ? (
                            <div className="text-white group-hover:text-primary transition-colors">
                                <partner.component />
                            </div>
                        ) : (
                            <partner.icon size={24} className="text-white group-hover:text-primary transition-colors md:w-8 md:h-8" />
                        )}
                    </div>
                ))}
            </div>

            <style jsx>{`
                .animate-marquee {
                    animation: marquee 40s linear infinite;
                }
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>
        </section>
    );
};

export default TechTicker;
