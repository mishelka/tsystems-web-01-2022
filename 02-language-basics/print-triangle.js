"use strict"
/*
  TODO: Expected output from the program for size = 10
             *
            ***
           *****
          *******
         *********
        ***********
       *************
      ***************
     *****************
    *******************
*/
var size = 10;

function printTriangle() {
    var i = 0;
    var str = '';
    while(i < size) {
        str = getChars(size - i - 1, ' ');
        str += getChars(2 * i + 1, '*');
        console.log(str);
        i++;
    }
}

function getChars(length, character) {
	var str = '';
	
	for(var i = 0; i < length; i++) {
		str += character;
	}
	
	return str;
}