import { useState, useRef } from 'react'
import Editor from '@monaco-editor/react'
import type { Pattern } from '../data/patterns'
import type { PanelStyle } from '../styles/panelStyle'

type Tab = 'example' | 'useCases'

type Props = {
  pattern: Pattern
  s: PanelStyle
}

export function PatternPanel({ pattern, s }: Props) {
  const tabs: { id: Tab; label: string }[] = [
    { id: 'example', label: 'Example' },
    ...(pattern.useCases?.length ? [{ id: 'useCases' as Tab, label: 'Use Cases' }] : []),
  ]

  const [activeTab, setActiveTab] = useState<Tab>('example')
  const [editorHeight, setEditorHeight] = useState(340)
  const dragStart = useRef<{ y: number; height: number } | null>(null)

  const onDragMouseDown = (e: React.MouseEvent) => {
    dragStart.current = { y: e.clientY, height: editorHeight }

    const onMouseMove = (e: MouseEvent) => {
      if (!dragStart.current) return
      setEditorHeight(Math.max(120, dragStart.current.height + (e.clientY - dragStart.current.y)))
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
    <div className={s.panel.className} style={s.panel.style}>
      {s.overlays.map((style, i) => (
        <div key={i} style={style} />
      ))}

      <div className="relative z-20 flex flex-col gap-4">
        {/* description */}
        {pattern.description ? (
          <p className={s.text.className} style={s.text.style}>
            {pattern.description}
          </p>
        ) : (
          <p className={s.placeholder.className} style={s.placeholder.style}>
            Description coming soon...
          </p>
        )}

        {/* tab bar */}
        {tabs.length > 1 && (
          <div className="flex gap-1 border-b border-white/10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className="px-3 py-1.5 text-xs transition-colors"
                style={{
                  fontFamily: "'Electrolize', sans-serif",
                  color: activeTab === tab.id ? s.name(true).style.color as string : 'rgba(255,255,255,0.3)',
                  borderBottom: activeTab === tab.id ? `2px solid ${s.name(true).style.color as string}` : '2px solid transparent',
                  marginBottom: '-1px',
                  textShadow: activeTab === tab.id ? s.name(true).style.textShadow as string : 'none',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}

        {/* example tab */}
        {activeTab === 'example' && pattern.snippet && (
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

        {activeTab === 'example' && !pattern.snippet && (
          <p className={s.placeholder.className} style={s.placeholder.style}>
            Snippet coming soon...
          </p>
        )}

        {/* use cases tab */}
        {activeTab === 'useCases' && (
          <div style={{ fontFamily: "'Lora', Georgia, serif" }}>
            {pattern.useCases?.map((uc, i) => (
              <div
                key={uc.id}
                className="py-5"
                style={{ borderBottom: i < (pattern.useCases!.length - 1) ? '1px solid rgba(255,255,255,0.07)' : 'none' }}
              >
                <div className="flex items-baseline gap-3 mb-2">
                  <span
                    className="text-xs tabular-nums shrink-0"
                    style={{ color: 'rgba(255,255,255,0.2)', fontFamily: "'Lora', Georgia, serif", fontStyle: 'italic' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3
                    className="text-sm font-semibold leading-snug"
                    style={{ color: 'rgba(255,255,255,0.88)' }}
                  >
                    {uc.title}
                  </h3>
                </div>
                <p
                  className="leading-relaxed"
                  style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.55)', paddingLeft: '1.75rem' }}
                >
                  {uc.description}
                </p>
                {uc.link && (
                  <div style={{ paddingLeft: '1.75rem' }}>
                    <a
                      href={uc.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-xs italic underline underline-offset-2 transition-opacity hover:opacity-100"
                      style={{ color: 'rgba(255,255,255,0.35)', fontFamily: "'Lora', Georgia, serif" }}
                    >
                      Read more →
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
