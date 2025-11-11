import type React from 'react'
import type { JSX } from 'react'
import CareCodeLogo from '../assets/illustrations/carecode_logo.webp'
import Divider from './Divider'
import styles from '@/styles/page.module.scss'
import generalStyles from '@/styles/general.module.scss'
import CareCodeTitle from './CareCodeTitle'

type Props = {
  children: React.ReactNode
  description?: string
}

function Page({ children, description }: Props): JSX.Element {
  return (
    <main className={styles.main}>
      <div className={generalStyles.wrapper}>
        <img
          src={CareCodeLogo}
          className={styles.logo}
          width={100}
          height={100}
        />
        <div className="flex-1">
          <CareCodeTitle />
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
