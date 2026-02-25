# PLANTILLA BASE PARA NEGOCIOS LOCALES

Sistema completo de plantillas para desarrollo web de clientes.

**✨ NUEVO: Sistema multi-página (cada sección es una URL separada)**

## 🎯 ESTRUCTURA DEL SITIO

```
/           → Página de inicio (Hero)
/nosotros   → Sobre nosotros (info + horarios)
/menu       → Catálogo/Menú completo
/galeria    → Galería de fotos
/contacto   → Formulario + Mapa
```

## 🚀 INICIO RÁPIDO

### 1. Instalación inicial (solo una vez)
```bash
npm install
```

### 2. Ejecutar en modo desarrollo
```bash
npm run dev
```

Abre http://localhost:3000

### 3. Customizar para un cliente
Edita SOLO el archivo: `config/client-config.ts`

### 4. Subir fotos del cliente
Coloca las imágenes en: `public/images/`

### 5. Deploy a producción
```bash
git init
git add .
git commit -m "Cliente: [nombre]"
# Sube a GitHub y conecta con Vercel
```

## 📁 ESTRUCTURA

```
PLANTILLA-BASE-NEGOCIOS/
├── /config/
│   └── client-config.ts    ← ÚNICO ARCHIVO A EDITAR
├── /components/
│   ├── Header.tsx           (navegación con Links)
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Catalog.tsx
│   ├── Gallery.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── WhatsAppButton.tsx
├── /app/
│   ├── layout.tsx           (Header + Footer global)
│   ├── page.tsx             (Página inicio)
│   ├── /nosotros/
│   │   └── page.tsx
│   ├── /menu/
│   │   └── page.tsx
│   ├── /galeria/
│   │   └── page.tsx
│   └── /contacto/
│       └── page.tsx
├── /public/
│   └── /images/             ← FOTOS DEL CLIENTE AQUÍ
├── package.json
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
```

## ✅ VENTAJAS SISTEMA MULTI-PÁGINA

1. **Mejor SEO** - Cada página tiene su propia URL
2. **Carga más rápida** - Solo carga lo necesario
3. **URLs compartibles** - Link directo a /menu o /contacto
4. **Más profesional** - Estructura estándar de sitios web
5. **Menú interactivo** - Muestra página activa resaltada

## ✅ CHECKLIST POR CLIENTE

Antes de cada deploy, verifica:

- [ ] `client-config.ts` completado con todos los datos
- [ ] Fotos optimizadas en `/public/images/`
- [ ] Nombres de fotos actualizados en config
- [ ] Formspree configurado y probado
- [ ] Colores personalizados
- [ ] Teléfono y WhatsApp correctos
- [ ] Ubicación en mapa correcta
- [ ] Horarios actualizados
- [ ] Menú/catálogo completo
- [ ] Probado todas las páginas: /, /nosotros, /menu, /galeria, /contacto

## 🎨 PERSONALIZACIÓN

### Cambiar colores
Edita `colors` en `client-config.ts`

### Agregar/quitar páginas
1. Crea carpeta en `/app/nueva-pagina/`
2. Crea `page.tsx` dentro
3. Agrega link en `components/Header.tsx`

### Cambiar orden del menú
Edita el array `menuItems` en `components/Header.tsx`

## 📞 SOPORTE

- Lee `INSTRUCCIONES.md` para guía rápida
- Lee `CAMBIOS-MULTI-PAGINA.md` para detalles técnicos
- Lee `GUIA_SISTEMA_PLANTILLAS.md` para guía completa

