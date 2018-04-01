var player1 = 'Widya';
var player2 = 'Noveliya';


var height1 = 170;
var height2 = 170;


var age1 = 24;
var age2 = 24;


var score1 = height1 + (5 * age1);
var score2 = height2 + (5 * age2);


if (score1 > score2) {
	console.log(player1 + ' menang dengan score ' + score1 + ' points');
} else if (score2 > score1) {
	console.log(player2 + ' menang dengan score ' + score2 + ' points');
} else {
	console.log(' Hasil Imbang ');	
}
