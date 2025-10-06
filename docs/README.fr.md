<div align="center">
  <a href="https://afunning.com" style="display: inline-block; padding: 12px 24px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 8px; font-size: 18px; font-weight: bold; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);">
    🚀 Essayer la Démo en Direct: https://afunning.com
  </a>
</div>

# SereneSoul - Sons naturels pour la concentration et la relaxation 🌿

*100% gratuit, sans publicité, sans inscription requise*

[![Deployed on Cloudflare](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://afunning.com)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-black?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

## Aperçu

SereneSoul est une application libre et gratuite qui fournit des sons naturels de haute qualité pour la concentration, la relaxation et le sommeil. Avec des dizaines de sons enregistrés professionnellement, notamment la pluie, les vagues océaniques, l'ambiance forestière et la faune, les utilisateurs peuvent créer leur environnement d'écoute parfait sans publicité ni inscription requise.

## Fonctionnalités
- 🎵 Des dizaines de sons naturels dont la pluie, l'océan, la forêt et plus encore
- 🎚️ Contrôle du volume pour chaque son
- 📚 Enregistrer ses sons favoris
- 📜 Voir l'historique d'écoute
- 🎨 Prise en charge des thèmes sombre/clair
- 🌐 Prise en charge multilingue (14 langues)
- 🔐 Approche centrée sur la vie privée - aucune donnée utilisateur collectée
- 📱 Conception responsive pour tous les appareils

## Installation

1. Clonez le dépôt:
   ```bash
   git clone https://github.com/cenyi/white-noise.git
   ```

2. Installez les dépendances:
   ```bash
   cd serene-soul
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   ```

3. Lancez le serveur de développement:
   ```bash
   npm run dev
   # ou
   yarn dev
   # ou
   pnpm dev
   ```

4. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir l'application.

## Déploiement

### Déployer sur Cloudflare Pages

Vous pouvez déployer cette application sur Cloudflare Pages en quelques étapes simples :

1. Faites un fork de ce dépôt vers votre compte GitHub
2. Connectez-vous à votre [Tableau de bord Cloudflare](https://dash.cloudflare.com/)
3. Allez dans Workers & Pages > Créer une application > Pages
4. Connectez-vous à Git et sélectionnez votre dépôt forké
5. Pour la **Configuration de build**, utilisez :
   - Commande de build : `pnpm run cf-build`
   - Répertoire de sortie de build : `.vercel/output/static` (par défaut pour Next.js sur Cloudflare Pages)
   - Variables d'environnement (optionnel) : NODE_VERSION = "20"
6. Cliquez sur "Enregistrer et déployer"

Le site sera automatiquement déployé et disponible sur your-domain.pages.dev.

### Variables d'environnement (si nécessaire)
- `NEXT_PUBLIC_ANALYTICS_ID` - Pour le suivi analytique (si vous souhaitez remplacer les analyses Vercel actuelles)

## Technologie
- **Framework**: Next.js 14 avec App Router
- **Langage**: TypeScript
- **Styling**: Tailwind CSS avec Tailwind CSS Animate
- **Composants UI**: Primitives Radix UI avec shadcn/ui
- **Icônes**: Lucide React
- **Polices**: Geist
- **Déploiement**: Cloudflare Pages
- **Analytique**: Vercel Analytics

## Contribution

Nous accueillons les contributions à SereneSoul ! Que vous répariez des bugs, ajoutiez de nouveaux sons, amélioriez les traductions ou renforciez les fonctionnalités, votre aide est appréciée.

1. Forkez le dépôt
2. Créez une branche de fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Faites vos modifications
4. Validez vos modifications (`git commit -m 'Add some AmazingFeature'`)
5. Poussez vers la branche (`git push origin feature/AmazingFeature`)
6. Ouvrez une Pull Request

## Licence

Ce projet est licencié sous la licence MIT - voir le fichier [LICENCE](../LICENSE) pour plus de détails.

## Support

Si vous rencontrez des problèmes ou avez des suggestions d'amélioration, veuillez ouvrir un ticket sur GitHub ou contactez-nous via l'application.

## Remerciements

- Développé avec [Next.js](https://nextjs.org/)
- Icônes par [Lucide React](https://lucide.dev/)
- Composants UI de [shadcn/ui](https://ui.shadcn.com/)
- Hébergé sur [Cloudflare Pages](https://pages.cloudflare.com/)