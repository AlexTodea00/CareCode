import { type JSX } from 'react'
import FormSection from '../../components/FormSection'
import InfoContainer from '../../components/InfoContainer'
import TextInput from '../../components/TextInput'
import HeartIcon from '@/assets/icons/heart.svg?react'
import { Button } from '../../components/ui/button'
import styles from '@/styles/medicalSection.module.scss'
import AddIcon from '@/assets/icons/add_icon.svg?react'
import { useFormContext } from 'react-hook-form'
import type { FormType } from '@/pages/form/CareCodeForm'

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
        <TextInput
          label="Allergies"
          className="mt-3 max-w-full flex-1"
          placeholder="Add allergy..."
          register={form.register('allergy')}
        />
        <Button
          type="button"
          onClick={() => {
            if (form.watch('allergy'))
              onAddButtonClick('allergies', form.watch('allergy'))
            form.resetField('allergy')
          }}
        >
          <AddIcon />
        </Button>
      </div>
      <InfoContainer
        content={allergies}
        placeholder={'No allergies recorded'}
        onClick={handlePillClick}
        category="allergies"
      />
      <div className={styles.container}>
        <TextInput
          label="Medications"
          className="mt-3 max-w-full flex-1"
          placeholder="Add medication..."
          register={form.register('medication')}
        />
        <Button
          type="button"
          onClick={() => {
            if (form.watch('medication'))
              onAddButtonClick('medications', form.watch('medication'))
            form.resetField('medication')
          }}
        >
          <AddIcon />
        </Button>
      </div>
      <InfoContainer
        content={medications}
        placeholder={'No medication recorded'}
        onClick={handlePillClick}
        category="medications"
      />
      <div className={styles.container}>
        <TextInput
          label="Medical conditions"
          className="mt-3 max-w-full flex-1"
          placeholder="Add condition..."
          register={form.register('condition')}
        />
        <Button
          type="button"
          onClick={() => {
            if (form.watch('condition'))
              onAddButtonClick('conditions', form.watch('condition'))
            form.resetField('condition')
          }}
        >
          <AddIcon />
        </Button>
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
