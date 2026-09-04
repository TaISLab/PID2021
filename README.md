# Web del proyecto CONCERTO (PID2021-127221OB-I00)

Página estática, biligüe (ES/EN), del proyecto CONCERTO — TaISLab, Universidad de Málaga. Construida a partir de `Especificacion_web_proyecto_CONCERTO.md` (documento de encargo).

## Estructura

```
index.html            # página única, con anclas de navegación y selector de idioma
assets/css/style.css  # estilos
assets/js/main.js     # selector de idioma (ES/EN), recuerda la preferencia en localStorage
assets/logos/         # imagen oficial combinada de los tres logos (ver README propio)
assets/img/           # carpeta reservada para fotos/vídeo del demostrador (vacía por ahora)
```

## Pendiente antes de publicar

1. **Vídeo del demostrador** (entregable E5.3): hay un hueco reservado en la sección "Demostrador" (`#demostrador`) a la espera de grabarse.
2. **Fotos del demostrador y prototipos**: añadir a `assets/img/` y sustituir los recuadros `.gallery-placeholder` en `index.html`, revisando que no se vea el rostro de ningún participante (protocolo CEUMA).
3. **Repositorio `sc_human_robot_joints`**: aparece marcado como "pendiente de hacerse público"; convertir en enlace cuando se publique.
4. **Comunidad Zenodo** del laboratorio: enlazar en la sección "Código y datos" cuando se cree.
5. **URL definitiva**: `index.html` fija de momento `https://taislab.uma.es/projects/concerto` como URL canónica provisional (metaetiqueta `<link rel="canonical">` y `schema.org`/JSON-LD). Es la URL de ejemplo del documento de encargo; confirmarla o cambiarla **antes** de la justificación final (no debe cambiar después, se va a citar como evidencia ante la AEI).

## Publicar en GitHub Pages

El sitio es HTML/CSS/JS estático sin build. Para publicarlo con GitHub Pages:

1. Ajustes del repositorio → Pages → Deploy from a branch.
2. Elegir la rama que corresponda (p. ej. `main`) y carpeta raíz (`/`).
3. Confirmar que la URL resultante coincide con la fijada como canónica, o actualizarla en `index.html` si se sirve bajo otra ruta (p. ej. como subdirectorio del sitio del laboratorio en lugar de repositorio independiente).

## Evidencia para la justificación

Una vez publicada la página definitiva (con los logos oficiales ya colocados), capturar en PDF o imagen la página completa y conservar la URL: es el soporte gráfico que se aporta a la AEI como acreditación del cumplimiento de las normas de publicidad.
