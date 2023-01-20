import Link from 'next/link'
import styles from './styles.module.scss'
import { SignInButton } from '../SignInButton'

export function Header(){
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>

        <Link href={'/board'}>
          <img src="/images/logo.svg" alt="Board logo" />
        </Link>


        <nav>
          <a href='/'>Home</a>
          <a href='/board'>Meu Board</a>
        </nav>

        {/* <button>Entrar com github</button> */}
        <SignInButton />

      </div>
    </header>
  )
}