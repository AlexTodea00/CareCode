import { useState, type JSX } from 'react'
import Page from '@/components/Page'
import ProfileSection from '@/pages/form/ProfileSection'
import MedicalSection from '@/pages/form/MedicalSection'
import ContactSection from '@/pages/form/ContactSection'
import AdditionalSection from '@/pages/form/AdditionalSection'
import { Button } from '@/components/ui/button'
import type { MedicalInfo } from '@/types/medicalInfo'
import {
  FormProvider,
  useForm,
  type Resolver,
  type SubmitHandler,
} from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Form } from '@/components/ui/form'
import type { ContactInfo } from '@/types/contactInfo'
import { DOB_REGEX } from '@/utils/general'
import { Loader2Icon } from 'lucide-react'

export type FormType = {
  fullName: string
  dob: string
  bloodType: string
  picture: FileList
  allergy?: string
  medication?: string
  condition?: string
  contactName?: string
  phoneNumber?: string
  relationship?: string
  additionalInfo?: string
}

const Schema: yup.ObjectSchema<FormType> = yup.object<FormType>().shape({
  fullName: yup.string().required('Please insert full name'),
  dob: yup
    .string()
    .required('Please insert date of birth')
    .matches(DOB_REGEX, 'Incorrect format'),
  bloodType: yup.string().required('Please choose a blood type'),
  picture: yup
    .mixed<FileList>()
    .required('Please upload a picture')
    .test('required', 'Please upload a picture', value => {
      return !!value.length
    }),
  allergy: yup.string(),
  medication: yup.string(),
  condition: yup.string(),
  contactName: yup.string(),
  phoneNumber: yup.string(),
  relationship: yup.string(),
  additionalInfo: yup.string(),
})

function CareCodeForm(): JSX.Element {
  const [medicalInfo, setMedicalInfo] = useState<MedicalInfo>({
    allergies: [],
    medications: [],
    conditions: [],
  })
  const [contacts, setContacts] = useState<ContactInfo[]>([])

  const form = useForm<FormType>({
    mode: 'onSubmit',
    shouldFocusError: true,
    resolver: yupResolver(Schema) as unknown as Resolver<FormType>,
    defaultValues: {
      fullName: '',
      dob: '',
      bloodType: '',
    },
  })

  const onSubmit: SubmitHandler<FormType> = (dta: FormType) => {
    console.log(dta)

    form.reset()
  }

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

  return (
    <Page title="CareCode" description="EMERGENCY MEDICAL INFORMATION">
      <FormProvider {...form}>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
            <ProfileSection />
            <MedicalSection
              handlePillClick={handlePillClick}
              allergies={medicalInfo.allergies}
              medications={medicalInfo.medications}
              conditions={medicalInfo.conditions}
              onAddButtonClick={handleAddClick}
            />
            <ContactSection
              handleContactClick={handleAddContactClick}
              handleRemoveContactClick={handleRemoveContactClick}
              contacts={contacts}
            />
            <AdditionalSection />
            <Button type="submit" className="mt-3 w-full cursor-pointer">
              {/* <Loader2Icon className="animate-spin" /> */}
              Submit
            </Button>
          </form>
        </Form>
      </FormProvider>
    </Page>
  )
}

export default CareCodeForm
