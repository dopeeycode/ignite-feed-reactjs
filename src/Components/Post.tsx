import { Avatar } from './Avatar';
import styles from './Post.module.css';



export function Post(){
  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar userUrl='https://github.com/diego3g.png'/>
          <div className={styles.authorInfo}>
            <strong>Deigo Fernandes</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title='9 de Abril ás 20:00h' dateTime='2023-04-09 20:00'>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala pessoal 👋</p>
        <p>Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻 </p>
        <p>👉 <a href="#"> devonlane.design</a></p>
        <p>
          <a href="#">#uiux </a>
          <a href="#">#userexperience</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder='Deixe um comentário'
        />  
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>
    </article>
  )
}