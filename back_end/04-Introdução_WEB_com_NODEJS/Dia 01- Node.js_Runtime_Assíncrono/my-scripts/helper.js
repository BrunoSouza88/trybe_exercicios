const BMI = (weight, height) => {
  data = weight/Math.pow(height, 2);
  console.log(data);
  return data;
}

module.exports = {
  BMI
}