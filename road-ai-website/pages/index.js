import Head from 'next/head'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>RoadAI</title>
        <meta name="description" content="An AI driven tool for detecting car crashes in intersections" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>RoadAI</h1>
      </main>
    </>
  )
}
