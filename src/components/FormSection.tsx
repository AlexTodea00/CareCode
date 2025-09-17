import type { FunctionComponent, JSX, SVGProps } from 'react'
import styles from '@/styles/formSection.module.scss'
import generalStyles from '@/styles/general.module.scss'

import type React from 'react'

type Props = {
  header: string
  description: string
  className: string
  children: React.ReactNode
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>
}

function FormSection({
  header,
  description,
  className,
  children,
  Icon,
}: Props): JSX.Element {
  return (
    <section className={styles['section-wrapper']}>
      <div className={generalStyles.wrapper}>
        <div className={`${styles['icon-wrapper']} ${styles[className]}`}>
          <Icon width={24} height={24} />
        </div>
        <div>
          <h2>{header}</h2>
          <p>{description}</p>
        </div>
      </div>
      {children}
    </section>
  )
}

export default FormSection
