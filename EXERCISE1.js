function transformToObjects(listOfNumbers) {
  const result = [];
  
  listOfNumbers.forEach(Element => {
    result.push({ val: Element });
  });
  
  return result;
}

console.log(JSON.stringify(transformToObjects([1, 2, 3]))); // Should  be     [{val: 1}, {val: 2}, {val: 3}]