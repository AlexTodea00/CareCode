import type { CurrentUser } from '@/types/user'
import type { JSX } from 'react'
import styles from '@/styles/personalInfo.module.scss'
import FormSection from '@/components/FormSection'
import HeartIcon from '@/assets/icons/heart.svg?react'
import TextInput from '@/components/TextInput'
import InfoContainer from '@/components/InfoContainer'
import { Label } from '@/components/ui/label'
import PhoneIcon from '@/assets/icons/phone.svg?react'
import ContactCard from '../form/ContactCard'
import AdditionalInfoIcon from '@/assets/icons/additional_info.svg?react'
import { Textarea } from '@/components/ui/textarea'
import { calculateAge } from '@/utils/calculateAge'
import { Button } from '@/components/ui/button'
import button from '@/styles/button.module.scss'
import DialogComponent from '../form/DialogComponent'
import { QRCode } from 'react-qrcode-logo'

type Props = {
  user: CurrentUser
  isPrivate?: boolean
}

export default function PersonalInfo({
  user,
  isPrivate = true,
}: Props): JSX.Element {
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
                    id="qrCode"
                    logoHeight={64}
                    logoWidth={64}
                    logoOpacity={0.7}
                    logoPaddingStyle="circle"
                    logoImage="src/assets/illustrations/carecode_logo.svg"
                    value="http://localhost:5173/public/medicalInfo?id=eUwfDbk3phPHrquhqif0Yg6wMpw1"
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
        <FormSection
          header={'Medical Info'}
          description={'Your medical information'}
          className={'heart'}
          Icon={HeartIcon}
        >
          <TextInput
            className="mt-4"
            label="Blood type"
            value={user.bloodType}
            disabled
          />
          <Label className="mt-4">Allergies</Label>
          <InfoContainer
            readOnly
            content={user.allergies}
            placeholder={'allergies'}
            category={'allergies'}
            onClick={() => {}}
          ></InfoContainer>
          <Label className="mt-4">Medication</Label>
          <InfoContainer
            readOnly
            content={user.medications}
            placeholder={'medication'}
            category={'medications'}
            onClick={() => {}}
          ></InfoContainer>
          <Label className="mt-4">Conditions</Label>
          <InfoContainer
            readOnly
            content={user.conditions}
            placeholder={'medication'}
            category={'conditions'}
            onClick={() => {}}
          ></InfoContainer>
        </FormSection>
        <FormSection
          header={'Emergency contact'}
          description={'Your emergency contacts'}
          className={'phone'}
          Icon={PhoneIcon}
        >
          {user.emergencyContacts?.map(contact => (
            <ContactCard
              readOnly
              onClick={() => {}}
              key={contact.id}
              content={contact}
            />
          ))}
        </FormSection>
        <FormSection
          header={'Additional info'}
          description={'Any other relevant information'}
          className={'additional'}
          Icon={AdditionalInfoIcon}
        >
          <Textarea
            disabled
            className="mt-4"
            defaultValue={user.additionalInfo}
          ></Textarea>
        </FormSection>
      </span>
    </section>
  )
}
