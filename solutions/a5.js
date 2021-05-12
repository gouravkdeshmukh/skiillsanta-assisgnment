let str  = prompt("Enter the string");
let strArray = str.split('');
let strValue = strArray.reverse();
let strReverse = strValue.join('');

if (str == strReverse){
 document.write("input string is : " + str + "<br>");
 document.write("Reverse String is : " + strReverse + "<br>"); 
 document.write("String is palindrome" + "<br>");
}else 
document.write("Input string is not palindrome");