import { useState, useRef } from 'react'
import Editor from '@monaco-editor/react'
import type { Pattern } from '../data/patterns'
import { getPanelStyle } from '../styles'

type Props = {
  pattern: Pattern
  categoryId: string
}

export function PatternAccordion({ pattern, categoryId }: Props) {
  const [open, setOpen] = useState(false)
  const [editorHeight, setEditorHeight] = useState(340)
  const dragStart = useRef<{ y: number; height: number } | null>(null)
  const s = getPanelStyle(categoryId)

  const onDragMouseDown = (e: React.MouseEvent) => {
    dragStart.current = { y: e.clientY, height: editorHeight }

    const onMouseMove = (e: MouseEvent) => {
      if (!dragStart.current) return
      const delta = e.clientY - dragStart.current.y
      setEditorHeight(Math.max(120, dragStart.current.height + delta))
    }

    const onMouseUp = () => {
      dragStart.current = null
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
  }

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

      {open && (
        <div className={s.panel.className} style={s.panel.style}>
          {s.overlays.map((style, i) => (
            <div key={i} style={style} />
          ))}
          <div className="relative z-20 flex flex-col gap-4">
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
              <div className="rounded-md overflow-hidden">
                <div style={{ height: editorHeight }}>
                  <Editor
                    height="100%"
                    defaultLanguage="typescript"
                    theme="vs-dark"
                    value={pattern.snippet}
                    options={{
                      fontSize: 12,
                      fontFamily: "'Cascadia Code', 'Fira Code', 'JetBrains Mono', 'Consolas', monospace",
                      fontLigatures: true,
                      minimap: { enabled: false },
                      scrollBeyondLastLine: false,
                      lineNumbers: 'on',
                      tabSize: 2,
                      wordWrap: 'on',
                      padding: { top: 12, bottom: 12 },
                      smoothScrolling: true,
                      cursorBlinking: 'smooth',
                      renderLineHighlight: 'all',
                      readOnly: true,
                    }}
                  />
                </div>
                <div
                  onMouseDown={onDragMouseDown}
                  className="h-2 cursor-ns-resize bg-slate-700/40 hover:bg-slate-500/60 transition-colors"
                  title="Drag to resize"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
