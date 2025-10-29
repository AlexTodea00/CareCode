import type { JSX } from 'react'
import styles from '@/styles/contactCard.module.scss'
import type { ContactInfo } from '@/types/contactInfo'
import { Button } from '../../components/ui/button'
import CrossIcon from '@/assets/icons/cross_icon.svg?react'

type Props = {
  content: ContactInfo
  onClick: (contact: ContactInfo) => void
  readOnly?: boolean
}

export default function ContactCard({
  readOnly = false,
  content,
  onClick,
}: Props): JSX.Element {
  const { contactName, phoneNumber, relationship } = content

  return (
    <div className={styles.card}>
      <div className={styles.container}>
        <p>{contactName}</p>
        <p>{phoneNumber}</p>
        <p>{relationship}</p>
      </div>
      {!readOnly && (
        <Button
          onClick={() => {
            onClick(content)
          }}
          type="button"
        >
          <CrossIcon />
        </Button>
      )}
    </div>
  )
}
