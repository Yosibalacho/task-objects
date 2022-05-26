//1//
// var manager = {
//   firstname: "Yosi",
//   lastname: "Balacho",
//   age: 25,
//   wage: 40000,
// };

// var employee = {
//   fullname: "daniel gedamo",
//   birthdate: 1995,
//   email: "danielgedamo@gmail.com",
//   adress: "rehovot",
// };
//2//
// var fruit = {
//   name: "banana",
//   color: "yellow",
//   type: "hadar",
// };
// document.write(fruit.name, "<br>", fruit.color, "<br>", fruit.type);
//3//
// var course={
//     courseNumber: "70",
//     studentNumber: 25,
//     studentNames: ["yosi","yoni","daniel","nati","dalia"],
// }

// for(var i=0; i<course.studentNames.length;i++){
//     document.write(course.studentNames[i]+"<br>")
// }

// var course = {}
//  course.courseNumber=prompt("Enter course number");
//  course.studentNumber=prompt("Enter number of students");
//  course.studentAge=prompt("Enter student age")
//  console.log(course);
//4//
// var teacher={}
// var key=prompt("Enter key")
// var value=prompt("Enter your value")
// teacher[key]=teacherName
// console.log(teacher);
// var manager={}
// for(var i=0; i<4;i++){
// var key=prompt("Enter key")
// var value=prompt("Enter value")
// manager[key]=value
// console.log(manager);
// }
//5//
// var user={}
// for(var i=0; i<4;i++){
//    var key=prompt("Enter key")
//    var value=prompt("Enter value")
//    user[key]=value;
//    document.write("<div>"+value+"</div>")
//6//

// var kindergarden = {
//   teacherName: "batel",
//   numberOfKids: 15,
//   kidsNames: [
//     "daniel",
//     "batel",
//     "dalia",
//     "dani",
//     "yosi",
//     "yoni",
//     "nati",
//     "dalia",
//     "hen",
//     "toni",
//   ],

// };
// for(var i=0;i<kindergarden.kidsNames.length;i++){

//     document.write(kindergarden["kidsNames"][i]+"<br>");
// }

//7//
// }
// var carsArray=[];
// for (var i = 0; i < 4; i++) {
//   var car = {};
//   car.company = prompt("enter the car brand");
//   car.color = prompt("enter the car color");
//   car.cc = prompt("enter the car cc");
//   car.yearbook = +prompt("enter the  car yearbook");
//   carsArray.push(car);
//   document.write(
//     "<div>" +
//       car.company +
//       " " +
//       car.color +
//       " " +
//       car.cc +
//       " " +
//       car.yearbook +
//       "</div>"
//   );
// }
// console.log(carsArray);

//8//
// function cats() {
//   for (var i = 0; i < 3; i++) {
//     var cat = {};
//     cat.name = prompt("enter the cat name");
//     cat.birthdate = prompt("enter the cat birthdate");
//     cat.type = prompt("enter the cat type");
//     cat.waigth = prompt("enter the cat waigth");
//     document.write(
//         "<h1>" +
//           cat.name +
//           " " +
//           cat.birthdate +
//           " " +
//           cat.type +
//           " " +
//           cat.waigth +
//           "</h1>"
//       );
//   }
// }
// cats();
//9//
//  var userKey={}
//  userKey.mykey=prompt("enter key")
//  userKey.myValue=prompt("enter value")
//  console.log(userKey)
//10//
// function numberOfDogs() {}
// var numFromUser = prompt("Enter Number");
// for (var i = 0; i < numFromUser; i++) {
//   var dog = {};
//   dog.name = prompt("enter the dog name");
//   dog.age = prompt("enter the dog age");
//   dog.type = prompt("enter the dog type");
//   dog.nameOfOwner = prompt("enter the dog owner");
//   document.write(
//     "<p>" +
//       dog.name +
//       " " +
//       dog.age +
//       " " +
//       dog.type +
//       " " +
//       dog.nameOfOwner +
//       "</p>"
//   );
// }
// numberOfDogs();
//11//
// function bugs() {
//     var numFromUser=prompt("enter number");
//     for(var i=0;i<numFromUser;i++){
//          var bug={}
//          bug.regularName=prompt("enter the reguler name of the bug")
//          bug.scientificName=prompt("enter the scientific name of the bug")
//          bug.numOfLegs=prompt("enter the number of legs of the bug")
//          bug.bugsWithWings=confirm("do the bug have wings")
//          if(){

//          }
//     }
// }
// bugs()
//14// לא מושלם//
// function printTeachers(teachersNum) {
//   for (var i = 0; i < teachersNum; i++) {
//     var teacher = {
//       fullName: "",
//       salary: 100,
//       email: "",
//       birthYear: 1980,
//     };
//     if (teacher.salary > 100 || teacher.birthYear < 1990) {
//       document.write(
//         "<span>" +
//           teacher.fullName +
//           " " +
//           teacher.salary +
//           " " +
//           teacher.email +
//           " " +
//           teacher.birthYear +
//           "</span><br>"
//       );
//     }
//   }
// }
// printTeachers(4);
// לא מושלם//
//15//
function printAppartments(numberOfApartments) {
  for (var i = 0; i < numberOfApartments; i++) {
    var apartments = {
      adress: prompt("Enter address"),
      rentPrice: +prompt("Enter rent price"),
      buyPrice: +prompt("Enter buy price"),
      interstedPpl: [],
      isTivuch: confirm("is it tivuch ?"),
    };
    var numberOfInterestedPpl = +prompt("Enter number of interested people");
    for (var j = 0; j < numberOfInterestedPpl; j++) {
      apartments.interstedPpl.push(prompt("Enter interested person"));
    }
    if (!apartments.isTivuch) {
      document.write(apartments.adress + "<br>");
      for (var j = 0; j < apartments.interstedPpl.length; j++) {
        document.write(apartments.interstedPpl[j] + "<br>");
      }
    }
  }
}
printAppartments();
