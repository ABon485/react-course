let originalArray = [1, 2, 3, 4, 5];

function updateArray(array, index, newValue) {
    let newArray = [...array]; // Cloning the original array
    newArray[index] = newValue;
    return newArray;
  }

let updatedArray = updateArray(originalArray, 2, 10);

console.log("Original array:", originalArray); // original array should not be modified...
console.log("Updated array:", updatedArray);