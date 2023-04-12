
import styles from './Avatar.module.css';

type userAvatar ={
  userUrl: string,
  hasBorder?: boolean
}


export function Avatar({userUrl, hasBorder = true}: userAvatar ){
  return(
    <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} src={userUrl}/>
  )
}