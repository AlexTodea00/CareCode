import type { JSX } from 'react'
import { Input } from './ui/input'
import { Label } from './ui/label'

type Props = {
  placeholder: string
  label: string
  className?: string
}

function TextInput({ placeholder, label, className }: Props): JSX.Element {
  return (
    <div className={className}>
      <Label className="mb-1.5" htmlFor="textInput">
        {label}
      </Label>
      <Input id="textInput" placeholder={placeholder} />
    </div>
  )
}

export default TextInput
