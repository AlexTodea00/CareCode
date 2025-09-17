import type { JSX } from 'react'
import styles from '@/styles/divider.module.scss'

type Props = {
  width: string | number
}

export default function Divider({ width }: Props): JSX.Element {
  return <div className={styles.divider} style={{ width: width }}></div>
}
