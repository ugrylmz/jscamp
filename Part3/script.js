var submitButton = document.querySelector(".submit");

submitButton.onclick = function() {
  var usernameValue = document.querySelector(".username").value;
  localStorage.setItem("USERNAME", usernameValue);
  localStorage.setItem("Password", usernameValue);
};

var settedusernameValue = localStorage.getItem("USERNAME");

console.log(settedusernameValue);

document.querySelector("#username").innerHTML = settedusernameValue;
document.querySelector(".username").value = settedusernameValue;

const Car = class {
  constructor(brand) {
    this.brand = brand;
  }
  writeBrand = () => {
    return this.brand;
  };
};

//super
class myCar extends Car {
  constructor(brand, year) {
    super(brand);
    this.year = year;
  }
  writeYear = () => {
    return this.year;
  };
}

console.log(myCar);

let car1 = new Car("BMW");
let car2 = new myCar("Audi", 2019);

console.log(
  car1.writeBrand() + " \n" + car2.writeBrand() + " Year " + car2.writeYear()
);


const Human = class {
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
    get isOlderEighteen(){
    return this.age > 18 ? "older" : "younger";  
  }
  static test(){
    
  }
}

const person1 = new Human("ugur",22);

console.log(person1.get);