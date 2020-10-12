# Tegels aanbieden
**hoofdstuk is werk in uitvoering**

## Eis: custom URL schema of OGC API Tiles?
OGC API Tiles is nog in ontwikkeling, laatste fase van specificatie.

<div class="advisement">
_EIS_ Als tegels via een API aangeboden worden, gebruik dan OGC API Tiles of een URL schema als ...
</div>

## Aanbeveling: bulk downloads via MBTiles
<div class="informative">
_AANBEVELING_ Gebruik MBTiles voor bulk downloads (ter beschikking stellen van sets van tiles)
</div>

## Aanbeveling: gebruik geen gzip op de webserver
Stuk intro waarom beter geen GZIP bij tiling gebruiken.

<div class="informative">
_AANBEVELING_ biedt tiles aan zonde GZIP compressie op de webserver
</div>

## Aanbeveling: Tile json overzooming
<div class="informative">
_AANBEVELING_ ?
</div>

## Aanbeveling: Standaard stijl

<div class="informative">
_AANBEVELING_ Lever een standaard stijl bij de vector tiles.
</div>

## Aanbeveling: Styling specificatie

<div class="informative">
_AANBEVELING_ Specificeer styles in MapboxGL style specification (https://docs.mapbox.com/mapbox-gl-js/style-spec/)
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

### Aanbeveling: Styling documenteren
<div class="informative">
_AANBEVELING_ Documenteer welke styling beschikbaar is en hoe die opgebouwd is
</div>
