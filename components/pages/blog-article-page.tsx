"use client"

import { useState } from "react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Calendar,
  Clock,
  ArrowLeft,
  ChevronRight,
  Share2,
  BookOpen,
  Tag,
  ArrowRight as ArrowRightIcon
} from "lucide-react"

interface BlogArticlePageProps {
  params: { slug: string }
}

interface BlogArticle {
  slug: string
  titleKey: string
  excerptKey: string
  contentKey: string
  date: string
  readTime: string
  tags: string[]
  faqCount: number
}

const blogArticles: BlogArticle[] = [
  {
    slug: "what-is-white-noise-ultimate-2025-guide",
    titleKey: "pages.blog.article1.title",
    excerptKey: "pages.blog.article1.excerpt",
    contentKey: "pages.blog.article1.content",
    date: "2025-10-01",
    readTime: "15",
    tags: ["White Noise", "Sleep", "Focus", "Science", "Sound Therapy"],
    faqCount: 5
  },
  {
    slug: "how-to-use-white-noise-for-better-sleep",
    titleKey: "pages.blog.article2.title",
    excerptKey: "pages.blog.article2.excerpt",
    contentKey: "pages.blog.article2.content",
    date: "2025-09-28",
    readTime: "12",
    tags: ["Sleep", "Techniques", "Health", "Wellness"],
    faqCount: 5
  },
  {
    slug: "best-white-noise-machines-2025",
    titleKey: "pages.blog.article3.title",
    excerptKey: "pages.blog.article3.excerpt",
    contentKey: "pages.blog.article3.content",
    date: "2025-09-25",
    readTime: "18",
    tags: ["Equipment", "Reviews", "Technology", "Buying Guide"],
    faqCount: 5
  }
]

export default function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { t, locale } = useLanguage()
  const [isCopied, setIsCopied] = useState(false)

  // Find the current article
  const currentArticle = blogArticles.find(article => article.slug === params.slug)

  if (!currentArticle) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
            <p className="text-xl text-muted-foreground mb-8">
              The article you're looking for doesn't exist.
            </p>
            <Button asChild>
              <Link href={`/${locale}/blog`}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  // Find related articles (exclude current)
  const relatedArticles = blogArticles
    .filter(article => article.slug !== currentArticle.slug)
    .slice(0, 2)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString(locale === 'en' ? 'en-US' : locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const shareArticle = async () => {
    const url = window.location.href
    const title = t(currentArticle.titleKey)

    if (navigator.share) {
      try {
        await navigator.share({ title, url })
      } catch (err) {
        // Fallback to clipboard
        await copyToClipboard(url)
      }
    } else {
      await copyToClipboard(url)
    }
  }

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  // Process content to render markdown-like content as HTML
  const processContent = (content: string) => {
    return content
      // Headers
      .replace(/^### (.+)$/gm, '<h3 class="text-xl font-semibold mt-6 mb-3">$1</h3>')
      .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-semibold mt-8 mb-4">$1</h2>')
      .replace(/^# (.+)$/gm, '<h1 class="text-3xl font-bold mt-8 mb-6">$1</h1>')
      // Bold text
      .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold">$1</strong>')
      // Italic text
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      // Lists
      .replace(/^- (.+)$/gm, '<li class="ml-6 list-disc mb-1">$1</li>')
      .replace(/(<li.*<\/li>)/gs, '<ul class="mb-6 space-y-1">$1</ul>')
      // Line breaks
      .replace(/\n\n/g, '</p><p class="mb-6">')
      .replace(/\n/g, '<br />')
      // Wrap in paragraphs
      .replace(/^(.+)$/gm, '<p class="mb-6">$1</p>')
      // Clean up double paragraphs
      .replace(/<p class="mb-6"><\/p>/g, '')
      .replace(/<p class="mb-6"><h/g, '<h')
      .replace(/<\/h([1-6])><\/p>/g, '</h$1>')
      .replace(/<p class="mb-6"><ul/g, '<ul')
      .replace(/<\/ul><\/p>/g, '</ul>')
  }

  const processedContent = processContent(t(currentArticle.contentKey))

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Back to Blog */}
          <div className="mb-8">
            <Button variant="ghost" asChild className="mb-8">
              <Link href={`/${locale}/blog`}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                {t("pages.blog.backToBlog")}
              </Link>
            </Button>
          </div>

          {/* Article Header */}
          <header className="mb-8">
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <time>{formatDate(currentArticle.date)}</time>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{currentArticle.readTime} {t("pages.blog.readTime")}</span>
              </div>
            </div>

            <h1 className="text-4xl font-bold mb-4 leading-tight">
              {t(currentArticle.titleKey)}
            </h1>

            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              {t(currentArticle.excerptKey)}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {currentArticle.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-sm">
                  <Tag className="h-3 w-3 mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Share Button */}
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={shareArticle}
                className="flex items-center gap-2"
              >
                <Share2 className="h-4 w-4" />
                {isCopied ? "Copied!" : t("pages.blog.shareArticle")}
              </Button>
            </div>
          </header>

          <Separator className="mb-8" />

          {/* Article Content */}
          <article className="prose prose-slate max-w-none dark:prose-invert mb-12">
            <div
              className="text-foreground leading-relaxed"
              dangerouslySetInnerHTML={{ __html: processedContent }}
            />
          </article>

          {/* FAQ Section */}
          {currentArticle.faqCount > 0 && (
            <>
              <Separator className="mb-8" />
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <BookOpen className="h-6 w-6" />
                  {t("pages.blog.faq.title")}
                </h2>
                <div className="space-y-4">
                  {Array.from({ length: currentArticle.faqCount }, (_, i) => {
                    const questionKey = `${currentArticle.contentKey}.faq.q${i + 1}`
                    const answerKey = `${currentArticle.contentKey}.faq.a${i + 1}`
                    const question = t(questionKey)
                    const answer = t(answerKey)

                    // Check if translation exists (not the key itself)
                    if (question === questionKey || answer === answerKey) {
                      return null
                    }

                    return (
                      <Card key={i} className="border-l-4 border-l-primary">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg font-medium">
                            {question}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground leading-relaxed">
                            {answer}
                          </p>
                        </CardContent>
                      </Card>
                    )
                  }).filter(Boolean)}
                </div>
              </section>
            </>
          )}

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <>
              <Separator className="mb-8" />
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">
                  {t("pages.blog.relatedArticles")}
                </h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {relatedArticles.map((article) => (
                    <Card key={article.slug} className="group hover:shadow-lg transition-all duration-300">
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                          <Calendar className="h-4 w-4" />
                          <time>{formatDate(article.date)}</time>
                          <span>•</span>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{article.readTime} {t("pages.blog.readTime")}</span>
                          </div>
                        </div>
                        <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                          {t(article.titleKey)}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4 line-clamp-2">
                          {t(article.excerptKey)}
                        </p>
                        <Button asChild variant="outline" size="sm" className="w-full group">
                          <Link href={`/${locale}/blog/${article.slug}`}>
                            {t("pages.blog.readMore")}
                            <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            </>
          )}

          {/* Call to Action */}
          <div className="text-center py-12 border-t bg-muted/50 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">
              {t("pages.blog.cta.title")}
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              {t("pages.blog.cta.description")}
            </p>
            <Button asChild size="lg">
              <Link href={`/${locale}#sounds`}>
                {t("pages.blog.cta.button")}
                <ArrowRightIcon className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}