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


## Aanbeveling: Tile json overzooming
<div class="informative">
_AANBEVELING_ ?
</div>

## Aanbeveling: Standaard stijl

<div class="informative">
_AANBEVELING_ Lever een standaard stijl bij de vector tiles.
</div>


## Aanbeveling: Documentatie
<div class="informative">
_AANBEVELING_ Volg de aanbevelingen over documentatie uit de [[API Designrules]] voor de Nederlandse overheid: https://docs.geostandaarden.nl/api/API-Designrules/#documentation
</div>

Specifiek voor vector tiles gelden onderstaande aanbevelingen voor documentatie.

### Aanbeveling: Data lagen
<div class="informative">
_AANBEVELING_ Documenteer welke data lagen er zijn
</div>

### Aanbeveling: Attributen
<div class="informative">
_AANBEVELING_ Documenteer welke attributen er zijn per laag
</div>

### Aanbeveling: Styling specificatie

<div class="informative">
_AANBEVELING_ Specificeer styles in MapboxGL style specification (https://docs.mapbox.com/mapbox-gl-js/style-spec/) (TODO: is dit de juiste manier of beter OGC API Styles?)
</div>

### Aanbeveling: Styling documenteren
<div class="informative">
_AANBEVELING_ Documenteer welke styling beschikbaar is en hoe die opgebouwd is
</div>
