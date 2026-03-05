# Prospectar: $ARGUMENTS

Pipeline completo de prospección para: $ARGUMENTS

## Paso 1: Research
Invocar subagent researcher:
"Investigar el restaurante '$ARGUMENTS' en San Juan, Argentina. Buscar rating Google Maps, presencia en redes, si tiene sitio web actual. Guardar resultado en docs/propuestas/research-[nombre-normalizado].md"

Esperar que termine antes de continuar.

## Paso 2: Propuesta
Invocar subagent proposal-writer:
"Crear propuesta comercial para '$ARGUMENTS' usando los datos del research. Guardar en docs/propuestas/propuesta-[nombre-normalizado].md"

## Paso 3: Confirmar con Nicolás
Mostrar:
- Resumen del research (rating, tiene web, oportunidad principal)
- Preview de la propuesta generada
- Precio recomendado

Preguntar: "¿Enviar por WhatsApp, por Gmail, o guardamos y enviás vos?"

## Paso 4: Envío (si confirma)
WhatsApp MCP o Gmail MCP según lo que elija.

## Paso 5: Actualizar CRM
docs/clientes.md → sección Pipeline: agregar prospecto con fecha y próximo paso.
