

// Function named studentMarks that takes a parameter "marks"
function studentMarks(marks){
    // checks if marks is more than 79
    if ( marks > 79){
        return "A";

    }
    // checks if marks is equal or more than 60 but less and equal to 79

    else if ( marks >=60 && marks<= 79){
        return "B";

    }
     // checks if marks is equal or more than 50 but less and equal to 69
    else if ( marks >= 50 && marks <=59 ){
        return "C";
       
    }
     // checks if marks is equal or more than 40 but less and equal to 49
    else if ( marks >= 40 && marks <= 49){
        return "D";
    }
     // if none of the conditions are not met to display "E"
    else {
        return "E";
    }

}
console.log(studentMarks(35))