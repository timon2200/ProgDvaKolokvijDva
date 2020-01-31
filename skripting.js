hideslike = () => {
  console.log("Stisnul si na izbornik SLIKE");

  slika1 = document.getElementById("slika1");
  slika2 = document.getElementById("slika2");

  if (slika1.style.display === "none") {
    slika1.style.display = "block";
    slika2.style.display = "none";
  } else {
    slika2.style.display = "block";
    slika1.style.display = "none";
  }
};

hideSlider = () => {
  console.log("Stisnul si na izbornik CRVENILO");

  slika1 = document.getElementById("slika1");
  slika2 = document.getElementById("slika2");

  slika1.style.display = "none";
  slika2.style.display = "none";

  slider = document.getElementById("slider");
  if (slider.style.display === "none") {
    slider.style.display = "block";
  } else {
    slider.style.display = "none";
  }
};

slide = document.getElementById("myRange");

slide.oninput = function() {
  val = document.getElementById("myRange").value;
  document.getElementById("cardContainer").style.backgroundColor =
    "rgb(" + "255" + "," + val + "," + val + ")";
};

updateVrijeme = () => {
  console.log("Stisnul si na izbornik VRIJEME");

  d = new Date();
  mjesec = d.getMonth();

  mjeseci = [
    "Siječanj",
    "Veljača",
    "Ožujak",
    "Travanj",
    "Svibanj",
    "Lipanj",
    "Srpanj",
    "Kolovoz",
    "Rujan",
    "Listopad",
    "Studeni",
    "Prosinac"
  ];

  vrijeme = d.getHours() + ":" + d.getMinutes();
  console.log(vrijeme);

  document.getElementById("trenVrijeme").innerHTML =
    mjeseci[mjesec] + " " + vrijeme;
};
updateVrijeme();

var Predmet =
  '{ "predmeti" : [' +
  '{ "naziv":"Prog2" , "predavac":"Stan", "studij":"MOP","semestar":"3" },' +
  '{ "naziv":"Fiz" , "predavac":"Kliček", "studij":"MOP","semestar":"1" }]}';
