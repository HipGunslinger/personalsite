const courseList = [
    webDev = {
        code:"ACIT 1620",
        name:"Web Fundamental Technologies",
    },
    math = {
        code:"MATH 1310",
        name:"Technical Math for IT",
    },
    python = {
        code:"ACIT 1515",
        name:"Scripting for IT"
    },
];
var course = prompt("Check for Course", "Enter a four digit course number.")
while (isNaN(course)) {
    alert("Enter a Four Digit Course Number");
    var course = prompt("Check for Course", "Enter a four digit course number.")
};
while (course.length != 4) {
    alert("Enter a Four Digit Course Number");
    var course = prompt("Check for Course", "Enter a four digit course number.")
};

function compareNums() {
    for (var x of courseList) {
        for (var y in x) {
            if (x[y].includes(course)) {
                console.log(`Yes I am taking the course ${x[y]} - ${x.name}`)
                return true
            }

        }
    }
  }

  if (compareNums() != true) {
    var newClass = {code: course, name: null}
    courseList.push(newClass)
    console.log("New Class Added to Class List")
  } 