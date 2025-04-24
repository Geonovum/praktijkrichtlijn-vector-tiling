# Documentatie

Het is belangrijk bij het aanleveren van een vector tile set (download of service) om de juiste metadata beschrijvingen en bron beschrijvingen mee te geven. Dit heeft een aantal technische voordelen en tegelijkertijd ook voordelen voor het delen, vinden en hergebruiken van bronnen.

## Eis: OGC API Tiles **"TileSet" requirement class**
<div class="advisement">
_EIS_ Sluit aan bij de OGC API Tiles definitie en de **"TileSet" requirement class** endpoint.
</div>

Als de vector tiles via de OGC API Tiles standaard worden aangeboden dan is in de core een **"TileSet" requirement class** beschreven. Deze bevat de beschrijving van de aangeboden vector tiles set en de bron beschrijving van de vector tiles (ook raster).

The response voorziet in metadata zoals beschreven door [[OGC Two Dimensional Tile Matrix Set and Tile Set Metadata 2.0 Standard]] . <!-- LINK VAN MAKEN--> 

Essentiele elementen van deze metadata zijn: 

- Beschikbare Tilematrixset links
- De URI van de TileMatrixSet
- Het Coordinaat Referentie Systeem (een URI heeft de voorkeur).
- Een dynamische link (URI) naar de inidividuele tiles.
- Beschrijving van de data types (bestaat deze uit vector, coverage of map tiles).

De metadata kan aanvullende informatie bevatten als: 

- een titel
- Beschrijving van de dataset
- De limieten van de tilset wanneer het niet de volledige omvang van de TilMatrixSet beslaat. 
- De geodata bronnen voor het creeëren van de tiles. 
- Een schema van de beschikbare properties van de tiles. 
- De styling die gebruikt wordt 
- Het middenpunt waar een viewer initieel op kan focussen. 
- Bronvermelding (Attribution)

<!-- verwijzen naar https://docs.ogc.org/is/17-083r4/17-083r4.html#toc20 ?-->

**Requirement Class "TileSet"** The tileset Requirements Class provides a mechanism to retrieve metadata for a set of tiles of geospatial data tiled according to one specific TileMatrixSet. This Class also provides a mechanism to obtain a templated link to retrieve individual tiles as defined in the core conformance class.

This Class describes the HTTP GET operation for accessing a tileset resource and its response but does not prescribe a specific path. The response provides metadata as per the OGC Two Dimensional Tile Matrix Set and Tile Set Metadata 2.0 Standard.

## Minimale aanbevelingen

In deze paragraaf staan meer details voor de verschillende metadata onderdelen die men kan aanleveren bij een vector tile set.

### Aanbeveling: Data lagen 
<div class="informative">
_AANBEVELING_ Zorg in een JSON bestand voor een beschrijving van welke data lagen er aanwezig zijn in de vector tile set bij het onderdeel "Layers"
</div>

### Aanbeveling: Overzooming
<div class="informative">
De _layer definition_ met `maxTileMatrix` en `minTileMatrix` level definitie zorgt ervoor dat de client kan overzoomen op de vector tiles. Dit houdt in dat, wanneer vector tiles niet beschikbaar zijn op een bepaald zoom level, een client de vector tiles op kan halen van een bovenliggend zoomniveau.

_AANBEVELING_ `maxTileMatrix` en `minTileMatrix` definiËren in de data lagen beschrijving.
</div>

### Aanbeveling: Data Attributen
<div class="informative">
_AANBEVELING_  Geef aan welke attributen (`properties`) er beschikbaar zijn per data laag. 
</div>

### Aanbeveling: Bron annotatie

<div class="informative">
_AANBEVELING_ Een JSON bestand kan de bronhouder bevatten, wat soms gewenst of vereist is om op te nemen in een applicatie. Zoals mogelijke copyright annotatie. Gebruik hiervoor 'Attribution'.
</div>

Optioneel kan ook een TileJSON worden toegevoegd.
De bijlage [TileJSON voorbeeld](#TileJSON) bevat als voorbeeld een een minimale TileJSON response met een Custom projection in Rijksdriehoekstelsel (RD New), EPSG:28992.

<div class="advisement">
_AANBEVELING_ Lever een [TileJSON](https://github.com/mapbox/tilejson-spec) document aan bij een vector tile set.

In TILEJSON:

### Aanbeveling: Projection in TileJSON
<div class="informative">
_AANBEVELING_ Lever een TileJSON met projectie (CRS) indien andere projectie dan EPSG:3857 gebruikt wordt.
Gebruik hiervoor een [Custom projection TileJSON](https://github.com/maptiler/tilejson-spec/tree/custom-projection/2.2.0)
</div>

### Aanbeveling: Gebruik format is tilejson parameter in het TileJSON path
<div class="informative">
Voeg 'f=tilejson' als parameter toe aan de url die de TileJSON levert.
Voorbeeld:
* https://example.com/ogc/v1/tiles/NetherlandsRDNewQuad?f=tilejson
</div>

### Aanbeveling: Data lagen TileJSON
<div class="informative">
_AANBEVELING_ Zorg in een TileJSON bestand voor een beschrijving van welke data lagen er aanwezig zijn in de vector tile set bij het onderdeel `"Vector Layers"`
</div>

### Aanbeveling: Overzooming TileJSON
Eén van de voordelen van het gebruik van een TileJSON bestand voor vector tiles is zogenaamde _overzooming_ op lagen.

De _layer definition_ met `minzoom` en `maxzoom` level definitie zorgt ervoor dat de client kan overzoomen op de vector tiles. Dit houdt in dat, wanneer vector tiles niet beschikbaar zijn op een bepaald zoom level, een client de vector tiles op kan halen van een bovenliggend zoomniveau.

<div class="informative">
_AANBEVELING_ `minzoom` en `maxzoom` definiëren in de data lagen beschrijving.
</div>

### Aanbeveling: Data Attributen TileJSON
<div class="informative">
_AANBEVELING_  Geef aan welke attributen (`fields`) er beschikbaar zijn per data laag. Een TileJSON bestand bevat verder geen beschrijving van de attributen die beschikbaar zijn per data laag. Wij bevelen aan deze beschrijving los te documenteren of op te nemen als `additionalProperties` of `description` in de data laag beschrijving.
</div>

### Aanbeveling: Bron annotatie TileJSON

Een TileJSON bestand kan de bronhouder bevatten, wat soms gewenst of vereist is om op te nemen in een applicatie. Zoals mogelijke copyright annotatie.

<div class="informative">
_AANBEVELING_  Geef de bron `attribution` op in een TileJSON bestand, zodat deze zichtbaar is als annotatie op de kaart in de client.
</div>

## API design rules Nederlandse Overheid
Verder raden wij aan ook te kijken naar de [[API-Designrules]] voor de Nederlandse overheid. Deze bevatten principes voor het aanbieden van APIs door Nederlandse overheidsorganisaties.

_AANBEVELING_ Volg de aanbevelingen over documentatie uit de [[API-Designrules]] voor de Nederlandse overheid: https://docs.geostandaarden.nl/api/API-Designrules/#documentation
