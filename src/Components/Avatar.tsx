
import styles from './Avatar.module.css';

type userAvatar ={
  avatar_url: string,
  hasBorder?: boolean
}


export function Avatar({avatar_url, hasBorder = true}: userAvatar ){
  return(
    <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} src={avatar_url}/>
  )
}