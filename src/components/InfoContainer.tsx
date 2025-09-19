import type { JSX } from 'react'
import styles from '@/styles/infoContainer.module.scss'
import Pill from './Pill'

type Props = {
  content: string[]
  placeholder: string
}

function InfoContainer({ content, placeholder }: Props): JSX.Element {
  return (
    <div className={styles.container}>
      {content.length > 0 && (
        <div className={styles['pill-wrapper']}>
          {content.map(dta => (
            <Pill key={dta}>{dta}</Pill>
          ))}
        </div>
      )}
      {content.length === 0 && <p>{placeholder}</p>}
    </div>
  )
}

export default InfoContainer
