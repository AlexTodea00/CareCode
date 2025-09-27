import type { JSX } from 'react'
import PhoneIcon from '@/assets/icons/phone.svg?react'
import FormSection from '../../components/FormSection'
import TextInput from '../../components/TextInput'
import styles from '@/styles/contactSection.module.scss'
import AddIcon from '@/assets/icons/add_icon.svg?react'
import { useFormContext } from 'react-hook-form'
import type { FormType } from '@/pages/form/CareCodeForm'
import { Button } from '../../components/ui/button'
import type { ContactInfo } from '@/types/contactInfo'
import ContactCard from './ContactCard'
import { uuid } from '@/utils/uuid'

type Props = {
  contacts: ContactInfo[]
  handleContactClick: (newContact: ContactInfo) => void
  handleRemoveContactClick: (contact: ContactInfo) => void
}

export default function ContactSection({
  contacts,
  handleContactClick,
  handleRemoveContactClick,
}: Props): JSX.Element {
  const form = useFormContext<FormType>()

  return (
    <FormSection
      header={'Emergency Contacts'}
      description={'CONTACT LIST'}
      className={'phone'}
      Icon={PhoneIcon}
    >
      <div className={styles.container}>
        <TextInput
          register={form.register('contactName')}
          placeholder="Contact name"
        />
        <TextInput
          register={form.register('phoneNumber')}
          placeholder="Phone number"
        />
        <TextInput
          register={form.register('relationship')}
          placeholder="Relationship"
        />
        <Button
          onClick={() => {
            handleContactClick({
              id: uuid(),
              contactName: form.watch('contactName'),
              relationship: form.watch('relationship'),
              phoneNumber: form.watch('phoneNumber'),
            })
            form.reset({ contactName: '', relationship: '', phoneNumber: '' })
          }}
          type="button"
        >
          <AddIcon />
          Add contact
        </Button>
      </div>
      {contacts?.map(contact => (
        <ContactCard
          onClick={handleRemoveContactClick}
          key={contact.id}
          content={contact}
        />
      ))}
    </FormSection>
  )
}
