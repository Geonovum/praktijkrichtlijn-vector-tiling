# Styling

Voor het weergeven van vector tiles is een weergavestijl specificatie nodig die beschrijft welke data te tekenen, in welke volgorde, en in welke stijl.

## Aanbeveling: Styling publiceren via OGC API Styles

Het OGC ontwikkelt [[OGC-API-Styles]] voor het publiceren, delen en vinden van kaart stijlen en bijbehorende resources.

<div class="informative">
<em>AANBEVELING</em> Lever de styling aan door middel van de OGC API Styles specificatie.
</div>

## Aanbeveling: Styling specificatie encoding

[[OGC-API-Styles]] ondersteunt verschillende styling encodings, zoals JSON, HTML, CSS, SLD encoding en ook de Mapbox styling.

In de praktijk ondersteunt veel tooling de [[Mapbox-Style-Specification]] en zien we dat deze het meest wordt gebruikt.

<div class="informative">
<em>AANBEVELING</em> Specificeer de stijl conform de [[Mapbox-Style-Specification]]
</div>

## Eis: Standaard stijl

Een vector tile set is moeilijk te gebruiken zonder styling. Door het aanleveren van minimaal 1 default stijl is de instap voor delen, hergebruik en aanpassing makkelijker. Dit zorgt ervoor dat de gebruiker / applicatie ontwikkelaar direct aan de slag kan.

<div class="advisement">
<em>EIS</em> Lever altijd minimaal 1 standaard stijl aan bij een vector tile set.
</div>

## Best practices styling
<div class="informative">
De styling hangt direct samen met de aangeleverde data in de vector tiles. Een goede inrichting van de data en de data attributen in samenhang met een goede styling opzet, is cruciaal voor de snelheid en gebruiksvriendelijkheid van de kaart en de vector tile service. Voor meer tips en tricks hierover zie het <a href="https://geonovum.github.io/vector-tiling-best-practices/">Best Practices document</a>.
</div>
