import { Link, useParams } from 'react-router-dom'
import { categories } from '../data/patterns'
import { PatternAccordion } from '../components/PatternAccordion'
import { Footer } from '../components/Footer'

const pageBg: Record<string, { base: string; opacity: string; image?: string }> = {
  solid: {
    base: '#910e67', opacity: '0.52', image: "url('/home-BG.png')"
  },
  creational: { base: '#910e67', opacity: '0.52', image: "url('/home-BG.png')" },
  structural: { base: '#910e67', opacity: '0.52', image: "url('/home-BG.png')" },
  behavioural: { base: '#910e67', opacity: '0.52', image: "url('/home-BG.png')" },
}

export function CategoryPage() {
  const { categoryId } = useParams<{ categoryId: string }>()
  const category = categories.find((c) => c.id === categoryId)

  const bg = pageBg[categoryId ?? ''] ?? pageBg.structural

  if (!category) {
    return (
      <div className="relative min-h-screen" style={{ background: bg.base }}>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: bg.image, backgroundSize: 'cover', backgroundPosition: 'center', opacity: bg.opacity }}
        />
        <div className="relative max-w-2xl mx-auto px-6 py-12">
          <p className="text-slate-400">Category not found.</p>
          <Link to="/" className="text-blue-400 text-sm mt-4 inline-block hover:text-blue-300">
            ← Back to home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen" style={{ background: bg.base }}>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: bg.image, backgroundSize: 'cover', backgroundPosition: 'center', opacity: bg.opacity }}
      />
      <div className="relative max-w-2xl mx-auto px-6 py-12">
        <div className="flex items-center gap-2 mb-8 flex-wrap" style={{ fontFamily: "'Electrolize', sans-serif" }}>
          <Link to="/" className="text-slate-500 text-sm hover:text-slate-300 transition-colors">
            ← Home
          </Link>
          <span className="text-teal-50">·</span>
          {categories.map((cat, i) => (
            <span key={cat.id} className="flex items-center gap-2">
              {i > 0 && <span className="text-teal-50">·</span>}
              <Link
                to={`/${cat.id}`}
                className={`text-sm font-semibold transition-colors ${cat.id === categoryId
                  ? 'text-teal-50 underline underline-offset-4'
                  : 'text-teal-500 hover:text-teal-300'
                  }`}
              >
                {cat.title}
              </Link>
            </span>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          {category.patterns.map((pattern) => (
            <PatternAccordion key={pattern.id} pattern={pattern} categoryId={category.id} />
          ))}
        </div>
        <Footer />
      </div>
    </div>
  )
}
