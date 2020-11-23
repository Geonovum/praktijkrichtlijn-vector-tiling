# Best practices
**Werk in uitvoering**

Deze bijlage heeft tot doel om onderwerpen voor best practies documentatie te verzamelen.


## Wanneer vector tiles?
Welke afwegingen neem je, wanneer wel en wanneer beter niet vector tiles (beter iets anders)?


## Pre-processing


## Aanbeveling: Optimalisatie tegel set

Simplificatie draagt bij aan het optimaliseren van een tegel set. 

* Minder data op de lagere zoom niveaus laten zien. (aggregatie laten zien op lager zoom niveau) 
* Data op bepaalde zoom niveaus niet aanleveren. 
* Overzooming toestaan zodat de hoogste zoom niveaus geen tegels gerenderd hoeven worden. 
* Attribuut data beperken tot minimale vereiste voor de toepassing (niet gebruiken om alle data te laten zien die je in huis hebt)
* minder decimalen achter de comma in de attribuut data  (integer gebruiken) 


### Aanbeveling: tile bestandsgrootte
<div class="informative">
_Aanbeveling_ Beperk de bestandsgrootte van een tegel, in omvang en hoeveelheid geometrie.
</div>

TODO: toelichting, bijvoorbeeld 500kb of 100.000 features  

### Aanbeveling: Simplificeren

<div class="informative">
_AANBEVELING_ Aanbeveling doen rondom Simplificeren
Houdt ook rekening met bepaalde tussenpunten i.r.t. CRS.
</div>

Simplificatie zo veel mogelijk in de voorbewerking van de data doen, zodat je het meeste controle hebt over hoe de data uiteindelijk gepresenteerd wordt. 

Simplificatie kan op meerdere manieren behaald worden: 

* de vertices van de geometrien te beperken en te verminderen.
* Geometrien daadwerkelijk versimpelen tot een simpelere vorm. 
* Aggregeren van data tot een grover niveau. Bijvoorbeeld aggregeren van pand naar blok of buurt niveau. 

Sommige tooling bied Simplificatie instellingen aan zoals:
* weglaten van de kleinste polygonen
* drop densest 
* drop fraction 
Beter is dit aan de data kant zelf eerst te optimaliseren om de meeste invloed op het simplificatie methode te hebben. 

### Aanbeveling: Clipping & buffering

<div class="informative">
_AANBEVELING_ Aanbeveling doen rondom clipping, ook rekening houden met CRS (o.a. mogelijk issue van lange lijnen i.c.m. herprojectie)
</div>
