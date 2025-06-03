"use client"
import { Link, useParams } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import Navbar from "./Navbar"

const CategoryPage = () => {
  const { categoryName } = useParams()
  const currentCategory = categoryName || "Category"

  return (
    <div className="min-h-screen bg-stone-100">
      {/* Navbar Component */}
      <Navbar />

      {/* Category Page Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center mb-8">
          <Link to="/" className="flex items-center text-stone-600 hover:text-stone-800 transition-colors mr-4">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>

        <div className="text-center py-16">
          <h1 className="text-4xl font-light text-stone-800 mb-4 tracking-wider uppercase">{currentCategory}</h1>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Discover our exquisite collection of {currentCategory.toLowerCase()}. Each piece is carefully crafted to
            embody elegance and timeless beauty.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg bg-stone-200 aspect-square mb-4">
                  <img
                    src={`/placeholder.svg?height=300&width=300`}
                    alt={`${currentCategory} ${item}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-medium text-stone-800 mb-2">
                  {currentCategory} Design {item}
                </h3>
                <p className="text-stone-600 text-sm mb-2">Premium quality craftsmanship</p>
                <p className="text-xl font-semibold text-stone-800">${(Math.random() * 1000 + 200).toFixed(0)}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default CategoryPage
