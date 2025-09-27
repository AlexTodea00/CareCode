import type { DropdownValue } from '@/components/DropdownInput'

export const BLOOD_TYPE: DropdownValue[] = [
  { text: 'A+', value: 'A+' },
  { text: 'A-', value: 'A-' },
  { text: 'B+', value: 'B+' },
  { text: 'B-', value: 'B-' },
  { text: 'AB+', value: 'AB+' },
  { text: 'AB-', value: 'AB-' },
  { text: 'O+', value: 'O+' },
  { text: 'O-', value: 'O-' },
]

export const INPUT_MAX_LENGTH = 255

export const DOB_REGEX = new RegExp(
  /^(0?[1-9]|[12][0-9]|3[01])[\\/](0?[1-9]|1[012])[\\/]\d{4}$/,
)

export const EMAIL_REGEX = new RegExp(
  /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim,
)

export const PASSWORD_REGEX = new RegExp(
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
)
