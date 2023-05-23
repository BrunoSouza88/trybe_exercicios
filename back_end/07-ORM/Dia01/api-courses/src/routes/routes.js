const express = require('express');
const courseController = require('../controllers/courseController');

const routers = express.Router();

routers.get('/', courseController.getCourse);
routers.post('/', courseController.createCourse);
routers.get('/:id', courseController.getOneCourse);
routers.put('/:id', courseController.updateCourse);
routers.delete('/:id', courseController.removeCourse);

module.exports = routers;