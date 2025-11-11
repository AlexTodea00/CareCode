import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import type { JSX, ReactNode } from 'react'

export type DialogComponentProps = {
  title: string
  description: string
  children?: ReactNode
  content?: ReactNode
}

export default function DialogComponent({
  title,
  description,
  children,
  content,
}: DialogComponentProps): JSX.Element {
  return (
    <Dialog>
      <DialogTrigger className="cursor-pointer" asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {content}
      </DialogContent>
    </Dialog>
  )
}
