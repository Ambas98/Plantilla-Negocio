# Nuevo Cliente: $ARGUMENTS

Onboarding técnico para: $ARGUMENTS
(Asumir que el cliente ya confirmó y pagó)

1. Crear branch:
```bash
git checkout main && git pull origin main
git checkout -b cliente/$ARGUMENTS
```

2. Activar skill nuevo-cliente: configurar siteConfig.ts completo.

3. Activar skill schema-restaurant: generar SchemaOrg desde siteConfig.ts.

4. Verificar:
```bash
npm run build
```
No continuar si falla.

5. Commit inicial:
```bash
git add -A
git commit -m "init($ARGUMENTS): setup inicial del proyecto"
git push origin cliente/$ARGUMENTS
```

6. docs/clientes.md → estado: EN PROGRESO, fecha inicio: hoy.

Confirmar: "✅ $ARGUMENTS configurado. Branch: cliente/$ARGUMENTS"
Listar datos que todavía faltan si quedan pendientes.
