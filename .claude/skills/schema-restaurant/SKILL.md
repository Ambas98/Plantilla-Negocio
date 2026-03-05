---
name: schema-restaurant
description: Use when adding Schema.org structured data, implementing JSON-LD for a restaurant, improving local SEO, setting up rich results for Google Maps, or adding structured data to help Google understand the business.
---

# Skill: Schema.org para Restaurantes

## Por qué importa
Schema.org tipo Restaurant le dice a Google exactamente qué sos, dónde estás y cuándo abrís.
Resultado: mejor posición en Maps, estrellas y horarios en resultados de búsqueda.
En San Juan, ~95% de restaurantes locales NO tienen esto. Es el diferenciador SEO más fácil.

## IMPORTANTE: SchemaOrg ya está en el template base

`components/SchemaOrg.tsx` ya existe en la plantilla y ya está importado en `app/layout.tsx`.
**No hay que recrearlo.** Este skill solo aplica si el componente fue eliminado accidentalmente,
o si se necesita personalización avanzada.

## Verificación rápida
```bash
grep -n "SchemaOrg" app/layout.tsx components/SchemaOrg.tsx
```
Si aparecen los dos archivos: está correcto, no hace falta nada más.

## Si falta SchemaOrg (recrear)

### Paso 1: Verificar campos en config/client-config.ts
Confirmar que existen: `businessName`, `cuisine`, `priceRange`, `contact.phone`,
`contact.address`, `contact.email`, `hours` (objeto lun-dom), `location.lat`, `location.lng`

### Paso 2: Crear components/SchemaOrg.tsx

```tsx
import { siteConfig } from '@/config/client-config'

const dayToSchema: Record<string, string> = {
  monday: 'Monday', tuesday: 'Tuesday', wednesday: 'Wednesday',
  thursday: 'Thursday', friday: 'Friday', saturday: 'Saturday', sunday: 'Sunday',
}

function buildOpeningHours() {
  return Object.entries(siteConfig.hours)
    .filter(([, hours]) => hours !== 'Cerrado')
    .map(([day, hours]) => {
      const [opens, closes] = hours.split(' - ')
      return {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: `https://schema.org/${dayToSchema[day] ?? day}`,
        opens,
        closes,
      }
    })
}

export function SchemaOrg() {
  const sameAs = [
    siteConfig.social.facebook,
    siteConfig.social.instagram,
    siteConfig.social.twitter,
    siteConfig.social.linkedin,
  ].filter(Boolean)

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: siteConfig.businessName,
    description: siteConfig.description,
    servesCuisine: siteConfig.cuisine,
    priceRange: siteConfig.priceRange,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.contact.address,
      addressLocality: 'San Juan',
      addressRegion: 'San Juan',
      addressCountry: 'AR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.location.lat,
      longitude: siteConfig.location.lng,
    },
    openingHoursSpecification: buildOpeningHours(),
    ...(siteConfig.seo?.ogImage && { image: siteConfig.seo.ogImage }),
    ...(sameAs.length > 0 && { sameAs }),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
```

### Paso 3: Insertar en app/layout.tsx
```tsx
import { SchemaOrg } from '@/components/SchemaOrg'
// Dentro del <head>:
<SchemaOrg />
```

### Paso 4: Verificar
- https://validator.schema.org
- https://search.google.com/test/rich-results
