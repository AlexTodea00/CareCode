import type { JSX } from 'react'
import 'styles/divider.scss'

type Props = {
  width: string | number
}

export default function Divider({ width }: Props): JSX.Element {
  return <div id="divider" style={{ width: width }}></div>
}
