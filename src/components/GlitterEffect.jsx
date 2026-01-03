import React, { useEffect, useRef } from 'react';
import './GlitterEffect.css';

const GlitterEffect = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const colors = ['#FFD700', '#FFA500', '#FF6347', '#FF1493', '#00CED1', '#32CD32', '#FF69B4', '#FF4500'];
        const glitterCount = 15;

        const createGlitter = () => {
            const glitter = document.createElement('div');
            glitter.className = 'glitter-particle';
            
            const size = Math.random() * 3 + 2;
            const color = colors[Math.floor(Math.random() * colors.length)];
            const startX = Math.random() * window.innerWidth;
            const startY = Math.random() * window.innerHeight;
            const duration = Math.random() * 4 + 3;
            const delay = Math.random() * 2;
            const rotation = Math.random() * 360;

            glitter.style.width = `${size}px`;
            glitter.style.height = `${size}px`;
            glitter.style.backgroundColor = color;
            glitter.style.left = `${startX}px`;
            glitter.style.top = `${startY}px`;
            glitter.style.animationDuration = `${duration}s`;
            glitter.style.animationDelay = `${delay}s`;
            glitter.style.transform = `rotate(${rotation}deg)`;
            glitter.style.boxShadow = `0 0 ${size * 1.5}px ${color}`;

            container.appendChild(glitter);

            // Remove glitter after animation
            setTimeout(() => {
                if (glitter.parentNode) {
                    glitter.parentNode.removeChild(glitter);
                }
            }, (duration + delay) * 1000);
        };

        // Create initial glitters
        for (let i = 0; i < glitterCount; i++) {
            setTimeout(() => createGlitter(), i * 300);
        }

        // Continuously create new glitters (less frequently)
        const interval = setInterval(() => {
            createGlitter();
        }, 1500);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="glitter-container"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 1,
                overflow: 'hidden'
            }}
        />
    );
};

export default GlitterEffect;

