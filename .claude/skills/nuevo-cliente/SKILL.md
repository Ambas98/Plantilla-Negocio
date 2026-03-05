---
name: nuevo-cliente
description: Use when starting a new client project, onboarding a restaurant that signed a contract, setting up siteConfig.ts for a new client, configuring a new branch, or initializing the project template for a specific restaurant.
---

# Skill: Onboarding de Nuevo Cliente

## ACLARACIÓN TEMPLATE
El template ya incluye en la base:
- `components/SchemaOrg.tsx` con JSON-LD Restaurant (lee de siteConfig automáticamente)
- `app/sitemap.ts` y `app/robots.ts` dinámicos (leen `NEXT_PUBLIC_SITE_URL`)

**No hay que crear estos archivos.** Solo hay que completar `config/client-config.ts` con datos reales
y setear `NEXT_PUBLIC_SITE_URL` en Vercel antes del deploy.

---

## Paso 1: Verificar datos obligatorios antes de tocar código

Confirmar que tenemos:
- Nombre oficial del negocio
- Dirección completa (calle, número, San Juan)
- Teléfono formato +54 264 XXX-XXXX
- Email de contacto
- Horarios exactos (días y horarios)
- Tipo de cocina/categoría (para `cuisine`)
- Rango de precios: $, $$ o $$$ (para `priceRange`)
- Logo (PNG o SVG)
- Mínimo 3 fotos (800x600px mínimo)
- Coordenadas GPS (lat/lng de Google Maps)
- Redes sociales (opcional, dejar "" si no tiene)

Si faltan datos: listarlos y pedir que se consigan ANTES de continuar.

## Paso 2: Completar config/client-config.ts

Abrir `config/client-config.ts` y completar TODOS los campos con datos reales.
No dejar ningún placeholder sin reemplazar.

Campos críticos para Schema.org (no olvidar):
- `businessName`, `description`
- `cuisine` (tipo de cocina, ej: "Parrilla Argentina")
- `priceRange` ($, $$ o $$$)
- `contact.phone`, `contact.email`, `contact.address`
- `location.lat`, `location.lng` (copiar de Google Maps)
- `hours` (todos los días, usar "Cerrado" donde corresponda)

## Paso 3: Assets
Copiar a `public/images/`:
- `logo.png` o `logo.svg`
- `hero.jpg` (1200x800px recomendado)
- `og-image.jpg` (1200x630px recomendado — para redes sociales)
- Fotos de galería (mínimo 3, nombres descriptivos)

## Paso 4: Verificar
```bash
npm run build
```
Si pasa: confirmar "Setup completo. Listo para desarrollar."

## Paso 5: CRM
Agregar fila en `docs/clientes.md` con estado: EN PROGRESO

## Paso 6: Recordatorio deploy
Setear `NEXT_PUBLIC_SITE_URL=https://dominio-del-cliente.com` en Vercel
antes del deploy final (el skill deploy-vercel ya lo verifica).
