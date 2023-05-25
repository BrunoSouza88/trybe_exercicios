import { Request, Response } from 'express';
import packageService from '../services/packageService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

const updatePackage = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { destination, category, price } = req.body;
  const serviceResponse = await packageService.updatePackages({ id, destination, category, price });
  if (serviceResponse.status !== 'SUCCESSFUL') {
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }
  return res.status(200).json(serviceResponse.data);
};

const deletePackage = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const serviceResponse = await packageService.deletePackages(id);
  if (serviceResponse.status !== 'SUCCESSFUL') {
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }
  return res.status(204).json();
};

export default { updatePackage, deletePackage };