import { useState, type JSX, type RefObject } from 'react'
import CareCodeLogo from '@/assets/illustrations/carecode_logo.svg'
import styles from '@/styles/navbar.module.scss'
import { Button } from './ui/button'
import HamburgerIcon from '@/assets/icons/hamburger.svg?react'
import CrossIcon from '@/assets/icons/cross_icon.svg?react'

type SectionRefs = {
  presentation: RefObject<HTMLElement>
  howItWorks: RefObject<HTMLElement>
  features: RefObject<HTMLElement>
  pricing: RefObject<HTMLElement>
  faq: RefObject<HTMLElement>
}

type Props = {
  sectionRefs: SectionRefs
}

function NavBar({ sectionRefs }: Props): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const menuItems = [
    { label: 'How it works', ref: sectionRefs.howItWorks },
    { label: 'Features', ref: sectionRefs.features },
    { label: 'Pricing', ref: sectionRefs.pricing },
    { label: 'FAQ', ref: sectionRefs.faq },
  ]

  const onClick = (ref: RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav>
      <ul className={styles['navbar-content']}>
        <img
          className={styles.image}
          width={80}
          height={80}
          src={CareCodeLogo}
          alt=""
          onClick={() => scrollTo(0, 0)}
        />
        {menuItems.map(item => (
          <li onClick={() => onClick(item.ref)} key={item.label}>
            {item.label}
          </li>
        ))}
        <Button className={styles['get-started']} type="button">
          Get started
        </Button>
      </ul>

      <div className={styles['hamburger-header']}>
        <img
          className={styles.image}
          width={80}
          height={80}
          src={CareCodeLogo}
          alt=""
        />
        {!isOpen ? (
          <button>
            <HamburgerIcon onClick={() => setIsOpen(true)} />
          </button>
        ) : (
          <button>
            <CrossIcon onClick={() => setIsOpen(false)} />
          </button>
        )}
      </div>

      <ul
        className={`${styles['hamburger-content']} ${isOpen ? styles['open'] : ''}`}
      >
        {menuItems.map(item => (
          <li onClick={() => onClick(item.ref)} key={item.label}>
            {item.label}
          </li>
        ))}
        <Button className={styles['get-started']} type="button">
          Get started
        </Button>
      </ul>
    </nav>
  )
}

export default NavBar
