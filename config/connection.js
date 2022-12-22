const mongoose = require('mongoose');

const connectionString = 'mongodb://127.0.0.1:27017/social_network_db'; 

  /*
 [MONGOOSE] DeprecationWarning: Mongoose: the `strictQuery` option will be switched back to `false` by default in Mongoose 7. 
 Use `mongoose.set('strictQuery', false);` if you want to prepare for this change. Or use `mongoose.set('strictQuery', true);` 
 to suppress this warning.
  */
mongoose.set('strictQuery', false)
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// also safe to lisen for error events 
mongoose.connection.on('error', (data) => {
  console.log('MONGOOSE CONNECTION ERROR:', data)
})

// module.exports = connection;
