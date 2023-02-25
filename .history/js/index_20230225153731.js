/* function getElementByID*/
function getEle(n) {
    return document.getElementById(n);
}

/* End-function getElementByID*/



/*create-array*/
var mainArray = [];
function creatArray() {
    //input: userInput
    var userInput = Number(getEle("user-input").value);
    //output: mainArray
    //process
    mainArray.push(userInput);
    getEle("user-array").innerHTML = mainArray;
};
/*End-create-array*/



/* Task-1: sumPositive */
function sumPositive() {
    for (var i = 0, r = 0; r < mainArray.length; r++) {
        mainArray[r] > 0 && (i += mainArray[r]);
    }

    getEle('t1-result').innerHTML = 'Tổng của các số dương trong mảng là:  ' + i;
}
/* End--Task-1 */



/* Task-2: countPositive */
function countPositive() {
    for (var i = 0, r = 0; r < mainArray.length; r++) {
        mainArray[r] > 0 && i++
    }

    getEle('t2-result').innerHTML = 'Trong mảng có ' + i + ' số dương.'
}
/* End--Task-2 */



/* Task-3: find out minimum value*/
function findMin() {
    for (var i = mainArray[0], r = 0; r < mainArray.length; r++) {
        (mainArray[r] < i) && (i = mainArray[r])
    }

    getEle('t3-result').innerHTML = 'Giá trị nhỏ nhất trong mảng là  ' + i;
}
/* End--Task-3: find minimum value */



/* Task-4: find out minimum positive value */
function findMinPositive() {

    //-- STEP 1 --: pick up positive value--
    for (var i = [], r = 0; r < mainArray.length; r++) {
        mainArray[r] > 0 && i.push(mainArray[r]);
    }
    //-- STEP 2 --: finding minValue
    if (i.length > 0) {
        for (var n = i[0], r = 1; r < i.length; r++) {
            i[r] < n && (n = i[r]);
        }
        getEle('t4-result').innerHTML = 'Giá trị dương nhỏ nhất trong mảng là  ' + n;
    } else {
        getEle('t4-result').innerHTML = 'Mảng trên không chứa số dương !'
    }

}
/* End--Task-4: find out minimum positive value */



/* Task-5: find out the last even value in user array */
function lastEvenValue() {

    //--STEP 1: pick up even number then add to array
    for (var i = [], r = 0; r < mainArray.length; r++) {
        mainArray[r] % 2 == 0 && i.push(mainArray[r]);
    }
    //--STEP 2: pick up the last position value 
    var n = i[(i.length - 1)];

    //--STEP 3: print resuslt
    getEle('t5-result').innerHTML = 'Số chẵn cuối cùng là  ' + n;
}
/* End--Task-5: find out the last even value in user array */



/* Task-6: change the position between two values of array*/
function swap(i, r) {
    var n = mainArray[i];
    (mainArray[i] = mainArray[r]), (mainArray[r] = n);
}

function swapPosition() {
    swap(getEle('t6-positionOne').value, getEle('t6-positionTwo').value);

    getEle('t6-result').innerHTML = 'Mảng sau khi đổi:  [' + mainArray + ']';
}
/* End--Task-6: change the position between two values of array */



/* Task-7: sort by ascending */
function sortByAscending() {
    for (var i = 0; i < mainArray.length; i++) {
        for (var n = 0; n < mainArray.length - 1; n++)
            mainArray[n] > mainArray[n + 1] && swap(n, n + 1);
    }

    getEle('t7-result').innerHTML = "Mảng được xếp tăng dần:  [" + mainArray + ']';
}
/* End--Task-7: sort by ascending */



/* Task-8: find out the first prime number*/

//STEP 1: check prime number
function checkPrimeNumber(i) {
    if (i < 2) return false;
    for (var uoc = 2; uoc <= Math.sqrt(i); uoc++) {
        if (i % uoc == 0) {
            return false;
        }
        else {
            return true;
        }
    }

    getEle('t8-result').innerHTML = i;
}

    //STEP 2:DÁ



    // function firstPrimeNumber









/* End--Task-8: find out the first prime*/














