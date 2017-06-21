const path = require('path');
const express = require('express');

module.exports = {
  app() {
    const app = express();
    const indexPath = path.join(__dirname, '..', 'dist', 'index.html');
    const publicPath = express.static(path.join(__dirname, '..', 'dist'));

    app.use('/dist', publicPath);
    app.get('/', (_, res) => { res.sendFile(indexPath); });
    app.get('*', (_, res) => { res.sendFile(indexPath); });

    return app;
  },
};
