# MercaSID — Canal Digital B2C

Demo navegable de la app móvil de suscripciones MercaSID, presentada por **Intermark Consumer Market**.

Es una single-page demo: un HTML standalone (`public/index.html`) con todas las imágenes embebidas en base64, sin dependencias externas en runtime. El servidor Express solo lo sirve.

## Desarrollo local

```bash
npm install
npm start
# abrir http://localhost:3000
```

## Deploy

Configurado para Render como Web Service Node. Push a `main` dispara auto-deploy gracias a `render.yaml`.

## Stack

- Node 20 + Express (servidor estático)
- HTML + CSS + JS vanilla (cliente)
- Hosting: Render (free tier)
