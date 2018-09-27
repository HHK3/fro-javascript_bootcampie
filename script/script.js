//Defining the variables
var titel = document.getElementById("title");
var opdracht = document.getElementById("opdracht");
var link = document.getElementById("0");
var uitwerking = document.getElementById("uitwerking");
var indeling = document.getElementById("indeling");
var naam = document.getElementsByClassName("naam")[0];
var naam1 = document.getElementsByClassName("naam")[1];
var jaar = document.getElementsByClassName("jaar")[0];

//Changing the content at first page load
titel.innerHTML = "Click Event 1";
opdracht.innerHTML = "Klik op 'Click Event' om de content te wijzigen.";
uitwerking.innerHTML = "";
naam.innerHTML = "Joël Lakhai";
naam1.innerHTML = "Joël Lakhai";
jaar.innerHTML = "2018";
link.innerText = "Change Content";
indeling.innerText = "2de jaar student Mediadeveloper";

//Changing the Content with onclick on link
function changeContent() {
  if (link.id == "0") {
    document.getElementById("foto").src = "../pics/e.png";
    document.getElementById("0").id = "1";
    titel.innerHTML = "Click Event 2";
    opdracht.innerHTML =
      "Woesjh, content is gewijzigd! Klik op 'Change Content' om de content weer te wijzigen.";
    naam.innerHTML = "Skeleton with red eyes";
    naam1.innerHTML = "Skeleton with red eyes";
    jaar.innerHTML = "2018";
    indeling.innerHTML = "Enge skelet";
  } else if (link.id == "1") {
    document.getElementById("foto").src = "../pics/photo.jpg";
    document.getElementById("1").id = "0";
    titel.innerHTML = "Click Event 3";
    opdracht.innerHTML =
      "Woesjh, content is weer gewijzigd! Klik op 'Change Content' om de content weer te wijzigen.";
    naam.innerHTML = "Joël Lakhai";
    naam1.innerHTML = "Joël Lakhai";
    jaar.innerHTML = "2018";
    indeling.innerHTML = "2de jaar student Mediadeveloper";
  }
}
