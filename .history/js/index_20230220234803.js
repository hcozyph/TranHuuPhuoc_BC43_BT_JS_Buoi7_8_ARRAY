/*create-array*/
document.getElementById('user-btn').onclick = function(){
    //input: userInput
    var userInput = Number(document.getElementById('user-input').value);
    
    //output: mainArray
    var arrayValue = userInput;
    var mainArray = [];

    //process
    mainArray.push('arrayValue');

    document.getElementById('user-array').innerHTML = mainArray;


}




/*End-create-array*/