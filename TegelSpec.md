# Tegels maken
**hoofdstuk is werk in uitvoering**

Dit hoofdstuk beschrijft hoe tiles op te bouwen.

## Eis: Mapbox Vector Tile specification versie 2.1
<div class="advisement">
_EIS_ Gebruik gebruik [[MapboxVT]] versie 2.1 om tiles op te bouwen
</div>

## Eis: encoding / compressie?
<div class="advisement">
_EIS_ Gebruik voor de encoding van de data [[PBF]], geojson?, zoals beschreven op ....
</div>

## Eis: Winding order conform OGC

<div class="advisement">
Voor de volgorde van coordinaten bij polygonen, gebruik de zogenaamde _winding order_ zoals in OGC Simple Features Access is gedefinieerd.
</div>

<div class="note">
Mapbox Vector Tile spec schrijft deze Winding order ook voor, maar omdat de winding order vaak mis gaat, bevat deze Praktijkrichtlijn een aparte eis hiervoor.
</div>

## Aanbeveling: Clipping

<div class="informative">
_AANBEVELING_ Aanbeveling doen rondom clipping?
</div>

## Aanbeveling: Simplificeren

<div class="informative">
_AANBEVELING_ Aanbeveling doen rondom Simplificeren?
</div>

## Eis: bestands extensie is .mvt of .pbf
Mapbox schrijft alleen ```.mvt``` voor als bestandsextensie. Er is behoefte aan meer en andere bestandsextenties, om bepaalde uitbreidingen duidelijk te maken. Deze Prakrijktrichtlijn staat daarom ook toe:

-   ```.pbf``` voor tiles die ....
-   ```...``` voor tiles die ...

<div class="advisement">Gebruik een van de volgende bestandsextensies
1. ```.mvt``` voor tiles die strikt alleen de eisen van [[MapboxVT]] volgen
1. ```.pbf``` voor tiles die [[MapboxVT]] volgen, maar uitgebreid zijn met ...
1. ```. ...``` voor ...

</div>
