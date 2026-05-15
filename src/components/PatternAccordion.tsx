import { useState } from 'react'
import type { Pattern } from '../data/patterns'

type Props = {
  pattern: Pattern
}

export function PatternAccordion({ pattern }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`border rounded-lg overflow-hidden transition-colors ${open ? 'border-blue-500' : 'border-slate-700'}`}>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex items-center justify-between px-4 py-3 bg-slate-800 hover:bg-slate-700 transition-colors text-left"
      >
        <div className="flex items-center gap-3">
          <span className={`text-xs font-bold px-2 py-0.5 rounded ${open ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-400'}`}>
            {pattern.badge}
          </span>
          <span className={`text-sm font-medium ${open ? 'text-slate-100' : 'text-slate-300'}`}>
            {pattern.name}
          </span>
        </div>
        <span className="text-slate-400 text-xs">{open ? '▼' : '▶'}</span>
      </button>

      {open && (
        <div className="bg-slate-900 px-4 py-4 border-t border-slate-700">
          {pattern.description ? (
            <p className="text-slate-400 text-sm leading-relaxed mb-3">{pattern.description}</p>
          ) : (
            <p className="text-slate-600 text-sm italic">Description coming soon...</p>
          )}
          {pattern.snippet && (
            <pre className="bg-slate-950 rounded-md p-3 text-xs text-blue-300 overflow-x-auto font-mono leading-relaxed">
              {pattern.snippet}
            </pre>
          )}
        </div>
      )}
    </div>
  )
}
