const express = require('express');
const app = express();
const db = require("./model");
const routes = require('./router/artical.router.js');
const cors = require("cors");



var corsOptions = {
  origin: "http://localhost:4000"
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get ('/', (req, res) => {
    res.json('Home Page');
});

app.use('/api', routes);

db.sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});

app.listen(4000,(err) => {
console.log('Your port is listing 4000')
});