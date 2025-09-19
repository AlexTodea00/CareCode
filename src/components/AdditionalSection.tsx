import type { JSX } from 'react'
import FormSection from './FormSection'
import AdditionalInfoIcon from '@/assets/icons/additional_info.svg?react'
import TextArea from './TextArea'

export default function AdditionalSection(): JSX.Element {
  return (
    <FormSection
      header={'Additional Information'}
      description={'EXTRA DETAILS'}
      className={'additional'}
      Icon={AdditionalInfoIcon}
    >
      <TextArea
        className="mt-4"
        placeholder="Any other relevant information"
      ></TextArea>
    </FormSection>
  )
}
