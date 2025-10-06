<div align="center">
  <a href="https://afunning.com" style="display: inline-block; padding: 12px 24px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 8px; font-size: 18px; font-weight: bold; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);">
    🚀 Live-Demo ausprobieren: https://afunning.com
  </a>
</div>

# SereneSoul - Natürliche Klänge für Konzentration & Entspannung 🌿

*100% kostenlos, keine Werbung, keine Anmeldung erforderlich*

[![Deployed on Cloudflare](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://afunning.com)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-black?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

## Übersicht

SereneSoul ist eine kostenlose, quelloffene Anwendung, die hochwertige natürliche Klänge für Konzentration, Entspannung und Schlaf bietet. Mit Dutzenden von professionell aufgenommenen Klängen, darunter Regen, Meereswellen, Waldatmosphäre und Tierwelt, können Benutzer ihre perfekte Hörumgebung ohne Werbung oder Registrierung erstellen.

## Funktionen
- 🎵 Dutzende natürlicher Klänge wie Regen, Meer, Wald und mehr
- 🎚️ Lautstärkeregulierung für jeden Klang
- 📚 Lieblingsklänge speichern
- 📜 Wiedergabeverlauf anzeigen
- 🎨 Unterstützung für dunkles/helles Theme
- 🌐 Mehrsprachigkeit (14 Sprachen)
- 🔐 Datenschutzorientierter Ansatz - keine Benutzerdaten werden gesammelt
- 📱 Responsives Design für alle Geräte

## Installation

1. Klonen Sie das Repository:
   ```bash
   git clone https://github.com/cenyi/white-noise.git
   ```

2. Installieren Sie die Abhängigkeiten:
   ```bash
   cd serene-soul
   npm install
   # oder
   yarn install
   # oder
   pnpm install
   ```

3. Starten Sie den Entwicklungsserver:
   ```bash
   npm run dev
   # oder
   yarn dev
   # oder
   pnpm dev
   ```

4. Öffnen Sie [http://localhost:3000](http://localhost:3000) in Ihrem Browser, um die Anwendung anzuzeigen.

## Bereitstellung

### Auf Cloudflare Pages bereitstellen

Sie können diese Anwendung in nur wenigen Schritten auf Cloudflare Pages bereitstellen:

1. Forken Sie dieses Repository in Ihr GitHub-Konto
2. Melden Sie sich bei Ihrem [Cloudflare Dashboard](https://dash.cloudflare.com/)
3. Gehen Sie zu Workers & Pages > Anwendung erstellen > Pages
4. Verbinden Sie sich mit Git und wählen Sie Ihr geforktes Repository aus
5. Für die **Build-Konfiguration** verwenden Sie:
   - Build-Befehl: `pnpm run cf-build`
   - Build-Ausgabeverzeichnis: `.vercel/output/static` (Standard für Next.js auf Cloudflare Pages)
   - Umgebungsvariablen (optional): NODE_VERSION = "20"
6. Klicken Sie auf "Speichern und Bereitstellen"

Die Website wird automatisch bereitgestellt und ist unter your-domain.pages.dev verfügbar.

### Umgebungsvariablen (falls erforderlich)
- `NEXT_PUBLIC_ANALYTICS_ID` - Für Analyse-Tracking (falls Sie die aktuellen Vercel Analytics ersetzen möchten)

## Technologie-Stack
- **Framework**: Next.js 14 mit App Router
- **Sprache**: TypeScript
- **Styling**: Tailwind CSS mit Tailwind CSS Animate
- **UI-Komponenten**: Radix UI-Primitive mit shadcn/ui
- **Icons**: Lucide React
- **Schriftarten**: Geist
- **Bereitstellung**: Cloudflare Pages
- **Analyse**: Vercel Analytics

## Mitwirken

Wir begrüßen Beiträge zu SereneSoul! Ob Sie Fehler beheben, neue Klänge hinzufügen, Übersetzungen verbessern oder Funktionen erweitern – Ihre Hilfe ist willkommen.

1. Forken Sie das Repository
2. Erstellen Sie einen Feature-Branch (`git checkout -b feature/AmazingFeature`)
3. Nehmen Sie Ihre Änderungen vor
4. Committen Sie Ihre Änderungen (`git commit -m 'Add some AmazingFeature'`)
5. Pushen Sie in den Branch (`git push origin feature/AmazingFeature`)
6. Öffnen Sie eine Pull Request

## Lizenz

Dieses Projekt ist unter der MIT-Lizenz lizenziert - siehe die Datei [LIZENZ](../LICENSE) für Details.

## Support

Wenn Sie auf Probleme stoßen oder Vorschläge zur Verbesserung haben, öffnen Sie bitte ein Issue auf GitHub oder kontaktieren Sie uns über die Anwendung.

## Unterstützen Sie uns

❤️ **Gefällt Ihnen SereneSoul?** Unterstützen Sie unsere Arbeit, um dieses Projekt kostenlos und werbefrei zu halten! Ihre Unterstützung hilft uns bei der Wartung und Verbesserung der Anwendung, dem Hinzufügen neuer Klänge und der Zugänglichmachung für mehr Menschen weltweit.

<a href="https://www.buymeacoffee.com/moca" style="display: inline-block; padding: 12px 24px; background: #FFDD00; color: #000000; text-decoration: none; border-radius: 8px; font-size: 16px; font-weight: bold; margin: 8px 0; box-shadow: 0 2px 8px rgba(255, 221, 0, 0.3);">
    ☕ Kaufen Sie uns einen Kaffee
</a>

Jeder Kaffee hilft uns dabei, uns auf die Schaffung des besten Entspannungserlebnisses für Sie zu konzentrieren! 🌿

## Danksagungen

- Erstellt mit [Next.js](https://nextjs.org/)
- Icons von [Lucide React](https://lucide.dev/)
- UI-Komponenten von [shadcn/ui](https://ui.shadcn.com/)
- Gehostet auf [Cloudflare Pages](https://pages.cloudflare.com/)