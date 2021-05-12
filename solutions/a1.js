let a = prompt("Enter first number");
let b = prompt("Enter second number");
let c = prompt("Enter third number");

document.write("your First Number is : " + a +"<br>");
document.write("your second Number is : " + b +"<br>");
document.write("your Third Number is : " + c +"<br>");

if (a>b)
    document.write(a + " is greater number");
else if(b>c)
    document.write(b + " is greater number ");
else
    document.write(c + " is greater number");
