import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Editor from '@monaco-editor/react'
import { categories } from '../data/patterns'
import { getPanelStyle } from '../styles'
import { Footer } from '../components/Footer'

export function ExamplePage() {
  const { categoryId, patternId } = useParams<{ categoryId: string; patternId: string }>()
  const category = categories.find((c) => c.id === categoryId)
  const pattern = category?.patterns.find((p) => p.id === patternId)
  const s = getPanelStyle(categoryId ?? '')

  const [snippet, setSnippet] = useState(pattern?.snippet ?? '')

  if (!pattern || !category) {
    return (
      <div className="relative min-h-screen" style={{ background: '#910e67' }}>
        <div className="relative max-w-2xl mx-auto px-6 py-12">
          <p className="text-slate-400">Pattern not found.</p>
          <Link to="/" className="text-blue-400 text-sm mt-4 inline-block hover:text-blue-300">
            ← Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen" style={{ background: '#910e67' }}>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/home-BG.png')", opacity: '0.52' }}
      />
      <div className="relative max-w-4xl mx-auto px-6 py-12">
        <div className="flex items-center gap-2 mb-8 flex-wrap" style={{ fontFamily: "'Electrolize', sans-serif" }}>
          <Link to="/" className="text-slate-500 text-sm hover:text-slate-300 transition-colors">
            ← Home
          </Link>
          <span className="text-teal-50">·</span>
          <Link to={`/${categoryId}`} className="text-teal-500 text-sm hover:text-teal-300 transition-colors">
            {category.title}
          </Link>
          <span className="text-teal-50">·</span>
          <span className="text-teal-50 text-sm font-semibold">{pattern.name}</span>
        </div>

        <div className="rounded-lg overflow-hidden">
          <div
            className="px-5 py-4 border-b flex items-center gap-3"
            style={{ ...s.header(true).style, borderColor: 'rgba(255,255,255,0.08)', fontFamily: "'Electrolize', sans-serif" }}
          >
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-green-500/70" />
            </div>
            <h1 className={s.name(true).className} style={s.name(true).style}>
              {pattern.name}.ts
            </h1>
          </div>

          {pattern.description && (
            <div className={s.panel.className} style={{ ...s.panel.style, padding: '12px 20px' }}>
              {s.overlays.map((style, i) => (
                <div key={i} style={style} />
              ))}
              <p className={`relative z-20 text-sm leading-relaxed ${s.text.className}`} style={s.text.style}>
                {pattern.description}
              </p>
            </div>
          )}

          <div style={{ height: '520px' }}>
            <Editor
              height="100%"
              defaultLanguage="typescript"
              theme="vs-dark"
              value={snippet}
              onChange={(val) => setSnippet(val ?? '')}
              options={{
                fontSize: 13,
                fontFamily: "'Cascadia Code', 'Fira Code', 'JetBrains Mono', 'Consolas', monospace",
                fontLigatures: true,
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
                lineNumbers: 'on',
                tabSize: 2,
                wordWrap: 'on',
                padding: { top: 16, bottom: 16 },
                smoothScrolling: true,
                cursorBlinking: 'smooth',
                renderLineHighlight: 'all',
              }}
            />
          </div>

          <div
            className="px-5 py-3 flex gap-3 border-t"
            style={{ ...s.header(false).style, borderColor: 'rgba(255,255,255,0.06)' }}
          >
            <button
              type="button"
              className="px-4 py-1.5 text-xs rounded bg-teal-700 hover:bg-teal-600 text-teal-50 transition-colors"
              style={{ fontFamily: "'Electrolize', sans-serif" }}
            >
              Save
            </button>
            <Link
              to={`/${categoryId}`}
              className="px-4 py-1.5 text-xs rounded bg-slate-700 hover:bg-slate-600 text-slate-200 transition-colors"
              style={{ fontFamily: "'Electrolize', sans-serif" }}
            >
              Cancel
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}
