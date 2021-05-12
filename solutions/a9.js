function difference(arr1, arr2){

    let arr = arr1.concat(arr2);
    let uniqueArr = [];

    for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    return(uniqueArr);
}




document.write(difference([1, 2, 3], [100, 2, 1, 10]));