import type { FunctionComponent, JSX, SVGProps } from 'react'
import '@/styles/formSection.scss'
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
    <section className="section-wrapper">
      <div className="wrapper">
        <div className={`icon-wrapper ${className}`}>
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
