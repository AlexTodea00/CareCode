import type React from 'react'
import type { JSX } from 'react'
import CareCodeLogo from '../assets/illustrations/carecode_logo.svg?react'
import Divider from './Divider'
import styles from '@/styles/page.module.scss'
import generalStyles from '@/styles/general.module.scss'

type Props = {
  children: React.ReactNode
  title: string
  description?: string
}

function Page({ children, title, description }: Props): JSX.Element {
  return (
    <main>
      <div className={generalStyles.wrapper}>
        <CareCodeLogo className={styles.logo} width={124} height={124} />
        <div className="flex-1">
          <h1>{title}</h1>
          <Divider width={'150px'} />
          <p className="mt-1.5 p-[0.5rem 0 0 0] text-center" id="description">
            {description}
          </p>
        </div>
      </div>
      {children}
    </main>
  )
}

export default Page
