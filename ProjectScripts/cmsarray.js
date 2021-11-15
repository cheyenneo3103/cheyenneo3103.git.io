var list = [
    { "System": "WordPress", 
    "Produced/Sold By": ["Free/Open Source",
    "<br><br>WordPress Foundation"], 
    "Technology Base": ["PHP", 
    "<br><br>MySQL"], 
    "Major Capabilities": ["Many templates and plugins", 
    "<br><br>Supports different skill levels",
    "<br><br>Well designed for Search Engine Optimization"],
    "Major Limitations": ["User is responsible for hosting and domain name", 
    "<br><br>User responsible for security/backups"],
    "Example": "<a href='http://roneaglin.online/cop4813/'>http://roneaglin.online/cop4813/</a>" },

    { "System": "Wix", 
    "Produced/Sold By": "Wix.com Ltd.", 
    "Technology Base": ["HTML5", 
    "<br><br>Javascript"],  
    "Major Capabilities": ["Drag and drop interface",
    "<br><br>Many templates and apps",
    "<br><br>There is a free plan"],
    "Major Limitations": ["Template can't be changed once chosen", 
    "<br><br>eCommerce sites only accept PayPal or Authorize.net",
    "<br><br>Free plan has Wix domain name and ads on site"],
    "Example": "<a href='https://www.wenxinwendyju.com/'>https://www.wenxinwendyju.com/</a>" },

    { "System": "Joomla", 
    "Produced/Sold By": ["Free/Open Source",
    "<br><br>Open Source Matters, Inc."], 
    "Technology Base": ["PHP",
    "<br><br>MySQL"], 
    "Major Capabilities": ["Lots of flexibility when creating a site",
    "<br><br>Lots of community support",
    "<br><br>Extensions available for e-commerce stores"],
    "Major Limitations": ["Can be complex/difficult to use",
    "<br><br>Not very many extensions available",
    "<br><br>Extensions can have compatibility issues"],
    "Example": "<a href='https://gsas.harvard.edu/'>https://gsas.harvard.edu/</a>" },

    { "System": "Drupal", 
    "Produced/Sold By": "Free/Open Source", 
    "Technology Base": ["PHP",
    "<br><br>MySQL"], 
    "Major Capabilities": ["Plenty of options for content layout",
    "<br><br>Many different modules available",
    "<br><br>User management is simple"],
    "Major Limitations": ["Not beginner friendly",
    "<br><br>It can be tricky to design the website"],
    "Example": "<a href='https://www.mattel.com/en-us'>https://www.mattel.com/en-us</a>" },

    { "System": "Shopify", 
    "Produced/Sold By": "Shopify Inc.", 
    "Technology Base": ["HTML5",
    "<br><br>Javascript",
    "<br><br>MySQL"], 
    "Major Capabilities": ["Many different payment types accepted",
    "<br><br>Many extensions and themes available",
    "<br><br>24/7 support through live chat, email, phone, and Twitter",
    "<br><br>Extensive documentation and tutorials"],
    "Major Limitations": ["Can become very expensive depending on the plan and add-ons",
    "<br><br> More limited functionality compared to something like WordPress"],
    "Example": "<a href='https://kyliecosmetics.com/en-us'>https://kyliecosmetics.com/en-us" }
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