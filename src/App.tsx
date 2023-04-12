import { Post } from "./Components/Post";
import { Header } from './Components/Header';

import styles from './App.module.css';

import './global.css'
import { Sidebar } from "./Components/Sidebar";


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "MaykBrito",
      role: 'Educator @Rocketseat'
    },
    content: [
     { type: 'paragraph', content: 'Fala pessoal 👋'},
     { type: 'paragraph', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻'},
     { type: 'link', content: '👉devonlane.design'},
     { type: 'link', content: '#uiu'},
     { type: 'link', content: '#userexperience'},
    ],
    publishedAt: new Date('2023-04-11 20:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: 'CTO @Rocketseat'
    },
    content: [
     { type: 'paragraph', content: 'Fala galeraa 👋'},
     { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
     { type: 'link', content: ' 👉 jane.design/doctorcare'},
     { type: 'link', content: '#novoprojeto'},
     { type: 'link', content: '#nlw'},
     { type: 'link', content: '#rocketseat'},
    ],
    publishedAt: new Date('2023-04-11 19:00')
  },
];

export function App() {
  return (
    <div className="App">
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map((post) => {
            return(
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}       
        </main>
      </div>
    </div>
  )
}


