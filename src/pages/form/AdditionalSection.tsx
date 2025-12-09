import type { JSX } from 'react'
import FormSection from '../../components/FormSection'
import AdditionalInfoIcon from '@/assets/icons/additional_info.svg?react'
import { useFormContext } from 'react-hook-form'
import { Textarea } from '../../components/ui/textarea'
import { useTranslation } from 'react-i18next'

type Props = {
  readOnly?: boolean
  defaultValue?: string
}

export default function AdditionalSection({
  readOnly = false,
  defaultValue,
}: Props): JSX.Element {
  const form = useFormContext()
  const { t } = useTranslation()
  return (
    <FormSection
      header={t('carecodeForm.additionalSection.title')}
      description={t('carecodeForm.additionalSection.subtitle')}
      className={'additional'}
      Icon={AdditionalInfoIcon}
    >
      <Textarea
        disabled={readOnly}
        className="mt-4"
        placeholder={t('form.input.additionalInfo.label')}
        {...form.register('additionalInfo')}
        defaultValue={defaultValue}
      ></Textarea>
    </FormSection>
  )
}
