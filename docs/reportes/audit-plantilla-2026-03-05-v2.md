# Auditoría v2 — PLANTILLA-BASE-NEGOCIOS
**Fecha:** 2026-03-05 (post-mejoras)
**Branch:** main | **Commit:** 4d8e710

---

## Resumen Ejecutivo

| Área | Puntaje | Δ vs v1 | Estado |
|------|---------|---------|--------|
| Build | ✅ PASS | = | 10 páginas (+ /sitemap.xml + /robots.txt) |
| Code Review | **9.5/10** | +2 | Aprobado |
| SEO | **8.5/10** | +1.5 | Aprobado |

---

## Code Review (9.5/10) — APROBADO

### Issues críticos: NINGUNO ✅

### Issues menores (no bloqueantes)
1. `components/SchemaOrg.tsx:35` — objeto `schema` sin tipo explícito (inferencia suficiente)
2. `components/Footer.tsx:21` — `daysShort` podría ser más type-safe con `Record<typeof daysOrder[number], string>`

### Verificaciones pasadas ✅
- Sin `any`, sin `as any`, sin `// @ts-ignore`
- Sin datos hardcodeados de clientes
- Sin console.log
- Sin `<img>` nativo (Gallery usa `next/image`)
- TypeScript strict ON, ES modules
- `isFormField()` y `isSocialPlatform()` type guards correctos
- `as React.CSSProperties` en Contact.tsx documentado y justificado (CSS custom props de Tailwind)
- Accesibilidad: aria-labelledby, aria-invalid, aria-describedby, role="alert", role="dialog"

---

## SEO (8.5/10) — APROBADO

### Issues bloqueantes: NINGUNO ✅

### Issues menores
1. `/public/images/og-default.jpg` no existe — fallback de OG image dará 404 hasta que el cliente agregue su imagen
2. `SchemaOrg.tsx:20` — `dayOfWeek` usa URL `https://schema.org/Monday` en vez de `Monday`. Ambos formatos son válidos para Google, pero el short form es más limpio.

### Verificaciones pasadas ✅
- Meta tags completos (title, description, OG, Twitter)
- SchemaOrg: @type Restaurant, address+San Juan, telephone, openingHoursSpecification, geo
- `app/sitemap.ts` genera /sitemap.xml dinámicamente
- `app/robots.ts` genera /robots.txt dinámicamente (usa NEXT_PUBLIC_SITE_URL)
- Imágenes: next/image con alt text, sin img nativo
- Heading hierarchy: h1 en Hero, h2 en secciones, h3 en subsecciones
- Skip-to-content link, semantic HTML

---

## ACLARACIÓN TEMPLATE
Estos items se ven como "issues" pero son placeholders intencionales del template:
- Datos en `config/client-config.ts` son DEMO
- `/public/images/og-default.jpg` no existe (cliente la provee)
- `NEXT_PUBLIC_SITE_URL` apunta a localhost (setear en Vercel)

---

## Acciones recomendadas antes del próximo deploy real

**P0 — Al onboarding de cada cliente:**
- [ ] Reemplazar todos los campos de `config/client-config.ts`
- [ ] Agregar imágenes reales en `public/images/`
- [ ] Setear `NEXT_PUBLIC_SITE_URL` en Vercel

**P1 — Mejora template (opcional):**
- [ ] Fix `dayOfWeek` en SchemaOrg.tsx: usar `Monday` en vez de `https://schema.org/Monday`
- [ ] Tipado más estricto en `daysShort` (Footer.tsx)
