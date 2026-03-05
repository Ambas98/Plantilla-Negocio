# PLANTILLA-NEGOCIO · Web Agency · Restaurantes San Juan

## Stack
Next.js 14 (App Router) · TypeScript strict · Tailwind CSS · Vercel · Windows 11 + Git Bash

## Estructura
app/              → Páginas (App Router) + sitemap.ts + robots.ts
components/       → Componentes reutilizables (incluye SchemaOrg.tsx)
config/           → client-config.ts (ÚNICA fuente de verdad del cliente)
public/           → Assets del cliente (logo, fotos)
.claude/skills/   → Skills on-demand
.claude/agents/   → Subagents especializados
.claude/commands/ → Slash commands (invocar como /project:nombre)

## Comandos
npm run dev      → Servidor local :3000
npm run build    → Build (SIEMPRE antes de entregar)
npm run lint     → Linting TypeScript

## Reglas de código (SIEMPRE)
- TypeScript strict. NUNCA `any`.
- Funcional con hooks. Sin clases.
- ES modules (import/export). Sin require().
- TODO dato del cliente → config/client-config.ts ÚNICAMENTE.
- Sin datos hardcodeados de clientes anteriores.
- Rutas: siempre / (forward slash), nunca \.

## ACLARACIÓN TEMPLATE
El template base YA incluye SEO completo — NO recrear estos archivos:
- `components/SchemaOrg.tsx` → JSON-LD Restaurant (se auto-alimenta de client-config.ts)
- `app/sitemap.ts` → genera /sitemap.xml dinámicamente
- `app/robots.ts` → genera /robots.txt dinámicamente

`config/client-config.ts` tiene datos DEMO/PLACEHOLDER — es intencional.
NUNCA deployar sin reemplazar TODOS los campos con datos reales del cliente.
Setear `NEXT_PUBLIC_SITE_URL=https://dominio-del-cliente.com` en Vercel antes del deploy.

Campos requeridos en client-config.ts para Schema.org (verificar en nuevo-cliente):
`businessName`, `cuisine`, `priceRange`, `contact.*`, `location.lat/lng`, `hours.*`

## Proceso de entrega (NUNCA omitir)
1. npm run build → sin errores
2. Subagent code-reviewer (model: haiku)
3. Subagent seo-auditor (model: haiku)
4. Subagent qa-visual (model: sonnet)
5. Skill deploy-vercel
6. Notificar cliente por WhatsApp MCP
7. docs/clientes.md → estado: ENTREGADO

## Clientes activos
Revisar docs/clientes.md antes de iniciar cualquier trabajo.

## Plan Mode
Shift+Tab x2 antes de cambios en más de 3 archivos.

## MCP activos
whatsapp, context7, playwright, github — configurados en .claude/mcp.json

## Auto-aprendizaje
Si cometés un error que no debería repetirse, actualizá ESTE archivo con una regla que lo prevenga.
Formato: "NUNCA [acción]. En cambio, [alternativa correcta]."
