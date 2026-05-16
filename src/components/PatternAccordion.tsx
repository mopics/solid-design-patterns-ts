import { useState } from 'react'
import type { Pattern } from '../data/patterns'
import { Modal } from './Modal'
import { getPanelStyle } from '../styles'

type Props = {
  pattern: Pattern
  categoryId: string
}


export function PatternAccordion({ pattern, categoryId }: Props) {
  const [open, setOpen] = useState(false)
  const [editing, setEditing] = useState(false)
  const s = getPanelStyle(categoryId)

  return (
    <div className={`rounded-lg overflow-hidden transition-colors opacity-77`}>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className={`group w-full flex items-center justify-between px-4 py-3 bg-amber-50 transition-colors text-left ${open ? 'bg-mist-950' : 'bg-amber-50/70'}`}
      >
        <div className="flex items-center gap-3">
          <span className={`text-sm font-medium transition-colors ${open ? 'text-teal-50' : 'text-amber-950'}`}>
            {pattern.name}
          </span>
        </div>
        <span className="text-sky-400 text-xs">{open ? '▼' : '▶'}</span>
      </button>

      {open && (
        <div className={s.panel.className} style={s.panel.style}>
          {s.overlays.map((style, i) => (
            <div key={i} style={style} />
          ))}
          <div className="relative z-20">
            {pattern.description ? (
              <p className={s.text.className} style={s.text.style}>
                {pattern.description}
              </p>
            ) : (
              <p className={s.placeholder.className} style={s.placeholder.style}>
                Description coming soon...
              </p>
            )}
            {pattern.snippet && (
              <pre className={s.snippet.className} style={s.snippet.style}>
                {pattern.snippet}
              </pre>
            )}
            <button
              type="button"
              onClick={() => setEditing(true)}
              className={s.editButton.className}
              style={s.editButton.style}
            >
              Edit snippet
            </button>
          </div>
        </div>
      )}

      <Modal open={editing} onClose={() => setEditing(false)} title={pattern.name}>
        <p className="text-sky-500 text-sm italic">Snippet editor coming soon…</p>
      </Modal>
    </div>
  )
}
