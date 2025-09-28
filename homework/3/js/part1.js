//     Create a script that:
//         checks for valid input, i.e., that the input is between 0-100 and that, of course, the input are all numbers. 
//         If all input is valid then calculate and display the student's final average according to the formula:
//         final average = (.5 * hwAvg) + (.2 * midExam) + (.2 * finalExam) + (.1 * participation)
//         in the output area, you will present the student's final average (rounded to an integer) and final letter grade using the following criteria: 

// Points/Percentage to Letter Grade Percentage 	Letter Grade
// 90-100 	A
// 80-89 	B
// 70-79 	C
// 60-69 	D
// 0-59 	F

//         If the student's final grade is 'D' or 'F' then display "Student must retake the course". 
//         If the input of the user is invalid, you will present an error message and, of course, no result will be presented
//         Note: The user should be able to reuse that same form for another student!




$(document).ready(function() {
    $("#student-grades-form").validate({
        rules: {
            "hw-average": {
                required: true,
                digits: true,
                range: [0, 100]
            },
            "mid-term-score": {
                required: true,
                digits: true,
                range: [0, 100]
            },
            "final-score": {
                required: true,
                digits: true,
                range: [0, 100]
            },
            "participation": {
                required: true,
                digits: true,
                range: [0, 100]
            },

        },
        submitHandler: (f) => submitHandler(f)
    });

    $('#btn-reset-form').on('click', (e) => {
        $('#results p').html('');
        $("#student-grades-form").validate().resetForm();
    });
});

function submitHandler(form) {
    const finalAverage = getFinalAverage(form);
    const grade = getLetterGrade(finalAverage);

    $('#results p').html(grade);
}

function getFinalAverage(form) {
    const hwAverage = +form.elements['hw-average'].value;
    const midTermScore = +form.elements['mid-term-score'].value;
    const finalScore = +form.elements['final-score'].value;
    const participation = +form.elements['participation'].value;

    const finalAverage = (0.5 * hwAverage) + (0.2 * midTermScore) + (0.2 * finalScore) + (0.1 * participation);

    return finalAverage;
}

function getLetterGrade(score) {
    let grade;

    switch (true) {
        case (score >= 90):
            grade = "A"
            break;
        case (score >= 80 && score < 90):
            grade = "B";
            break;
        case (score >= 70 && score < 80):
            grade = "C";
            break;
        case (score >= 60 && score < 69):
            grade = "D - Student must retake the course :/";
            break;
        default:
            grade = "F - Student must retake the course :/";
    }

    return grade;
}