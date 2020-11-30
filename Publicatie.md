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

## Aanbeveling: bulk downloads via GeoPackage met Vector Tiles extension
<div class="informative">
_AANBEVELING_ Gebruik GeoPackage met de Vector Tiles Community extentions voor bulk downloads, zoals beschreven op [https://www.geopackage.org/extensions.html](https://www.geopackage.org/extensions.html)
</div>

## Aanbeveling: gebruik HTTP Header Content-Encoding bij gzip compressie op de webserver

<div class="informative">
_AANBEVELING_ Als GZIP compressie gebruikt wordt op de webserver, geef dan de HTTP Header `Content-Encoding: gzip` mee.
</div>

## Aanbeveling: Documentatie

Als de vector tiles via de OGC API Tiles standaard worden aangeboden dan is in de core een `TileSet` requirement class beschreven. Deze bevat de beschrijving van de aangeboden tegels set en de bron beschrijving van de tegels. De response heeft 2 formaten: TileJSON en OGC JSON.
Deze bevat:
- tilematrixset links
- links naar de tegels
- geospatial data resoucres beschrijving
- metadata (attribution)
- request en response uitleg 

> **Requirement Class "TileSet"** Defines the response of a TileSet GET request (but not the path or the link for the request). The response has two formats: tilejson and OGC json. The OGC json includes tilematrixset links, a central point (optional), a links to the URI template to individual tiles, and the geospatial data resources involved in the creation of the tiles (optional), and other metadata (including attribution; optional) Defines how to formulate a request for individual tiles and how the response will look like (success and failure)

<div class="informative">

_AANBEVELING_ Ideaal beeld zou zijn aan te sluiten bij de OGC API Tiles definitie. Echter is deze nog niet volledig af. 

_AANBEVELING_ Mocht er nog niet aan te sluiten zijn bij de OGC API Tiles standaard, lever dan op zijn minst een TileJSON document aan bij een vector tegel set. Zoals gedefineerd in [Annex B.1. Example TileJson Document: Draft](https://htmlpreview.github.io/?https://github.com/opengeospatial/OGC-API-Tiles/blob/master/core/standard/OAPI_Tiles.html#_example_tilejson_document) van het OGC API Tiles document. 

Voor verdere beschrijvingen en metadata van een tegel set bron aanleveren:

_AANBEVELING_ Volg de aanbevelingen over documentatie uit de [[API Designrules]] voor de Nederlandse overheid: https://docs.geostandaarden.nl/api/API-Designrules/#documentation
</div>


### Aanbeveling: Data lagen
<div class="informative">
_AANBEVELING_ Een TileJSON format bevat een beschrijving van welke data lagen er aanwezig zijn in de vector tile set. Onder `"Vector Layers"`
</div>

### Aanbeveling: Overzooming
Voordelen van het gebruik van een TileJSON als vector tile bron: Overzooming op lagen. 
De layer definition met minzoom en maxzoom level definitie zorgt ervoor dat de client kan overzoomen op de tegels. Dit houd in, wanneer tegels niet beschikbaar zijn op een bepaald zoom level dan kan een client de tegels op van een bovenliggend zoom niveau ophalen.
<div class="informative">
_AANBEVELING_ `minzoom` en `maxzoom` definieren in de data lagen beschrijving. 
</div>

### Aanbeveling: Data Attributen 
<div class="informative">
_AANBEVELING_  Geef aan welke attributen (`fields`) er beschikbaar zijn per data laag. Een TileJSON format bevat geen beschrijving van de attributen die beschikbaar zijn per data laag. Wij bevelen aan deze los te documenteren of op te nemen als `additionalProperties` of `description` in de data laaq beschrijving.  
</div>


### Aanbeveling: Bron Attribution (bron annotatie)

Voordelen van het gebruik van een TileJSON als vector tile bron: Bron houder noemen. 

<div class="informative">
_AANBEVELING_  De bron `attribution` meegeven, zodat deze zichtbaar is als annotatie op de kaart in de client.
</div>

Denk aan; Mogelijke copyright annotatie. 

## Aanbeveling: Styling specificatie

<div class="informative">
_AANBEVELING_ Specificeer styles in MapboxGL style specification (https://docs.mapbox.com/mapbox-gl-js/style-spec/) (TODO: is dit de juiste manier of beter OGC API Styles?)
</div>

### Aanbeveling: Styling documenteren
<div class="informative">
_AANBEVELING_ Documenteer welke styling beschikbaar is en hoe die opgebouwd is
</div>


### Aanbeveling: Standaard stijl

<div class="informative">
_AANBEVELING_ Lever altijd minimaal een standaard stijl aan bij de vector tiles.
</div>
