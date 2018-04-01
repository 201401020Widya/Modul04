
function printFullAge(yearOfBirth) {
	var ages = [];
	var fullAges = [];

	for (var i 	= 0; i < yearOfBirth.length; i++) {
	ages[i] = 2017 - yearOfBirth[i];
	//console.log(i);
	//console.log(ages);
}


	for (i = 0; i < ages.length; i++) {
	if (ages[i] >= 18) {
		console.log('Orang ' + (i + 1) + ' Berumur ' + ages[i] + ' Tahun, Dan Dia Berusia Lebih Dari 18 Tahun');
		fullAges.push(true);
	} else {
		console.log('Orang ' + (i + 1) + ' Berumur ' + ages[i] + ' Tahun, Dan Dia Berusia Kurang Dari 18 Tahun');
		fullAges.push(false);
	}
}
	return fullAges;
}

var yearOfBirth = [1990, 1993, 2001, 1991, 1980];
var full_1 = printFullAge(yearOfBirth);
var full_2 = printFullAge([2010, 1987, 1994, 2005, 1989]);

