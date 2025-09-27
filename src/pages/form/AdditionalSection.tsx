import type { JSX } from 'react'
import FormSection from '../../components/FormSection'
import AdditionalInfoIcon from '@/assets/icons/additional_info.svg?react'
import { useFormContext } from 'react-hook-form'
import { Textarea } from '../../components/ui/textarea'

export default function AdditionalSection(): JSX.Element {
  const form = useFormContext()

  return (
    <FormSection
      header={'Additional Information'}
      description={'EXTRA DETAILS'}
      className={'additional'}
      Icon={AdditionalInfoIcon}
    >
      <Textarea
        className="mt-4"
        placeholder="Any other relevant information"
        {...form.register('additionalInfo')}
      ></Textarea>
    </FormSection>
  )
}
