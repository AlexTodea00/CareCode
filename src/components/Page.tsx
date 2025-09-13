import type React from 'react'
import type { JSX } from 'react'
import '../styles/page.scss'
import '../styles/general.scss'
import CareCodeLogo from '../assets/illustrations/carecode_logo.svg?react'
import Divider from './Divider'

type Props = {
  children: React.ReactNode
  title: string
  description?: string
}

function Page({ children, title, description }: Props): JSX.Element {
  return (
    <main>
      <div className="wrapper">
        <CareCodeLogo id="logo" width={124} height={124} />
        <div>
          <h1>{title}</h1>
          <Divider width={'150px'} />
          <p id="description">{description}</p>
        </div>
      </div>
      {children}
    </main>
  )
}

export default Page
