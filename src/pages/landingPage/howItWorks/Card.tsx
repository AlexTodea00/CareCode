import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import styles from '@/styles/card.module.scss'

type Props = {
  title: string
  description: string
  children?: React.ReactNode
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  className?: string
}

export default function StepCard({
  title,
  children,
  description,
  Icon,
  className,
}: Props) {
  return (
    <Card className={`${styles.card} ${className}`}>
      <CardHeader className="mt-4">
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
