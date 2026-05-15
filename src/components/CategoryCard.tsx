import { Link } from 'react-router-dom'
import type { Category } from '../data/patterns'

type Props = {
  category: Category
}

export function CategoryCard({ category }: Props) {
  return (
    <Link
      to={`/${category.id}`}
      className="block bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-blue-500 transition-colors duration-200 group"
    >
      <div className="text-3xl mb-3">{category.icon}</div>
      <h2 className="text-blue-400 font-semibold text-base mb-1 group-hover:text-blue-300">
        {category.title}
      </h2>
      <p className="text-slate-500 text-sm">
        {category.patterns.length} {category.patterns.length === 1 ? 'entry' : 'entries'}
      </p>
    </Link>
  )
}
