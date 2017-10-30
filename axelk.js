document.getElementById('contactPage').style.display = "none";
document.getElementById('aboutPage').style.display = "none";

var dropDownPanel = document.getElementById('dropDownPanel');
var materialIcon = document.getElementById('materialIcon');
var container = document.getElementById('container');
var topBL = document.getElementById("topBL");
var lowBL = document.getElementById("lowBL");
var panelIsExtended = false;

function rotateMenuButton() {
  if (!panelIsExtended) {
    $(topBL).animate({ top: '3.5px' });
    $(lowBL).animate({ top: '4px' });
    topBL.style.transform = "rotate(45deg)";
    lowBL.style.transform = "rotate(-45deg)";
    topBL.style.width = "40px";
    lowBL.style.width = "40px";
    topBL.style.background = "red";
    lowBL.style.background = "red";
    panelIsExtended = true;
  } else {
    $(topBL).animate({ top: '1px' });
    $(lowBL).animate({ top: '7px' });
    topBL.style.transform = "rotate(0deg)";
    lowBL.style.transform = "rotate(0deg)";
    topBL.style.width = "30px";
    lowBL.style.width = "30px";
    topBL.style.background = "white";
    lowBL.style.background = "white";
    panelIsExtended = false;
  }
}

  $("#menuButton").on('click', function () {
    $(dropDownPanel).slideToggle("slow");
    rotateMenuButton();
  });

  $("#papersPageLink").on('click', function () {
    switchPages('papersPage');
  });

  $("#aboutPageLink").on('click', function () {
    switchPages('aboutPage');
  });

  $("#contactPageLink").on('click', function () {
    switchPages('contactPage');
  });

function switchPages(pageId) {
  document.getElementById('contactPage').style.display = "none";
  document.getElementById('papersPage').style.display = "none";
  document.getElementById('aboutPage').style.display = "none";
  document.getElementById(pageId).style.display = "block";
  if (panelIsExtended) {
    $(dropDownPanel).slideToggle("slow");
    rotateMenuButton();
  }
}
