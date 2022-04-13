const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');

const loginController = require('./src/controllers/loginController');

//Rota da home
route.get('/', homeController.index);

//Rotas de loging
route.get('/login/index', loginController.index);
route.post('/login/register', loginController.index);

module.exports = route;
