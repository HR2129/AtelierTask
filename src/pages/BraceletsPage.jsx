"use client"

import { useState, useMemo } from "react"
import { Link } from "react-router-dom"
import { Heart, Filter, ChevronDown } from "lucide-react"
import Navbar from "../components/Navbar"


const BraceletsPage = () => {
  const [sortBy, setSortBy] = useState("name")
  const [showSortDropdown, setShowSortDropdown] = useState(false)
  const [hoveredColors, setHoveredColors] = useState({})

  const products = [
    {
      id: 1,
      name: "Round Lab Diamond Tennis Bracelet (3 ct. tw.)",
      price: 2995,
      images: [
        { color: "#FFB6C1", image: "https://image.brilliantearth.com/media/product_images/ZA/BE5D4TB370LC-14KR_additional1.jpg", colorName: "Rose Gold" },
        { color: "#C0C0C0", image: "https://image.brilliantearth.com/media/product_images/OI/BE5D4TB370LC-18KW_additional1.jpg", colorName: "White Gold" },
        { color: "#FFD700", image: "https://image.brilliantearth.com/media/product_images/AK/BE5D4TB370LC-18KY_additional1.jpg", colorName: "Yellow Gold" },
      ],
      badge: "MOST LOVED",
      isLoved: true,
    },
    {
      id: 2,
      name: "Round Lab Diamond Tennis Bracelet (3 ct. tw.)",
      price: 2995,
       images: [
        { color: "#FFB6C1", image: "https://image.brilliantearth.com/media/product_images/ZA/BE5D4TB370LC-14KR_additional1.jpg", colorName: "Rose Gold" },
        { color: "#C0C0C0", image: "https://image.brilliantearth.com/media/product_images/OI/BE5D4TB370LC-18KW_additional1.jpg", colorName: "White Gold" },
        { color: "#FFD700", image: "https://image.brilliantearth.com/media/product_images/AK/BE5D4TB370LC-18KY_additional1.jpg", colorName: "Yellow Gold" },
      ],
    },
    {
      id: 3,
      name: "Olivetta Lab Diamond Tennis Bracelet (2 3/4 ct. tw.)",
      price: 7000,
      images: [
        { color: "#C0C0C0", image: "https://image.brilliantearth.com/media/product_images/KV/BE5LD505_white_top.jpg", colorName: "White Gold" },
      ],
    },
    {
      id: 4,
      name: "Azura Sapphire and Diamond Bracelet (1/2 ct. tw.)",
      price: 3595,
      images: [
        { color: "#C0C0C0", image: "https://image.brilliantearth.com/media/product_images/EE/BE5SD336_white_top.jpg", colorName: "White Gold" },
      ],
    },
    {
      id: 5,
      name: "Round Lab Diamond Tennis Bracelet (3 ct. tw.)",
      price: 2995,
      images: [
        { color: "#FFB6C1", image: "/placeholder.svg?height=300&width=300&text=Rose+Gold", colorName: "Rose Gold" },
        { color: "#C0C0C0", image: "/placeholder.svg?height=300&width=300&text=White+Gold", colorName: "White Gold" },
      ],
    },
    {
      id: 6,
      name: "Round Lab Diamond Tennis Bracelet (3 ct. tw.)",
      price: 2995,
      images: [
        { color: "#FFB6C1", image: "/placeholder.svg?height=300&width=300&text=Rose+Gold", colorName: "Rose Gold" },
        { color: "#C0C0C0", image: "/placeholder.svg?height=300&width=300&text=White+Gold", colorName: "White Gold" },
        { color: "#FFD700", image: "/placeholder.svg?height=300&width=300&text=Yellow+Gold", colorName: "Yellow Gold" },
      ],
      badge: "BEST SELLER",
    },
    {
      id: 7,
      name: "Olivetta Lab Diamond Tennis Bracelet (2 3/4 ct. tw.)",
      price: 7000,
      images: [
        { color: "#C0C0C0", image: "/placeholder.svg?height=300&width=300&text=White+Gold", colorName: "White Gold" },
      ],
    },
    {
      id: 8,
      name: "Azura Sapphire and Diamond Bracelet (1/2 ct. tw.)",
      price: 3595,
      images: [
        { color: "#C0C0C0", image: "/placeholder.svg?height=300&width=300&text=Sapphire", colorName: "White Gold" },
      ],
    },
    {
      id: 9,
      name: "Round Lab Diamond Tennis Bracelet (3 ct. tw.)",
      price: 2995,
      images: [
        { color: "#FFB6C1", image: "/placeholder.svg?height=300&width=300&text=Rose+Gold", colorName: "Rose Gold" },
        { color: "#C0C0C0", image: "/placeholder.svg?height=300&width=300&text=White+Gold", colorName: "White Gold" },
      ],
    },
    {
      id: 10,
      name: "Round Lab Diamond Tennis Bracelet (3 ct. tw.)",
      price: 2995,
      images: [
        { color: "#FFB6C1", image: "/placeholder.svg?height=300&width=300&text=Rose+Gold", colorName: "Rose Gold" },
        { color: "#C0C0C0", image: "/placeholder.svg?height=300&width=300&text=White+Gold", colorName: "White Gold" },
      ],
    },
    {
      id: 11,
      name: "Olivetta Lab Diamond Tennis Bracelet (2 3/4 ct. tw.)",
      price: 7000,
      images: [
        { color: "#C0C0C0", image: "/placeholder.svg?height=300&width=300&text=White+Gold", colorName: "White Gold" },
      ],
    },
    {
      id: 12,
      name: "Emerald Cut Diamond Tennis Bracelet (4 ct. tw.)",
      price: 4995,
      images: [
        { color: "#FFD700", image: "/placeholder.svg?height=300&width=300&text=Yellow+Gold", colorName: "Yellow Gold" },
        { color: "#C0C0C0", image: "/placeholder.svg?height=300&width=300&text=White+Gold", colorName: "White Gold" },
      ],
    },
  ]

  const sortedProducts = useMemo(() => {
    const sorted = [...products]
    switch (sortBy) {
      case "name":
        return sorted.sort((a, b) => a.name.localeCompare(b.name))
      case "price-low":
        return sorted.sort((a, b) => a.price - b.price)
      case "price-high":
        return sorted.sort((a, b) => b.price - a.price)
      default:
        return sorted
    }
  }, [products, sortBy])

  const handleSortChange = (newSort) => {
    setSortBy(newSort)
    setShowSortDropdown(false)
  }

  const formatPrice = (price) => {
    return `$${price.toLocaleString()}`
  }

  const getSortLabel = () => {
    switch (sortBy) {
      case "name":
        return "SORT"
      case "price-low":
        return "SORT"
      case "price-high":
        return "SORT"
      default:
        return "SORT"
    }
  }

  const handleColorHover = (productId, colorIndex) => {
    setHoveredColors((prev) => ({ ...prev, [productId]: colorIndex }))
  }

  const handleColorLeave = (productId) => {
    setHoveredColors((prev) => {
      const newState = { ...prev }
      delete newState[productId]
      return newState
    })
  }

  const getCurrentImage = (product) => {
    const hoveredIndex = hoveredColors[product.id]
    return hoveredIndex !== undefined ? product.images[hoveredIndex] : product.images[0]
  }

  return (
    <div className="min-h-screen bg-stone-100">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <div className="flex items-center space-x-2 text-sm text-stone-600">
            <Link to="/" className="hover:text-stone-800 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-stone-800">Bracelets</span>
          </div>
        </nav>

        {/* Page Header with Filter and Sort */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <h1 className="text-4xl font-light text-stone-800 tracking-wider">BRACELETS</h1>

            {/* Filter Button - Left Side */}
            <button className="flex items-center space-x-2 px-4 py-2 border border-stone-400 rounded text-stone-700 hover:bg-stone-50 transition-colors">
              <Filter className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wider">FILTER</span>
            </button>
          </div>

          {/* Sort Dropdown - Right Side */}
          <div className="relative">
            <button
              onClick={() => setShowSortDropdown(!showSortDropdown)}
              className="flex items-center space-x-2 px-4 py-2 border border-stone-400 rounded text-stone-700 hover:bg-stone-50 transition-colors"
            >
              <span className="text-sm font-medium tracking-wider">{getSortLabel()}</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {showSortDropdown && (
              <div className="absolute right-0 top-full mt-1 w-48 bg-white border border-stone-200 rounded shadow-lg z-10">
                <div className="py-1">
                  <button
                    onClick={() => handleSortChange("name")}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-stone-50 transition-colors ${
                      sortBy === "name" ? "bg-stone-100 text-stone-900" : "text-stone-700"
                    }`}
                  >
                    Name A-Z
                  </button>
                  <button
                    onClick={() => handleSortChange("price-low")}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-stone-50 transition-colors ${
                      sortBy === "price-low" ? "bg-stone-100 text-stone-900" : "text-stone-700"
                    }`}
                  >
                    Price: Low to High
                  </button>
                  <button
                    onClick={() => handleSortChange("price-high")}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-stone-50 transition-colors ${
                      sortBy === "price-high" ? "bg-stone-100 text-stone-900" : "text-stone-700"
                    }`}
                  >
                    Price: High to Low
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sortedProducts.map((product) => {
            const currentImage = getCurrentImage(product)
            return (
              <Link key={product.id} to={`/bracelets/${product.id}`} className="group cursor-pointer">
                <div className="relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-3 left-3 z-10">
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded ${
                          product.badge === "MOST LOVED" ? "bg-stone-800 text-white" : "bg-green-700 text-white"
                        }`}
                      >
                        {product.badge}
                      </span>
                    </div>
                  )}

                  {/* Wishlist Heart */}
                  <button
                    className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white bg-opacity-80 hover:bg-opacity-100 transition-all"
                    onClick={(e) => e.preventDefault()} // Prevent navigation when clicking heart
                  >
                    <Heart className={`w-4 h-4 ${product.isLoved ? "fill-red-500 text-red-500" : "text-stone-600"}`} />
                  </button>

                  {/* Product Image */}
                  <div className="aspect-square bg-stone-50 p-8">
                    <img
                      src={currentImage.image || "/placeholder.svg"}
                      alt={`${product.name} - ${currentImage.colorName}`}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    {/* Color Options */}
                    <div className="flex items-center space-x-2 mb-3">
                      {product.images.map((imageOption, colorIndex) => (
                        <button
                          key={colorIndex}
                          className={`w-4 h-4 rounded-full border-2 transition-all duration-200 ${
                            hoveredColors[product.id] === colorIndex
                              ? "border-stone-800 scale-110"
                              : "border-stone-300 hover:border-stone-500"
                          }`}
                          style={{ backgroundColor: imageOption.color }}
                          onMouseEnter={() => handleColorHover(product.id, colorIndex)}
                          onMouseLeave={() => handleColorLeave(product.id)}
                          onClick={(e) => e.preventDefault()} // Prevent navigation when clicking color dots
                          title={imageOption.colorName}
                        />
                      ))}
                    </div>

                    {/* Product Name */}
                    <h3 className="text-sm font-medium text-stone-800 mb-2 line-clamp-2">{product.name}</h3>

                    {/* Price */}
                    <p className="text-lg font-semibold text-stone-800">{formatPrice(product.price)}</p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </main>
    </div>
  )
}

export default BraceletsPage
