function getStudent() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const student = {
          name: "Anri",
          age: 32,
        };
        resolve(student);
      }, 4000); 
    });
  }

  const studentPromise = getStudent();
  
  studentPromise.then((student) => {
    console.log(`Имя студента: ${student.name}`);
  });