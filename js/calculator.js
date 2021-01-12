var value = 0;
var oldValue = 0;
var newValue = 0;
var operator;
var isOldOpertion = false;


// my number button

getValueFromElement("#btn-0");
getValueFromElement("#btn-1");
getValueFromElement("#btn-2");
getValueFromElement("#btn-3");
getValueFromElement("#btn-4");
getValueFromElement("#btn-5");
getValueFromElement("#btn-6");
getValueFromElement("#btn-7");
getValueFromElement("#btn-8");
getValueFromElement("#btn-9");


function getValueFromElement(id) {

    document.querySelector(id).addEventListener('click', function () {
        value = parseInt(this.innerHTML.trim());
        if (isOldOpertion) {
            document.querySelector("#text-area").innerHTML = "";
            isOldOpertion = false;
        }
        if (document.querySelector("#text-area").innerHTML.startsWith("0")) {
            document.querySelector("#text-area").innerHTML = "";
        }
        document.querySelector("#text-area").innerHTML += value;
    })
}



// my operation button (for add, sub, multi, divide)
getOperator("#btn-sum");
getOperator("#btn-sub");
getOperator("#btn-multi");
getOperator("#btn-divd");

function getOperator(id) {
    document.querySelector(id).addEventListener('click', function () {
        operator = this.innerHTML.trim();
        oldValue = parseInt(document.querySelector("#text-area").innerHTML);
        isOldOpertion = true;
    })
}


// pn = button press
document.querySelector("#btn-equal").addEventListener("click", equal);


function equal() {
    newValue = parseInt(document.querySelector("#text-area").innerHTML)
    if (operator === "+") {
        document.querySelector("#text-area").innerHTML = sum(oldValue, newValue);
    } else if (operator === "-") {
        document.querySelector("#text-area").innerHTML = sub(oldValue, newValue);
    } else if (operator === "*") {
        document.querySelector("#text-area").innerHTML = multi(oldValue, newValue);
    } else if (operator === "/") {
        document.querySelector("#text-area").innerHTML = divide(oldValue, newValue);
    }

    // reset old state
    isOldOpertion = false;
    oldValue = 0;
    value = 0;
    operator = null;
}


// clear screen method
function clearScreen() {
    document.querySelector("#text-area").innerHTML = 0;
}

document.querySelector("#btn-c").addEventListener("click", clearScreen);
document.querySelector("#btn-ce").addEventListener("click", clearScreen);




// opertions 

function sum(x, y) {
    return x + y;
}

function sub(x, y) {
    return x - y;
}

function multi(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}