import { useState, type JSX } from 'react'
import NavBarPlain from '@/components/NavBarPlain'
import PersonalInfo from './PersonalInfo'
import useUser from '@/hooks/useUser'
import useAuth from '@/hooks/useAuth'
import { Spinner } from '@/components/ui/spinner'

export const options = [
  { text: 'Personal info', value: 'personal_info' },
  { text: 'My QR code', value: 'my_qr_code' },
  // { text: 'Subscription', value: 'subscription' },
  // { text: 'Privacy & Security', value: 'privacy_security' },
  // { text: 'Help & Support', value: 'help_support' },
]

export default function MyAccount(): JSX.Element {
  const [selection, setSelection] = useState<string>(options[0].value)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const currentUser = useAuth()

  const { data: user, isLoading } = useUser(currentUser)

  return (
    <main>
      <NavBarPlain
        setSelection={setSelection}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        selection={selection}
      />
      {isLoading && !user && (
        <Spinner width={64} height={64} className="flex justify-center" />
      )}

      {!isLoading && user && selection === 'personal_info' && (
        <PersonalInfo user={user} />
      )}
      {/* {!isLoading && user && selection === 'my_qr_code' && <MyQRCode />} */}
    </main>
  )
}
