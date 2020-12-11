# Best practices
**Werk in uitvoering**

Deze bijlage heeft tot doel om onderwerpen voor best practies documentatie te verzamelen.


## Wanneer vector tiles?
Welke afwegingen neem je, wanneer wel en wanneer beter niet vector tiles (beter iets anders)?


## Aanbeveling: Optimalisatie tegel set

Tegels zo klein en clean mogelijk houden draagt bij aan de snelheid van het binnenhalen van de tegels en het renderen van de data aan de client side.

Wat kan je doen?

* Goed Pre-processing
* Juiste configuratie data lagen in de tegel set
* Optimale styling en bronnen binnen halen (zie A.3.2.?)

### Pre-processing data

Simplificatie en nette geometrien maken voordat er vector tegels van worden gemaakt, helpt bij het klein houden van het tegel bestands formaat. 

Door Simplificatie zo veel mogelijk in de voorbewerking van de data doen, houd je het meeste controle over hoe de data uiteindelijk gepresenteerd wordt. 

Simplificatie kan op meerdere manieren behaald worden: 

* de vertices van de geometrien te beperken en te verminderen.
* Geometrien daadwerkelijk versimpelen tot een simpelere vorm. 
* Kleinere coordinate precisie 
* Valide geometrien maken (Geen self-intersecting)
* Aggregeren van data tot een grover niveau. Bijvoorbeeld aggregeren van pand naar blok of buurt niveau. 

* Verwijderen van snippets en heel kleine polygonen

* attributen juist inrichten Bijvoorbeeld: minder decimalen achter de comma in de attribuut data of zelfs integer gebruiken

<div class="informative">
_AANBEVELING_ Aanbeveling doen rondom Simplificeren
Houdt ook rekening met bepaalde tussenpunten i.r.t. CRS.
</div>

### Tegel set Configuratie

* Minder data op de lagere zoom niveaus laten zien. (aggregatie laten zien op lager zoom niveau) 
* Data op bepaalde zoom niveaus niet aanleveren. 
* Overzooming toestaan zodat de hoogste zoom niveaus geen tegels gerenderd hoeven worden. 
* Attribuut data beperken tot minimale vereiste voor de toepassing (niet gebruiken om alle data te laten zien die je in huis hebt)
* Een geometrie soort per data laag gebruiken


### Aanbeveling: tile bestandsgrootte
<div class="informative">
_Aanbeveling_ Beperk de bestandsgrootte van een tegel, in omvang en hoeveelheid geometrie.bijvoorbeeld 500kb of 100.000 features  
</div>

Sommige tooling bied mogelijkheden tot het configureren van simplificatie bij de generatie van vecotr tiles. Bijvoorbeeld:
* weglaten van de kleinste polygonen
* drop densest 
* drop fraction 

Door de simplificatie aan de tooling over te laten krijg je makkelijker en snel kleinere tegels. Echter hierbij verlies je de invloed op de methode van simplificatie op jouw geometrien en kun je onverwachte resultaten krijgen. Daarom raden wij aan dat het beter is de data zelf eerst te optimaliseren om de meeste invloed op het simplificatie methode te hebben. En zo min mogelijk simplificatie door een genarator tool te laten doen.  

## Aanbeveling: Clipping & buffering

<div class="informative">
_AANBEVELING_ Aanbeveling doen rondom clipping, ook rekening houden met CRS (o.a. mogelijk issue van lange lijnen i.c.m. herprojectie)
</div>


## Aanbeveling: Optimalisatie Styling en bron bevraging 

Het aantal vector tile bronnen, lagen en de complexiteit van de features dragen allemaal bij aan de rendering tijd van de kaart. 

Om een kaart sneller te maken kun je het aantal lagen, bronnen en de complexiteit van de feautres verminderen. 

Meer tips zie: https://docs.mapbox.com/help/troubleshooting/mapbox-gl-js-performance/
