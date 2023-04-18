import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { useState } from 'react'

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';



export function Post({author, content, publishedAt}: any){

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
    locale: ptBR
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  const [newCommentText, SetNewCommentText] = useState('');

  const [comments, setComment] = useState([
    'Post bacana mano'
  ]);

  function handleCreateNewComment(e: Event){
    e.preventDefault()


    setComment([...comments, newCommentText])
    SetNewCommentText('');

  }

  function handleNewCommentText(e: Event){
    SetNewCommentText(e.target.value);
  }
  
  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar avatar_url={author.avatarUrl}/>
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if(line.type === 'paragraph'){
            return <p key={line.content}>{line.content}</p>
          } else if(line.type === 'link'){
            return <a href="#" key={line.content}>{line.content}</a>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          onChange={handleNewCommentText}
          name='comment'
          value={newCommentText}
          placeholder='Deixe um comentário'
        />  
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment, index) => {
          return(
            <Comment 
              key={index}
              content={comment}
            />
          )
        })}
      </div>
    </article>
  )
}