"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import {
  Mail,
  Facebook,
  Github,
  Instagram,
  Heart,
  MapPin,
  Calendar,
  Shield,
  ExternalLink,
  Moon,
  Sun,
} from "lucide-react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

export default function ProfilePage() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  // Return null initially to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white dark:from-black dark:via-gray-900 dark:to-black flex flex-col transition-colors duration-300">
        {/* Loading state */}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white dark:from-black dark:via-gray-900 dark:to-black text-gray-900 dark:text-white flex flex-col transition-colors duration-300">
      {/* Header with glass effect */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-black/30 border-b border-gray-200 dark:border-purple-900/20 p-4 flex items-center justify-between transition-colors duration-300 overflow-x-auto">
        <div className="flex items-center space-x-2">
          <motion.button
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-r from-green-400 to-green-500 text-black font-medium px-4 py-2 rounded-md shadow-lg shadow-green-500/20 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
          >
            Docs
          </motion.button>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative z-10 flex items-center justify-center bg-transparent border-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-400 dark:focus:ring-purple-300 rounded-full p-2"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-white drop-shadow-md" />
            ) : (
              <Moon className="w-5 h-5 text-gray-800 drop-shadow-sm" />
            )}
          </button>
        </div>
      </header>

      {/* Profile Section */}
      <div className="flex flex-col items-center justify-center mt-12 relative">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-md h-64 -z-10">
          <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-gradient-to-br from-purple-300/10 to-pink-300/20 dark:from-purple-500/10 dark:to-pink-500/20 blur-2xl"></div>
          <div className="absolute top-5 right-10 w-32 h-32 rounded-full bg-gradient-to-br from-blue-300/10 to-indigo-300/20 dark:from-blue-500/10 dark:to-indigo-500/20 blur-2xl"></div>
        </div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="relative w-40 h-40"
        >
          {/* Animated rings */}
          <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent dark:from-transparent dark:via-purple-500/20 dark:to-transparent rotate-45 animate-pulse-slow"></div>
          <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-white to-gray-100 dark:from-purple-400 dark:to-purple-700 p-1 shadow-lg shadow-gray-300/50 dark:shadow-purple-500/30">
            <div className="absolute inset-0 rounded-full animate-pulse-slow bg-gradient-to-br from-white/30 to-gray-100/30 dark:from-purple-400/30 dark:to-purple-700/30 blur-md"></div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile-image.png-UIanmJEJhAaoFTiIGBWYNMJ9XSiP6L.jpeg"
              alt="Profile"
              width={160}
              height={160}
              className="rounded-full object-cover border-2 border-white dark:border-black/50"
            />
          </div>

          {/* Decorative dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="absolute -right-2 -bottom-2 w-6 h-6 rounded-full bg-gradient-to-br from-white to-gray-100 dark:from-purple-400 dark:to-purple-600 shadow-lg shadow-gray-300/50 dark:shadow-purple-500/30 border border-white dark:border-purple-500/50"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="absolute -left-1 -top-1 w-4 h-4 rounded-full bg-gradient-to-br from-white to-gray-100 dark:from-purple-300 dark:to-purple-500 shadow-lg shadow-gray-300/50 dark:shadow-purple-500/30 border border-white dark:border-purple-400/50"
          ></motion.div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex items-center"
        >
          <Heart className="w-5 h-5 text-pink-500 dark:text-purple-400 mr-2" />
          <h1 className="text-3xl font-bold tracking-wider bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-purple-300 bg-clip-text text-transparent">
            SIRANA
          </h1>
          <Heart className="w-5 h-5 text-pink-500 dark:text-purple-400 ml-2" />
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-2 relative"
        >
          <p className="text-gray-700 dark:text-gray-400 font-light text-lg relative z-10">Web Developer & Musician</p>
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-white via-gray-200 to-white dark:from-purple-600 dark:via-purple-400 dark:to-purple-600 rounded-full overflow-hidden animate-size-change">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent dark:from-transparent dark:via-purple-300 dark:to-transparent animate-shimmer"></div>
          </div>
        </motion.div>

        {/* Social Icons - Enhanced version */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex space-x-5 mt-8"
        >
          <motion.a
            href="mailto:sirana5097@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 bg-gradient-to-br from-white to-gray-100 dark:from-pink-500 dark:to-red-500 rounded-full flex items-center justify-center shadow-lg shadow-gray-200/50 dark:shadow-red-500/20 hover:shadow-xl border border-gray-100 dark:border-transparent transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-pink-400 dark:focus:ring-red-400"
          >
            <Mail className="w-5 h-5 text-gray-700 dark:text-white" />
          </motion.a>
          <motion.a
            href="https://www.facebook.com/sirana252/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 bg-gradient-to-br from-white to-gray-100 dark:from-blue-500 dark:to-blue-700 rounded-full flex items-center justify-center shadow-lg shadow-gray-200/50 dark:shadow-blue-500/20 hover:shadow-xl border border-gray-100 dark:border-transparent transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <Facebook className="w-5 h-5 text-gray-700 dark:text-white" />
          </motion.a>
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 bg-gradient-to-br from-white to-gray-100 dark:from-gray-700 dark:to-gray-900 rounded-full flex items-center justify-center shadow-lg shadow-gray-200/50 dark:shadow-gray-900/20 hover:shadow-xl border border-gray-100 dark:border-transparent transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            <Github className="w-5 h-5 text-gray-700 dark:text-white" />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/sirana252"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 bg-gradient-to-br from-white to-gray-100 dark:from-pink-500 dark:to-purple-700 rounded-full flex items-center justify-center shadow-lg shadow-gray-200/50 dark:shadow-purple-500/20 hover:shadow-xl border border-gray-100 dark:border-transparent transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            <Instagram className="w-5 h-5 text-gray-700 dark:text-white" />
          </motion.a>
        </motion.div>

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-8 bg-gradient-to-r from-white to-gray-50 dark:from-purple-500/20 dark:to-purple-700/20 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-100 dark:border-purple-500/30 shadow-sm flex items-center"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
          <span className="text-sm text-gray-700 dark:text-gray-300">Available for projects</span>
        </motion.div>
      </div>

      {/* Personal Information */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-12 mx-4 p-6 bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-black rounded-2xl border border-gray-200 dark:border-purple-900/20 shadow-xl shadow-gray-200/50 dark:shadow-purple-900/5 backdrop-blur-sm transition-colors duration-300"
      >
        <h2 className="text-xl font-semibold mb-4 bg-gradient-to-r from-purple-700 to-purple-500 dark:from-white dark:to-purple-300 bg-clip-text text-transparent">
          Personal Information
        </h2>
        <div className="border-t border-gray-200 dark:border-purple-900/20 pt-4 flex flex-wrap gap-3">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl px-4 py-3 flex items-center shadow-lg border border-gray-200 dark:border-purple-900/10 transition-colors duration-300"
          >
            <Calendar className="w-5 h-5 mr-3 text-purple-600 dark:text-purple-400" />
            <span className="font-medium">19 Years</span>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl px-4 py-3 flex items-center shadow-lg border border-gray-200 dark:border-purple-900/10 transition-colors duration-300"
          >
            <MapPin className="w-5 h-5 mr-3 text-purple-600 dark:text-purple-400" />
            <span className="font-medium">Dhaka, Bangladesh</span>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl px-4 py-3 flex items-center shadow-lg border border-gray-200 dark:border-purple-900/10 transition-colors duration-300"
          >
            <Heart className="w-5 h-5 mr-3 text-purple-600 dark:text-purple-400" />
            <span className="font-medium">Single</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Note Section */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-6 mx-4 p-6 bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-black rounded-2xl border border-gray-200 dark:border-purple-900/20 shadow-xl shadow-gray-200/50 dark:shadow-purple-900/5 backdrop-blur-sm transition-colors duration-300"
      >
        <h2 className="text-xl font-semibold mb-4 bg-gradient-to-r from-purple-700 to-purple-500 dark:from-white dark:to-purple-300 bg-clip-text text-transparent">
          Inspiration
        </h2>
        <div className="border-t border-gray-200 dark:border-purple-900/20 pt-4">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-5 text-center shadow-lg border border-gray-200 dark:border-purple-900/10 transition-colors duration-300"
          >
            <p className="font-medium text-lg bg-gradient-to-r from-purple-700 to-purple-500 dark:from-purple-300 dark:to-pink-300 bg-clip-text text-transparent">
              "Create something new every day. Innovation is the key to growth."
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* About Me */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="mt-6 mx-4 p-6 bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-black rounded-2xl border border-gray-200 dark:border-purple-900/20 shadow-xl shadow-gray-200/50 dark:shadow-purple-900/5 backdrop-blur-sm transition-colors duration-300"
      >
        <h2 className="text-xl font-semibold mb-4 bg-gradient-to-r from-purple-700 to-purple-500 dark:from-white dark:to-purple-300 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="border-t border-gray-200 dark:border-purple-900/20 pt-4">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I'm a{" "}
            <span className="text-purple-600 dark:text-purple-400 font-medium">passionate developer and musician</span>{" "}
            who loves building efficient and scalable applications. My expertise includes creating APIs, developing
            automation tools, and exploring new technologies to enhance my projects.
            <br />
            <br />
            With a strong background in both coding and music, I bring a unique creative perspective to problem-solving.
            My goal is to develop innovative solutions that make a meaningful impact while expressing creativity through
            both technology and music.
          </p>
        </div>
      </motion.div>

      {/* Skills */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-6 mx-4 p-6 bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-black rounded-2xl border border-gray-200 dark:border-purple-900/20 shadow-xl shadow-gray-200/50 dark:shadow-purple-900/5 backdrop-blur-sm transition-colors duration-300"
      >
        <h2 className="text-xl font-semibold mb-4 bg-gradient-to-r from-purple-700 to-purple-500 dark:from-white dark:to-purple-300 bg-clip-text text-transparent">
          Skills
        </h2>
        <div className="border-t border-gray-200 dark:border-purple-900/20 pt-4 space-y-5">
          {[
            { name: "Web Development", percentage: 85, color: "from-purple-500 to-purple-700" },
            { name: "Problem Solving", percentage: 90, color: "from-blue-500 to-indigo-600" },
            { name: "JavaScript", percentage: 75, color: "from-yellow-400 to-amber-500" },
            { name: "HTML & CSS", percentage: 80, color: "from-red-500 to-pink-600" },
            { name: "Guitar & Music", percentage: 95, color: "from-green-500 to-emerald-600" },
          ].map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white/50 dark:bg-gray-900/50 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-purple-900/10"
            >
              <div className="flex justify-between mb-3">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  className="font-medium text-gray-800 dark:text-gray-200"
                >
                  {skill.name}
                </motion.span>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 px-2 py-0.5 rounded-md text-sm font-semibold"
                >
                  {skill.percentage}%
                </motion.div>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-3 shadow-inner overflow-hidden">
                <motion.div
                  initial={{ width: 0, x: -100 }}
                  animate={{ width: `${skill.percentage}%`, x: 0 }}
                  transition={{
                    width: { duration: 1, delay: 0.4 + index * 0.2, ease: "easeOut" },
                    x: { duration: 0.8, delay: 0.4 + index * 0.2 },
                  }}
                  className={`bg-gradient-to-r ${skill.color} h-3 rounded-full relative`}
                >
                  <motion.div
                    animate={{
                      x: [0, 10, 0],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                    className="absolute right-0 top-0 h-full w-5 bg-white/30 blur-sm"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: [-100, 100] }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "loop",
                      ease: "linear",
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Features */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="mt-6 mx-4 p-6 bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-black rounded-2xl border border-gray-200 dark:border-purple-900/20 shadow-xl shadow-gray-200/50 dark:shadow-purple-900/5 backdrop-blur-sm transition-colors duration-300"
      >
        <h2 className="text-xl font-semibold mb-4 bg-gradient-to-r from-purple-700 to-purple-500 dark:from-white dark:to-purple-300 bg-clip-text text-transparent">
          Portfolio Highlights
        </h2>
        <div className="border-t border-gray-200 dark:border-purple-900/20 pt-4">
          <motion.div whileHover={{ scale: 1.02 }} className="relative rounded-xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile-image.png-UIanmJEJhAaoFTiIGBWYNMJ9XSiP6L.jpeg"
              alt="Feature"
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="absolute bottom-4 left-4 text-white font-bold text-2xl z-20 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-purple-400" />
              <span className="bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">SIRANA</span>
              <span className="ml-2 text-sm bg-purple-500 px-2 py-1 rounded-md">Developer & Musician</span>
            </div>
            <div className="absolute top-3 right-3 bg-white/90 rounded-full p-2 shadow-lg z-20">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H7L9 3H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 17C14.2091 17 16 15.2091 16 13C16 10.7909 14.2091 9 12 9C9.79086 9 8 10.7909 8 13C8 15.2091 9.79086 17 12 17Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Social Media */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="mt-6 mx-4 p-6 bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-black rounded-2xl border border-gray-200 dark:border-purple-900/20 shadow-xl shadow-gray-200/50 dark:shadow-purple-900/5 backdrop-blur-sm transition-colors duration-300"
      >
        <div className="flex items-center mb-4">
          <Heart className="w-5 h-5 text-purple-600 dark:text-purple-400 mr-2" />
          <h2 className="text-xl font-semibold bg-gradient-to-r from-purple-700 to-purple-500 dark:from-white dark:to-purple-300 bg-clip-text text-transparent">
            Connect With Me
          </h2>
          <Heart className="w-5 h-5 text-purple-600 dark:text-purple-400 ml-2" />
        </div>
        <div className="border-t border-gray-200 dark:border-purple-900/20 pt-4">
          <p className="text-base font-semibold">Social Media</p>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Follow and connect with me on my social platforms!</p>

          <div className="mt-4 flex space-x-2">
            <span className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 text-xs px-4 py-1.5 rounded-full shadow-md border border-gray-200 dark:border-purple-900/10 transition-colors duration-300">
              Music
            </span>
            <span className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 text-xs px-4 py-1.5 rounded-full shadow-md border border-gray-200 dark:border-purple-900/10 transition-colors duration-300">
              Code
            </span>
            <span className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 text-xs px-4 py-1.5 rounded-full shadow-md border border-gray-200 dark:border-purple-900/10 transition-colors duration-300">
              Creator
            </span>
          </div>

          <motion.a
            href="https://www.facebook.com/sirana252/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="mt-5 w-full bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl py-3 flex items-center justify-center shadow-lg shadow-blue-700/30 hover:shadow-blue-700/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <Facebook className="w-5 h-5 mr-2 text-white" />
            <span className="font-medium text-white">Visit Facebook Profile</span>
            <ExternalLink className="w-4 h-4 ml-2 text-white" />
          </motion.a>

          <motion.a
            href="https://www.instagram.com/sirana252"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="mt-3 w-full bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl py-3 flex items-center justify-center shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <Instagram className="w-5 h-5 mr-2 text-white" />
            <span className="font-medium text-white">Visit Instagram Profile</span>
            <ExternalLink className="w-4 h-4 ml-2 text-white" />
          </motion.a>

          <motion.a
            href="mailto:sirana5097@gmail.com"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="mt-3 w-full bg-gradient-to-r from-red-500 to-red-600 rounded-xl py-3 flex items-center justify-center shadow-lg shadow-red-600/30 hover:shadow-red-600/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <Mail className="w-5 h-5 mr-2 text-white" />
            <span className="font-medium text-white">Email Me</span>
            <ExternalLink className="w-4 h-4 ml-2 text-white" />
          </motion.a>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="mt-12 pb-6 text-center"
      >
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6"></div>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          © 2025 <span className="text-gray-900 dark:text-white font-medium">SIRANA</span>. All rights reserved.
        </p>
        <p className="text-purple-600 dark:text-purple-400 text-sm mt-1">Web Developer & Musician</p>
      </motion.footer>
    </div>
  )
}
