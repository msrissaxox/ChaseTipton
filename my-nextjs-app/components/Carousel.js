//NEED TO UPDATE THE ALTS FOR ALL THESE IMAges

'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image'; // 1. Import the Next.js Image component
import useScrollFadeIn from '../hooks/useScrollFadeIn';

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0); // Start at beginning of middle set
    const [isPaused, setIsPaused] = useState(false);
    const [zoomedImage, setZoomedImage] = useState(null);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const { ref, isVisible } = useScrollFadeIn();
    const transitionRef = useRef(null);
    const intervalRef = useRef(null);
    
    // Array of 15 images with descriptive alt text
    const images = [
        { id: 1, src: '/chase-tipton-concert-photography-1.jpg', alt: 'Chase Tipton Photography - live concert event candidtaken in City/Location' },
        { id: 2, src: '/chase-tipton-concert-photography-2.jpg', alt: 'Candid live music concert photography by Chase Tipton Macro detail of guitarist hands' },
        { id: 3, src: '/chase-tipton-concert-photography-3.jpg', alt: 'Urban photography by Chase Tipton - couple in a club, having a great time in City/Location' },
        { id: 4, src: '/chase-tipton-concert-photography-4.jpg', alt: 'Candid cinematic black and white photography by Chase Tipton - Detailed shot of band playing' },
        { id: 5, src: '/chase-tipton-concert-photography-5.jpg', alt: 'Event photography by Chase Tipton - Candid moment at celebration' },
        { id: 6, src: '/chase-tipton-concert-photography-6.jpg', alt: 'Fashion photography by Chase Tipton - Editorial style portrait shoot' },
        { id: 7, src: '/chase-tipton-concert-photography-7.jpg', alt: 'Travel photography by Chase Tipton - Scenic coastal landscape' },
        { id: 8, src: '/chase-tipton-concert-photography-8.jpg', alt: 'Studio photography by Chase Tipton - Professional headshot portrait' },
        { id: 9, src: '/chase-tipton-concert-photography-9.jpg', alt: 'Wildlife photography by Chase Tipton - Animal in natural habitat' },
        { id: 10, src: '/chase-tipton-concert-photography-10.jpg', alt: 'Architectural photography by Chase Tipton - Modern building exterior' },
        { id: 11, src: '/chase-tipton-concert-photography-11.jpg', alt: 'Fine art photography by Chase Tipton - Abstract composition and lighting' },
        { id: 12, src: '/chase-tipton-concert-photography-12.jpg', alt: 'Documentary photography by Chase Tipton - Authentic storytelling moment' },
        { id: 13, src: '/chase-tipton-concert-photography-13.jpg', alt: 'Wedding photography by Chase Tipton - Romantic couple portrait' },
        { id: 14, src: '/chase-tipton-concert-photography-14.jpg', alt: 'Commercial photography by Chase Tipton - Product and lifestyle shot' },
        { id: 15, src: '/chase-tipton-concert-photography-15.jpg', alt: 'Black and white photography by Chase Tipton - Timeless portrait study' }
    ];

    // Triple the images for seamless infinite loop
    const extendedImages = [...images, ...images, ...images];

    // Auto-rotate every 4 seconds - advance by 4 images
    useEffect(() => {
        if (!isPaused) {
            intervalRef.current = setInterval(() => {
                setCurrentIndex((prevIndex) => prevIndex + 4);
            }, 4000);
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [isPaused]);

    // Handle image click - pause carousel temporarily and zoom on mobile
    const handleImageClick = (imageKey) => {
        setIsPaused(true);
        
        // Toggle zoom for mobile
        if (zoomedImage === imageKey) {
            setZoomedImage(null);
        } else {
            setZoomedImage(imageKey);
        }
        
        setTimeout(() => {
            setIsPaused(false);
        }, 2000); // Resume after 2 seconds
    };

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

    // Touch handlers for mobile swipe
    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            // Swipe left - go forward by 1 image
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
        
        if (isRightSwipe) {
            // Swipe right - go back by 1 image
            setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
        }

        // Reset values
        setTouchStart(0);
        setTouchEnd(0);
    };

    return (
        <div ref={ref} className={`w-full py-4 md:py-8 overflow-hidden transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div 
                className="w-full overflow-hidden"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <div 
                    ref={transitionRef}
                    className="flex gap-1 md:gap-2"
                    style={{ 
                        transform: `translateX(calc(-${currentIndex * 25}% - ${currentIndex * 0.0625}rem))`,
                        transition: 'transform 1000ms ease-in-out'
                    }}
                    onTransitionEnd={handleTransitionEnd}
                >
                    {extendedImages.map((image, index) => {
                        const imageKey = `${image.id}-${index}`;
                        const isZoomed = zoomedImage === imageKey;
                        
                        return (
                            <div
                                key={imageKey}
                                className="relative aspect-[1/2] md:aspect-[3/4] overflow-hidden shadow-lg flex-shrink-0 group"
                                style={{ width: 'calc(25% - 0.1875rem)' }}
                                onClick={() => handleImageClick(imageKey)}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className={`object-cover transition-transform duration-500 ease-out ${
                                        isZoomed ? 'scale-150 md:scale-110' : 'md:group-hover:scale-110'
                                    }`}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}