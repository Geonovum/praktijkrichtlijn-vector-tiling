# Tegel schema
**hoofdstuk is werk in uitvoering**

## Coördinaat Referentie Systemen
<div class="informative">
[[Mapbox Vector Tile Specification]] schrijft geen Coördinaat Referentie Systeem (CRS) voor om te gebruiken in vector tiles conform die specificatie.
Veel tools ondersteunen latitude en longitude in WGS84 en bevatten vaak ook methodes om andere CRSen te ondersteunen. OGC APIs gaan in de basis uit van WGS84 als CRS. Via extensies kunnen andere CRSen ondersteund worden.

Het OGC en W3C beschrijven in de Spatial Data on the Web Best Practices [[SDW-BP]] waarom WGS84 vaak de voorkeur heeft. Een CRS kiezen dat bij de potentiële gebruikers breed bekend is, heeft voordelen in de adoptatie en het kunnen hergebruiken van data. Zie de paragrafen [CRS background](https://www.w3.org/TR/sdw-bp/#CRS-background) en [Best practice 7](https://www.w3.org/TR/sdw-bp/#bp-crs-choice):

> Best Practice 7: Choose coordinate reference systems to suit your user's applications
>
> Consider your user's intended application when choosing the coordinate reference system(s) used to publish spatial data

Door tektonische verschuiving van Europa veranderen coördinaten van punten in Nederland met 2,5 cm/jaar. Het verschil tussen WGS84 en ETRS89 is daardoor opgelopen tot ruim 0,8 m in 2020. WGS84 is daarom minder geschikt voor nauwkeurige toepassingen.

Voor het maken van tiles zullen geometrieen omgerekend worden naar het lokale stelsel van een vector tile. Dit betekent dat de originele geometrie nauwkeurigheid verliest in een vector tile.

Voor publicatiedoeleinden bij de meeste (web)applicatie geldt daarom dat WGS84 acceptabel is. En voor visualisatie van achtergrondkaarten betekent dat in web applicaties vaak Web Mercator. Als de vector tiles bedoeld zijn voor toepassingen die niet nauwkeuriger zijn dan 1 meter, is dit een voldoende nauwkeurig coördinaat referentie systeem.

<p class="note" title="Notitie over realisatie van WGS84 en Web Mercator">
WGS84 is wordt periodiek bijgesteld op basis van nieuwe metingen. Voor nauwkeurige eenduidige definitie van het CRS is het daarom nodig een specifieke realisatie van WGS84 te vermelden (bijvoorbeeld WGS84-G1762, EPSG:9057). Vanwege de tektonische verschuiving van Europa is het daarnaast nodig het tijdstip (epoche) van de geldigheid van de coördinaten te vermelden. Bij coördinaten die direct in WGS84 gemeten zijn (zoals met een niet-landmeetkundige GPS-ontvanger) is het epoche het tijdstip van de meting. Bij transformatie van RD/ETRS89 naar een WGS84-realisatie wordt impliciet een referentie-epoche gebruikt of moet de gebruiker een epoche opgeven. Wanneer geen specifieke WGS84-realisatie gespecificeerd wordt, dan wordt meestal een onnauwkeurige nul-transformatie tussen ETRS89 en WGS84 gebruikt.

Strikt genomen wordt met Web Mercator bij voorkeur bedoeld: Web Mercator op basis van WGS84-G1762, wat gelijkgesteld kan worden aan ITRF2008.

In de Praktijkrichtlijn hanteren we echter de gangbare EPSG code EPSG:3857 ([WGS84 / Pseudo-Mercator](https://epsg.org/crs_3857/WGS-84-Pseudo-Mercator.html)), met als Geodetisc CRS WGS84 conform EPSG:4326.
</p>

</div>

## Eis: te gebruiken TileMatrixSets
Voor het te gebruiken CRS en grid (oorsprong, grid indeling en zoomniveaus), kan het beste aangesloten worden bij bestaande standaarden. Het OGC definieert in [[OGC-Two-Dimensional-Tile-Matrix-Set]] enkele zogenaamde _TileMatrixSets_, internationaal te gebruiken tiling schema's voor raster en vector tiling. Deze nemen we als basis voor de praktijkrichtlijn. Er is geen OGC TileMatrixSet voor het Rijksdriehoekstelsel.

<div class="advisement">
_EIS_ Biedt tegels aan in _tenminste_ één van de volgende Coordinaat referentie systemen:

* Web Mercator: EPSG:3857. TileMatrixSetId van OGC: `WebMercatorQuad`, URI: [http://schemas.opengis.net/tms/1.0/json/examples/WebMercatorQuad.json](http://schemas.opengis.net/tms/1.0/json/examples/WebMercatorQuad.json).
* ETRS89, projectie Lambert Azimuthal Equal Area. TileMatrixSetId van OGC: `EuropeanETRS89_LAEAQuad`, URI: [http://schemas.opengis.net/tms/1.0/json/examples/EuropeanETRS89_LAEAQuad.json](http://schemas.opengis.net/tms/1.0/json/examples/EuropeanETRS89_LAEAQuad.json). Dit kan voor Europese toepassingen, met hogere nauwkeurigheid dan 1 meter, geschikt zijn.
* Rijksdriehoekstelsel (RD New), EPSG:28992. TileMatrixSetId: `NetherlandsRDNewQuad`, URI: **NOG TE BEPALEN / PUBLICEREN** [NetherlandsRDNewQuad.json](media/NetherlandsRDNewQuad.json). Dit kan voor nauwkeurige toepassingen met Nederlandse data het meest geschikt zijn.
</div>

### Publicatie van gebruikte CRS
Als vector tiles via OGC API Tiles worden aangeboden, is de TileMatrixSetId onderdeel van de URL en beschrijving van de tiles. Daarmee is het gebruikte CRS gepubliceerd.

<p class="note" title="OGC API Tiles beschrijft beperkte set TileMatrixSets">
[[OGC-API-Tiles-Core]] beschrijft alleen een beperkte standaardset van 8 TileMatrixSets, uit [[OGC-Two-Dimensional-Tile-Matrix-Set]]. Vooruitlopend op een extensie om andere TileMatrixSets te ondersteunen, kiezen we in deze Praktijkrichtlijn voor een zelfde mechanisme om de TileMatrixSet te publiceren als eentje uit de standaardset van [[OGC-API-Tiles-Core]].
</p>

## Eis: afmetingen van de tile / high resolution tiles
TODO: kan deze vervallen als we TileMatrixSets gebruiken?

TODO: we gaan uit van 256 pixels. Of willen we juist 512 of 1024 juist voor Retina schermen als default? Mapbox heeft 512 als default

<div class="advisement">
_EIS_ Een tegel is altijd vierkant en is 256 bij 256 pixels, 512 bij 512, 1024 bij 1024?
</div>

Hiermee wordt de "extent of the tile" bedoeld, in termen van [[Mapbox Vector Tile Specification]].
Alternatief: “interne resolutie” / “discreet grid” / “extent of the tile”

## Eis: platte index
Bij tiling wordt normaal gesproken bij 1 niveau verder inzoomen een tegel opgeknipt in 4 nieuwe tegels (een zogenaamde _platte index_ / _flat index_). Het kan nuttig zijn om vanwege datadichtheid dit niet te doen, maar slimmer om te gaan met bijna lege tiles (niet meer opknippen). Ook het overslaan van zoomniveaus wordt wel eens toegepast. Beide methodes vragen om een slimmere index, waarmee duidelijk is bij welke stappen wel of juist geen nieuwe tile opgevraagd moet worden. Een dergelijke slimme index is voor clients lastiger om te gebruiken. De Prakrijktrichtlijn schrijft daarom alleen een platte index voor.

<div class="advisement">
_EIS_ Gebruik een platte / "flat" index als indeling voor tegels.
</div>
