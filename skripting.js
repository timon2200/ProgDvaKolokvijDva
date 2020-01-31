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

slide.onchange = function() {
  val = document.getElementById("myRange").value;
  document.getElementById("cardCont").style.backgroundColor =
    "rgb(" + val + "," + "0" + "," + "0" + ")";
};

updateVrijeme = () => {
  console.log("Stisnul si na izbornik VRIJEME");

  d = new Date();
  mjesec = d.getMonth();
  mjesectostring = "nistajos";

  vrijeme = d.getHours() + ":" + d.getMinutes();
  console.log(vrijeme);
  switch (mjesec) {
    case 0:
      mjesectostring = "Siječanj";
      break;
    case 1:
      mjesectostring = "Veljača";
      break;
    case 2:
      mjesectostring = "Ožujak";
      break;
    case 3:
      mjesectostring = "Travanj";
      break;
    case 4:
      mjesectostring = "Svibanj";
      break;
    case 5:
      mjesectostring = "Lipanj";
      break;
    case 6:
      mjesectostring = "Srpanj";
      break;
    case 7:
      mjesectostring = "Kolovoz";
      break;
    case 8:
      mjesectostring = "Rujan";
      break;
    case 9:
      mjesectostring = "Listopad";
      break;
    case 10:
      mjesectostring = "Studeni";
      break;
    case 11:
      mjesectostring = "Prosinac";
      break;
  }
  console.log(mjesectostring);

  document.getElementById("vrij").innerHTML = mjesectostring + " " + vrijeme;
};
updateVrijeme();

var Predmet =
  '{ "predmeti" : [' +
  '{ "naziv":"bla bla" , "predavac":"ja ti ko god", "studij":"zfj","semestar":"1" },' +
  '{ "naziv":"bla bla" , "predavac":"ja ti ko god", "studij":"zfj","semestar":"1" }]}';
