import { Router } from 'express';
import packageController from '../controllers/packageController';

const packageRouter = Router();

packageRouter.patch('/packages/:id', packageController.updatePackage);
packageRouter.delete('/packages/:id', packageController.deletePackage);

export default packageRouter;