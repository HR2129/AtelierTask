import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import CategoryPage from "./components/CategoryPage"
import BraceletsPage from "./pages/BraceletsPage"
import ProductDetailPage from "./pages/ProductDetailPage"


function App() {
  return (
   
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/bracelets" element={<BraceletsPage/>} />
          <Route path="/bracelets/:productId" element={<ProductDetailPage />} />
          {/* <Route path="/rings" element={<CategoryPage />} />
          <Route path="/necklaces" element={<CategoryPage />} />
          <Route path="/earrings" element={<CategoryPage />} />
          <Route path="/custom" element={<CategoryPage />} /> */}
        </Routes>
      </div>
    
  )
}

export default App
