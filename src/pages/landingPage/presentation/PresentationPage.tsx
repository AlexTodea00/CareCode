import type { JSX } from 'react'
import styles from '@/styles/presentationPage.module.scss'
import { Button } from '@/components/ui/button'
import QRCodeSample from './QRCodeSample'

export default function PresentationPage(): JSX.Element {
  return (
    <section className={styles.section}>
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
        <Button className={`${styles.button} ${styles.primary}`} type="button">
          Get yours
        </Button>
        <Button
          className={`${styles.button} ${styles.secondary}`}
          type="button"
        >
          How it works
        </Button>
      </div>
      <QRCodeSample />
    </section>
  )
}
