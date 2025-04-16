# Scope

## Binnen scope

De Praktijkrichtlijn richt zich op het aanbieden, publiceren en gebruiken van vector tiles in (web)applicaties, van data van Nederlandse organisaties.

Meer concreet gaat het om 2D vector tiles voor visualisatie / _portrayal_ door derden (applicatie onwikkelaars en geo-specialisten), zoals voor achtergrondkaarten. Het gaat dus niet om het delen van objectgegevens / features of nauwkeurige metingen. Typisch gebruik van vector tiles is het visualiseren van grotere datasets en cartografische producten zoals topografische achtergrond kaarten. Waarbij de aanname is dat de data hiervoor voorbewerkt is en versimpeld om tot een goed uitgewerkte visualisatie te komen. En als gevolg daarvan niet per se de kwalitatief nauwkeurige coördinaten van de orginele geodata bevat.

Deze vector tiles kunnen aangeboden worden als service / via een API of als bulk download. In dit document wordt er voor vector tiles via een service geen verschil gemaakt of de vector tiles al voorberekend zijn ("pre-cooked" / "pre-processed") en al dan niet uit een _cache_ aangeboden worden, of dynamisch worden opgebouwd (_on-the-fly_).

Door ons te beperken tot visualisatie ontstaat het gevolg dat niet alle geschikte mogelijkheden van vector tiles hier behandeld worden. Maar het doel van deze praktijkrichtlijn is om de verschillende vector tile aanbieders hun vector tile sets zo aan te laten bieden dat deze makkelijk te gebruiken, combineren en hergebruiken zijn. Niet alleen met andere vector tile sets maar ook te combineren met de OGC standaarden, zoals WMS, WFS, met gangbare online kaartdiensten/platformen (Google Maps, Mapbox, etc) en met de OGC API standaarden. Daarom sluiten we in deze praktijktichtlijn ook zo veel mogelijk aan bij bestaande richtlijnen en standaarden.

## Buiten scope

Hoewel het mogelijk is om vector tiling te gebruiken om alleen de (feature/object) data uit te wisselen (al dan niet met nauwkeurige geometrie), is dit buiten scope van deze Praktijkrichtlijn.

Buiten scope van de Praktijkrichtlijn zijn:
- 3D vector tiles
- "silo" applicaties: applicaties die niet beogen vector tiles te delen met derden.
- gebruik en advies over software en tooling voor het maken, serveren en consumeren van vector tiles
- interactieve mogelijkheden vector tiles.

<!-- verwijzen naar best practices voor een aantal punten -->
De [Best practices](https://geonovum.github.io/vector-tiling-best-practices/) bevatten ook enkele onderwerpen die buiten scope zijn van de praktijkrichtlijn, maar wel relevant voor het handig kunnen maken en aanbieden van vector tiles. Dit zijn zaken als:
- Pre-processing van data
- Styling best practises
- beveiligingsaspecten, zoals API Keys, beveiliging met naam/wachtwoord

Voor eigen applicaties en specifieke toepassingen staat het uiteraard vrij om op een andere manier vector tiles aan te bieden dan deze praktijkrichtlijn beschrijft.
