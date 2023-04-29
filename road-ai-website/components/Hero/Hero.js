import React from "react";
import styles from "./Hero.module.css"
import Image from "next/image";
import GlitchingText from "../GlitchingText/GlitchingText";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <h1 className={styles.header}>RoadAI</h1>
                <Image className={styles.image} 
                    src="/red-lens.png"
                    alt="A red camera lens"
                    quality={100}
                    width={125}
                    height={125}
                />
            </div> 
            <p className={styles.text}>An AI driven solution to collision detection in intersections</p>
            <br/>
            <p className={styles.text}>A Deerhacks project by</p>
            <GlitchingText
                strings={["Arian Sadeghi", "Muhammad Hamza", "Robert Montrogeanu", "Ziad Zananiri"]}
            />
        </section>
    )
}