import { auth } from '@/App'
import { onAuthStateChanged, type User } from 'firebase/auth'
import { useEffect, useState } from 'react'

const useAuth = (): User => {
  const [currentUser, setCurrentUser] = useState<User>()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setCurrentUser(user)
      }
    })

    return () => unsubscribe()
  }, [])

  return currentUser
}

export default useAuth
