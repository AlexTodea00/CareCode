import type { CurrentUser } from '@/types/user'
import { supabase } from '@/utils/supabase'
import { useQuery, useQueryClient } from '@tanstack/react-query'

type useUserReturnProps = {
  data: CurrentUser
  isLoading: boolean
  mutate: () => void
}

const useUser = (id: string): useUserReturnProps => {
  const queryKey = 'userInfo'
  const columnMapping =
    '*, fullName: full_name, emergencyContacts: emergency_contacts, additionalInfo: additional_info, bloodType: blood_type '

  const fetcher = async (): Promise<CurrentUser> => {
    const res = await supabase
      .from('profiles')
      .select(columnMapping)
      .eq('id', id)
      .maybeSingle()

    return res.data as unknown as CurrentUser
  }

  const { data, isFetching: isLoading } = useQuery({
    queryKey: [`${queryKey}_${id}`],
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

export default useUser
