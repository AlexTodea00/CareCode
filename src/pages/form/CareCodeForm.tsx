import type { JSX } from 'react'
import Page from '@/components/Page'
import FormSection from '@/components/FormSection'
import UploadPhoto from '@/components/UploadPhoto'
import PersonIcon from '@/assets/icons/person.svg?react'
import HeartIcon from '@/assets/icons/heart.svg?react'
import TextInput from '@/components/TextInput'
import DropdownInput from '@/components/DropdownInput'
import { BLOOD_TYPE } from '@/utils/general'

function CareCodeForm(): JSX.Element {
  return (
    <Page title="CareCode" description="EMERGENCY MEDICAL INFORMATION">
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
      <FormSection
        header="Medical Information"
        description="HEALTH DETAILS"
        Icon={HeartIcon}
        className="heart"
      >
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
      </FormSection>
    </Page>
  )
}

export default CareCodeForm
