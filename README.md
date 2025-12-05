# ADVERTENCIA AL VISITANTE DURMIENTE — Repo del Sitio

> **ADVERTENCIA:** si has venido buscando respuestas rápidas, fórmulas o atajos, este repo no te dará nada útil.  
> Trae, en cambio, archivos que se comportan como espejos sucios y un agujero negro con buena voluntad poética.

Este repositorio contiene los activos del sitio web *“Advertencia al visitante durmiente”*: una mezcla de antipoesía, diseño synthwave y pequeñas travesuras UX.  
Es un experimento visual y verbal que intenta —con humor y sin soluciones mágicas— provocar una mención honesta entre tu pecho y tu cabeza.  

Si Nicanor Parra hubiera diseñado frontends y Krishnamurti dejara notas en los comentarios, quizá saldría algo parecido a esto.

---

## Qué hay aquí (estructura)

**`// ...`**
/
├─ /css
│  ├─ /base
│  │  ├─ _variables.css
│  │  ├─ reset.css
│  │  └─ t-typography.css
│  ├─ /layout
│  │  ├─ l-container.css
│  │  ├─ l-header.css
│  │  ├─ l-footer.css
│  │  └─ l-grid.css
│  └─ /modules
│     ├─ c-hero.css
│     ├─ c-poema.css
│     ├─ c-questions.css
│     ├─ c-reset-reality.css
│     └─ c-blackhole.css
├─ /js
│  └─ blackhole.js
├─ index.html
└─ README.md
'''txt
**`// ...`**

yaml
Copiar código

---

## Descripción corta (para el curioso y el apurado)

Un sitio que te recibe con una advertencia, te hace sentir incómodo con preguntas íntimas y, si insistes demasiado, te devora estéticamente con un agujero negro que actúa como metáfora y como demo técnica.  
No arregla tu vida. Probablemente la deja más clara. O la rompe. Es parte del plan.

---

## Instalación (porque los repositorios también necesitan rituales)

Clona el repo:

```bash
git clone <tu-repo-url>.git
cd <tu-repo>
Abrir localmente (opción simple):

Abre index.html en tu navegador (doble clic).

Si quieres servir con un servidor local (recomendado para probar fetch, rutas o módulos):

bash
Copiar código
# con Python 3
python -m http.server 8000
# luego abrir http://localhost:8000
Uso (pequeña guía práctica, sin autoayuda barata)
Edita _variables.css para cambiar la paleta (púrpura neón y lima shock están por defecto).

El c-blackhole.css contiene estilos y animaciones. El comportamiento de “absorción” se dispara con hover o con el script mínimo (/js/blackhole.js) que añade la clase .absorbing al <body>.

Las “Preguntas no preguntadas” se definen en c-questions.css y en el HTML; son interactivas sin JavaScript (checkboxes / details / labels).

Si pruebas la absorción y la pantalla no se mueve, asegúrate de:

cargar js/blackhole.js antes de </body>,

que --collapse-duration (CSS) coincida con DURATION (ms) en el JS.

Notas técnicas rápidas
El efecto de “absorción” combina CSS avanzado (animaciones, transform, filter) con un script de ~40 líneas que sincroniza el scrollTo del navegador con la animación visual — porque mover la barra de scroll sin JS no es posible (los navegadores son así de razonables).

Se utiliza BEM ligero para mantener todo legible (c-blackhole, c-blackhole__core, etc.).

Se han evitado dependencias; solo hay un enlace a FontAwesome para los íconos. Si prefieres nada externo, borra el <link> en index.html.

Contribuir (si tienes ganas o mala intención creativa)
Aporta:

Ideas para preguntas (no esoterismo barato; aporte poético + pulso real).

Variantes del blackhole (más sutil, más lento, en modo móvil friendly).

Mejoras de accesibilidad (las animaciones son bonitas, pero pueden marear; añadamos toggles prefers-reduced-motion).

Workflow sugerido:

bash
Copiar código
git checkout -b feat/nombre-astuto
# editar
git add .
git commit -m "feat: poema que pica como limón"
git push origin feat/nombre-astuto
# Abrir pull request, incluir por favor una línea explicativa poética.
Licencia
Si lo vas a usar para ganar dinero: úsalo.
Si lo quieres modificar: perfecto.
Si vas a atribuirlo: un crédito en alguna parte (tipo: “ideas prestadas a un antiparrano digital”) es agradable, pero no obligatorio.

En sentido práctico, licencia MIT: haz lo que quieras, compártenos el milagro.

text
Copiar código
MIT License
Advertencia final (poética pero honesta)
“Si entras buscando una receta, te vas con una pregunta.
Si entras con prisa, te vas con menos prisa.
Si entras con calma, quizá te devore una metáfora y te deje algo de luz.”

Hecho con humor, algo de insolencia y un poco de cuidado.
— Si algo explota, es pura coincidencia. Si algo cambia, será por descuido tuyo.

Contacto
Si quieres que le añada una versión aún más peligrosa (efecto de espaguetificación CSS-only, o lectura de respuestas mediante IA), abre un issue o envía un correo a la dirección que aparece en tu perfil.
No prometemos iluminación, solo buen código malicioso-poético.

Fin del README. Vuelva mañana si desea otro poema, mejor animación o la versión mobile del agujero negro.
