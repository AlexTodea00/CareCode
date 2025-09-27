import { type JSX } from 'react'
import styles from '@/styles/pill.module.scss'
import CrossIcon from '@/assets/icons/cross_icon.svg?react'

type Props = {
  children: React.ReactNode
  onClick: () => void
}

export default function Pill({ children, onClick }: Props): JSX.Element {
  return (
    <div onClick={onClick} className={styles.pill}>
      {children} <CrossIcon width={16} height={16} />
    </div>
  )
}
