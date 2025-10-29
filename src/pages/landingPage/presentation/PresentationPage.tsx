import type { JSX, RefObject } from 'react'
import styles from '@/styles/presentationPage.module.scss'
import button from '@/styles/button.module.scss'
import { Button } from '@/components/ui/button'
import QRCodeSample from './QRCodeSample'
import { Badge } from '@/components/ui/badge'
import type { RefType } from '../LandingPage'
import { useNavigate } from 'react-router-dom'
import { LOGIN_PATH } from '@/utils/paths'

type PresentationPageTypes = RefType & {
  onClick: (ref: RefObject<HTMLElement>) => void
  howItWorksRef: RefObject<HTMLElement>
}

export default function PresentationPage({
  ref,
  onClick,
  howItWorksRef,
}: PresentationPageTypes): JSX.Element {
  const navigate = useNavigate()

  return (
    <section ref={ref} className={styles.section}>
      <div>
        <span className={styles.text}>Medical Information</span>
        <span className={`${styles.text} ${styles['text-red']}`}>
          When It Matters Most
        </span>
        <p className={styles.description}>
          CareCode provides emergency responders instant access to your vital
          medical information through a simple QR code sticker. Because in an
          emergency, every second counts.
        </p>
        <Button
          onClick={() => navigate(`${LOGIN_PATH}?defaultValue=register`)}
          className={`${button.button} ${button.primary}`}
          type="button"
        >
          Get yours
        </Button>
        <Button
          className={`${button.button} ${button.secondary}`}
          type="button"
          onClick={() => onClick(howItWorksRef)}
        >
          How it works
        </Button>
        <div>
          <Badge className=" mt-4 h-10 justify-center mr-4" variant="outline">
            24/7 Access
          </Badge>
          <Badge className=" mt-4 h-10 justify-center" variant="outline">
            Medical support
          </Badge>
        </div>
      </div>
      <QRCodeSample />
    </section>
  )
}
