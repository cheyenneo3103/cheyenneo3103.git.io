$(document).ready(function() {
  // executes when HTML-Document is loaded and DOM is ready
  createList();
});
var gotOne =[];
var courselist = [{
  "Course": "ENC1101",
  "Name": "Introduction to Composition",
}, {
  "Course": "COP1000",
  "Name": "Principles of Computer Programming"
}, {
  "Course": "MAC1105",
  "Name": "College Algebra"
}, {
  "Course": "MAC1114",
  "Name": "College Trigonometry",
  "PreReqOne": ["MAC1105"]
}, {
  "Course": "MAC1140",
  "Name": "Pre-Calculus Algebra",
  "PreReqOne": ["MAC1105"]
}, {
  "Course": "STA2023",
  "Name": "Elementary Statistics",
  "PreReqOne": ["MAC1105"]
}, {
  "Course": "MAC2311C",
  "Name": "Calculus I and Lab",
  "PreReqOne": ["MAC1114"],
  "PreReqTwo": ["MAC1140"]
}, {
  "Course": "CTS3348",
  "Name": "Linux Administration (A)",
  "restOfGroup": ["CTS2321"],
  "PreReqOne": ["COP1000"]
}, {
  "Course": "CTS2321",
  "Name": "Linux Fundamentals (A)",
  "restOfGroup": ["CTS3348"]
}, {
  "Course": "COT3100",
  "Name": "Discrete Computational Analysis (B)",
  "restOfGroup": ["MAD2104"],
  "PreReqOne": ["MAC1105"]
}, {
  "Course": "MAD2104",
  "Name": "Discrete Mathematics (B)",
  "restOfGroup": ["COT3100"],
  "PreReqOne": ["MAC1114"]
}, {
  "Course": "COP2001C",
  "Name": "Computer Programming C++ and Lab (C)",
  "restOfGroup": ["COP2220","COP2360","COP2800"],
  "PreReqOne": ["COP1000"]
}, {
  "Course": "COP2220",
  "Name": "Computer Programming C (C)",
  "restOfGroup": ["COP2001C","COP2360","COP2800"],
  "PreReqOne": ["COP1000", "MAC1105"]
}, {
  "Course": "COP2360",
  "Name": "C# Programming (C)",
  "restOfGroup": ["COP2001C","COP2220","COP2800"],
  "PreReqOne": ["COP1000"]
}, {
  "Course": "COP2800",
  "Name": "Computer Programming Java (C)",
  "restOfGroup": ["COP2001C","COP2220","COP2360"],
  "PreReqOne": ["COP1000"]
}, {
  "Course": "CET3116",
  "Name": "Digital Technology (D)",
  "restOfGroup": ["CET1112C"],
  "PreReqOne": ["MAC1105"]
}, {
  "Course": "CET1112C",
  "Name": "Digital Fundamentals and Lab (D)",
  "restOfGroup": ["CET3116"],
  "PreReqOne": ["MAC1105"]
}, {
  "Course": "EET3086",
  "Name": "Principles of Electrical Circuits (E)",
  "restOfGroup": ["EET1011C","PHY2049C"]
}, {
  "Course": "EET1011C",
  "Name": "Introduction to Electrical Circuits and Lab (E)",
  "restOfGroup": ["EET3086","PHY2049C"]
}, {
  "Course": "PHY2049C",
  "Name": "Physics with Calculus II and Lab (E)",
  "restOfGroup": ["EET3086","EET1011C"]
}, {
  "Course": "GEB3213",
  "Name": "Business Writing",
  "PreReqOne": ["ENC1101"]
}, {
  "Course": "CIS4250",
  "Name": "Ethical Issues in IT",
  "PreReqOne": ["GEB3213"]
}, {
  "Course": "COP3530",
  "Name": "Data Structures",
  "PreReqOne": ["COT3100", "MAD2104"],
  "PreReqTwo": ["COP2800", "COP2001C", "COP2220", "COP2360"]
}, {
  "Course": "CEN3722",
  "Name": "Human Computer Interfaces",
  "PreReqOne": ["COP2800", "COP2001C", "COP2220", "COP2360"]
}, {
  "Course": "COP4708",
  "Name": "Applied Database I",
  "PreReqOne": ["COP2800", "COP2001C", "COP2220", "COP2360"]
}, {
  "Course": "COP4610",
  "Name": "Operating Systems",
  "PreReqOne": ["CTS2321", "CTS3348"]
}, {
  "Course": "CIS4360",
  "Name": "Applied Cybersecurity",
  "PreReqOne": ["CTS3348", "CTS2321"]
}, {
  "Course": "CNT3104",
  "Name": "Introduction to Telecommunications",
  "PreReqOne": ["PHY2049C", "EET3086", "EET1011C"]
}, {
  "Course": "CNT4007",
  "Name": "Data and Computer Communications",
  "PreReqOne": ["CNT3104"]
}, {
  "Course": "CNT4703",
  "Name": "Voice and Data Network Design",
  "PreReqOne": ["CNT3104"],
  "PreReqTwo": ["CNT4007"]
}, {
  "Course": "CDA4101",
  "Name": "Computer Organization and Design",
  "PreReqOne": ["CET1112C", "CET3116"]
}, {
  "Course": "CEN4801",
  "Name": "Systems Integration",
  "PreReqOne": ["COP3530"]
}, {
  "Course": "CEN4010",
  "Name": "Software Engineering",
  "PreReqOne": ["COP3530"]
}, {
  "Course": "COP4813",
  "Name": "Web Systems I",
  "PreReqOne": ["COP3530"]
}, {
  "Course": "COP4709",
  "Name": "Applied Database II",
  "PreReqOne": ["COP4708"]
}, {
  "Course": "COP4834",
  "Name": "Web Systems II",
  "PreReqOne": ["COP4813", "COP4708"]
}, {
  "Course": "CIS4510",
  "Name": "IT Project Management",
  "PreReqOne": ["CEN4010"]
}, {
  "Course": "CET4884",
  "Name": "Security Methods and Practice",
  "PreReqOne": ["CIS4360"]
}, {
  "Course": "CET4860",
  "Name": "Introdcution to Digital Forensics",
  "PreReqOne": ["CTS2321", "CTS3348"]
}, {
  "Course": "CET4861",
  "Name": "Advanced Digital Forensics",
  "PreReqOne": ["CET4860"]
}, {
  "Course": "CET4862",
  "Name": "Network Forensics and Incident Response",
  "PreReqOne": ["CIS4360"]
}]



function createList() {
  for (var i = 0; i < courselist.length; i++) {
    var _disabled = true;
    if (courselist[i].PreReqOne == null) {
      _disabled = false;
    }

    addCheckbox(
      courselist[i].Name,
      courselist[i].Course,
      _disabled,
      courselist[i].PreReqOne,
      courselist[i].PreReqTwo
    )
  }
}



function addCheckbox(_name, _id, _disabled, prOneArr, prTwoArr) {
  var container = $("#box");
  var eachTxt ;

  eachTxt = "<br/>";
  var prnt_disabled;
  if (_disabled){prnt_disabled = "disabled";}

  eachTxt += "<input class='checkbox' type='checkbox' id='"+ _id + "' value='"+ _name + "' "+ prnt_disabled + " >";

  eachTxt += "<label for='" + _id +"'>"+ _id + ' ' + _name +"</label>";

  if (prOneArr != null){
    var prOneTxt = prOneArr.toString();
    prOneTxt = prOneTxt.replace(/,/g, " OR ");  
    eachTxt += " | Pre-Req: " + prOneTxt;
  }

  if (prTwoArr != null){
    var prTwoTxt = prTwoArr.toString();
    prTwoTxt = prTwoTxt.replace(/,/g, " OR ");  
    eachTxt += " & " + prTwoTxt;
  }
  container.append(eachTxt);
}
$("#box").delegate("input", "click", function() {
  CC();
});



function pr(course, index) {
  //  course is the course in question
  var courseId = course.Course;

  //	reversing the default condition 
  var checkedOne = 0;
  var checkedTwo = 0;
  var restOfGroupX = course.restOfGroup;
  var thisEnable= "y";
  if(restOfGroupX){
    for (var i = 0; i < restOfGroupX.length; i++) {
      if (isChecked(restOfGroupX[i]) ) {
        thisEnable= "n";
      }
    } 
  }
  // PreReqArrayOne - array of First pre-requisites
  // PreReqArrayTwo - array of Second pre-requisites
  var PreReqArrayOne = course.PreReqOne;
  var PreReqArrayTwo = course.PreReqTwo;
  if (PreReqArrayOne == null){
    if (thisEnable == "y") Enable(courseId)
    else Disable(courseId);
    return;
  }else{
    for (var i = 0; i < PreReqArrayOne.length; i++) {
      //	reversing the logic
      //    - creates an OR condition
      // 		- if any are met, then checkedOne is met
      if (isChecked(PreReqArrayOne[i])) {
        checkedOne = 1;
      }
    }
  }

  // This allows the ability of AND/OR conditions
  // Each loop looks for OR conditions
  // The second loop creates the AND condition
  // PreReqOne is an array of the first set of requirements
  // We repeat the test for PreReqTwo
  if (PreReqArrayTwo == null){
    if (checkedOne > 0 && thisEnable == "y") Enable(courseId)
    else Disable(courseId);
    return;
  }else{
    for (var i = 0; i < PreReqArrayTwo.length; i++) {
      if (isChecked(PreReqArrayTwo[i]) ) {
        checkedTwo = 1;
      }
    }
    checkedTwo = checkedOne * checkedTwo;
    if (checkedTwo > 0 && thisEnable == "y") Enable(courseId)
    else Disable(courseId);
  }
}

function CC() {
  // Check courses
  courselist.forEach(pr);
}

function isChecked(item) {
  return (document.getElementById(item).checked == true);
}

function Enable(selection) {
  document.getElementById(selection).disabled = false;
}

function Disable(selection) {
  document.getElementById(selection).disabled = true;
}
