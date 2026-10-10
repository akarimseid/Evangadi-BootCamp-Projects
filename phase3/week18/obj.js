// class CAR {
//     constructor(name, year){
//         this.name = name ;
//         this.year = year;
//     }
// }

// class SportCar extends CAR {
//         constructor (name, year, milage){
//             super (name, year);
//             this.milage = milage;
//         }
// }

// const ferrari = new SportCar("ferrari", "2026", 0);

// console.log(ferrari);

// const array = ["a", 24, 5, 7, 6];

// let { a, c, d } = array;
// console.log(a);


//prototype object creation and inheritance

function EvangadiStudent(name, age, group) {
    this.name = name;
    this.age = age;
    this.group = group;
}
EvangadiStudent.prototype.batch = "may 2026";

console.log(EvangadiStudent);

EvangadiStudent.prototype.studentInfo = function () {
    return `${this.name} is ${this.batch} evangadi student in group ${this.group}`
}

let studentOne = new EvangadiStudent("abebe", 24,1);

function EvangadiStudentExtension(name, age, group, time){
    EvangadiStudent.call(this, name, age, group);
    this.time = time;
}

EvangadiStudentExtension.prototype = Object.create(EvangadiStudent.prototype)
EvangadiStudentExtension.prototype.constructor = EvangadiStudent;
extensionStudent = new EvangadiStudentExtension("chala", 19, 4, "12:00");
console.log(extensionStudent);

//ES6 way of inheritance or class based inheritance

