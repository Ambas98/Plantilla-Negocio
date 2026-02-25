// ============================================
// ARCHIVO DE CONFIGURACIÓN DEL CLIENTE
// ============================================
// Este es el ÚNICO archivo que necesitas editar
// para customizar el sitio de cada cliente.
//
// IMPORTANTE: Mantén el formato exacto.
// ============================================

export const siteConfig = {
  // ==========================================
  // 1. INFORMACIÓN BÁSICA
  // ==========================================
  businessName: "Mi Negocio",
  tagline: "Slogan o frase descriptiva",
  description: "Descripción breve del negocio para SEO (150-160 caracteres)",

  // ==========================================
  // 2. HISTORIA / SOBRE NOSOTROS
  // ==========================================
  about: {
    story: "Contá la historia de tu negocio acá. ¿Cuándo abriste? ¿Qué te inspiró? ¿Qué valores te guían? Este texto aparece en la sección 'Sobre Nosotros' y ayuda a conectar con tus clientes.",
    mission: "Nuestra misión es brindar el mejor servicio posible con calidad y dedicación."  // Opcional - dejá "" si no querés usarlo
  },

  // ==========================================
  // 3. CONTACTO
  // ==========================================
  contact: {
    phone: "+54 264 123-4567",
    whatsapp: "5492641234567",  // Solo números, sin espacios ni guiones
    email: "contacto@minegocio.com",
    address: "Calle Ejemplo 123, San Juan, Argentina"
  },

  // ==========================================
  // 4. MENSAJE DE WHATSAPP
  // ==========================================
  // Mensaje pre-cargado cuando el cliente hace click en WhatsApp
  whatsappMessage: "Hola! Me interesa consultar sobre sus servicios.",

  // ==========================================
  // 5. REDES SOCIALES (opcional - dejar "" si no tiene)
  // ==========================================
  social: {
    facebook: "https://facebook.com/minegocio",
    instagram: "https://instagram.com/minegocio",
    twitter: "",   // Opcional
    linkedin: ""   // Opcional
  },

  // ==========================================
  // 6. UBICACIÓN Y MAPA
  // ==========================================
  location: {
    // Coordenadas GPS (buscar en Google Maps)
    lat: -31.5375,
    lng: -68.5364,
    // Link directo de Google Maps (botón "Compartir" en Google Maps)
    mapUrl: "https://goo.gl/maps/ejemplo"
  },

  // ==========================================
  // 7. HORARIOS DE ATENCIÓN
  // ==========================================
  hours: {
    monday: "09:00 - 18:00",
    tuesday: "09:00 - 18:00",
    wednesday: "09:00 - 18:00",
    thursday: "09:00 - 18:00",
    friday: "09:00 - 18:00",
    saturday: "09:00 - 13:00",
    sunday: "Cerrado"
  },

  // ==========================================
  // 8. MENÚ / CATÁLOGO / SERVICIOS
  // ==========================================
  // menuLabel: nombre de esta sección en el sitio
  // Opciones: "Menú", "Servicios", "Catálogo", "Productos", "Tratamientos"
  menuLabel: "Menú",

  catalog: [
    {
      category: "Categoría 1",  // Ej: "Entradas", "Cortes de pelo", "Masajes"
      items: [
        {
          name: "Producto/Servicio 1",
          price: "5000",   // Solo números, sin $ ni puntos
          description: "Descripción opcional del item"
        },
        {
          name: "Producto/Servicio 2",
          price: "8000",
          description: "Otra descripción"
        }
      ]
    },
    {
      category: "Categoría 2",
      items: [
        {
          name: "Producto/Servicio 3",
          price: "12000",
          description: "Descripción"
        }
      ]
    }
  ],

  // ==========================================
  // 9. GALERÍA DE FOTOS
  // ==========================================
  // Solo pon los NOMBRES de los archivos que están en /public/images/
  // Ejemplo: Si tienes /public/images/local-1.jpg, solo pon "local-1.jpg"
  // Podés agregar también un alt text descriptivo para SEO/accesibilidad:
  gallery: [
    { file: "imagen-1.jpg", alt: "Interior del local" },
    { file: "imagen-2.jpg", alt: "Nuestros productos" },
    { file: "imagen-3.jpg", alt: "El equipo de trabajo" },
    { file: "imagen-4.jpg", alt: "Vista del local" },
    { file: "imagen-5.jpg", alt: "Detalle de nuestros servicios" },
    { file: "imagen-6.jpg", alt: "Ambiente del lugar" }
  ],

  // ==========================================
  // 10. IMAGEN HERO (opcional)
  // ==========================================
  // Imagen de fondo para la pantalla de inicio.
  // Dejá "" para usar el fondo degradado por defecto.
  // Tamaño recomendado: 1920x1080px, formato JPG/WEBP.
  heroImage: "",  // Ejemplo: "/images/hero-bg.jpg"

  // ==========================================
  // 11. TEMA DE COLORES
  // ==========================================
  // Usá https://coolors.co para elegir paleta
  // Formato: código hexadecimal (#RRGGBB)
  colors: {
    primary: "#2563EB",      // Color principal (botones, links, encabezados)
    secondary: "#10B981",    // Color secundario (acentos, categorías)
    background: "#FFFFFF",   // Fondo general
    text: "#1F2937",         // Color del texto principal
    textLight: "#6B7280"     // Color del texto secundario
  },

  // ==========================================
  // 12. FORMSPREE (Formulario de contacto)
  // ==========================================
  // Obtén tu ID en https://formspree.io después de crear el form
  formspreeId: "mwkagzkp",  // Reemplaza con el ID real

  // ==========================================
  // 13. SEO (para mejor posicionamiento en Google)
  // ==========================================
  seo: {
    keywords: "restaurante, comida, san juan, argentina",  // Palabras clave separadas por coma
    ogImage: "/images/og-image.jpg"  // Imagen para compartir en redes (1200x630px recomendado)
  }
}

// ==========================================
// EJEMPLOS SEGÚN TIPO DE NEGOCIO
// ==========================================

/*
RESTAURANTE:
-------------
menuLabel: "Menú",
catalog: [
  {
    category: "Entradas",
    items: [
      { name: "Empanadas (docena)", price: "3500", description: "Carne, pollo o verdura" },
      { name: "Picada para 2", price: "9000", description: "Quesos, fiambres y aceitunas" }
    ]
  },
  {
    category: "Platos Principales",
    items: [
      { name: "Bife de chorizo", price: "13000", description: "350g con guarnición" },
      { name: "Milanesa napolitana", price: "11000", description: "Con papas fritas" }
    ]
  }
]

PELUQUERÍA:
-----------
menuLabel: "Servicios",
catalog: [
  {
    category: "Cortes",
    items: [
      { name: "Corte caballero", price: "8000", description: "Incluye lavado" },
      { name: "Corte dama", price: "10000", description: "Incluye lavado y secado" }
    ]
  },
  {
    category: "Color",
    items: [
      { name: "Color completo", price: "25000", description: "Incluye lavado y secado" },
      { name: "Mechas", price: "18000", description: "Californianas o tradicionales" }
    ]
  }
]

GIMNASIO:
---------
menuLabel: "Membresías",
catalog: [
  {
    category: "Planes",
    items: [
      { name: "Mensual", price: "15000", description: "Acceso ilimitado" },
      { name: "Trimestral", price: "40000", description: "Ahorrás $5.000" },
      { name: "Anual", price: "140000", description: "Ahorrás $40.000" }
    ]
  },
  {
    category: "Clases",
    items: [
      { name: "Yoga (clase suelta)", price: "3000", description: "60 minutos" },
      { name: "Spinning (clase suelta)", price: "3500", description: "45 minutos" }
    ]
  }
]

CONSULTORIO MÉDICO/DENTAL:
---------------------------
menuLabel: "Tratamientos",
catalog: [
  {
    category: "Consultas",
    items: [
      { name: "Primera consulta", price: "8000", description: "Incluye diagnóstico completo" },
      { name: "Consulta de seguimiento", price: "5000", description: "" }
    ]
  },
  {
    category: "Tratamientos",
    items: [
      { name: "Limpieza dental", price: "12000", description: "Profilaxis completa" },
      { name: "Blanqueamiento", price: "35000", description: "2 sesiones" }
    ]
  }
]
*/
