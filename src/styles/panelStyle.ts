import type { CSSProperties } from 'react'

export type PanelStyle = {
  panel: { className: string; style: CSSProperties }
  overlays: CSSProperties[]
  text: { className: string; style: CSSProperties }
  placeholder: { className: string; style: CSSProperties }
  snippet: { className: string; style: CSSProperties }
  editButton: { className: string; style: CSSProperties }
}
