# Tegel schema
**hoofdstuk is werk in uitvoering**

## Eis: Coordinaat Referentie Systemen
[[MapboxVT]] schrijft geen coordinaat referentie systeem voor om te gebruiken in tiles.
Veel tools ondersteunen latitude en longitude in WGS84 en bevatten vaak ook methodes om andere CRSen te ondersteunen. OGC APIs gaan in de basis uit van WGS84 als CRS. Via extensies kunnen andere CRSen ondersteund worden.

Het OGC en W3C zeggen in de Spatial Data on the Web Best Practices [[SDW-BP]]: ... https://www.w3.org/TR/sdw-bp/#CRS-background en https://www.w3.org/TR/sdw-bp/#bp-crs-choice.

Van coördinaten in WGS84 is bekend dat die op het Europees vasteland soms te grote afwijkingen kunnen vertonen. In Nederland is WGS84 niet nauwkeurig genoeg als de data gebruikt wordt bij toepassingen die nauwkeuriger dan 1 meter moeten zijn.
Voor het maken van tiles zullen geometrieen omgerekend worden naar het lokale stelsel van een vector tile. Dit betekent dat de originele geometrie nauwkeurigheid verliest in een vector tile.

Omdat de scope van deze Prakrijktrichtlijn visualisatie is, stelt deze praktijkrichtlijn minder hoge eisen aan nauwkeurigheid aan de geometrische verwerking dan voor sommige toepassingen gewenst kan zijn.

Voor publicatiedoeleinden bij de meeste (web)applicatie geldt dat WGS84 acceptabel is. En voor visualisatie van achtergrondkaarten betekent dat in web applicaties vaak Web Mercator.


Merk op dat WGS84 niet scherp gedefinieerd is --> Stuk Jochem?

Voor de te gebruiken CRSen, kan het beste aangesloten worden bij bestaande standaarden.

<div class="advisement">
_EIS_ Biedt tegels aan in _tenminste_ één van de volgende Coordinaat referentie systemen:
* Web Mercator: EPSG:3857 (met EPSG:4326 eronder). Als de vector tegels bedoeld zijn voor toepassingen die niet nauwkeuriger zijn dan 1 meter. --> Opmerking Jochem: “Het lijkt me handig om te specificeren dat met webmercator bij voorkeur bedoelt wordt: webmercator op basis van WGS84-G1762 wat gelijkgesteld kan worden aan ITRF2008.”
* Rijksdriehoekstelsel: EPSG:28992. Dit kan voor nauwkeurige toepassingen beter zijn voor Nederlandse data.
* ETRS89 gebaseerd: maar dan web mercator? of INSPIRE projecties? --> TODO: native?. Gebruik ETRS89/... als de vector tegels bedoeld zijn voor toepassingen die nauwkeuriger zijn dan 1 meter.
</div>

TODO: Toelichting CRSen via Jochem?

### Eis: publicatie van gebruikte CRS
TODO: hoe publiceer je het gebruikte CRS? Onderdeel van de API (OGC API Tiles)? Of op een andere manier.
Lijkt erop dat OGC API Ttiles dan een extensie nodig hebben. Core ondersteunt alleen (https://github.com/opengeospatial/OGC-API-Tiles/tree/master/core#core-class-in-the-core):

```
The core is:

    Only support for well known tilematrixsets.
    Only one geospatial resource (collection)
    No TileMatrixSet internal definition (only the eight TileMatrixSets defined in OGC 17-083r2 annex D)
    No featureInfo
    Can only retrieve one tile at a time
    No information about updates in tiles data

```

## Eis: tile origin
TODO: Per CRS een tile origin definiëren.
Dit leidt tot bepaalde tilignschemas, zie ook OGC definities van tiling schemas (in json?)
TODO: overnemen van een standaard TileMatrixSet definitie (termen van OGC)

## Eis: zoomniveaus
<div class="advisement">
_EIS_ Ondersteun tenminste X zoomniveaus
</div>

## Eis: afmetingen van de tile
<div class="advisement">
_EIS_ Een tegel is altijd vierkant en is 256 bij 256 pixels, 512 bij 512, 1024 bij 1024?
</div>

Hiermee wordt de "extent of the tile" bedoeld, in termen van [[MapboxVT]].
Alternatief: “interne resolutie” / “discreet grid” / “extent of the tile”


## Eis: platte index
Bij tiling wordt normaal gesproken bij 1 niveau verder inzoomen een tegel opgeknipt in 4 nieuwe tegels (een zogenaamde _platte index_ / _flat index_). Het kan nuttig zijn om vanwege datadichtheid dit niet te doen, maar slimmer om te gaan met bijna lege tiles (niet meer opknippen). Ook het overslaan van zoomniveaus wordt wel eens toegepast. Beide methodes vragen om een slimmere index, waarmee duidelijk is bij welke stappen wel of juist geen nieuwe tile opgevraagd moet worden. Een dergelijke slimme index is voor clients lastiger om te gebruiken. De Prakrijktrichtlijn schrijft daarom alleen een platte index voor.

<div class="advisement">
_EIS_ Gebruik een platte / "flat" index als indeling voor tegels.
</div>
