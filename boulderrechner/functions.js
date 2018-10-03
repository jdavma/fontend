
function Check(Eingabe) {
  var nur_das ="0123456789[]()-+*%/y";
  for (var i = 0; i < Eingabe.length; i++)
   if (nur_das.indexOf(Eingabe.charAt(i))<0 ) return false;
  return true;
 }

 function Ergebnis() {
   var x = 0;
  if (Check(window.document.Rechner_1.Display1.value))
     x = eval(window.document.Rechner_1.Display1.value);
   window.document.Rechner_1.Display1.value = x;
 }

 function Hinzufuegen1(Zeichen) {
   window.document.Rechner_1.Display1.value =
   window.document.Rechner_1.Display1.value + Zeichen;
 }

function Hinzufuegen3(y) {
   var y = Math.floor((Math.random() * 10) + 10);
   window.document.Rechner_1.Display1.value =
   window.document.Rechner_1.Display1.value + y;
 }
 


<!--Hier startet das Programm für den zweiten Boulderrechner-->


function Check(Eingabe) {
  var nur_das ="0123456789[]()-+*%/";
  for (var i = 0; i < Eingabe.length; i++)
   if (nur_das.indexOf(Eingabe.charAt(i))<0 ) return false;
  return true;
 }

 function Ergebnis_() {
   var x = 0;
  if (Check(window.document.Rechner_2.Display2.value))
     x = eval(window.document.Rechner_2.Display2.value);
   window.document.Rechner_2.Display2.value = x;
 }

 function Hinzufuegen2(Zeichen) {
   window.document.Rechner_2.Display2.value =
   window.document.Rechner_2.Display2.value + Zeichen;
 }
 
