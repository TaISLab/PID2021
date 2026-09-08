# Web del proyecto CONCERTO (PID2021-127221OB-I00)

Página estática, biligüe (ES/EN), del proyecto CONCERTO — TaISLab, Universidad de Málaga.

## Estructura

```
index.html            # página única, con anclas de navegación y selector de idioma
assets/css/style.css  # estilos
assets/js/main.js     # selector de idioma (ES/EN), recuerda la preferencia en localStorage
assets/logos/         # logos de financiación (MICIU/UE/AEI) e institucionales (UMA, IMECH.UMA) — ver README propio
assets/img/           # fotos del demostrador y prototipos
assets/docs/          # dípticos de difusión ES/EN, en versión para imprimir y para pantalla
```

## Pendientes

1. **Vídeo del demostrador** (entregable E5.3): hay un hueco reservado en la sección "Demostrador" (`#demostrador`) a la espera de grabarse.

El resto de pendientes que hubo durante la construcción de la página (fotos del demostrador, repositorios de control compartido, comunidad Zenodo, URL definitiva) ya están resueltos.

## Publicada con GitHub Pages

El sitio es HTML/CSS/JS estático sin build, servido con GitHub Pages (Settings → Pages → Deploy from a branch → `main` → `/root`) en **https://taislab.github.io/PID2021/**, que es la URL oficial fijada en `index.html` (`<link rel="canonical">` y `schema.org`/JSON-LD). No cambiarla.

## Evidencia para la justificación

Capturar en PDF o imagen la página completa y conservar la URL: es el soporte gráfico que se aporta a la AEI como acreditación del cumplimiento de las normas de publicidad.
