import express from 'express';

import BooksController from './controllers/BooksController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();
const booksController = new BooksController();
const connectionsController = new ConnectionsController();

routes.get('/books', booksController.index);
routes.post('/books', booksController.create);

routes.get('/connections', connectionsController.index)
routes.post('/connections', connectionsController.create)

export default routes;