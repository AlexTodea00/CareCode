import type { JSX, RefObject } from 'react'
import styles from '@/styles/presentationPage.module.scss'
import button from '@/styles/button.module.scss'
import { Button } from '@/components/ui/button'
import QRCodeSample from './QRCodeSample'
import { Badge } from '@/components/ui/badge'
import { useNavigate } from 'react-router-dom'
import { LOGIN_PATH } from '@/utils/paths'
import { useTranslation } from 'react-i18next'
import type { RefType } from '../LandingPage'

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
  const { t } = useTranslation()

  return (
    <section ref={ref} className={styles.section}>
      <div>
        <span className={styles.text}>{t('presentationPage.medicalInfo')}</span>
        <span className={`${styles.text} ${styles['text-red']}`}>
          {t('presentationPage.whenItMatters')}
        </span>
        <p className={styles.description}>
          {t('presentationPage.description')}
        </p>
        <Button
          onClick={() => navigate(`${LOGIN_PATH}?defaultValue=register`)}
          className={`${button.button} ${button.primary}`}
          type="button"
        >
          {t('presentationPage.buttons.getYours')}
        </Button>
        <Button
          className={`${button.button} ${button.secondary}`}
          type="button"
          onClick={() => onClick(howItWorksRef)}
        >
          {t('presentationPage.buttons.howItWorks')}
        </Button>
        <div>
          <Badge className=" mt-4 h-10 justify-center mr-4" variant="outline">
            {t('presentationPage.twentyFourSeven')}
          </Badge>
          <Badge className=" mt-4 h-10 justify-center" variant="outline">
            {t('presentationPage.medicalSupport')}
          </Badge>
        </div>
      </div>
      <QRCodeSample />
    </section>
  )
}
