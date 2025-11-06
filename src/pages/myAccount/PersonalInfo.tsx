import type { CurrentUser } from '@/types/user'
import { useRef, useState, type JSX } from 'react'
import styles from '@/styles/personalInfo.module.scss'
import { calculateAge } from '@/utils/calculateAge'
import { Button } from '@/components/ui/button'
import button from '@/styles/button.module.scss'
import DialogComponent from '../form/DialogComponent'
import { QRCode } from 'react-qrcode-logo'
import ItemComponent from '@/components/Item'
import AdditionalSection from '../form/AdditionalSection'
import ContactSection from '../form/ContactSection'
import MedicalSection from '../form/MedicalSection'
import * as yup from 'yup'
import { FormProvider, useForm, type Resolver } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import type { ContactInfo } from '@/types/contactInfo'
import type { MedicalInfo } from '@/types/medicalInfo'
import { DownloadIcon, Edit3Icon } from 'lucide-react'
import CrossIcon from '@/assets/icons/cross_icon.svg?react'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '@/App'
import { toast } from 'sonner'
import { Spinner } from '@/components/ui/spinner'
import PersonIcon from '@/assets/icons/person.svg?react'
import FormSection from '@/components/FormSection'
import DropdownInput from '@/components/DropdownInput'
import { BLOOD_TYPE } from '@/utils/general'
import TextFormField from '@/components/TextFormField'

type Props = {
  user: CurrentUser
  isPrivate?: boolean
}

export type FormType = {
  bloodType: string
  weight: number
  height: number
  allergy?: string
  medication?: string
  condition?: string
  contactName?: string
  phoneNumber?: string
  relationship?: string
  additionalInfo?: string
}

const Schema: yup.ObjectSchema<FormType> = yup.object<FormType>().shape({
  bloodType: yup.string().required('Please choose a blood type'),
  weight: yup.number().required('Please enter your weight'),
  height: yup.number().required('Please enter your height'),
  allergy: yup.string(),
  medication: yup.string(),
  condition: yup.string(),
  contactName: yup.string(),
  phoneNumber: yup.string(),
  relationship: yup.string(),
  additionalInfo: yup.string(),
})

export default function PersonalInfo({
  user,
  isPrivate = true,
}: Props): JSX.Element {
  const [editMode, setEditMode] = useState<boolean>(false)
  const [medicalInfo, setMedicalInfo] = useState<MedicalInfo>({
    allergies: user.allergies,
    medications: user.medications,
    conditions: user.conditions,
  })
  const [bloodType, setBloodType] = useState(user.bloodType)

  const [contacts, setContacts] = useState<ContactInfo[]>(
    user.emergencyContacts,
  )

  const [isSubmitLoading, setIsSubmitLoading] = useState<boolean>(false)
  const qrCodeRef = useRef(null)

  const form = useForm<FormType>({
    mode: 'onSubmit',
    shouldFocusError: true,
    resolver: yupResolver(Schema) as unknown as Resolver<FormType>,
    defaultValues: {
      bloodType: user.bloodType,
      weight: user.weight,
      height: user.height,
    },
  })

  const {
    handleSubmit,
    formState: { isDirty },
  } = form

  const handleAddClick = (
    prop: 'allergies' | 'conditions' | 'medications',
    value: string,
  ) => {
    switch (prop) {
      case 'allergies':
        setMedicalInfo({
          ...medicalInfo,
          allergies: [...medicalInfo.allergies, value],
        })
        break
      case 'conditions':
        setMedicalInfo({
          ...medicalInfo,
          conditions: [...medicalInfo.conditions, value],
        })
        break
      case 'medications':
        setMedicalInfo({
          ...medicalInfo,
          medications: [...medicalInfo.medications, value],
        })
        break
    }
  }

  const handlePillClick = (
    category: 'allergies' | 'conditions' | 'medications',
    clickedValue: string,
  ) => {
    switch (category) {
      case 'allergies':
        setMedicalInfo(prev => {
          const filteredAllergies = prev.allergies.filter(
            allergy => allergy !== clickedValue,
          )

          return {
            ...prev,
            allergies: filteredAllergies,
          }
        })
        break
      case 'medications':
        setMedicalInfo(prev => {
          const filteredMedications = prev.medications.filter(
            medication => medication !== clickedValue,
          )

          return {
            ...prev,
            medications: filteredMedications,
          }
        })
        break
      case 'conditions':
        setMedicalInfo(prev => {
          const filteredConditions = prev.conditions.filter(
            condition => condition !== clickedValue,
          )

          return {
            ...prev,
            conditions: filteredConditions,
          }
        })
        break
    }
  }

  const handleAddContactClick = (newContact: ContactInfo) => {
    const { contactName, phoneNumber, relationship } = newContact
    if (contactName && phoneNumber && relationship) {
      setContacts(prev => [...prev, { ...newContact }])
    }
  }

  const handleRemoveContactClick = (contact: ContactInfo) => {
    setContacts(prev => {
      const filteredContacts = prev.filter(dta => dta.id !== contact.id)
      return [...filteredContacts]
    })
  }

  const onDropdownChange = (v: string) => {
    setBloodType(v)
  }

  const onQRCodeDownload = () => {
    const canvas = qrCodeRef.current
    if (!canvas) return
    canvas.download('png', 'carecode')
  }

  const isContactsArrayChanged =
    user.emergencyContacts.length !== contacts.length
  const isMedicalChanged =
    user.allergies.length !== medicalInfo.allergies.length ||
    user.medications.length !== medicalInfo.medications.length ||
    user.conditions.length !== medicalInfo.conditions.length

  const bloodTypeChanged = user.bloodType !== bloodType

  const onSubmit = async (dta: FormType): Promise<void> => {
    if (
      isContactsArrayChanged ||
      isMedicalChanged ||
      isDirty ||
      bloodTypeChanged
    ) {
      setIsSubmitLoading(true)
      const data = {
        ...user,
        bloodType: bloodType,
        allergies: medicalInfo.allergies,
        medications: medicalInfo.medications,
        conditions: medicalInfo.conditions,
        emergencyContacts: contacts,
        additionalInfo: dta.additionalInfo,
        weight: dta.weight,
        height: dta.height,
      }

      await setDoc(doc(db, 'users', user.id), data, { merge: true })

      toast.success('Profile info updated')
      setIsSubmitLoading(false)
    } else {
      toast.info('Please edit your details')
    }
  }

  if (!user) return

  return (
    <section className={styles.section}>
      <h1 className={styles.header}>
        {isPrivate ? 'Profile Info' : 'Shared info'}
      </h1>
      <div className={styles.wrapper}>
        <img
          className={styles.image}
          src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?semt=ais_hybrid&w=740&q=80"
          alt=""
        />
        <span>
          <h2>{user.fullName}</h2>
          <span>{user.dob}</span>
          <span className="block">{`${calculateAge(user.dob)} years old`}</span>
          {isPrivate && (
            <DialogComponent
              title={'Your QR Code'}
              description={'Scan for a preview of your information'}
              content={
                <div className={styles.qrcode}>
                  <QRCode
                    ref={qrCodeRef}
                    id="qrCode"
                    eyeRadius={12}
                    logoHeight={64}
                    logoWidth={64}
                    logoOpacity={0.5}
                    logoPaddingStyle="circle"
                    logoImage="src/assets/illustrations/carecode_logo.svg"
                    value={`${import.meta.env.VITE_BASE_URL}/public/medicalInfo?id=${user.id}`}
                  />
                  <Button
                    onClick={onQRCodeDownload}
                    className={styles.download}
                    variant="outline"
                  >
                    <DownloadIcon />
                    Download
                  </Button>
                  <ItemComponent
                    title="Note"
                    description="If you chose to print your own sticker, use the above code."
                  />
                </div>
              }
            >
              <Button
                style={{ width: 130, height: 32, margin: 0, marginTop: 12 }}
                className={`${button.button} ${button.primary}`}
              >
                Show QR Code
              </Button>
            </DialogComponent>
          )}
        </span>
      </div>
      <span className={styles.container}>
        {isPrivate && (
          <Button
            className="mt-4"
            variant="outline"
            onClick={() => setEditMode(!editMode)}
          >
            {editMode ? <CrossIcon className={styles.icon} /> : <Edit3Icon />}
            {editMode ? 'Cancel' : 'Edit'}
          </Button>
        )}
        <FormProvider {...form}>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <FormSection
              header="Personal Information"
              description="BASIC IDENTITY"
              className="person"
              Icon={PersonIcon}
            >
              <DropdownInput
                onChange={v => onDropdownChange(v)}
                items={BLOOD_TYPE}
                label={'Blood type'}
                defaultValue={bloodType}
                disabled={!editMode}
              ></DropdownInput>
              <div className="flex mt-5 gap-4">
                <TextFormField
                  label="Weight (kg)*"
                  maxLength={3}
                  placeholder="Enter your weight"
                  name="weight"
                  form={form}
                  disabled={!editMode}
                />
                <TextFormField
                  label="Height (cm)*"
                  maxLength={3}
                  placeholder="Enter your height"
                  name="height"
                  form={form}
                  disabled={!editMode}
                />
              </div>
            </FormSection>
            <MedicalSection
              readOnly={!editMode}
              handlePillClick={!editMode ? () => {} : handlePillClick}
              allergies={medicalInfo.allergies}
              medications={medicalInfo.medications}
              conditions={medicalInfo.conditions}
              onAddButtonClick={handleAddClick}
            />
            <ContactSection
              readOnly={!editMode}
              handleContactClick={handleAddContactClick}
              handleRemoveContactClick={
                !editMode ? () => {} : handleRemoveContactClick
              }
              contacts={contacts}
            />
            <AdditionalSection
              readOnly={!editMode}
              defaultValue={user.additionalInfo}
            />

            {editMode && (
              <Button type="submit" className="mt-3 w-full cursor-pointer">
                {isSubmitLoading && <Spinner />}
                Submit
              </Button>
            )}
          </form>
        </FormProvider>
      </span>
    </section>
  )
}
