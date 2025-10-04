import { APP_CONFIG } from './config'

export interface Sound {
  id: string
  nameKey: string  // Translation key for name
  name: string     // Fallback English name
  category: string
  descriptionKey: string  // Translation key for description
  description: string     // Fallback English description
  audioUrl: string
  duration?: number
  tags: string[]
}

// Helper function to create sound objects with proper audio URL
function createSound(id: string, name: string, category: string, description: string, audioFileName: string, tags: string[]): Sound {
  return {
    id,
    nameKey: `sounds.${id}.name`,
    name,
    category,
    descriptionKey: `sounds.${id}.description`,
    description,
    audioUrl: `${APP_CONFIG.SOUNDS_BASE_PATH}/${audioFileName}`,
    tags
  }
}

export const soundCategories = [
  { id: "nature", name: "Nature", icon: "🌿" },
  { id: "water", name: "Water", icon: "💧" },
  { id: "weather", name: "Weather", icon: "🌦️" },
  { id: "animals", name: "Animals", icon: "🦅" },
  { id: "ambient", name: "Ambient", icon: "🎵" },
  { id: "urban", name: "Urban", icon: "🏙️" },
] as const

export const sounds: Sound[] = [
  // Nature sounds
  createSound(
    "lark-singing",
    "Lark Singing",
    "nature",
    "Peaceful lark singing in the morning",
    "lark-singing.mp3",
    ["lark", "birds", "morning", "peaceful"]
  ),
  createSound(
    "north-wind",
    "North Wind",
    "nature",
    "Howling north wind through the landscape",
    "north-wind.mp3",
    ["mountain", "wind", "cold", "strong"]
  ),
  createSound(
    "multiple-birds",
    "Multiple Birds",
    "nature",
    "Multiple birds singing together in harmony",
    "multiple-birds.mp3",
    ["birds", "chorus", "harmony", "nature"]
  ),

  // Water sounds
  createSound(
    "ocean-waves",
    "Ocean Waves",
    "water",
    "Gentle ocean waves lapping on the shore",
    "ocean-waves.mp3",
    ["ocean", "waves", "beach", "shore"]
  ),
  createSound(
    "rain",
    "Rain",
    "water",
    "Steady rain falling on various surfaces",
    "rain.mp3",
    ["rain", "steady", "calming", "weather"]
  ),
  createSound(
    "mountain-stream",
    "Mountain Stream",
    "water",
    "Babbling mountain stream flowing over rocks",
    "mountain-stream.mp3",
    ["stream", "brook", "flowing", "rocks"]
  ),
  createSound(
    "dripping-water",
    "Dripping Water",
    "water",
    "Slow dripping water with rhythmic patterns",
    "dripping-water.mp3",
    ["water", "dripping", "rhythmic", "calming"]
  ),

  // Weather sounds
  createSound(
    "autumn-rain",
    "Autumn Rain",
    "weather",
    "Gentle autumn rain falling steadily",
    "autumn-rain.mp3",
    ["rain", "autumn", "gentle", "seasonal"]
  ),
  createSound(
    "seagulls-waves",
    "Seagulls & Waves",
    "weather",
    "Seagulls calling with ocean waves in background",
    "seagulls-waves.mp3",
    ["seagulls", "ocean", "waves", "coast"]
  ),
  createSound(
    "wind-chimes1",
    "Wind Chimes 1",
    "weather",
    "Melodic wind chimes in gentle breeze",
    "wind-chimes1.mp3",
    ["chimes", "wind", "melodic", "peaceful"]
  ),

  // Animal sounds
  createSound(
    "bird-chirping",
    "Bird Chirping",
    "animals",
    "Multiple birds chirping in the forest",
    "bird-chirping.mp3",
    ["birds", "chirping", "forest", "morning"]
  ),
  createSound(
    "crickets",
    "Crickets",
    "animals",
    "Evening cricket symphony",
    "crickets.mp3",
    ["crickets", "evening", "night", "symphony"]
  ),
  createSound(
    "rooster",
    "Rooster",
    "animals",
    "Rooster crowing in the early morning",
    "rooster.mp3",
    ["rooster", "morning", "crowing", "farm"]
  ),
  createSound(
    "small-birds",
    "Small Birds",
    "animals",
    "Small birds chirping softly in the trees",
    "small-birds.mp3",
    ["birds", "small", "soft", "trees"]
  ),

  // Ambient sounds
  createSound(
    "white-noise",
    "White Noise",
    "ambient",
    "Pure white noise for focus and concentration",
    "white-noise.mp3",
    ["white", "noise", "focus", "concentration"]
  ),
  createSound(
    "meditation",
    "Meditation",
    "ambient",
    "Peaceful sounds for focused meditation",
    "meditation.mp3",
    ["meditation", "peaceful", "focus", "zen"]
  ),
  createSound(
    "bowl-sound",
    "Singing Bowl",
    "ambient",
    "Tibetan singing bowl resonance",
    "bowl-sound.mp3",
    ["bowl", "singing", "tibetan", "resonance"]
  ),

  // Urban sounds
  createSound(
    "crackling-fire",
    "Crackling Fire",
    "urban",
    "Cozy fireplace with crackling wood",
    "crackling-fire.mp3",
    ["fire", "crackling", "cozy", "wood"]
  ),
  createSound(
    "guzheng-water",
    "Guzheng & Water",
    "urban",
    "Traditional guzheng music with water sounds",
    "guzheng-water.mp3",
    ["guzheng", "water", "traditional", "music"]
  ),

  // Additional nature sounds
  createSound(
    "clear-birds",
    "Clear Bird Calls",
    "nature",
    "Clear, distinct bird calls in the morning",
    "clear-birds.mp3",
    ["birds", "clear", "distinct", "morning"]
  ),
  createSound(
    "stream-birds",
    "Stream & Birds",
    "nature",
    "Stream flowing with birds singing in background",
    "stream-birds.mp3",
    ["stream", "birds", "flowing", "nature"]
  ),
  createSound(
    "mountain-rain-birds",
    "Mountain Rain & Birds",
    "nature",
    "Rain in the mountains with bird sounds",
    "mountain-rain-birds.mp3",
    ["rain", "mountain", "birds", "weather"]
  ),
  createSound(
    "boat-paddle",
    "Boat Paddle",
    "nature",
    "Sound of boat paddle through calm water",
    "boat-paddle.mp3",
    ["boat", "paddle", "water", "calm"]
  ),
  createSound(
    "temple-bell",
    "Temple Bell",
    "ambient",
    "Deep, resonant temple bell",
    "temple-bell.mp3",
    ["temple", "bell", "resonant", "peaceful"]
  ),
  createSound(
    "stream-flow",
    "Stream Flow",
    "water",
    "Continuous stream flowing over rocks and pebbles",
    "stream-flow.mp3",
    ["stream", "flow", "rocks", "water"]
  ),
  createSound(
    "morning-quiet",
    "Morning Quiet",
    "nature",
    "Peaceful morning sounds with subtle bird chirps",
    "morning-quiet.mp3",
    ["morning", "quiet", "peaceful", "subtle"]
  ),
  createSound(
    "dog-barking",
    "Dog Barking",
    "animals",
    "Dogs barking in the distance",
    "dog-barking.mp3",
    ["dogs", "barking", "distance", "animals"]
  ),
  createSound(
    "crunching-leaves",
    "Crunching Leaves",
    "nature",
    "Footsteps crunching on autumn leaves",
    "crunching-leaves.mp3",
    ["leaves", "crunching", "footsteps", "autumn"]
  ),
  createSound(
    "walking-snow",
    "Walking Snow",
    "nature",
    "Footsteps walking on fresh snow",
    "walking-snow.mp3",
    ["snow", "walking", "footsteps", "winter"]
  ),
  createSound(
    "wind-chimes2",
    "Wind Chimes 2",
    "weather",
    "Different wind chimes melody in the breeze",
    "wind-chimes2.mp3",
    ["chimes", "wind", "different", "melody"]
  ),
  createSound(
    "summer-bugs",
    "Summer Bugs",
    "animals",
    "Summer evening insect sounds by the riverside",
    "summer-bugs.mp3",
    ["bugs", "summer", "insects", "evening"]
  ),
  createSound(
    "underwater-dream",
    "Underwater Dream",
    "ambient",
    "Dreamy underwater sound experience",
    "underwater-dream.mp3",
    ["underwater", "dreamy", "ocean", "calming"]
  ),
]

export function getSoundsByCategory(category: string): Sound[] {
  return sounds.filter((sound) => sound.category === category)
}

export function getSoundById(id: string): Sound | undefined {
  return sounds.find((sound) => sound.id === id)
}
