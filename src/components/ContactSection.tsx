import type { JSX } from 'react'
import PhoneIcon from '@/assets/icons/phone.svg?react'
import FormSection from './FormSection'
import TextInput from './TextInput'
import styles from '@/styles/contactSection.module.scss'
import { Button } from './ui/button'
import AddIcon from '@/assets/icons/add_icon.svg?react'

export default function ContactSection(): JSX.Element {
  return (
    <FormSection
      header={'Emergency Contacts'}
      description={'CONTACT LIST'}
      className={'phone'}
      Icon={PhoneIcon}
    >
      <div className={styles.container}>
        <TextInput className="mt-3" placeholder="Contact name" />
        <TextInput className="mt-3" placeholder="Phone number" />
        <TextInput className="mt-3" placeholder="Relationship" />
        <Button>
          <AddIcon />
          Add contact
        </Button>
      </div>
    </FormSection>
  )
}
