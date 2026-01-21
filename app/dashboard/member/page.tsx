"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import MemberLayout from '@/components/memberLayout';
import { motion, AnimatePresence } from "framer-motion";
import AnnouncementsSection from '@/components/member-dashboard/member-announcement';
import NewsSection from '@/components/member-dashboard/member-news';
import TestimonialsSection from '@/components/member-dashboard/member-testimonial/page';

const BUSINESS_PARTNERS = [
  { name: "Perpetual Help System DALTA", logo: "/partners/perpetual.png" },
  { name: "Barangay Council", logo: "/partners/barangay.png" },
  { name: "Local Business Association", logo: "/partners/lba.png" },
  { name: "Community Health Center", logo: "/partners/health.png" },
  { name: "Youth Development Office", logo: "/partners/youth.png" },
  { name: "Public Safety Office", logo: "/partners/safety.png" },
];

export default function MemberDashboard() {
  const router = useRouter();

  return (
    <div className="lg:py-10">
      <MemberLayout>
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">
            <span className="bg-linear-to-r from-emerald-600 to-orange-500 bg-clip-text text-transparent">
              Welcome, {/* Name of the user */}!
            </span>
          </h1>
          <p className="text-gray-600 text-lg">Perpetual College Dashboard</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

          <div className="grid grid-cols-1 gap-4 mb-8">
            {/* Announcement Section */}
            <AnnouncementsSection />

            {/* News Section */}
            <NewsSection />
          </div>

          <div className="grid grid-cols-1 gap-6">

            {/* If the member have juantap profile, it'll display the profile card with the profile url and/or qr; 
            otherwise the member will have to avail juantap subscription (redirecting to the juantap page) */}
            
            {/* JuanTap Profile Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-4">
                {/* Icon */}
                <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                  JT
                </div>

                {/* Text */}
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-gray-800">
                    JuanTap Profile
                  </h3>
                  <p className="text-sm text-gray-500">
                    Your digital identity & smart profile
                  </p>
                </div>

                {/* Action */}
                <button
                  onClick={() => router.push("https://www.juantap.info/")}
                  className="px-4 py-2 text-sm bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition"
                >
                  Open
                </button>
              </div>

              {/* Divider */}
              <div className="my-4 border-t" />

              {/* Info Row */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-orange-50 rounded-xl p-3 text-center">
                  <p className="text-xs text-gray-500">Status</p>
                  <p className="font-semibold text-orange-600">Not Active</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-3 text-center">
                  <p className="text-xs text-gray-500">Subscription</p>
                  <p className="font-semibold text-gray-700">Free</p>
                </div>
              </div>
            </div>

            {/* Gallery Section */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  Gallery
                </h2>
                <button className="text-sm text-emerald-600 hover:underline">
                  View all
                </button>
              </div>

              {/* Gallery Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div
                    key={item}
                    className="relative aspect-square rounded-xl overflow-hidden bg-gray-100 group cursor-pointer"
                  >
                    {/* Placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">
                      Image {item}
                    </div>

                    {/* Hover */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                      <span className="text-white text-xs font-medium">
                        View
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <TestimonialsSection />

        {/* Business Partners Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="uppercase bg-linear-to-r from-yellow-600 via-red-600 to-red-900 bg-clip-text text-transparent">
                  Our Business Partners
                </span>
              </h2>
              <div className="w-32 h-1.5 bg-linear-to-r from-yellow-600 via-red-600 to-red-900 rounded-full mx-auto mb-4" />
              <p className="text-lg text-gray-700 max-w-2xl mx-auto font-medium">
                Trusted organizations working with us to serve the community better
              </p>
            </motion.div>

            {/* Continuous Slider */}
            <div className="relative overflow-hidden">
              <motion.div
                className="flex gap-10"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                }}
              >
                {[...BUSINESS_PARTNERS, ...BUSINESS_PARTNERS].map((partner, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 w-64 h-32 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center hover:shadow-2xl transition-all"
                  >
                    {partner.logo ? (
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="max-h-16 object-contain"
                      />
                    ) : (
                      <span className="font-bold text-gray-700 text-center px-4">
                        {partner.name}
                      </span>
                    )}
                  </div>
                ))}
              </motion.div>

              {/* Fade edges */}
              <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-gray-200 to-transparent pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-gray-200 to-transparent pointer-events-none" />
            </div>
          </div>
        </section>
      </MemberLayout>
    </div>
  );
}