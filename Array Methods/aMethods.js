//! task1

let desserts = ["Ice Cream", "Pie", "Pudding"];

desserts.push("Cake"); //bizden cake sozunun bu array'a sonradan elave edilmesidi bunun ucun evvelce default arrayimize push metodunu cagirib istenilen deyeri menimsedirik

console.log(desserts); // burada ise artiq desserte cake elave olunacaqdir kod yuxaridan asagi dogru oxudugu ucun evvel hecne deyismir sonra ise push cagirdigimiz ucun array'in sonuna hemin soz elave edilir.

console.log("----------------------------");

//! task2

let cities = ["London", "New York", "Tokyo"]; //burada ise bizden bu array daxilinde paris sozunun olub olmadigini yoxlamagimizi isteyir.

if (cities.includes("Paris")) {
  //bunun ucun biz sert vermeliyik includes metodunu cagiraraq , eger bizim array daxilinde paris sozu varsa onda bize logda true olaraq qayidacaqdir yoxdursa false verecekdir. include metodunu cagirdigda array icine daxil olur ve istenileni yoxluyur ve boolean deyer qaytarir
  console.log(true);
} else {
  console.log(false);
}

console.log("----------------------------");

//! task3

let cars = ["Sedan", "Coupe"];
let trucks = ["Pickup", "SUV"];

console.log(cars.concat(trucks)); //bizde burda verilen arraylari birlesdirmeyimiz istenilir. burada concat metodundan istifade edilir. concat metodu hem duzgun kopyalamada istifade edilir hem de hemde arraylari birlesdirme isinide gorur.

console.log("----------------------------");

//!task4

let dessertS = ["Ice Cream", "Pie", "Pudding", "Cake"];

console.log(dessertS.indexOf("Pie")); //indexOf metodu bizde array daxilinde verilmis elementlerin indexlerini bize qaytarir. saymada 0 ci indexden basliyir
