# Coördinaat referentie systemen voor vector tiles

## Coördinaat referentie systemen bij beoogd gebruik
<div class="informative">
Een CRS kiezen dat bij de potentiële gebruikers breed bekend is, heeft voordelen in de adoptatie en het kunnen hergebruiken van data. Zie de paragrafen [CRS background](https://www.w3.org/TR/sdw-bp/#CRS-background) en [Best practice 7](https://www.w3.org/TR/sdw-bp/#bp-crs-choice):

> Best Practice 7: Choose coordinate reference systems to suit your user's applications
>
> Consider your user's intended application when choosing the coordinate reference system(s) used to publish spatial data

Het OGC en W3C beschrijven in de Spatial Data on the Web Best Practices [[SDW-BP]] dat het CRS WGS84 vaak de voorkeur heeft.

Veel tools ondersteunen latitude en longitude in WGS84 en bevatten vaak ook methodes om andere CRSen te ondersteunen. OGC APIs gaan in de basis uit van WGS84 als CRS. Via extensies kunnen andere CRSen ondersteund worden. De [[Mapbox-Vector-Tile-Specification]] gaat uit van de Web Mercator projectie (met WGS84 als datum) maar bevat verder geen verplichting voor een specifiek Coördinaat Referentie Systeem (CRS) voor vector tiles.
</div>

## Onnauwkeurigheid WGS84 en bijstelling
Door tektonische verschuiving van Europa veranderen coördinaten van punten in Nederland met 2,5 cm/jaar. Het verschil tussen WGS84 en ETRS89 is daardoor opgelopen tot ruim 0,8 m in 2020. WGS84 is daarom minder geschikt voor nauwkeurige toepassingen.

WGS84 wordt periodiek bijgesteld op basis van nieuwe metingen. Voor nauwkeurige eenduidige definitie van het CRS is het daarom nodig een specifieke realisatie van WGS84 te vermelden (bijvoorbeeld WGS84-G1762, EPSG:9057). Vanwege de tektonische verschuiving van Europa is het daarnaast nodig het tijdstip (epoche) van de geldigheid van de coördinaten te vermelden. Bij coördinaten die direct in WGS84 gemeten zijn (zoals met een niet-landmeetkundige GPS-ontvanger) is het epoche het tijdstip van de meting. Bij transformatie van RD/ETRS89 naar een WGS84-realisatie wordt impliciet een referentie-epoche gebruikt of moet de gebruiker een epoche opgeven. Wanneer geen specifieke WGS84-realisatie gespecificeerd wordt, dan wordt meestal een onnauwkeurige nul-transformatie tussen ETRS89 en WGS84 gebruikt.

Strikt genomen wordt met Web Mercator bij voorkeur bedoeld: Web Mercator op basis van WGS84-G1762, wat gelijkgesteld kan worden aan ITRF2008.

## Impact onnauwkeurigheid WGS84 gering voor beoogde vector tiling toepassingen
Voor het maken van tiles zullen geometriëen omgerekend worden naar het lokale stelsel van een vector tile, in integers (vaak in een bereik van 0-4096 bij 0-4096). Dit betekent dat de originele geometrie nauwkeurigheid verliest in een vector tile.

Voor publicatiedoeleinden bij de meeste (web)applicatie geldt dat WGS84 acceptabel is, ondanks de beschreven onnauwkeurigheid. En voor visualisatie van achtergrondkaarten betekent dat in web applicaties vaak Web Mercator. Als de vector tiles bedoeld zijn voor toepassingen die niet nauwkeuriger zijn dan 1 meter, is dit een voldoende nauwkeurig coördinaat referentie systeem.

In de Praktijkrichtlijn hanteren we voor Web mercator de gangbare EPSG code EPSG:3857 ([WGS84 / Pseudo-Mercator](https://epsg.org/crs_3857/WGS-84-Pseudo-Mercator.html)), met als Geodetisch CRS WGS84 conform EPSG:4326.
