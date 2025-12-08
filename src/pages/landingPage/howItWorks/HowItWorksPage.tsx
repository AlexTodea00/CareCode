import type { JSX } from 'react'
import styles from '@/styles/landingPageGeneral.module.scss'
import StepCard from './Card'
import EditIcon from '@/assets/icons/edit.svg?react'
import QRCodeIcon from '@/assets/icons/qr_icon_small.svg?react'
import AmbulanceIcon from '@/assets/icons/ambulance.svg?react'
import HeartIcon from '@/assets/icons/heart_small.svg?react'
import { Button } from '@/components/ui/button'
import type { RefType } from '../LandingPage'
import { useNavigate } from 'react-router-dom'
import { LOGIN_PATH } from '@/utils/paths'
import { useTranslation } from 'react-i18next'

export default function HowItWorksPage({ ref }: RefType): JSX.Element {
  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <section ref={ref} className={styles.container}>
      <h1 className={styles.title}>{t('translation.howItWorksPage.title')}</h1>
      <p className={styles.subtitle}>
        {t('translation.howItWorksPage.subtitle')}
      </p>
      <div className={styles.wrapper}>
        <StepCard
          title={t('translation.howItWorksPage.steps.1.title')}
          description={t('translation.howItWorksPage.steps.1.description')}
          Icon={EditIcon}
        />
        <StepCard
          title={t('translation.howItWorksPage.steps.2.title')}
          description={t('translation.howItWorksPage.steps.2.description')}
          Icon={QRCodeIcon}
        />
        <StepCard
          title={t('translation.howItWorksPage.steps.3.title')}
          description={t('translation.howItWorksPage.steps.3.description')}
          Icon={AmbulanceIcon}
        />
        <StepCard
          title={t('translation.howItWorksPage.steps.4.title')}
          description={t('translation.howItWorksPage.steps.4.description')}
          Icon={HeartIcon}
        />
      </div>
      <Button
        onClick={() => navigate(`${LOGIN_PATH}?defaultValue=register`)}
        className={styles['get-started']}
      >
        {t('translation.howItWorksPage.signup')}
      </Button>
    </section>
  )
}
