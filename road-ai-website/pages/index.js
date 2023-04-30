import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Dropzone from '@/components/Dropzone/Dropzone'
import Navbar from '@/components/Navbar/Navbar'
import Hero from '@/components/Hero/Hero'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>RoadAI</title>
        <meta name="description" content="An AI driven tool for detecting car crashes in intersections" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <Hero />

        <div className={styles.outer}>
          <div className={styles.inner}>
            <p className={styles.text}>According to the Federal Highway Administration, 40% of all crashes involve intersections, also accounting for more that 50% of the combined total of fatal and injury causing crashes.</p>
            <Image
              className={styles.image}
              src="/intersection-crash.jpg"
              alt="A picture of cars piled up on top of each other"
              quality={100}
              width={1200}
              height={780}
            />
          </div>
          <p className={styles.bold_text}>Every second matters</p>
          <p className={styles.text}>Emergency services response time is crucial, and their early presence can be the difference between life and death.</p>
          <div className={styles.inner}>
            <Image
              className={styles.image}
              src="/time.jpg"
              alt="A picture of clock"
              quality={100}
              width={1200}
              height={780}
            />
            <p className={styles.text}>Typically, someone has to call emergency services to request help. <b>This takes valuable time.</b> Even worse, in a serious crash, there may not be anyone around to call emergency services. <b>So what's the solution?</b></p>
          </div>
          <p className={styles.bold_text}>RoadAI</p>
          <div className={styles.inner}>
            <p className={styles.text}>An increasing number of intersections are being equipped with cameras, mainly for speeding purposes. However, these cameras can also be used to detect collisions and automatically alert emergency services, <b>cutting down on response time</b> and <b>saving more lives.</b></p>
            <Image
              className={styles.image}
              src="/speed-camera.jpg"
              alt="A picture of cars piled up on top of each other"
              quality={100}
              width={1200}
              height={780}
            />
          </div>
          <p className={styles.text}><b>This is exactly what RoadAI can do</b></p>
          <p className={styles.text}>RoadAI utilizes AI-driven computer vision technology to track and analyse the movement of vehicles through intersections and detect potential collisions the moment they occur.</p>
        </div>
        <br/><br/>
        <div className={styles.video_container}>
          <video autoplay loop muted playsinline id="vid1">
            <source src="/vid1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video autoplay loop muted playsinline id="vid2">
            <source src="/vid2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video autoplay loop muted playsinline id="vid3">
            <source src="/vid3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <script dangerouslySetInnerHTML={{__html: `
          document.getElementById("vid1").play();
        `}} />
        <script dangerouslySetInnerHTML={{__html: `
          document.getElementById("vid2").play();
        `}} />
        <script dangerouslySetInnerHTML={{__html: `
          document.getElementById("vid3").play();
        `}} />
        <br/><br/>
        <Dropzone />
        <br/><br/>
      </main>
    </>
  )
}
