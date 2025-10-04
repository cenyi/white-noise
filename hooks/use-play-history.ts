"use client"

import { useCallback, useMemo } from "react"
import { useLocalStorage } from "./use-local-storage"
import type { Sound } from "@/lib/sounds"

export interface PlayHistoryItem {
  sound: Sound
  playedAt: string
  duration: number // in seconds
}

export function usePlayHistory() {
  const [playHistory, setPlayHistory] = useLocalStorage<PlayHistoryItem[]>("playHistory", [])

  const addToHistory = useCallback(
    (sound: Sound, duration = 0) => {
      const historyItem: PlayHistoryItem = {
        sound,
        playedAt: new Date().toISOString(),
        duration,
      }

      setPlayHistory((prev) => {
        // Remove any existing entry for this sound
        const filtered = prev.filter((item) => item.sound.id !== sound.id)
        // Add new entry at the beginning
        const updated = [historyItem, ...filtered]
        // Keep only the last 50 items
        return updated.slice(0, 50)
      })
    },
    [setPlayHistory],
  )

  const clearHistory = useCallback(() => {
    setPlayHistory([])
  }, [setPlayHistory])

  const removeFromHistory = useCallback(
    (soundId: string) => {
      setPlayHistory((prev) => prev.filter((item) => item.sound.id !== soundId))
    },
    [setPlayHistory],
  )

  const getRecentSounds = useCallback(
    (limit = 10) => {
      return playHistory.slice(0, limit)
    },
    [playHistory],
  )

  const getTotalPlayTime = useCallback(() => {
    return playHistory.reduce((total, item) => total + item.duration, 0)
  }, [playHistory])

  const getMostPlayedSounds = useCallback(() => {
    const soundCounts = playHistory.reduce(
      (acc, item) => {
        const soundId = item.sound.id
        acc[soundId] = (acc[soundId] || 0) + 1
        return acc
      },
      {} as Record<string, number>,
    )

    return Object.entries(soundCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5)
      .map(([soundId, count]) => ({
        sound: playHistory.find((item) => item.sound.id === soundId)?.sound,
        playCount: count,
      }))
      .filter((item) => item.sound)
  }, [playHistory])

  // Memoize derived values to prevent unnecessary recalculations
  const memoizedHistory = useMemo(() => playHistory, [playHistory])
  const memoizedTotalTime = useMemo(() => getTotalPlayTime(), [getTotalPlayTime])

  return {
    playHistory: memoizedHistory,
    addToHistory,
    clearHistory,
    removeFromHistory,
    getRecentSounds,
    getTotalPlayTime,
    getMostPlayedSounds,
  }
}
