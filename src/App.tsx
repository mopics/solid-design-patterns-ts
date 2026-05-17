import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { CategoryPage } from './pages/CategoryPage'
import { ExamplePage } from './pages/ExamplePage'

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:categoryId" element={<CategoryPage />} />
        <Route path="/:categoryId/:patternId/example" element={<ExamplePage />} />
      </Routes>
    </div>
  )
}

export default App
