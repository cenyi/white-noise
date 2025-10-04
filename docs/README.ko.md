<div align="center">
  <a href="https://afunning.com" style="display: inline-block; padding: 12px 24px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 8px; font-size: 18px; font-weight: bold; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);">
    🚀 라이브 데모 체험하기: https://afunning.com
  </a>
</div>

# SereneSoul - 집중과 이완을 위한 자연의 소리 🌿

*100% 무료, 광고 없음, 등록 필요 없음*

[![Cloudflare에 배포됨](https://img.shields.io/badge/Cloudflare Pages에 배포됨-Cloudflare Pages-orange?style=for-the-badge&logo=vercel)](https://afunning.com)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-black?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

## 개요

SereneSoul는 집중, 이완 및 수면을 위한 고품질 자연 소리를 제공하는 무료 오픈 소스 애플리케이션입니다. 비, 바다 파도, 숲의 분위기, 야생 동물 등 수십 가지의 전문적으로 녹음된 소리를 광고나 등록 없이 완벽한 청취 환경을 만들 수 있습니다.

## 기능
- 🎵 비, 바다, 숲 등 수십 가지 자연 소리
- 🎚️ 각 소리의 볼륨 조절
- 📚 즐겨찾는 소리 저장
- 📜 재생 기록 보기
- 🎨 다크/라이트 테마 지원
- 🌐 다국어 지원 (9개 언어)
- 🔐 프라이버시 중심 - 사용자 데이터 수집 없음
- 📱 모든 장치에 맞는 반응형 디자인

## 설치

1. 저장소 복제:
   ```bash
   git clone https://github.com/cenyi/white-noise.git
   ```

2. 의존성 설치:
   ```bash
   cd serene-soul
   npm install
   # 또는
   yarn install
   # 또는
   pnpm install
   ```

3. 개발 서버 실행:
   ```bash
   npm run dev
   # 또는
   yarn dev
   # 또는
   pnpm dev
   ```

4. 브라우저에서 [http://localhost:3000](http://localhost:3000) 를 열어 애플리케이션을 확인합니다.

## 배포

### Cloudflare Pages에 배포

이 애플리케이션을 Cloudflare Pages에 몇 가지 간단한 단계로 배포할 수 있습니다:

1. GitHub 계정에 이 저장소를 포크하세요
2. [Cloudflare 대시보드](https://dash.cloudflare.com/)에 로그인하세요
3. Workers & Pages > 애플리케이션 생성 > Pages로 이동하세요
4. Git에 연결하고 포크한 저장소를 선택하세요
5. **빌드 구성**의 경우 다음을 사용하세요:
   - 빌드 명령어: `pnpm run cf-build`
   - 빌드 출력 디렉터리: `.vercel/output/static` (Cloudflare Pages에서 Next.js의 기본값)
   - 환경 변수 (선택 사항): NODE_VERSION = "20"
6. "저장 및 배포"를 클릭하세요

사이트는 자동으로 배포되며 your-domain.pages.dev에서 사용할 수 있습니다.

### 환경 변수 (필요한 경우)
- `NEXT_PUBLIC_ANALYTICS_ID` - 분석 추적을 위해 (현재 Vercel Analytics를 교체하려는 경우)

## 기술 스택
- **프레임워크**: Next.js 14 및 App Router
- **언어**: TypeScript
- **스타일링**: Tailwind CSS 및 Tailwind CSS Animate
- **UI 구성 요소**: Radix UI 프리미티브 및 shadcn/ui
- **아이콘**: Lucide React
- **폰트**: Geist
- **배포**: Cloudflare Pages
- **분석**: Vercel Analytics

## 기여

SereneSoul에 기여를 환영합니다! 버그를 수정하든, 새 소리를 추가하든, 번역을 개선하든, 기능을 향상시키든 여러분의 도움을 감사히 환영합니다.

1. 저장소 포크
2. 기능 브랜치 생성 (`git checkout -b feature/AmazingFeature`)
3. 변경 사항 적용
4. 변경 사항 커밋 (`git commit -m 'Some AmazingFeature 추가'`)
5. 브랜치에 푸시 (`git push origin feature/AmazingFeature`)
6. 풀 리퀘스트 열기

## 라이선스

이 프로젝트는 MIT 라이선스에 따라 라이선스가 부여됨 - 자세한 내용은 [라이선스](../LICENSE) 파일 참조.

## 지원

문제가 발생하거나 개선 제안이 있는 경우 GitHub에서 이슈를 열거나 애플리케이션을 통해 저희에게 연락해 주세요.

## 감사의 말

- [Next.js](https://nextjs.org/)로 제작됨
- 아이콘은 [Lucide React](https://lucide.dev/) 제공
- UI 구성 요소는 [shadcn/ui](https://ui.shadcn.com/)에서 제공
- [Cloudflare Pages](https://pages.cloudflare.com/)에서 호스팅