# Web del proyecto CONCERTO (PID2021-127221OB-I00)

Página estática, biligüe (ES/EN), del proyecto CONCERTO — TaISLab, Universidad de Málaga.

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
2. ~~Fotos del demostrador y prototipos~~ — hecho: ya hay 4 fotos reales en `assets/img/`, publicadas con autorización de las personas que aparecen.
3. **Repositorio `sc_human_robot_joints`**: sigue marcado como "pendiente de hacerse público" en `index.html` (sección Código y datos). Convertir en enlace cuando se publique.
4. ~~Comunidad Zenodo~~ — hecho: enlazada en la sección "Código y datos", con el primer dataset (DOI) y el dataset de Kaggle asociado.
5. ~~URL definitiva~~ — decidido: la web oficial es `https://taislab.github.io/PID2021/`, ya fijada en `index.html` (`<link rel="canonical">` y `schema.org`/JSON-LD).

## Publicar en GitHub Pages

El sitio es HTML/CSS/JS estático sin build. Para publicarlo con GitHub Pages:

1. Ajustes del repositorio → Pages → Deploy from a branch.
2. Elegir la rama que corresponda (p. ej. `main`) y carpeta raíz (`/`).
3. Confirmar que la URL resultante coincide con la fijada como canónica, o actualizarla en `index.html` si se sirve bajo otra ruta (p. ej. como subdirectorio del sitio del laboratorio en lugar de repositorio independiente).

## Evidencia para la justificación

Una vez publicada la página definitiva (con los logos oficiales ya colocados), capturar en PDF o imagen la página completa y conservar la URL: es el soporte gráfico que se aporta a la AEI como acreditación del cumplimiento de las normas de publicidad.
