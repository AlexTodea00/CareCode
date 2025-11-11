import type { JSX } from 'react'
import DialogComponent, {
  type DialogComponentProps,
} from '@/pages/form/DialogComponent'
import { CircleQuestionMarkIcon } from 'lucide-react'
import styles from '@/styles/tooltipIcon.module.scss'

export default function TooltipIcon(props: DialogComponentProps): JSX.Element {
  return (
    <DialogComponent {...props}>
      <CircleQuestionMarkIcon width={24} height={24} className={styles.red} />
    </DialogComponent>
  )
}
