<div align="center">
  <a href="https://afunning.com" style="display: inline-block; padding: 12px 24px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 8px; font-size: 18px; font-weight: bold; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);">
    🚀 Probeer Live Demo: https://afunning.com
  </a>
</div>

# SereneSoul - Natuurlijke Geluiden voor Focus & Relax🌿

*100% gratis, geen advertenties, geen registratie vereist*

[![Deployed on Cloudflare](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://afunning.com)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-black?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

## Overzicht

SereneSoul is een gratis, open-source applicatie die hoogwaardige natuurlijke geluiden biedt voor focus, relaxatie en slaap. Met tientallen professioneel opgenomen geluiden, waaronder regen, oceaan golven, bos omgeving en wilde dieren, kunnen gebruikers hun perfecte luisteromgeving creëren zonder advertenties of registratie vereisten.

## Functionaliteiten
- 🎵 Tientallen natuurlijke geluiden waaronder regen, oceaan, bos en meer
- 🎚️ Volume controle voor elk geluid
-📚 Bewaar favoriete geluiden
-📜 Bekijk afspeelgeschiedenis
-🎨 Donker/licht thema ondersteuning
- 🌐 Meertalige ondersteuning (21+ talen)
- 🔐 Privacy-first aanpak - geen gebruikersgegevens verzameld
- 📱 Responsief ontwerp voor alle apparaten

## Installatie

1. Kloon de repository:
   ```bash
   git clone https://github.com/cenyi/serene-soul.git
   ```

2. Installeer afhankelijkheden:
   ```bash
   cd serene-soul
   npm install
   # of
   yarn install
   # of
   pnpm install
   ```

3. Start de ontwikkelingsserver:
   ```bash
   npm run dev
   # of
   yarn dev
   # of
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in je browser om de applicatie te zien.

## Deployment

### Deploy op Cloudflare Pages

Je kunt deze applicatie in slechts een paar eenvoudige stappen implementeren op Cloudflare Pages:

1. Fork deze repository naar je GitHub-account
2. Log in op je [Cloudflare Dashboard](https://dash.cloudflare.com/)
3. Ga naar Workers & Pages > Create Application > Pages
4. Verbind met Git en selecteer je geforkte repository
5. Voor de **Build configuratie**, gebruik:
   - Build commando: `pnpm run cf-build`
   - Build output directory: `.vercel/output/static` (standaard voor Next.js op Cloudflare Pages)
   - Environment variabelen (optioneel): NODE_VERSION = "20"
6. Klik op "Save and Deploy"

De site wordt automatisch geïmplementeerd en is beschikbaar op your-domain.pages.dev.

### Environment Variabelen (indien nodig)
- `NEXT_PUBLIC_ANALYTICS_ID` - Voor analytics tracking (als je de huidige Vercel Analytics wilt vervangen)

## Technologie Stack
- **Framework**: Next.js 14 met App Router
- **Taal**: TypeScript
- **Styling**: Tailwind CSS met Tailwind CSS Animate
- **UI Componenten**: Radix UI primitives met shadcn/ui
- **Iconen**: Lucide React
- **Lettertypes**: Geist
- **Implementatie**: Cloudflare Pages
- **Analytics**: Vercel Analytics

## Bijdragen

We verwelkomen bijdragen aan SereneSoul! Of je nu bugs aan het oplossen bent, nieuwe geluiden toevoegt, vertalingen verbetert of functionaliteiten verbetert, jouw hulp is gewaardeerd.

1. Fork de repository
2. Maak een feature branch (`git checkout -b feature/AmazingFeature`)
3. Maak je wijzigingen
4. Commit je wijzigingen (`git commit -m 'Voeg een geweldige feature toe'`)
5. Push naar de branch (`git push origin feature/AmazingFeature`)
6. Open een Pull Request

## Licentie

Dit project is gelicentieerd onder de MIT Licentie - zie het [LICENSE](../LICENSE) bestand voor details.

## Ondersteuning

Als je problemen ondervindt of suggesties hebt voor verbeteringen, open dan een issue op GitHub of neem contact met ons op via de applicatie.

## Dankbetuigingen

- Gebouwd met [Next.js](https://nextjs.org/)
- Iconen door [Lucide React](https://lucide.dev/)
- UI Componenten van [shadcn/ui](https://ui.shadcn.com/)
- Gehost op [Cloudflare Pages](https://pages.cloudflare.com/)