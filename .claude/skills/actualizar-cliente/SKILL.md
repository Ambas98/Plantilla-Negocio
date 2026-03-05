---
name: actualizar-cliente
description: Use when updating an existing client's website, changing menu items, updating business hours, adding new photos, making quick content changes for a maintenance client, or doing monthly maintenance work.
---

# Skill: Actualización de Cliente (Mantenimiento)

## Antes de empezar
1. Verificar en docs/clientes.md cuál es la URL de producción
2. Hacer checkout a la branch del cliente:
```bash
git checkout cliente/[nombre-normalizado]
git pull origin cliente/[nombre-normalizado]
```

## Tipos de actualización comunes

### Cambio de menú o precios
Solo en src/config/siteConfig.ts. Nunca hardcodear en componentes.

### Nuevas fotos
Optimizar antes de subir: máx 800KB, WebP o JPG, dimensiones correctas.
Copiar a public/images/ y actualizar referencias en siteConfig.ts.

### Cambio de horarios
En siteConfig.ts sección hours. El SchemaOrg se actualiza automáticamente.

## Deploy rápido
```bash
npm run build
git add -A
git commit -m "content([nombre]): [descripción del cambio]"
git push origin cliente/[nombre-normalizado]
```
Vercel deploya en ~2 min.

## Post-actualización
Notificar al cliente por WhatsApp (template en docs/clientes.md).
Registrar el cambio en la columna Notas de docs/clientes.md.
