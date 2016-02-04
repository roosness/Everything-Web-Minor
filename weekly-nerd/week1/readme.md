# Arjen Westerdiep
##### Drububu

## Waar ging de talk over
Arjen Westerdiep van Drububu is een maker van Pixelart en WebGL Applicaties. Hij doet dit door te beginnen met schetsen van personages of objecten die hij interessant vindt. Wanneer deze zijn uitgewerkt trekt hij ze over met pixels. 10 jaar geleden maakte hij een animatie in Flash die zichzelf na kon tekenen. Doordat hij Pixelart combineerde met Flash kreeg hij enkele publicaties. Toen 3D populair werd ging Arjen zich daarin verdiepen. Zo maakte hij een programma waarin 3D objecten omgezet konden worden in LEGO. Op zijn website is te zien dat hij al enkele projecten heeft omgezet in LEGO zoals een hamburger  en een Porsche. De bestanden die hieruit kwamen waren erg groot waardoor het veel tijd kostte om deze bestanden te renderen. Hij bedacht een techniek door het plaatsen van bakens in plaats van nopjes op de lego stenen. Zo kon het bestand verstuurd worden en was alleen nog maar de computer van de gebruiker nodig om de bakens achteraf te berekenen. Tegenwoordig doet hij veel met de GPU om 3D animaties te maken. Hij gebruikt Web Workers om scripts uit te voeren die geen invloed hebben op de DOM waardoor de berekeningen sneller kunnen worden uitgevoerd.


## Follow Up
Links die interessant zijn voor dieper onderzoek zijn:
1. http://www.drububu.com/
2. http://www.html5rocks.com/en/tutorials/workers/basics/


##Technieken die ik interessant vond
De technieken die ik zelf erg interessant vind zijn, Web Workers, Feature Detection en het cachen van mouseEventListeners. In de volgende paragraaf zal ik uitleggen hoe deze werken en waarom ik ze interessant vind.

####Web Workers
Deze workers zorgen ervoor dat er scripts op de achtergrond worden uitgevoerd. Deze workers lopen een geïsoleerde thread af. Door middel van een constructor kan een worker worden aangemaakt. 
var worker = new Worker(‘task.js');

Hierna kan de worker worden gestart met 
`worker.run();`

Waarbij run() elke functie kan zijn die je zelf wilt. 

####Feature Detection
In de Weekly Nerd had Arjen het over Feature Detection. Dit gebruikte hij om te kijken wat wel en wat niet werkt. Door aan je code if/else-statements toe te voegen kan je eigenlijk loggen wat er op dat specifieke device wel of niet kan. Met deze informatie kan je makkelijk kijken wat waar wel en wat waar niet kan. Hieronder voorbeeld om te kijken of er gebruik gemaakt kan worden van de geolocatie van een bepaald device


`if ('geolocation' in navigator) {
  // Geolocation API is supported
}`

####Cachen van mouseEventListeners
Van deze techniek heb ik zelf nog nooit van gehoord maar het lijkt me erg gaaf om te kunnen tracken (zowel lokaal door middel van een cookie, als extern via een database) wat er nou voor mouseEvents plaats vinden op een site/applicatie. Met de data hiervan kunnen verschillende flows verbeterd worden.


