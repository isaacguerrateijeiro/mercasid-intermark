// Mercasid B2C demo — servidor estático
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Cache moderado para el HTML
app.use(express.static(path.join(__dirname, 'public'), {
  maxAge: '1h',
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.html')) {
      res.setHeader('Cache-Control', 'public, max-age=300');
    }
  }
}));

// SPA fallback (por si en el futuro hay rutas)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`MercaSID demo running on port ${PORT}`);
});
