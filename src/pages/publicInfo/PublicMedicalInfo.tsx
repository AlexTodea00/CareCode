import type { JSX } from 'react'
import PersonalInfo from '../myAccount/PersonalInfo'
import useUserById from '@/hooks/useUserById'
import { useSearchParams } from 'react-router-dom'
import { Spinner } from '@/components/ui/spinner'

export default function PublicMedicalInfo(): JSX.Element {
  const [searchParams] = useSearchParams()

  const userId = searchParams.get('id')

  const { data, isLoading } = useUserById(userId)

  console.log(data)

  return isLoading ? (
    <div className="flex flex-col items-center gap-2 justify-center h-dvh">
      <Spinner className="size-12" />
      <h1>Loading data...</h1>
    </div>
  ) : (
    <PersonalInfo isPrivate={false} user={data} />
  )
}
