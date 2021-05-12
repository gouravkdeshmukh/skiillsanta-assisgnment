function javascriptFunction(parameterFunction){
    parameterFunction();
}

function parameterFunction(){
    document.write("A JavaScript program to pass a 'JavaScript function' as parameter.");
}

javascriptFunction(parameterFunction);