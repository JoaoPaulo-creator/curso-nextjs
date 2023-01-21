import { GetStaticProps } from 'next'
import Head from 'next/head'
import styles from '../styles/styles.module.scss'

export default function Home() {
  return (
    <>
        <Head>
          <title>My DashBoard</title>
        </Head>

        <main className={styles.contentContainer}>
          <img src="/images/board-user.svg" alt="Ferramente board" />

          <section className={styles.callToAction}>
            <h1>Uma ferramente para o seu dia. Escreva, planeje e organize-se...</h1>
            <p>
              <span>100% gratuita</span> e online
            </p>
          </section>

          <p className={styles.donatersTitle}>Apoiadores:  </p>
          <div className={styles.donaters}>
            <img src="https://sujeitoprogramador.com/steve.png" alt="usuario" />
            <img src="https://sujeitoprogramador.com/steve.png" alt="usuario" />
            <img src="https://sujeitoprogramador.com/steve.png" alt="usuario" />
            <img src="https://sujeitoprogramador.com/steve.png" alt="usuario" />
            <img src="https://sujeitoprogramador.com/steve.png" alt="usuario" />
            <img src="https://sujeitoprogramador.com/steve.png" alt="usuario" />
            <img src="https://sujeitoprogramador.com/steve.png" alt="usuario" />
            <img src="https://sujeitoprogramador.com/steve.png" alt="usuario" />
            <img src="https://sujeitoprogramador.com/steve.png" alt="usuario" />
            <img src="https://sujeitoprogramador.com/steve.png" alt="usuario" />
            <img src="https://sujeitoprogramador.com/steve.png" alt="usuario" />
            <img src="https://sujeitoprogramador.com/steve.png" alt="usuario" />
            <img src="https://sujeitoprogramador.com/steve.png" alt="usuario" />
            <img src="https://sujeitoprogramador.com/steve.png" alt="usuario" />
            <img src="https://sujeitoprogramador.com/steve.png" alt="usuario" />
            <img src="https://sujeitoprogramador.com/steve.png" alt="usuario" />
            <img src="https://sujeitoprogramador.com/steve.png" alt="usuario" />
            <img src="https://sujeitoprogramador.com/steve.png" alt="usuario" />
            <img src="https://sujeitoprogramador.com/steve.png" alt="usuario" />
            <img src="https://sujeitoprogramador.com/steve.png" alt="usuario" />
            <img src="https://sujeitoprogramador.com/steve.png" alt="usuario" />
            <img src="https://sujeitoprogramador.com/steve.png" alt="usuario" />
            <img src="https://sujeitoprogramador.com/steve.png" alt="usuario" />
            <img src="https://sujeitoprogramador.com/steve.png" alt="usuario" />
            <img src="https://sujeitoprogramador.com/steve.png" alt="usuario" />
            <img src="https://sujeitoprogramador.com/steve.png" alt="usuario" />
            <img src="https://sujeitoprogramador.com/steve.png" alt="usuario" />
            <img src="https://sujeitoprogramador.com/steve.png" alt="usuario" />
            <img src="https://sujeitoprogramador.com/steve.png" alt="usuario" />
            <img src="https://sujeitoprogramador.com/steve.png" alt="usuario" />
            <img src="https://sujeitoprogramador.com/steve.png" alt="usuario" />
            <img src="https://sujeitoprogramador.com/steve.png" alt="usuario" />
          </div>
        </main>
    </>

  )
}


export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {

    },
    revalidate: 60 * 60 /* a página será gerada no primeiro acesso, ou seja, ela será gerada no servidor
    e quando os demais usuários acessarem a página, eles visualizaram a página estática. Porém, dentro de uma hora
    a página será revalidada e se por acaso houve uma atualização nas informações/elementos, ela será regerada,
    se mantendo estática por mais uma hora
    */

  }
}