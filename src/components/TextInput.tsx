import type { JSX } from 'react'
import { Input } from './ui/input'
import { Label } from './ui/label'
import type { UseFormRegisterReturn } from 'react-hook-form'
import { INPUT_MAX_LENGTH } from '@/utils/general'

type Props = {
  placeholder: string
  label?: string
  className?: string
  register: UseFormRegisterReturn
  maxLength?: number
}

function TextInput({
  placeholder,
  label,
  className,
  register,
  maxLength = INPUT_MAX_LENGTH,
}: Props): JSX.Element {
  return (
    <div className={className}>
      <Label className="mb-1.5" htmlFor="textInput">
        {label}
      </Label>
      <Input
        maxLength={maxLength}
        id="textInput"
        placeholder={placeholder}
        {...register}
      />
    </div>
  )
}

export default TextInput
