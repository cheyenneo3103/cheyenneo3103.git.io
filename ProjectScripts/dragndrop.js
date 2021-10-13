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
  alert("You discarded a card.");
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
      adiv.setAttribute("id", cardCode[x] + i);	
      document.getElementById("cardArea").appendChild(adiv);
    }
  }
}