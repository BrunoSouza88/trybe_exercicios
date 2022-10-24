const repeat = (number, action) => {
    for (let count = 1; count <= number; count += 1) {
      action(count);
    }
  };
  
  repeat(50, console.log);