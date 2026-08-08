# educatives_primary_school_games
Juegos educativos para nivel inicial de primaria

## Cómo ejecutar

Requiere [Node.js](https://nodejs.org/). No hay dependencias que instalar.

```bash
node server.js
```

Esto levanta un servidor local en `http://localhost:3000` (también accesible desde otros dispositivos en la misma red Wi-Fi, usando la IP que se muestra en la consola). Podés cambiar el puerto con la variable de entorno `PORT`:

```bash
PORT=8080 node server.js
```

### Con Docker

También podés correrlo en un contenedor, sin instalar Node localmente:

```bash
docker build -t educatives-primary-school-games .
docker run -p 3000:3000 educatives-primary-school-games
```

O con Docker Compose:

```bash
docker compose up --build
```

Esto levanta el servidor en `http://localhost:3000` igual que corriéndolo nativo. Para usar otro puerto en el host: `docker run -p 8080:3000 educatives-primary-school-games`.

## Juegos disponibles

### 🔢 Matemáticas

**¡Salto Matemático!** — Salta sobre la respuesta correcta y sube lo más alto que puedas.
![Salto Matemático](public/screenshots/math-math-jump.png)

**Matemática con Teclas** — Resuelve A + ? = B presionando la tecla numérica correcta.
![Matemática con Teclas](public/screenshots/math-keyboard-math.png)

**¡Tiro al Blanco!** — Revienta el globo con la respuesta correcta usando un arco.
![Tiro al Blanco](public/screenshots/math-target-shot.png)

**Ábaco Matemático** — Usa el ábaco para contar las bolitas y encontrar la suma.
![Ábaco Matemático](public/screenshots/math-abacus-math.png)

**Rompecabezas de Sumas** — Coloca las fichas en el lugar correcto para completar las ecuaciones.
![Rompecabezas de Sumas](public/screenshots/math-math-puzzle.png)

**Rana Saltarina** — Haz saltar a la rana al nenúfar con la respuesta correcta.
![Rana Saltarina](public/screenshots/math-frog-jump.png)

**Pesca Matemática** — Lanza el anzuelo y atrapa el pez con la respuesta correcta.
![Pesca Matemática](public/screenshots/math-fishing-math.png)

**Suma con Emojis** — Cuenta los emojis y elige la respuesta correcta.
![Suma con Emojis](public/screenshots/math-emoji-sum.png)

**Secuencia de Números** — Encuentra el número que falta en la secuencia.
![Secuencia de Números](public/screenshots/math-sequence.png)

**Práctica de Resta** — Escribe el resultado correcto de la resta.
![Práctica de Resta](public/screenshots/math-subtraction.png)

**Suma de Dados** — Lanza los dados y suma los puntos.
![Suma de Dados](public/screenshots/math-dice-sum.png)

**Entrenamiento de la Celeste** — Suma las pelotas del canasto y el carrito para empezar el partido.
![Entrenamiento de la Celeste](public/screenshots/math-soccer-sum.png)

**Dictado de Números** — Escucha el número y escríbelo con las cifras correctas.
![Dictado de Números](public/screenshots/math-number-dictation.png)

### 🔤 Letras

**¡Empareja las Letras!** — Voltea las cartas y empareja las letras mayúsculas con las minúsculas.
![Empareja las Letras](public/screenshots/letters-letter-match.png)

**Construye la Palabra** — Arrastra las letras en el orden correcto para formar la palabra.
![Construye la Palabra](public/screenshots/letters-word-builder.png)

**¡Revienta las Burbujas!** — Revienta la burbuja con la letra correcta antes de que se escape.
![Revienta las Burbujas](public/screenshots/letters-phonics-pop.png)

**Sopa de Letras** — Encuentra los nombres de animales escondidos en la sopa de letras.
![Sopa de Letras](public/screenshots/letters-word-search.png)

**Banderas del Mundo** — Completa el nombre del país arrastrando las letras que faltan.
![Banderas del Mundo](public/screenshots/letters-flag-spelling.png)

**Dictado de Cuentos** — Escucha la frase de un cuento famoso y escríbela correctamente.
![Dictado de Cuentos](public/screenshots/letters-dictado.png)

**La Receta** — Lee la receta y busca los ingredientes correctos para cocinar la comida.
![La Receta](public/screenshots/letters-receta.png)

### 🔬 Ciencia

**Ordena los Planetas** — Ordena los planetas del sistema solar y obsérvalos orbitar.
![Ordena los Planetas](public/screenshots/science-solar-system.png)

**Engranajes en Cadena** — Descubre cuántos engranajes se necesitan para girar en el sentido correcto.
![Engranajes en Cadena](public/screenshots/science-gears.png)

**Cierra el Circuito** — Arrastra las piezas para cerrar el circuito y encender la lámpara.
![Cierra el Circuito](public/screenshots/science-circuit.png)

**Cadena de Imanes** — Une los imanes según su polaridad para que se atraigan.
![Cadena de Imanes](public/screenshots/science-magnets.png)

**Equilibra la Balanza** — Agrega pesas para equilibrar la balanza.
![Equilibra la Balanza](public/screenshots/science-balance.png)

### 🎨 Arte

**Lienzo de Emojis** — Arrastra emojis y cambia sus colores para crear tu propia obra de arte.
![Lienzo de Emojis](public/screenshots/art-emoji-canvas.png)
