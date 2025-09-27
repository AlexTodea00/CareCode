import { useState, type JSX } from 'react'
import CareCodeLogo from '@/assets/illustrations/carecode_logo.svg'
import styles from '@/styles/navbar.module.scss'
import { Button } from './ui/button'
import HamburgerIcon from '@/assets/icons/hamburger.svg?react'
import CrossIcon from '@/assets/icons/cross_icon.svg?react'

function NavBar(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <nav>
      <ul className={styles['navbar-content']}>
        <img
          className={styles.image}
          width={80}
          height={80}
          src={CareCodeLogo}
          alt=""
        />
        <li>How it works</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>FAQ</li>
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
        <li>How it works</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>FAQ</li>
        <Button className={styles['get-started']} type="button">
          Get started
        </Button>
      </ul>
    </nav>
  )
}

export default NavBar
