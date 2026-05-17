import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { CategoryPage } from './pages/CategoryPage'
import { EditSnippetPage } from './pages/EditSnippetPage'

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:categoryId" element={<CategoryPage />} />
        <Route path="/:categoryId/:patternId/edit" element={<EditSnippetPage />} />
      </Routes>
    </div>
  )
}

export default App
