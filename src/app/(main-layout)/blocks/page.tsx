"use client";

import React from "react";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function CapHeroSection(): JSX.Element {
  return (
    <div className="p-12 text-center text-muted-foreground">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg')",
            }}
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/70" />
          {/* Gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
        </div>

        {/* Hero Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
        >
          {/* Main Headline */}
          <motion.h1
            variants={textVariants}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tight"
          >
            <span className="block">Classic Baseball</span>
            <span className="block bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Cap Collection
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.div variants={textVariants} className="mb-8 space-y-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-200 mb-4">
              Why Choose Our Caps?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Premium quality materials meet timeless design. Our baseball caps
              are crafted for comfort, durability, and style that transcends
              seasons. Perfect for every adventure.
            </p>
          </motion.div>

          {/* Features List */}
          <motion.div
            variants={textVariants}
            className="flex flex-wrap justify-center gap-6 mb-10 text-gray-300"
          >
            {[
              "Premium Materials",
              "Adjustable Fit",
              "Classic Design",
              "Free Shipping",
            ].map((feature, i) => (
              <div key={i} className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full" />
                <span className="text-sm sm:text-base">{feature}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={buttonVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* Primary Buy Now Button */}
            <motion.button
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
              className="bg-white text-black font-semibold py-4 px-8 sm:px-12 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-2xl text-lg sm:text-xl min-w-[200px]"
            >
              Buy Now - $24.99
            </motion.button>

            {/* Secondary Button */}
            <motion.button
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
              className="border-2 border-white text-white font-medium py-4 px-8 sm:px-12 rounded-xl hover:bg-white hover:text-black transition-all duration-300 text-lg sm:text-xl min-w-[200px]"
            >
              View Collection
            </motion.button>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            variants={textVariants}
            className="mt-12 text-gray-400 text-sm sm:text-base"
          >
            <p>
              ✨ Limited time offer • Free shipping on orders over $50 • 30-day
              returns
            </p>
          </motion.div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-950 to-transparent z-5" />

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1.5,
            },
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white/70 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>
    </div>
  );
}
