import type { JSX } from 'react'
import FormSection from './FormSection'
import InfoContainer from './InfoContainer'
import TextInput from './TextInput'
import HeartIcon from '@/assets/icons/heart.svg?react'
import { Button } from './ui/button'
import styles from '@/styles/medicalSection.module.scss'
import AddIcon from '@/assets/icons/add_icon.svg?react'

type Props = {
  allergies: string[]
  medications: string[]
  conditions: string[]
  onAddButtonClick: (
    prop: 'allergies' | 'conditions' | 'medications',
    value: string,
  ) => void
}

export default function MedicalSection({
  allergies,
  medications,
  conditions,
  onAddButtonClick,
}: Props): JSX.Element {
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
        />
        <Button onClick={() => onAddButtonClick('allergies', 'rahat')}>
          <AddIcon />
        </Button>
      </div>
      <InfoContainer
        content={allergies}
        placeholder={'No allergies recorded'}
      />
      <div className={styles.container}>
        <TextInput
          label="Medications"
          className="mt-3 max-w-full flex-1"
          placeholder="Add medication..."
        />
        <Button onClick={() => onAddButtonClick('medications', 'pisat')}>
          <AddIcon />
        </Button>
      </div>
      <InfoContainer
        content={medications}
        placeholder={'No medication recorded'}
      />
      <div className={styles.container}>
        <TextInput
          label="Medical conditions"
          className="mt-3 max-w-full flex-1"
          placeholder="Add condition..."
        />
        <Button onClick={() => onAddButtonClick('conditions', 'mazga')}>
          <AddIcon />
        </Button>
      </div>
      <InfoContainer
        content={conditions}
        placeholder={'No conditions recorded'}
      />
    </FormSection>
  )
}
