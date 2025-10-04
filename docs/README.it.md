<div align="center">
  <a href="https://afunning.com" style="display: inline-block; padding: 12px 24px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 8px; font-size: 18px; font-weight: bold; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);">
    🚀 Prova la Demo Live: https://afunning.com
  </a>
</div>

# SereneSoul - Suoni Naturali per Concentrazione e Relax 🌿

*100% gratuito, senza pubblicità, nessuna registrazione richiesta*

[![Deployed on Cloudflare](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://afunning.com)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-black?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

## Panoramica

SereneSoul è un'applicazione gratuita e open-source che fornisce suoni naturali di alta qualità per concentrazione, relax e sonno. Con decine di suoni professionalmente registrati tra cui pioggia, onde oceaniche, ambiente forestale e suoni della fauna selvatica, gli utenti possono creare il loro ambiente di ascolto perfetto senza pubblicità o requisiti di registrazione.

## Caratteristiche
- 🎵 Decine di suoni naturali tra cui pioggia, oceano, foresta e altro
- 🎚️ Controllo volume per ogni suono
- 📚 Salva i suoni preferiti
- 📜 Visualizza la cronologia di riproduzione
- 🎨 Supporto tema scuro/chiaro
- 🌐 Supporto multilingue (21+ lingue)
- 🔐 Approccio privacy-first - nessun dato utente raccolto
- 📱 Design responsive per tutti i dispositivi

## Installazione

1. Clona il repository:
   ```bash
   git clone https://github.com/cenyi/serene-soul.git
   ```

2. Installa le dipendenze:
   ```bash
   cd serene-soul
   npm install
   # oppure
   yarn install
   # oppure
   pnpm install
   ```

3. Avvia il server di sviluppo:
   ```bash
   npm run dev
   # oppure
   yarn dev
   # oppure
   pnpm dev
   ```

4. Apri [http://localhost:3000](http://localhost:3000) nel browser per vedere l'applicazione.

## Deployment

### Deploy su Cloudflare Pages

Puoi deployare questa applicazione su Cloudflare Pages in pochi semplici passaggi:

1. Fai un fork di questo repository al tuo account GitHub
2. Accedi al tuo [Cloudflare Dashboard](https://dash.cloudflare.com/)
3. Vai su Workers & Pages > Create Application > Pages
4. Connettiti a Git e seleziona il tuo repository forkato
5. Per la **Configurazione di build**, usa:
   - Comando di build: `pnpm run cf-build`
   - Directory di output di build: `.vercel/output/static` (default per Next.js su Cloudflare Pages)
   - Variabili d'ambiente (opzionale): NODE_VERSION = "20"
6. Clicca su "Save and Deploy"

Il sito verrà automaticamente deployato e sarà disponibile su your-domain.pages.dev.

### Variabili d'Ambiente (se necessario)
- `NEXT_PUBLIC_ANALYTICS_ID` - Per il monitoraggio analitico (se vuoi sostituire le attuali Vercel Analytics)

## Stack Tecnologico
- **Framework**: Next.js 14 con App Router
- **Linguaggio**: TypeScript
- **Styling**: Tailwind CSS con Tailwind CSS Animate
- **Componenti UI**: Radix UI primitives con shadcn/ui
- **Icone**: Lucide React
- **Font**: Geist
- **Deployment**: Cloudflare Pages
- **Analytics**: Vercel Analytics

## Contributi

Accogliamo contributi per SereneSoul! Che tu stia correggendo bug, aggiungendo nuovi suoni, migliorando le traduzioni o potenziando le funzionalità, il tuo aiuto è apprezzato.

1. Fork del repository
2. Crea un branch per la feature (`git checkout -b feature/AmazingFeature`)
3. Effettua le modifiche
4. Commit delle modifiche (`git commit -m 'Add some AmazingFeature'`)
5. Push al branch (`git push origin feature/AmazingFeature`)
6. Apri una Pull Request

## Licenza

Questo progetto è concesso in licenza sotto la Licenza MIT - vedi il file [LICENSE](../LICENSE) per i dettagli.

## Supporto

Se incontri problemi o hai suggerimenti per miglioramenti, apri un issue su GitHub o contattaci tramite l'applicazione.

## Ringraziamenti

- Costruito con [Next.js](https://nextjs.org/)
- Icone di [Lucide React](https://lucide.dev/)
- Componenti UI da [shadcn/ui](https://ui.shadcn.com/)
- Hosted su [Cloudflare Pages](https://pages.cloudflare.com/)