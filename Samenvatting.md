De Praktijkrichtlijn Vector Tiling formuleert eisen en aanbevelingen hoe vector tiles te gebruiken voor Nederlandse toepassingen. De praktijkrichtlijn richt zich op het aanbieden, publiceren en gebruiken van vector tiles in (web)applicaties, waarbij visualisatie het hoofddoel is. Dit moet het voor gebruikers makkelijker maken vector tiles van derden te gebruiken.

Enkele van de belangrijkste punten zijn:
* gebruik de specificatie van Mapbox (de [[Mapbox-Vector-Tile-Specification]]) om vector tiles te maken en OGC API Tiles ([[OGC-API-Tiles-Core]]) voor het publiceren en documenteren via een API.
* biedt vector tiles aan in tenminste één van de _TileMatrixSets_ voor Web Mercator (EPSG:3857), ETRS89 in een projectie Lambert Azimuthal Equal Area (EPSG:3035) of het Rijksdriehoekstelsel (EPSG:28992)
* lever styling aan conform [[OGC-API-Styles]] en biedt een standaard stijl aan.

Aanvullend op de praktijkrichtlijn is er een document met [Best practices](https://geonovum.github.io/vector-tiling-best-practices/).
