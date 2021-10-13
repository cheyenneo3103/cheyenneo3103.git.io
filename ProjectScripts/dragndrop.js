function allowDiscard(ev) {
  ev.preventDefault();
  document.getElementById("discardPile").innerHTML = '';
  }

  function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  }

  function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  xyz.push(data);
  let cardName = data;

  if(cardName === "1 of Clubs") {    
    cardName = "Ace Of Clubs";
  }
  else if(cardName == "1 of Diamonds") {
    cardName = "Ace of Diamonds";
  }
  else if(cardName == "1 of Hearts") {
    cardName = "Ace of Hearts";
  }
  else if(cardName == "1 of Spades") {
    cardName = "Ace of Spades";
  }

  if(cardName === "11 of Clubs") {    
    cardName = "Jack Of Clubs";
  }
  else if(cardName == "11 of Diamonds") {
    cardName = "Jack of Diamonds";
  }
  else if(cardName == "11 of Hearts") {
    cardName = "Jack of Hearts";
  }
  else if(cardName == "11 of Spades") {
    cardName = "Jack of Spades";
  }

  if(cardName === "12 of Clubs") {    
    cardName = "Queen Of Clubs";
  }
  else if(cardName == "12 of Diamonds") {
    cardName = "Queen of Diamonds";
  }
  else if(cardName == "12 of Hearts") {
    cardName = "Queen of Hearts";
  }
  else if(cardName == "12 of Spades") {
    cardName = "Queen of Spades";
  }
  
  if(cardName === "13 of Clubs") {    
    cardName = "King Of Clubs";
  }
  else if(cardName == "13 of Diamonds") {
    cardName = "King of Diamonds";
  }
  else if(cardName == "13 of Hearts") {
    cardName = "King of Hearts";
  }
  else if(cardName == "13 of Spades") {
    cardName = "King of Spades";
  }
  
  alert("You discarded card " + cardName);
  document.getElementById("discardPile").innerHTML = ''
  }

  var xyz = [];

  function displayCards(){

  document.getElementById("cardArea").innerHTML = '';

  var cardCode = ["Club", "Diamond", "Heart", "Spade"];
  
  for (x=0; x < cardCode.length; x++){
    for (i = 1; i < 14; i++){
      var url = "DeckOfCards/" + cardCode[x] + i + ".png";
      var adiv = document.createElement("img");
      adiv.setAttribute("src", url);
      adiv.setAttribute("class", "card");
      adiv.setAttribute("height", "125");
      adiv.setAttribute("width", "90");
      adiv.setAttribute("alt", "alt");
      adiv.setAttribute("draggable", "true");
      adiv.setAttribute("ondragstart", "drag(event)");
      //adiv.setAttribute("id", cardCode[x] + i);	
      adiv.setAttribute("id", i + " of " + cardCode[x] + "s");
      document.getElementById("cardArea").appendChild(adiv);
    }
  }
}