
interface Student {
    name: string;
    age: number;
    grades: number[];
  }
  
  function calculateAverageGrade(student: Student): number {
    const totalGrades = student.grades.reduce((total, grade) => total + grade, 0);
    const average = totalGrades / student.grades.length;
    return average;
  }
  
 
  const student1: Student = {
    name: "Bob",
    age: 17,
    grades: [75, 80, 82, 88, 90]
  };
  
  
  const averageGradeForBob = calculateAverageGrade(student1);
  console.log(averageGradeForBob);