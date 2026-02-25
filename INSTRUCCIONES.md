# INSTRUCCIONES DE USO - PLANTILLA BASE

## 🚀 INICIO RÁPIDO

### 1. Instalar dependencias (solo primera vez)
```bash
npm install
```

### 2. Ejecutar en modo desarrollo
```bash
npm run dev
```

Abre tu navegador en: http://localhost:3000

### 3. Customizar para un cliente

**Editá SOLO este archivo:** `config/client-config.ts`

Ahí configurás:
- ✅ Nombre del negocio
- ✅ Teléfono y WhatsApp
- ✅ Horarios
- ✅ Menú/Catálogo
- ✅ Colores
- ✅ Todo lo demás

### 4. Subir fotos del cliente

1. Optimizá las fotos en https://tinypng.com
2. Colocá los archivos en: `public/images/`
3. Actualizá el array `gallery` en `client-config.ts` con los nombres

### 5. Deploy a producción

```bash
# Primera vez
git init
git add .
git commit -m "Cliente: [Nombre]"
git branch -M main

# Crear repo en GitHub
# Luego:
git remote add origin https://github.com/tu-usuario/cliente-nombre.git
git push -u origin main

# Conectar con Vercel
# Ve a vercel.com/dashboard → Import Project → Selecciona el repo → Deploy
```

---

## 📝 CHECKLIST POR CLIENTE

Antes de cada deploy:

- [ ] `client-config.ts` completado con TODOS los datos
- [ ] Fotos optimizadas y subidas a `/public/images/`
- [ ] Nombres de fotos actualizados en el config
- [ ] WhatsApp y teléfono verificados
- [ ] Horarios correctos
- [ ] Menú/catálogo completo con precios
- [ ] Colores personalizados
- [ ] Formspree configurado (ver abajo)
- [ ] Probado localmente con `npm run dev`

---

## 📧 CONFIGURAR FORMSPREE (Formulario de contacto)

### Pasos:

1. Ve a https://formspree.io
2. Registrate (gratis)
3. Click en "New Form"
4. Nombre: "Contacto - [Nombre Cliente]"
5. Email donde llegará: email del cliente
6. Copia el Form ID (ej: `mwkagzkp`)
7. Pega el ID en `client-config.ts` → `formspreeId: "mwkagzkp"`
8. Guarda y redeploy

---

## 🎨 PERSONALIZACIÓN AVANZADA

### Cambiar estructura de secciones

Editá `app/page.tsx`:

```tsx
// Comentá la línea para ocultar una sección:
// <Gallery />  ← Esta sección no aparecerá

// O cambia el orden:
<Hero />
<Catalog />  // Ahora el menú va antes
<About />
<Gallery />
<Contact />
```

### Agregar más secciones al menú

Editá `components/Header.tsx`:

```tsx
const menuItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Menú', href: '#menu' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Contacto', href: '#contacto' },
  // Agregá más aquí
]
```

---

## 🐛 TROUBLESHOOTING

### "npm install" no funciona
- Verificá que tengas Node.js instalado: `node --version`
- Si no: descarga de https://nodejs.org

### El sitio no se ve bien localmente
- Asegurate de ejecutar `npm run dev`
- Abre http://localhost:3000 (NO http://localhost:3001)

### Las fotos no se ven
- Verificá que estén en `/public/images/`
- Verificá los nombres exactos en `client-config.ts`
- Los nombres son CASE SENSITIVE: `foto.jpg` ≠ `Foto.jpg`

### El formulario no envía emails
- Verificá el `formspreeId` en config
- Revisa spam del email del cliente
- Loguéate en Formspree y verifica que el form exista

### Error al hacer deploy en Vercel
- Verificá que el repo esté en GitHub
- Asegurate de que `.env.local` NO esté en el repo (está en .gitignore)
- Verificá que `npm run build` funcione localmente

---

## 📞 SOPORTE

Si te trabás:
- Leé la guía completa: `GUIA_SISTEMA_PLANTILLAS.md`
- YouTube: "Next.js 14 tutorial"
- ChatGPT/Claude: pega el error exacto

---

## ✅ BUENAS PRÁCTICAS

1. **NUNCA edites la PLANTILLA-BASE** directamente
2. **Siempre hacé una copia** por cliente
3. **Commiteá frecuentemente** a GitHub (backup automático)
4. **Optimizá TODAS las fotos** antes de subir
5. **Probá en mobile** antes de entregar (usa Chrome DevTools)
6. **Guardá el link del repo** de cada cliente en un Excel

---

## 💰 RECORDATORIO DE PRECIOS

Por cliente:
- Setup: $150,000 (pago único)
- Mantenimiento: $15,000/mes

Mantenimiento incluye:
- Actualizar precios/menú
- Cambiar fotos
- Actualizar horarios
- Soporte por WhatsApp

**Con 10 clientes = $150,000/mes recurrente + $1,500,000 en setups**

---

¡Éxito! 🚀
