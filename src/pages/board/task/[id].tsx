import { GetServerSideProps } from "next"
import { getSession } from "next-auth/react"
import firebase from "firebase"
import { format } from "date-fns"

import Head from "next/head"
import { FiCalendar } from "react-icons/fi"
import styles from './styles.module.scss'

interface Task {
  id: string
  createdAt: string | Date
  createdAtFormatted?: string
  task: string
  userEmail: string
  userName: string
}

interface TaskListProps {
  data: string
}


export default function TaskDetail({ data }: TaskListProps){

  const task = JSON.parse(data) as Task


  return(
   <>
    <Head>
      <title>Detalhes da sua tarefa</title>
    </Head>

    <article className={styles.container}>
      <div className={styles.actions}>
        <div>
          <FiCalendar size={30} color='#fff'/>
          <span>Tarefa criada: </span>
          <time>{task.createdAtFormatted}</time>
        </div>
      </div>

      <p>{task.task}</p>
    </article>
   </>
  )
}



export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  const { id }: any = params

  const session = await getSession({ req })
  console.log(session)

  if(!session?.user?.name){
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  const data = await firebase.firestore().collection('tasks')
  .doc(id)
  .get()
  .then((snapshot) => {

    const data = {
      id: snapshot.id,
      createdAt: snapshot.data()?.created,
      createdAtFormatted: format(snapshot.data()?.created.toDate(), 'dd MMMM yyyy'),
      task: snapshot.data()?.task,
      userEmail: snapshot.data()?.userEmail,
      userName:  snapshot.data()?.userName,
    }

    return JSON.stringify(data)
  })


  return {
    props: {
      data
    }
  }

}