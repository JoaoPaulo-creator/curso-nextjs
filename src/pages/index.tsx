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
