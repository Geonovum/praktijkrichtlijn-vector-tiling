# Basis specificaties

Dit hoofdstuk beschrijft de specificaties waar deze praktijkrichtlijn op gebaseerd is.

## Vector tiles maken

Bij het maken van vector tiles gaat deze richtlijn uit van het gebruik van de technische specificatie zoals beschreven door de [[Mapbox-Vector-Tile-Specification]]. Deze specificatie bevat de belangrijkste standaarden en instellingen over hoe geografische data opgeslagen en gecodeerd wordt in een vector tile. Deze bevat informatie over bestandsformaten, extensies, projecties, _bounds_, en de interne structuur van een vector tile.

## Eis: Mapbox Vector Tile specification versie 2.1
<div class="advisement">
_EIS_ Gebruik [[Mapbox-Vector-Tile-Specification]] versie 2.1 (January 19th, 2016) om vector tiles op te bouwen
</div>

In het kort gaat deze specificatie uit van:

* Google Protobuf encoding ([[PBF]])
* _Winding order_ conform Mapbox Vectortile Specificatie ([[Mapbox-Vector-Tile-Specification]])
* [OGC valide](https://www.ogc.org/standards/sfa) geometriëen

In deze praktijkrichtlijn wijken wij af van de beschreven bestand extensie `.mvt` zoals genoemd in [2.1 File extension](https://github.com/mapbox/vector-tile-spec/tree/master/2.1#21-file-extension) van de Mapbox specificatie. Ook wijken wij af van de paragraaf [2.2 Multipurpose Internet Mail Extensions (MIME)](https://github.com/mapbox/vector-tile-spec/tree/master/2.1#22-multipurpose-internet-mail-extensions-mime).

### Eis: Vrije Bestands Extensie

<div class="advisement">
_EIS_ De bestandsextensie voor vectortiles is vrij in te vullen. Het Media Type van vectortiles moet volgens mapbox specificatie altijd `application/vnd.mapbox-vector-tile` zijn.

Deze praktijkrichtlijn wijkt hiermee af van Hoofdstuk [2. File Format](https://github.com/mapbox/vector-tile-spec/tree/master/2.1#2-file-format) definities van de Mapbox Vector tile specification.
</div>

### Eis: Encoding PBF

<div class="advisement">
_EIS_ Gebruik voor de encoding van de data [[PBF]] (Google Protobuf)
</div>

### Eis: Clockwise Winding order
[[Mapbox-Vector-Tile-Specification]] vereist een clockwise _Winding order_. Zie de de [Mapbox documentatie over _Winding order_](https://docs.mapbox.com/vector-tiles/specification/#winding-order) voor een toelichting.
Omdat de _winding order_ vaak mis gaat bij implementaties, bevat de Praktijkrichtlijn hiervoor een expliciete eis.
Het niet aanhouden van de correcte winding order levert problemen op in _sommige_ vectortile clients.  

> Let op! de winding order van vector tiles is tegengesteld aan de _Winding order_ voor geschreven door OGC in o.a. de OGC Simple Features.

<div class="advisement">
_EIS_ Voor de volgorde van coördinaten bij polygonen, gebruik de zogenaamde clockwise (buitenste ring met de klok mee, binnenste ring tegen de klok in) _winding order_ zoals in Mapbox vectortile specificatie is beschreven.
</div>

## Vector tiles aanbieden

Voor het aanbieden en publiceren van vector tiles via het web is nog geen open standaard gereed. De vector tiles kunnen als download aangeboden worden of als webservice, via een API, of als statische _directory structure_.

Het OGC biedt verscheidene nieuwe specificaties aan voor het publiceren en aanbieden van geografische data via APIs: voor _features_, _maps_ en _vector tiles_. Zie de website [OGC APIs Building Blocks for Location](https://ogcapi.ogc.org/) voor een overzicht van APIs voor het web. Voor vector tiles is de [[OGC-API-Tiles-Core]] specificatie relevant.

Deze praktijkrichtlijn schrijft het gebruik van [[OGC-API-Tiles-Core]] voor. Dit is een open standaard voor publicatie van vector tiles door middel van web services. Deze standaard is door OGC vastgesteld. 

### Eis: OGC API Tiles
<div class="advisement">
_EIS_ Als vector tiles via een API aangeboden worden, gebruik dan [[OGC-API-Tiles-Core]].
</div>

[Hoofdstuk 5](#Publicatie) werkt het gebruik van OGC API Tiles verder uit. Daar worden ook alternatieven aangegeven voor wanneer het nog niet mogelijk is te voldoen aan de OGC API Tiles specificatie.
