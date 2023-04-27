import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';


interface Author{
  name: string,
  role: string,
  avatarUrl: string
}


interface PostProps {
  author: Author,
  content: Content[],
  publishedAt: Date
}

interface Content{
  type: 'paragraph' | 'link';
  content: string;
}


export function Post({author, content, publishedAt}: PostProps){

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

  function handleCreateNewComment(event: FormEvent){
    event.preventDefault()


    setComment([...comments, newCommentText])
    SetNewCommentText('');

  }
  

  function handleNewCommentText(event: ChangeEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity('')
    SetNewCommentText(event.target.value);
  }

  
  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity('Esse campo é obrigatório !')

  }


  function deleteComment(commentToDelete: string){
    const commentsWithoutDeleteOne = comments.filter(comment => {
      return comment !== commentToDelete
    })

    setComment(commentsWithoutDeleteOne)
  }

  const isNewCommentInputEmpty = newCommentText.length === 0;
  
  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl}/>
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
          onInvalid={handleNewCommentInvalid}
          required
        />  
        <footer>
          <button 
            disabled={isNewCommentInputEmpty}
            type='submit'>
              Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment, index) => {
          return(
            <Comment 
              onDeleteComment={deleteComment}
              key={index}
              content={comment}
            />
          )
        })}
      </div>
    </article>
  )
}