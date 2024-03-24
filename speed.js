

//function called speed thta takes up a parameter " speed"

function speedDetector (speed){
  
    // constant variable that has a value of 70
    const speedLimit = 70;
    // calculates the demerit points garnered
    const pointsPer5KmAbove =Math.abs((speed - speedLimit)/5);

    //  checks if the speed of a car is below the speedlimit and displays " OK" if true
if (speed < 70 ){
    console.log("Ok")
}

    //if speed is beyond speedlimit calculate demerit points
    //Checks also if demerit points equals or goes past 12 points
    //Displays " Licence suspended" if points >12
else {
    const DemeritPoints = pointsPer5KmAbove > 12 ? "License suspended" : pointsPer5KmAbove;
    console.log( DemeritPoints);


}

} 
speedDetector(200)