"use client"
<<<<<<< HEAD
import React from 'react';
import MemberLayout from '@/components/memberLayout';
import { motion, AnimatePresence } from "framer-motion"
import { X, Calendar, User, Newspaper, Clock } from "lucide-react"

interface NewsArticle {
  id: number
  title: string
  content: string
  category: string
  image?: string
  status: string
  published_at?: string
  created_at: string
  author?: {
    id: number
    name: string
    email: string
  }
}

export default function NewsPage() {
  const [news, setNews] = React.useState<NewsArticle[]>([])
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState<string | null>(null)
  const [selectedArticle, setSelectedArticle] = React.useState<NewsArticle | null>(null)

  // Get image URL - handle relative paths from Laravel
  const getImageUrl = (imagePath?: string) => {
    if (!imagePath) return "/placeholder.svg"

    // If it's already a full URL, return it
    if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
      return imagePath
    }

    // Otherwise, prepend the Laravel backend URL
    const baseUrl = process.env.NEXT_PUBLIC_IMAGE_URL || 'http://localhost:8000'
    // Remove leading slash if present to avoid double slashes
    const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath
    return `${baseUrl}/${cleanPath}`
  }

  React.useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true)
        setError(null)

        const response = await fetch('/api/news/published?per_page=12')

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const result = await response.json()

        if (result.success) {
          let newsData: NewsArticle[] = []

          if (result.data && typeof result.data === 'object') {
            if (Array.isArray(result.data.data)) {
              newsData = result.data.data
            } else if (Array.isArray(result.data)) {
              newsData = result.data
            }
          }

          setNews(newsData)
        } else {
          throw new Error(result.message || 'Failed to fetch news')
        }
      } catch (err) {
        console.error('Error fetching news:', err)
        setError(err instanceof Error ? err.message : 'An error occurred')
=======

import { useState, useEffect } from "react"
import { ChevronLeft, Calendar, Eye, Share2, Bookmark, Newspaper } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import MemberLayout from "@/components/memberLayout"

interface NewsArticle {
  id: string
  title: string
  excerpt: string
  content: string
  category: string
  image?: string
  publishedAt: string
  views: number
  author: string
}

interface ApiNewsArticle {
  id: number
  title: string
  description: string
  content: string
  image_url: string | null
  status: string
  priority: string
  published_at: string | null
  created_at: string
  updated_at: string
}

export default function NewsPage() {
  const [news, setNews] = useState<NewsArticle[]>([])
  const [announcements, setAnnouncements] = useState<NewsArticle[]>([])
  const [events, setEvents] = useState<NewsArticle[]>([])
  const [projects, setProjects] = useState<NewsArticle[]>([])

  const [selectedCategory, setSelectedCategory] = useState("all")
  const [loading, setLoading] = useState(true)

  const categories = [
    { value: "all", label: "All News" },
    { value: "announcements", label: "Announcements" },
    { value: "events", label: "Events" },
    { value: "projects", label: "Projects" },
  ]

  const transformArticle = (article: ApiNewsArticle, category: string): NewsArticle => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'
    return {
      id: `${category}-${article.id}`,
      title: article.title,
      excerpt: article.description || article.content.substring(0, 150) + "...",
      content: article.content,
      category: category,
      image: article.image_url ? `${apiUrl}${article.image_url}` : undefined,
      publishedAt: article.published_at 
        ? new Date(article.published_at).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
          })
        : new Date(article.created_at).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
          }),
      views: Math.floor(Math.random() * 1000),
      author: "Admin"
    }
  }

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        // Fetch all categories in parallel
        const [newsRes, announcementsRes, eventsRes, projectsRes] = await Promise.all([
          fetch("/api/news"),
          fetch("/api/announcements"),
          fetch("/api/events"),
          fetch("/api/projects"),
        ])

        const [newsData, announcementsData, eventsData, projectsData] = await Promise.all([
          newsRes.json(),
          announcementsRes.json(),
          eventsRes.json(),
          projectsRes.json(),
        ])

        // Transform each category
        const transformedNews = (Array.isArray(newsData) ? newsData : newsData.news || [])
          .map((article: ApiNewsArticle) => transformArticle(article, "news"))
        
        const transformedAnnouncements = (Array.isArray(announcementsData) ? announcementsData : announcementsData.announcements || [])
          .map((article: ApiNewsArticle) => transformArticle(article, "announcements"))
        
        const transformedEvents = (Array.isArray(eventsData) ? eventsData : eventsData.events || [])
          .map((article: ApiNewsArticle) => transformArticle(article, "events"))
        
        const transformedProjects = (Array.isArray(projectsData) ? projectsData : projectsData.projects || [])
          .map((article: ApiNewsArticle) => transformArticle(article, "projects"))

        setNews(transformedNews)
        setAnnouncements(transformedAnnouncements)
        setEvents(transformedEvents)
        setProjects(transformedProjects)
       
      } catch (error) {
        console.error("Error fetching data:", error)
>>>>>>> d961c4d44f144ef19bb3ed9d984f12c663c610e4
      } finally {
        setLoading(false)
      }
    }

<<<<<<< HEAD
    fetchNews()
  }, [])

  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedArticle(null)
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  React.useEffect(() => {
    if (selectedArticle) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [selectedArticle])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="lg:py-10">
      <MemberLayout>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              <span className="bg-gradient-to-r from-yellow-600 via-red-600 to-red-900 bg-clip-text text-transparent">
                Community Updates
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.3 }}
              className="w-32 h-1.5 bg-gradient-to-r from-yellow-600 via-red-600 to-red-900 rounded-full mx-auto mb-4"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-700 max-w-3xl mx-auto font-medium"
            >
              Stay updated with the latest news, events, and important notices from Perpetual Village
            </motion.p>
          </motion.div>

          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="text-center">
                <div className="relative w-16 h-16 mx-auto mb-4">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border-4 border-transparent border-t-red-500 border-r-yellow-500 border-b-yellow-500 rounded-full"
                  />
                </div>
                <p className="text-gray-700 font-medium">Loading news...</p>
              </div>
            </div>
          ) : error ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <X className="w-8 h-8 text-white" />
              </div>
              <p className="text-red-700 mb-6 font-semibold text-lg">Failed to load news: {error}</p>
              <button
                onClick={() => window.location.reload()}
                className="px-8 py-4 bg-gradient-to-tl from-yellow-600 via-red-700 to-red-900 text-white rounded-full hover:shadow-2xl transition-all font-semibold text-lg hover:scale-105"
              >
                Try Again
              </button>
            </motion.div>
          ) : news.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-red-500 via-yellow-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Newspaper className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-600 via-red-600 to-red-900 bg-clip-text text-transparent mb-3">
                No News Available
              </h3>
              <p className="text-gray-600 text-lg">Check back later for community updates and stories.</p>
            </motion.div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {news.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -12, scale: 1.02 }}
                  onClick={() => setSelectedArticle(article)}
                  className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer border-2 border-gray-100 hover:border-yellow-300"
                >
                  {/* Hover Gradient Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-yellow-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Image */}
                  <div className="relative h-56 overflow-hidden bg-gradient-to-br from-red-100 via-yellow-100 to-green-100 flex items-center justify-center">
                    <img
                      src={getImageUrl(article.image)}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder.svg"
                      }}
                    />
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase bg-gradient-to-tl from-yellow-600 via-red-700 to-red-900 text-white shadow-lg">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 relative z-10">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <Clock className="w-4 h-4" />
                      <span className="font-medium">
                        {formatDate(article.published_at || article.created_at)}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:bg-gradient-to-r group-hover:from-yellow-600 group-hover:via-red-600 group-hover:to-red-900 group-hover:bg-clip-text group-hover:text-transparent transition-all line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-gray-600 line-clamp-3 leading-relaxed mb-4">
                      {article.content.substring(0, 150)}...
                    </p>

                    <motion.div
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center gap-2 text-sm font-bold bg-gradient-to-r from-yellow-600 via-red-600 to-red-900 bg-clip-text text-transparent"
                    >
                      Read Full Story
                      <svg className="w-4 h-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedArticle && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticle(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                transition={{ type: "spring", damping: 25 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col"
              >
                {/* Modal Header with Image */}
                <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 p-6 md:p-8">
                  {selectedArticle.image ? (
                    <div className="w-full flex items-center justify-center">
                      <img
                        src={getImageUrl(selectedArticle.image)}
                        alt={selectedArticle.title}
                        className="w-full h-auto max-h-[400px] object-cover rounded-xl shadow-lg"
                        onError={(e) => {
                          e.currentTarget.src = "/placeholder.svg"
                        }}
                      />
                    </div>
                  ) : (
                    <div className="w-full h-64 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-xl"></div>
                  )}

                  {/* Close Button */}
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedArticle(null)}
                    className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full p-3 shadow-xl hover:bg-white transition-colors z-20"
                    aria-label="Close modal"
                  >
                    <X className="w-6 h-6 text-gray-700" />
                  </motion.button>

                  {/* Category Badge on Image */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold uppercase bg-gradient-to-tl from-yellow-600 via-red-700 to-red-900 text-white shadow-xl">
                      {selectedArticle.category}
                    </span>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="flex-1 overflow-y-auto p-8 md:p-10">
                  <div className="space-y-6">
                    {/* Title */}
                    <h2 className="text-3xl md:text-3xl font-bold bg-gradient-to-r from-yellow-600 via-red-600 to-red-900 bg-clip-text text-transparent leading-tight">
                      {selectedArticle.title}
                    </h2>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-6 pb-6 border-b-2 border-gray-200">
                      <div className="flex items-center gap-2 text-gray-600">
                        <div className="w-10 h-10 bg-gradient-to-br from-red-100 via-yellow-100 to-green-100 rounded-full flex items-center justify-center">
                          <Calendar className="w-5 h-5 text-yellow-600" />
                        </div>
                        <span className="font-medium">
                          {formatDate(selectedArticle.published_at || selectedArticle.created_at)}
                        </span>
                      </div>

                      {selectedArticle.author && (
                        <div className="flex items-center gap-2 text-gray-600">
                          <div className="w-10 h-10 bg-gradient-to-br from-red-100 via-yellow-100 to-green-100 rounded-full flex items-center justify-center">
                            <User className="w-5 h-5 text-yellow-600" />
                          </div>
                          <span className="font-medium">By {selectedArticle.author.name}</span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none">
                      <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                        {selectedArticle.content}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="border-t-2 border-gray-200 px-8 md:px-10 py-6 bg-gradient-to-r from-red-50 via-yellow-50 to-green-50">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedArticle(null)}
                    className="w-full sm:w-auto px-8 py-4 bg-gradient-to-tl from-yellow-600 via-red-700 to-red-900 text-white rounded-full hover:shadow-2xl transition-all font-bold text-lg"
                  >
                    Close
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </MemberLayout>
    </div>
  );
=======
    fetchAllData()
  }, [])

  // Combine all articles based on selected category
  const getFilteredNews = () => {
    switch (selectedCategory) {
      case "all":
        return [...news, ...announcements, ...events, ...projects]
      case "announcements":
        return announcements
      case "events":
        return events
      case "projects":
        return projects
      default:
        return news
    }
  }

  const filteredNews = getFilteredNews()

  return (
    <MemberLayout>
      <div className="h-screen overflow-auto bg-gray-50">
        {/* Header */}
        <header className="bg-linear-to-r from-emerald-600 to-orange-500 text-white px-4 sm:px-6 py-3 sm:py-4 sticky top-0 z-10 shadow-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3">
              <Link href="/" className="hover:bg-white/10 p-1 rounded-lg transition-colors">
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </Link>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold">City News</h1>
                <p className="text-white/90 text-xs sm:text-sm mt-0.5">Latest updates from Perpetual Village City</p>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-sm">
              <Newspaper className="w-5 h-5" />
              <span className="font-medium">{filteredNews.length} Articles</span>
            </div>
          </div>
        </header>

        {/* Category Filter */}
        <div className="bg-white border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4 sticky top-[60px] sm:top-[68px] z-10 shadow-sm">
          <div className="max-w-7xl mx-auto overflow-x-auto">
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-semibold text-xs sm:text-sm whitespace-nowrap transition-all ${
                    selectedCategory === category.value
                      ? "bg-linear-to-r from-emerald-600 to-orange-500 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main className="px-4 sm:px-6 py-4 sm:py-6">
          <div className="max-w-7xl mx-auto">
            {loading ? (
              <div className="flex items-center justify-center py-12">
                <div className="text-center">
                  <div className="w-12 h-12 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                  <p className="text-gray-600">Loading news...</p>
                </div>
              </div>
            ) : filteredNews.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12">
                <div className="w-20 h-20 bg-linear-to-br from-emerald-100 to-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="w-10 h-10 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No news articles</h3>
                <p className="text-gray-600 text-center max-w-sm">Check back later for updates from the city.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {filteredNews.map((article) => (
                  <Link
                    key={article.id}
                    href={`/news/${article.id}`}
                    className="group block bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg hover:border-gray-300 transition-all duration-300"
                  >
                    {article.image && (
                      <div className="relative aspect-video bg-linear-to-br from-emerald-100 to-orange-100 overflow-hidden">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    )}

                    <div className="p-4 sm:p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2.5 py-1 bg-linear-to-r from-emerald-500 to-orange-500 text-white text-xs font-bold rounded-full shadow-sm">
                          {article.category}
                        </span>
                        <span className="text-xs text-gray-500 flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {article.publishedAt}
                        </span>
                      </div>

                      <h3 className="font-bold text-gray-900 mb-2 text-base sm:text-lg leading-tight group-hover:text-emerald-600 transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 mb-4 leading-relaxed line-clamp-2">{article.excerpt}</p>

                      <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-gray-100">
                        <span className="font-medium text-gray-700 truncate max-w-[120px]">By {article.author}</span>
                        <div className="flex items-center gap-3 sm:gap-4">
                          <span className="flex items-center gap-1">
                            <Eye className="w-3.5 h-3.5" />
                            {article.views}
                          </span>
                          <button
                            onClick={(e) => {
                              e.preventDefault()
                              // Share functionality
                            }}
                            className="flex items-center gap-1 hover:text-emerald-600 transition-colors"
                          >
                            <Share2 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={(e) => {
                              e.preventDefault()
                              // Bookmark functionality
                            }}
                            className="flex items-center gap-1 hover:text-orange-600 transition-colors"
                          >
                            <Bookmark className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </MemberLayout>
  )
>>>>>>> d961c4d44f144ef19bb3ed9d984f12c663c610e4
}