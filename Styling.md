# Styling

Voor het weergeven van vector tiles is een stijl specificatie nodig die beschrijft welke data te tekenen, in welke volgorde, en in welke stijl. 

## Aanbeveling: Styling publiceren

De [OGC API Styles](https://www.ogc.org/projects/groups/stylesapiswg) specificatie wordt ontwikkelde voor het publiceren, delen en vinden van map stijlen en bijbehorende resources. 

<div class="informative">
_AANBEVELING_ Lever de stijling aan doormiddel van de OCG API Styles standaard. 
</div>

## Aanbeveling: Styling specificatie encoding

De OGC API Styles standaard ondersteund verschillende style encodings, zoals JSON, HTML, CSS, SLD encoding en ook de Mapbox styling. 

In de praktijk ondersteund veel tooling de [Mapbox Styling specificatie](https://docs.mapbox.com/mapbox-gl-js/style-spec/) en zien we dat deze het meest wordt gebruikt. 

<div class="informative">
_AANBEVELING_ Specificeer de stijl conform de MapboxGL style specification (https://docs.mapbox.com/mapbox-gl-js/style-spec/) 
</div>

### Aanbeveling: Standaard stijl

Een vector tile set is moeilijk te bevatten zonder stijling. Door het aanleveren van minimaal 1 default stijl is de instap voor delen, hergebruik en aanpassing makkelijker en zorgt ervoor dat de client direct aan de slag kan. 

<div class="informative">
_AANBEVELING_ Lever altijd minimaal 1 standaard stijl aan bij een vector tile set.
</div>


De stijling hangt direct samen met de aangeleverde data in de vector tiles. Een goede inrichting van de data en de data attributen in samenhang met een goede styling opzet, is cruciaal voor de snelheid en gebruiksvriendelijkheid van de kaart en de vector tile service. Voor meer tips en tricks hierover zie het [Best Practices document]().