import type { JSX } from 'react'
import Page from '@/components/Page'
import FormSection from '@/components/FormSection'
import UploadPhoto from '@/components/UploadPhoto'
import PersonIcon from '@/assets/icons/person.svg?react'
import HeartIcon from '@/assets/icons/heart.svg?react'
import PhoneIcon from '@/assets/icons/phone.svg?react'
import TextInput from '@/components/TextInput'
import DropdownInput from '@/components/DropdownInput'
import { BLOOD_TYPE } from '@/utils/general'
import InfoContainer from '@/components/InfoContainer'

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
        <TextInput
          label="Allergies"
          className="mt-3 max-w-full flex-1"
          placeholder="Add allergy..."
        />
        <InfoContainer content={[]} placeholder={'No allergies recorded'} />
        <TextInput
          label="Medications"
          className="mt-3 max-w-full flex-1"
          placeholder="Add medication..."
        />
        <InfoContainer content={[]} placeholder={'No medication recorded'} />
        <TextInput
          label="Medical conditions"
          className="mt-3 max-w-full flex-1"
          placeholder="Add condition..."
        />
        <InfoContainer content={[]} placeholder={'No conditions recorded'} />
      </FormSection>
      <FormSection
        header={'Emergency Contacts'}
        description={'CONTACT LIST'}
        className={'phone'}
        Icon={PhoneIcon}
      >
        <div></div>
      </FormSection>
    </Page>
  )
}

export default CareCodeForm
