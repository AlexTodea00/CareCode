import { INPUT_MAX_LENGTH } from '@/utils/general'
import type { JSX } from 'react'
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from './ui/form'
import { Input } from './ui/input'
import type { FieldValues, Path, UseFormReturn } from 'react-hook-form'

type Props<T extends FieldValues> = {
  form: UseFormReturn<T>
  label: string
  placeholder: string
  name: Path<T>
  maxLength?: number
  className?: string
  disabled?: boolean
  type?: 'text' | 'number'
}

export default function TextFormField<T extends FieldValues>({
  form,
  label,
  placeholder,
  name,
  maxLength = INPUT_MAX_LENGTH,
  className,
  disabled = false,
  type = 'text',
}: Props<T>): JSX.Element {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={`${className} max-w-full flex-1`}>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              type={type}
              disabled={disabled}
              maxLength={maxLength}
              placeholder={placeholder}
              {...field}
            ></Input>
          </FormControl>
          <FormDescription />
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
