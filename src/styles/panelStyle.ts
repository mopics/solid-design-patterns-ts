import type { CSSProperties } from 'react'

type Slot = { className: string; style: CSSProperties }

export type PanelStyle = {
  header: (open: boolean) => Slot
  name: (open: boolean) => Slot
  panel: Slot
  overlays: CSSProperties[]
  text: Slot
  placeholder: Slot
  snippet: Slot
  editButton: Slot
  cardGlow: string
}
