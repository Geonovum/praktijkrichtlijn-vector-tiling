# TileMatrixSet

Het OGC definieert in [[OGC-Two-Dimensional-Tile-Matrix-Set]] enkele zogenaamde _TileMatrixSets_, internationaal te gebruiken tiling schema's voor raster en vector tiling. Deze nemen we als basis voor de praktijkrichtlijn.

Een _TileMatrixSet_ bestaat uit een oorsprong, grid indeling en zoomniveaus voor een bepaald Coördinaat Referentie Systeen (CRS).

## Coördinaat Referentie Systemen
<div class="informative">
Voor het te gebruiken CRS en grid kan het beste aangesloten worden bij bestaande standaarden. Het OGC en W3C beschrijven in de Spatial Data on the Web Best Practices [[SDW-BP]] dat het CRS WGS84 vaak de voorkeur heeft. Web Mercator en andere WGS84 gebaseerde CRSen zijn veelgebruikt bij vector tiles en tools hebben hier brede ondersteuning voor.

Maar WGS84 is voor Nederland (en andere Europese landen) tot op zekere hoogte onnauwkeurig. Afhankelijk van de toepassing kan dit ongewenste effecten hebben. De bijlage [Coördinaat referentie systemen voor vector tiles](#CRSachtergrond) bevat meer informatie over deze (on)nauwkeurigheid en wat de impact is voor vector tiles.

Voor de meeste toepassingen die vector tiles gebruiken binnen de scope van deze Prakrijktrichtlijn is Web Mercator voldoende nauwkeurig.
</div>

## Eis: te gebruiken TileMatrixSets
[[OGC-API-Tiles-Core]] beschrijft alleen een beperkte standaardset van 8 TileMatrixSets, uit [[OGC-Two-Dimensional-Tile-Matrix-Set]]. Omdat er nog geen OGC TileMatrixSet voor het Rijksdriehoekstelsel is, hebben wij deze opgesteld en opgenomen als bijlage voor deze praktijkrichtlijn. Zie de bijlage: [NetherlandsRDNewQuad.json](media/NetherlandsRDNewQuad.json)

Vooruitlopend op een extensie om andere TileMatrixSets te ondersteunen, kiezen we in deze Praktijkrichtlijn voor een zelfde mechanisme om de TileMatrixSet te publiceren als eentje uit de standaardset van [[OGC-API-Tiles-Core]].

<div class="advisement">
_EIS_ Biedt vector tiles aan in _tenminste_ één van de volgende _TileMatrixSets_ voor de coördinaat referentie systemen:

* Web Mercator: EPSG:3857. TileMatrixSetId van OGC: `WebMercatorQuad`, URI: [http://schemas.opengis.net/tms/1.0/json/examples/WebMercatorQuad.json](http://schemas.opengis.net/tms/1.0/json/examples/WebMercatorQuad.json).
* ETRS89, projectie Lambert Azimuthal Equal Area, EPSG:3035. TileMatrixSetId van OGC: `EuropeanETRS89_LAEAQuad`, URI: [http://schemas.opengis.net/tms/1.0/json/examples/EuropeanETRS89_LAEAQuad.json](http://schemas.opengis.net/tms/1.0/json/examples/EuropeanETRS89_LAEAQuad.json). Dit kan voor Europese toepassingen, met hogere nauwkeurigheid dan 1 meter, geschikt zijn.
* Rijksdriehoekstelsel (RD New), EPSG:28992. TileMatrixSetId: `NetherlandsRDNewQuad`, URI: **NOG TE BEPALEN / PUBLICEREN** [NetherlandsRDNewQuad.json](media/NetherlandsRDNewQuad.json). Dit kan voor nauwkeurige toepassingen met Nederlandse data het meest geschikt zijn.
</div>

Als vector tiles via OGC API Tiles worden aangeboden, is de TileMatrixSetId onderdeel van de URL en beschrijving van de vector tiles. Daarmee is het gebruikte CRS gepubliceerd.
