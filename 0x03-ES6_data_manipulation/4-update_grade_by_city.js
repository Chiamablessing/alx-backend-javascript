// a function that returns an array of students for a specific city with new grade

export default function updateStudentGradeByCity(students, city, newGrades) {
    const filteredStudents = students.filter((student) => student.location === city);

    const updatedStudents = filteredStudents.map((student) => {
      const gradeEntry = newGrades.find((entry) => entry.studentId === student.id);

      return {
        ...student,
        grade: gradeEntry ? gradeEntry.grade : 'N/A',
      };
    });

    return updatedStudents;
  }
