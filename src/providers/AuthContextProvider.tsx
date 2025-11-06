import { createContext, type JSX, type ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const AuthContextProvider = createContext(null)

export default function AuthContextProviderWrapper({
  children,
}: Props): JSX.Element {
  return <>{children}</>
}
