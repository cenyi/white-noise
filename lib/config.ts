// Application configuration
export const APP_CONFIG = {
  // Base URLs
  BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
  SITE_NAME: process.env.NEXT_PUBLIC_SITE_NAME || "SereneSoul",
  
  // API configuration
  API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || "",
  
  // Assets configuration
  DEFAULT_HERO_IMAGE: "/serene-forest-with-soft-morning-light-filtering-th.jpg",
  SOUNDS_BASE_PATH: "/sounds",
  
  // Google verification
  GOOGLE_VERIFICATION_CODE: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION_CODE,
  
  
  
  // Default settings
  DEFAULT_PORT: process.env.PORT || "3000",
  
  // Theme configuration
  THEME_COLOR: process.env.NEXT_PUBLIC_THEME_COLOR || "#164e63"
} as const;