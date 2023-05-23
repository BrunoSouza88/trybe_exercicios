/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 * 
 */

const StudentSchema = (sequelize, DataTypes) => {
  const studentTable = sequelize.define('Student', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    birthday: DataTypes.DATE,
    active: DataTypes.BOOLEAN,
    idCourse: DataTypes.INTEGER,
  },
   {
    tableName: 'students',
    timestamps: false,
    underscored: true,
   }
  )
  studentTable.associate = (models) => {
    studentTable.belongsTo(models.Course, {
      foreignKey: 'idCourse',
      as: 'course',
    })
  }
  return studentTable;
}

module.exports = StudentSchema;