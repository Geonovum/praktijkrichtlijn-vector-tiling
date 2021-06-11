# Basis specificaties

Dit hoofdstuk beschrijft de specificaties waar deze praktijkrichtlijn op gebaseerd is.

## Vector tiles maken

Bij het maken van vector tiles gaan deze richtlijn uit van het gebruik van de technische specificatie zoals beschreven door de [[Mapbox-Vector-Tile-Specification]]. Deze specificatie bevat de belangrijkste standaarden en instellingen over hoe geografische data opgeslagen en gecodeerd wordt in een vector tile. Deze bevat informatie over bestandsformaten, extensies, projecties, _bounds_, en de interne structuur van een vector tile.

## Eis: Mapbox Vector Tile specification versie 2.1
<div class="advisement">
_EIS_ Gebruik [[Mapbox-Vector-Tile-Specification]] versie 2.1 (January 19th, 2016) om vector tiles op te bouwen
</div>

In het kort gaat deze specificatie uit van:

* Google Protobuf encoding ([[PBF]])
* _Winding order_ conform OGC
* [OGC valide](https://www.ogc.org/standards/sfa) geometriëen

In deze praktijkrichtlijn wijken wij af van de beschreven bestand extensie `.mvt` zoals genoemd in [2.1 File extension](https://github.com/mapbox/vector-tile-spec/tree/master/2.1#21-file-extension) van de Mapbox specificatie. Ook wijken wij af van de paragraaf [2.2 Multipurpose Internet Mail Extensions (MIME)](https://github.com/mapbox/vector-tile-spec/tree/master/2.1#22-multipurpose-internet-mail-extensions-mime).

### Eis: Vrije Bestands Extensie

<div class="advisement">
_EIS_ De bestands extensie voor de vector tiles is vrij in te vullen, alsmede het MIME type.

Deze praktijkrichtlijn wijkt hiermee af van Hoofdstuk [2. File Format](https://github.com/mapbox/vector-tile-spec/tree/master/2.1#2-file-format) definities van de Mapbox Vector tile specification.
</div>

### Eis: Encoding PBF

<div class="advisement">
_EIS_ Gebruik voor de encoding van de data [[PBF]] (Google Protobuf)
</div>

### Eis: Winding order conform OGC
[[Mapbox-Vector-Tile-Specification]] vereist de OGC _Winding order_. Zie de de [Mapbox documentatie over _Winding order_](https://docs.mapbox.com/vector-tiles/specification/#winding-order) voor een toelichting. Omdat de _winding order_ vaak mis gaat bij implementaties, bevat de Praktijkrichtlijn een expliciete eis hiervoor.

<div class="advisement">
_EIS_ Voor de volgorde van coördinaten bij polygonen, gebruik de zogenaamde _winding order_ zoals in OGC Simple Features Access is gedefinieerd.
</div>

## Vector tiles aanbieden

Voor het aanbieden en publiceren van vector tiles via het web is nog geen open standaard gereed. De vector tiles kunnen als download aangeboden worden of als webservice, via een API, of als statische _directory structure_.

Het OGC werkt aan verscheidene nieuwe specificaties voor het publiceren en aanbieden van geografische data via APIs: voor _features_, _maps_ en _vector tiles_. Voor vector tiles is de [[OGC-API-Tiles-Core]] specificatie relevant.

Er is nu alleen nog geen open standaard gereed voor publicatie van vector tiles. [[OGC-API-Tiles-Core]] lijkt hier wel de open standaard voor te worden. Vooruitlopend op formele goedkeuring door OGC, schrijft deze praktijkrichtlijn daarom [[OGC-API-Tiles-Core]] voor.

### Eis: OGC API Tiles
<div class="advisement">
_EIS_ Als vector tiles via een API aangeboden worden, gebruik dan [[OGC-API-Tiles-Core]].
</div>

Hoofdstuk 5 werkt het gebruik van OGC API Tiles verder uit. Daar worden ook alternatieven aangegeven voor wanneer het nog niet mogelijk is te voldoen aan de OGC API Tiles specificatie.
