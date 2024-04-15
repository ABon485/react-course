let students = [
    { id: 1, name: "Trang", grade: "A" },
    { id: 2, name: "Hai", grade: "B" },
    { id: 3, name: "Linh", grade: "C" },
  ];
  
  function updateStudentGrade(studentsArray, idToUpdate, newGrade) {
    // Step 1 : Use the findIndex method to find the index of the student with the provided ID in the studentsArray.
    const indexToUpdate = studentsArray.findIndex((student)=>student.id === idToUpdate);
    if (indexToUpdate !== -1) {
      // Step 2 : If the student with the provided ID is found , create a copy of the original array using the spread operator.
      const updatedStudentsArray = [...studentsArray];
      // Step 3 : Update the grade of the student at the found index in the copied array.
      updatedStudentsArray[indexToUpdate].grade =newGrade;
      return updatedStudentsArray;
    } else {
      // Step 4 :  If the student with the provided ID is not found, log a message indicating that the student was not found and return the original array unchanged.
      console.log(' student was not found.');
      return studentsArray;
    }
  }
  
  // Original array of students
  console.log("Original students array:");
  console.log(students);
  
  // Update the grade of the student with ID 2 to "A"
  let updatedStudents = updateStudentGrade(students, 2, "A");
  
  // Updated array of students
  console.log("\nUpdated students array:");
  console.log(updatedStudents);