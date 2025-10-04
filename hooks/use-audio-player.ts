"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import type { Sound } from "@/lib/sounds"

export interface AudioPlayerState {
  currentSound: Sound | null
  isPlaying: boolean
  volume: number
  currentTime: number
  duration: number
  isLoading: boolean
  error: string | null
}

export function useAudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [state, setState] = useState<AudioPlayerState>({
    currentSound: null,
    isPlaying: false,
    volume: 0.7,
    currentTime: 0,
    duration: 0,
    isLoading: false,
    error: null,
  })
  


  // Cleanup function to release resources
  const cleanupAudio = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.src = ""
      audioRef.current = null
    }
  }, [])

  // Initialize audio element
  useEffect(() => {
    audioRef.current = new Audio()
    audioRef.current.loop = true
    audioRef.current.preload = "metadata"

    const audio = audioRef.current

    const handleLoadStart = () => {
      setState((prev) => ({ ...prev, isLoading: true, error: null }))
    }

    const handleLoadedMetadata = () => {
      setState((prev) => ({
        ...prev,
        duration: audio.duration,
        isLoading: false,
      }))
    }

    const handleTimeUpdate = () => {
      setState((prev) => ({ ...prev, currentTime: audio.currentTime }))
    }

    const handleEnded = () => {
      setState((prev) => ({ ...prev, isPlaying: false }))
    }

    const handleError = () => {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        isPlaying: false,
        error: "Failed to load audio file. Make sure the sound file exists and is properly formatted.",
      }))
    }

    const handleCanPlay = () => {
      setState((prev) => ({ ...prev, isLoading: false }))
    }

    const handleStalled = () => {
      setState((prev) => ({ ...prev, isLoading: true, error: "Audio stream stalled" }))
    }

    const handleAbort = () => {
      setState((prev) => ({ ...prev, isLoading: false, isPlaying: false, error: "Audio playback was interrupted" }))
    }

    audio.addEventListener("loadstart", handleLoadStart)
    audio.addEventListener("loadedmetadata", handleLoadedMetadata)
    audio.addEventListener("timeupdate", handleTimeUpdate)
    audio.addEventListener("ended", handleEnded)
    audio.addEventListener("error", handleError)
    audio.addEventListener("canplay", handleCanPlay)
    audio.addEventListener("stalled", handleStalled)
    audio.addEventListener("abort", handleAbort)

    return () => {
      audio.removeEventListener("loadstart", handleLoadStart)
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata)
      audio.removeEventListener("timeupdate", handleTimeUpdate)
      audio.removeEventListener("ended", handleEnded)
      audio.removeEventListener("error", handleError)
      audio.removeEventListener("canplay", handleCanPlay)
      audio.removeEventListener("stalled", handleStalled)
      audio.removeEventListener("abort", handleAbort)
      cleanupAudio()
    }
  }, [cleanupAudio])

  const playSound = useCallback(
    async (sound: Sound) => {
      if (!audioRef.current) return

      const audio = audioRef.current

      try {
        // If same sound is playing, just toggle play/pause
        if (state.currentSound?.id === sound.id) {
          if (state.isPlaying) {
            audio.pause()
            setState((prev) => ({ ...prev, isPlaying: false }))
          } else {
            await audio.play()
            setState((prev) => ({ ...prev, isPlaying: true }))
          }
          return
        }

        // Load new sound
        setState((prev) => ({
          ...prev,
          currentSound: sound,
          isLoading: true,
          error: null,
        }))

        // Reset audio source and handle empty files
        audio.src = ''
        await new Promise(resolve => setTimeout(resolve, 100))
        audio.src = sound.audioUrl
        audio.volume = state.volume

        try {
          await audio.play()
          setState((prev) => ({ ...prev, isPlaying: true }))
        } catch (playError) {
          console.error('Audio play error:', playError)
          setState((prev) => ({
            ...prev,
            isLoading: false,
            isPlaying: false,
            error: "Failed to play audio. The file may be corrupted or in an unsupported format.",
          }))
        }
      } catch (error) {
        console.error("Error playing sound:", error)
        setState((prev) => ({
          ...prev,
          isPlaying: false,
          isLoading: false,
          error: "Failed to play sound",
        }))
      }
    },
    [state.currentSound?.id, state.isPlaying, state.volume],
  )

  const pauseSound = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause()
      setState((prev) => ({ ...prev, isPlaying: false }))
    }
  }, [])

  const stopSound = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
      setState((prev) => ({
        ...prev,
        isPlaying: false,
        currentTime: 0,
        currentSound: null,
      }))
    }
  }, [])

  const setVolume = useCallback((volume: number) => {
    const clampedVolume = Math.max(0, Math.min(1, volume))
    if (audioRef.current) {
      audioRef.current.volume = clampedVolume
    }
    setState((prev) => ({ ...prev, volume: clampedVolume }))
  }, [])

  const seekTo = useCallback(
    (time: number) => {
      if (audioRef.current && state.duration > 0) {
        const clampedTime = Math.max(0, Math.min(state.duration, time))
        audioRef.current.currentTime = clampedTime
        setState((prev) => ({ ...prev, currentTime: clampedTime }))
      }
    },
    [state.duration],
  )

  return {
    ...state,
    playSound,
    pauseSound,
    stopSound,
    setVolume,
    seekTo,
  }
}
