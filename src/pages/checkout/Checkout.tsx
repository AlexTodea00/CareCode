import { auth, db } from '@/App'
import Page from '@/components/Page'
import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/ui/spinner'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'

import { useState, type JSX } from 'react'

export default function Checkout(): JSX.Element {
  const sessionStorage = window.sessionStorage

  const email = sessionStorage.getItem('email')
  const password = sessionStorage.getItem('password')

  const personalInfo = JSON.parse(sessionStorage.getItem('personalInfo'))
  const medicalInfo = JSON.parse(sessionStorage.getItem('medicalInfo'))
  const emergencyContacts = JSON.parse(sessionStorage.getItem('contacts'))

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const onClick = async (): Promise<void> => {
    setIsLoading(true)
    const res = await createUserWithEmailAndPassword(auth, email, password)

    const data = {
      id: res.user.uid,
      fullName: personalInfo.fullName,
      dob: personalInfo.dob,
      bloodType: personalInfo.bloodType,
      weight: personalInfo.weight,
      height: personalInfo.height,
      allergies: medicalInfo.allergies,
      medications: medicalInfo.medications,
      conditions: medicalInfo.conditions,
      termsAndConditions: sessionStorage.getItem('termsAndConditions'),
      emergencyContacts: emergencyContacts,
      additionalInfo: sessionStorage.getItem('additionalInfo'),
    }

    await setDoc(doc(db, 'users', res.user.uid), data)

    setIsLoading(false)
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
