# TapOpina — Landing page

Landing informativa para TapOpina (tarjetas NFC que llevan a los clientes directamente a dejar una reseña de Google), construida con Next.js 16 (App Router) + TypeScript + Tailwind CSS v4.

## Antes de publicarla

Rellena estos placeholders en `src/app/page.tsx` (al principio del archivo):

- `WHATSAPP` — número de WhatsApp en formato internacional sin "+" (ej. `34600000000`)
- `INSTAGRAM` — usuario de Instagram
- `EMAIL` — email de contacto
- `PRECIO` — precio de la tarjeta (ej. `29 €`)

También puedes ajustar `metadata` en `src/app/layout.tsx` (título/descripción para SEO).

## Desarrollo local

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Build de producción

```bash
npm run build
npm run start
```

## Despliegue

Es un proyecto Next.js estándar: se despliega igual de bien en Vercel (`vercel deploy`) que en cualquier hosting propio con Node.js o Docker. Como esta landing no usa backend ni base de datos, si en algún momento prefieres evitar depender de un runtime de Node, se puede exportar como sitio 100% estático añadiendo `output: "export"` a `next.config.ts` y ejecutando `npm run build`.

## Estructura

- `src/app/layout.tsx` — metadata de la página
- `src/app/globals.css` — paleta de colores y tokens de Tailwind (tonos papel/navy/dorado)
- `src/app/page.tsx` — toda la landing: hero, cómo funciona, beneficios, gestión de reputación, precio y contacto

No se han incluido reseñas ni testimonios de ejemplo a propósito — añade solo reseñas reales cuando las tengas.
