# Uitgangspunten
**hoofdstuk is werk in uitvoering**

Dit hoofdstuk beschrijft de twee grootste uitgangspunten waar deze praktijkrichtlijn aansluit bij bestaande richtlijnen en standaarden.

## Vector Tiles maken

Bij het maken van vector tiles gaan deze richtlijn uit van het gebruik van de technische specificatie zoals beschreven door de [Mapbox Vector Tile specificatie](https://github.com/mapbox/vector-tile-spec). Deze specificatie bevat de belangrijkste standaarden en instellingen over hoe geografische data opgeslagen en encode wordt in een vector tegel. Deze bevat informatie over bestands formaten, extensies, projecties, bounds, en de interne structuur van een vector tile. 

## Eis: Mapbox Vector Tile specification versie 2.1
<div class="advisement">
_EIS_ Gebruik gebruik [[Mapbox Vector Tile SpecificationT]] versie 2.1 (January 19th, 2016) om vector tiles op te bouwen
</div>

In het kort gaat deze specificatie uit van :

* [PBF (Goolge Protobuf)](https://github.com/protocolbuffers/protobuf) encoding
* Winding order conform OGC 
* [OGC valide](https://www.ogc.org/standards/sfa) geometrien 

In deze praktijkrichtlijn wijken wij af van de beschreven bestand extensie '.mvt' zoals genoemd in [2.1 File extension](https://docs.mapbox.com/vector-tiles/specification/) van de Mapbox specificatie. Ook wijken wij af van de in [2.2 Multipurpose Internet Mail Extensions (MIME)](https://github.com/mapbox/vector-tile-spec/tree/master/2.1#22-multipurpose-internet-mail-extensions-mime)

### Eis: Vrije Bestands Extensie

<div class="advisement">
Deze praktijkrichtlijn wijkt af van [2. File Format](https://github.com/mapbox/vector-tile-spec/tree/master/2.1#2-file-format) definities van de Mapbox Vecot tile specification. De bestands extensie voor de vector tegels is vrij in te vullen, alsmede de MIME type. 
</div>

### Eis: Encoding PBF

<div class="advisement">
Gebruik voor de encoding van de data [PBF (Goolge Protobuf)](https://github.com/protocolbuffers/protobuf)
</div>

<div class="note">
Mapbox Vector Tile spec schrijft deze Winding order voor, maar omdat de winding order vaak mis gaat, bevat deze Praktijkrichtlijn een aparte eis hiervoor.
</div>

### Eis: Winding order conform OGC

<div class="advisement">
Voor de volgorde van coordinaten bij polygonen, gebruik de zogenaamde _winding order_ zoals in OGC Simple Features Access is gedefinieerd.
</div>

## Vector Tiles aanbieden - OGC API Tiles

Er is nu nog geen open standaard gereed voor publicatie. [[OGC-API-Tiles-Core]] lijkt dat wel te worden. Vooruitlopend op formele goedkeuring door OGC, schrijft deze praktijkrichtlijn deze API specificatie daarom voor. De eis is beschreven in Hoofdstuk 5 en wordt daar verder beschreven. Echter omdat deze specificatie eerder aangehaald wordt in het document wordt het alvast geintroduceerd. 
