  //                  Task01
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
//     //                    Task02
  function getDriverLicence(success, failure) {
    const randomValue = Math.random();
  
    if (randomValue > 0.1) {
      success("успех!");
    } else {
      failure("упс, неудача :(");
    }
  }
  
  function successCallback(result) {
    console.log(`Успешно завершено с результатом: ${result}`);
  }
  
  function failureCallback(error) {
    console.log(`Завершено с ошибкой: ${error}`);
  }
  
  getDriverLicence(successCallback, failureCallback);

  console.log(Math.floor(Math.random()*200)-100)

  