"use client"

import { useState } from "react"
import { Clock, Play, Trash2, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { usePlayHistory } from "@/hooks/use-play-history"
import { useAudioPlayer } from "@/hooks/use-audio-player"
import { useLanguage } from "@/contexts/language-context"

export function PlayHistory() {
  const { t } = useLanguage()
  const { playHistory, clearHistory, removeFromHistory, getTotalPlayTime } = usePlayHistory()
  const { playSound } = useAudioPlayer()
  const [isExpanded, setIsExpanded] = useState(false)

  const formatDuration = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    if (hours > 0) {
      return `${hours}h ${minutes}m`
    }
    return `${minutes}m`
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60)

    if (diffInHours < 1) {
      return t("playHistory.justNow")
    } else if (diffInHours < 24) {
      const hoursAgoText: string = t("playHistory.hoursAgo")
      return `${Math.floor(diffInHours)}${hoursAgoText}`
    } else if (diffInHours < 48) {
      return t("playHistory.yesterday")
    } else {
      return date.toLocaleDateString()
    }
  }

  const displayedHistory = isExpanded ? playHistory : playHistory.slice(0, 5)
  const totalPlayTime = getTotalPlayTime()

  if (playHistory.length === 0) {
    return (
      <Card>
        <CardContent className="p-6 text-center">
          <Clock className="h-12 w-12 mx-auto text-muted-foreground/50 mb-4" />
          <p className="text-muted-foreground">{t("playHistory.noHistory")}</p>
          <p className="text-sm text-muted-foreground mt-1">{t("playHistory.noHistoryHint")}</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <Clock className="h-5 w-5" />
            {t("playHistory.title")}
          </CardTitle>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={clearHistory} className="text-destructive">
                <Trash2 className="h-4 w-4 mr-2" />
                {t("playHistory.clearHistory")}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {totalPlayTime > 0 && (
          <div className="text-sm text-muted-foreground">{t("playHistory.totalTime").replace("{duration}", formatDuration(totalPlayTime))}</div>
        )}
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-3">
          {displayedHistory.map((item, index) => (
            <div key={`${item.sound.id}-${item.playedAt}`} className="flex items-center gap-3 group">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 shrink-0 opacity-60 group-hover:opacity-100"
                onClick={() => playSound(item.sound)}
              >
                <Play className="h-3 w-3" />
              </Button>

              <div className="flex-1 min-w-0">
                <div className="font-medium text-sm truncate">{item.sound.name}</div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{formatDate(item.playedAt)}</span>
                  {item.duration > 0 && (
                    <>
                      <span>•</span>
                      <span>{formatDuration(item.duration)}</span>
                    </>
                  )}
                </div>
              </div>

              <Badge variant="outline" className="text-xs shrink-0">
                {item.sound.category}
              </Badge>

              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 shrink-0 opacity-0 group-hover:opacity-100"
                onClick={() => removeFromHistory(item.sound.id)}
              >
                <Trash2 className="h-3 w-3" />
              </Button>
            </div>
          ))}
        </div>

        {playHistory.length > 5 && (
          <div className="mt-4 text-center">
            <Button variant="ghost" size="sm" onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? t("playHistory.showLess") : t("playHistory.showMore").replace("{count}", (playHistory.length - 5).toString())}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
