'use client'

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

const TypedAnimation = ({ strings, speed = 0.1, delay = 2, className = '' }) => {
    const elementRef = useRef(null);
    const currentStringIndex = useRef(0);
    
    useEffect(() => {
        const element = elementRef.current;
        const currentString = strings[currentStringIndex.current];
        
        
        const timeline = gsap.timeline({
            onComplete: () => {
                currentStringIndex.current = (currentStringIndex.current + 1) % strings.length;
                
                timeline.restart();
            }
        });

        
        for (let i = 0; i < currentString.length; i++) {
            timeline.to(element, {
                duration: speed,
                text: currentString.substring(0, i + 1),
                ease: "none"
            });
        }

       
        timeline.to({}, { duration: delay });

        
        for (let i = currentString.length; i >= 0; i--) {
            timeline.to(element, {
                duration: speed,
                text: currentString.substring(0, i),
                ease: "none"
            });
        }

        return () => {
            timeline.kill();
        };
    }, [strings]);

    return <span ref={elementRef} className={className}></span>;
}

export default TypedAnimation;
