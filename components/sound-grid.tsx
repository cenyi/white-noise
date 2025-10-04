"use client"

import { useState, useMemo } from "react"
import { Search, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { SoundCard } from "./sound-card"
import { sounds, soundCategories } from "@/lib/sounds"
import { useLanguage } from "@/contexts/language-context"

interface SoundGridProps {
  className?: string
}

export function SoundGrid({ className }: SoundGridProps) {
  const { t } = useLanguage()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 12 // Show 12 items per page

  const filteredSounds = useMemo(() => {
    return sounds.filter((sound) => {
      const matchesSearch =
        searchQuery === "" ||
        sound.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sound.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sound.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(sound.category)

      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategories])

  // Pagination
  const totalPages = Math.ceil(filteredSounds.length / itemsPerPage)
  const paginatedSounds = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    return filteredSounds.slice(startIndex, startIndex + itemsPerPage)
  }, [filteredSounds, currentPage, itemsPerPage])

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
    // Reset to first page when filters change
    setCurrentPage(1)
  }

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedCategories([])
    setCurrentPage(1)
  }

  // Reset to first page when filters change
  useMemo(() => {
    setCurrentPage(1)
  }, [searchQuery, selectedCategories])

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Search and Filter Controls */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder={t("search.placeholder")}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2 bg-transparent">
                <Filter className="h-4 w-4" />
                {t("search.categories")}
                {selectedCategories.length > 0 && (
                  <Badge variant="secondary" className="ml-1">
                    {selectedCategories.length}
                  </Badge>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {soundCategories.map((category) => (
                <DropdownMenuCheckboxItem
                  key={category.id}
                  checked={selectedCategories.includes(category.id)}
                  onCheckedChange={() => handleCategoryToggle(category.id)}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {(searchQuery || selectedCategories.length > 0) && (
            <Button variant="ghost" onClick={clearFilters}>
              {t("search.clear")}
            </Button>
          )}
        </div>
      </div>

      {/* Active Filters */}
      {selectedCategories.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {selectedCategories.map((categoryId) => {
            const category = soundCategories.find((c) => c.id === categoryId)
            return category ? (
              <Badge
                key={categoryId}
                variant="secondary"
                className="gap-1 cursor-pointer hover:bg-secondary/80"
                onClick={() => handleCategoryToggle(categoryId)}
              >
                <span>{category.icon}</span>
                {category.name}
                <span className="ml-1 text-xs">×</span>
              </Badge>
            ) : null
          })}
        </div>
      )}

      {/* Results Count */}
      <div className="text-sm text-muted-foreground">
        {filteredSounds.length} {filteredSounds.length !== 1 ? t("search.resultsFound_plural") : t("search.resultsFound")}
      </div>

      {/* Sound Grid */}
      {filteredSounds.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {paginatedSounds.map((sound) => (
              <SoundCard key={sound.id} sound={sound} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-6">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
              >
                {t("pagination.previous")}
              </Button>
              
              <div className="flex gap-1">
                {[...Array(Math.min(5, totalPages))].map((_, index) => {
                  let pageNum: number;
                  if (totalPages <= 5) {
                    pageNum = index + 1;
                  } else if (currentPage <= 3) {
                    pageNum = index + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + index;
                  } else {
                    pageNum = currentPage - 2 + index;
                  }
                  
                  return (
                    <Button
                      key={pageNum}
                      variant={pageNum === currentPage ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPage(pageNum)}
                    >
                      {pageNum}
                    </Button>
                  );
                })}
              </div>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
              >
                {t("pagination.next")}
              </Button>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-12">
          <div className="text-muted-foreground mb-4">
            <Search className="h-12 w-12 mx-auto opacity-50 mb-4" />
            <p className="text-lg font-medium">{t("search.noResults")}</p>
            <p className="text-sm">{t("search.adjustFilters")}</p>
          </div>
          <Button variant="outline" onClick={clearFilters}>
            {t("search.clearAllFilters")}
          </Button>
        </div>
      )}
    </div>
  )
}