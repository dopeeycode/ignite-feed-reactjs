import { ThumbsUp, Trash } from '@phosphor-icons/react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';
import { useState } from 'react';

interface CommentProps{
  content: string,
  onDeleteComment: (comment: string) => void
}

export function Comment({ content, onDeleteComment }: CommentProps){

  const [likeCout, setLikeCout] = useState(0);

  function handleDeleteComment(){
    
    onDeleteComment(content)
  }

  
  function handleLikeComment(){
    setLikeCout((state) => {
      return state + 1;
    })
  }


  return(
    <div className={styles.comment}> 
      <Avatar hasBorder={false} 
        src="https://github.com/dopeeycode.png" 
        alt='Foto de perfil usuario'
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Italo Patricio</strong>
              <time title='9 de Abril ás 20:00h' dateTime='2023-04-09 20:00'>Cerca de 1h atrás</time>
            </div>
            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24}/>
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp/>
            Aplaudir <span>{likeCout}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}