function calculateAverageGrade(student) {
    var totalGrades = student.grades.reduce(function (total, grade) { return total + grade; }, 0);
    var average = totalGrades / student.grades.length;
    return average;
}
var student1 = {
    name: "Bob",
    age: 17,
    grades: [75, 80, 82, 88, 90]
};
var averageGradeForBob = calculateAverageGrade(student1);
console.log(averageGradeForBob);
