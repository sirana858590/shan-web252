"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import {
  Mail,
  Facebook,
  Github,
  Instagram,
  MapPin,
  Calendar,
  ExternalLink,
  Moon,
  Sun,
  Download,
  Code,
  Palette,
  Star,
  Award,
  Coffee,
  Sparkles,
  ArrowRight,
  ChevronDown,
  Filter,
  Search,
  Send,
  Quote,
  ChevronLeft,
  ChevronRight,
  Heart,
  Share2,
  Briefcase,
  GraduationCap,
  Trophy,
  Users,
  Globe,
  Smartphone,
  Database,
  Rocket,
  CheckCircle,
  ArrowUpRight,
  Monitor,
  Settings,
} from "lucide-react"
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"

// Enhanced Floating particles with interactive behavior
const InteractiveParticles = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; vx: number; vy: number }>>([])
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const initialParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
    }))
    setParticles(initialParticles)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-purple-400/20 dark:bg-purple-300/10 rounded-full"
          animate={{
            x: particle.x,
            y: particle.y,
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}

// Premium Services Section
const ServicesSection = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
      features: ["React & Next.js", "Responsive Design", "Performance Optimization", "SEO Ready"],
      color: "from-blue-500 to-purple-600",
      price: "Starting at $2,500",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description: "Cross-platform mobile apps that deliver exceptional user experiences",
      features: ["React Native", "iOS & Android", "Native Performance", "App Store Ready"],
      color: "from-purple-500 to-pink-600",
      price: "Starting at $3,500",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Development",
      description: "Scalable server solutions and API development for your applications",
      features: ["Node.js & Python", "Database Design", "API Development", "Cloud Deployment"],
      color: "from-green-500 to-blue-600",
      price: "Starting at $2,000",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that convert visitors into customers",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      color: "from-pink-500 to-red-600",
      price: "Starting at $1,500",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-900 dark:to-purple-900/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Services & Solutions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive digital solutions to bring your vision to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-gray-700/30 shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-purple-600 dark:text-purple-400">{service.price}</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300"
                  >
                    Learn More
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Interactive Skills Visualization
const SkillsVisualization = () => {
  const [activeCategory, setActiveCategory] = useState("frontend")

  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      icon: <Monitor className="w-6 h-6" />,
      skills: [
        { name: "React/Next.js", level: 85, color: "from-blue-500 to-cyan-500" },
        { name: "TypeScript", level: 80, color: "from-blue-600 to-blue-700" },
        { name: "Tailwind CSS", level: 90, color: "from-cyan-500 to-teal-500" },
        { name: "JavaScript", level: 85, color: "from-yellow-500 to-orange-500" },
      ],
    },
    backend: {
      title: "Backend Development",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "Node.js", level: 75, color: "from-green-500 to-green-600" },
        { name: "Express.js", level: 70, color: "from-gray-600 to-gray-700" },
        { name: "MongoDB", level: 75, color: "from-green-600 to-green-700" },
        { name: "PostgreSQL", level: 65, color: "from-blue-700 to-indigo-700" },
      ],
    },
    tools: {
      title: "Tools & Technologies",
      icon: <Settings className="w-6 h-6" />,
      skills: [
        { name: "Git/GitHub", level: 85, color: "from-gray-700 to-gray-900" },
        { name: "VS Code", level: 90, color: "from-blue-500 to-blue-600" },
        { name: "Figma", level: 70, color: "from-purple-500 to-pink-500" },
        { name: "Vercel/Netlify", level: 80, color: "from-black to-gray-800" },
      ],
    },
  }

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive skill set across the full development stack
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Category Selector */}
          <div className="lg:col-span-1">
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-gray-700/30 sticky top-24">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-6">Skill Categories</h3>
              <div className="space-y-3">
                {Object.entries(skillCategories).map(([key, category]) => (
                  <motion.button
                    key={key}
                    onClick={() => setActiveCategory(key)}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className={`w-full flex items-center space-x-3 p-4 rounded-xl transition-all duration-300 ${
                      activeCategory === key
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900/30"
                    }`}
                  >
                    <div className={activeCategory === key ? "text-white" : "text-purple-600 dark:text-purple-400"}>
                      {category.icon}
                    </div>
                    <span className="font-medium">{category.title}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Display */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-white/20 dark:border-gray-700/30"
              >
                <div className="flex items-center space-x-3 mb-8">
                  <div className="text-purple-600 dark:text-purple-400">
                    {skillCategories[activeCategory as keyof typeof skillCategories].icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                    {skillCategories[activeCategory as keyof typeof skillCategories].title}
                  </h3>
                </div>

                <div className="space-y-6">
                  {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-800 dark:text-gray-200">{skill.name}</span>
                        <span className="text-purple-600 dark:text-purple-400 font-bold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            animate={{ x: [-100, 200] }}
                            transition={{
                              duration: 2,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "linear",
                            }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

// Technologies I Work With Section
const TechnologiesSection = () => {
  const technologies = [
    { name: "React", icon: "⚛️", category: "Frontend" },
    { name: "Next.js", icon: "▲", category: "Framework" },
    { name: "TypeScript", icon: "📘", category: "Language" },
    { name: "Node.js", icon: "🟢", category: "Backend" },
    { name: "Tailwind CSS", icon: "🎨", category: "Styling" },
    { name: "MongoDB", icon: "🍃", category: "Database" },
    { name: "PostgreSQL", icon: "🐘", category: "Database" },
    { name: "Git", icon: "📚", category: "Tools" },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-900/10 dark:to-pink-900/10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Technologies I Use
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Tools and technologies I work with daily</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-xl p-4 border border-white/20 dark:border-gray-700/30 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
            >
              <div className="text-3xl mb-2">{tech.icon}</div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 text-sm">{tech.name}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">{tech.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Blog/Articles Preview Section
const BlogPreview = () => {
  const articles = [
    {
      title: "Getting Started with Next.js 14",
      excerpt: "A beginner's guide to building modern web applications with Next.js and its latest features.",
      date: "Jan 15, 2025",
      readTime: "5 min read",
      category: "Tutorial",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Next.js", "React", "Web Development"],
    },
    {
      title: "Why I Choose TypeScript for Every Project",
      excerpt: "Exploring the benefits of TypeScript and how it improves code quality and developer experience.",
      date: "Jan 10, 2025",
      readTime: "4 min read",
      category: "Opinion",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["TypeScript", "JavaScript", "Best Practices"],
    },
    {
      title: "Building Responsive Layouts with Tailwind CSS",
      excerpt: "Tips and tricks for creating beautiful, responsive designs using Tailwind CSS utility classes.",
      date: "Jan 5, 2025",
      readTime: "6 min read",
      category: "Design",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Tailwind CSS", "CSS", "Responsive Design"],
    },
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Latest Articles
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on modern web development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/20 dark:border-gray-700/30 shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt={article.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-purple-500 text-white text-xs font-medium rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <span>{article.date}</span>
                  <span className="mx-2">•</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {article.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{article.excerpt}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center text-purple-600 dark:text-purple-400 font-medium hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                >
                  Read More
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-semibold hover:shadow-lg transition-all duration-300"
          >
            View All Articles
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

// Interactive Project Gallery
const ProjectGallery = () => {
  const [filter, setFilter] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const projects = [
    {
      id: 1,
      title: "Modern E-Commerce Store",
      category: "web",
      image: "/placeholder.svg?height=300&width=400",
      description: "Full-stack e-commerce platform with payment integration and admin dashboard",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
      link: "#",
      github: "https://github.com",
    },
    {
      id: 2,
      title: "Task Management Dashboard",
      category: "web",
      image: "/placeholder.svg?height=300&width=400",
      description: "Collaborative project management tool with real-time updates",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      link: "#",
      github: "https://github.com",
    },
    {
      id: 3,
      title: "Portfolio Website Template",
      category: "design",
      image: "/placeholder.svg?height=300&width=400",
      description: "Responsive portfolio template with dark mode and animations",
      technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
      link: "#",
      github: "https://github.com",
    },
  ]

  const categories = ["all", "web", "mobile", "design"]

  const filteredProjects = projects.filter((project) => {
    const matchesFilter = filter === "all" || project.category === filter
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my latest work and creative solutions
          </p>
        </motion.div>

        {/* Filter and Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-12 justify-between items-center">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  filter === category
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                    : "bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900/30"
                }`}
              >
                <Filter className="w-4 h-4 inline mr-2" />
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-3 bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, rotateY: 5 }}
                className="group relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/20 dark:border-gray-700/30 shadow-xl hover:shadow-2xl transition-all duration-500"
                style={{ perspective: "1000px" }}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition-colors"
                    >
                      <Heart className="w-4 h-4" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition-colors"
                    >
                      <Share2 className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 text-sm"
                      >
                        <Github className="w-4 h-4 mr-1" />
                        Code
                      </motion.a>
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium text-sm"
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Live Demo
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

// Advanced Contact Form
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Replace with your actual form submission endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: "", email: "", subject: "", message: "" })
        setTimeout(() => setSubmitted(false), 3000)
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      console.error("Error sending message:", error)
      // Handle error state here
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <motion.div
      initial={{ x: 50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-white/20 dark:border-gray-700/30"
    >
      <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-200">Send Message</h3>
      <p className="text-sm text-purple-600 dark:text-purple-400 mb-2">to: [Placeholder Email]</p>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
        Your message will be delivered directly to my inbox
      </p>

      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="text-center py-8"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <Send className="w-8 h-8 text-white" />
            </motion.div>
            <h4 className="text-xl font-bold text-green-600 mb-2">Message Sent!</h4>
            <p className="text-gray-600 dark:text-gray-400">Thank you for reaching out. I'll get back to you soon!</p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                placeholder="Project inquiry"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isSubmitting ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                />
              ) : (
                <>
                  Send Message
                  <Send className="w-5 h-5 ml-2" />
                </>
              )}
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// Testimonials Carousel
const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Alex Thompson",
      role: "Startup Founder",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "Working with Ewr ShAn was a game-changer for our startup. The website delivered exceeded our expectations and helped us secure our first round of funding.",
      rating: 5,
    },
    {
      name: "Maria Garcia",
      role: "Small Business Owner",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "Ewr ShAn transformed our online presence completely. Our sales increased by 40% within the first month of launching the new website.",
      rating: 5,
    },
    {
      name: "David Kim",
      role: "E-commerce Manager",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "The attention to detail and technical expertise is impressive. Our site now loads 3x faster and converts much better.",
      rating: 5,
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-900/10 dark:to-pink-900/10">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">What people say about working with me</p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-gray-700/30 text-center"
            >
              <Quote className="w-12 h-12 text-purple-400 mx-auto mb-6" />

              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                "{testimonials[currentIndex].content}"
              </p>

              <div className="flex items-center justify-center space-x-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="flex items-center justify-center space-x-4">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt={testimonials[currentIndex].name}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">{testimonials[currentIndex].name}</h4>
                  <p className="text-purple-600 dark:text-purple-400">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white/80 dark:bg-gray-800/80 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? "bg-purple-500 w-8" : "bg-gray-300 dark:bg-gray-600"
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white/80 dark:bg-gray-800/80 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}

// Interactive Timeline
const Timeline = () => {
  const timelineData = [
    {
      year: "2024",
      title: "Freelance Full-Stack Developer",
      company: "Self-Employed",
      description: "Building custom web applications and helping businesses establish their online presence",
      icon: <Briefcase className="w-5 h-5" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      year: "2023",
      title: "Junior Web Developer",
      company: "Local Tech Company",
      description: "Developed responsive websites and learned modern development practices",
      icon: <Code className="w-5 h-5" />,
      color: "from-blue-500 to-purple-500",
    },
    {
      year: "2022",
      title: "Started Learning Web Development",
      company: "Self-Taught",
      description: "Began journey in web development through online courses and personal projects",
      icon: <GraduationCap className="w-5 h-5" />,
      color: "from-green-500 to-blue-500",
    },
  ]

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            My Journey
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">A timeline of my professional growth</p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500" />

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative flex items-start space-x-8"
              >
                {/* Timeline dot */}
                <div
                  className={`relative z-10 w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center text-white shadow-lg`}
                >
                  {item.icon}
                </div>

                {/* Content */}
                <motion.div
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex-1 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-gray-700/30 shadow-lg"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">{item.year}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{item.company}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Enhanced Stats with Charts
const StatsSection = () => {
  const stats = [
    {
      label: "Projects Completed",
      value: 15,
      icon: <Briefcase className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      label: "Happy Clients",
      value: 12,
      icon: <Users className="w-6 h-6" />,
      color: "from-blue-500 to-purple-500",
    },
    {
      label: "Years Experience",
      value: 3,
      icon: <Trophy className="w-6 h-6" />,
      color: "from-green-500 to-blue-500",
    },
    {
      label: "Technologies",
      value: 20,
      icon: <Code className="w-6 h-6" />,
      color: "from-yellow-500 to-green-500",
    },
  ]

  const skills = [
    { name: "Frontend", percentage: 95 },
    { name: "Backend", percentage: 88 },
    { name: "UI/UX Design", percentage: 85 },
    { name: "DevOps", percentage: 75 },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-900 dark:to-purple-900/20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            By the Numbers
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Achievements and expertise metrics</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-gray-700/30 text-center shadow-lg"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center text-white mx-auto mb-4`}
              >
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                <AnimatedCounter end={stat.value} />+
              </div>
              <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Skills Chart */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-white/20 dark:border-gray-700/30"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">Skill Proficiency</h3>
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                  <span className="text-purple-600 dark:text-purple-400 font-semibold">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    transition={{ duration: 1.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full relative"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{ x: [-100, 200] }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                    />
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    if (isInView) {
      let startTime: number
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
        setCount(Math.floor(progress * end))
        if (progress < 1) requestAnimationFrame(animate)
      }
      requestAnimationFrame(animate)
    }
  }, [isInView, end, duration])

  return <span ref={ref}>{count}</span>
}

// Main Component
export default function ProfilePage() {
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { theme, setTheme } = useTheme()
  const { scrollY } = useScroll()

  const backgroundY = useTransform(scrollY, [0, 500], [0, 150])
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.9])

  useEffect(() => {
    setMounted(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "services",
        "skills",
        "projects",
        "blog",
        "testimonials",
        "timeline",
        "stats",
        "contact",
      ]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  const safeTheme = theme || "light"

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-black dark:to-purple-900 text-gray-900 dark:text-white overflow-x-hidden"
      suppressHydrationWarning
    >
      {/* Interactive Particles */}
      <InteractiveParticles />

      {/* Custom Cursor */}
      <motion.div
        className="fixed w-6 h-6 bg-purple-500/30 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      {/* Enhanced Header */}
      <motion.header
        style={{ opacity: headerOpacity }}
        className="fixed top-0 left-0 right-0 z-40 backdrop-blur-2xl bg-white/10 dark:bg-black/10 border-b border-white/20 dark:border-gray-700/30"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="flex items-center space-x-4"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold"
            >
              E
            </motion.div>
            <span className="font-bold text-xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Ewr ShAn
            </span>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            {[
              { name: "Home", id: "home" },
              { name: "About", id: "about" },
              { name: "Services", id: "services" },
              { name: "Skills", id: "skills" },
              { name: "Projects", id: "projects" },
              { name: "Contact", id: "contact" },
            ].map((item) => (
              <motion.a
                key={item.name}
                href={`#${item.id}`}
                whileHover={{ scale: 1.1 }}
                className="relative text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                {item.name}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
                  />
                )}
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-3 rounded-xl bg-white/20 dark:bg-gray-800/50 backdrop-blur-sm border border-white/30 dark:border-gray-700/50 hover:bg-white/30 dark:hover:bg-gray-700/50 transition-all"
            >
              <AnimatePresence mode="wait">
                {theme === "dark" ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Sun className="w-5 h-5 text-yellow-500" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Moon className="w-5 h-5 text-purple-600" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
        <motion.div style={{ y: backgroundY }} className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
        </motion.div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          {/* Enhanced Profile Image */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
            className="relative mx-auto mb-8"
          >
            <div className="relative w-48 h-48 mx-auto">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-purple-400/30"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-2 rounded-full border border-pink-400/30"
              />

              <div className="absolute inset-4 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1 shadow-2xl">
                <div className="relative rounded-full overflow-hidden bg-white dark:bg-gray-900">
                  <Image
                    src="/images/profile-new.jpg"
                    alt="Ewr ShAn - Web Developer & Musician"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent" />
                </div>
              </div>

              {/* Floating icons */}
              {[
                { icon: <Code className="w-4 h-4" />, position: "top-0 right-4", delay: 0 },
                { icon: <Globe className="w-4 h-4" />, position: "bottom-4 right-0", delay: 0.5 },
                { icon: <Palette className="w-4 h-4" />, position: "bottom-0 left-4", delay: 1 },
                { icon: <Sparkles className="w-4 h-4" />, position: "top-4 left-0", delay: 1.5 },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 2 + item.delay, duration: 0.5 }}
                  className={`absolute ${item.position} w-8 h-8 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg border border-purple-200 dark:border-purple-700 text-purple-600 dark:text-purple-400`}
                >
                  <motion.div
                    animate={{ y: [-2, 2, -2] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: item.delay }}
                  >
                    {item.icon}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Name and Title */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-6"
          >
            <motion.h1
              className="text-6xl md:text-8xl font-bold mb-4"
              style={{
                background: "linear-gradient(45deg, #8B5CF6, #EC4899, #F59E0B, #10B981)",
                backgroundSize: "300% 300%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              Ewr ShAn
            </motion.h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1, duration: 1 }}
              className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 rounded-full mx-auto mb-6 max-w-md"
            />

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-light"
            >
              Creative Developer & Digital Innovator
            </motion.p>
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-semibold overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                View My Work
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-purple-600 text-purple-600 dark:text-purple-400 rounded-2xl font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300 flex items-center"
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3 }}
            className="absolute -bottom-16 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="flex flex-col items-center text-gray-400"
            >
              <span className="text-sm mb-2">Scroll to explore</span>
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a{" "}
                <span className="text-purple-600 dark:text-purple-400 font-semibold">passionate web developer</span>{" "}
                from Dhaka, Bangladesh. At 19, I've dedicated myself to mastering modern web technologies and creating
                meaningful digital experiences.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I specialize in{" "}
                <span className="text-pink-600 dark:text-pink-400 font-semibold">React and Next.js development</span>,
                with a focus on creating fast, responsive, and user-friendly applications. I'm always eager to learn new
                technologies and take on challenging projects.
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                {["React", "Next.js", "TypeScript", "Node.js", "Python", "UI/UX Design"].map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium border border-purple-200 dark:border-purple-700"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-3xl p-8 backdrop-blur-sm border border-white/20 dark:border-gray-700/30">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: <Award className="w-8 h-8" />, title: "Excellence", desc: "Quality-driven approach" },
                    { icon: <Coffee className="w-8 h-8" />, title: "Dedication", desc: "24/7 commitment" },
                    { icon: <Rocket className="w-8 h-8" />, title: "Innovation", desc: "Cutting-edge solutions" },
                    { icon: <Star className="w-8 h-8" />, title: "Results", desc: "Proven track record" },
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm"
                    >
                      <div className="text-purple-600 dark:text-purple-400 mb-2 flex justify-center">{item.icon}</div>
                      <h3 className="font-semibold text-gray-800 dark:text-gray-200">{item.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services">
        <ServicesSection />
      </section>

      {/* Skills Section */}
      <section id="skills">
        <SkillsVisualization />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <ProjectGallery />
      </section>

      {/* Blog Section */}
      <section id="blog">
        <BlogPreview />
      </section>

      {/* Testimonials Section */}
      <TestimonialsCarousel />

      {/* Timeline Section */}
      <Timeline />

      {/* Stats Section */}
      <StatsSection />

      {/* Technologies Section */}
      <section id="technologies">
        <TechnologiesSection />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Ready to bring your ideas to life? Let's create something amazing together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-white/20 dark:border-gray-700/30">
                <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">Get in Touch</h3>

                {[
                  {
                    icon: <Mail className="w-6 h-6" />,
                    label: "Email",
                    value: "[Placeholder Email]",
                    href: "mailto:[Placeholder Email]",
                  },
                  { icon: <MapPin className="w-6 h-6" />, label: "Location", value: "Dhaka, Bangladesh", href: null },
                  { icon: <Calendar className="w-6 h-6" />, label: "Age", value: "19 Years", href: null },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 p-4 rounded-xl hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
                  >
                    <div className="text-purple-600 dark:text-purple-400">{item.icon}</div>
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{item.label}</div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-gray-800 dark:text-gray-200">{item.value}</div>
                      )}
                    </div>
                  </motion.div>
                ))}

                {/* Social Links */}
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Follow Me</h4>
                  <div className="flex space-x-4">
                    {[
                      {
                        icon: <Facebook className="w-5 h-5" />,
                        href: "https://www.facebook.com/sirana252",
                        color: "hover:text-blue-600",
                      },
                      {
                        icon: <Instagram className="w-5 h-5" />,
                        href: "https://www.instagram.com/",
                        color: "hover:text-pink-600",
                      },
                      {
                        icon: <Github className="w-5 h-5" />,
                        href: "https://github.com",
                        color: "hover:text-gray-800 dark:hover:text-gray-200",
                      },
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, y: -2 }}
                        className={`w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300`}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-12 bg-gradient-to-r from-purple-900 via-gray-900 to-pink-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex items-center justify-center space-x-2 mb-6">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center text-white font-bold"
              >
                E
              </motion.div>
              <span className="text-2xl font-bold">Ewr ShAn</span>
            </div>

            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mb-6" />

            <p className="text-gray-300 mb-4">© 2025 Ewr ShAn. Crafted with ❤️ and lots of ☕</p>

            <p className="text-sm text-gray-400">Creative Developer • Digital Innovator • Problem Solver</p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
