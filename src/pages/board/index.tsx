import Head from "next/head"
import styles from './styles.module.scss'

import { useState, FormEvent } from 'react'
import { FiPlus, FiCalendar, FiEdit2, FiTrash, FiClock } from "react-icons/fi"
import { SupportButton } from "@/components/SupportButton"
import { GetServerSideProps } from "next"
import { getSession } from "next-auth/react"
import Link from "next/link"
import { format } from "date-fns"


import firebase from '../../services/firebaseConnection'


interface BoardProps {
  user: {
    email: string
    name: string
  }
}


export default function Board({ user }: BoardProps){

  const [input, setInput] = useState('')
  const [taskList, setTaskList] = useState([])



  async function handleAddTask(event: FormEvent){
    event.preventDefault()
    if(input === ''){
      alert('Preencha alguma tarefa')
      return // esse return serve para que execução desta função seja parada
    }

    await firebase.firestore()
        .collection('tasks')
        .add({
          created: new Date(),
          task: input,
          userEmail: user.email,
          userName: user.name
        })
        .then((doc) => {
          console.log('Cadastrado com sucesso')
          let data = {
            id: doc.id,
            createdAt: new Date(),
            createdAtFormatted: format(new Date(), 'dd MMMM yyyy'),
            task: input,
            userEmail: user.email,
            name: user.name
          }

          setTaskList([...taskList, data])
          setInput('')


        })
        .catch((err) => console.error(err))



  }

  return (
    <>
      <Head>
        <title>Minhas Tarefas</title>
      </Head>

      <main className={styles.container}>
        <form onSubmit={handleAddTask}>
          <input
            type="text"
            placeholder="Crie sua tarefa"
            value={input}
            onChange={(inputEvent) => setInput(inputEvent.target.value)} // pegando o que foi digitado, para salvar no state input
          />

          <button type="submit">
            <FiPlus size={25} color='#17181f'></FiPlus>
          </button>
        </form>



        <h1>Voce tem 2 tarefas</h1>

        <section>
          {taskList.map(task => (
            <article className={styles.taskList}>
              <Link href={`/board/task/${task.id}`}>
                <p>{task.task}</p>
              </Link>


              <div className={styles.actions}>
                <div>
                  <div>
                    <FiCalendar size={20} color='#FFB800'/>
                    <time>{task.createdAtFormatted}</time>
                  </div>

                  <button>
                    <FiEdit2 size={20} color='#FFF'/>
                    <span>Editar</span>
                  </button>
                </div>

                <button>
                  <FiTrash size={20} color='#FF3636'/>
                  <span>Excluir</span>
                </button>

              </div>
            </article>
          ))}

        </section>
      </main>

      <div className={styles.vipContainer}>
        <h3>Obrigado por apoiar esse projeto</h3>
        <div>
          <FiClock size={28} color='#fff'/>

          <time>
            Ultima doacao foi ha 3 dias
          </time>
        </div>
      </div>

    <SupportButton/>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session: any = await getSession({ req })
  console.log(session)

  if(!session?.user.name){
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  const user = {
    name: session.user.name,
    email: session.user.email
  }

  return {
    props: {
      user
    }
  }
}