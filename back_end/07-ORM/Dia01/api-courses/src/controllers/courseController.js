const courseService = require("../services/courseService");

const createCourse = async (req, res) => {
  const newCourse = await courseService.createCourse(req.body);

  return res.status(201).json(newCourse);
}

const getCourse = async (_req, res) => {
  const courses = await courseService.getCourse();
  return res.status(200).json(courses);
}

const getOneCourse = async (req, res) => {
  const { id } = req.params;
  const oneCourse = await courseService.getOneCourse(id);

  return res.status(200).json(oneCourse);
}

const updateCourse = async(req, res) => {
  const { id } = req.params;
  const isUpdated = await courseService.updateCourse(id, req.body);

  if(!isUpdated) {
    return res.status(404).json({ message: `Curso ${id} não encontrado`})
  }

  return res.status(200).json({ message: `Curso ${id} atualizado com sucesso`});
}

const removeCourse = async (req, res) => {
  const { id } = req.params;
  const isDeleted = await courseService.removeCourse(id);

  if(!isDeleted) {
    res.status(404).json({ message: `Curso ${id} não encontrado`})
  }
  return res.status(200).json({ message: `Curso ${id} removido com sucesso`});
}

module.exports = {
  createCourse,
  getOneCourse,
  getCourse,
  updateCourse,
  removeCourse,
}