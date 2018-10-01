
function getReceipt() {
	item1 = "";
	cost2 = "";
	var runningTotal = 0;
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("size");
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			item1 = item1+selectedSize+"<br>";
		}
	}
	if (selectedSize === "Personal Pizza") {
		sizeTotal = 6;
		cost2 = cost2+sizeTotal+"<br>";
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
		cost2 = cost2+sizeTotal+"<br>";
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
		cost2 = cost2+sizeTotal+"<br>";
	} else if (selectedSize === "Extra Large Pizza") {
		sizeTotal = 16;
		cost2 = cost2+sizeTotal+"<br>";
	}
	runningTotal = sizeTotal;
	getMeat(runningTotal,item1,cost2); 
};	

function getMeat(runningTotal,item1,cost2) {
	var runningTotal = runningTotal;
	var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("meats");
	for (var j = 0; j < meatArray.length; j++) {
		if (meatArray[j].checked) {
			selectedMeat.push(meatArray[j].value);
		}
	}
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
	} else {
		meatTotal = 0;
	}
	runningTotal = (runningTotal + meatTotal);
	for (var j = 0; j < selectedMeat.length; j++) {
			item1 = item1+selectedMeat[j]+"<br>";
			if (meatCount <= 1) {
				cost2 = cost2 + 0 + "<br>";
				meatCount = meatCount - 1;
			} else if (meatCount == 2) {
				cost2 = cost2 + 1 + "<br>";
				meatCount = meatCount - 1;
			} else {
				cost2 = cost2 + 1 + "<br>";
				meatCount = meatCount - 1;
			}
	}
	getVeggie(runningTotal,item1,cost2);
};

function getVeggie(runningTotal,item1,cost2) {
	var veggieTotal = 0;
	var selectedVeggie = [];
	var veggieArray = document.getElementsByClassName("veggies");
	for (var j = 0; j < veggieArray.length; j++) {
		if (veggieArray[j].checked) {
			selectedVeggie.push(veggieArray[j].value);
		}
	}
	var veggieCount = selectedVeggie.length;
	if (veggieCount >= 2) {
		veggieTotal = (veggieCount - 1);
	} else {
		veggieTotal = 0;
	}
	runningTotal = (runningTotal + veggieTotal);
	for (var j = 0; j < selectedVeggie.length; j++) {
			item1 = item1+selectedVeggie[j]+"<br>";
			if (veggieCount <= 1) {
				cost2 = cost2 + 0 + "<br>";
				veggieCount = veggieCount - 1;
			} else if (veggieCount == 2) {
				cost2 = cost2 + 1 + "<br>";
				veggieCount = veggieCount - 1;
			} else {
				cost2 = cost2 + 1 + "<br>";
				veggieCount = veggieCount - 1;
			}
	}
	getCheese(runningTotal,item1,cost2);
};

function getCheese(runningTotal,item1,cost2) {
	var cheeseTotal = 0;
	var selectedCheese = [];
	var cheeseArray = document.getElementsByClassName("cheese");
	for (var j = 0; j < cheeseArray.length; j++) {
		if (cheeseArray[j].checked) {
			selectedCheese = cheeseArray[j].value;
		}
		if (selectedCheese === "Extra cheese") {
			cheeseTotal = 3;
		}
	}
	cost2 = cost2+cheeseTotal+"<br>";
	item1 = item1+selectedCheese+"<br>";
	runningTotal = (runningTotal + cheeseTotal);
	getSauce(runningTotal,item1,cost2);
};

function getSauce(runningTotal,item1,cost2) {
	var sauceArray = document.getElementsByClassName("sauce");
	for (var j = 0; j < sauceArray.length; j++) {
		if (sauceArray[j].checked) {
			selectedSauce = sauceArray[j].value;
			item1 = item1 + selectedSauce +"<br>";
		}
	}
	cost2 = cost2 + 0 + "<br>";
	getCrust(runningTotal,item1,cost2)
};

function getCrust(runningTotal,text1,text2) {
	var crustTotal = 0;
	var selectedCrust;
	var crustArray = document.getElementsByClassName("crust");
	for (var j = 0; j < crustArray.length; j++) {
		if (crustArray[j].checked) {
			selectedCrust = crustArray[j].value;
			text1 = text1 + selectedCrust + "<br>";
		}
		if (selectedCrust === "Cheese Stuffed Crust") {
			crustTotal = 3;
		}
	}
	runningTotal = (runningTotal + crustTotal);
	text2 = text2 + crustTotal + "<br>";
	document.getElementById("cart").style.opacity=1;
	document.getElementById("showitem1").innerHTML=text1;
	document.getElementById("showcost2").innerHTML=text2;
	document.getElementById("totalPrice2").innerHTML = "</h3>$"+runningTotal+".00"+"</h3>";
};

