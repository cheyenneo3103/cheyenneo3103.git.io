var list = [
    { "Ranking": "1", "Name": "Spyro Reignited Trilogy", "Developer": "Toys for Bob", "Personal Rating": "10/10" },
    { "Ranking": "2", "Name": "The Witcher 3: Wild Hunt", "Developer": "CD Projekt RED", "Personal Rating": "9/10" },
    { "Ranking": "3", "Name": "Assassin's Creed Odyssey", "Developer": "Ubisoft Quebec", "Personal Rating": "9/10" },               
    { "Ranking": "4", "Name": "The Witcher 2: Assassins of Kings", "Developer": "CD Projekt RED", "Personal Rating": "8/10" },
    { "Ranking": "5", "Name": "Yakuza 0", "Developer": "Sega", "Personal Rating": "8/10" },
    { "Ranking": "6", "Name": "Final Fantasy XV", "Developer": "Square Enix", "Personal Rating": "7/10" },                 
    { "Ranking": "7", "Name": "Horizon Zero Dawn", "Developer": "Guerrilla Games", "Personal Rating": "7/10" },
    { "Ranking": "8", "Name": "Resident Evil 6 (Only for the CO-OP)", "Developer": "Capcom", "Personal Rating": "7/10" },
    { "Ranking": "9", "Name": "Need for Speed Payback", "Developer": "EA Gothenburg", "Personal Rating": "7/10" },
    { "Ranking": "10", "Name": "Need for Speed: Most Wanted (2012)", "Developer": "Criterion Games", "Personal Rating": "6/10" }
  ];
        
  function constructTable(selector) {     
    var cols = Headers(list, selector); 

    for (var i = 0; i < list.length; i++) {
        var row = $('<tr/>');  
        
      for (var colIndex = 0; colIndex < cols.length; colIndex++) {
          var val = list[i][cols[colIndex]];  
            
          if (val == null) val = ""; 
              row.append($('<td/>').html(val));
          }
            
          $(selector).append(row);
    }
  }
    
  function Headers(list, selector) {
    var columns = [];
    var header = $('<tr/>');
        
    for (var i = 0; i < list.length; i++) {
        var row = list[i];
            
      for (var k in row) {
        
        if ($.inArray(k, columns) == -1) {
            columns.push(k);
            header.append($('<th/>').html(k));
        }
      }
    }
      
    $(selector).append(header);
      return columns;
    } 