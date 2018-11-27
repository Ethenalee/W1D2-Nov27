


 var doors = [];
// 1. setup game with 3 doors 
// 	- assign a door for car (prize)

function initGame( ) {
 	doors = [ 'Goat' , 'Goat' , 'Goat'];
	var carDoor = Math.ceil( Math.random( ) * 3 ); // 1 - 3 
	doors[ carDoor - 1 ] = 'Car';
}

// 2. take selection from player
var player1Selection = Number.parseInt( process.argv[ 2 ] );
var player2Selection = 0;
var hostSelection = 0;

// 3. host eliminates one option that is not the player's selection nor where the car is
function makeHostSelection( ) {
	if ( player1Selection !== 1 && doors[ 0 ] !== 'Car' ) {
		return 1;
	}
	else if ( player1Selection !== 2 && doors[ 1 ] !== 'Car') {
		return 2;
	}
	else {
		return 3;
	}
}

// 4. player 1 stays put
// 5. player 2 switches to other option

function makePlayer2Selection( ) {
	if ( player1Selection !== 1 && hostSelection !== 1 ){
		return 1;
	}
	else if ( player1Selection !== 2 && hostSelection !== 2 ) {
		return 2;
	}
	else {
		return 3;
	}
}

function displaySelections( ) {
	console.log( 'player 1 selection', player1Selection);
	console.log( 'player 2 selection', player2Selection);
	console.log( 'host selection', hostSelection);
}


// 6. reveal where car is and winner of contest
function displayResults( ) {
   console.log( 'Doors are open', doors );
   if ( doors[ player1Selection - 1 ] === 'Car' ) {
      player1Wins++;
   	console.log ('player 1 wins');
   }
   else if ( doors[ player2Selection - 1 ] === 'Car' ) {
      player2Wins++;
   	console.log( 'player 2 wins');
   }
}

// 7. set up simulation to run several times
var player1Wins = 0;
var player2Wins = 0;

for ( var i = 0 ; i < 10000 ; i++ ) {
   console.log( '---------' );
   initGame( );
   player1Selection = Math.ceil( Math.random( ) * 3 );
   hostSelection = makeHostSelection( );
   player2Selection = makePlayer2Selection( );
   displaySelections( );
   displayResults( ); 
   console.log( 'Player 1 wins', player1Wins, 'times');
   console.log( 'Player 2 wins', player2Wins, 'times');

}

 


