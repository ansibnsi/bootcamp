const getMean = (array) => {
  let total = 0;
  for (let item of array) {
    total += item;
  }
  
  return total / array.length;
} 
