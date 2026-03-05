# Entregar: $ARGUMENTS

Pipeline completo de entrega para: $ARGUMENTS

⚠️ Verificar branch antes de continuar:
```bash
git branch --show-current
```
Debe mostrar: cliente/[nombre-normalizado]

## Fase 1: Build
```bash
npm run build
```
Si falla: DETENER. Resolver errores y volver a ejecutar este comando.

## Fase 2: Auditorías en paralelo
Invocar SIMULTÁNEAMENTE (Task con background donde sea posible):

Subagent code-reviewer: "Revisar código del proyecto '$ARGUMENTS'. Verificar: sin any, sin datos hardcodeados fuera de siteConfig.ts, alt texts presentes, sin console.log."

Subagent seo-auditor: "Auditar SEO del sitio '$ARGUMENTS'. Verificar: meta tags, Schema.org, sitemap, robots.txt."

Si alguno reporta issues críticos: DETENER y resolver antes de continuar.

## Fase 3: QA Visual
Invocar subagent qa-visual: "QA visual del sitio '$ARGUMENTS'. Verificar responsive 375px y 1280px, formulario de contacto, Google Maps embed, Schema.org en HTML."

Si hay issues bloqueantes: DETENER y resolver.

## Fase 4: Deploy
Activar skill deploy-vercel.

## Fase 5: Notificación
Preguntar: "¿Mando el WhatsApp al cliente ahora o lo mandás vos?"
Si confirma: usar WhatsApp MCP con template de docs/clientes.md.

## Fase 6: CRM
docs/clientes.md → estado: ENTREGADO ✅, URL producción, fecha entrega: hoy.

Confirmar: "✅ $ARGUMENTS entregado. URL: [url]"
