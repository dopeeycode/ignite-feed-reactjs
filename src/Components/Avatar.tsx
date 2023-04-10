
import styles from './Avatar.module.css';

type userAvatar ={
  userUrl: string
}


export function Avatar({userUrl}: userAvatar ){
  return(
    <img className={styles.avatar} src={userUrl}/>
  )
}