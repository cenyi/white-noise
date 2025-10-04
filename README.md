<div align="center">
  <img src="src/assets/logo-cover.png" width=256></img>
  <p><strong>SereneSoul - Natural Sounds for Focus & Relaxation 🌿</strong></p>

  *100% free, no ads, no registration required*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://afunning.com)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-black?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

Deutsch | English | [Español](./docs/README.es.md) | [Français](./docs/README.fr.md) | [Italiano](./docs/README.it.md) | [日本語](./docs/README.ja.md) | [한국어](./docs/README.ko.md) | [Nederlands](./docs/README.nl.md) | [Português](./docs/README.pt.md)

</div>

## Overview

SereneSoul is a free, open-source application that provides high-quality natural sounds for focus, relaxation, and sleep. With dozens of professionally recorded sounds including rain, ocean waves, forest ambience, and wildlife, users can create their perfect listening environment without any ads or registration requirements.

## Features
- 🎵 Dozens of natural sounds including rain, ocean, forest, and more
- 🎚️ Volume control for each sound
- 📚 Save favorite sounds
- 📜 View playback history
- 🎨 Dark/light theme support
- 🌐 Multilingual support (9 languages)
- 🔐 Privacy-first approach - no user data collected
- 📱 Responsive design for all devices

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/serene-soul.git
   ```

2. Install dependencies:
   ```bash
   cd serene-soul
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:300) in your browser to see the application.

## Deployment

### Deploy on Vercel (Recommended)

You can deploy this application on Vercel in just a few steps:

1. Fork this repository to your GitHub account
2. Log in to your [Vercel Dashboard](https://vercel.com/)
3. Click "Add New..." > "Project"
4. Import your forked repository from GitHub
5. Vercel will automatically detect the Next.js framework and configure settings
6. Click "Deploy"

The site will be automatically deployed and available at your-project-name.vercel.app.

### Deploy on Other Platforms

This project can also be deployed on:
- **Netlify**: Connect your Git repository and use the Next.js preset
- **Cloudflare Pages**: Use `npm run build` as build command
- **AWS Amplify**: Import from GitHub with Next.js framework detection
- **Railway**: Connect repository and deploy as web service

### Environment Variables (if needed)
- `NEXT_PUBLIC_ANALYTICS_ID` - For analytics tracking (if you want to replace the current Vercel Analytics)

## Technology Stack
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with Tailwind CSS Animate
- **UI Components**: Radix UI primitives with shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Geist
- **Deployment**: Vercel (Optimized for APAC region)
- **Analytics**: Vercel Analytics

## Contributing

We welcome contributions to SereneSoul! Whether you're fixing bugs, adding new sounds, improving translations, or enhancing features, your help is appreciated.

Please read our [Contributing Guidelines](CONTRIBUTING.md) for details on how to contribute to this project, including code of conduct guidelines and development setup instructions.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
5. Push to the branch (`git push origin feature/AmazingFeature`)
6. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues or have suggestions for improvements, please open an issue on GitHub or contact us through the application.

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Icons by [Lucide React](https://lucide.dev/)
- UI Components from [shadcn/ui](https://ui.shadcn.com/)
- Hosted on [Vercel](https://vercel.com/)