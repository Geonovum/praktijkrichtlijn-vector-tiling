# Scope
**hoofdstuk is werk in uitvoering**

Scope van de praktijkrichtlijn.

De Prakrijktrichtlijn heeft tot doel om te specificeren hoe het beste vector tiles aangeboden kunnen worden om breed gebruik ervan mogelijk te maken, voor Nederlandse toepassingen.

Met als doel verschillende vector tile aanbieders van  primair Nederlandse data / data van Nederlandse organisaties (overheden?) makkelijk te kunnen gebruiken, combineren en hergebruiken. 

Aanbod uniform = goede client kunnen bouwen. Zodat het makkelijker wordt vector tiles te gebruiken. Dit helpt bij het stimuleren gebruik Vector-tiling.

## Toepassingsgebied

De Praktijkrichtlijn richt zich op publicatie en gebruik van vector tiles in (web)applicaties, 

Richt zich op het aanbieden, publiceren, gebruik en hergebruik van vector tiles op het web. (web)applicaties van primair Nederlandse data / data van Nederlandse organisaties (overheden?). 

De scope van deze praktijkrichtlijn vector tiles voor  visualisatie (portrayal), 2D vector tiles, die bedoeld zijn om door derden te gebruiken (primair) zoals voor achtergrondkaarten. Niet delen van data, delen van features of nauwkeurige metingen. 

Aanname dat een typisch gebruik van vector tiles is voor het visualiseren van grotere datasets en cartografische producten zoals topografische achtergrond kaarten. Waarbij de aanmame is dat de data hiervoor , voor bewerkt is en versimpeld om tot een goed uitgewerkte visualisatie te komen. Die daarom niet de kwalitatieve nauwkeruige coordinaten van de orginele geodata bevat. 

Deze tiles kunnen aangeboden worden als service of als bulk download. We richten ons meer op aanbieden als service dan bulk download. In dit document wordt er geen verschil gemaakt of de tegels al voorberekend zijn ("pre-cooked" / "pre-processed"), of dynamisch worden opgebouwd ( real time request). Bij een vector tile service kan dus beide bedoeld worden. 


Door ons te beperken tot visualisatie is natuurlijk het risico dat niet alle positieve mogelijkehden van vector tiles hier genoemd worden. Maar het doen van deze praktijkrichtlijk is om de verschillende vector tile aanbieders hun vector tile sets zo aan te laten bieden dat deze makkelijk te gebruiken, combineren en hergebruiken zijn. Niet alleen met andere vector tile sets maar ook met de OGC standaarden, zoals WMS, WFS en de toekomstige OGC API standaarden. Daarom sluiten we in deze praktijktichtlijn ook zo veel mogelijk aan bij bestaande richtlijnen en standaarden. 


### Buiten scope

Hoewel het mogelijk is om vector tiling te gebruiken is om alleen de (feature/object) data uit te wisselen (al dan niet met nauwkeurige geometrie), is dit buiten scope van deze praktijkrichtlijn. Het herleiden van de orginele geometrie uit een vector tile geometrie kan, maar word hier niet behandeld. 

Buiten scope van de Praktijkrichtlijn zijn verder:
- 3D vector tiles
- "silo" applicaties: applicaties die niet beogen tiles te delen met derden.
- gebruik en advies over software en tooling voor het maken, serveren en consumeren van vector tiles 
- tips & trucs, de bijlage [Best Practices](#BestPractices) bevat
- beveiligingsaspecten, zoals API Keys, beveiliging met naam/wachtwoord
- Aanbevelingen rond attribuut data. 
- Pre-processing van data 
- Styling best practises 

Voor eigen applicaties en specifieke toepassingen staat het uiteraard vrij om op een andere manier vector tiles aan te bieden dan deze praktijkrichtlijn beoogt.
