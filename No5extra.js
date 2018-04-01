var player1 = 'Widya';
var player2 = 'Noveliya';
var player3 = 'Yosua';

var height1 = 170;
var height2 = 170;
var height3 = 180;

var age1 = 27;
var age2 = 24;
var age3 = 30;

var score1 = height1 + (5 * age1);
var score2 = height2 + (5 * age2);
var score3 = height3 + (5 * age3);

if (score1 > score2 && score1 > score3) {
	console.log(player1 + ' menang dengan score ' + score1 + ' points');
} else if (score2 > score1 && score2 > score3) {
	console.log(player2 + ' menang dengan score ' + score2 + ' points');
} else if (score3 > score1 && score3 > score2) {
	console.log(player3 + ' menang dengan score ' + score3 + ' points');
} else {
	console.log(' Hasil Imbang ');	
}
