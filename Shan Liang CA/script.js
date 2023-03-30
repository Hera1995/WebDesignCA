function checkDiscount(){
	var inputElement = document.getElementById("myInput");
	var mymessage = inputElement.value;
	if(mymessage == "cheeseburger"){
		alert("Congratulations! You've got 10% off!");
	}else{
		alert("Sorry, your code is invalid!");
	}
}	

function myAlert(){
	var value = $("#selectSize").val();
	if (value == "Supersize"){
		alert("Supersize is super big, it might be unhealthy. Please make sure that's the size you want.");
	}
}
