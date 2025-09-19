import type { JSX } from 'react'
import { Textarea } from './ui/textarea'

type Props = {
  placeholder: string
  className?: string
}

export default function TextArea({
  placeholder,
  className,
}: Props): JSX.Element {
  return <Textarea className={className} placeholder={placeholder}></Textarea>
}
