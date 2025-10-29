import { db } from '@/App'
import type { CurrentUser } from '@/types/user'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { doc, getDoc } from 'firebase/firestore'

type useUserByIdReturnProps = {
  data: CurrentUser
  isLoading: boolean
  mutate: () => void
}

const useUserById = (id: string): useUserByIdReturnProps => {
  const queryKey = 'userByIdInfo'
  const docRef = doc(db, 'users', id)

  const fetcher = async (): Promise<CurrentUser> => {
    const docSnap = await getDoc(docRef)

    return docSnap.data() as CurrentUser
  }

  const { data, isFetching: isLoading } = useQuery({
    queryKey: [queryKey],
    queryFn: fetcher,
    enabled: !!id,
  })

  const queryClient = useQueryClient()
  const invalidateQuery = (): void => {
    queryClient.invalidateQueries({ queryKey: [queryKey] })
  }

  return {
    data,
    isLoading,
    mutate: invalidateQuery,
  }
}

export default useUserById
