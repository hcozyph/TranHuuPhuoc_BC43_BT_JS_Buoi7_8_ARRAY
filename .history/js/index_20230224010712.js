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



/* Task-1: sumPositive */
getEle('t1-btn').onclick = function () {
    for (var i = 0, r = 0; r < mainArray.length; r++) {
        mainArray[r] > 0 && (i += mainArray[r]);
    }

    getEle('t1-result').innerHTML = 'Tổng của các số dương trong mảng là : ' + i;
}
/* End--Task-1 */



/* Task-2: countPositive */
getEle('t2-btn').onclick = function () {
    for (var i = 0, r = 0; r < mainArray.length; r++) {
        mainArray[r] > 0 && i++
    }

    getEle('t2-result').innerHTML = 'Trong mảng có ' + i + ' số dương.'
}
/* End--Task-2 */



/* Task-3: finding minimum value*/
getEle('t3-btn').onclick = function () {
    for (var i = mainArray[0], r = 0; r < mainArray.length; r++) {
        (mainArray[r] < i) && (i = mainArray[r])
    }

    getEle('t3-result').innerHTML = 'Giá trị nhỏ nhất trong mảng là ' + i;
}
/* End--Task-3: finding minimum value */



/* Task-4: finding minimum positive value */
getEle('t4-btn').onclick = function () {

    //--pick up positive value--
    for (var i = [], r = 0; r < mainArray.length; r++) {
        mainArray[r] > 0 && i.push(mainArray[r]);
    }
    //output: array 'i' has positive values

    //--finding minValue
    if (i.length > 0) {
        for (var n = i[0], r = 1; r < i.length; r++) {
            i[r] < n && (n = i[r]);
        }
        getEle('t4-result').innerHTML = 'Giá trị dương nhỏ nhất trong mảng là ' + n;
    } else {
        getEle('t4-result').innerHTML = 'Mảng trên không chứa số dương'
    }

}
/* End--Task-4: finding minimum positive value */