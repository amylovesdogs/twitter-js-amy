const express = require( 'express' );
const app = express(); // creates an instance of an express application
const port = process.env.PORT || 8080;
const chalk = require('chalk');
const volleyball = require('volleyball');

app.use(volleyball);

app.use('/', function (req,res,next){
    if (req.method === "GET") {
        console.log(chalk.green(`Server received request of ${req.method} on URL ${req.originalUrl}`));
    } else {
       chalk.blue(console.log(`Server received request of ${req.method} on URL ${req.originalUrl}`)); 
    }
    next();
});

app.use('/news', function (req,res,next){
    chalk.blue(console.log(`Welcome to the world of news`)); 
    next();
});

app.get('/', function (req, res) {
  console.log("responding with 200");
  res.send('Hello World!');
})

app.get('/news', function (req, res) {
  console.log("responding with 200");
  res.send('Trump takes over the world!');
})

app.listen(port);
console.log(`Listening on port: ${port}`);

chalk.green(
    'I am a green line ' +
    chalk.blue.underline.bold('with a blue substring') +
    ' that becomes green again!'
);
