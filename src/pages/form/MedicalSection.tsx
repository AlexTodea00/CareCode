import { type JSX } from 'react'
import FormSection from '../../components/FormSection'
import InfoContainer from '../../components/InfoContainer'
import HeartIcon from '@/assets/icons/heart.svg?react'
import styles from '@/styles/medicalSection.module.scss'
import { useFormContext } from 'react-hook-form'
import type { FormType } from '@/pages/form/CareCodeForm'
import MedicalInfoInputField from '@/components/MedicalInfoInputField'

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
}

export default function MedicalSection({
  allergies,
  medications,
  conditions,
  onAddButtonClick,
  handlePillClick,
}: Props): JSX.Element {
  const form = useFormContext<FormType>()

  return (
    <FormSection
      header="Medical Information"
      description="HEALTH DETAILS"
      Icon={HeartIcon}
      className="heart"
    >
      <div className={styles.container}>
        <MedicalInfoInputField
          label="Allergies"
          placeholder="Add allergy..."
          register={form.register('allergy')}
          onClick={() => {
            if (form.watch('allergy'))
              onAddButtonClick('allergies', form.watch('allergy'))
            form.resetField('allergy')
          }}
        />
      </div>
      <InfoContainer
        content={allergies}
        placeholder={'No allergies recorded'}
        onClick={handlePillClick}
        category="allergies"
      />
      <div className={styles.container}>
        <MedicalInfoInputField
          label="Medications"
          placeholder="Add medication..."
          register={form.register('medication')}
          onClick={() => {
            if (form.watch('medication'))
              onAddButtonClick('medications', form.watch('medication'))
            form.resetField('medication')
          }}
        />
      </div>
      <InfoContainer
        content={medications}
        placeholder={'No medication recorded'}
        onClick={handlePillClick}
        category="medications"
      />
      <div className={styles.container}>
        <MedicalInfoInputField
          label="Medical conditions"
          placeholder="Add condition..."
          register={form.register('condition')}
          onClick={() => {
            if (form.watch('condition'))
              onAddButtonClick('conditions', form.watch('condition'))
            form.resetField('condition')
          }}
        />
      </div>
      <InfoContainer
        content={conditions}
        placeholder={'No conditions recorded'}
        onClick={handlePillClick}
        category="conditions"
      />
    </FormSection>
  )
}
