/* function getElementByID*/
function getEle(n) {
    return document.getElementById("n");
}

/* End-function getElementByID*/

/*create-array*/
var mainArray = [];

getEle("user-btn").onclick = function () {
    //input: userInput
    var userInput = Number(getEle("user-input").value);

    //output: mainArray

    //process
    mainArray.push(userInput);

    getEle("user-array").innerHTML = mainArray;
};

/*End-create-array*/
