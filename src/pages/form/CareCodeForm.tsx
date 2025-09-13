import type { JSX } from 'react'
import Page from '../../components/Page'
import FormSection from '../../components/FormSection'
import UploadPhoto from 'components/UploadPhoto'
import PersonIcon from 'assets/icons/person.svg?react'

function CareCodeForm(): JSX.Element {
  return (
    <Page title="CareCode" description="EMERGENCY MEDICAL INFORMATION">
      <FormSection
        header="Personal Information"
        description="BASIC IDENTITY"
        className="person"
        Icon={PersonIcon}
      >
        <UploadPhoto />
      </FormSection>
    </Page>
  )
}

export default CareCodeForm
