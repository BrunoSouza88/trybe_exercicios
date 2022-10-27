const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

removeStudent = (name, listOfStudents) => listOfStudents.filter((element) => element !== name ) 



console.log((removeStudent('Ricardo', arrayMyStudents)));