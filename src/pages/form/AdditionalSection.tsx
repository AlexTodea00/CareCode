import type { JSX } from 'react'
import FormSection from '../../components/FormSection'
import AdditionalInfoIcon from '@/assets/icons/additional_info.svg?react'
import { useFormContext } from 'react-hook-form'
import { Textarea } from '../../components/ui/textarea'

type Props = {
  readOnly?: boolean
  defaultValue?: string
}

export default function AdditionalSection({
  readOnly = false,
  defaultValue,
}: Props): JSX.Element {
  const form = useFormContext()

  return (
    <FormSection
      header={'Additional Information'}
      description={'EXTRA DETAILS'}
      className={'additional'}
      Icon={AdditionalInfoIcon}
    >
      <Textarea
        disabled={readOnly}
        className="mt-4"
        placeholder="Any other relevant information"
        {...form.register('additionalInfo')}
        defaultValue={defaultValue}
      ></Textarea>
    </FormSection>
  )
}
