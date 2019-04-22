// JavaScript Document
var pizzaNames=[];
var pizzaZoom;
var pizzaInputs=[];
var pizzaButtons=[];
var pizzaOrder=[];
var pizzaCost;
var pizzaOrderText;
var pizzaCostText;
var antalPizzor;
var bg;
var i;
var timer;
var ljudLaggTill;
var skickaBestallning;

addListener(window,"load",init);

function init(){
pizzaNames = document.getElementsByTagName("p");	
pizzaZoom= document.getElementById("zoom");
pizzaInputs = document.getElementsByClassName("pizzaQuantity");
pizzaButtons = document.getElementsByClassName("pizzaButton");
pizzaOrderText = document.getElementById("pizzaNamn");
pizzaCostText = document.getElementById("pizzaKostnad");
ljudLaggTill= document.getElementById("ljudLaggTill");
skickaBestallning= document.getElementById("skickaBestallning");

	i=1;
	bg = document.getElementById("bg");
	timer = setTimeout(headerSlide,0);

for (var x=0; x<pizzaNames.length; x++) {
	addListener(pizzaNames[x],"mouseover",pizzaMouseover);
	addListener(pizzaNames[x],"mouseout",pizzaMouseout);
	pizzaInputs[x].value=null;
	pizzaInputs[x].disabled=false;
	pizzaButtons[x].disabled=false;
	}
antalPizzor=0;
pizzaCost=0;
}

function pizzaMouseover(){	
this.style.color="#A12830";
this.style.cursor="pointer";
this.style.textDecoration = "underline";
pizzaZoom.src="pictures/"+ this.id +".jpg";

}

function pizzaMouseout(){
this.style.color="#000000";
this.style.textDecoration = "none";
pizzaZoom.src="pictures/pizzor.png";
}

function addOrder(nr,cost){
    ljudLaggTill.play();
	pizzaOrder.push(pizzaInputs[nr].value + "x " + pizzaNames[nr].id);
	pizzaCost+=pizzaInputs[nr].value*cost;
	antalPizzor+=parseInt(pizzaInputs[nr].value);
	pizzaButtons[nr].disabled = true;
	pizzaInputs[nr].disabled = true;
	pizzaOrderText.innerHTML= "Din order: " + pizzaOrder + ".";
	pizzaCostText.innerHTML= "Summa: " + pizzaCost + " sek.";
	} 

function sendOrder(){
	skickaBestallning.play();
	var tid = (5+(antalPizzor*5));
	alert("Din order har skickats. \nDet kommer bli " + pizzaCost + " sek.\nVälkommen in om " + tid + " minuter. \nTack för att du valt Alesjas Pizzor!");
	window.location.href=window.location.href;
	}




function headerSlide() {
		if(i===6){i=1;}
		bg.style.backgroundImage = "url('pictures/" + i + ".jpg')";
		i++;
		timer = setTimeout(headerSlide,3000);
}


