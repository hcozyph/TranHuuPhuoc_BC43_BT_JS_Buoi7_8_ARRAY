/* function getElementByID*/
function getEle(n) {
    return document.getElementById(n);
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

/* Task-1 */
getEle('t1-btn').onclick = function () {
    for (var i = 0, r = 0; r < mainArray.length; r++) {
        mainArray[r] > 0 && (i += mainArray[r]);
    }

    getEle('t1-result').innerHTML = 'Tổng của các số dương trong mảng là : ' + i;
}
/* End--Task-1 */

