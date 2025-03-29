"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
    const cursorRef = useRef(null);

    useEffect(() => {
        if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

        // Hiding the default cursor----------------
        document.body.style.cursor = "none";

        //custom---
        gsap.set(cursorRef.current, {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
            opacity: 1,
            scale: 1
        });

        const moveCursor = (e) => {
            gsap.to(cursorRef.current, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: "power2.out",
            });
        };

        const handleMouseEnter = () => {
            gsap.to(cursorRef.current, { scale: 1.8, backgroundColor: "rgba(255, 255, 255, 0.6)", duration: 0.2 });
        };

        const handleMouseLeave = () => {
            gsap.to(cursorRef.current, { scale: 1, backgroundColor: "rgba(0, 0, 0, 0.6)", duration: 0.2 });
        };

        const handleClick = () => {
            gsap.to(cursorRef.current, { scale: 0.5, duration: 0.1, ease: "power2.out", yoyo: true, repeat: 1 });
        };

        //event listeners---------
        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mousedown", handleClick);

        //hover effect -----
        document.querySelectorAll("a,.customhover, button, .hover-target").forEach(el => {
            el.addEventListener("mouseenter", handleMouseEnter);
            el.addEventListener("mouseleave", handleMouseLeave);
        });

        // Cleanup-------
        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mousedown", handleClick);
            document.body.style.cursor = "";
            document.querySelectorAll("a, button, .hover-target").forEach(el => {
                el.removeEventListener("mouseenter", handleMouseEnter);
                el.removeEventListener("mouseleave", handleMouseLeave);
            });
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className="fixed border-4 border-white top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-difference bg-opacity-50 backdrop-blur-md transform -translate-x-1/2 -translate-y-1/2 opacity-0"
            style={{ willChange: "transform, scale, background-color" }}
        />
    );
};

export default CustomCursor;
