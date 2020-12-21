# Samenvatting

De praktijkrichtlijn Vector tiling beschrijft hoe vector tiles te gebruiken voor Nederlandse toepassingen. De praktijkrichtlijn richt zich op het aanbieden, publiceren en gebruiken van vector tiles in (web)applicaties, waarbij visualisatie het hoofddoel is en hergebruik door derden mogelijk moet zijn. Andere toepassingen zijn [buiten scope](#buiten-scope).

De praktijkrichtlijn formuleert enkele eisen en aanbevelingen om op een geschikte manier vector tiles te maken en publiceren. Dit moet het voor gebruikers makkelijker maken vector tiles van derden te gebruiken.

Enkele van de belangrijkste eisen zijn:
* gebruik de specificatie van Mapbox (de [[Mapbox-Vector-Tile-Specification]]) om vector tiles te maken en OGC API Tiles ([[OGC-API-Tiles-Core]]) voor het publiceren via een API.
* biedt vector tiles aan in tenminste één van de _TileMatrixSets_ voor Web Mercator (EPSG:3857), ETRS89 in een projectie Lambert Azimuthal Equal Area (EPSG:3035) of het Rijksdriehoekstelsel (EPSG:28992)
* biedt documentatie aan, zoals over de data lagen, de attributen en styling

Bij de praktijkrichtlijn horen ook [Best practices](https://geonovum.github.io/vector-tiling-best-practices/).
