import React from 'react';
import './Happy2026Animation.css';

const Happy2026Animation = () => {
    return (
        <div className="happy-2026-animation">
            {/* Main text container */}
            <div className="new-year-container">
                {/* HAPPY text above */}
                <div className="happy-text">HAPPY</div>
                
                {/* New Year main text */}
                <div className="new-year-text-wrapper">
                    {/* Main "New Year" text */}
                    <div className="new-year-text">
                        <div className="new-year-script-wrapper">
                            <div className="new-year-script">New Year</div>
                            {/* Fireworks after New Year */}
                            <div className="fireworks fireworks-after-newyear">
                                <div className="firework firework-3">
                                    {[...Array(16)].map((_, i) => (
                                        <div key={i} className="firework-particle" style={{
                                            '--rotation': `${i * 22.5}deg`,
                                            animationDelay: `${i * 0.03}s`
                                        }}></div>
                                    ))}
                                </div>
                                <div className="firework firework-4">
                                    {[...Array(16)].map((_, i) => (
                                        <div key={i} className="firework-particle" style={{
                                            '--rotation': `${i * 22.5}deg`,
                                            animationDelay: `${0.5 + i * 0.03}s`
                                        }}></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="year-number-wrapper">
                            <div className="year-number">2026</div>
                            {/* Fireworks near 2026 */}
                            <div className="fireworks">
                                <div className="firework firework-1">
                                    {[...Array(16)].map((_, i) => (
                                        <div key={i} className="firework-particle" style={{
                                            '--rotation': `${i * 22.5}deg`,
                                            animationDelay: `${i * 0.03}s`
                                        }}></div>
                                    ))}
                                </div>
                                <div className="firework firework-2">
                                    {[...Array(16)].map((_, i) => (
                                        <div key={i} className="firework-particle" style={{
                                            '--rotation': `${i * 22.5}deg`,
                                            animationDelay: `${0.6 + i * 0.03}s`
                                        }}></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Happy2026Animation;

