"use client"

import { useState } from "react"
import { Settings, Trash2, Download, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { Label } from "@/components/ui/label"
import { ThemeToggle } from "./theme-toggle"
import { LanguageSelector } from "./language-selector"
import { useLanguage } from "@/contexts/language-context"
import { useTheme } from "@/hooks/use-theme"

export function SettingsPanel() {
  const { t } = useLanguage()
  const { theme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  const clearAllData = () => {
    if (confirm("Are you sure you want to clear all your data? This action cannot be undone.")) {
      // Clear localStorage
      const keysToKeep = ["theme", "language"]
      const allKeys = Object.keys(localStorage)
      allKeys.forEach((key) => {
        if (!keysToKeep.includes(key)) {
          localStorage.removeItem(key)
        }
      })

      // Show confirmation
      alert("All data has been cleared successfully!")
      setIsOpen(false)
    }
  }

  const exportData = () => {
    const data = {
      theme,
      language: localStorage.getItem("language") || "en",
      playHistory: JSON.parse(localStorage.getItem("playHistory") || "[]"),
      favorites: JSON.parse(localStorage.getItem("favorites") || "[]"),
      settings: JSON.parse(localStorage.getItem("settings") || "{}"),
      exportDate: new Date().toISOString(),
    }

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `serenesoul-data-${new Date().toISOString().split("T")[0]}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const importData = () => {
    const input = document.createElement("input")
    input.type = "file"
    input.accept = ".json"
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0]
      if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
          try {
            const data = JSON.parse(e.target?.result as string)

            // Restore data
            if (data.theme) localStorage.setItem("theme", data.theme)
            if (data.language) localStorage.setItem("language", data.language)
            if (data.playHistory) localStorage.setItem("playHistory", JSON.stringify(data.playHistory))
            if (data.favorites) localStorage.setItem("favorites", JSON.stringify(data.favorites))
            if (data.settings) localStorage.setItem("settings", JSON.stringify(data.settings))

            alert("Data imported successfully! Please refresh the page to see changes.")
          } catch (error) {
            alert("Error importing data. Please check the file format.")
          }
        }
        reader.readAsText(file)
      }
    }
    input.click()
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Settings className="h-4 w-4" />
          <span className="sr-only">Settings</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{t("settings.theme")}</SheetTitle>
          <SheetDescription>Customize your SereneSoul experience</SheetDescription>
        </SheetHeader>

        <div className="space-y-6 mt-6">
          {/* Theme Settings */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">{t("settings.appearance")}</Label>
            <div className="flex items-center justify-between">
              <span className="text-sm">{t("settings.theme")}</span>
              <ThemeToggle />
            </div>
          </div>

          <Separator />

          {/* Language Settings */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">{t("settings.language")}</Label>
            <div className="flex items-center justify-between">
              <span className="text-sm">{t("settings.displayLanguage")}</span>
              <LanguageSelector />
            </div>
          </div>

          <Separator />

          {/* Data Management */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">{t("settings.dataManagement")}</Label>

            <div className="space-y-2">
              <Button variant="outline" onClick={exportData} className="w-full justify-start gap-2 bg-transparent">
                <Download className="h-4 w-4" />
                {t("settings.exportData")}
              </Button>

              <Button variant="outline" onClick={importData} className="w-full justify-start gap-2 bg-transparent">
                <Upload className="h-4 w-4" />
                {t("settings.importData")}
              </Button>

              <Button variant="destructive" onClick={clearAllData} className="w-full justify-start gap-2">
                <Trash2 className="h-4 w-4" />
                {t("settings.clearData")}
              </Button>
            </div>
          </div>

          <Separator />

          {/* App Info */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">{t("settings.about")}</Label>
            <div className="text-xs text-muted-foreground space-y-1">
              <p>{t("settings.appVersion")}</p>
              <p>{t("settings.freeSounds")}</p>
              <p>{t("settings.noAds")}</p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
