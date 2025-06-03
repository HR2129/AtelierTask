"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Home, User, Heart, ShoppingBag, Search } from "lucide-react"

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null)

  const dropdownData = {
    rings: {
      style: [
        "Solitaire Rings",
        "Halo Rings",
        "Three-Stone Rings",
        "Minimalist Rings",
        "Eternity Bands",
        "Stackable Rings",
      ],
      occasion: [
        "Engagement Rings",
        "Wedding Bands",
        "Promise Rings",
        "Anniversary Rings",
        "Cocktail Rings",
        "Daily Wear Rings",
        "Proposal Rings",
        "Graduation Rings",
      ],
      metalType: ["White Gold Rings", "Yellow Gold Rings", "Rose Gold Rings", "Platinum Rings", "Mixed Metal Rings"],
      settingType: ["Prong Setting", "Bezel Setting", "Pave Setting", "Channel Setting", "Tension Setting"],
    },
    bracelets: {
      style: [
        "Tennis Bracelets",
        "Cuff Bracelets",
        "Chain Bracelets",
        "Bangle Bracelets",
        "Charm Bracelets",
        "Open Bracelets",
        "ID Bracelets",
        "Stackable Bracelets",
        "Wrap Bracelets",
        "Link Bracelets",
      ],
      occasion: ["Daily Wear Bracelets", "Bridal Bracelets", "Statement Bracelets", "Friendship Bracelets"],
      metalType: [
        "White Gold Bracelets",
        "Yellow Gold Bracelets",
        "Rose Gold Bracelets",
        "Platinum Bracelets",
        "Mixed Metal Bracelets",
      ],
      settingType: ["Prong Setting", "Bezel Setting", "Pave Setting", "Channel Setting", "Tension Setting"],
      customization: [
        "Engravable Bracelets",
        "Personalized Initial Bracelets",
        "Custom Length Bracelets",
        "Build Your Own Stack",
      ],
    },
    necklaces: {
      style: [
        "Pendant Necklaces",
        "Chain Necklaces",
        "Choker Necklaces",
        "Statement Necklaces",
        "Layered Necklaces",
        "Tennis Necklaces",
      ],
      occasion: ["Daily Wear Necklaces", "Bridal Necklaces", "Evening Necklaces", "Gift Necklaces"],
      metalType: [
        "White Gold Necklaces",
        "Yellow Gold Necklaces",
        "Rose Gold Necklaces",
        "Platinum Necklaces",
        "Mixed Metal Necklaces",
      ],
      settingType: ["Prong Setting", "Bezel Setting", "Pave Setting", "Channel Setting"],
    },
    // earrings: {
    //   style: [
    //     "Stud Earrings",
    //     "Drop Earrings",
    //     "Hoop Earrings",
    //     "Chandelier Earrings",
    //     "Huggie Earrings",
    //     "Climber Earrings",
    //   ],
    //   occasion: ["Daily Wear Earrings", "Bridal Earrings", "Evening Earrings", "Statement Earrings"],
    //   metalType: [
    //     "White Gold Earrings",
    //     "Yellow Gold Earrings",
    //     "Rose Gold Earrings",
    //     "Platinum Earrings",
    //     "Mixed Metal Earrings",
    //   ],
    //   settingType: ["Prong Setting", "Bezel Setting", "Pave Setting", "Channel Setting"],
    // },
  }

  const handleMouseEnter = (category) => {
    setActiveDropdown(category)
  }

  const handleMouseLeave = () => {
    setActiveDropdown(null)
  }

  const renderDropdown = (category) => {
    const data = dropdownData[category]
    if (!data) return null

    return (
      <div className="absolute top-full -left-5  w-[80rem] bg-stone-50 shadow-lg border-t border-stone-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            <div>
              <h4 className="font-semibold text-stone-800 mb-4 text-sm tracking-wider">STYLE</h4>
              <ul className="space-y-2">
                {data.style.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={`/${category}/${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-stone-600 hover:text-stone-800 text-sm transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-stone-800 mb-4 text-sm tracking-wider">OCCASION</h4>
              <ul className="space-y-2">
                {data.occasion.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={`/${category}/${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-stone-600 hover:text-stone-800 text-sm transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-stone-800 mb-4 text-sm tracking-wider">METAL TYPE</h4>
              <ul className="space-y-2">
                {data.metalType.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={`/${category}/${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-stone-600 hover:text-stone-800 text-sm transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-stone-800 mb-4 text-sm tracking-wider">SETTING TYPE</h4>
              <ul className="space-y-2">
                {data.settingType.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={`/${category}/${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-stone-600 hover:text-stone-800 text-sm transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {data.customization && (
              <div>
                <h4 className="font-semibold text-stone-800 mb-4 text-sm tracking-wider">CUSTOMIZATION</h4>
                <ul className="space-y-2">
                  {data.customization.map((item, index) => (
                    <li key={index}>
                      <Link
                        to={`/${category}/${item.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-stone-600 hover:text-stone-800 text-sm transition-colors"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <header className="bg-stone-50 shadow-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left - Home Icon */}
          <Link to="/" className="text-stone-600 hover:text-stone-800 transition-colors">
            <Home className="w-6 h-6" />
          </Link>

          {/* Center - Logo */}
          <Link to="/" className="text-2xl font-light text-stone-800 tracking-wider">
            DIAMOND FOREST
          </Link>

          {/* Right - Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-stone-600 hover:text-stone-800 transition-colors">
              <User className="w-6 h-6" />
            </button>
            <button className="text-stone-600 hover:text-stone-800 transition-colors">
              <Heart className="w-6 h-6" />
            </button>
            <button className="text-stone-600 hover:text-stone-800 transition-colors">
              <ShoppingBag className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="border-t border-stone-200 relative">
          <div className="flex items-center justify-between py-4">
            <div className="flex space-x-8">
              <div className="relative" onMouseEnter={() => handleMouseEnter("rings")} onMouseLeave={handleMouseLeave}>
                <Link to="/rings" className="text-sm font-medium text-stone-700 hover:text-stone-900 transition-colors">
                  RINGS
                </Link>
                {activeDropdown === "rings" && renderDropdown("rings")}
              </div>

              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("bracelets")}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to="/bracelets"
                  className="text-sm font-medium text-stone-700 hover:text-stone-900 transition-colors"
                >
                  BRACELETS
                </Link>
                {activeDropdown === "bracelets" && renderDropdown("bracelets")}
              </div>

              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("necklaces")}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to="/necklaces"
                  className="text-sm font-medium text-stone-700 hover:text-stone-900 transition-colors"
                >
                  NECKLACES
                </Link>
                {activeDropdown === "necklaces" && renderDropdown("necklaces")}
              </div>

              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("earrings")}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to="/earrings"
                  className="text-sm font-medium text-stone-700 hover:text-stone-900 transition-colors"
                >
                  EARRINGS
                </Link>
                {activeDropdown === "earrings" && renderDropdown("earrings")}
              </div>

              <Link to="/custom" className="text-sm font-medium text-stone-700 hover:text-stone-900 transition-colors">
                CUSTOM
              </Link>
            </div>

            {/* Search */}
            <div className="flex items-center bg-stone-200 rounded-full px-4 py-2">
              <Search className="w-4 h-4 text-stone-500 mr-2" />
              <input
                type="text"
                placeholder="SEARCH"
                className="bg-transparent text-sm text-stone-700 placeholder-stone-500 outline-none"
              />
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
