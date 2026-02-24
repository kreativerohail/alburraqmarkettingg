import { FiArrowUpRight } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-5 sm:px-8 lg:px-10 pt-28 sm:pt-32 lg:pt-25 pb-20 overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1950&q=80"
          alt="Real Estate Background"
          className="w-full h-full object-cover object-center filter blur-sm brightness-75"
        />
      </div>

      {/* Soft Gradient Glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-red-500/20 to-orange-400/20 blur-3xl rounded-full"></div>

      {/* Dotted Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e5e5_1px,transparent_1px)] [background-size:22px_22px] opacity-40"></div>

      {/* Floating Testimonial Left */}
      <div className="hidden xl:block absolute left-[-60px] top-[40%] rotate-[-10deg] bg-white shadow-2xl rounded-2xl p-6 w-72 border border-gray-100">
        <p className="text-gray-600 text-sm">
          "They transformed our real estate vision into a premium digital experience."
        </p>
        <span className="block mt-4 text-sm font-semibold text-gray-800">
          - Property Developer
        </span>
      </div>

      {/* Floating Testimonial Right */}
      <div className="hidden xl:block absolute right-[-60px] top-[35%] rotate-[10deg] bg-white shadow-2xl rounded-2xl p-6 w-72 border border-gray-100">

        <p className="text-gray-500 text-sm uppercase tracking-wide">
          Industry Experience
        </p>

        <h3 className="text-4xl font-extrabold text-red-600 mt-2">
          24+
        </h3>

        <p className="text-gray-700 font-semibold">
          Years of Excellence
        </p>

        <p className="text-gray-500 text-sm mt-3">
          Delivering trusted real estate solutions across housing,
          commercial and agricultural developments.
        </p>

      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl w-full">
        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
          {/* Discover Luxury Living <span className="text-red-600">.</span> <br /> */}
          Invest With Confidence <span className="text-orange-500">.</span>
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto px-2">
          We craft premium digital experiences for real estate brands that demand elegance, performance, and measurable growth.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <a href="#ourprocess" className="w-full sm:w-auto">
            <button className="w-full bg-gradient-to-r from-red-600 to-orange-500 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 shadow-lg hover:scale-105 transition">
              View Properties
            </button>
          </a>
          <a href="#contact" className="w-full sm:w-auto">
            <button className="w-full border-2 border-white-500 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-red-50 hover:text-black transition">
              Schedule Consultation <FiArrowUpRight />
            </button>
          </a>
        </div>
                <div className="flex justify-center mt-5">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 bg-white border border-gray-200 rounded-full px-4 sm:px-6 py-2 shadow-md text-xs sm:text-sm">
            <span className="flex items-center gap-2 text-red-600 font-semibold">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              Premium Properties Available
            </span>
            <span className="hidden sm:block text-gray-300">|</span>
            <span className="text-gray-600">Limited Inventory</span>
            <span className="hidden sm:block text-gray-300">|</span>
            <button className="flex items-center gap-1 text-black font-semibold hover:text-red-600 transition">
              Explore Now <FiArrowUpRight size={14} />
            </button>
          </div>
        </div>

        {/* Reviews */}
        <div className="mt-10 flex flex-col items-center gap-3">
          <div className="flex -space-x-3">
            <img src="https://i.pravatar.cc/40?img=1" alt="" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-white" />
            <img src="https://i.pravatar.cc/40?img=2" alt="" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-white" />
            <img src="https://i.pravatar.cc/40?img=3" alt="" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-white" />
            <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-red-100 text-red-600 text-xs sm:text-sm font-semibold border-2 border-white">+3K</div>
          </div>
          <div className="flex items-center gap-2 text-gray-100 text-sm sm:text-base">
            ⭐⭐⭐⭐⭐ <span className="text-gray-300 text-xs sm:text-sm"> Trusted by 3,000+ Investors </span>
          </div>
        </div>
      </div>
    </section>
  );
}