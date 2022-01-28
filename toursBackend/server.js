
const dotenv = require('dotenv');
const app = require('./app');
const http = require('http');
const path = require('path');
// socket io 
const socket = require('socket.io');
const server = http.Server(app);


dotenv.config({ path: './config.env' });

process.on('unhandledExeption',err =>{ //brocken db handelError
  console.log(err.name , err.message);
    process.exist(1);
});

// console.log(process.env.NODE_ENV);
// console.log(app.get('env'));
// console.log(process.env);

const appPath = path.join(__dirname,'..','dist');
const port = process.env.PORT || 4000;
server.listen(4000);
// const server = app.listen(port, () => {
//   console.log(`App running on port ${port}...`);
// });



process.on('unhandledRejection',err => { //brocken db handelError
  console.log(err.name , err.message);
  server.close(() =>{
    // process.exist(1);
  });
});