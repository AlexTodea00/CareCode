import Page from '@/components/Page'
import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/ui/spinner'
import { MY_ACCOUNT_PATH } from '@/utils/paths'
import { supabase } from '@/utils/supabase'

import { useState, type JSX } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Checkout(): JSX.Element {
  const sessionStorage = window.sessionStorage
  const navigate = useNavigate()

  const email = sessionStorage.getItem('email')
  const password = sessionStorage.getItem('password')

  const personalInfo = JSON.parse(sessionStorage.getItem('personalInfo'))
  const medicalInfo = JSON.parse(sessionStorage.getItem('medicalInfo'))
  const emergencyContacts = JSON.parse(sessionStorage.getItem('contacts'))

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const userData = {
    full_name: personalInfo.fullName,
    dob: personalInfo.dob,
    blood_type: personalInfo.bloodType,
    weight: Number(personalInfo.weight),
    height: Number(personalInfo.height),
    allergies: medicalInfo.allergies,
    medications: medicalInfo.medications,
    conditions: medicalInfo.conditions,
    terms_and_conditions: sessionStorage.getItem('termsAndConditions'),
    emergency_contacts: emergencyContacts,
    additional_info: sessionStorage.getItem('additionalInfo'),
  }

  const onClick = async (): Promise<void> => {
    setIsLoading(true)

    const { data: result } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: userData,
      },
    })

    setIsLoading(false)

    if (result.session) {
      navigate(MY_ACCOUNT_PATH)
    }
  }

  return (
    <Page>
      <div>Checkout</div>
      <Button type="button" disabled={isLoading} onClick={onClick}>
        {isLoading && <Spinner />}
        Mock checkout complete
      </Button>
    </Page>
  )
}
