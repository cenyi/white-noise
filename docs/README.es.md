<div align="center">
  <a href="https://afunning.com" style="display: inline-block; padding: 12px 24px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 8px; font-size: 18px; font-weight: bold; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);">
    🚀 Probar Demo en Vivo: https://afunning.com
  </a>
</div>

# SereneSoul - Sonidos naturales para concentración y relajación 🌿

*100% gratuito, sin anuncios, sin necesidad de registro*

[![Desplegado en Cloudflare](https://img.shields.io/badge/Desplegado%20en-Cloudflare%20Pages-orange?style=for-the-badge&logo=vercel)](https://afunning.com)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-black?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

## Descripción

SereneSoul es una aplicación gratuita y de código abierto que proporciona sonidos naturales de alta calidad para la concentración, relajación y sueño. Con docenas de sonidos grabados profesionalmente, incluyendo lluvia, olas del océano, ambiente forestal y vida silvestre, los usuarios pueden crear su entorno de escucha perfecto sin anuncios ni necesidad de registro.

## Características
- 🎵 Docenas de sonidos naturales incluyendo lluvia, océano, bosque y más
- 🎚️ Control de volumen para cada sonido
- 📚 Guardar sonidos favoritos
- 📜 Ver historial de reproducción
- 🎨 Soporte para tema oscuro/claro
- 🌐 Soporte multilingüe (14 idiomas)
- 🔐 Enfoque centrado en la privacidad - no se recopilan datos de usuario
- 📱 Diseño responsive para todos los dispositivos

## Instalación

1. Clone el repositorio:
   ```bash
   git clone https://github.com/cenyi/white-noise.git
   ```

2. Instale las dependencias:
   ```bash
   cd serene-soul
   npm install
   # o
   yarn install
   # o
   pnpm install
   ```

3. Ejecute el servidor de desarrollo:
   ```bash
   npm run dev
   # o
   yarn dev
   # o
   pnpm dev
   ```

4. Abra [http://localhost:3000](http://localhost:3000) en su navegador para ver la aplicación.

## Despliegue

### Desplegar en Cloudflare Pages

Puede desplegar esta aplicación en Cloudflare Pages en solo unos pocos pasos:

1. Haga un fork de este repositorio en su cuenta de GitHub
2. Inicie sesión en su [Panel de control de Cloudflare](https://dash.cloudflare.com/)
3. Vaya a Workers & Pages > Crear aplicación > Pages
4. Conéctese a Git y seleccione su repositorio bifurcado
5. Para la **Configuración de compilación**, use:
   - Comando de compilación: `pnpm run cf-build`
   - Directorio de salida de compilación: `.vercel/output/static` (por defecto para Next.js en Cloudflare Pages)
   - Variables de entorno (opcional): NODE_VERSION = "20"
6. Haga clic en "Guardar y desplegar"

El sitio se desplegará automáticamente y estará disponible en your-domain.pages.dev.

### Variables de entorno (si es necesario)
- `NEXT_PUBLIC_ANALYTICS_ID` - Para seguimiento analítico (si desea reemplazar las analíticas actuales de Vercel)

## Pila tecnológica
- **Framework**: Next.js 14 con App Router
- **Lenguaje**: TypeScript
- **Estilo**: Tailwind CSS con Tailwind CSS Animate
- **Componentes UI**: Primitivas Radix UI con shadcn/ui
- **Iconos**: Lucide React
- **Fuentes**: Geist
- **Despliegue**: Cloudflare Pages
- **Análisis**: Vercel Analytics

## Contribución

¡Agradecemos las contribuciones a SereneSoul! Ya sea que esté corrigiendo errores, agregando nuevos sonidos, mejorando traducciones o mejorando funciones, su ayuda es apreciada.

1. Haga un fork del repositorio
2. Cree una rama para la característica (`git checkout -b feature/AmazingFeature`)
3. Haga sus cambios
4. Confirme sus cambios (`git commit -m 'Add some AmazingFeature'`)
5. Suba a la rama (`git push origin feature/AmazingFeature`)
6. Abra una Pull Request

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - consulte el archivo [LICENCIA](../LICENSE) para obtener más detalles.

## Soporte

Si encuentra problemas o tiene sugerencias para mejoras, por favor abra un issue en GitHub o contáctenos a través de la aplicación.

## Agradecimientos

- Construido con [Next.js](https://nextjs.org/)
- Iconos por [Lucide React](https://lucide.dev/)
- Componentes UI de [shadcn/ui](https://ui.shadcn.com/)
- Alojado en [Cloudflare Pages](https://pages.cloudflare.com/)