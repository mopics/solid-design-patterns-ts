import { categories } from '../data/patterns'
import { CategoryCard } from '../components/CategoryCard'
import { Footer } from '../components/Footer'


const pageBg: { base: string; opacity: string; image?: string } = {
  base: '#2C001E', opacity: '0.52', image: "url('/home-BG.png')"
}

export function Home() {
  return (
    <div className="relative min-h-screen" style={{ background: pageBg.base }}>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: pageBg.image, opacity: pageBg.opacity }}
      />
      <div className="relative max-w-2xl mx-auto px-6 py-12 lg:px-16 lg:py-20 lg:max-w-4xl">
        <div className="text-center mb-10">
          <h1
            className="text-6xl font-bold tracking-tight mix-blend-overlay"
            style={{
              color: '#FFC200',
              textShadow: '0 0 20px rgba(233,84,32,0.9), 0 0 60px rgba(255,194,0,0.5)',
            }}
          >
            Design Patterns
          </h1>
          <p
            className="text-lg font-bold font-mono mt-8 inline-block px-3 py-1 rounded"
            style={{
              color: '#E95420',
              backdropFilter: 'blur(10px)',
              background: 'rgba(44,0,30,0.4)',
            }}
          >
            TypeScript
          </p>
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
