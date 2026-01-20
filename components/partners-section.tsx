"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const partners = [
  {
    id: 1,
    name: "Perpetual Help System DALTA",
    logo: "/partners/perpetual.png",
  },
  {
    id: 2,
    name: "Local Business Council",
    logo: "/partners/business-council.png",
  },
  {
    id: 3,
    name: "Health Services Office",
    logo: "/partners/health-office.png",
  },
  {
    id: 4,
    name: "Youth Development Office",
    logo: "/partners/youth.png",
  },
  {
    id: 5,
    name: "Community Cooperative",
    logo: "/partners/cooperative.png",
  },
]

export default function BusinessPartnersSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-linear-to-br from-red-50 to-orange-50">
      <div className="max-w-7xl mx-auto">

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 items-center">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.08 }}
              className="flex items-center justify-center"
            >
              <div className="relative w-full h-24 bg-white rounded-2xl border-2 border-gray-100 shadow-md hover:shadow-xl hover:border-red-300 transition-all p-6 flex items-center justify-center">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-sm mt-12"
        >
          Partnerships shown reflect ongoing collaborations and community support initiatives.
        </motion.p>
      </div>
    </section>
  )
}
