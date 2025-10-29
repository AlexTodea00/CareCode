import type { JSX, ReactNode } from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet'
import styles from '@/styles/myAccountMenu.module.scss'
import { options } from '@/pages/myAccount/MyAccount'

type Props = {
  setSelection: React.Dispatch<React.SetStateAction<string>>
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  isOpen: boolean
  selection: string
  children: ReactNode
}

export default function MyAccountMenu({
  children,
  setSelection,
  setIsOpen,
  isOpen,
  selection,
}: Props): JSX.Element {
  const handleOnClick = (selectedItem: string) => {
    setSelection(selectedItem)
    setIsOpen(false)
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Hi, Alex! 👋</SheetTitle>
          <SheetDescription>Welcome to your CareCode account</SheetDescription>
        </SheetHeader>
        <section className={styles.menu}>
          {options.map(option => (
            <button
              onClick={() => handleOnClick(option.value)}
              className={selection === option.value ? `${styles.active}` : ''}
              key={option.value}
              type="button"
            >
              {option.text}
            </button>
          ))}
        </section>
      </SheetContent>
    </Sheet>
  )
}
