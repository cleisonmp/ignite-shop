import Image from 'next/image'
import styles from './SampleCard.module.css'

export interface SampleCardProps {
  tag: string
  title: string
  body: string
  imageUrl: string
  author: {
    name: string
    avatarUrl: string
  }
  time: string
}

export const SampleCard = ({
  tag,
  title,
  body,
  imageUrl,
  author,
  time,
}: SampleCardProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.card__header}>
          <Image
            src={imageUrl}
            alt=''
            className={styles.card__image}
            width='600'
            height='400'
          />
        </div>
        <div className={styles.card__body}>
          <span className={`${styles.tag} ${styles['tag-blue']}`}>{tag}</span>
          <h4>{title}</h4>
          <p>{body}</p>
        </div>
        <div className={styles.card__footer}>
          <div className={styles.user}>
            <Image
              src={author.avatarUrl}
              alt='user__image'
              className={styles.user__image}
              width='40'
              height='40'
            />
            <div className={styles.user__info}>
              <h5>{author.name}</h5>
              <small>{time}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
