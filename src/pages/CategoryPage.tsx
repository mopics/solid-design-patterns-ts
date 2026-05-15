import { Link, useParams } from 'react-router-dom'
import { categories } from '../data/patterns'
import { PatternAccordion } from '../components/PatternAccordion'

export function CategoryPage() {
  const { categoryId } = useParams<{ categoryId: string }>()
  const category = categories.find((c) => c.id === categoryId)

  if (!category) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-12">
        <p className="text-slate-400">Category not found.</p>
        <Link to="/" className="text-blue-400 text-sm mt-4 inline-block hover:text-blue-300">
          ← Back to home
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <div className="flex items-center gap-3 mb-8">
        <Link to="/" className="text-slate-500 text-sm hover:text-slate-300 transition-colors">
          ← Home
        </Link>
        <span className="text-slate-700">·</span>
        <h1 className="text-blue-400 font-semibold text-lg">{category.title}</h1>
      </div>
      <div className="flex flex-col gap-3">
        {category.patterns.map((pattern) => (
          <PatternAccordion key={pattern.id} pattern={pattern} />
        ))}
      </div>
    </div>
  )
}
