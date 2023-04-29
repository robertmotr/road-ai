import React, { useEffect, useState, useRef } from "react";
import styles from "../Hero/Hero.module.css";

export default function GlitchingText({ staticText, strings }) {
    const start = useRef(undefined);    // Used for glitching effect iteration intervals
    const finished = useRef(true);  // For keeping track of whether glitch effect is in process
    const iteration = useRef(0);

    const stringIndex = useRef(0);    // Index of current glitching string
    const currString = useRef(strings[stringIndex.current]);  // Current glitching string
    const splitString = useRef(currString.current.split(""));
    const [currentText, setCurrentText] = useState(""); // Glitching text
    const letters = useRef("abcdefghijklmnopqrstuvwxyz!?/$&#");

    // Recursively glitches through the current glitching string
    function step(timestamp) {
        if (finished.current) return;
        if (start.current === undefined) start.current = timestamp;

        const elapsed = timestamp - start.current;
        if (elapsed > 30) {
            if(iteration.current < currString.current.length) {
                setCurrentText(splitString.current.map((letter, index) => {
                    if(index < iteration.current) return currString.current[index];
                    return letters.current[Math.floor(Math.random() * 32)];
                }).join(""));
                iteration.current += 1/2;
                start.current = timestamp;
                window.requestAnimationFrame(step);
            } else {
                iteration.current = 0;
                finished.current = true;
                start.current = undefined;
            }
        }
        if (!finished.current) window.requestAnimationFrame(step);
    }

    // Only run once in the beginning
    useEffect(() => {
        // Begins glitching through the string at the provided index
        const glitchThroughString = (index) => {
            finished.current = false;
            currString.current = strings[index];
            splitString.current = currString.current.split("");
            window.requestAnimationFrame(step);

            // Incrementing to the next string index
            stringIndex.current = (stringIndex.current + 1) % strings.length;
        };

        if (finished.current) glitchThroughString(0); // Starts the initial glitching in the beginning

        // Begins looping and glitching through all the strings on an interval
        const interval = setInterval(() => {
            if (finished.current) glitchThroughString(stringIndex.current);
        }, 1250);
        
        // Callback to clear interval when component is dismounted
        return () => clearInterval(interval);
    });

    return (
        <h3 className="text">{staticText}{currentText}
            <style jsx>{`
                .text {
                    font-size: max(2.5vw, 15px);
                }
            `}</style>
        </h3>
    )
}