# Coördinaat referentie systemen voor vector tiles

## Coördinaat referentie systemen bij beoogd gebruik
<div class="informative">

Het OGC en W3C beschrijven in de Spatial Data on the Web Best Practices [[SDW-BP]] dat het CRS WGS84 vaak de voorkeur heeft.
Een CRS kiezen dat bij de potentiële gebruikers breed bekend is, heeft voordelen in de adoptatie en het kunnen hergebruiken van data. Zie de paragrafen [CRS background](https://www.w3.org/TR/sdw-bp/#CRS-background) en [Best practice 7](https://www.w3.org/TR/sdw-bp/#bp-crs-choice):

> Best Practice 7: Choose coordinate reference systems to suit your user's applications
>
> Consider your user's intended application when choosing the coordinate reference system(s) used to publish spatial data

Veel tools ondersteunen latitude en longitude in WGS84 en bevatten vaak ook methodes om andere CRSen te ondersteunen. OGC APIs gaan in de basis uit van WGS84 als CRS. Via extensies kunnen andere CRSen ondersteund worden. De [[Mapbox-Vector-Tile-Specification]] gaat uit van de Web Mercator projectie (met WGS84 als datum) maar bevat verder geen verplichting voor een specifiek Coördinaat Referentie Systeem (CRS) voor vector tiles.
</div>

## Onnauwkeurigheid WGS84 en bijstelling
Door tektonische verschuiving van Europa veranderen coördinaten in WGS84 en ITRS van punten in Nederland met 2,5 cm/jaar. Coördinaten in ETRS89 veranderen in Nederland niet vanwege tektonische verschuiving. Het verschil tussen WGS84 en ETRS89 is daardoor opgelopen tot ruim 0,8 m in 2020. WGS84 is daarom minder geschikt voor nauwkeurige toepassingen.

WGS84 wordt periodiek bijgesteld op basis van nieuwe metingen. Voor nauwkeurige eenduidige definitie van het CRS is het daarom nodig een specifieke realisatie van WGS84 te vermelden (bijvoorbeeld WGS84-G1762, EPSG:9057). Vanwege de tektonische verschuiving van Europa is het daarnaast nodig het tijdstip (epoche) van de geldigheid van de coördinaten te vermelden. Bij coördinaten die direct in WGS84 gemeten zijn (zoals met een niet-landmeetkundige GPS-ontvanger) is het epoche het tijdstip van de meting. Bij transformatie van RD/ETRS89 naar een WGS84-realisatie wordt impliciet een referentie-epoche gebruikt of moet de gebruiker een epoche opgeven. Wanneer geen specifieke WGS84-realisatie gespecificeerd wordt, dan wordt meestal een onnauwkeurige nul-transformatie tussen ETRS89 en WGS84 gebruikt.

Strikt genomen wordt met Web Mercator bij voorkeur bedoeld: Web Mercator op basis van WGS84-G1762, wat gelijkgesteld kan worden aan ITRF2008.

Voor publicatiedoeleinden bij de meeste (web)applicatie geldt dat WGS84 acceptabel is, ondanks de beschreven onnauwkeurigheid. En voor visualisatie van achtergrondkaarten betekent dat in web applicaties vaak Web Mercator. Als de vector tiles bedoeld zijn voor toepassingen die niet nauwkeuriger zijn dan 1 meter, is dit een voldoende nauwkeurig coördinaat referentie systeem.

<aside class="example" title="Resolutie en nauwkeurigheid WebMercator">
Voor [de TileMatrixSet van WebMercator](http://schemas.opengis.net/tms/1.0/json/examples/WebMercatorQuad.json) geldt dat een tile op zoomniveau 17 (bij benadering een schaal van 1:4200), ongeveer 300 meter beslaat. Let op: de afmeting in meters is afhankelijk van de locatie op aarde, maar voor dit voorbeeld is ongeveer 300 meter voldoende. Dit betekent dat 1 pixel in een tile van 256 * 256 pixels een afstand vertegenwoordigt van:

`1 pixel = 300 meter / 256 pixels ~ 1,2 meter`
</aside>

In de Praktijkrichtlijn hanteren we voor Web Mercator de gangbare EPSG code EPSG:3857 ([WGS84 / Pseudo-Mercator](https://epsg.org/crs_3857/WGS-84-Pseudo-Mercator.html)), met als Geodetisch CRS WGS84 conform EPSG:4326.

## Impact onnauwkeurigheid gering voor beoogde vector tiling toepassingen
Voor het maken van vector tiles zullen geometriëen omgerekend worden naar het lokale stelsel van een vector tile, in integers (vaak in een bereik van 0-4096 bij 0-4096). Dit betekent dat de originele geometrie nauwkeurigheid verliest in een vector tile. De impact hiervan is voor de meeste datasets gering.

<aside class='example' title='Rekenvoorbeeld nauwkeurigheid vector tiling in lokale stelsel'>
Een rekenvoorbeeld van dit verlies op zoomniveau 12 (bij benadering een schaal van 1:3000, zie [de `Well-known scale set Nederland` uit de Nederlandse Richtlijn Tiling](https://www.geonovum.nl/uploads/standards/downloads/nederlandse_richtlijn_tiling_-_versie_1.1.pdf)), als gevolg van de inherente simplifcatie in `mvt` format:

Gegeven dat:
1.  de resolutie op zoomniveau 12: 0,84 m/pixels is in de TileMatrixSet `NetherlandsRDNewQuad` voor het Rijksdriehoekstelsel
1.  een interne vector tile extent 4096*4096 integers beslaat
1.  een tilesize 256 pixels is

Betekent dit dat:
*   de tile een gebied van: 256 pixels * 0,84 meter/pixel = 215,04 meter (bij 215,04 meter) representeert
*   en komt de (maximale) nauwkeurigheid van de geometrie in `mvt` format op: 215,04/4096 = 0,0525 m . Dus ~ 5 cm op zoomniveau 12.

Algemeen: de nauwkeurigheid van de geometrie _in het lokale stelsel_ van een vector tile is:

`nauwkeurigheid vector tile = (256 * resolutie van het zoomniveau)/4096`

Op zoomniveau 10 (bij benadering 1:12.000) is de nauwkeurigheid dan 0,21 meter.
</aside>
