//-------------------------------------------------------------------------------------
//-- File. . . :  config.js
//-- Bevat . . :  Template voor de  configuratie voor respec
//--              Gebaseerd op https://github.com/Geonovum/respec/wiki
//--              Deze file moet worden neergezet in de root-directory van de
//--              betreffende standaard.
//-- Door. . . :  Jan van Gelder
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-- Log . . . :  20181015 - JvG - Initiele versie
//-------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------
var respecConfig =
{
  //-- specStatus is verplicht! (activeer 1 van de volgende) --------------------------
  specStatus: "GN-WV",                // Werk Versie
  //specStatus: "GN-CV",              // Consultatie Versie
  //specStatus: "GN-VV",              // Vaststellings Versie
  //specStatus: "GN-DEF",             // Definitieve Versie
  //-- specType is verplicht! (activeer 1 van de volgende) ----------------------------
  //specType: "NO",                   // Norm
  //specType: "ST",                   // Standaard
  //specType: "IM",                   // Informatie Model
  //specType: "PR",                     // Praktijk Richtlijn
  specType: "HR",                   // HandReiking
  //specType: "WA",                   // Werkafspraak
  //-- format is verplicht! -----------------------------------------------------------
  format: "markdown",                 // altijd "markdown"
  //-- publishDate is verplicht -------------------------------------------------------
  //-- NB: in de werkversie uitzetten, want dan pakt Respec de pushdate ---------------
  //publishDate: "2018-09-18",  	    // Format is "YYY-MM-DD"
  //-- de namen van de Editor(s) ------------------------------------------------------
  //-- vul in: per Editor: name:, company:, companyURL: -------------------------------
  //-- de github repository waar je documentn in staat --------------------------------
  github: "https://github.com/geonovum/praktijkrichtlijn-vector-tiling",
  editors:
  [
    {
      name:       "Thijs Brentjens",
      company:    "Geonovum",
      companyURL: "https://geonovum.nl"
    },
    {
      name:       "Niene Boeijen",
      company:    "This Way"
    },
  ],
  //-- de namen van de Author(s) ------------------------------------------------------
  //-- vul in: per Author: name:, company:, companyURL: -------------------------------
  // TODO: werkgroep leden noemen?
  authors:
  [
    {
      name:       "Werkgroep leden noemen?",
      company:    "Per organisatie",
      companyURL: "https://example.com"
    },
  ],
  //-- shortName is verplicht! (komt in de URL: kies logische naam) --------------------
  shortName: "vt",  	          // Wordt gebruikt in de document URL
  //-- pubDomain is verplicht! (komt in de URL: Activeer 1 van de volgende) ------------
  pubDomain: "serv", 	            // Services
  //pubDomain: "visu", 	            // Visualisatie
  issueBase: "https://github.com/geonovum/praktijkrichtlijn-vector-tiling/issues",
  //-- license: voor de geldende gebruiksvoorwaarden
  license: "cc-by",              //-- bronvermelding, geen afgeleide werken (default)
  // license: "cc0",                //-- Public Domain Dedication
  // license: "cc-by",              //-- Attribution, met bronvermelding
  //-- localBiblio: lokale bibliografie, voor verwijzigingen
  localBiblio:
  {
    "MapboxVT":
      {
        title:      "Mapbox Vector Tile Specification",
        href:       "https://docs.mapbox.com/vector-tiles/specification/",
        status:     "V2.1",
        publisher:  "Mapbox",
    },
    "PBF": {
      title: "Google Proto Buffers",
      href : "https://developers.google.com/protocol-buffers/",
      status: "",
      publisher: "Google",
    },
    "SDW-BP": {
      title: "Spatial Data on the Web Best Practices",
      href: "https://www.w3.org/TR/sdw-bp/",
      status: "Best practice",
      publisher: "W3c en OGC",
    },
    "APIDesignRules": {
      title: "API Designrules (Nederlandse API Strategie IIa)",
      href: "https://docs.geostandaarden.nl/api/API-Designrules/",
      status: "Geonovum Standaard",
      publisher: "W3C en OGC",
    },
    "OGC-API-Tiles-Core": {
      title: "OGC API - Tiles - Part 1: Core",
      href: "https://ogcapi.ogc.org/tiles/", // TODO: precise link to final version, if published
      status: "DRAFT",
      publisher: "OGC",
    },
    "OGC Two Dimensional Tile Matrix Set": {
      title: "OGC Two Dimensional Tile Matrix Set",
      href: "https://docs.opengeospatial.org/is/17-083r2/17-083r2.html", // TODO: precise link to final version, if published
      status: "1.0",
      publisher: "OGC",
    },

  }

  //-- Voor dit blok geldt: alleen als er eerdere versies zijn en altijd beiden aan/uit!
  //previousPublishDate: "2018-09-18",  	    // Format is "YYY-MM-DD"
  //previousMaturity: "CV",                   // kies 1 van deze 2 regels
  //previousMaturity: "VV",  	                // kies 1 van deze 2 regels

  //-- Optionele parameters:
  //emailComments: "mim@geonovum.nl",         // reactie mailadres, alleen bij CV!
  //subtitle: "iets",                         // Subtitel van het document
  //maxTocLevel: 3,                           // Aantal niveau's ToC, default is 0
};
