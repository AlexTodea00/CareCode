import styles from '@/styles/careCodeTitle.module.scss'
import type { JSX } from 'react'
import { useTranslation } from 'react-i18next'

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
  const { t } = useTranslation()

  return (
    <h1
      style={{ fontSize: size, justifySelf: justifySelf, alignSelf: alignSelf }}
      className={styles.title}
    >
      {t('translation.general.carecode')}
    </h1>
  )
}
