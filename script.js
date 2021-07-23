//declare all the buttons
//num buttons
const zeroButton = document.querySelector('#zero');
const oneButton = document.querySelector('#one');
const twoButton = document.querySelector('#two');
const threeButton = document.querySelector('#three');
const fourButton = document.querySelector('#four');
const fiveButton = document.querySelector('#five');
const sixButton = document.querySelector('#six');
const sevenButton = document.querySelector('#seven');
const eightButton = document.querySelector('#eight');
const nineButton = document.querySelector('#nine');
//operation buttons
const plusButton = document.querySelector('#plus');
const subButton = document.querySelector('#sub');
const multButton = document.querySelector('#mult');
const divideButton = document.querySelector('#div');
const enterButton = document.querySelector('#enter');
const clearButton = document.querySelector('#clear');
//connecting output screen
const screen = document.querySelector('#screen');
//nums
    //first num
let a = 0, 
    //second num
    b = 0, 
    //counts current digits printed on screen
    digitCount = 0,
    //result value
    result = 0;
//operator
let operator = "";


 

//activates number buttons
let numButtons = document.getElementsByName('number');
//for each numButton...
numButtons.forEach(btn => {
    //add click listener
    btn.addEventListener('click', function () {
        //check digits, if less than 18...
        if (digitCount <= 18) {
            printItem(btn);
            //increment digitCount
            digitCount++;
        }
    })
})

// //activates operation buttons
let opButtons = document.getElementsByName('op');
console.log(opButtons);
//for each opButton...
opButtons.forEach(btn => {
    console.log(btn);
    //if op = return
    if (btn.value === '=') {
        //add click listener
        btn.addEventListener('click', function () {
            //invoke return operation
            returnOperation();
            document.addEventListener('input', function () {
                clearOperation();
                console.log("cleared")
            })
        });
    //else if op = clear
     } else if (btn.value === 'C') {
        //add click listener
        btn.addEventListener('click', function () {
            //invoke clear operation
            clearOperation();
        });
    //if any other op 
    } else {
        //add click listener
        btn.addEventListener('click', function () {
            performOperation(btn.value);
        });
    }
});




//print item
function printItem (item) {
    //create new p element
    let itemToPrint = document.createElement('p');
    //create new text node
    let itemText = document.createTextNode(item.value);
    //append text node to item 
    itemToPrint.appendChild(itemText);
    //append item to screen div
    screen.appendChild(itemToPrint);
}

function printResult (result) {
    //create new p element
    let itemToPrint = document.createElement('p');
    //create new text node
    let itemText = document.createTextNode(result);
    //append text node to item 
    itemToPrint.appendChild(itemText);
    //append item to screen div
    screen.appendChild(itemToPrint);
}

//perform operation
//accepts a value
function performOperation (value) {
    //set digits to an array of the screen's children
    let digits = [...screen.children];
    //set num to an empty sting
    let num = '';
    //for each digit add value to num string and clear screen
    for (let i = 0; i < digits.length; i++) {
        //set digit to the first child of the screen node
        let digit = document.getElementById('screen').firstChild;
        //concat the digit as a string into num
        num += digit.innerHTML;
        //remove first child from screen element
        document.getElementById('screen').removeChild(document.getElementById('screen').firstChild);
    }
    //pass num as an int to a
    a = parseInt(num);
    //operator is set to the value passed into this function
    operator = value;
}

//return operation
function returnOperation () {
    //set digits to an array of the screen's children
    let digits = [...screen.children];
    //set num to an empty sting
    let num = '';
    //for each digit add value to num string and clear screen
    for (let i = 0; i < digits.length; i++) {
        //set digit to the first child of the screen node
        let digit = document.getElementById('screen').firstChild;
        //concat the digit as a string into num
        num += digit.innerHTML;
        //remove first child from screen element
        document.getElementById('screen').removeChild(document.getElementById('screen').firstChild);
    }
    //pass num as an int to b
    b = parseInt(num);
    //this switch statements checks which operator to use when returnin the result
    switch (operator) {
        case '+':
            result = a + b;
            break;
        case '-': 
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = a / b;
            break;
    }
    //prints result on the screen element
    printResult(parseInt(result));
}
//clear operation
function clearOperation () {
    //set digits to an array of the screen's children
    let digits = [...screen.children];
    //for each digit remove digit to clear screen
    for (let i = 0; i < digits.length; i++) {
         //remove first child from screen element
        document.getElementById('screen').removeChild(document.getElementById('screen').firstChild);
    }
    //reset digit count to 0
    digitCount = 0;
}

