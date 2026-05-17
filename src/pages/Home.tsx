import { categories } from '../data/patterns'
import { CategoryCard } from '../components/CategoryCard'
import { Footer } from '../components/Footer'


const pageBg: { base: string; opacity: string; image?: string } = {
  base: '#910e67', opacity: '0.52', image: "url('/home-BG.png')"
}

export function Home() {
  return (
    <div className="relative min-h-screen" style={{ background: pageBg.base }}>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: pageBg.image, opacity: pageBg.opacity }}
      />
      <div className="relative max-w-2xl mx-auto px-6 py-12 lg:px-40 lg:max-w-3xl">
        <div className="text-center mb-10">
          <h1
            className="text-4xl font-bold tracking-tight inline-block mix-blend-overlay"
            style={{
              color: '#ffffec',
              fontFamily: "'Oxanium', sans-serif",
            }}
          >
            Design Patterns
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:gap-12">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
        <Footer />
      </div>
    </div>
  )
}
