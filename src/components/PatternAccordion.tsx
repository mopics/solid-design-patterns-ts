import { useState } from 'react'
import type { Pattern } from '../data/patterns'
import { getPanelStyle } from '../styles'
import { PatternPanel } from './PatternPanel'

type Props = {
  pattern: Pattern
  categoryId: string
}

export function PatternAccordion({ pattern, categoryId }: Props) {
  const [open, setOpen] = useState(false)
  const s = getPanelStyle(categoryId)

  return (
    <div className="rounded-lg overflow-hidden transition-colors opacity-77">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className={s.header(open).className}
        style={s.header(open).style}
      >
        <div className="flex items-center gap-3">
          <span className={s.name(open).className} style={s.name(open).style}>
            {pattern.name}
          </span>
        </div>
        <span className="text-sky-400 text-xs">{open ? '▼' : '▶'}</span>
      </button>

      {open && <PatternPanel pattern={pattern} s={s} />}
    </div>
  )
}
