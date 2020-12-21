# Uitgangspunten

Dit hoofdstuk beschrijft de twee grootste uitgangspunten waar deze praktijkrichtlijn aansluit bij bestaande richtlijnen en standaarden.

## Vector Tiles maken

Bij het maken van vector tiles gaan deze richtlijn uit van het gebruik van de technische specificatie zoals beschreven door de [Mapbox Vector Tile specificatie](https://github.com/mapbox/vector-tile-spec). Deze specificatie bevat de belangrijkste standaarden en instellingen over hoe geografische data opgeslagen en encode wordt in een vector tegel. Deze bevat informatie over bestands formaten, extensies, projecties, bounds, en de interne structuur van een vector tile.

## Eis: Mapbox Vector Tile specification versie 2.1
<div class="advisement">
_EIS_ Gebruik [[Mapbox-Vector-Tile-Specification]] versie 2.1 (January 19th, 2016) om vector tiles op te bouwen
</div>

In het kort gaat deze specificatie uit van :

* Google Protobuf encoding ([[PBF]])
* _Winding order_ conform OGC
* [OGC valide](https://www.ogc.org/standards/sfa) geometriëen

In deze praktijkrichtlijn wijken wij af van de beschreven bestand extensie '.mvt' zoals genoemd in [2.1 File extension](https://github.com/mapbox/vector-tile-spec/tree/master/2.1#21-file-extension) van de Mapbox specificatie. Ook wijken wij af van de in [2.2 Multipurpose Internet Mail Extensions (MIME)](https://github.com/mapbox/vector-tile-spec/tree/master/2.1#22-multipurpose-internet-mail-extensions-mime)

### Eis: Vrije Bestands Extensie

<div class="advisement">
Deze praktijkrichtlijn wijkt af van Hoofdstuk [2. File Format](https://github.com/mapbox/vector-tile-spec/tree/master/2.1#2-file-format) definities van de Mapbox Vector tile specification. Dit betekend dat de bestands extensie voor de vector tegels  vrij in te vullen is, alsmede de MIME type.
</div>

### Eis: Encoding PBF

<div class="advisement">
Gebruik voor de encoding van de data [[PBF]] (Google Protobuf)
</div>


### Eis: Winding order conform OGC
Mapbox Vector Tile spec schrijft deze Winding order voor, maar omdat de winding order vaak mis gaat, bevat deze Praktijkrichtlijn een aparte eis hiervoor.
<div class="advisement">
Voor de volgorde van coordinaten bij polygonen, gebruik de zogenaamde _winding order_ zoals in OGC Simple Features Access is gedefinieerd.
</div>

## Vector Tiles aanbieden

Voor het aanbieden en publiceren van vector tiles is nog geen open standaard gereed.  De vector tiles kunnen als download aangeboden worden of als service.
Nieuwe ontwikkelingen bij OGC gaan standaarden bevatten voor het publiceren en aanbieden geografische data als API service, voor features, maps en tegels. Waaronder ook vector tiles.

Wij hebben het hier dan over de  [[OGC-API-Tiles-Core]] standaard.

Er is nu nog geen open standaard gereed voor publicatie. [[OGC-API-Tiles-Core]] lijkt dat wel te worden.  Vooruitlopend op formele goedkeuring door OGC, schrijft deze praktijkrichtlijn deze API specificatie daarom voor.

### Eis: OGC API Tiles
<div class="advisement">
Als tegels via een API aangeboden worden, gebruik dan [OGC-API-Tiles-Core].
</div>

De eis is beschreven in Hoofdstuk 5 en wordt daar verder beschreven. Echter omdat deze specificatie eerder aangehaald wordt in het document wordt het alvast geintroduceerd. Daarnaast worden ook alternatieven aangegeven voor wanneer het nog niet mogelijk is te voldoen aan de OGC API Tiles standaard.
