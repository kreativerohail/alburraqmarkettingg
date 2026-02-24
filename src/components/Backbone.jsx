export default function Backbone() {
  const projects = [
    "New Chakwal City",
    "Executive Town",
    "Paradise Valley",
    "Rehman Gardens",
    "Bhera City",
    "Bagh City",
    "Prisma Apartments",
    "Model Resorts",
  ];

  return (
    <section className="w-full bg-white py-20 px-5 sm:px-8 lg:px-12">

      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Our Backbone
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Our strength lies in the landmark projects that define our journey
          and shape the future of real estate development.
        </p>

        {/* Projects Grid */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#f7f7f7] hover:bg-gradient-to-r hover:from-red-600 hover:to-orange-500 hover:text-white transition duration-300 rounded-xl p-6 shadow-md hover:shadow-xl group"
            >
              <h3 className="font-semibold text-lg">
                {project}
              </h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}