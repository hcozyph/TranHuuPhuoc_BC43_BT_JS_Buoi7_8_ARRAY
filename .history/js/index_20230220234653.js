/*create-array*/
document.getElementById('user-btn').onclick = function(){
    //input: userInput
    var userInput = Number(document.getElementById('user-input').value);
    
    //output: mainArray
    var mainArray = [];

    //process
    mainArray.push('userInput');

    document.getElementById('user-array').innerHTML = mainArray;


}




/*End-create-array*/