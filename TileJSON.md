# Bijlage TileJSON voorbeeld


Deze bijlage bevat een voorbeeld van een (minimale) TileJSON response met de NetherlandsRDNewQuad tilematrixset in Rijksdriehoekstelsel (RD New), EPSG:28992.

## JSON encoding

```json
{
  "tilejson": "2.2.0",
  "name": "NetherlandsRDNewQuad",
  "description": "NetherlandsRDNewQuad as TileJSON (https://github.com/maptiler/tilejson-spec/tree/custom-projection/2.2.0)",
  "version": "1.0.0",
  "scheme": "xyz",
  "tiles": [
    "https://example.com/ogc/v1/tiles/NetherlandsRDNewQuad/{z}/{y}/{x}?f=mvt"
  ],
  "minzoom": 9,
  "maxzoom": 11,
  "profile": "custom",
  "crs": "EPSG:28992",
  "tile_matrix": [
    {
      "id": "9",
      "tile_size": [256, 256],
      "scale_denominator": 24000,
      "origin": [-285401.92, 903401.92]
    },
    {
      "id": "10",
      "tile_size": [256, 256],
      "scale_denominator": 12000,
      "origin": [-285401.92, 903401.92]
    },
    {
      "id": "11",
      "tile_size": [256, 256],
      "scale_denominator": 6000,
      "origin": [-285401.92, 903401.92]
    }
  ]
}
```
