var isDate = function (input) {
  //   write your code here
	
	typeof input =="string" ? a=input.substr(0 , 11) :a=input.toISOString().substr(0 , 11);
	
	
	
	return /[1-9][0-9][0-9]{2}-([0][1-9]|[1][0-2])-([1-2][0-9]|[0][1-9]|[3][0-1])/gm.test(a);
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));

