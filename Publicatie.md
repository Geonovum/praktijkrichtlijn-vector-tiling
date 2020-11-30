# Tegels aanbieden
**hoofdstuk is werk in uitvoering**

## Eis: gebruik OGC API Tiles
Er is nu nog geen open standaard gereed voor publicatie. [[OGC-API-Tiles-Core]] lijkt dat wel te worden. Vooruitlopend op formele goedkeuring door OGC, schrijft deze praktijkrichtlijn deze API specificatie daarom voor.

<div class="advisement">
_EIS_ Als tegels via een API aangeboden worden, gebruik dan [[OGC-API-Tiles-Core]].
</div>


## Eis: Content-Type
<div class="advisement">
Als tiles via een API aangeboden worden, gebruik dan de HTTP Header `Content-Type: X` voor de tiles.
</div>

## Aanbeveling: bulk downloads via MBTiles of GeoPackage
<div class="informative">
_AANBEVELING_ Gebruik MBTiles voor bulk downloads (ter beschikking stellen van sets van tiles)

TODO: GeoPackage en tiles [http://www.geopackage.org/spec/#tiles](http://www.geopackage.org/spec/#tiles)
</div>

## Aanbeveling: gebruik HTTP Header Content-Encoding bij gzip compressie op de webserver

<div class="informative">
_AANBEVELING_ Als GZIP compressie gebruikt wordt op de webserver, geef dan de HTTP Header `Content-Encoding: gzip` mee.
</div>

## Aanbeveling: Standaard stijl

<div class="informative">
_AANBEVELING_ Lever een standaard stijl bij de vector tiles.
</div>


## Aanbeveling: Documentatie
<div class="informative">
Als de vector tiles via de OGC API Tiles standaard worden aangeboden dan is in de core een `TileSet` requirement class beschreven. Deze bevat de beschrijving van de aangeboden tegels set en de bron beschrijving van de tegels. De response heeft 2 formaten: TileJSON en OGC JSON.
Deze bevat:
- tilematrixset links
- links to the individual tiles
- geospatial data resoucres beschrijving
- metadata (attribution)
- request en response uitleg 

_AANBEVELING_ Ideaal beeld zou zijn aant te sluiten bij de OGC API Tiles definitie. Echter is deze nog niet volledig af. 

_AANBEVELING_ Mocht er nog niet aan te sluiten zijn bij de OGC API Tiles standaard, lever dan op zijn minste en TileJSON document aan bij een vector tegel set. Zoals gedefineerd in [Annex B.1. Example TileJson Document: Draft](https://htmlpreview.github.io/?https://github.com/opengeospatial/OGC-API-Tiles/blob/master/core/standard/OAPI_Tiles.html#_example_tilejson_document) van het OGC API Tiles document. 

Voor verdere beschrijvingen en metadate over een tegel set bron aanleveren:

_AANBEVELING_ Volg de aanbevelingen over documentatie uit de [[API Designrules]] voor de Nederlandse overheid: https://docs.geostandaarden.nl/api/API-Designrules/#documentation
</div>

### Aanbeveling: Bron Attribution (bron annotatie)
Voordelen van het gebruik van een TileJSON als vector tile bron :

_AANBEVELING_  De bron *attribution* meegeven, zodat deze zichtbaar is als annotatie op de kaart in de client. 

Mogelijke copyright annotatie. 

### Aanbeveling: Data lagen
<div class="informative">
_AANBEVELING_ Een TileJSON format bevat een beschrijving van welke data lagen er aanwezig zijn in de vector tile set. 
</div>

### Aanbeveling: Overzooming
2. Overzooming op lagen. De layer definition met min en max zoom level definitie zorgt ervoor dat de client kan overzoomen op de tegels. Dit houd in, wanneer tegels niet beschikbaar zijn op een bepaald zoom level dan kan een client de tegels op van een bovenliggend zoom niveau ophalen.

_AANBEVELING_ Min en max zoom definieren in de data lagen beschrijving. 

### Aanbeveling: Data Attributen 
<div class="informative">
_AANBEVELING_  Een TileJSON format bevat geen beschrijving van de attributen die beschikbaar zijn per data laag. Wij bevelen aan deze los te documenteren of op te nemen in de meta data beschrijving per laag.
</div>

## Aanbeveling: Styling specificatie

<div class="informative">
_AANBEVELING_ Specificeer styles in MapboxGL style specification (https://docs.mapbox.com/mapbox-gl-js/style-spec/) (TODO: is dit de juiste manier of beter OGC API Styles?)
</div>

### Aanbeveling: Styling documenteren
<div class="informative">
_AANBEVELING_ Documenteer welke styling beschikbaar is en hoe die opgebouwd is
</div>
