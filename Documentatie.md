# Documentatie

Het is belangrijk bij het aanleveren van een vector tile set (download of service) om de juiste metadata beschrijvingen en bron beschrijvingen mee te geven. Dit heeft een aantal technische voordelen en tegelijkertijd ook voordelen voor het delen, vinden en hergebruiken van bronnen.

## Eis: OGC API Tiles **"TileSet" requirement class**
Als de vector tiles via de OGC API Tiles standaard worden aangeboden dan is in de core van de OGC standaard een [TileSet requirement class](http://www.opengis.net/spec/ogcapi-tiles-1/1.0/req/tileset) beschreven. Deze bevat de beschrijving van de aangeboden vector tiles set en de bron beschrijving van de vector tiles (ook raster).

<div class="advisement">
_EIS_ Sluit aan bij de OGC API Tiles definitie en de TileSet requirement class endpoint.
</div>

De respons voorziet in metadata zoals beschreven door [OGC Two Dimensional Tile Matrix Set and Tile Set Metadata 2.0 Standard](https://docs.ogc.org/is/17-083r4/17-083r4.html). 

Essentiele elementen van deze metadata zijn: 

- Beschikbare Tilematrixset links
- De URI van de TileMatrixSet
- Het Coordinaat Referentie Systeem (een URI heeft de voorkeur).
- Een dynamische link (URI) naar de individuele tegels.
- Beschrijving van de data types (bestaat deze uit vector, coverage of map tiles).

De metadata kan aanvullende informatie bevatten als: 

- een titel
- Beschrijving van de dataset
- De limieten van de tileset wanneer het niet de volledige omvang van de TilMatrixSet beslaat. 
- De geodata bronnen voor het creëren van de tiles. 
- Een schema van de beschikbare properties van de tiles. 
- De styling die gebruikt wordt 
- Het middenpunt waar een viewer initieel op kan focussen. 
- Bronvermelding (Attribution)

## Minimale aanbevelingen
In deze paragraaf staan meer details voor de verschillende metadata onderdelen die men kan aanleveren bij een vector tile set.

### Aanbeveling: Data lagen 
<div class="informative">
_AANBEVELING_ Zorg in een JSON bestand voor een beschrijving van welke data lagen er aanwezig zijn in de vector tile set bij het onderdeel "Layers"
</div>

### Aanbeveling: Overzooming
<div class="informative">

Voor een tiles endpoint is in de OGC API een tileMatrixSet te definiëren.
Iedere tilematrix kan voorzien worden van [tileMatrixSetLimits](https://docs.ogc.org/is/17-083r4/17-083r4.html#table12).
Hierin wordt door middel van `maxTileRow`, `minTileRow`, `maxTileCol` en `minTileCol` voor ieder `tileMatrix` aangegeven welke tiles beschikbaar zijn voor welke zoomlevels .
Deze definitie zorgt ervoor dat de client kan overzoomen op de vector tiles.
Dit houdt in dat, wanneer vector tiles niet beschikbaar zijn op een bepaald zoom level, een client de vector tiles op kan halen van een bovenliggend zoomniveau voor de tileMatrixSet. 

_AANBEVELING_ `tileMatrixsetlimits` definiëren in de OGC API Tiles tilematrix beschrijving.
</div>

<aside class="example" title="Voorbeeld in json">
Onderstaande voorbeeld laat TileMatrtixSetLimits in json zien. 
```json
"tileMatrixSetLimits": [
    {
     "tileMatrix": "12",
     "minTileRow": 0,
     "maxTileRow": 4095,
     "minTileCol": 0,
     "maxTileCol": 4095
    }
   ]
```
</aside>

### Aanbeveling: Data Attributen
<div class="informative">
_AANBEVELING_  Geef aan welke attributen (`properties`) er beschikbaar zijn per data laag. 
</div>

### Aanbeveling: Bron annotatie

<div class="informative">
_AANBEVELING_ Een JSON bestand kan de bronhouder bevatten, wat soms gewenst of vereist is om op te nemen in een applicatie. Zoals mogelijke copyright annotatie. Gebruik hiervoor 'Attribution'.
</div>

Optioneel kan ook een TileJSON worden toegevoegd.
De bijlage [TileJSON voorbeeld](#TileJSON) bevat als voorbeeld een minimale TileJSON response met een Custom projection in Rijksdriehoekstelsel (RD New), EPSG:28992.

<div class="informative">
_AANBEVELING_ Lever een [TileJSON](https://github.com/mapbox/tilejson-spec) document aan bij een vectortile set.
</div>

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

### Aanbeveling: Over- en underzooming TileJSON
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

### Aanbeveling: tile bestandsgrootte
De bestandsgrootte van rastertiles wordt beperkt door het aantal pixels (breedte en hoogte), de kleurdiepte en de variatie in pixelwaarden. De bestandsgrootte van vectortiles wordt bepaald door meerdere factoren:
- het aantal objecten dat in een vectortile zitten
- het aantal coördinaten dat de contouren van die objecten beschrijft
- het aantal atributen van het object
- de attribuutwaarden van het object

Het zorgvuldig kiezen van welke attributen worden opgenomen in tiles-datasets is van belang voor efficiënt gegevensbeheer.
Door enkel de essentiële attributen toe te voegen, wordt onnodige gegevensuitwisseling voorkomen, wat de prestaties verbetert en de netwerkbelasting vermindert.
Daarnaast kan het selectief opnemen van attributen waarop veelvuldig gefilterd wordt helpen bij het optimaliseren van de dataset voor specifieke gebruiksscenario's.

Het opvragen van extra informatie via een andere server op basis van een unieke identificatie die wel in de vectortegel beschikbaar is biedt real-time toegang tot actuele gegevens.
Dit is vooral gunstig bij dynamische datasets, waarbij voorkomen wordt dat vectortiles herhaaldelijk gegenereerd moeten worden, of in situaties waar een hoge mate van actualiteit vereist is.

Bovendien maakt deze aanpak gecontroleerde toegang mogelijk op basis van autorisatie, waardoor bijvoorbeeld de privacy en beveiliging van persoonsgegevens worden gewaarborgd.

<div class="informative">
_AANBEVELING_ Beperk de bestandsgrootte van een vectortile, in omvang en hoeveelheid vectoren. bijvoorbeeld 500kb of 100.000 features.
</div>
