import { type JSX } from 'react'
import FormSection from '../../components/FormSection'
import InfoContainer from '../../components/InfoContainer'
import HeartIcon from '@/assets/icons/heart.svg?react'
import styles from '@/styles/medicalSection.module.scss'
import { useFormContext } from 'react-hook-form'
import type { FormType } from '@/pages/form/CareCodeForm'
import MedicalInfoInputField from '@/components/MedicalInfoInputField'
import { Label } from '@/components/ui/label'
import { useTranslation } from 'react-i18next'

type Props = {
  allergies: string[]
  medications: string[]
  conditions: string[]
  onAddButtonClick: (
    prop: 'allergies' | 'conditions' | 'medications',
    value: string,
  ) => void
  handlePillClick: (
    category: 'allergies' | 'medications' | 'conditions',
    clickedValue: string,
  ) => void
  readOnly?: boolean
}

export default function MedicalSection({
  allergies,
  medications,
  conditions,
  onAddButtonClick,
  handlePillClick,
  readOnly = false,
}: Props): JSX.Element {
  const form = useFormContext<FormType>()
  const { t } = useTranslation()

  return (
    <FormSection
      header={t('carecodeForm.medicalSection.title')}
      description={t('carecodeForm.medicalSection.subtitle')}
      Icon={HeartIcon}
      className="heart"
    >
      <div className={styles.container}>
        {readOnly && (
          <Label className="mt-4">{t('form.input.allergies.label')}</Label>
        )}
        {!readOnly && (
          <MedicalInfoInputField
            label={t('form.input.allergies.label')}
            placeholder={t('form.input.allergies.placeholder')}
            register={form.register('allergy')}
            onClick={() => {
              if (form.watch('allergy'))
                onAddButtonClick('allergies', form.watch('allergy'))
              form.resetField('allergy')
            }}
          />
        )}
      </div>
      <InfoContainer
        readOnly={readOnly}
        content={allergies}
        placeholder={t('form.input.allergies.noAllergies')}
        onClick={handlePillClick}
        category="allergies"
      />
      <div className={styles.container}>
        {readOnly && (
          <Label className="mt-4">{t('form.input.medications.label')}</Label>
        )}
        {!readOnly && (
          <MedicalInfoInputField
            label={t('form.input.medications.label')}
            placeholder={t('form.input.medications.placeholder')}
            register={form.register('medication')}
            onClick={() => {
              if (form.watch('medication'))
                onAddButtonClick('medications', form.watch('medication'))
              form.resetField('medication')
            }}
          />
        )}
      </div>
      <InfoContainer
        readOnly={readOnly}
        content={medications}
        placeholder={t('form.input.medications.noMedications')}
        onClick={handlePillClick}
        category="medications"
      />
      <div className={styles.container}>
        {readOnly && (
          <Label className="mt-4">{t('form.input.conditions.label')}</Label>
        )}
        {!readOnly && (
          <MedicalInfoInputField
            label={t('form.input.conditions.label')}
            placeholder={t('form.input.conditions.placeholder')}
            register={form.register('condition')}
            onClick={() => {
              if (form.watch('condition'))
                onAddButtonClick('conditions', form.watch('condition'))
              form.resetField('condition')
            }}
          />
        )}
      </div>
      <InfoContainer
        readOnly={readOnly}
        content={conditions}
        placeholder={t('form.input.conditions.noConditions')}
        onClick={handlePillClick}
        category="conditions"
      />
    </FormSection>
  )
}
