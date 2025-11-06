import type { JSX } from 'react'
import PersonalInfo from '../myAccount/PersonalInfo'
import useUserById from '@/hooks/useUserById'
import { useSearchParams } from 'react-router-dom'
import LoadingSpinner from '@/components/LoadingSpinner'

export default function PublicMedicalInfo(): JSX.Element {
  const [searchParams] = useSearchParams()

  const userId = searchParams.get('id')

  const { data, isLoading } = useUserById(userId)

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <PersonalInfo isPrivate={false} user={data} />
  )
}
