//symbol.iterador
let range = {
    from: 1,
    to: 5
  };
  
  range[Symbol.iterator] = function() {
    return {
      current: this.from,
      last: this.to,
      next() {
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };
  };
  
  for (let num of range) {
    alert(num); // 1, luego 2, 3, 4, 5
  }

  //string también es un array

  let string = "Hola";

let iterator = string[Symbol.iterator]();

while (true) {
  let result = iterator.next();
  if (result.done) break;
  alert(result.value);
}
  
// array.from

let str = '𝒳😂';

let chars = Array.from(str);

alert(chars[0]); // 𝒳
alert(chars[1]); // 😂
alert(chars.length); // 2

//Map(object.entries)

let obj = {
    name: "John",
    age: 30
  };
  
  let map = new Map(Object.entries(obj));
  
  alert( map.get('name') );

  //Map(object.fromEntries)

  let prices = Object.fromEntries([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
  ]);
    
  alert(prices.orange); 
  
  //Set
  
  let set = new Set(["oranges", "apples", "bananas"]);

for (let value of set) alert(value);

set.forEach((value, valueAgain, set) => {
  alert(value);
});

//Object.keys, values, entries


let user = {
    name: "John",
    age: 30
  };

  for (let value of Object.keys(user)) {
    alert(value); 
  }
  for (let value of Object.values(user)) {
    alert(value); 
  }
  for (let value of Object.entries(user)) {
    alert(value); 
  }

  //Asignación desestructurante

  let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
  function topSalary(salaries) {
    let maxSalary = 0;
    let maxName = null;
  
    for (const [name, salary] of Object.entries(salaries)) {
      if (maxSalary < salary) {
        maxSalary = salary;
        maxName = name;
      }
    }
  
    return maxName;
  }
  