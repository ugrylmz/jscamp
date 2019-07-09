// Javascript Classes

// Javascript her ne kadar fonksiyonel bir dil olsa da olabildiğince nesne yönelimli programlamaya olanak sağlar.

//Prototype Nedir

//Prototype javascript class'ları içerisinde default olarak bulunur ve oluşturulan class'ların prototypeları vardır.

function Person(name, surname, age, gender) {
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.gender = gender;
}

var singlePerson = new Person("Ali", "Veli", 22, "Male");

Person.prototype.writeInformation = function() {
  console.log(
    "Hello my name is ${this.name} ${this.surname} i am ${this.age} years old."
  );
};

var Johnny = new Person("Johnny", "Bravo", 24, "Male");

Johnny.writeInformation();

Person.prototype.job = "";
var Johnny2 = new Person("Johnny", "Bravo", 24, "Male", "Driver");
console.log(Johnny2);

function Car(brand, model, color, year) {
  this.brand = brand;
  this.model = model;
  this.color = color;
  this.year = year;
}

var myCar = new Car("BMW", "5.20D", "Kırmızı", "2018");
Car.prototype.writeInformation = function() {
  console.log();
};

console.log(
  myCar.brand + " " + myCar.model + " " + myCar.color + " " + myCar.year
);

Car.prototype.speedLimit = "ASD";
var yourCar = new Car("Audi", "A3", "beyaz", "2019", "220");

console.log(yourCar);

function square(number) {
  return number * 2;
}

square(2); // 4

// ES6

const squareES6 = square => square * 2;

squareES6(4); // 8

/**
 * let / const

const constant kelimesinden gelir 'sabit' anlamındadır.

Bir kere tanımlanır.
Değeri değiştirilemez.
 */

// const

const variable = "Constant Variable";

variable = "Some value";

// Assignment to constant variable. const diye object oluşturursam değerleri değiştirilebilir ama nesnenşn attribute leri değiştirilemez

// let
/**
 * let

Bir kere tanımlanır.
Değeri sonradan değiştirilebilir.
 */

let variable = "let variable";

variable = "some value";

// success




// constructor

/**
 * 
 constructor / super

constructor oluşturulan class için ilk değerleri belirlediğimiz fonksiyonun adıdır.
super başka bir class'tan extends edilen yeni class içerisinde bir önceki init değerlerine ulaşmak için kullanılır.
 */

const Human = class {
    constructor(name) {
        this.name = name;
    }

    writeName = () => {
        return this.name;
    }    
}


// super

class Man extends Human {
    constructor(name, gender) {
        super(name)
        this.gender = 'Male';
    }
}

// human.js

// variables

export const AGE = 24;
export const TYPE = 'Human';



// function

export default function Human(name) {
    return name;
}


export default { AGE, TYPE };


// import file

import { AGE, TYPE } from 'human.js';



// Only one exported file with default

import Human from 'human.js'