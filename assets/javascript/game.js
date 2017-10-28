$(document).ready(function() {
	//====== Variables =======//
	var userScore = 0;
	
	var randomNum = randomNumberGen();

	var wins = 0;
	var losses = 0;
	var crystals;
	var randomPoints = function() { 
		return Math.floor(Math.random() * 11 ) + 1;
	}

	//==== This function will generate the random number for each crystal ====//
	function randomNumCrystals() {
		return {
			red: {
				points: randomPoints(), 
				imageUrl: "assets/images/red.jpg"
			},
			blue: {
				points: randomPoints(),
				imageUrl: "assets/images/blue.jpg"
			},
			green: {
				points: randomPoints(),
				imageUrl: "assets/images/green.jpg"
			},
			yellow: {
				points: randomPoints(),
				imageUrl: "assets/images/yellow.jpg"
			}
		};
	}
	//====This function will generate a random number for the user to match ====//
	function randomNumberGen() {
		return Math.floor(Math.random() * 101) + 19; 
		
	} 

	function restGame(){
		userScore = 0; 
		var crystals = randomNumCrystals();
		console.log(crystals);
		var randomNum = randomNumberGen(); 
		console.log(randomNum)
		$('.scoreToBeat').html('<p> Score to Get: ' + randomNum + ' </p>')
		$('.totalScore').html('<p>Your Total Score is: ' + userScore + '</p>'); 
	}

	$('.scoreToBeat').html('<p> Score to Get ' + randomNum + ' </p>')
	//console.log (randomNum);
	//console.log (randomNumCrystals());
	$('#wins').html('<p> Wins: ' + wins + '</p>');
	$('#losses').html('<p> Losses: ' +  losses + ' </p>');


	var crystals =  randomNumCrystals();
	//====On click functions for crystals===//
	//$()
	$('#red').on('click', function(){
		//alert(crystals.red.points); 
		userScore += crystals.red.points;
		$('.totalScore').html('<p>Your Total Score is: ' + userScore + '</p>'); 
		if( userScore === randomNum){
			wins++; 
			$('#wins').html('<p> Wins: ' + wins + '</p>');
			restGame();

		}
		else if(userScore > randomNum){
			losses++;
			$('#losses').html('<p> Losses: ' +  losses + ' </p>');
			restGame();
		}
		// reset 


	})
	$('#blue').on('click', function(){
		//alert(crystals.blue.points); 
		userScore += crystals.blue.points;
		$('.totalScore').html('<p>Your Total Score is: ' + userScore + '</p>'); 
		if( userScore === randomNum){
			wins++; 
			$('#wins').html('<p> Wins: ' + wins + '</p>');
			restGame();

		}
		else if(userScore > randomNum){
			losses++;
			$('#losses').html('<p> Losses: ' +  losses + ' </p>');
			restGame();
		}
	})


	$('#green').on('click', function(){
		//alert(crystals.green.points); 
		userScore += crystals.green.points; 
		$('.totalScore').html('<p>Your Total Score is: ' + userScore + '</p>'); 
		if( userScore === randomNum){
			wins++; 
			$('#wins').html('<p> Wins: ' + wins + '</p>');
			restGame();

		}
		else if(userScore > randomNum){
			losses++;
			$('#losses').html('<p> Losses: ' +  losses + ' </p>');
			restGame();
		}
	})

	$('#yellow').on('click', function(){
		//alert(crystals.yellow.points); 
		userScore += crystals.yellow.points; 
		$('.totalScore').html('<p>Your Total Score is: ' + userScore + '</p>'); 
		if( userScore === randomNum){
			wins++; 
			$('#wins').html('<p> Wins: ' + wins + '</p>');
			restGame();

		}
		else if(userScore > randomNum){
			losses++;
			$('#losses').html('<p> Losses: ' +  losses + ' </p>');
			restGame();
		}

	})




})
