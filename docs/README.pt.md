<div align="center">
  <a href="https://afunning.com" style="display: inline-block; padding: 12px 24px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 8px; font-size: 18px; font-weight: bold; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);">
    🚀 Experimentar Demo ao Vivo: https://afunning.com
  </a>
</div>

# SereneSoul - Sons naturais para concentração e relaxamento 🌿

*100% gratuito, sem anúncios, sem necessidade de registo*

[![Implantado no Cloudflare](https://img.shields.io/badge/Implantado%20no-Cloudflare Pages-orange?style=for-the-badge&logo=vercel)](https://afunning.com)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-black?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

## Visão Geral

SereneSoul é uma aplicação gratuita e de código aberto que fornece sons naturais de alta qualidade para concentração, relaxamento e sono. Com dezenas de sons gravados profissionalmente, incluindo chuva, ondas do oceano, ambiente florestal e vida selvagem, os utilizadores podem criar o seu ambiente de escuta perfeito sem anúncios ou necessidade de registo.

## Características
- 🎵 Dezenas de sons naturais incluindo chuva, oceano, floresta e mais
- 🎚️ Controlo de volume para cada som
- 📚 Guardar sons favoritos
- 📜 Ver histórico de reprodução
- 🎨 Suporte para tema claro/escuro
- 🌐 Suporte multilíngue (14 idiomas)
- 🔐 Abordagem centrada na privacidade - não são recolhidos dados de utilizador
- 📱 Design responsivo para todos os dispositivos

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/cenyi/white-noise.git
   ```

2. Instale as dependências:
   ```bash
   cd serene-soul
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   ```

3. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   # ou
   yarn dev
   # ou
   pnpm dev
   ```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver a aplicação.

## Implementação

### Implantar no Cloudflare Pages

Você pode implantar esta aplicação no Cloudflare Pages em apenas alguns passos:

1. Faça um fork deste repositório para a sua conta do GitHub
2. Faça login no seu [Painel do Cloudflare](https://dash.cloudflare.com/)
3. Vá para Workers & Pages > Criar Aplicação > Pages
4. Conecte-se ao Git e selecione o seu repositório forkado
5. Para a **Configuração de compilação**, use:
   - Comando de compilação: `pnpm run cf-build`
   - Diretório de saída da compilação: `.vercel/output/static` (padrão para Next.js no Cloudflare Pages)
   - Variáveis de ambiente (opcional): NODE_VERSION = "20"
6. Clique em "Salvar e implantar"

O site será automaticamente implantado e estará disponível em your-domain.pages.dev.

### Variáveis de ambiente (se necessário)
- `NEXT_PUBLIC_ANALYTICS_ID` - Para rastreamento analítico (se quiser substituir as análises atuais do Vercel)

## Pilha tecnológica
- **Framework**: Next.js 14 com App Router
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS com Tailwind CSS Animate
- **Componentes UI**: Primitivas Radix UI com shadcn/ui
- **Ícones**: Lucide React
- **Fontes**: Geist
- **Implementação**: Cloudflare Pages
- **Análise**: Vercel Analytics

## Contribuição

Agradecemos as contribuições para o SereneSoul! Quer esteja a corrigir erros, a adicionar novos sons, a melhorar traduções ou a aprimorar funcionalidades, a sua ajuda é apreciada.

1. Faça um fork do repositório
2. Crie um branch de funcionalidade (`git checkout -b feature/AmazingFeature`)
3. Faça as suas alterações
4. Confirme as suas alterações (`git commit -m 'Add some AmazingFeature'`)
5. Faça push para o branch (`git push origin feature/AmazingFeature`)
6. Abra um Pull Request

## Licença

Este projeto está licenciado sob a Licença MIT - consulte o ficheiro [LICENÇA](../LICENSE) para obter detalhes.

## Suporte

Se encontrar quaisquer problemas ou tiver sugestões para melhorias, por favor abra um issue no GitHub ou entre em contacto connosco através da aplicação.

## Apoie-nos

❤️ **Gosta do SereneSoul?** Considere apoiar o nosso trabalho para manter este projeto gratuito e sem anúncios! O seu apoio ajuda-nos a manter e melhorar a aplicação, adicionar novos sons e torná-la acessível para mais pessoas em todo o mundo.

<a href="https://www.buymeacoffee.com/moca" style="display: inline-block; padding: 12px 24px; background: #FFDD00; color: #000000; text-decoration: none; border-radius: 8px; font-size: 16px; font-weight: bold; margin: 8px 0; box-shadow: 0 2px 8px rgba(255, 221, 0, 0.3);">
    ☕ Compre-nos um café
</a>

Cada café ajuda-nos a concentrarmo-nos na criação da melhor experiência de relaxamento para si! 🌿

## Agradecimentos

- Construído com [Next.js](https://nextjs.org/)
- Ícones por [Lucide React](https://lucide.dev/)
- Componentes UI de [shadcn/ui](https://ui.shadcn.com/)
- Hospedado no [Cloudflare Pages](https://pages.cloudflare.com/)