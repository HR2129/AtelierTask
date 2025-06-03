import { ChevronRight } from "lucide-react"


const DesignYourOwn = () => {
  return (
    <section className="py-16 bg-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://luxury.am/wp-content/uploads/2022/11/SLIDE2.jpg"
                alt="Hands crafting custom jewelry with diamonds"
                className="w-full h-full object-cover"
              />
              {/* Play button overlay */}
              {/* <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-green-700 bg-opacity-80 rounded-full p-4 cursor-pointer hover:bg-opacity-90 transition-all duration-300">
                  <ChevronRight className="w-8 h-8 text-white ml-1" />
                </div>
              </div> */}
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-light text-stone-800 tracking-wider">DESIGN YOUR OWN</h2>
            <p className="text-stone-600 text-lg leading-relaxed">
              From selecting your perfect lab-grown diamond to choosing the setting, metal, and personal touches, our
              custom design process brings your vision to life with expert craftsmanship and effortless guidance every
              step of the way.
            </p>
            <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-md font-medium tracking-wider transition-colors duration-300">
              START YOUR CUSTOM DESIGN
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DesignYourOwn
