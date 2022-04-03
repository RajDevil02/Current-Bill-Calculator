
function myFunction() {
	var units = parseInt(document.getElementById("unit1").value);
  	var months = parseInt(document.getElementById("month1").value);
  	
  	if (units<=100) {
  	total.value = "No Cost";
  }
  else if (units <= 200) {
  	var units1 = units - 100;
  	units1 = (units1 * 1.5 ) + (months * 20);
  	total.value = units1;
  }
  else if (units <= 500) {
  	var units1 = units - 100;
  	if (units1 <=200) {
  		units1 = (units1 * 2) + (months * 30);
  		total.value = units1;
  	}
  	else {
  		units1 = (units1-200)*3 + (months * 30) + 400;
  		total.value = units1;
  	}
  	
  	
  }
  else {
  	total.value = "Invalid";
  }


}