import express from 'express';
import routes from './Routes/routes';
import WarpStorage from './Routes/WarpStorage';

const storage = new WarpStorage()

class App {
  public server;

  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

console.log('Finished creating app')

export default new App().server;