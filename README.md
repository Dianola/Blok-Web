# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Dian Dikhout

  #### Je startniveau:
  Rode piste

  #### Je focus:
  Surface plane
 
</details>





## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
  De website die ik ga namaken is Vue cinemas    https://www.vuecinemas.nl/films/nu-in-de-bioscoop#filmposters
  Ik heb gekozen voor de overzichtpagina van de films die afspelen op 1 dag en dan in een stad. De tweede pagina is het kiezen van stoelen bij het bestellen van kaartjes.

  #### Screenshot(s) van de eerste pagina (small screen): 
  Overzicht van de films die draaien in de bioscoop op 1 locatie:
  <img src="readme-images/overzicht.jpg" width="375px" alt="Overzicht films die spelen vandaag in Alkmaar">

  #### Screenshot(s) van de tweede pagina (small screen):
  Zitplaatsen kiezen
  <img src="readme-images/film-stoelkeuze.jpg" width="375px" alt="Zitplaatsen kiezen van de film The Marvels">

</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen:
  Wat mij is opgevallen is dat je niet gemakkelijk de bestelling kan annuleren bij Vue.

  Slechtzienden:
  Grijzen teksten of icoontjes op een zwarte achtergrond van de website zie je niet goed als je slechtziend bent, bijvoorbeeld met vlekken voor je ogen. Witte tekst op gele button is ook amper te lezen. De teksten moeten niet te klein zijn. De stoelen die bezet zijn zijn niet zichtbaar en vallen weg met de achtergrond. Het lijkt dus alsof de stoelen kaart niet compleet is. Aan de ene kant is dit handig omdat de bezoekers er toch niet op kunnen klikken wegens reservering maar het kan wel fijn zijn voor slechtzienden om te weten dat er wel stoelen tussen zitten en verduidelijking hebben dat ze bezet zijn. Zij zoudenmisschien juist wel daar n het midden willen zitten.

  Gele bril: 
  De kleuren groen en blauw is niet meer te onderscheiden (stoel keuze). Ze veranderen alle twee in dezelfde kleur.

  Verteller op windows:
  De website leest van boven naar beneden. Het heeft aan de bovenkant een pop-up dat je kan sluiten. Als die niet is afgesloten dan kan ik niet naar een volgende kop omdat die niet volgens verteller bestaat.
  De overszichts pagina van de films die afspelen op een dag worden gezien als een heading maar daar neemt hij ook gelijk de sub kopjes en tijden mee van de buttons. Ook zegt hij 1 van 16 in de plaats van heading 1. Het is trouwens een H2 in de code.
  Flim pagina leest hij de tijden van de buttons wel op maar zegt niet de dag. Dit gebeurt ook als ik met de pijlen alleen navigeer en niet alleen de links. Verder als ik met de pijl keys navigeer voor tijden van 1 film dan gaat hij van beneden naar boven en moet ik eerst alle links van de voeter langs.
  De Engelse tekst, terwijl het in het Nederlands word voorgelezen, klinkt niet juist en is erg verwarrend. Vooral de film titels. Je weet niet goed wat er voorgelezen wordt. Veel films hebben een Engelse titel. Dus misschien een alt tekst met titels in het nederlands?

</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>

  ### de hele pagina met dynamisch delen: 
  <img src="readme-images/notaties.jpg" width="375px" alt="breakdown van de hele pagina">


</details>





## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  
  Met het opbouwen van de website ben ik eerst begonnen met alle content in de html te zetten van beide pagina's. Nadat dat klaar was bn ik pas begonnen met het opmaken van de site met css.

  Het duurde een tijd voordat ik de foto van de film en de titel + de links van de tijden naast elkaar kreeg. Ik ben er uiteindelijk achter gekomen dat ik ze apart in een section moest zetten en door middel van flexbox en grid ze naast elkaar heb gekregen. Nu heb ik alleen het probleem dat niet alle titels gelijk naast de film poster heb staan. Er zitten rare tabs in (zie foto). <br>
  <img src="readme-images/overzicht-naast-elkaar.png" width="375px" alt="de secties met links de filmposter en rechts de titel van de film samen met de tijden knopen">

  Doordat ik ben gaan vormgeven met mobile first ziet het er wel goed uit op iPhone 8 formaat maar website formaat werdt alles op elkaar gecompressed.<br>
  <img src="readme-images/mobiel-overzicht-v1.png" width="375px" alt="Eerste vormgeving film sections van de film overzicht pagina"><br>
  <img src="readme-images/compressie-films-desktop.png" width="375px" alt="Eerste vormgeving film sections van de film overzicht pagina">
  <br>

  Het bleek dus dat ik niet had aangegeven op welke column de list item moest beginnen. Dit heb ik nu wel aangegeven in de css bij de li met grid-column-start: 1;. Dit zet nu ook op groter scherm formaat de films onder elkaar. <br>
  <img src="readme-images/film-overzicht-onder-elkaar.png" width="375px" alt="Groot scherm formaat waar de films nu onder elkaar zijn geplaatst">


  ### Agenda voor meeting
  samen met je groepje opstellen

  | Dian Dikhout    | Famke Mulder    | Quinty Caspers  | Niels       |
  |             | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
  - ...

</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
- ...

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):

</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
  - ...

</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="uitomst opdracht 1">


  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="bummer">
</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg). 
  Nb. ChatGpT en andere AI horen er ook bij.
  Nb. Vermeld de bronnen ook in je code.

  1. bron 1
  2. bron 2
  3. ...

</details>
