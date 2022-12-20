const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');
const mongoose = require('mongoose');
// markdown-to-html converter
const marked = require('marked')
// fs and path are included in node
const fs = require('fs')
const path = require('path')

//chnaged 3001 to 3000 below to work with insomnia that defaults to 3000
//const PORT = process.env.PORT || 3001;
const PORT = process.env.PORT || 3000;
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

//- tell express to use a custtom error handler
const errorHandler = (err, req, res, next) => {
  console.error('There was an error with the express server. You may need to restart')
  console.error(err)
}

app.use(errorHandler)

mongoose.connection.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});

// mongoose isa type of event emitter (can subscribe and listen for events)
// monogoose.connection.on('error', (err) => console.log('>>> ERROR:', err))
