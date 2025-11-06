import type { JSX } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'
import { Label } from './ui/label'

export type DropdownValue = {
  text: string
  value: string
}

type Props = {
  items: DropdownValue[]
  label: string
  defaultValue: string
  disabled: boolean
  onChange?: (v: string) => void
}

function DropdownInput({
  items,
  label,
  defaultValue,
  disabled,
  onChange,
}: Props): JSX.Element {
  return (
    <div className="mt-3.5">
      <Label className="mb-1.5" htmlFor="dropdown">
        {label}
      </Label>
      <Select
        onValueChange={onChange}
        disabled={disabled}
        defaultValue={defaultValue}
      >
        <SelectTrigger className="w-[100%]">
          <SelectValue placeholder="Select blood type" />
        </SelectTrigger>
        <SelectContent id='"dropdown"'>
          {items.map(item => {
            return (
              <SelectItem key={item.value} value={item.value}>
                {item.text}
              </SelectItem>
            )
          })}
        </SelectContent>
      </Select>
    </div>
  )
}

export default DropdownInput
