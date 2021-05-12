let dob = prompt("Enter Your date of Birth in DD/MM/YYYY formate");

let year = dob.slice(6);
let today  = new Date();
let age = Math.abs(today.getFullYear() - year);

if(age > 18 && age < 45 )
    window.location.href = "https://selfregistration.cowin.gov.in";
else if(age < 18)
    document.write("You are not eligible for Vaccinated");
else
    document.write("Your Don't require Registration to vaccinated");



