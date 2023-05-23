const { Course } = require('../models');

const createCourse = async ({ name, description, creationDate, active, duration }) => 
  Course.create({ name, description, creation_date: creationDate, active, duration });

const getCourse = async () => Course.findAll();

const getOneCourse = async (id) => Course.findOne({ where: { id }})

const updateCourse = async (id, { name, description, creationDate, active, duration }) => {
  const [qtdUpdated] = await Course.update(
    { name, description,  creation_date: creationDate, active, duration },
    { where: { id } },
  )

  return qtdUpdated > 0;
}

const removeCourse = async (id) => {
  const qtdRemoved = await Course.destroy({ where: { id } });
  return qtdRemoved > 0;
}

module.exports = {
  createCourse,
  getOneCourse,
  getCourse,
  updateCourse,
  removeCourse,
}