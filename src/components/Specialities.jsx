export default function Specialities() {
  return (
    <section className="w-full bg-[#f7f7f7] py-20 px-5 sm:px-8 lg:px-12">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <div className="relative w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop"
            alt="Real Estate Office"
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Floating Card */}
          <div className="absolute bottom-6 left-6 bg-white shadow-xl rounded-xl px-6 py-4">
            <p className="text-sm text-gray-500">Trusted Since</p>
            <h3 className="text-xl font-bold text-gray-800">2002</h3>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>

          <span className="inline-block bg-red-100 text-red-600 text-xs font-semibold px-4 py-2 rounded-full mb-4">
            Our Specialities
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-snug">
            Delivering Premium <br />
            Real Estate Solutions
          </h2>

          <p className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed">
            We specialize in transforming visions into reality through
            innovative housing schemes, commercial towers, residential
            developments, and agricultural land investments across Pakistan.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">

            <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition">
              <h4 className="font-semibold text-gray-800">Housing Schemes</h4>
              <p className="text-sm text-gray-500 mt-1">
                Modern living communities built for future lifestyles.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition">
              <h4 className="font-semibold text-gray-800">Commercial Towers</h4>
              <p className="text-sm text-gray-500 mt-1">
                High ROI business infrastructure & offices.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition">
              <h4 className="font-semibold text-gray-800">Residential Areas</h4>
              <p className="text-sm text-gray-500 mt-1">
                Secure & elegant family living spaces.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition">
              <h4 className="font-semibold text-gray-800">Agricultural Land</h4>
              <p className="text-sm text-gray-500 mt-1">
                Smart long-term investment opportunities.
              </p>
            </div>

          </div>

          <button className="mt-8 bg-gradient-to-r from-red-600 to-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
            Explore Projects
          </button>

        </div>
      </div>
    </section>
  );
}