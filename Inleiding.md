# Inleiding

## Doel
De Prakrijktrichtlijn specificeert hoe het beste vector tiles aangeboden kunnen worden om breed gebruik mogelijk te maken (maximale interoperabiliteit), voor Nederlandse toepassingen. Dit moet het ook makkelijker maken om vector tiles van derden te gebruiken. Zie verder [het hoofdstuk over de scope](#Scope).

Deze praktijkrichtlijn is geen verplichting.

## Totstandkoming
Dit document is opgesteld onder redactie van Geonovum. De inhoud is met Nederlandse experts in enkele werksessies afgestemd.

### Werkgroepleden
Onder andere de volgende mensen hebben een bijdrage geleverd aan deze praktijkrichtlijn via de werksessies of op een andere manier:

*   Joris Bak, Esri Nederland
*   Anton Bakker, Kadaster
*   Niene Boeijen, This Way Cartography (redactie)
*   Thijs Brentjens, Geonovum (redactie)
*   Stefan de Konink, Stichting OpenGeo
*   Jeroen Hogeboom, Kadaster
*   Edward Mac Gillavry, Webmapper
*   Just van den Broecke, Just Objects
*   Wouter Visscher, Kadaster

## Aansluiten bij internationale standaarden
Deze Prakrijktrichtlijn gebruikt zoveel mogelijk internationale standaarden en specificaties. Waar dat nog niet goed mogelijk is, kiezen we de meest gangbare oplossing uit de praktijk. Deze richtlijn is niet gebonden aan specifieke software.

## Best practices
Er zijn ook onderwerpen die niet per se gaan over interoperabiliteit, maar wel van belang kunnen zijn om op een goede, geschikte manier vector tiles aan te bieden. Deze staan in een apart [Best practices document](https://geonovum.github.io/vector-tiling-best-practices/).

## Doelgroep
De praktijkrichtlijn is bedoeld voor o.a.:
-   aanbieders van vector tiles
-   gebruikers van vector tiles zoals (geo-)applicatie ontwikkelaars.

## Leeswijzer
Na dit hoofdstuk komt eerst de [Scope](#Scope) van deze Praktijkrichtlijn. [Hoofdstuk 3](#TegelSpec) bevat vervolgens de specificaties waarop deze Praktijkrichtlijn gebaseerd is. [Hoofdstuk 4 TileMatrixSet](#TegelSchema) werkt de details van de te gebruiken _TileMatrixSets_ uit. [Hoofdstuk 5 Publicatie](#Publicatie) behandelt hoe de vector tiles aan te bieden.
[Hoofdstuk 6 Documentatie](#Documentatie) specificeert hoe de aangeboden vector tiles en API te documenteren. Het weergeven van vector tiles is onderwerp van [hoofdstuk 7 Styling](#Styling).

De bijlagen bevatten verdiepende informatie over Coördinaat Referentie Systemen en de uitwerking van de _TileMatrixSet_ voor het Rijksdriehoekstelsel.

Dit document bevat kenmerken waaraan een implementatie moet voldoen (eisen) en waaraan een implementatie idealiter voldoet, maar niet noodzakelijk voor alle implementaties (aanbevelingen).

De Praktijkrichtlijn zelf is geen verplichting. Om een onderscheid te maken in prioriteit, hanteert de Prakrijktrichtlijn wel de termen _EIS_ en _AANBEVELING_ om de minimaal benodigde set van kenmerken aan te geven (eisen) voor hergebruik van vector tiles en de gewenste set (aanbevelingen) om het zo goed mogelijk te doen.

Eisen staan geformuleerd in oranje blokken, bijvoorbeeld:

<div class="advisement">
_EIS_ Dit is een vereist kenmerk
</div>

Aanbevelingen zonder extra opmaak:

<div class="informative">
_AANBEVELING_ Dit is een aanbeveling
</div>
