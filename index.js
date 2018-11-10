const express = require('express');

const app = express();

const { PORT = 8080, HOST = 'localhost' } = process.env;

app.listen(PORT, (err) => {
  if (err) {
    console.error('Could not start server: ', err);
    process.exit(1);
  }
  console.log(`Polymock Server started on ${HOST}${(PORT === 80) ? '' : `:${PORT}`}`);
});
