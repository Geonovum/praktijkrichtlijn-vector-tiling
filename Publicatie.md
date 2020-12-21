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

## Aanbeveling: gebruik HTTP Header Content-Encoding bij gzip compressie op de webserver
<div class="informative">
_AANBEVELING_ Als GZIP compressie gebruikt wordt op de webserver, geef dan de HTTP Header `Content-Encoding: gzip` mee.
</div>

## Downloaden van tiles in statische bestanden
Voor sommige doelen, zoals gebruik in offline systemen of voor het kopiëren van tiles voor installatie van een eigen tileserver, is het handig om meerdere tiles of een hele tileset in één bestand te kunnen downloaden. Er zijn meerdere manieren in gebruik, zoals filebased databases in MBTiles of GeoPackage formaat of het comprimeren (ZIPpen) van een directorystructuur met tiles. Elk van deze manieren kan geschikt zijn. Er is op dit moment geen specifieke eis of aanbeveling over op te nemen.
