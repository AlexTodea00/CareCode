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
import { useNavigate } from 'react-router-dom'
import { CHECKOUT_PATH } from '@/utils/paths'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import DialogComponent from './DialogComponent'
import FieldError from '@/components/FieldError'

export type FormType = {
  fullName: string
  dob: string
  bloodType: string
  weight: number
  height: number
  picture: FileList
  allergy?: string
  medication?: string
  condition?: string
  contactName?: string
  phoneNumber?: string
  relationship?: string
  additionalInfo?: string
  termsAndConditions: boolean
}

const Schema: yup.ObjectSchema<FormType> = yup.object<FormType>().shape({
  fullName: yup.string().required('Please insert full name'),
  dob: yup
    .string()
    .required('Please insert date of birth')
    .matches(DOB_REGEX, 'Incorrect format'),
  bloodType: yup.string().required('Please choose a blood type'),
  weight: yup.number().required('Please enter your weight'),
  height: yup.number().required('Please enter your height'),
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
  termsAndConditions: yup
    .boolean()
    .oneOf([true], 'You must accept the terms and conditions')
    .required('You must accept the terms and conditions'),
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
      termsAndConditions: false,
    },
  })

  const sessionStorage = window.sessionStorage
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<FormType> = (dta: FormType) => {
    sessionStorage.setItem(
      'personalInfo',
      JSON.stringify({
        fullName: dta.fullName,
        dob: dta.dob,
        bloodType: dta.bloodType,
        weight: dta.weight,
        height: dta.height,
      }),
    )
    sessionStorage.setItem(
      'medicalInfo',
      JSON.stringify({
        allergies: medicalInfo.allergies,
        medications: medicalInfo.medications,
        conditions: medicalInfo.conditions,
      }),
    )
    sessionStorage.setItem('contacts', JSON.stringify(contacts))
    sessionStorage.setItem('additionalInfo', dta.additionalInfo)
    sessionStorage.setItem('termsAndConditions', String(dta.termsAndConditions))

    navigate(CHECKOUT_PATH)
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
    <Page description="EMERGENCY MEDICAL INFORMATION">
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
            <div className="mt-4 mb-4">
              <div className="flex items-center gap-1 mb-4">
                <Checkbox
                  id="terms"
                  onCheckedChange={checked =>
                    form.setValue('termsAndConditions', checked === true)
                  }
                  {...form.register('termsAndConditions')}
                />
                <Label htmlFor="terms" className="gap-1">
                  I agree with the
                </Label>
                <DialogComponent title="T&C" description="Insert T&C here...">
                  <a className="text-sm inline-block cursor-pointer underline text-[#e2392f]">
                    terms and conditions
                  </a>
                </DialogComponent>
              </div>
              {form.formState.errors.termsAndConditions && (
                <FieldError
                  error={form.formState.errors.termsAndConditions.message}
                />
              )}
            </div>
            <Button type="submit" className="mt-3 w-full cursor-pointer">
              Submit
            </Button>
          </form>
        </Form>
      </FormProvider>
    </Page>
  )
}

export default CareCodeForm
