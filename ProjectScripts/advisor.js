$(document).ready(function() {
  // executes when HTML-Document is loaded and DOM is ready
  createList();
});

var courselist = [{
  "Course": "MAC1105",
  "Name": "College Algebra"
}, {
  "Course": "MAC1114",
  "Name": "Trigonometry",
  "PreReq": ["MAC1105"]
}, {
  "Course": "CET1112",
  "Name": "Digital Fundamentals and Lab", 
}, {
  "Course": "MAC1140",
  "Name": "PreCalculus",
  "PreReq": ["MAC1105"]
}, {
  "Course": "MAC2311",
  "Name": "Calculus",
  "PreReq": ["MAC1140", "MAC1114"]
}, {
  "Course": "COT3100",
  "Name": "Discrete Analaysis",
  "PreReq": ["MAC1105"]
}, {
  "Course": "COP1000",
  "Name": "Principles of Programming"
}, {
  "Course": "COP2800",
  "Name": "Java Programming",
  "PreReq": ["COP1000"]
}, {
  "Course": "CTS3348",
  "Name": "Linux Administration",
  "PreReq": ["COP1000"]
}, {
  "Course": "CET3116",
  "Name": "Digital Technology",
  "PreReq": ["MAC1105"]
}, {
  "Course": "EET3086",
  "Name": "Electrical Circuits",
  "PreReq": [ "MAC1114"]
}, {
  "Course": "ENC1101",
  "Name": "Composition",
}, {
  "Course": "GEB3213",
  "Name": "Business Writing",
  "PreReq": ["ENC1101"]
}, {
  "Course": "CIS4250",
  "Name": "Ethics in Computing",
  "PreReq": ["GEB3213"]
}, {
  "Course": "COP3530",
  "Name": "Data Structures",
  "PreReq": ["COT3100", "COP2800"]
}, {
  "Course": "CEN3722",
  "Name": "Human Computer Interfaces",
  "PreReq": ["COP2800"]
}, {
  "Course": "COP4708",
  "Name": "Applied Database",
  "PreReq": ["COP2800"]
}, {
  "Course": "COP4610",
  "Name": "Operating Systems",
  "PreReq": ["CTS3348"]
}, {
  "Course": "CIS4360",
  "Name": "Applied Cybersecurity",
  "PreReq": ["CTS3348"]
}, {
  "Course": "CNT3104",
  "Name": "Introduction to Telecom",
  "PreReq": ["EET3086"]
}, {
  "Course": "CNT4007",
  "Name": "Data Communications",
  "PreReq": ["CNT3104"]
}, {
  "Course": "CNT4703",
  "Name": "Voice/Data Networks",
  "PreReq": ["CNT4007"]
}, {
  "Course": "CDA4101",
  "Name": "Computer Organization and Design",
  "PreReq": ["CET3116"],
  "Other": ["CET1112"]
}, {
  "Course": "CEN4801",
  "Name": "Systems Inegration",
  "PreReq": ["COP3530"]
}, {
  "Course": "CEN4010",
  "Name": "Software Engineering",
  "PreReq": ["COP3530"]
}, {
  "Course": "COP4813",
  "Name": "Web Systems I",
  "PreReq": ["COP3530"]
}, {
  "Course": "COP4709",
  "Name": "Applied Database II",
  "PreReq": ["COP4708"]
}, {
  "Course": "COP4834",
  "Name": "Web Systems II",
  "PreReq": ["COP4813", "COP4708"]
}, {
  "Course": "CIS4360",
  "Name": "Project Management in IT",
  "PreReq": ["CEN4010"]
}, {
  "Course": "CET4884",
  "Name": "Security Methods and Practices",
  "PreReq": ["CIS4360"]
}, {
  "Course": "CET4860",
  "Name": "Introdcution to Digital Forensics",
  "PreReq": ["CIS4360"]
}, {
  "Course": "CET4861",
  "Name": "Advanced Digital Forensics",
  "PreReq": ["CET4860"]
}, {
  "Course": "CET4862",
  "Name": "Network Forensics and Incident Response",
  "PreReq": ["CET4860"]
}]

function createList() {

  for (var i = 0; i < courselist.length; i++) {

    var _disabled = true;
    if ((courselist[i].PreReq == null) && (courselist[i].Other == null)) {
      _disabled = false;
    }

    addCheckbox(courselist[i].Name, courselist[i].Course, _disabled)
  }
}

function addCheckbox(_name, _id, _disabled) {
  var container = $('#box');


  $('<input />', {
    type: 'checkbox',
    id: _id,
    value: _name,
    disabled: _disabled,
    class: 'checkbox'
  }).appendTo(container);

  $('<label />', {
    'for': _id,
    text: _id + ' ' + _name
  }).appendTo(container);

  container.append('<br/>');
}

$("#box").delegate("input", "click", function() {
  CC();
});

function pr(course, index) {
  // course is the course in question

  var checked = true;
  var check1 = true;

  // preReqArray  is the array of pre-requisites
  var courseId = course.Course;
  var preReqArray = course.PreReq;
  var otherArray = course.Other;

  if ((preReqArray == null) && otherArray == null) {
      return;
  }
 
  // Goes through the list of pre-requisites
  // to see if each one is met if any are not met
  // then pre-requisites are not met
  
  for (var i = 0; i < preReqArray.length; i++) {
    if (!isChecked(preReqArray[i])) {
        checked = false;
    }   
  }

  for (var i = 0; i < otherArray.length; i++) {
    if ((checked = false) && !isChecked(otherArray[i])) {
        check1 = false;
    }
}

  if (checked) {
      Enable(courseId);
  }
  else {
      Disable(courseId);
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
