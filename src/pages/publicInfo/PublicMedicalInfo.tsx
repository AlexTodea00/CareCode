import type { JSX } from 'react'
import PersonalInfo from '../myAccount/PersonalInfo'
import { useSearchParams } from 'react-router-dom'
import LoadingSpinner from '@/components/LoadingSpinner'
import useUser from '@/hooks/useUser'

export default function PublicMedicalInfo(): JSX.Element {
  const [searchParams] = useSearchParams()

  const userId = searchParams.get('id')

  const { data, isLoading } = useUser(userId)

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <PersonalInfo isPrivate={false} user={data} />
  )
}
