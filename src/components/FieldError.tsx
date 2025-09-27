import type { JSX } from 'react'

type Props = {
  error: string
}

export default function FieldError({ error }: Props): JSX.Element {
  return <p className="text-destructive">{error}</p>
}
