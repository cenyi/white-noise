"use client"

import { useCallback, useMemo } from "react"
import { useLocalStorage } from "./use-local-storage"

export function useFavorites() {
  const [favorites, setFavorites] = useLocalStorage<string[]>("favorites", [])

  const addToFavorites = useCallback(
    (soundId: string) => {
      setFavorites((prev) => {
        if (prev.includes(soundId)) {
          return prev
        }
        return [...prev, soundId]
      })
    },
    [setFavorites],
  )

  const removeFromFavorites = useCallback(
    (soundId: string) => {
      setFavorites((prev) => prev.filter((id) => id !== soundId))
    },
    [setFavorites],
  )

  const toggleFavorite = useCallback(
    (soundId: string) => {
      setFavorites((prev) => {
        const isAlreadyFavorite = prev.includes(soundId)
        const newFavorites = isAlreadyFavorite
          ? prev.filter((id) => id !== soundId)
          : [...prev, soundId]

        // Debug logging
        console.log('Toggle favorite:', { soundId, isAlreadyFavorite, prev, newFavorites })

        return newFavorites
      })
    },
    [setFavorites],
  )

  const isFavorite = useCallback(
    (soundId: string) => {
      return favorites.includes(soundId)
    },
    [favorites],
  )

  const clearFavorites = useCallback(() => {
    setFavorites([])
  }, [setFavorites])

  // Memoize the favorites array to prevent unnecessary re-renders
  const memoizedFavorites = useMemo(() => favorites, [favorites])

  return {
    favorites: memoizedFavorites,
    addToFavorites,
    removeFromFavorites,
    toggleFavorite,
    isFavorite,
    clearFavorites,
  }
}
