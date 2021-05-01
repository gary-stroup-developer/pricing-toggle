var monthlyPrice = document.getElementsByClassName("monthly-price");
var annualPrice = document.getElementsByClassName("annual-price");
var toggle = document.getElementById("myCheck").checked;



function check() {

  //the click event does not change the state of the checkbox
  //therefore need to use the ! to change the value
  toggle = !toggle;

  //forEach method does not work for changing the display. use for loop
  if(toggle === true){
    for(i=0;i<monthlyPrice.length;i++){
      monthlyPrice[i].style.display = "block";
    }
    for(j=0;j<annualPrice.length;j++){
      annualPrice[j].style.display = "none";
    }
  }
  else if (toggle === false){
    for(i=0;i<monthlyPrice.length;i++){
      monthlyPrice[i].style.display = "none";
    }

    for(j=0;j<annualPrice.length;j++){
      annualPrice[j].style.display = "block";
    }
  }

}

function buttonClick(element) {

  if(element.className === "button"){
    element.className = "button-select"
  }
  else {
    element.className = "button";
  }

}

function buttonOut (button){
  button.className="button";
}

function selectedCard(celement) {
    celement.style.background= "linear-gradient(135deg,hsl(236, 72%, 79%) ,hsl(237, 63%, 64%))";
    celement.style.height= "490px";
    celement.style.position= "relative";
    celement.style.top= "-20px";
    celement.style.color="#FAFAFA";
}

function notSelectedCard(nsElement) {
    nsElement.style.background= "#FAFAFA";
    nsElement.style.height= "450px";
    nsElement.style.color="#191919";
    nsElement.style.top="0";
}