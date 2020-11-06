function GetIEVersion() {
  var sAgent = window.navigator.userAgent;
  var Idx = sAgent.indexOf("MSIE");
  // If IE, return version number.
  if (Idx > 1)
    return parseInt(sAgent.substring(Idx+ 5, sAgent.indexOf(".", Idx)));

  // If IE 11 then look for Updated user agent string.
  else if (!!navigator.userAgent.match(/Trident\/7\./))
    return 11;

  else
    return -1; //It is not IE

}
if (GetIEVersion() > 6){
    alert("U gebruikt Internet Explorer versie: " + GetIEVersion() + " \ndeze browser verouderd.\nHierdoor werken sommige pagina's niet goed meer en/of zijn ze onveilig.\nWij raden u aan om een andere internet browser te gebruiken zoals:\nGoogle Chrome, Mozilla Firefox, Microsoft Edge\n\n\nHeeft u vragen over dit bericht of wilt u meer uitleg,\nbericht dan de ICT-Crew (ict.crew-rpcl@eemsdeltacollege.nl)");
 }
