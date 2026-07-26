# Changelog

All notable changes to this project are documented in this file.

## [initial-games] — Primer lanzamiento

### Estructura general
- Unificación de dos proyectos previos (MathGames y LettersGames) en una sola app "Juegos Educativos".
- Hub principal (`public/index.html`) con categorías: **Matemáticas**, **Letras** y **Ciencia**.
- Cada categoría tiene su propio índice (`public/<categoria>/index.html`) con botón "← INICIO" para volver al hub.
- Servidor único (`server.js`) sirviendo todo el contenido estático desde `public/`.

### Categoría Matemáticas (10 juegos)
- Juegos heredados: Salto Matemático, Matemática con Teclas, Tiro al Blanco, Ábaco Matemático, Rompecabezas de Sumas, Rana Saltarina, Pesca Matemática.
- **Suma con Emojis**: cuenta grupos de emojis idénticos y resuelve la suma, con ecuación numérica alineada debajo de cada grupo.
- **Secuencia de Números**: encuentra el número faltante en una secuencia (1 en 1, 2 en 2, 5 en 5, 10 en 10, mixto); reintento automático en la misma pregunta al fallar, sin revelar la respuesta.
- **Práctica de Resta**: el jugador escribe el resultado con teclado físico o numpad en pantalla; auto-validación al completar los dígitos esperados.
- **Suma de Dados**: lanza 2 dados con animación de 4 segundos en 3 fases (giro rápido, rebote, asentamiento) y resuelve la suma.

### Categoría Letras (5 juegos)
- Empareja las Letras, Construye la Palabra, Revienta las Burbujas, Sopa de Letras, Banderas del Mundo.
- **Sopa de Letras**: lista de palabras al costado del tablero; palabras solo en sentido horizontal (izquierda→derecha) o vertical (arriba→abajo), nunca invertidas.
- **Banderas del Mundo**: botón de lectura en voz alta (Web Speech API) con preferencia por voces latinoamericanas y velocidad reducida para mejor comprensión infantil.

### Categoría Ciencia (5 juegos) — nueva categoría
- **Ordena los Planetas**: arrastra los 8 planetas en el orden correcto de distancia al Sol; cada acierto pone a ese planeta a orbitar en tiempo real alrededor del Sol (velocidad proporcional a la distancia orbital).
- **Engranajes en Cadena**: agrega engranajes (de tamaño aleatorio, dibujados con CSS real —no emoji— con dientes, cuerpo y eje) hasta lograr que el engranaje meta gire en el sentido pedido; cada engranaje alterna sentido respecto al anterior, enseñando el concepto físico real de engranajes acoplados.
- **Cierra el Circuito**: arrastra piezas para cerrar un circuito eléctrico y encender una lámpara o motor; incluye piezas señuelo (cable roto, interruptor abierto) que no conducen.
- **Cadena de Imanes**: coloca imanes tipo dominó respetando la polaridad (polos opuestos se atraen, polos iguales se repelen); los imanes se pueden girar y son dibujados con mitades N/S reales en CSS.
- **Equilibra la Balanza**: agrega pesas al lado derecho para igualar el peso fijo del lado izquierdo; la barra de la balanza se inclina en tiempo real según la diferencia de peso, hasta quedar horizontal.

### Correcciones y ajustes de UX
- Scroll habilitado en los tres hubs (antes bloqueado por `overflow: hidden`).
- Botón "SIGUIENTE" reposicionado de forma consistente debajo de la tarjeta principal del juego en todos los minijuegos nuevos.
- Patrón unificado de reintento sin revelar la respuesta correcta al fallar (Secuencia de Números, Suma de Dados, Engranajes).
- Corrección de bugs de referencias a elementos eliminados que rompían silenciosamente la validación de victoria (Engranajes, Balanza).
- Ajuste de geometría de la balanza para evitar que la bandeja se saliera del margen visual en inclinaciones extremas.
- Quitados los checks (✓) verdes redundantes del numpad de Resta a favor de auto-validación.
- Eliminadas las flechas de incremento/decremento nativas del input numérico de Resta.
- Renombrado del hub principal de "MicaGames" a "Juegos Educativos".

### Notas técnicas
- Sin frameworks ni build tools: HTML/CSS/JS vanilla en archivos autocontenidos por juego.
- Fondo animado (estrellas + símbolos flotantes) y sistema de confetti reutilizados de forma consistente en todos los juegos.
- Todo el contenido de la interfaz está en español, con tono lúdico y exclamativo pensado para niños de primaria.
