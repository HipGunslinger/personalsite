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
