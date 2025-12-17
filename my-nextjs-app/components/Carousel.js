'use client';

import React, { useState, useEffect, useRef } from 'react';
import useScrollFadeIn from '../hooks/useScrollFadeIn';

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0); // Start at beginning of middle set
    const { ref, isVisible } = useScrollFadeIn();
    const transitionRef = useRef(null);
    
    // Array of 15 images
    const images = Array.from({ length: 15 }, (_, i) => ({
        id: i + 1,
        src: `/image${i + 1}.jpg`,
        alt: `Photo ${i + 1}`
    }));

    // Triple the images for seamless infinite loop
    const extendedImages = [...images, ...images, ...images];

    // Auto-rotate every 4 seconds - advance by 4 images
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => prevIndex + 4);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    // Handle seamless loop reset
    const handleTransitionEnd = () => {
        // If we've scrolled past the first set (index 15+), reset to beginning
        if (currentIndex >= images.length) {
            if (transitionRef.current) {
                transitionRef.current.style.transition = 'none';
            }
            setCurrentIndex(currentIndex % images.length);
            setTimeout(() => {
                if (transitionRef.current) {
                    transitionRef.current.style.transition = 'transform 1000ms ease-in-out';
                }
            }, 50);
        }
    };

    return (
        <div ref={ref} className={`w-full py-4 md:py-8 overflow-hidden transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="w-full overflow-hidden">
                <div 
                    ref={transitionRef}
                    className="flex gap-1 md:gap-2"
                    style={{ 
                        transform: `translateX(calc(-${currentIndex * 25}% - ${currentIndex * 0.0625}rem))`,
                        transition: 'transform 1000ms ease-in-out'
                    }}
                    onTransitionEnd={handleTransitionEnd}
                >
                    {extendedImages.map((image, index) => (
                        <div
                            key={`${image.id}-${index}`}
                            className="relative aspect-[1/2] md:aspect-[3/4] overflow-hidden shadow-lg flex-shrink-0"
                            style={{ width: 'calc(25% - 0.1875rem)' }}
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