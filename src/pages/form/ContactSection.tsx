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
import { useTranslation } from 'react-i18next'

type Props = {
  contacts: ContactInfo[]
  handleContactClick: (newContact: ContactInfo) => void
  handleRemoveContactClick: (contact: ContactInfo) => void
  readOnly?: boolean
}

export default function ContactSection({
  contacts,
  handleContactClick,
  handleRemoveContactClick,
  readOnly = false,
}: Props): JSX.Element {
  const form = useFormContext<FormType>()
  const { t } = useTranslation()

  return (
    <FormSection
      header={t('carecodeForm.contactsSection.title')}
      description={t('carecodeForm.contactsSection.subtitle')}
      className={'phone'}
      Icon={PhoneIcon}
    >
      <div className={styles.container}>
        {!readOnly && (
          <>
            <TextInput
              register={form.register('contactName')}
              placeholder={t('form.input.contact.name')}
            />
            <TextInput
              register={form.register('phoneNumber')}
              placeholder={t('form.input.contact.phoneNumber')}
            />
            <TextInput
              register={form.register('relationship')}
              placeholder={t('form.input.contact.relationship')}
            />
            <Button
              onClick={() => {
                handleContactClick({
                  id: uuid(),
                  contactName: form.watch('contactName'),
                  relationship: form.watch('relationship'),
                  phoneNumber: form.watch('phoneNumber'),
                })
                form.resetField('contactName')
                form.resetField('relationship')
                form.resetField('phoneNumber')
              }}
              type="button"
            >
              <AddIcon />
              {t('form.input.contact.add')}
            </Button>
          </>
        )}
      </div>
      {contacts?.map(contact => (
        <ContactCard
          readOnly={readOnly}
          onClick={handleRemoveContactClick}
          key={contact.id}
          content={contact}
        />
      ))}
    </FormSection>
  )
}
