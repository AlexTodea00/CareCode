import type { JSX } from 'react'
import styles from '@/styles/infoContainer.module.scss'
import Pill from './Pill'

type Props = {
  content: string[]
  placeholder: string
  onClick: (
    category: 'allergies' | 'medications' | 'conditions',
    clickedValue: string,
  ) => void
  category: 'allergies' | 'medications' | 'conditions'
}

function InfoContainer({
  content,
  placeholder,
  onClick,
  category,
}: Props): JSX.Element {
  return (
    <div className={styles.container}>
      {content.length > 0 && (
        <div className={styles['pill-wrapper']}>
          {content.map(dta => (
            <Pill onClick={() => onClick(category, dta)} key={dta}>
              {dta}
            </Pill>
          ))}
        </div>
      )}
      {content.length === 0 && <p>{placeholder}</p>}
    </div>
  )
}

export default InfoContainer
