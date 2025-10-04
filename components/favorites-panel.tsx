"use client"

import { Heart, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useFavorites } from "@/hooks/use-favorites"
import { useAudioPlayer } from "@/hooks/use-audio-player"
import { sounds } from "@/lib/sounds"
import { useLanguage } from "@/contexts/language-context"

export function FavoritesPanel() {
  const { t } = useLanguage()
  const { favorites, removeFromFavorites } = useFavorites()
  const { playSound } = useAudioPlayer()

  const favoriteSounds = sounds.filter((sound) => favorites.includes(sound.id))

  if (favoriteSounds.length === 0) {
    return (
      <Card>
        <CardContent className="p-6 text-center">
          <Heart className="h-12 w-12 mx-auto text-muted-foreground/50 mb-4" />
          <p className="text-muted-foreground">{t("favorites.noFavorites")}</p>
          <p className="text-sm text-muted-foreground mt-1">{t("favorites.noFavoritesHint")}</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <Heart className="h-5 w-5 text-red-500" />
          {t("favorites.title")} ({favoriteSounds.length})
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-3">
          {favoriteSounds.map((sound) => (
            <div key={sound.id} className="flex items-center gap-3 group">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 shrink-0 opacity-60 group-hover:opacity-100"
                onClick={() => playSound(sound)}
              >
                <Play className="h-3 w-3" />
              </Button>

              <div className="flex-1 min-w-0">
                <div className="font-medium text-sm truncate">{sound.name}</div>
                <div className="text-xs text-muted-foreground truncate">{sound.description}</div>
              </div>

              <Badge variant="outline" className="text-xs shrink-0">
                {sound.category}
              </Badge>

              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 shrink-0 opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-600"
                onClick={() => removeFromFavorites(sound.id)}
              >
                <Heart className="h-3 w-3 fill-current" />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
