import { Link } from 'react-router-dom'
import type { Category } from '../data/patterns'
import { getPanelStyle } from '../styles'

type Props = {
  category: Category
}

export function CategoryCard({ category }: Props) {
  const s = getPanelStyle(category.id)

  return (
    <Link
      to={`/${category.id}`}
      className={`relative overflow-hidden block rounded-xl p-6 font-mono opacity-90 hover:opacity-100 transition-opacity duration-200 group ${s.panel.className}`}
      style={s.panel.style}
    >
      {s.overlays.map((style, i) => (
        <div key={i} style={style} />
      ))}
      <div className="relative z-20">
        <div className="text-3xl mb-3">{category.icon}</div>
        <h2 className={`font-semibold text-base mb-1 ${s.text.className}`} style={s.text.style}>
          {category.title}
        </h2>
        <p className={s.placeholder.className} style={s.placeholder.style}>
          {category.patterns.length} {category.patterns.length === 1 ? 'entry' : 'entries'}
        </p>
      </div>
    </Link>
  )
}
