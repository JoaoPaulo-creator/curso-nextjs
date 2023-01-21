
import styles from './styles.module.scss'
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

import { signIn, signOut, useSession } from 'next-auth/react'

export function SignInButton(){

  const {data: session} = useSession()
  console.log(session)

  return session ? (
    <button
      type='button'
      className={styles.signInButton}
      onClick={ () => signOut() } // serve para deslogar do app
    >
      <img src={`${session.user?.image}`} alt="Foto do usuario" />
      Ola, {session.user?.name}
      <FiX color='#737380' className={styles.closeIcon}/>
    </button>
  ) : (
    <button
      type='button'
      className={styles.signInButton}
      onClick={ () => signIn('github') } //como argumento, recebe o nome de um provider. Aqui estamos realizando o login no app
    >
      <FaGithub color='#FFB800'/>
      Entrar com Github
    </button>
  )
}