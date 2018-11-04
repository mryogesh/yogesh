'use strict';

const express = require('express');
const path = require('path');
const app = express();

// [START hello_world]
// Say hello!
app.get('/', (req, res) => {
  res.status(200).send('Hello, World!');
});
// [END hello_world]

if (module === require.main) {
  // [START server]
  // Start the server
  const server = app.listen(process.env.PORT || 8080, () => {
    const port = server.address().port;
    console.log(`App listening on port ${port}`);
  });
  // [END server]
}

module.exports = app;
