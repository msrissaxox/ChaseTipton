'use client';

import React, { useState, useEffect } from 'react';
import useScrollFadeIn from '../hooks/useScrollFadeIn';

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { ref, isVisible } = useScrollFadeIn();
    
    // Array of 15 images
    const images = Array.from({ length: 15 }, (_, i) => ({
        id: i + 1,
        src: `/image${i + 1}.jpg`,
        alt: `Photo ${i + 1}`
    }));

    // Auto-rotate every 4 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                // Move to next set of 4 images
                const nextIndex = prevIndex + 4;
                if (nextIndex >= images.length) {
                    return 0;
                }
                return nextIndex;
            });
        }, 4000);

        return () => clearInterval(interval);
    }, [images.length]);

    // Get the 4 visible images
    const getVisibleImages = () => {
        const visible = [];
        for (let i = 0; i < 4; i++) {
            const index = (currentIndex + i) % images.length;
            visible.push(images[index]);
        }
        return visible;
    };

    return (
        <div ref={ref} className={`w-full py-4 md:py-8 overflow-hidden transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="w-full">
                <div className="grid grid-cols-4 gap-1 md:gap-2">
                    {getVisibleImages().map((image, index) => (
                        <div
                            key={`${image.id}-${index}`}
                            className="relative aspect-[1/2] md:aspect-[3/4] overflow-hidden shadow-lg transition-all duration-700 ease-in-out"
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}