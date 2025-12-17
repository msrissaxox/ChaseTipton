"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import useScrollFadeIn from "../hooks/useScrollFadeIn";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0); // Start at beginning of middle set
  const [isPaused, setIsPaused] = useState(false);
  const [zoomedImage, setZoomedImage] = useState(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const { ref, isVisible } = useScrollFadeIn();
  const transitionRef = useRef(null);
  const intervalRef = useRef(null);

  // Array of 15 images with descriptive alt text
  const images = [
    {
      id: 1,
      src: "/chase-tipton-concert-photography-1.jpg",
      alt: "Chase Tipton Photography - live concert event candidtaken in City/Location",
    },
    {
      id: 2,
      src: "/chase-tipton-concert-photography-2.jpg",
      alt: "Candid live music concert photography by Chase Tipton - Macro detail of guitarist hand, with the crowd in the background",
    },
    {
      id: 3,
      src: "/chase-tipton-concert-photography-3.jpg",
      alt: "Urban photography by Chase Tipton - couple in a club, leaning into the camera, having a great time in City/Location, with peopple in the background",
    },
    {
      id: 4,
      src: "/chase-tipton-concert-photography-4.jpg",
      alt: "Dynamic motion blur cinematic black and white photography by Chase Tipton - Detailed shot of band passionately playing guitar, on a stage with dramatic lighting",
    },
    {
      id: 5,
      src: "/chase-tipton-concert-photography-5.jpg",
      alt: "Event photography by Chase Tipton - Candid moment at club, people dancing in costumes and enjoying the music, couple kissing in the center",
    },
    {
      id: 6,
      src: "/chase-tipton-concert-photography-6.jpg",
      alt: "Wildlife photography by Chase Tipton - Shot of a bird in nature, perched on a branch with detailed feathers",
    },
    {
      id: 7,
      src: "/chase-tipton-concert-photography-7.jpg",
      alt: "Candid photography by Chase Tipton - Woman in a dress, looking over her shoulder with a smile, in an outdoor setting, trees in the background",
    },
    {
      id: 8,
      src: "/chase-tipton-concert-photography-8.jpg",
      alt: "Event photography by Chase Tipton - Photo of a dancer elevated above the crowd, surrounded by people cheering and enjoying the moment",
    },
    {
      id: 9,
      src: "/chase-tipton-concert-photography-9.jpg",
      alt: "Event photography by Chase Tipton - Friends embracing and smiling in a club setting",
    },
    {
      id: 10,
      src: "/chase-tipton-concert-photography-10.jpg",
      alt: "Event photography by Chase Tipton - Woman in club attire, dancing with arms raised, wearing colorful bracelets and brick wall in the background",
    },
    {
      id: 11,
      src: "/chase-tipton-concert-photography-11.jpg",
      alt: "Event photography by Chase Tipton - Photo of two people embracing closely and smiling, in front of a crowd of people at a club, people dancing in the background",
    },
    {
      id: 12,
      src: "/chase-tipton-concert-photography-12.jpg",
      alt: "Event photography by Chase Tipton - Photo of a crowd enjoying a live event, hands raised towards the stage with dramatic lighting",
    },
    {
      id: 13,
      src: "/chase-tipton-concert-photography-13.jpg",
      alt: "Event photography by Chase Tipton - Photo of a person in a crowd, illuminated by colorful stage lights, enjoying the music at an event, celebratory atmosphere",
    },
    {
      id: 14,
      src: "/chase-tipton-concert-photography-14.jpg",
      alt: "Event photography by Chase Tipton - Two women dancing closely, surrounded by a crowd at a lively event, colorful lighting enhancing the festive mood",
    },
    {
      id: 15,
      src: "/chase-tipton-concert-photography-15.jpg",
      alt: "Event photography by Chase Tipton - woman dancing energetically in a club, colorful lights and crowd in the background",
    },
  ];

  // Triple the images for seamless infinite loop
  const extendedImages = [...images, ...images, ...images];

  // Initial advance to show animation immediately on page load
  useEffect(() => {
    const initialTimeout = setTimeout(() => {
      setCurrentIndex(4);
    }, 2000); // Advance after 2 seconds

    return () => clearTimeout(initialTimeout);
  }, []);

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
        transitionRef.current.style.transition = "none";
      }
      setCurrentIndex(currentIndex % images.length);
      setTimeout(() => {
        if (transitionRef.current) {
          transitionRef.current.style.transition = "transform 1000ms ease-in-out";
        }
      }, 50);
    }
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    setDragStart(e.targetTouches[0].clientX);
    setIsDragging(true);
    setIsPaused(true);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
    if (isDragging) {
      const currentPosition = e.targetTouches[0].clientX;
      setDragOffset(currentPosition - dragStart);
    }
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
    setIsDragging(false);
    setDragOffset(0);

    setTimeout(() => {
      setIsPaused(false);
    }, 2000);
  };

  // Mouse drag handlers for desktop
  const handleMouseDown = (e) => {
    setDragStart(e.clientX);
    setIsDragging(true);
    setIsPaused(true);
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const currentPosition = e.clientX;
      setDragOffset(currentPosition - dragStart);
    }
  };

  const handleMouseUp = () => {
    if (isDragging) {
      const threshold = 50;
      if (dragOffset < -threshold) {
        // Dragged left - go forward
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else if (dragOffset > threshold) {
        // Dragged right - go back
        setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
      }

      setIsDragging(false);
      setDragOffset(0);

      setTimeout(() => {
        setIsPaused(false);
      }, 2000);
    }
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp();
    }
  };

  return (
    <div
      ref={ref}
      className={`w-full py-4 md:py-8 overflow-hidden transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <div
        className={`w-full overflow-hidden ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <div
          ref={transitionRef}
          className="flex gap-1 md:gap-2"
          style={{
            transform: `translateX(calc(-${currentIndex * 25}% - ${currentIndex * 0.0625}rem + ${dragOffset}px))`,
            transition: isDragging ? "none" : "transform 1000ms ease-in-out",
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
                style={{ width: "calc(25% - 0.1875rem)" }}
                onClick={() => handleImageClick(imageKey)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className={`object-cover transition-transform duration-500 ease-out ${
                    isZoomed ? "scale-150 md:scale-110" : "md:group-hover:scale-110"
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
