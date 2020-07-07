import express from 'express';
import controller from '../controllers/pokemonController.js';

const app = express();

app.post('/pokemon/', controller.create);
app.get('/pokemon/', controller.findAll);
app.get('/pokemon/:id', controller.findOne);
app.put('/pokemon/:id', controller.update);
app.delete('/pokemon/:id', controller.remove);
app.delete('/pokemon/', controller.removeAll);

export { app as pokemonRouter };
