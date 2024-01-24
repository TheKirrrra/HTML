                        //TASK 1

const getElementByIndex = (array, index) => {
    
    if (index >= 0 && index < array.length) {
      return array[index];
    } else {
      return "Вне зоны доступа массива";
    }
  };
  
  const myArray = [1, 2, 3, 4, 5];
  const indexToGet = 2;
  
  const result = getElementByIndex(myArray, indexToGet);
  console.log(result); 


                        //TASK 2
                        
  function describeWeather(weatherCode, decodeFunction) {
    switch (weatherCode) {
        case 'SQ':
            return decodeFunction('SQ') + ' шквал';
        case 'PO':
            return decodeFunction('PO') + ' пыльный вихрь';
        case 'FC':
            return decodeFunction('FC') + ' торнадо';
        case 'BR':
            return decodeFunction('BR') + ' дымка (видимость от 1 до 9 км)';
        case 'HZ':
            return decodeFunction('HZ') + ' мгла (видимость менее 10 км)';
        case 'FU':
            return decodeFunction('FU') + ' дым (видимость менее 10 км)';
        case 'DS':
            return decodeFunction('DS') + ' пыльная буря (видимость менее 10 км)';
        case 'SS':
            return decodeFunction('SS') + ' песчаная буря (видимость менее 10 км)';
        default:
            return 'Неизвестный код погоды';
    }
}


function decodeFunction(code) {
    return 'Код: ' + code;
}


const weatherCode = 'SQ';
const weatherDescription = describeWeather(weatherCode, decodeFunction);
console.log(weatherDescription);