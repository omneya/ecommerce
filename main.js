const app = require('./routes');
const dbConnection = require('./libs/mysql');

dbConnection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('DataBase connection established :' + dbConnection.threadId);

  require('./server/startup')
});
