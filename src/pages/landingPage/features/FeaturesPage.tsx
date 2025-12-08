import type { JSX } from 'react'
import styles from '@/styles/landingPageGeneral.module.scss'
import StepCard from '../howItWorks/Card'
import ClockIcon from '@/assets/icons/clock.svg?react'
import SmartPhoneIcon from '@/assets/icons/smartphone.svg?react'
import CloudIcon from '@/assets/icons/cloud.svg?react'
import LockIcon from '@/assets/icons/lock.svg?react'
import UpdateIcon from '@/assets/icons/update.svg?react'
import { Button } from '@/components/ui/button'
import type { RefType } from '../LandingPage'
import { LOGIN_PATH } from '@/utils/paths'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function FeaturesPage({ ref }: RefType): JSX.Element {
  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <section ref={ref} className={`${styles.container} bg-[#f9fafb]`}>
      <h1 className={styles.title}>{t('translation.featuresPage.title')}</h1>
      <p className={styles.subtitle}>
        {t('translation.featuresPage.subtitle')}
      </p>
      <div className={styles.wrapper}>
        <StepCard
          title={t('translation.featuresPage.list.accessible.title')}
          description={t(
            'translation.featuresPage.list.accessible.description',
          )}
          Icon={ClockIcon}
        />
        <StepCard
          title={t('translation.featuresPage.list.compatibility.title')}
          description={t(
            'translation.featuresPage.list.compatibility.description',
          )}
          Icon={SmartPhoneIcon}
        />
        <StepCard
          title={t('translation.featuresPage.list.cloudStorage.title')}
          description={t(
            'translation.featuresPage.list.cloudStorage.description',
          )}
          Icon={CloudIcon}
        />
        <StepCard
          title={t('translation.featuresPage.list.privacy.title')}
          description={t('translation.featuresPage.list.privacy.description')}
          Icon={LockIcon}
        />
        <StepCard
          className={styles['center-grid-element']}
          title={t('translation.featuresPage.list.updates.title')}
          description={t('translation.featuresPage.list.updates.description')}
          Icon={UpdateIcon}
        />
      </div>
      <Button
        onClick={() => navigate(`${LOGIN_PATH}?defaultValue=register`)}
        className={styles['get-started']}
      >
        {t('translation.featuresPage.getYours')}
      </Button>
    </section>
  )
}
