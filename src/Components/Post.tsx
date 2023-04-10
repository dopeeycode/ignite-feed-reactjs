import styles from './Post.module.css';



type postProps = {
  author: string,
  content: string,
}


export function Post(){
  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} 
            src="https://github.com/diego3g.png" 
            alt="Avatar usúario" 
          />
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
    </article>
  )
}