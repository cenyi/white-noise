"use client"

import { useState } from "react"
import { Play, Pause, Volume2, VolumeX, SkipBack, SkipForward } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Card } from "@/components/ui/card"
import { useAudioPlayer } from "@/hooks/use-audio-player"
import { useLanguage } from "@/contexts/language-context"

interface AudioPlayerProps {
  className?: string
}

export function AudioPlayer({ className }: AudioPlayerProps) {
  const { t } = useLanguage()
  const {
    currentSound,
    isPlaying,
    volume,
    currentTime,
    duration,
    isLoading,
    error,
    playSound,
    pauseSound,
    setVolume,
    seekTo,
    stopSound,
  } = useAudioPlayer()

  const [isMuted, setIsMuted] = useState(false)
  const [previousVolume, setPreviousVolume] = useState(volume)

  const handlePlayPause = () => {
    if (isPlaying) {
      pauseSound()
    } else if (currentSound) {
      playSound(currentSound)
    }
  }

  const handleVolumeChange = (values: number[]) => {
    const newVolume = values[0]
    setVolume(newVolume)
    if (newVolume > 0 && isMuted) {
      setIsMuted(false)
    }
  }

  const handleMuteToggle = () => {
    if (isMuted) {
      setVolume(previousVolume)
      setIsMuted(false)
    } else {
      setPreviousVolume(volume)
      setVolume(0)
      setIsMuted(true)
    }
  }

  const handleSeek = (values: number[]) => {
    seekTo(values[0])
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  if (!currentSound) {
    return (
      <Card className={`p-6 ${className}`}>
        <div className="text-center text-muted-foreground">
          <div className="mb-2">
            <Play className="h-12 w-12 mx-auto opacity-50" />
          </div>
          <p>{t("player.selectSound")}</p>
        </div>
      </Card>
    )
  }

  return (
    <Card className={`p-6 ${className}`}>
      <div className="space-y-4">
        {/* Current Sound Info */}
        <div className="text-center">
          <h3 className="font-semibold text-lg text-balance">{currentSound.name}</h3>
          <p className="text-sm text-muted-foreground text-pretty">{currentSound.description}</p>
          {error && (
<p className="text-sm text-destructive mt-2 bg-destructive/10 p-2 rounded-md">
                  {error}
<button
                    onClick={() => currentSound && playSound(currentSound)}
                    className="ml-2 text-xs underline hover:text-destructive-foreground"
                  >
                    {t("player.retry")}
</button>
</p>
              )}
        </div>

        {/* Progress Bar */}
        {duration > 0 && (
          <div className="space-y-2">
            <Slider
              value={[currentTime]}
              max={duration}
              step={1}
              onValueChange={handleSeek}
              className="w-full py-2"
              disabled={isLoading}
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>
        )}

        {/* Main Controls */}
        <div className="flex items-center justify-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => seekTo(Math.max(0, currentTime - 10))}
            disabled={!currentSound || isLoading}
          >
            <SkipBack className="h-4 w-4" />
          </Button>

          <Button size="lg" onClick={handlePlayPause} disabled={!currentSound || isLoading} className="h-12 w-12">
            {isLoading ? (
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            ) : isPlaying ? (
              <Pause className="h-5 w-5" />
            ) : (
              <Play className="h-5 w-5" />
            )}
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={() => seekTo(Math.min(duration, currentTime + 10))}
            disabled={!currentSound || isLoading}
          >
            <SkipForward className="h-4 w-4" />
          </Button>
        </div>

        {/* Volume Control */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={handleMuteToggle} className="shrink-0">
            {isMuted || volume === 0 ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </Button>

          <Slider
            value={[isMuted ? 0 : volume]}
            max={1}
            step={0.01}
            onValueChange={handleVolumeChange}
            className="flex-1 py-2"
          />

          <span className="text-xs text-muted-foreground w-8 text-right">
            {Math.round((isMuted ? 0 : volume) * 100)}%
          </span>
        </div>

        {/* Additional Controls */}
        <div className="flex justify-center">
          <Button variant="outline" size="sm" onClick={stopSound} disabled={!currentSound}>
            {t("player.stop")}
          </Button>
        </div>
      </div>
    </Card>
  )
}
