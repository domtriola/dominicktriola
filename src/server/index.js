import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import config from '../config';
import App from '../client/App';
import html from '../client/html';

const app = express();
const { port } = config;

app.use(express.static('public'));

app.get('/', (req, res) => {
  const sheet = new ServerStyleSheet();

  try {
    const body = renderToString(sheet.collectStyles(<App />));
    const styles = sheet.getStyleTags();

    res.send(
      html({
        body,
        styles,
      }),
    );
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  } finally {
    sheet.seal();
  }
});

app.listen(port);
// eslint-disable-next-line no-console
console.log(`Serving at http://localhost:${port}`);
