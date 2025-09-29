import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import styles from '@/styles/howItWorks.module.scss'

type Props = {
  title: string
  description: string
  children?: React.ReactNode
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}

export default function StepCard({
  title,
  children,
  description,
  Icon,
}: Props) {
  return (
    <Card className={styles.card}>
      <CardHeader>
        <CardTitle>
          <div className={styles.square}>
            <Icon />
          </div>
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}
