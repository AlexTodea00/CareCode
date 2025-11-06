import { db } from '@/App'
import type { CurrentUser } from '@/types/user'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { type User } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'

type useUserReturnProps = {
  data: CurrentUser
  isLoading: boolean
  mutate: () => void
}

const useUser = (currentUser: User): useUserReturnProps => {
  const queryKey = 'userInfo'

  const fetcher = async (): Promise<CurrentUser> => {
    const docRef = currentUser ? doc(db, 'users', currentUser.uid) : undefined
    const docSnap = await getDoc(docRef)

    return docSnap.data() as CurrentUser
  }

  const { data, isFetching: isLoading } = useQuery({
    queryKey: [`${queryKey}_${currentUser?.uid}`],
    queryFn: fetcher,
    enabled: !!currentUser,
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

export default useUser
