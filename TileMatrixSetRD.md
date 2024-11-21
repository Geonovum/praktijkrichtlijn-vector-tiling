# Bijlage TileMatrixSet Rijksdriehoekstelsel

Deze bijlage bevat encodings van de TileMatrixSet voor het Rijksdriehoekstelsel.

## JSON encoding

```
{
    "title": "Amersfoort / RD New schema for the Netherlands",
    "identifier": "NetherlandsRDNewQuad",
    "crs": "http://www.opengis.net/def/crs/EPSG/0/28992",
    "wellKnownScaleSet": " urn:ogc:def:wkss:OGC:1.0:NLDEPSG28992Scale",

      
    "boundingBox": {
        "crs": "http://www.opengis.net/def/crs/EPSG/0/28992",
        "lowerLeft": [
            595401.92,
            22598.08
        ],
        "upperRight": [
            -285401.92,
            903401.92
        ]
    },
        
    "tileMatrices": [
        {
            "identifier": "0",
            "scaleDenominator": 1.2288E7,
            "pointOfOrigin": [
                -285401.92,
                903402.0
            ],
            "cornerOfOrigin": "topLeft"
            "tileWidth": 256,
            "tileHeight": 256,
            "matrixWidth": 1,
            "matrixHeight": 1
        },
        {
            "type": "TileMatrixType",
            "identifier": "1",
            "pointOfOrigin": [
                -285401.92,
                903402.0
            ],
            "cornerOfOrigin": "topLeft"
            "scaleDenominator": 6144000.0,
            "tileWidth": 256,
            "tileHeight": 256,
            "matrixWidth": 2,
            "matrixHeight": 2
        },
        {
            "type": "TileMatrixType",
            "identifier": "2",
            "pointOfOrigin": [
                -285401.92,
                903402.0
            ],
            "scaleDenominator": 3072000.0,
            "tileWidth": 256,
            "tileHeight": 256,
            "matrixWidth": 4,
            "matrixHeight": 4
        },
        {
            "type": "TileMatrixType",
            "identifier": "3",
            "pointOfOrigin": [
                -285401.92,
                903402.0
            ],
            "cornerOfOrigin": "topLeft"
            "scaleDenominator": 1536000.0,
            "tileWidth": 256,
            "tileHeight": 256,
            "matrixWidth": 8,
            "matrixHeight": 8
        },
        {
            "type": "TileMatrixType",
            "identifier": "4",
            "pointOfOrigin": [
                -285401.92,
                903402.0
            ],
            "cornerOfOrigin": "topLeft"
            "scaleDenominator": 768000.0,
            "tileWidth": 256,
            "tileHeight": 256,
            "matrixWidth": 16,
            "matrixHeight": 16
        },
        {
            "type": "TileMatrixType",
            "identifier": "5",
            "pointOfOrigin": [
                -285401.92,
                903402.0
            ],
            "cornerOfOrigin": "topLeft"
            "scaleDenominator": 384000.0,
            "tileWidth": 256,
            "tileHeight": 256,
            "matrixWidth": 32,
            "matrixHeight": 32
        },
        {
            "type": "TileMatrixType",
            "identifier": "6",
            "pointOfOrigin": [
                -285401.92,
                903402.0
            ],
            "cornerOfOrigin": "topLeft"
            "scaleDenominator": 192000.0,
            "tileWidth": 256,
            "tileHeight": 256,
            "matrixWidth": 64,
            "matrixHeight": 64
        },
        {
            "type": "TileMatrixType",
            "identifier": "7",
            "pointOfOrigin": [
                -285401.92,
                903402.0
            ],
            "cornerOfOrigin": "topLeft"
            "scaleDenominator": 96000.0,
            "tileWidth": 256,
            "tileHeight": 256,
            "matrixWidth": 128,
            "matrixHeight": 128
        },
        {
            "type": "TileMatrixType",
            "identifier": "8",
            "pointOfOrigin": [
                -285401.92,
                903402.0
            ],
            "cornerOfOrigin": "topLeft"
            "scaleDenominator": 48000.0,
            "tileWidth": 256,
            "tileHeight": 256,
            "matrixWidth": 256,
            "matrixHeight": 256
        },
        {
            "type": "TileMatrixType",
            "identifier": "9",
            "pointOfOrigin": [
                -285401.92,
                903402.0
            ],
            "cornerOfOrigin": "topLeft"
            "scaleDenominator": 24000.0,
            "tileWidth": 256,
            "tileHeight": 256,
            "matrixWidth": 512,
            "matrixHeight": 512
        },
        {
            "type": "TileMatrixType",
            "identifier": "10",
            "pointOfOrigin": [
                -285401.92,
                903402.0
            ],
            "cornerOfOrigin": "topLeft"
            "scaleDenominator": 12000.0,
            "tileWidth": 256,
            "tileHeight": 256,
            "matrixWidth": 1024,
            "matrixHeight": 1024
        },
        {
            "type": "TileMatrixType",
            "identifier": "11",
            "pointOfOrigin": [
                -285401.92,
                903402.0
            ],
            "cornerOfOrigin": "topLeft"
            "scaleDenominator": 6000.0,
            "tileWidth": 256,
            "tileHeight": 256,
            "matrixWidth": 2048,
            "matrixHeight": 2048
        },
        {
            "type": "TileMatrixType",
            "identifier": "12",
            "pointOfOrigin": [
                -285401.92,
                903402.0
            ],
            "cornerOfOrigin": "topLeft"
            "scaleDenominator": 3000.0,
            "tileWidth": 256,
            "tileHeight": 256,
            "matrixWidth": 4096,
            "matrixHeight": 4096
        },
        {
            "type": "TileMatrixType",
            "identifier": "13",
            "pointOfOrigin": [
                -285401.92,
                903402.0
            ],
            "cornerOfOrigin": "topLeft"
            "scaleDenominator": 1500.0,
            "tileWidth": 256,
            "tileHeight": 256,
            "matrixWidth": 8192,
            "matrixHeight": 8192
        },
        {
            "type": "TileMatrixType",
            "identifier": "14",
            "pointOfOrigin": [
                -285401.92,
                903402.0
            ],
            "cornerOfOrigin": "topLeft"
            "scaleDenominator": 750.0,
            "tileWidth": 256,
            "tileHeight": 256,
            "matrixWidth": 16384,
            "matrixHeight": 16384
        },
        {
            "identifier": "15",
            "type": "TileMatrixType",
            "scaleDenominator": 375.0,
            "pointOfOrigin": [
                -285401.92,
                903402.0
            ],
            "cornerOfOrigin": "topLeft"
            "tileWidth": 256,
            "tileHeight": 256,
            "matrixWidth": 32768,
            "matrixHeight": 32768
        },
        {
            "identifier": "16",
            "type": "TileMatrixType",
            "scaleDenominator": 187.5,
            "pointOfOrigin": [
                -285401.92,
                903402.0
            ],
            "cornerOfOrigin": "topLeft"
            "tileWidth": 256,
            "tileHeight": 256,
            "matrixWidth": 65536,
            "matrixHeight": 65536
        }
    ]
}
```


## XML Encoding

```
<TileMatrixSet id="NetherlandsRDNewQuad" xsi:schemaLocation="geonovum/tilematrixset/def">
    <ows:Title>Amersfoort / RD New schema for the Netherlands</ows:Title>
    <ows:identifier>NetherlandsRDNewQuad</ows:identifier>
    <ows:BoundingBox crs="http://www.opengis.net/def/crs/EPSG/0/28992">
        <ows:lowerLeft> 595401.92 22598.08 </ows:lowerLeft>
        <ows:upperRight> -285401.92 903401.92 </ows:upperRight>
    </ows:BoundingBox>
    <ows:SupportedCRS> http://www.opengis.net/def/crs/EPSG/0/28992</ows:SupportedCRS>
    <ows:identifier>EPSG:28992</ows:identifier>
    <ows:SupportedCRS>urn:ogc:def:crs:EPSG::28992</ows:SupportedCRS>
    <TileMatrix>
        <ows:identifier>00</ows:identifier>
        <ScaleDenominator>1.2288E7</ScaleDenominator>
        <pointOfOrigin>-285401.92 903402.0</pointOfOrigin>
        <cornerOfOrigin>topLeft<cornerOfOrigin>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>1</MatrixWidth>
        <MatrixHeight>1</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
        <ows:identifier>01</ows:identifier>
        <ScaleDenominator>6144000.0</ScaleDenominator>
        <pointOfOrigin>-285401.92 903402.0</pointOfOrigin>
        <cornerOfOrigin>topLeft<cornerOfOrigin>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>2</MatrixWidth>
        <MatrixHeight>2</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
        <ows:identifier>02</ows:identifier>
        <ScaleDenominator>3072000.0</ScaleDenominator>
        <pointOfOrigin>-285401.92 903402.0</pointOfOrigin>
        <cornerOfOrigin>topLeft<cornerOfOrigin>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>4</MatrixWidth>
        <MatrixHeight>4</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
        <ows:identifier>03</ows:identifier>
        <ScaleDenominator>1536000.0</ScaleDenominator>
        <pointOfOrigin>-285401.92 903402.0</pointOfOrigin>
        <cornerOfOrigin>topLeft<cornerOfOrigin>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>8</MatrixWidth>
        <MatrixHeight>8</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
        <ows:identifier>04</ows:identifier>
        <ScaleDenominator>768000.0</ScaleDenominator>
        <pointOfOrigin>-285401.92 903402.0</pointOfOrigin>
        <cornerOfOrigin>topLeft<cornerOfOrigin>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>16</MatrixWidth>
        <MatrixHeight>16</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
        <ows:identifier>05</ows:identifier>
        <ScaleDenominator>384000.0</ScaleDenominator>
        <pointOfOrigin>-285401.92 903402.0</pointOfOrigin>
        <cornerOfOrigin>topLeft<cornerOfOrigin>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>32</MatrixWidth>
        <MatrixHeight>32</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
        <ows:identifier>06</ows:identifier>
        <ScaleDenominator>192000.0</ScaleDenominator>
        <pointOfOrigin>-285401.92 903402.0</pointOfOrigin>
        <cornerOfOrigin>topLeft<cornerOfOrigin>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>64</MatrixWidth>
        <MatrixHeight>64</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
        <ows:identifier>07</ows:identifier>
        <ScaleDenominator>96000.0</ScaleDenominator>
        <pointOfOrigin>-285401.92 903402.0</pointOfOrigin>
        <cornerOfOrigin>topLeft<cornerOfOrigin>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>128</MatrixWidth>
        <MatrixHeight>128</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
        <ows:identifier>08</ows:identifier>
        <ScaleDenominator>48000.0</ScaleDenominator>
        <pointOfOrigin>-285401.92 903402.0</pointOfOrigin>
        <cornerOfOrigin>topLeft<cornerOfOrigin>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>256</MatrixWidth>
        <MatrixHeight>256</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
        <ows:identifier>09</ows:identifier>
        <ScaleDenominator>24000.0</ScaleDenominator>
        <pointOfOrigin>-285401.92 903402.0</pointOfOrigin>
        <cornerOfOrigin>topLeft<cornerOfOrigin>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>512</MatrixWidth>
        <MatrixHeight>512</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
        <ows:identifier>10</ows:identifier>
        <ScaleDenominator>12000.0</ScaleDenominator>
        <pointOfOrigin>-285401.92 903402.0</pointOfOrigin>
        <cornerOfOrigin>topLeft<cornerOfOrigin>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>1024</MatrixWidth>
        <MatrixHeight>1024</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
        <ows:identifier>11</ows:identifier>
        <ScaleDenominator>6000.0</ScaleDenominator>
        <pointOfOrigin>-285401.92 903402.0</pointOfOrigin>
        <cornerOfOrigin>topLeft<cornerOfOrigin>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>2048</MatrixWidth>
        <MatrixHeight>2048</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
        <ows:identifier>12</ows:identifier>
        <ScaleDenominator>3000.0</ScaleDenominator>
        <pointOfOrigin>-285401.92 903402.0</pointOfOrigin>
        <cornerOfOrigin>topLeft<cornerOfOrigin>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>4096</MatrixWidth>
        <MatrixHeight>4096</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
        <ows:identifier>13</ows:identifier>
        <ScaleDenominator>1500.0</ScaleDenominator>
        <pointOfOrigin>-285401.92 903402.0</pointOfOrigin>
        <cornerOfOrigin>topLeft<cornerOfOrigin>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>8192</MatrixWidth>
        <MatrixHeight>8192</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
        <ows:identifier>14</ows:identifier>
        <ScaleDenominator>750.0</ScaleDenominator>
        <pointOfOrigin>-285401.92 903402.0</pointOfOrigin>
        <cornerOfOrigin>topLeft<cornerOfOrigin>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>16384</MatrixWidth>
        <MatrixHeight>16384</MatrixHeight>
    </TileMatrix>
     <TileMatrix>
        <ows:identifier>15</ows:identifier>
        <ScaleDenominator>375.0</ScaleDenominator>
        <pointOfOrigin>-285401.92 903402.0</pointOfOrigin>
        <cornerOfOrigin>topLeft<cornerOfOrigin>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>32768</MatrixWidth>
        <MatrixHeight>32768</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
        <ows:identifier>16</ows:identifier>
        <ScaleDenominator>187.5</ScaleDenominator>
        <pointOfOrigin>-285401.92 903402.0</pointOfOrigin>
        <cornerOfOrigin>topLeft<cornerOfOrigin>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>65536</MatrixWidth>
        <MatrixHeight>65536</MatrixHeight>
    </TileMatrix>
</TileMatrixSet>
```
