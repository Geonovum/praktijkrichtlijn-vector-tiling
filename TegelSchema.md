# Tegel schema
**hoofdstuk is werk in uitvoering**

## Eis: Coordinaat Referentie Systemen
[[MapboxVT]] schrijft geen coordinaat referentie systeem voor om te gebruiken in tiles.
Veel tools ondersteunen latitude en longitude in WGS84 en bevatten vaak ook methodes om andere CRSen te ondersteunen. OGC APIs gaan in de basis uit van WGS84 als CRS. Via extensies kunnen andere CRSen ondersteund worden.

Het OGC en W3C zeggen in de Spatial Data on the Web Best Practices [[SDW-BP]]: ... https://www.w3.org/TR/sdw-bp/#CRS-background en https://www.w3.org/TR/sdw-bp/#bp-crs-choice.

Van coördinaten in WGS84 is bekend dat die op het Europees vasteland soms te grote afwijkingen kunnen vertonen. In Nederland is WGS84 niet nauwkeurig genoeg als de data gebruikt wordt bij toepassingen die nauwkeuriger dan 1 meter moeten zijn.

Voor publicatiedoeleinden bij de meeste (web)applicatie geldt dat WGS84 echter acceptabel is.

<div class="advisement">
_EIS_

Gebruik WGS84 als de vector tegels bedoeld zijn voor toepassingen die niet nauwkeuriger zijn dan 1 meter.

Gebruik ETRS89/... als de vector tegels bedoeld zijn voor toepassingen die nauwkeuriger zijn dan 1 meter.

</div>

TODO: gebruik van RD?

## Eis: tile origin
Per CRS een tile origin definiëren?


## Eis: zoomniveaus

<div class="advisement">
_EIS_ Ondersteun tenminste X zoomniveaus
</div>


## Eis: tile extent
<div class="advisement">
_EIS_ Een tegel is altijd vierkant en is 256 bij 256 pixels, 512 bij 512, 1024 bij 1024?
</div>

## Eis: platte index
Bij tiling wordt normaal gesproken bij 1 niveau verder inzoomen een tegel opgeknipt in 4 nieuwe tegels (een zogenaamde _platte index_ / _flat index_). Het kan nuttig zijn om vanwege datadichtheid dit niet te doen, maar slimmer om te gaan met bijna lege tiles (niet meer opknippen). Ook het overslaan van zoomniveaus wordt wel eens toegepast. Beide methodes vragen om een slimmere index, waarmee duidelijk is bij welke stappen wel of juist geen nieuwe tile opgevraagd moet worden. Een dergelijke slimme index is voor clients lastiger om te gebruiken. De Prakrijktrichtlijn schrijft daarom alleen een platte index voor.

<div class="advisement">
_EIS_ Gebruik een platte / flat index als indeling voor tegels.
</div>


## Aanbeveling: tile bestandsgrootte
<div class="informative">
_Aanbeveling_ Beperk de bestandsgrootte van een tegel tot 500kb?
</div>
