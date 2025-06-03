"use client"



import { useState, useRef, useMemo } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import { Heart, Gift } from "lucide-react"
import Navbar from "../components/Navbar"





// Products database - this would typically come from an API
const productsDatabase = [
  {
    id: 1,
    name: "ROUND LAB DIAMOND TENNIS BRACELET (3 CT. TW.)",
    price: 2995,
    category: "bracelets",
    subcategory: "tennis",
    description: "A stunning tennis bracelet featuring round lab-grown diamonds in a classic setting.",
    images: [
      {
        id: 1,
        url: "/placeholder.svg?height=500&width=500&text=Tennis+Bracelet+Main",
        alt: "Round Lab Diamond Tennis Bracelet - Main View",
      },
      {
        id: 2,
        url: "/placeholder.svg?height=500&width=500&text=Tennis+Bracelet+Side",
        alt: "Round Lab Diamond Tennis Bracelet - Side View",
      },
      {
        id: 3,
        url: "/placeholder.svg?height=500&width=500&text=Tennis+Bracelet+Detail",
        alt: "Round Lab Diamond Tennis Bracelet - Detail View",
      },
      {
        id: 4,
        url: "/placeholder.svg?height=500&width=500&text=Tennis+Bracelet+Worn",
        alt: "Round Lab Diamond Tennis Bracelet - Worn on Wrist",
      },
    ],
    caratOptions: [
      { label: "1", value: "1", available: true },
      { label: "2", value: "2", available: true },
      { label: "3", value: "3", available: true },
      { label: "4", value: "4", available: true },
      { label: "5", value: "5", available: true },
    ],
    sizeOptions: [
      { label: '6"', value: '6"', available: true },
      { label: '6.5"', value: '6.5"', available: true },
      { label: '7"', value: '7"', available: true },
      { label: '7.5"', value: '7.5"', available: true },
    ],
    metalOptions: [
      { label: "Rose Gold", value: "rose-gold", color: "#FFB6C1", available: true },
      { label: "White Gold", value: "white-gold", color: "#C0C0C0", available: true },
      { label: "Yellow Gold", value: "yellow-gold", color: "#FFD700", available: true },
    ],
    badge: "MOST LOVED",
    isLoved: true,
  },
  {
    id: 2,
    name: "ROUND LAB DIAMOND TENNIS BRACELET (3 CT. TW.)",
    price: 2995,
    category: "bracelets",
    subcategory: "tennis",
    description: "A stunning tennis bracelet featuring round lab-grown diamonds in a classic setting.",
    images: [
      {
        id: 1,
        url: "/placeholder.svg?height=500&width=500&text=Tennis+Bracelet+2+Main",
        alt: "Round Lab Diamond Tennis Bracelet - Main View",
      },
      {
        id: 2,
        url: "/placeholder.svg?height=500&width=500&text=Tennis+Bracelet+2+Side",
        alt: "Round Lab Diamond Tennis Bracelet - Side View",
      },
      {
        id: 3,
        url: "/placeholder.svg?height=500&width=500&text=Tennis+Bracelet+2+Detail",
        alt: "Round Lab Diamond Tennis Bracelet - Detail View",
      },
      {
        id: 4,
        url: "/placeholder.svg?height=500&width=500&text=Tennis+Bracelet+2+Worn",
        alt: "Round Lab Diamond Tennis Bracelet - Worn on Wrist",
      },
    ],
    caratOptions: [
      { label: "1", value: "1", available: true },
      { label: "2", value: "2", available: true },
      { label: "3", value: "3", available: true },
      { label: "4", value: "4", available: false },
      { label: "5", value: "5", available: true },
    ],
    sizeOptions: [
      { label: '6"', value: '6"', available: true },
      { label: '6.5"', value: '6.5"', available: true },
      { label: '7"', value: '7"', available: true },
      { label: '7.5"', value: '7.5"', available: true },
    ],
    metalOptions: [
      { label: "Rose Gold", value: "rose-gold", color: "#FFB6C1", available: true },
      { label: "White Gold", value: "white-gold", color: "#C0C0C0", available: true },
      { label: "Yellow Gold", value: "yellow-gold", color: "#FFD700", available: true },
    ],
  },
  {
    id: 3,
    name: "OLIVETTA LAB DIAMOND TENNIS BRACELET (2 3/4 CT. TW.)",
    price: 7000,
    category: "bracelets",
    subcategory: "tennis",
    description: "An elegant Olivetta cut diamond tennis bracelet with exceptional brilliance.",
    images: [
      {
        id: 1,
        url: "/placeholder.svg?height=500&width=500&text=Olivetta+Bracelet+Main",
        alt: "Olivetta Lab Diamond Tennis Bracelet - Main View",
      },
      {
        id: 2,
        url: "/placeholder.svg?height=500&width=500&text=Olivetta+Bracelet+Side",
        alt: "Olivetta Lab Diamond Tennis Bracelet - Side View",
      },
      {
        id: 3,
        url: "/placeholder.svg?height=500&width=500&text=Olivetta+Bracelet+Detail",
        alt: "Olivetta Lab Diamond Tennis Bracelet - Detail View",
      },
      {
        id: 4,
        url: "/placeholder.svg?height=500&width=500&text=Olivetta+Bracelet+Worn",
        alt: "Olivetta Lab Diamond Tennis Bracelet - Worn on Wrist",
      },
    ],
    caratOptions: [
      { label: "2", value: "2", available: true },
      { label: "2.5", value: "2.5", available: true },
      { label: "2.75", value: "2.75", available: true },
      { label: "3", value: "3", available: true },
    ],
    sizeOptions: [
      { label: '6"', value: '6"', available: true },
      { label: '6.5"', value: '6.5"', available: true },
      { label: '7"', value: '7"', available: true },
      { label: '7.5"', value: '7.5"', available: true },
    ],
    metalOptions: [
      { label: "White Gold", value: "white-gold", color: "#C0C0C0", available: true },
      { label: "Platinum", value: "platinum", color: "#E5E4E2", available: true },
    ],
  },
  {
    id: 4,
    name: "AZURA SAPPHIRE AND DIAMOND BRACELET (1/2 CT. TW.) IN 18K WHITE GOLD",
    price: 3595,
    category: "bracelets",
    subcategory: "gemstone",
    description: "A beautiful sapphire and diamond bracelet featuring alternating blue sapphires and diamonds.",
    images: [
      {
        id: 1,
        url: "https://image.brilliantearth.com/media/product_images/EE/BE5SD336_white_top.jpg",
        alt: "Azura Sapphire and Diamond Bracelet - Main View",
      },
      {
        id: 2,
        url: "https://image.brilliantearth.com/media/product_images/9L/BE5SD336-18KW_022.jpg",
        alt: "Azura Sapphire and Diamond Bracelet - Side View",
      },
      {
        id: 3,
        url: "https://image.brilliantearth.com/media/product_images/LV/BE5SD336_white_side.jpeg",
        alt: "Azura Sapphire and Diamond Bracelet - Detail View",
      },
      {
        id: 4,
        url: "https://image.brilliantearth.com/media/product_images/EE/BE5SD336_white_top.jpg",
        alt: "Azura Sapphire and Diamond Bracelet - Worn on Wrist",
      },
    ],
    caratOptions: [
      { label: "0.5", value: "0.5", available: true },
      { label: "0.75", value: "0.75", available: true },
      { label: "1", value: "1", available: true },
      { label: "1.5", value: "1.5", available: false },
    ],
    sizeOptions: [
      { label: '6"', value: '6"', available: true },
      { label: '6.5"', value: '6.5"', available: true },
      { label: '7"', value: '7"', available: true },
      { label: '7.5"', value: '7.5"', available: true },
    ],
    metalOptions: [
      { label: "White Gold", value: "white-gold", color: "#C0C0C0", available: true },
      { label: "Yellow Gold", value: "yellow-gold", color: "#FFD700", available: true },
    ],
  },
  // Add more products as needed...
]

const ProductDetailPage = () => {
  const { productId } = useParams()
  const navigate = useNavigate()
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [selectedCarat, setSelectedCarat] = useState("")
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedMetal, setSelectedMetal] = useState("")
  const [isZoomed, setIsZoomed] = useState(false)
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 })
  const imageRef = useRef(null)

  // Find the product based on productId
  const product = useMemo(() => {
    const foundProduct = productsDatabase.find((p) => p.id === Number.parseInt(productId || "0"))
    return foundProduct
  }, [productId])

  // Initialize default selections when product changes
  useMemo(() => {
    if (product) {
      setSelectedCarat(product.caratOptions.find((opt) => opt.available)?.value || "")
      setSelectedSize(product.sizeOptions.find((opt) => opt.available)?.value || "")
      setSelectedMetal(product.metalOptions.find((opt) => opt.available)?.value || "")
      setSelectedImageIndex(0)
    }
  }, [product])

  // If product not found, show error or redirect
  if (!product) {
    return (
      <div className="min-h-screen bg-stone-100">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center py-16">
            <h1 className="text-2xl font-medium text-stone-800 mb-4">Product Not Found</h1>
            <p className="text-stone-600 mb-8">The product you're looking for doesn't exist.</p>
            <button
              onClick={() => navigate("/bracelets")}
              className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded font-medium transition-colors"
            >
              Back to Bracelets
            </button>
          </div>
        </main>
      </div>
    )
  }

  const handleImageHover = (index) => {
    setSelectedImageIndex(index)
  }

  const handleMainImageMouseMove = (e) => {
    if (!imageRef.current) return

    const rect = imageRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100

    setZoomPosition({ x, y })
  }

  const handleMainImageMouseEnter = () => {
    setIsZoomed(true)
  }

  const handleMainImageMouseLeave = () => {
    setIsZoomed(false)
  }

  const formatPrice = (price) => {
    return `$${price.toLocaleString()}`
  }

  const currentImage = product.images[selectedImageIndex]
  const selectedMetalLabel = product.metalOptions.find((opt) => opt.value === selectedMetal)?.label || "18K White Gold"

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
            <Link to="/bracelets" className="hover:text-stone-800 transition-colors">
              Bracelets
            </Link>
            <span>/</span>
            <Link to={`/bracelets/${product.subcategory}`} className="hover:text-stone-800 transition-colors">
              {product.subcategory.charAt(0).toUpperCase() + product.subcategory.slice(1)}
            </Link>
            <span>/</span>
            <span className="text-stone-800">{product.name.split(" ").slice(0, 4).join(" ")}</span>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Image Gallery */}
          <div className="flex space-x-4">
            {/* Thumbnail Images */}
            <div className="flex flex-col space-y-4">
              {product.images.map((image, index) => (
                <button
                  key={image.id}
                  className={`w-20 h-20 bg-white rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImageIndex === index ? "border-stone-800" : "border-stone-200 hover:border-stone-400"
                  }`}
                  onMouseEnter={() => handleImageHover(index)}
                >
                  <img src={image.url || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1">
              <div
                ref={imageRef}
                className="relative bg-white rounded-lg overflow-hidden cursor-zoom-in"
                onMouseMove={handleMainImageMouseMove}
                onMouseEnter={handleMainImageMouseEnter}
                onMouseLeave={handleMainImageMouseLeave}
              >
                <div className="aspect-square p-8">
                  <img
                    src={currentImage.url || "/placeholder.svg"}
                    alt={currentImage.alt}
                    className={`w-full h-full object-contain transition-transform duration-200 ${
                      isZoomed ? "scale-150" : "scale-100"
                    }`}
                    style={
                      isZoomed
                        ? {
                            transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                          }
                        : {}
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Product Details */}
          <div className="space-y-6">
            {/* Wishlist Heart */}
            <div className="flex justify-end">
              <button className="p-2 rounded-full hover:bg-stone-200 transition-colors">
                <Heart className={`w-6 h-6 ${product.isLoved ? "fill-red-500 text-red-500" : "text-stone-600"}`} />
              </button>
            </div>

            {/* Product Name */}
            <h1 className="text-2xl font-medium text-stone-800 leading-tight">{product.name}</h1>

            {/* Price */}
            <p className="text-3xl font-semibold text-stone-800">{formatPrice(product.price)}</p>

            {/* Product Description */}
            <p className="text-stone-600">{product.description}</p>

            {/* Total Carat Weight */}
            <div>
              <label className="block text-sm font-medium text-stone-800 mb-3">
                Total Carat Weight: {selectedCarat} ct. tw.
              </label>
              <div className="flex flex-wrap gap-2">
                {product.caratOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => option.available && setSelectedCarat(option.value)}
                    disabled={!option.available}
                    className={`px-4 py-2 border rounded transition-all ${
                      selectedCarat === option.value
                        ? "border-stone-800 bg-stone-800 text-white"
                        : option.available
                          ? "border-stone-300 hover:border-stone-500 text-stone-700"
                          : "border-stone-200 text-stone-400 cursor-not-allowed"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Size */}
            <div>
              <label className="block text-sm font-medium text-stone-800 mb-3">Size: {selectedSize}</label>
              <div className="flex flex-wrap gap-2">
                {product.sizeOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => option.available && setSelectedSize(option.value)}
                    disabled={!option.available}
                    className={`px-4 py-2 border rounded transition-all ${
                      selectedSize === option.value
                        ? "border-stone-800 bg-stone-800 text-white"
                        : option.available
                          ? "border-stone-300 hover:border-stone-500 text-stone-700"
                          : "border-stone-200 text-stone-400 cursor-not-allowed"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Metal */}
            <div>
              <label className="block text-sm font-medium text-stone-800 mb-3">Metal: {selectedMetalLabel}</label>
              <div className="flex space-x-3">
                {product.metalOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => option.available && setSelectedMetal(option.value)}
                    disabled={!option.available}
                    className={`w-8 h-8 rounded-full border-2 transition-all ${
                      selectedMetal === option.value
                        ? "border-stone-800 scale-110"
                        : option.available
                          ? "border-stone-300 hover:border-stone-500"
                          : "border-stone-200 cursor-not-allowed opacity-50"
                    }`}
                    style={{ backgroundColor: option.color }}
                    title={option.label}
                  />
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-6">
              <button className="w-full bg-green-700 hover:bg-green-800 text-white py-4 px-6 rounded font-medium tracking-wider transition-colors">
                ADD TO BAG
              </button>

              <div className="grid grid-cols-2 gap-3">
                <button className="flex items-center justify-center space-x-2 border border-stone-400 text-stone-700 py-3 px-4 rounded hover:bg-stone-50 transition-colors">
                  <Gift className="w-4 h-4" />
                  <span className="text-sm font-medium">DROP A HINT</span>
                </button>

                <button className="flex items-center justify-center space-x-2 border border-stone-400 text-stone-700 py-3 px-4 rounded hover:bg-stone-50 transition-colors">
                  <Heart className="w-4 h-4" />
                  <span className="text-sm font-medium">ADD TO WISHLIST</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ProductDetailPage
