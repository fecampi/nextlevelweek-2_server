import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();
const classesController = new ClassesController();
const connectionsController = new ConnectionsController();

routes.get('/classes', classesController.index)
    .post('/classes', classesController.create)
    .post('/connections', connectionsController.create)
    .get('/connections', connectionsController.index)

export default routes;