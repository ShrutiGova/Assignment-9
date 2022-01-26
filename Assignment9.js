//Assignment 9

// 1. Add the list of employees in a json file and import it in below file to use it. Add unique ids for each employee.

const jsonData = require('./Employees.json');

jsonData.forEach((e , index) => {
    e["id"] = index+1;
});

// 2. Add a function to return list of employees that contains "am" in his name. Add it in separate file and import it to call in another file.

const arr = require('./nameSearch');
 const newarray = arr.nameSearch(jsonData);
 console.log(newArray);


 // 3. Take another paramter as salary and keep it above 500000 in numbers in json and print it upto one decimal place only with unit as Lac

 let result = jsonData.map((e)=>{
     let sal = e.salary/100000;
     sal = sal.toFixed(1);
     return sal.toString()+ " Lac";
 });