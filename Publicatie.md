# Vector tiles aanbieden

## Eis: gebruik OGC API Tiles
Er is nu nog geen open standaard gereed voor publicatie. [[OGC-API-Tiles-Core]] lijkt dat wel te worden. Vooruitlopend op formele goedkeuring door OGC, schrijft deze praktijkrichtlijn deze API specificatie daarom voor.

<div class="advisement">
_EIS_ Als vector tiles via een API aangeboden worden, gebruik dan [[OGC-API-Tiles-Core]].
</div>

## Eis: Content-Type
<div class="advisement">
_EIS_ Als vector tiles via een API aangeboden worden, gebruik dan de HTTP Header `Content-Type` om het gebruikte media type van de vector tiles weer te geven.
</div>

Omdat deze Prakrijktrichtlijn voorschrijft om [Mapbox Vector Tile specification te gebruiken](#eis-mapbox-vector-tile-specification-versie-2-1), geldt:

<div class="advisement">
_EIS_ Gebruik `application/vnd.mapbox-vector-tile` als media type (_MIME_) bij het aanbieden via het web.
</div>

## Eis: gebruik HTTP Header Content-Encoding gzip
Voor allerlei bestanden wordt _gzip_ compressie toegepast om de bestanden kleiner te maken bij het ophalen van de webserver. Via de generieke HTTP Header `Content-Encoding: gzip` wordt dit aangegeven. Ook voor vector tiles is deze gzip compressie vaak in gebruik. Als de gzip compressie niet kenbaar is gemaakt via de HTTP Header Content-Encoding, kunnen (bepaalde) clients de tiles niet goed verwerken. Bijvoorbeeld van [OpenLayers](https://openlayers.org/) is bekend dat deze de vector tiles dan helemaal niet kan verwerken.

<div class="advisement">
_EIS_ Als GZIP compressie gebruikt wordt op de webserver, geef dan de HTTP Header `Content-Encoding: gzip` mee.
</div>

<aside class="example" title="Voorbeeld HTTP Headers vector tile met gzip compressie">

Onderstaande HTTP Header illustreert gzip compressie voor een vector tile die in Mapbox vector tile format is aangeboden:

```
Content-Encoding: gzip
Content-Type: application/vnd.mapbox-vector-tile
```

</aside>


## Downloaden van vector tiles
Voor sommige doelen, zoals gebruik in offline systemen of voor het kopiëren van vector tiles voor installatie van een eigen vector tileserver, is het handig om meerdere vector tiles of een hele set van vector tiles in één bestand te kunnen downloaden. Er zijn meerdere manieren in gebruik, zoals in _filebased databases_ als MBTiles of GeoPackage of het comprimeren (ZIPpen) van een directorystructuur met vector tiles. Elk van deze manieren kan geschikt zijn. Er is op dit moment geen specifieke eis of aanbeveling over op te nemen.
