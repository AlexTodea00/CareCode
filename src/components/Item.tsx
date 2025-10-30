import type { JSX } from 'react'
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from './ui/item'
import { PrinterIcon } from 'lucide-react'

type Props = {
  title?: string
  description: string
}

export default function ItemComponent({
  title,
  description,
}: Props): JSX.Element {
  return (
    <Item variant="muted" className="w-full mt-4">
      <ItemMedia>
        <PrinterIcon width={16} height={16}></PrinterIcon>
      </ItemMedia>
      <ItemContent>
        <ItemTitle>{title}</ItemTitle>

        <ItemDescription className="text-pretty">{description}</ItemDescription>
      </ItemContent>
    </Item>
  )
}
