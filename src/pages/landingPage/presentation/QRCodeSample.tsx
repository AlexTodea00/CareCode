import type { JSX } from 'react'
import styles from '@/styles/qrCodeSample.module.scss'
import QRCode from '@/assets/illustrations/qr_code.svg?react'
import { Trans, useTranslation } from 'react-i18next'

export default function QRCodeSample(): JSX.Element {
  const { t } = useTranslation()

  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <QRCode width={128} height={128} />
      </div>
      <span>{t('presentationPage.qrCodeSample.sample')}</span>
      <div className={styles.wrapper}>
        <span>{t('presentationPage.qrCodeSample.exampleMedicalInfo')}</span>
        <span>
          <Trans i18nKey={'presentationPage.qrCodeSample.bloodType'}></Trans>
        </span>
        <span>
          <Trans i18nKey={'presentationPage.qrCodeSample.allergies'}></Trans>
        </span>
        <span>
          <Trans i18nKey={'presentationPage.qrCodeSample.conditions'}></Trans>
        </span>
        <span>
          <Trans i18nKey={'presentationPage.qrCodeSample.contacts'}></Trans>
        </span>
      </div>
    </div>
  )
}
