const express = require('express');

const app = express();

app.get('/', (req, res) => {
  console.log('Request received!');
  res.json({ message: 'Hello World!' });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
