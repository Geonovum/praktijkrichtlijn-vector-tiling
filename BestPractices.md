# Best practices
**Werk in uitvoering**

Deze bijlage heeft tot doel om onderwerpen voor best practies documentatie te verzamelen.


## Wanneer vector tiles?
Welke afwegingen neem je, wanneer wel en wanneer beter niet vector tiles (beter iets anders)?

## CRS en onderliggend systeem
Navraag bij specialisten. CRS: als je bepaalde EPSG code gebruikt, gebruik dan onderliggend code X als je voor nauwkeurige toepassingen tiles wilt publiceren?

## Aanbeveling: tile bestandsgrootte
<div class="informative">
_Aanbeveling_ Beperk de bestandsgrootte van een tegel, in omvang en hoeveelheid geometrie.
</div>

TODO: toelichting, bijvoorbeeld 500kb

## Aanbeveling: Clipping

<div class="informative">
_AANBEVELING_ Aanbeveling doen rondom clipping, ook rekening houden met CRS (o.a. mogelijk issue van lange lijnen i.c.m. herprojectie)
</div>

## Aanbeveling: buffering

<div class="informative">
_AANBEVELING_ Aanbeveling doen rondom buffering
Of dit combineren met Clipping?
</div>

## Aanbeveling: Simplificeren

<div class="informative">
_AANBEVELING_ Aanbeveling doen rondom Simplificeren
Houdt ook rekening met bepaalde tussenpunten i.r.t. CRS.
</div>
