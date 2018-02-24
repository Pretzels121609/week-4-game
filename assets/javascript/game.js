// define all you variable that will be used in the game

// targetNumber 
// wins
// losses
// resultNumber
var wins = 0;
var losses = 0;
var targetNumber = generateRandomNum(19, 120);
var resultNumber = 0;
var gemValues = [];


//  look at the second reply with 1539 score
// 	https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
//  create a function that take two parameters : a min and a max
// 	this function should then take the min and max and generate a random number between the two numbers
function generateRandomNum(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}

// display variable value on the page
function displayValues(){
	$("#target-score").text(targetNumber);
	$("#wins").text(wins);
	$("#losses").text(losses);
	$("#your-score").text(resultNumber)
}
displayValues();
getGemVal()



// assign value to gems
function getGemVal(){
	// add 4 unique number to the gemValue array
	// each number per gem is between 2-12

	// loop through the gemValue array length
	// while the gemValue array is less than 4
	while(gemValues.length < 4){
		// do something here
		var value = generateRandomNum(2,12);
		// check if value is already part of the gemValues array
		if(!gemValues.includes(value)){ // if the value generated is not in the array -  true 
		// push value to gemsValue array
			gemValues.push(value);
		}
		

	}
	assignGemValues();
}

function assignGemValues(){
	// each value in the gemValues array will be added to each image
	$(".gem1").attr("num",gemValues[0])
	$(".gem2").attr("num",gemValues[1])
	$(".gem3").attr("num",gemValues[2])
	$(".gem4").attr("num",gemValues[3])
}
//console.log(gemValues)
$(".gem").on("click", function(){
	// save the gem that was clicked on
	var $clickedGem = $(this);
	// selected is a string value
	var selected = $clickedGem.attr("num");

	// for styling the clicked image
	$clickedGem.effect("puff", function(){
		$clickedGem.show();
	});
	
	//console.log(selected)

	

	// check the value of resultNumber 
		// check if it is great than the targetNumber
		// if it isn't add the selected value to the result number
		//console.log(resultNumber)
		// add the current resultNumber to selected number but slected needs to be converted into a number from a string
		resultNumber += parseInt(selected);
		//console.log(resultNumber)

		// if resultNumber is greater than targetNumber than you lose
		if(resultNumber > targetNumber){
			console.log("you lose");
			losses++;
			resetGame()
			// if you lose 
			// game values reset and u re assign the target number and the gems 
			// redisplay the values
			// losses go up
		}
		// if the resultNumber is equal to the target number you win
		else if(resultNumber === targetNumber){
			console.log("you win");
			wins++;
			resetGame()
			// if you lose 
			// game values reset and u re assign the target number and the gems 
			// redisplay the values
			// wins go up
		}
		//the game continues

		

		// redisplay the value
		displayValues();
});



function resetGame(){
	resultNumber = 0;
	gemValues = [];
	targetNumber = generateRandomNum(19, 120);
	getGemVal();
	displayValues();
}
// check what value of gem is for clicked gem 
// update resultNumber and display on page
// check if resultNumber is equal to targetNumber

// 	if equal to wins go up
// 		update wins value and diplay on page
// 		generate new targetNumber and gem value
// 		update html
// 	if greater than losses go up
// 		update loses value and diplay on page
// 		generate new targetNumber and gem value
// 		update html
		
// 	keep checking if less than