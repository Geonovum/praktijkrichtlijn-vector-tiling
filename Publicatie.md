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
