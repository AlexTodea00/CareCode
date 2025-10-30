import type { JSX } from 'react'
import TextInput from './TextInput'
import type { UseFormRegisterReturn } from 'react-hook-form'
import { Button } from './ui/button'
import AddIcon from '@/assets/icons/add_icon.svg?react'

type MedicalInputFieldProps = {
  register: UseFormRegisterReturn
  onClick: () => void
  label: string
  placeholder: string
}

export default function MedicalInfoInputField({
  register,
  onClick,
  label,
  placeholder,
}: MedicalInputFieldProps): JSX.Element {
  return (
    <>
      <TextInput
        label={label}
        className="mt-3 max-w-full flex-1"
        placeholder={placeholder}
        register={register}
      />
      <Button type="button" onClick={onClick}>
        <AddIcon />
      </Button>
    </>
  )
}
