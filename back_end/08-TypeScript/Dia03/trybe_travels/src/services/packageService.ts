import PackageModel from '../database/models/Package.model';
import { Package } from '../types/Package';
import { ServiceResponse } from '../types/ServiceResponse';

async function updatePackages(updatePackage: Package): Promise<ServiceResponse<Package>> {
  const packageToUpdate = await PackageModel.findByPk(updatePackage.id);
  if (!packageToUpdate) {
    return { status: 'NOT_FOUND', data: { message: 'Pacote não encontrado!' } };
  }
  await PackageModel.update(updatePackage, { where: { id: updatePackage.id } });
  const packageUpdated = await packageToUpdate.reload();
  return { status: 'SUCCESSFUL', data: packageUpdated.dataValues };
}

async function deletePackages(id: number): Promise<ServiceResponse<{ message: string }>> {
  const packageToDelete = await PackageModel.findByPk(id);
  if (!packageToDelete) {
    return { status: 'NOT_FOUND', data: { message: 'Pacote não encontrado!' } };
  }
  await PackageModel.destroy({ where: { id } });
  return { status: 'SUCCESSFUL', data: { message: 'Pacote deletado com sucesso!' } };
}

export default { updatePackages, deletePackages };