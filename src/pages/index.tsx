import Head from 'next/head'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
        <Head>
          <title>My DashBoard</title>
        </Head>

        <div>
          <h1>Ola, mundo</h1>
        </div>
    </>

  )
}
