import type { JSX } from 'react'
import { Spinner } from './ui/spinner'

export default function LoadingSpinner(): JSX.Element {
  return (
    <div className="flex flex-col items-center gap-2 justify-center h-dvh">
      <Spinner className="size-12" />
      <h1>Loading data...</h1>
    </div>
  )
}
