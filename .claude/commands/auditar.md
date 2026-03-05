# Auditar

Audit rápido del proyecto en la branch actual.

1. Verificar contexto:
```bash
git branch --show-current
git log --oneline -5
```
Mostrar qué cliente y últimos commits.

2. Build:
```bash
npm run build
```
Si falla: reportar y detener.

3. Auditorías en paralelo:
Invocar simultáneamente code-reviewer y seo-auditor.

4. Guardar reporte:
Crear docs/reportes/audit-[nombre]-[fecha].md con los resultados.

5. Resumen ejecutivo con puntuación, issues críticos y menores.
