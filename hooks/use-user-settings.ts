"use client"

import { useCallback } from "react"
import { useLocalStorage } from "./use-local-storage"

export interface UserSettings {
  autoplay: boolean
  defaultVolume: number
  showPlayHistory: boolean
  enableKeyboardShortcuts: boolean
  loopSounds: boolean
  fadeInOut: boolean
}

const defaultSettings: UserSettings = {
  autoplay: false,
  defaultVolume: 0.7,
  showPlayHistory: true,
  enableKeyboardShortcuts: true,
  loopSounds: true,
  fadeInOut: false,
}

export function useUserSettings() {
  const [settings, setSettings] = useLocalStorage<UserSettings>("userSettings", defaultSettings)

  const updateSetting = useCallback(
    <K extends keyof UserSettings>(key: K, value: UserSettings[K]) => {
      setSettings((prev) => ({
        ...prev,
        [key]: value,
      }))
    },
    [setSettings],
  )

  const resetSettings = useCallback(() => {
    setSettings(defaultSettings)
  }, [setSettings])

  return {
    settings,
    updateSetting,
    resetSettings,
  }
}
