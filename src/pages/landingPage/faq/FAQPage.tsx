import type { JSX } from 'react'
import styles from '@/styles/landingPageGeneral.module.scss'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import type { RefType } from '../LandingPage'
import { useTranslation } from 'react-i18next'

export default function FAQPage({ ref }: RefType): JSX.Element {
  const { t } = useTranslation()

  return (
    <section ref={ref} className={`${styles.container} bg-[#f9fafb] `}>
      <h1 className={styles.title}>{t('translation.faqPage.title')}</h1>
      <p className={styles.subtitle}>{t('translation.faqPage.subtitle')}</p>
      <div className={styles['accordion-wrapper']}>
        <Accordion
          className={`${styles.accordion} mt-10`}
          type="multiple"
          defaultValue={['item-1', 'item-2', 'item-3', 'item-4']}
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>
              {t('translation.faqPage.q1.question')}
            </AccordionTrigger>
            <AccordionContent>
              {t('translation.faqPage.q1.answer')}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              {t('translation.faqPage.q2.question')}
            </AccordionTrigger>
            <AccordionContent>
              {t('translation.faqPage.q2.answer')}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              {t('translation.faqPage.q3.question')}
            </AccordionTrigger>
            <AccordionContent>
              {t('translation.faqPage.q3.answer')}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              {t('translation.faqPage.q4.question')}
            </AccordionTrigger>
            <AccordionContent>
              {t('translation.faqPage.q4.answer')}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <span className="mt-10 ">
        {t('translation.footer.question')}
        <a className={styles.link} href="mailto:alextodea14@yahoo.ro">
          {t('translation.footer.contact')}
        </a>
      </span>
    </section>
  )
}
