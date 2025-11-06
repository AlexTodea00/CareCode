import { supabase } from '@/utils/supabase'
import type { Session } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'

const useAuth = (): Session => {
  const [session, setSession] = useState<Session>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
    return () => subscription.unsubscribe()
  }, [])

  return session
}

export default useAuth
