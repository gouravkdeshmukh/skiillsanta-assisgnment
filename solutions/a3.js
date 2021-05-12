let convert = prompt("Enter the choice 1. Celsius to Fahrenheit and  2. Fahrenheit to Celsius");

function tempCelToFeh(){
    let conCelToFeh = (temp * 9/5)+32;
    return conCelToFeh;
}


function tempFehToCel(){
    let conFehToCal = (temp - 32) * 5/9;
    return conFehToCal;
}


let temp;
if(Number(convert) === 1){
    temp = prompt("Enter the Temperature in Degree Celsius ");
    
    document.write("Temperature in degree Celsius is " + temp +"<br>");
    document.write("Temperature in degree Fahrenheit is : " + tempCelToFeh(temp));
}else if(Number(convert) === 2)
{
        temp = prompt("Enter the Temperature in Degree fahrenheit ");
        
        document.write("Temperature in degree Fahrenheit is " + temp + "<br>");
        document.write("Temperature in degree Celsius is : " + tempFehToCel(temp));
}

