---
name: deploy-vercel
description: Use when deploying to production, publishing the website, pushing to Vercel, going live with a client site, or performing the final delivery deploy step.
---

# Skill: Deploy a Vercel

## Pre-requisitos (verificar antes de empezar)
- QA visual: aprobado
- Code review: aprobado
- SEO audit: aprobado
- npm run build: sin errores

Si alguno falló: DETENER. No hacer deploy con issues pendientes.

## Proceso

1. Build final:
```bash
npm run build
```

2. Push al repo:
```bash
git add -A
git status
git commit -m "feat([nombre-cliente]): sitio listo para producción"
git push origin cliente/[nombre-cliente]
```

3. Deploy Vercel:
```bash
npx vercel --prod
```
Vercel también deploya automáticamente si el repo está conectado a GitHub.
El deploy tarda ~2-3 minutos.

4. Verificar en producción (modo incógnito):
```bash
curl -s https://[url].vercel.app | grep -c "application/ld+json"
```
Debe devolver 1 o más.

5. Post-deploy:
- Actualizar docs/clientes.md → estado: ENTREGADO, URL producción
- Notificar cliente (template en docs/clientes.md)
