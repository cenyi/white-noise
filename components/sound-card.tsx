"use client"

import type React from "react"

import { useState, memo } from "react"
import { Play, Pause, Volume2, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Sound } from "@/lib/sounds"
import { useAudioPlayer } from "@/hooks/use-audio-player"
import { useFavorites } from "@/hooks/use-favorites"
import { usePlayHistory } from "@/hooks/use-play-history"
import { useLanguage } from "@/contexts/language-context"

interface SoundCardProps {
  sound: Sound
  className?: string
}

function SoundCardBase({ sound, className }: SoundCardProps) {
  const { t } = useLanguage()
  const { currentSound, isPlaying, isLoading, playSound } = useAudioPlayer()
  const { toggleFavorite, isFavorite } = useFavorites()
  const { addToHistory } = usePlayHistory()
  const [isHovered, setIsHovered] = useState(false)

  const isCurrentSound = currentSound?.id === sound.id
  const isCurrentlyPlaying = isCurrentSound && isPlaying
  const isCurrentlyLoading = isCurrentSound && isLoading
  const isFavorited = isFavorite(sound.id)

  const handlePlay = () => {
    playSound(sound)
    addToHistory(sound)
  }

  const handleFavoriteToggle = (e: React.MouseEvent) => {
    e.stopPropagation()
    toggleFavorite(sound.id)
  }

  return (
    <Card
      className={`group cursor-pointer transition-all duration-200 hover:shadow-md hover:scale-[1.02] ${
        isCurrentSound ? "ring-2 ring-primary" : ""
      } ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handlePlay}
    >
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 mb-1">
              <h3 className="font-medium text-sm text-balance group-hover:text-primary transition-colors">
                {t(sound.nameKey)}
              </h3>
              <Button
                variant="ghost"
                size="icon"
                className={`h-6 w-6 shrink-0 transition-all duration-200 ${
                  isFavorited ? "text-red-500 opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
                onClick={handleFavoriteToggle}
              >
                <Heart className={`h-3 w-3 ${isFavorited ? "fill-current" : ""}`} />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground text-pretty mb-2 line-clamp-2">{t(sound.descriptionKey)}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1">
              {sound.tags.slice(0, 2).map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs px-1.5 py-0.5">
                  {tag}
                </Badge>
              ))}
              {sound.tags.length > 2 && (
                <Badge variant="outline" className="text-xs px-1.5 py-0.5">
                  +{sound.tags.length - 2}
                </Badge>
              )}
            </div>
          </div>

          {/* Play Button */}
          <div className="shrink-0">
            <Button
              size="icon"
              variant={isCurrentSound ? "default" : "ghost"}
              className={`h-8 w-8 transition-all duration-200 ${
                isHovered || isCurrentSound ? "opacity-100" : "opacity-60"
              }`}
              onClick={(e) => {
                e.stopPropagation()
                handlePlay()
              }}
            >
              {isCurrentlyLoading ? (
                <div className="h-3 w-3 animate-spin rounded-full border border-current border-t-transparent" />
              ) : isCurrentlyPlaying ? (
                <Pause className="h-3 w-3" />
              ) : (
                <Play className="h-3 w-3" />
              )}
            </Button>
          </div>
        </div>

        {/* Playing Indicator */}
        {isCurrentlyPlaying && (
          <div className="mt-3 flex items-center gap-2 text-xs text-primary">
            <Volume2 className="h-3 w-3" />
            <div className="flex gap-0.5">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-0.5 bg-current rounded-full animate-pulse"
                  style={{
                    height: "8px",
                    animationDelay: `${i * 0.2}s`,
                    animationDuration: "1s",
                  }}
                />
              ))}
            </div>
            <span>{t("player.playing")}</span>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

// Memoize the component to prevent unnecessary re-renders
const SoundCardMemo = memo(SoundCardBase)
export { SoundCardMemo as SoundCard }
