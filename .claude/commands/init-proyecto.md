# Init Proyecto: $ARGUMENTS

Iniciá el entorno de trabajo para el nuevo cliente: $ARGUMENTS

1. Verificar rama actual y sincronizar main:
```bash
git checkout main && git pull origin main
```

2. Crear branch del cliente (usar nombre normalizado sin espacios ni tildes):
```bash
git checkout -b cliente/$ARGUMENTS
```
Si ya existe: `git checkout cliente/$ARGUMENTS && git pull`

3. Activar skill nuevo-cliente para configurar siteConfig.ts y listar datos faltantes.

4. Verificar build:
```bash
npm run build
```

5. Actualizar docs/clientes.md → estado: EN PROGRESO, fecha de inicio: hoy.

6. Confirmar: "✅ Proyecto iniciado para $ARGUMENTS. Branch activa: cliente/$ARGUMENTS"

Nota: normalizar el nombre para la branch: "La Parrilla de Juan" → la-parrilla-juan
