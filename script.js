"use strict";
function checkInputNan(userInput, numMessage){
	while (isNaN(userInput)){
		for (i = 0; i < myNumArray.length; i++){
			while (checkedInput >= myNumArray[i]){
				checkedInput -= myNumArray[i];
				x+=myRomanArray[i];
			};
		}
		console.log(x);
	}
	return userInput;
}

function getInput(numMessage){
	var input;
	input = prompt(numMessage);
	return input;
}

function convertTheThing (){

}

function makeArray(userInput){
	var array;
	var i;
	array = [];
	for (i = 0; i < userInput.length; i++){
		array.push(userInput[i]);
	}
	return array;
}



function main(){
	var userInput;
	var numMessage;
	var inputArray;
	var checkedInput;
	var myArray = [];
	var x= "";
	var checkedInput;
	var myRomanArray= ["M", "CM", "D", "CD", "C", 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
	var myNumArray = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
	var romanObj;
	var total;
	romanObj = {
		M:1000,
		CM:900,
		D:500,
		CD:400,
		C:100,
		XC:90,
		L:50,
		XL:40,
		X:10,
		IX:9,
		V:5,
		IV:4,
		I:1
	}
	numMessage = "What number would you like to convert?"
	userInput = getInput(numMessage);
	//inputArray = makeArray(userInput);
	//checkedInput = 
	//checkedInput = checkInputNan(userInput, numMessage);
	//convertInput(userInput, myArray)
	total = '';
	
	
	
	if (isNaN(userInput)){
		for (var it = 0; it < userInput.length; it++){
			if (userInput[it] === "C" || userInput[it] === "X" || userInput[it] === "I"){
				x=userInput[it] + userInput[it+1];
				for (var key in romanObj){
					if (x === key){
						total = +total + romanObj[key];
						it++;
						break;
					} else if (userInput[it] === key){
						total = +total + romanObj[key];
						break;
					}
				}
			}
			else {
				for (var key in romanObj){
					if (userInput[it] === key){
						total = +total + romanObj[key];
					}
				}
			}
		}
		alert(total);
	} 
	else {
		var endNum;
		endNum=""
		for (var i = 0; i < myNumArray.length; i++){
			while (userInput >= myNumArray[i]){
				userInput -= myNumArray[i];
				endNum+=myRomanArray[i];
			}
		} alert(endNum);
	}
}

main();

