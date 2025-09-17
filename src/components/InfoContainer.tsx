import type { JSX } from 'react'
import styles from '@/styles/infoContainer.module.scss'

type Props = {
  content: string[]
  placeholder: string
}

function InfoContainer({ content, placeholder }: Props): JSX.Element {
  return (
    <div className={styles.container}>
      <p>{content.length ? content : placeholder}</p>
    </div>
  )
}

export default InfoContainer
