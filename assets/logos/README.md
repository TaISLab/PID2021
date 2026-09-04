# Logos del bloque de financiación

`financiacion-logos-web.jpg` es el fichero usado por `index.html` (cabecera y pie de página). Es una versión redimensionada (2400 px de ancho, ~125 KB) del original subido por el usuario, para no servir 3,5 MB en cada carga de página.

`MICIU+Cofinanciado+AEI.jpg` es el fichero original tal cual se subió (15237×2953 px, ~3,5 MB): imagen oficial combinada con los tres logos en el orden exigido por la normativa AEI (MICIU, emblema UE con el texto "Cofinanciado por la Unión Europea", AEI). Se conserva en el repositorio sin modificar como referencia de alta resolución (útil, por ejemplo, para materiales impresos o como evidencia de la versión original para la justificación).

Si en el futuro se dispone de los tres logos por separado (en vez de la imagen combinada), se puede sustituir `financiacion-logos-web.jpg` por tres `<img>` independientes en `index.html` con su propio texto alternativo:

- "Ministerio de Ciencia, Innovación y Universidades"
- "Cofinanciado por la Unión Europea"
- "Agencia Estatal de Investigación"

Mientras se use la imagen combinada, el texto alternativo (atributo `alt`) de `index.html` los recoge a los tres juntos, separados por guiones largos, para cumplir el requisito de accesibilidad del documento de encargo.
