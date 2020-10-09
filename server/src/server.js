const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const db = require('../models');
const router = require('./products/product.router');

require('dotenv').config();

const PORT = process.env.PORT || 5000;

module.exports = class CRUDServer {
  constructor() {
    this.app = null;
  }

  async start() {
    this.initServer();
    await this.initDbConnection();
    this.initMiddlewares();
    this.initRoutes();
    this.initErrorHandling();
    this.startListening();
  }

  initServer() {
    this.app = express();
  }

  async initDbConnection() {
    try {
      await db.sequelize
        .authenticate()
        .then(() => console.log('Connected to database'));
    } catch (error) {
      console.log('Unable to connect to the database:');
      console.log(error.message);
      process.exit(1);
    }
  }

  initMiddlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(morgan('tiny'));
    this.app.use(cors({ origin: process.env.ALLOWED_ORIGIN }));
  }

  initRoutes() {
    this.app.use('/', router);
  }

  initErrorHandling() {
    this.app.use((err, req, res, next) => {
      const statusCode = err.status || 500;

      res.status(statusCode).send(err.message);
    });
  }

  startListening() {
    this.app.listen(PORT, () => {
      console.log('Started listening on port', PORT);
    });
  }
};
