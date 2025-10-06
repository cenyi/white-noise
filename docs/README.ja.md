<div align="center">
  <a href="https://afunning.com" style="display: inline-block; padding: 12px 24px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 8px; font-size: 18px; font-weight: bold; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);">
    🚀 ライブデモを試す: https://afunning.com
  </a>
</div>

# SereneSoul - 集中とリラックスのための自然音 🌿

*100%無料、広告なし、登録不要*

[![Cloudflareにデプロイ済み](https://img.shields.io/badge/Cloudflare Pagesにデプロイ済み-Cloudflare Pages-orange?style=for-the-badge&logo=vercel)](https://afunning.com)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-black?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

## 概要

SereneSoulは、集中、リラックス、睡眠に役立つ高品質な自然音を提供する無料のオープンソースアプリケーションです。雨音、海の波音、森の音、野生動物の音など、プロフェッショナルに録音された数十種類の音を使用して、広告や登録なしに完璧なリスニング環境を作ることができます。

## 機能
- 🎵 雨、海、森など数十種類の自然音
- 🎚️ 各音のボリューム制御
- 📚 お気に入りの音を保存
- 📜 再生履歴の表示
- 🎨 ダーク/ライトテーマ対応
- 🌐 多言語対応（14言語）
- 🔐 プライバシー重視 - ユーザーデータは収集されません
- 📱 すべてのデバイスに対応したレスポンシブデザイン

## インストール

1. リポジトリをクローン:
   ```bash
   git clone https://github.com/cenyi/white-noise.git
   ```

2. 依存関係をインストール:
   ```bash
   cd serene-soul
   npm install
   # または
   yarn install
   # または
   pnpm install
   ```

3. 開発サーバーを実行:
   ```bash
   npm run dev
   # または
   yarn dev
   # または
   pnpm dev
   ```

4. ブラウザで [http://localhost:3000](http://localhost:3000) を開いてアプリケーションを表示します。

## デプロイ

### Cloudflare Pagesにデプロイ

このアプリケーションをCloudflare Pagesにデプロイするには、いくつかの簡単な手順で完了できます。

1. GitHubアカウントにこのリポジトリをフォーク
2. [Cloudflareダッシュボード](https://dash.cloudflare.com/)にログイン
3. Workers & Pages > アプリケーションの作成 > Pages に移動
4. Gitに接続し、フォークしたリポジトリを選択
5. **ビルド設定** には以下を使用:
   - ビルドコマンド: `pnpm run cf-build`
   - ビルド出力ディレクトリ: `.vercel/output/static` (Next.jsのCloudflare Pagesデフォルト)
   - 環境変数 (オプション): NODE_VERSION = "20"
6. 「保存してデプロイ」をクリック

サイトは自動的にデプロイされ、your-domain.pages.dev で利用可能になります。

### 環境変数 (必要に応じて)
- `NEXT_PUBLIC_ANALYTICS_ID` - 分析トラッキング用 (現在のVercel Analyticsを置き換える場合)

## テクノロジースタック
- **フレームワーク**: Next.js 14 と App Router
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS と Tailwind CSS Animate
- **UI コンポーネント**: Radix UI プリミティブ と shadcn/ui
- **アイコン**: Lucide React
- **フォント**: Geist
- **デプロイ**: Cloudflare Pages
- **アナリティクス**: Vercel Analytics

## 貢献

SereneSoulへの貢献を歓迎します！バグ修正、新規サウンドの追加、翻訳の改善、機能強化など、あなたの手助けを感謝します。

1. リポジトリをフォーク
2. 機能ブランチを作成 (`git checkout -b feature/AmazingFeature`)
3. 変更を加える
4. 変更をコミット (`git commit -m 'AmazingFeatureを追加'`)
5. ブランチにプッシュ (`git push origin feature/AmazingFeature`)
6. プルリクエストを開く

## ライセンス

このプロジェクトはMITライセンスの下にあります - 詳細は[LICENSE](../LICENSE)ファイルを参照してください。

## サポート

問題が発生した場合や改善提案がある場合は、GitHubでIssueを開くか、アプリケーションからお問い合わせください。

## 謝辞

- [Next.js](https://nextjs.org/)で構築
- アイコンは[Lucide React](https://lucide.dev/)提供
- UIコンポーネントは[shadcn/ui](https://ui.shadcn.com/)から
- [Cloudflare Pages](https://pages.cloudflare.com/)でホスト