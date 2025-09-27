import styles from '@/styles/careCodeTitle.module.scss'
import type { JSX } from 'react'

type Props = {
  size?: string
  alignSelf?: 'center' | 'flex-start'
  justifySelf?: 'center' | 'flex-start'
}

export default function CareCodeTitle({
  size,
  alignSelf = 'center',
  justifySelf = 'center',
}: Props): JSX.Element {
  return (
    <h1
      style={{ fontSize: size, justifySelf: justifySelf, alignSelf: alignSelf }}
      className={styles.title}
    >
      CareCode
    </h1>
  )
}
