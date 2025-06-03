"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { ChevronDown } from "lucide-react"
import Navbar from "../components/Navbar"
import DesignYourOwn from "../components/DesignYourOwn"

const HomePage = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false)

  const categories = [
    {
      name: "BRACELETS",
      image: "https://th.bing.com/th/id/OIP.N-b1KBeVtNOBooWMzfMQEQHaHa?r=0&w=500&h=500&rs=1&pid=ImgDetMain",
      link: "/bracelets",
    },
    {
      name: "EARRINGS",
      image: "https://th.bing.com/th/id/OIP.AUCHt9yW--VGHFymQG_QJgHaHa?r=0&rs=1&pid=ImgDetMain",
      link: "/earrings",
    },
    {
      name: "RINGS",
      image: "https://th.bing.com/th/id/OIP.eV1s5n_DCggWOQQ6O3rxewHaEJ?r=0&rs=1&pid=ImgDetMain",
      link: "/rings",
    },
    {
      name: "NECKLACES",
      image: "https://th.bing.com/th/id/OIP.nwPpzFJWrp2ouoRjQSIkFAHaHa?r=0&rs=1&pid=ImgDetMain",
      link: "/necklaces",
    },
  ]

  return (
    <div className="min-h-screen bg-stone-100">
      {/* Navbar Component */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-[70vh] bg-gradient-to-br from-amber-100 to-stone-200 overflow-hidden">
          <img
            src="https://wallpapers.com/images/hd/engagement-ring-pictures-2560-x-1440-v8n2sceth9bhwawl.jpg"
            alt="Featured collection - hands wearing jewelry"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-30" />
          <div className="absolute bottom-8 left-8 text-white">
            <h2 className="text-3xl font-light italic mb-2">Featured collection</h2>
            <p className="text-sm opacity-90">
              Explore the exclusive pieces, inspired
              <br />
              by the beauty of nature
            </p>
          </div>
        </div>

        {/* Arrow and Dropdown Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsDropdownVisible(true)}
          onMouseLeave={() => setIsDropdownVisible(false)}
        >
          {/* Arrow */}
          <div className="flex justify-center -mt-6 relative z-10">
            <div className="bg-stone-50 rounded-full p-4 shadow-lg cursor-pointer border border-stone-200 shake-animation">
              <ChevronDown
                className={`w-6 h-6 text-stone-600 transition-transform duration-300 ${
                  isDropdownVisible ? "rotate-180" : ""
                }`}
              />
            </div>
          </div>

          {/* Shop by Category Dropdown */}
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              isDropdownVisible ? "max-h-[1800px]  sm:max-h-[1000px]  opacity-100 mt-4" : "max-h-0 opacity-0"
            }`}
          >
            <div className="bg-stone-50 shadow-lg rounded-lg mx-4 p-8 border border-stone-200">
              <h3 className="text-2xl font-light text-center text-stone-800 mb-8 tracking-wider">SHOP BY CATEGORY</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map((category, index) => (
                  <Link key={index} to={category.link} className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-lg bg-stone-200 aspect-square mb-4">
                      <img
                        src={category.image || "/placeholder.svg"}
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="bg-green-700 text-white text-center py-3 rounded-md group-hover:bg-green-800 transition-colors duration-300">
                      <span className="text-sm font-medium tracking-wider">{category.name}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Content Space */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-light text-stone-800 mb-4">Discover Our Collections</h3>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Each piece in our collection is carefully crafted to capture the essence of nature's beauty, bringing you
              timeless elegance and sophisticated design.
            </p>
          </div>
        </div>
      </section>

      {/* Design Your Own Component */}
      <DesignYourOwn />
    </div>
  )
}

export default HomePage
