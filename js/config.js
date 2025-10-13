var respecConfig =
{
  //-- specStatus is verplicht! (activeer 1 van de volgende) --------------------------
  specStatus: "def",                // Werk Versie = WV, Consultatie versie = CV
  //-- specType is verplicht! (activeer 1 van de volgende) ------------------
  specType: "PR",                   // Praktijkrichtlijn
  //-- format is verplicht! -----------------------------------------------------------
  format: "markdown",                 // altijd "markdown"
  //-- publishDate is verplicht -------------------------------------------------------
  //-- NB: in de werkversie uitzetten, want dan pakt Respec de pushdate ---------------
  publishDate: "2025-10-13",  	    // Format is "YYYY-MM-DD"
  //-- de namen van de Editor(s) ---------------------------------------------
  github: "https://github.com/geonovum/praktijkrichtlijn-vector-tiling",
  editors:
  [
    {
      name:       "Niene Boeijen",
      company:    "This Way Cartography",
      companyURL:  "https://nieneb.nl/"

    },
    {
      name:       "Thijs Brentjens",
      company:    "Geonovum",
      companyURL: "https://geonovum.nl"
    },
    {
      name:       "Rolf Jonker",
      company:    "Geonovum",
      companyURL: "https://geonovum.nl"
    },
  ],
  //-- de namen van de Author(s) ------------------------------------------------------
  //-- vul in: per Author: name:, company:, companyURL: -------------------------------
  // Werkgroepleden in andere paragraaf
  // authors:
  // [
  //   {
  //     name:       "Werkgroep leden noemen",
  //     company:    "Per organisatie",
  //     companyURL: "https://example.com"
  //   },
  // ],
  //-- shortName is verplicht! (komt in de URL: kies logische naam) --------------------
  shortName: "vt",  	          // Wordt gebruikt in de document URL
  pubDomain: "serv", 	            // Services
  issueBase: "https://github.com/geonovum/praktijkrichtlijn-vector-tiling/issues",
  //-- license: voor de geldende gebruiksvoorwaarden
  license: "cc-by",              //-- bronvermelding, geen afgeleide werken (default)
  //-- localBiblio: lokale bibliografie, voor verwijzigingen
  localBiblio:
  {
    "Mapbox-Vector-Tile-Specification":
      {
        title:      "Mapbox Vector Tile Specification",
        href:       "https://github.com/mapbox/vector-tile-spec/tree/master/2.1",
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
      publisher: "W3C en OGC",
    },
    "API-Designrules": {
      title: "API Designrules (Nederlandse API Strategie IIa)",
      href: "https://docs.geostandaarden.nl/api/API-Designrules/",
      status: "Geonovum Standaard",
      publisher: "W3C en OGC",
    },
    "OGC-API-Tiles-Core": {
      title: "OGC API - Tiles - Part 1: Core",
      href: "https://docs.ogc.org/is/20-057/20-057.html",
      status: "1.0",
      publisher: "OGC",
    },
    "OGC-Two-Dimensional-Tile-Matrix-Set-and-Tile-Set-Metadata": { // Nieuwste standaard. Goed?
      title: "OGC Two Dimensional Tile Matrix Set and Tile Set Metadata",
      href: "https://docs.ogc.org/is/17-083r4/17-083r4.html",
      status: "2.0",
      publisher: "OGC",
    },
    "OGC-API-Styles": {
      title: "OGC API Styles",
      href: "https://docs.ogc.org/DRAFTS/20-009.html",
      status: "DRAFT",
      publisher: "OGC",
    },
    "Mapbox-Style-Specification" : {
      title: "Mapbox Style Specification",
      href: "https://docs.mapbox.com/mapbox-gl-js/style-spec/",
      status: "v13.18.0",
      publisher:  "Mapbox",
    }
  },

  //-- Voor dit blok geldt: alleen als er eerdere versies zijn en altijd beiden aan/uit!
  previousPublishDate: "2021-08-30",  	    // Format is "YYY-MM-DD"
  previousMaturity: "GN-DEF",                   // kies 1 van deze 2 regels
  //previousMaturity: "VV",  	                // kies 1 van deze 2 regels

  //-- Optionele parameters:
  //emailComments: "mim@geonovum.nl",         // reactie mailadres, alleen bij CV!
  //subtitle: "iets",                         // Subtitel van het document
  //maxTocLevel: 3,                           // Aantal niveau's ToC, default is 0
};
