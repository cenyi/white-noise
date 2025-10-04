"use client"

import { useState } from "react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight, Grid3X3, List, ChevronRight } from "lucide-react"

interface BlogArticle {
  slug: string
  title: string
  excerpt: string
  readTime: string
  date: string
  tags: string[]
}

export default function BlogPage() {
  const { t, locale } = useLanguage()
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  // Blog articles configuration
  const articles: BlogArticle[] = [
    {
      slug: "what-is-white-noise-ultimate-2025-guide",
      title: t("pages.blog.article1.title"),
      excerpt: t("pages.blog.article1.excerpt"),
      readTime: "15",
      date: "2025-10-01",
      tags: ["White Noise", "Sleep", "Focus", "Science", "Sound Therapy"]
    },
    {
      slug: "how-to-use-white-noise-for-better-sleep",
      title: t("pages.blog.article2.title"),
      excerpt: t("pages.blog.article2.excerpt"),
      readTime: "12",
      date: "2025-09-28",
      tags: ["Sleep", "Techniques", "Health", "Wellness"]
    },
    {
      slug: "best-white-noise-machines-2025",
      title: t("pages.blog.article3.title"),
      excerpt: t("pages.blog.article3.excerpt"),
      readTime: "18",
      date: "2025-09-25",
      tags: ["Equipment", "Reviews", "Technology", "Buying Guide"]
    }
  ]

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString(locale === 'en' ? 'en-US' : locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              {t("pages.blog.title")}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("pages.blog.description")}
            </p>
          </div>

          {/* View Toggle */}
          <div className="flex justify-end mb-8">
            <div className="flex items-center gap-2 p-1 bg-muted rounded-lg">
              <Button
                variant={viewMode === "grid" ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="px-3"
              >
                <Grid3X3 className="h-4 w-4 mr-2" />
                {t("pages.blog.viewToggle.grid")}
              </Button>
              <Button
                variant={viewMode === "list" ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="px-3"
              >
                <List className="h-4 w-4 mr-2" />
                {t("pages.blog.viewToggle.list")}
              </Button>
            </div>
          </div>

          {/* Articles */}
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {articles.map((article) => (
                <Card key={article.slug} className="group hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4" />
                      <time>{formatDate(article.date)}</time>
                      <span className="text-muted-foreground">•</span>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{article.readTime} {t("pages.blog.readTime")}</span>
                      </div>
                    </div>
                    <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <CardDescription className="line-clamp-3 mb-4 flex-1">
                      {article.excerpt}
                    </CardDescription>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {article.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button asChild className="w-full group mt-auto">
                      <Link href={`/${locale}/blog/${article.slug}`}>
                        {t("pages.blog.readMore")}
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-6 mb-12">
              {articles.map((article) => (
                <Card key={article.slug} className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <time>{formatDate(article.date)}</time>
                          </div>
                          <span className="text-muted-foreground">•</span>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{article.readTime} {t("pages.blog.readTime")}</span>
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 line-clamp-2">
                          {article.excerpt}
                        </p>
                        <div className="flex flex-wrap gap-1 mb-4">
                          {article.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <Button asChild variant="outline">
                          <Link href={`/${locale}/blog/${article.slug}`}>
                            {t("pages.blog.readMore")}
                            <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Call to Action */}
          <div className="text-center py-12 border-t">
            <h2 className="text-2xl font-semibold mb-4">
              {t("pages.blog.cta.title")}
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              {t("pages.blog.cta.description")}
            </p>
            <Button asChild size="lg">
              <Link href={`/${locale}#sounds`}>
                {t("pages.blog.cta.button")}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}