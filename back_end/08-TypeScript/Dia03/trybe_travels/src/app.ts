import express, { Request, Response } from 'express';
import packageRouter from './Routes/packageRoutes';

const app = express();

app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
  res.status(200).send('Aplicação está funcionando!');
});

app.use(packageRouter);

export default app;
