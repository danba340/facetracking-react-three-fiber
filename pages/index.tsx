import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { FacePosition } from '../components/FacePosition'
import { useState } from 'react'
import { R3F } from '../components/R3F'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [facePos, setFacePos] = useState([0, 0])
  return (
    <>
      <Head>
        <title>React three fiber face tracker</title>
        <meta name="description" content="React three fiber face tracker" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <FacePosition onNewFacePosition={(pos) => {
          console.log("POS", pos)
          setFacePos(pos)
        }} />
        <R3F facePos={facePos} />
      </main>
    </>
  )
}
