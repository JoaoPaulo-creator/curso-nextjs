import { getSession } from 'next-auth/react'
import Head from 'next/head'
import styles from './styles.module.scss'

interface DonateProps {
  user: {
    name: string
    userEmail: string
    image: string
  }
}


export default function Donate({ user }: DonateProps){
  return (
    <div>
      <Head>
        <title>Ajude o board ficar online</title>
      </Head>

      <main className={styles.container}>
        <img src="/images/rocket.svg" alt="Seja apoiador" />

        <div className={styles.vip}>
          <img src={user.image} alt="user profile photo" />
          <span>Parabéns, você é um apoiador!</span>
        </div>

        <h1>Seja um apoiador deste projeto 🏆</h1>
        <h3>Contribua com apenas <span>R$ 1,00</span></h3>
        <strong>Apareça na nossa home. Tenha funcionalidades exclusivas</strong>
      </main>
    </div>
  )
}

export async function getServerSideProps({ req }: any) {
  const session = await getSession({ req })

  if(!session?.user?.email){
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  const user = {
    name: session.user.name,
    userEmail: session.user.email,
    image: session.user.image
  }

  return {
    props: {
      user
    }
  }
}