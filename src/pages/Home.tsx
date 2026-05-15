import { categories } from '../data/patterns'
import { CategoryCard } from '../components/CategoryCard'

export function Home() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <div className="text-center mb-10">
        <h1 className="text-2xl font-bold text-slate-100 tracking-tight">Design Patterns</h1>
        <p className="text-slate-500 text-sm mt-2">TypeScript · Vite · React</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  )
}
