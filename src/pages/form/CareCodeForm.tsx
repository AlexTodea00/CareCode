import { useState, type JSX } from 'react'
import Page from '@/components/Page'
import ProfileSection from '@/components/ProfileSection'
import MedicalSection from '@/components/MedicalSection'
import ContactSection from '@/components/ContactSection'
import AdditionalSection from '@/components/AdditionalSection'
import { Button } from '@/components/ui/button'
import type { MedicalInfo } from '@/types/medicalInfo'

function CareCodeForm(): JSX.Element {
  const [medicalInfo, setMedicalInfo] = useState<MedicalInfo>({
    allergies: [],
    medications: [],
    conditions: [],
  })

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

  return (
    <Page title="CareCode" description="EMERGENCY MEDICAL INFORMATION">
      <ProfileSection />
      <MedicalSection
        allergies={medicalInfo.allergies}
        medications={medicalInfo.medications}
        conditions={medicalInfo.conditions}
        onAddButtonClick={handleAddClick}
      />
      <ContactSection />
      <AdditionalSection />
      <Button className="mt-3 w-full cursor-pointer">Submit</Button>
    </Page>
  )
}

export default CareCodeForm
