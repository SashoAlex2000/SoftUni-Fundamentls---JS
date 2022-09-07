

function schoolRegister(arr){
    let students = [];

    for (let i =0; i < arr.length; i++){
        let firstSplit = arr[i].split(": ");

        let studentScore = Number(firstSplit[3]);

        let studentName = firstSplit[1].split(", ")[0];
        let studentGrade = firstSplit[2].split(", ")[0];

        let currentStudentObj = {
            name: studentName,
            grade: studentGrade,
            score: studentScore
        }

        if (currentStudentObj.score >= 3){
            students.push(currentStudentObj);
        }

    }

    let newStudentsBook = [];

    for (let n = 1; n <= 11; n++){

        let currentRegister = {
            grade: n + 1,
            studentList: [],
            allGrades: []
        }

        for (let c = 0; c < students.length; c++){
            let currentStudent = students[c];

            if (currentStudent.grade == n){
                currentRegister.studentList.push(currentStudent.name);
                currentRegister.allGrades.push(currentStudent.score);
            }
        }

        if (currentRegister.studentList.length > 0){
            newStudentsBook.push(currentRegister);
        }

    }

    function calculateAverage(scoresArr){
        let scoreSum = scoresArr.reduce((a, b) => a + b, 0);
        return scoreSum / scoresArr.length;
    }


    for (let g = 0; g < newStudentsBook.length; g++){
        let currentGradeRegister = newStudentsBook[g];

        console.log(`${currentGradeRegister.grade} Grade`);
        console.log(`List of students: ${currentGradeRegister.studentList.join(", ")}`)
        console.log(`Average annual score from last year: ${calculateAverage(currentGradeRegister.allGrades).toFixed(2)}`);
        console.log("");

    }

}

schoolRegister([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
        "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
        "Student name: George, Grade: 8, Graduated with an average score: 2.83",
        "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
        "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
        "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
        "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
        "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
        "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
        "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
        "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
        "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
    ]
    )

schoolRegister([
    'Student name: George, Grade: 5, Graduated with an average score: 2.75',
    'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
    'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
    'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
    'Student name: John, Grade: 9, Graduated with an average score: 2.90',
    'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
    'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
    ]
    )