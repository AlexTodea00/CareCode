import type { JSX } from 'react'
import styles from '@/styles/qrCodeSample.module.scss'
import QRCode from '@/assets/illustrations/qr_code.svg?react'

export default function QRCodeSample(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <QRCode width={128} height={128} />
      </div>
      <span>Sample QR code</span>
      <div className={styles.wrapper}>
        <span>EXAMPLE MEDICAL INFO:</span>
        <span>
          Blood type: <strong>O+</strong>
        </span>
        <span>
          Allergies: <strong>Penicillin</strong>
        </span>
        <span>
          Conditions: <strong>Diabetes</strong>
        </span>
        <span>
          Contacts: <strong>Scan for more</strong>
        </span>
      </div>
    </div>
  )
}
