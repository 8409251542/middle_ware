const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 3000;

const requestLogger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const ip = req.ip;
  const timestamp = new Date().toISOString();

  console.log(`[${timestamp}] ${method} ${url} - ${ip}`);

  next();
};

app.use(requestLogger);

app.use(morgan('combined'));

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/test', (req, res) => {
  res.send('Test route');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
