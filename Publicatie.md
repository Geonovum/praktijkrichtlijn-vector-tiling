# Vector tiles aanbieden

## Eis: gebruik OGC API Tiles
Er is nu nog geen open standaard gereed voor publicatie. [[OGC-API-Tiles-Core]] lijkt dat wel te worden. Vooruitlopend op formele goedkeuring door OGC, schrijft deze praktijkrichtlijn deze API specificatie daarom voor.

<div class="advisement">
_EIS_ Als vector tiles via een API aangeboden worden, gebruik dan [[OGC-API-Tiles-Core]].
</div>

## Eis: Content-Type
<div class="advisement">
Als vector tiles via een API aangeboden worden, gebruik dan de HTTP Header `Content-Type` om het gebruikte media type van de vector tiles weer te geven.
</div>

## Aanbeveling: gebruik HTTP Header Content-Encoding bij gzip compressie op de webserver
<div class="informative">
_AANBEVELING_ Als GZIP compressie gebruikt wordt op de webserver, geef dan de HTTP Header `Content-Encoding: gzip` mee.
</div>

## Downloaden van vector tiles in statische bestanden
Voor sommige doelen, zoals gebruik in offline systemen of voor het kopiëren van vector tiles voor installatie van een eigen tileserver, is het handig om meerdere vector tiles of een hele set van vector tiles in één bestand te kunnen downloaden. Er zijn meerdere manieren in gebruik, zoals in _filebased databases_ als MBTiles of GeoPackage of het comprimeren (ZIPpen) van een directorystructuur met vector tiles. Elk van deze manieren kan geschikt zijn. Er is op dit moment geen specifieke eis of aanbeveling over op te nemen.
