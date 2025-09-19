import type { JSX } from 'react'
import FormSection from './FormSection'
import PersonIcon from '@/assets/icons/person.svg?react'
import { BLOOD_TYPE } from '@/utils/general'
import DropdownInput from './DropdownInput'
import TextInput from './TextInput'
import UploadPhoto from './UploadPhoto'

export default function ProfileSection(): JSX.Element {
  return (
    <FormSection
      header="Personal Information"
      description="BASIC IDENTITY"
      className="person"
      Icon={PersonIcon}
    >
      <UploadPhoto />
      <div className="flex mt-5 gap-4">
        <TextInput
          className="max-w-full flex-1"
          placeholder="Enter your full name"
          label="First name*"
        />
        <TextInput
          className="max-w-full flex-1"
          placeholder="dd/mm/yyyy"
          label="Date of birth*"
        />
      </div>
      <DropdownInput items={BLOOD_TYPE} />
    </FormSection>
  )
}
