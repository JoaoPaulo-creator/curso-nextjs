import type { AppProps } from 'next/app'

// esse arquivo server para padrozinar o app, ou seja, se necessario colocar algum estilo que se repita
// em todas as telas, sera nesse arquivo o estilo sera importado

import '../styles/global.scss'

import { Header } from '@/components/Header'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}