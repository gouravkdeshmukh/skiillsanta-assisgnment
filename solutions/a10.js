    function vovels(param){
    var countChar = {};
    param.replace(/aeious/g, function(item) {
        countChar[item] = (isNaN(countChar[item]) ? 1 : countChar[item] + 1);
    });
    return countChar;
}

let string = prompt("Enter the string");

document.write(vovels(string));

