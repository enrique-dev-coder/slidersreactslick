import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Sliders en react</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="mb-20 text-center text-6xl font-bold">
          Esta página es una muestra de sliders de react hechos con react slick
          Uwu
        </h1>
        <ul>
          <Link href="/slider3d">
            <li className="cursor-pointer text-3xl">slider 3D</li>
          </Link>
        </ul>
      </main>
    </div>
  )
}

export default Home
