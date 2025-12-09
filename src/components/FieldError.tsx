import type { JSX } from 'react'
import { useTranslation } from 'react-i18next'

type Props = {
  error: string
}

export default function FieldError({ error }: Props): JSX.Element {
  const { t } = useTranslation()
  return <p className="text-destructive">{t(error)}</p>
}
