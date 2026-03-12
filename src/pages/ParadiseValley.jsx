import { motion } from "framer-motion";
import { FaLeaf, FaMapMarkerAlt, FaHome, FaDollarSign } from "react-icons/fa";
import pv from "../assets/pv1.jpeg";
import pv1 from "../assets/pv.jpeg";
import { Link } from "react-router-dom";

export default function ParadiseValley() {
  return (
    <div className="w-full bg-white text-gray-900 overflow-x-hidden">

      {/* HERO */}
      <section className="pt-28 pb-20 px-5 sm:px-8 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="uppercase tracking-widest text-xs sm:text-sm text-orange-500 font-semibold">
              Paradise Valley
            </p>

            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Elevating Modern <br />
              <span className="text-orange-500">Luxury Living</span>
            </h1>

            <p className="mt-5 text-gray-600 text-base sm:text-lg max-w-xl">
              Experience refined architecture, serene landscapes, and
              high-return investment opportunities crafted for excellence.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition">
                Book Consultation
              </button>

              <button className="px-8 py-3 border rounded-full hover:bg-gray-100 transition">
                View Brochure
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <img
              src={pv}
              alt="Luxury Villa"
              className="rounded-3xl w-full object-cover shadow-xl"
            />

            <div className="absolute -bottom-6 left-4 sm:-left-6 bg-white px-6 py-4 rounded-2xl shadow-lg border">
              <p className="text-xs text-gray-500">Starting From</p>
              <p className="text-xl font-bold text-orange-500">$250,000</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 px-5 sm:px-8 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img
              alt="pv1"
              src={pv1}
              className="rounded-3xl w-full shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Designed for <span className="text-orange-500">Excellence</span>
            </h2>

            <p className="text-gray-600 text-base sm:text-lg mb-8">
              Paradise Valley blends architectural brilliance with smart
              urban planning for future-ready living.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Feature icon={<FaLeaf />} title="Green Landscapes" />
              <Feature icon={<FaMapMarkerAlt />} title="Prime Location" />
              <Feature icon={<FaHome />} title="Modern Architecture" />
              <Feature icon={<FaDollarSign />} title="Strong ROI" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FULL IMAGE */}
      <section className="relative h-[60vh] sm:h-[75vh]">
        <img
          src="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=80"
          alt="Luxury Community"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-white/80 flex items-center justify-center text-center px-6">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              A Community for <span className="text-orange-500">Visionaries</span>
            </h2>

            <p className="text-gray-700 max-w-xl mx-auto text-base sm:text-lg">
              Secure, elegant, and designed for long-term growth.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-24 px-6 sm:px-8 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <p className="uppercase tracking-widest text-sm text-orange-500 font-semibold">
              Our Projects
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4">
              Real Estate <span className="text-orange-500">Developments</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            <ProjectCard title="Prisma Apartments" location="Islamabad" size="Luxury Apartments" />
            <ProjectCard title="New Chakwal City" location="Chakwal" size="1200 Kanals" />
            <ProjectCard title="Rehman Garden" location="PD Khan" size="700 Kanals" />
            <ProjectCard title="Rehmaai Garden" location="Housing Scheme" size="Residential Project" />
            <ProjectCard title="New City Bhera" location="Bhera" size="300 Kanals" />
            <ProjectCard title="Executive Town" location="Chakwal" size="222 Kanals" />
            <ProjectCard title="Model Resorts" location="Kallar Kahar" size="Commercial – 35 Kanals" />

          </div>

        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 px-6 sm:px-8 lg:px-24">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <p className="uppercase tracking-widest text-sm text-orange-500 font-semibold">
              Plot Pricing
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4">
              Choose Your <span className="text-orange-500">Perfect Plot</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            <PricingCard title="5 Marla Plot" price="PKR 18,50,000" />

            <PricingCard title="10 Marla Plot" price="PKR 34,00,000" popular />

            <PricingCard title="1 Kanal Plot" price="PKR 65,00,000" />

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 text-center">
        <p className="uppercase tracking-widest text-xs sm:text-sm text-orange-500 font-semibold">
          Limited Opportunities
        </p>

        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold">
          Your Luxury Future <br />
          <span className="text-orange-500">Starts Today</span>
        </h2>
        <Link to="/contact">
          <div className="mt-10">
            <button className="px-10 py-4 bg-orange-500 text-white rounded-full font-semibold shadow-lg hover:scale-105 transition">
              Schedule a Private Visit
            </button>
          </div>
        </Link>
      </section>

    </div>
  );
}

function Feature({ icon, title }) {
  return (
    <div className="flex items-center gap-4 bg-white p-5 rounded-2xl border shadow-sm hover:shadow-lg transition">
      <div className="text-orange-500 text-xl">{icon}</div>
      <h4 className="font-semibold">{title}</h4>
    </div>
  );
}

function ProjectCard({ title, location, size }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition border">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-1">Location: {location}</p>
      <p className="text-orange-500 font-semibold">{size}</p>
    </div>
  );
}

function PricingCard({ title, price, popular }) {
  return (
    <div className={`relative bg-white p-8 rounded-3xl border shadow-md hover:shadow-xl transition ${popular ? "border-orange-500 scale-105" : ""}`}>

      {popular && (
        <span className="absolute -top-3 right-6 bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
          Popular
        </span>
      )}

      <h3 className="text-2xl font-bold mb-3">{title}</h3>

      <p className="text-3xl font-extrabold text-orange-500 mb-6">
        {price}
      </p>

      <button className="w-full py-3 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition">
        Book Plot
      </button>

    </div>
  );
}