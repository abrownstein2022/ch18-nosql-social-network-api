const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');
const mongoose = require('mongoose');
// markdown-to-html converter
const marked = require('marked')
// fs and path are included in node
const fs = require('fs')
const path = require('path')

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);


// read API docs file
// get the current path to "." - here
const __dir = fs.realpathSync('.')
// uise path.join because it is more accurate than '' + ''
const apiData = fs.readFileSync(path.join(__dir, '/API_DOCS.md'), { encoding: 'utf-8'})
// _notes\API.md
// C:\Users\alexi\bootcamp\ch18-nosql-social-network-api\_notes\API.md


// if user navigates to wrong route - send API docs
app.use((req, res) => res.send(marked.parse(`# No Route Found\n"${req.path}"\n---\n${apiData}`)));

mongoose.connection.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
