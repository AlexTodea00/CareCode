import type { JSX } from 'react'
import styles from '@/styles/landingPageGeneral.module.scss'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import type { RefType } from '../LandingPage'

export default function FAQPage({ ref }: RefType): JSX.Element {
  return (
    <section ref={ref} className={`${styles.container} bg-[#f9fafb] `}>
      <h1 className={styles.title}>Frequently Asked Questions</h1>
      <p className={styles.subtitle}>
        Everything you need to know about CareCode
      </p>
      <div className={styles['accordion-wrapper']}>
        <Accordion
          className={`${styles.accordion} mt-10`}
          type="multiple"
          defaultValue={['item-1', 'item-2', 'item-3', 'item-4']}
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>
              How does CareCode store my information?
            </AccordionTrigger>
            <AccordionContent>
              Your information is stored in secure, encrypted databases, and you
              control exactly what information is accessible when your QR code
              is scanned.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              How do I update my medical information?
            </AccordionTrigger>
            <AccordionContent>
              You can update your information anytime through the portal app by
              logging into your account. Changes are instantly reflected when
              your QR code is scanned, without needing to replace your stickers
              or products.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Can I use CareCode for my children or elderly parents?
            </AccordionTrigger>
            <AccordionContent>
              Absolutely! CareCode is perfect for children, elderly individuals,
              or anyone who might not be able to communicate their medical needs
              in an emergency.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              What happens if my QR code is scanned by someone other than
              medical personnel?
            </AccordionTrigger>
            <AccordionContent>
              You control what information is visible. By default, all your
              relevant medical information is shared when the QR code is scanned
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <span className="mt-10 ">
        Still have questions?
        <a className={styles.link} href="mailto:alextodea14@yahoo.ro">
          Contact us
        </a>
      </span>
    </section>
  )
}
