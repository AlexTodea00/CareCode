import { type JSX } from 'react'
import CareCodeLogo from '@/assets/illustrations/carecode_logo.svg'
import styles from '@/styles/navbarPlain.module.scss'
import BellIcon from '@/assets/icons/bell.svg?react'
import MyAccountMenu from './MyAccountMenu'
import HamburgerIcon from '@/assets/icons/hamburger.svg?react'

type Props = {
  setSelection: React.Dispatch<React.SetStateAction<string>>
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  isOpen: boolean
  selection: string
}

function NavBarPlain({
  setSelection,
  setIsOpen,
  selection,
  isOpen,
}: Props): JSX.Element {
  return (
    <nav className={styles.nav}>
      <ul className={styles['navbar-content']}>
        <img
          className={`${styles.image} cursor-pointer`}
          width={80}
          height={80}
          src={CareCodeLogo}
          alt=""
          onClick={() => scrollTo(0, 0)}
        />
        <li className={styles.bell}>
          <span className={styles['red-dot']}></span>
          <BellIcon />
        </li>
        {/* <MyAccountMenu
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          setSelection={setSelection}
          selection={selection}
        >
          <HamburgerIcon />
        </MyAccountMenu> */}
      </ul>
    </nav>
  )
}

export default NavBarPlain
