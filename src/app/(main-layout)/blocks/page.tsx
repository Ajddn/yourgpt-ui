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
      <div>next design</div>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg')",
          }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Radial light effect */}
        <motion.div
          initial={{ opacity: 0.5, scale: 0.9 }}
          animate={{ opacity: [0.5, 0.8, 0.5], scale: [0.9, 1, 0.9] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px]" />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6"
          >
            Glow Effect Cap Collection
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg sm:text-xl text-gray-300 mb-8"
          >
            Premium caps that shine in every style. Designed with comfort,
            durability, and timeless fashion.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black font-semibold py-4 px-10 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-2xl text-lg"
          >
            Buy Now
          </motion.button>
        </div>
      </section>

      <div>next design</div>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg')",
          }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Radial light effect */}
        <motion.div
          initial={{ opacity: 0.5, scale: 0.9 }}
          animate={{ opacity: [0.5, 0.8, 0.5], scale: [0.9, 1, 0.9] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px]" />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-3xl">
          {/* Colored Heading with Hover Animation */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{
              scale: 1.05,
              textShadow: "0px 0px 20px rgba(255, 99, 71, 0.8)",
            }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 
                     bg-gradient-to-r from-pink-500 via-red-400 to-yellow-400 
                     bg-clip-text text-transparent cursor-pointer inline-block"
          >
            Glow Effect Cap Collection
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg sm:text-xl text-gray-300 mb-8"
          >
            Premium caps that shine in every style. Designed with comfort,
            durability, and timeless fashion.
          </motion.p>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black font-semibold py-4 px-10 rounded-xl hover:bg-gray-100 
                     transition-all duration-300 shadow-lg hover:shadow-2xl text-lg"
          >
            Buy Now
          </motion.button>
        </div>
      </section>

      <div>split layout section</div>

      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden border border-white/20 rounded-xl"
        style={{ backgroundColor: "rgb(9,9,11)" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl w-full items-center">
          {/* LEFT: Image with Reveal */}
          <motion.div
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl shadow-2xl group"
          >
            <motion.img
              src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg"
              alt="Cap"
              className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Overlay Light Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </motion.div>

          {/* RIGHT: Text & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-6 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Classic Baseball <span className="text-indigo-400">Cap</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-md">
              Premium comfort meets timeless streetwear. Designed with durable
              cotton and an adjustable fit.
            </p>
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <span className="text-2xl font-semibold">$24.99</span>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 15px rgba(99,102,241,0.7)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-indigo-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-indigo-400 transition-colors duration-300"
              >
                Buy Now
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <div>another design to add </div>

      <section className="pt-28 md:pt-36 px-6 md:px-20 bg-gradient-to-b from-[#0E0E0E] to-[#111827] min-h-[90vh] flex flex-col items-center justify-center text-center border-b border-gray-800 overflow-hidden relative">
        <div className="absolute top-0 left-[5%] h-[622px] w-[2px] bg-gray-800" />
        <div className="absolute top-0 right-[5%] h-[622px] w-[2px] bg-gray-800" />
        <h1 className="text-4xl md:text-6xl font-bold leading-tight whitespace-nowrap">
          Data Center Management Software
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-3xl leading-relaxed">
          Increase uptime, reduce costs, automate operations, and stay
          compliant.
          <br />
          Built for colocations, data centers, and cloud providers.
        </p>
        <div className="relative top-4 w-screen border-t border-gray-800 mt-12 mb-4" />
        <div className="relative flex justify-center w-[400px]">
          <div className="absolute w-[500px] h-[120px] bg-[#a855f7] blur-[120px] opacity-100 z-0 rounded-full"></div>

          <button className="relative w-full py-3 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium transition duration-300 rounded-none z-10 font-sans">
            <a href="" target="_blank" rel="noopener noreferrer">
              Buy now{" "}
            </a>
          </button>
        </div>
      </section>

      <div> another design</div>
      <section
        className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
        style={{ backgroundColor: "rgb(9,9,11)" }}
      >
        {/* Checkered Pattern */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            backgroundImage:
              "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            opacity: 0.06,
          }}
        />

        {/* Center Glow Effect */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <div className="w-[500px] h-[500px] bg-white/5 blur-[50px] rounded-full"></div>
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-center px-6 overflow-hidden"
        >
          {/* Main Heading */}
          <motion.h1
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="text-6xl sm:text-8xl font-extrabold mb-4 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]"
          >
            Classic Baseball Cap collection
          </motion.h1>

          {/* Subheading */}
          <motion.h2
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 180 }}
            className="text-3xl sm:text-4xl font-semibold mb-8 text-gray-200"
          >
            Why Choose Our Caps?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Our caps combine timeless design with premium materials, offering
            both comfort and durability. Perfect for everyday wear, outdoor
            adventures, or elevating your street style, they’re built to last
            while keeping you effortlessly stylish.
          </motion.p>

          {/* CTA */}
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(255,255,255,0.8)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-10 py-4 rounded-xl font-semibold text-lg sm:text-xl hover:bg-gray-200 transition-all"
          >
            Buy Now – $24.99
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}
