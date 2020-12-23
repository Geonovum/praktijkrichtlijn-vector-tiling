# Documentatie

Het is belangrijk bij het aanleveren van een vector tile set (download of service) om de juiste metadata beschrijvingen en bron beschrijvingen mee te geven. Dit heeft een aantal technische voordelen en tegelijkertijd ook voordelen voor het delen, vinden en hergebruiken van bronnen.

## Eis: OGC API Tiles *"TileSet" requirement class*
<div class="advisement">
_EIS_ Sluit zoveel mogelijk aan bij de OGC API Tiles definitie en de  *"TileSet" requirement class* endpoint.
</div>

Als de vector tiles via de OGC API Tiles standaard worden aangeboden dan is in de core een *"TileSet" requirement class* beschreven. Deze bevat de beschrijving van de aangeboden vector tiles set en de bron beschrijving van de vector tiles (ook raster). De response heeft 2 formaten: TileJSON en OGC JSON.

Deze beschrijvingen bevatten o.a. :
- Beschikbare Tilematrixset links
- Links naar de vector tiles
- Geospatial data resoucres beschrijving
- Metadata (attribution)
- Request en response uitleg

> **Requirement Class "TileSet"** Defines the response of a TileSet GET request (but not the path or the link for the request). The response has two formats: tilejson and OGC json. The OGC json includes tilematrixset links, a central point (optional), a links to the URI template to individual tiles, and the geospatial data resources involved in the creation of the tiles (optional), and other metadata (including attribution; optional) Defines how to formulate a request for individual tiles and how the response will look like (success and failure)


## Eis: Handmatige TileJSON

Omdat de OGC API Tiles specificatie nog niet af is en om die reden nog niet aan te sluiten is bij deze specificatie, raden wij het volgende alternatief aan:

<div class="advisement">
_EIS_ Lever op zijn minst een TileJSON document aan bij een vector tile set. Zoals gedefineerd in [Annex B.1. Example TileJson Document: Draft](https://htmlpreview.github.io/?https://github.com/opengeospatial/OGC-API-Tiles/blob/master/core/standard/OAPI_Tiles.html#_example_tilejson_document) van het OGC API Tiles document.
</div>

In de praktijk betekent dit het handmatig aanleveren van een TileJSON bestand. Ook zijn er software tools die een TileJSON of Capabilities bestand genereren. Controleer hierbij of alle van de volgende minimale aanbevelingen juist zijn opgenomen.

## Minimale aanbevelingen

In deze paragraaf staan meer details voor de verschillende metadata onderdelen die men kan aanleveren bij een vector tile set.

### Aanbeveling: Data lagen
<div class="informative">
_AANBEVELING_ Zorg in een TileJSON bestand voor een beschrijving van welke data lagen er aanwezig zijn in de vector tile set bij het onderdeel `"Vector Layers"`
</div>

### Aanbeveling: Overzooming
Eén van de vordelen van het gebruik van een TileJSON bestand voor vector tiles is zogenaamde _overzooming_ op lagen.

De _layer definition_ met `minzoom` en `maxzoom` level definitie zorgt ervoor dat de client kan overzoomen op de vector tiles. Dit houdt in dat, wanneer vector tiles niet beschikbaar zijn op een bepaald zoom level, een client de vector tiles op kan halen van een bovenliggend zoomniveau.

<div class="informative">
_AANBEVELING_ `minzoom` en `maxzoom` definiëren in de data lagen beschrijving.
</div>

### Aanbeveling: Data Attributen
<div class="informative">
_AANBEVELING_  Geef aan welke attributen (`fields`) er beschikbaar zijn per data laag. Een TileJSON bestand bevat verder geen beschrijving van de attributen die beschikbaar zijn per data laag. Wij bevelen aan deze beschrijving los te documenteren of op te nemen als `additionalProperties` of `description` in de data laag beschrijving.
</div>

### Aanbeveling: Bron annotatie

Een TileJSON bestand kan de bronhouder bevatten, wat soms gewenst of vereist is om op te nemen in een applicatie. Zoals mogelijke copyright annotatie.

<div class="informative">
_AANBEVELING_  Geef de bron `attribution` op in een TileJSON bestand, zodat deze zichtbaar is als annotatie op de kaart in de client.
</div>

## API design rules Nederlandse Overheid
Verder raden wij aan ook te kijken naar de [[API-Designrules]] voor de Nederlandse overheid. Deze bevatten principes voor het aanbieden van APIs door Nederlandse overheidsorganisaties.

_AANBEVELING_ Volg de aanbevelingen over documentatie uit de [[API-Designrules]] voor de Nederlandse overheid: https://docs.geostandaarden.nl/api/API-Designrules/#documentation
