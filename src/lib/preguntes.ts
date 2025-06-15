export const PREGUNTES = [
  {
    pregunta:
      "El disseny físic tracta d'adaptar l'esquema lògic a les particularitats d'un SGBD i una càrrega de treball concretes.",
    opcions: ['Cert', 'Fals'],
    correcta: 0,
  },
  {
    pregunta: 'Quina NO és una de les tasques bàsiques del disseny físic?',
    opcions: [
      'Reconsiderar els requisits',
      'Escollir les estructures de dades',
      "Adaptar l'esquema lògic al SGBD",
      "Reconsiderar l'esquema relacional",
      'Testejar el rendiment',
    ],
    correcta: 0,
  },
  {
    pregunta:
      'Quin NO és un criteri per prendre decisions sobre el disseny físic?',
    opcions: [
      'Benefici econòmic',
      'Disponibilitat',
      'Escalabilitat',
      "Simplicitat de l'administració",
      'Millora de rendiment',
      'Integritat',
    ],
    correcta: 0,
  },
  {
    pregunta: 'Quina NO és una dificultat en el disseny físic?',
    opcions: [
      'La xarxa',
      'Els usuaris',
      'La normalització',
      'Les imperfeccions del SGBD',
      'Tenir recursos limitats',
      'L’existència de criteris contraposats',
    ],
    correcta: 2,
  },
  {
    pregunta: 'Quina afirmació NO és certa respecte al catàleg?',
    opcions: [
      'Conté la informació del sistema que el propi SGBD necessita per funcionar',
      "La seva estructura i continguts difereixen d'un SGBD a un altre, tot i que existeix un conjunt de vistes standard",
      "Conté totes les modificacions (insercions, modificacions i esborrats) realitzades des de l'última còpia de seguretat",
      'És útil per gestionar i afinar el funcionament de la base de dades',
    ],
    correcta: 2,
  },
  {
    pregunta:
      'Quin dels següents continguts del catàleg NO considerem estàtic?',
    opcions: [
      'Informació de les vistes, com ara el seu nom, o la consulta associada',
      'Informació dels usuaris, com ara els intents de connexió',
      "Informació de les taules, com ara el seu nom, atributs, o restriccions d'integritat",
      'Informació dels índexs, com ara el seu nom, tipus, o atributs implicats',
      'Paràmetres del sistema, com ara la grandària del pool de buffers o la grandària de pàgina',
    ],
    correcta: 1,
  },
  {
    pregunta:
      'Quin dels següents continguts del catàleg NO considerem dinàmic?',
    opcions: [
      'Informació de les taules, com ara la seva cardinalitat o el nombre de blocs',
      'Informació dels usuaris, com ara els intents de connexió',
      'Informació de les vistes, com ara si estan materialitzades o es poden expandir',
      'Informació dels índexs, com ara la seva alçada o el rang de valors',
    ],
    correcta: 2,
  },
  {
    pregunta:
      "L'estàndard SQL'03 defineix quines han de ser les taules del catàleg de qualsevol SGBD.",
    opcions: ['Cert', 'False'],
    correcta: 1,
  },
  {
    pregunta:
      "L'estàndard SQL'03 distingeix entre la informació del catàleg necessària per l'administrador i la necessària pels usuaris de la base de dades.",
    opcions: ['Cert', 'False'],
    correcta: 0,
  },
  {
    pregunta:
      "Les estructures d'accés (és a dir, els índexs) són ... respecte a les taules.",
    opcions: ['Complementàries', 'Redundants'],
    correcta: 0,
  },
  {
    pregunta: 'Un índex sempre té menys atributs que la taula.',
    opcions: ['Cert', 'False'],
    correcta: 1,
  },
  {
    pregunta:
      'Sempre que posem un índex, la taula queda ordenada pels atributs indexats.',
    opcions: ['Cert', 'False'],
    correcta: 1,
  },
  {
    pregunta: "Què NO podem trobar en una entrada d'un índex?",
    opcions: [
      'El registre sencer',
      'Un mapa de bits',
      'Una adreça física del registre',
      'Una funció de hash',
      "Una llista d'adreces físiques de registres",
    ],
    correcta: 3,
  },
  {
    pregunta: "Els valors null sempre es troben a l'índex.",
    opcions: ['Cert', 'False'],
    correcta: 1,
  },
  {
    pregunta: 'Els blocs de la taula contenen apuntadors als registres.',
    opcions: ['Cert', 'False'],
    correcta: 0,
  },
  {
    pregunta: 'Els blocs de la taula contenen metadades.',
    opcions: ['Cert', 'False'],
    correcta: 0,
  },
  {
    pregunta:
      'Tots el registres continguts al mateix bloc tenen la mateixa longitud.',
    opcions: ['Cert', 'False'],
    correcta: 1,
  },
  {
    pregunta:
      "Les entrades que trobem a les fulles d'un índex tipus arbre sempre estan ordenades.",
    opcions: ['Cert', 'False'],
    correcta: 0,
  },
  {
    pregunta:
      "Tots els nodes d'un índex tipus arbre estan normalment plens al 100%.",
    opcions: ['Cert', 'False'],
    correcta: 1,
  },
  {
    pregunta: 'Un índex tipus arbre incrementa la grandària de la taula.',
    opcions: ['Cert', 'False'],
    correcta: 1,
  },
  {
    pregunta:
      "Les entrades que trobem als buckets d'un índex tipus hash sempre estan ordenades.",
    opcions: ['Cert', 'False'],
    correcta: 1,
  },
  {
    pregunta:
      "Tots els buckets d'un índex tipus hash estan normalment plens al 100%.",
    opcions: ['Cert', 'False'],
    correcta: 1,
  },
  {
    pregunta:
      "Els buckets d'un índex tipus hash estan normalment més plens que els nodes d'un tipus arbre.",
    opcions: ['Cert', 'False'],
    correcta: 0,
  },
  {
    pregunta: 'Un índex tipus hash incrementa la grandària de la taula.',
    opcions: ['Cert', 'False'],
    correcta: 1,
  },
  {
    pregunta:
      "Un índex tipus cluster manté ordenades les dades de la taula segons l'atribut d'indexació.",
    opcions: ['Cert', 'False'],
    correcta: 0,
  },
  {
    pregunta: 'Un índex tipus cluster incrementa la grandària de la taula.',
    opcions: ['Cert', 'False'],
    correcta: 0,
  },
  {
    pregunta: '| T | representa el nombre de ... de la taula T.',
    opcions: ['Atributs', 'Bytes', 'Blocs', 'Files'],
    correcta: 2,
  },
  {
    pregunta:
      "Quin és típicament l'ordre (normalment representat per la lletra “d”) d'un índex tipus arbre?",
    opcions: [
      'Menor que 10',
      'Entre 10 i 50',
      'Entre 50 i 100',
      'Major que 100',
    ],
    correcta: 3,
  },
  {
    pregunta:
      'Els índexs ocupen sempre menys espai que la taula i conseqüentment mai generaran problemes d’espai.',
    opcions: ['Cert', 'False'],
    correcta: 1,
  },
  {
    pregunta:
      "Un índex tipus arbre sempre ocupa menys espai que l'índex cluster corresponent.",
    opcions: ['Cert', 'False'],
    correcta: 0,
  },
  {
    pregunta:
      'El nombre de blocs ocupats per qualsevol estructura de dades, sempre ha de ser un nombre enter.',
    opcions: ['Cert', 'False'],
    correcta: 0,
  },
  {
    pregunta:
      "El cost d'utilitzar un índex sempre és més petit que el de llegir la taula sencera.",
    opcions: ['Cert', 'False'],
    correcta: 1,
  },
  {
    pregunta:
      "Per estimar el cost d'accedir a una certa estructura, comptem només el cost corresponent a accedir els blocs de la taula.",
    opcions: ['Cert', 'False'],
    correcta: 1,
  },
  {
    pregunta:
      "Per estimar el cost d'accedir a una certa estructura, comptem només el cost corresponent a accedir els blocs de disc.",
    opcions: ['Cert', 'False'],
    correcta: 0,
  },
  {
    pregunta:
      "El cost d'accés estimat per a una estructura d'accés, sempre ha de ser un nombre enter.",
    opcions: ['Cert', 'False'],
    correcta: 1,
  },
  {
    pregunta:
      "Els índexs tipus arbre i hash són molt útils quan l'atribut indexat té molts repetits.",
    opcions: ['Cert', 'False'],
    correcta: 1,
  },
  {
    pregunta:
      'Posar un índex sempre és útil, independentment del tipus de consulta.',
    opcions: ['Cert', 'False'],
    correcta: 1,
  },
  {
    pregunta: 'Posar índexs mai empitjorarà el temps de resposta del sistema.',
    opcions: ['Cert', 'False'],
    correcta: 1,
  },
  {
    pregunta:
      'El millor és sempre definir tants índexs com puguem, però sense arribar a omplir el disc del tot.',
    opcions: ['Cert', 'False'],
    correcta: 1,
  },
  {
    pregunta:
      'Els índexs tipus arbre i hash són molt útils en consultes amb condicions poc selectives.',
    opcions: ['Cert', 'False'],
    correcta: 1,
  },
  {
    pregunta:
      'Els índexs tipus hash només són útils si tinc una condició de selecció per igualtat.',
    opcions: ['Cert', 'False'],
    correcta: 0,
  },
  {
    pregunta: 'Els índexs són útils a qualsevol taula.',
    opcions: ['Cert', 'False'],
    correcta: 1,
  },
  {
    pregunta:
      "NO haig de definir un índex tipus arbre o hash si l'atribut té pocs valors.",
    opcions: ['Cert', 'False'],
    correcta: 0,
  },
  {
    pregunta:
      'Index-only query answering vol dir que el SGBD no accedirà a la taula corresponent per a resoldre la consulta.',
    opcions: ['Cert', 'False'],
    correcta: 0,
  },
  {
    pregunta:
      "En quina posició se situa l'optimització dins del procés de processament de consultes que du a terme el gestor de consultes?",
    opcions: ['Primera', 'Segona', 'Tercera', 'Ultima'],
    correcta: 3,
  },
  {
    pregunta:
      "L’optimització de consultes tradueix d'un llenguatge declaratiu a un de procedural.",
    opcions: ['Cert', 'Fals'],
    correcta: 0,
  },
  {
    pregunta:
      "Quina NO és una de les tres fases de l'optimització de consultes?",
    opcions: ['Sintàctica', 'Semàntica', 'Física', 'Lògica'],
    correcta: 3,
  },
  {
    pregunta:
      'L’optimització escaneja les taules involucrades en la consulta per a calcular les estadístiques que necessita.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta: 'L’optimitzador de consultes sempre troba el millor pla d’accés.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta:
      'L’optimitzador prioritza acabar ràpid la tasca d’optimizació per davant de trobar el millor pla d’accés.',
    opcions: ['Cert', 'Fals'],
    correcta: 0,
  },
  {
    pregunta:
      'L’optimització semàntica canvia el llenguatge de representació de la consulta.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta:
      'L’optimització semàntica considera només la pròpia consulta i les lleis de la lògica.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta:
      'L’optimització semàntica pot fer que el cost d’execució d’una consulta sigui zero.',
    opcions: ['Cert', 'Fals'],
    correcta: 0,
  },
  {
    pregunta: 'L’optimització semàntica pot fer més curta la clàusula WHERE.',
    opcions: ['Cert', 'Fals'],
    correcta: 0,
  },
  {
    pregunta: 'L’optimització semàntica pot fer més llarga la clàusula WHERE.',
    opcions: ['Cert', 'Fals'],
    correcta: 0,
  },
  {
    pregunta:
      'L’optimització sintàctica canvia el llenguatge de representació de la consulta.',
    opcions: ['Cert', 'Fals'],
    correcta: 0,
  },
  {
    pregunta:
      'L’optimització sintàctica resol totes les vistes no-materialitzades que hi hagi a la consulta.',
    opcions: ['Cert', 'Fals'],
    correcta: 0,
  },
  {
    pregunta: 'L’optimització sintàctica canvia el cost de la consulta.',
    opcions: ['Cert', 'Fals'],
    correcta: 0,
  },
  {
    pregunta:
      'Les dues regles heurístiques utilitzades a l’optimització sintàctica sempre milloren el cost de la consulta.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta: 'Quina heurística utilitza l’optimització sintàctica?',
    opcions: [
      'Baixar les projeccions i seleccions tant com sigui possible',
      'Reduir el nombre d’operacions tant com sigui possible',
      'Pujar les projeccions i seleccions tant com sigui possible',
      'Reduir el cost de la consulta tant com sigui possible',
    ],
    correcta: 0,
  },
  {
    pregunta:
      'L’optimització sintàctica sempre redueix el nombre d’operacions a l’arbre sintàctic.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta:
      'L’optimització sintàctica mai deixa una projecció just a sobre d’una fulla de l’arbre sintàctic.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta:
      'Després de l’optimització sintàctica poden quedar dos subgrafs iguals a l’arbre sintàctic.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta: 'El resultat de l’optimització sintàctica sempre és un arbre.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta:
      'L’optimització sintàctica mai elimina operacions de l’arbre sintàctic.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta:
      'Si una selecció té un predicat complex, sempre la podem dividir en dues seleccions consecutives.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta:
      'La selecció sempre commuta (sense posar ni treure res) amb la join.',
    opcions: ['Cert', 'Fals'],
    correcta: 0,
  },
  {
    pregunta:
      'La selecció sempre commuta (sense posar ni treure res) amb qualsevol operació de conjunts (és a dir, unió, intersecció i diferència).',
    opcions: ['Cert', 'Fals'],
    correcta: 0,
  },
  {
    pregunta:
      'La selecció sempre commuta (sense posar ni treure res) amb la projecció.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta:
      'La projecció sempre commuta (sense posar ni treure res) amb la join.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta:
      'La projecció sempre commuta (sense posar ni treure res) amb qualsevol operació de conjunts (és a dir, unió, intersecció i diferència).',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta: 'Quines propietats compleix la join respecte a ella mateixa?',
    opcions: ['Commutativa', 'Associativa', 'Cap de les dues', 'Totes dues'],
    correcta: 3,
  },
  {
    pregunta:
      'Quin nom NO rep l’algorisme que segueix l’execution manager per obtenir el resultat d’una consulta?',
    opcions: [
      'Pla d’accés de la consulta',
      'Pla d’execució de la consulta',
      'Arbre de procés de la consulta',
      'Arbre d’execució de la consulta',
    ],
    correcta: 3,
  },
  {
    pregunta:
      'Què NO considera l’optimització física per a generar el pla d’execució d’una consulta?',
    opcions: [
      'Les estructures físiques disponibles',
      'Els camins d’accés que permet el predicat de la consulta',
      'Els algorismes que té disponibles el SGBD',
      'Les propietats ACID',
    ],
    correcta: 3,
  },
  {
    pregunta: 'Quina operació deixa de ser explícita en l’arbre de procés?',
    opcions: ['Join', 'Projecció', 'Unió', 'Selecció'],
    correcta: 1,
  },
  {
    pregunta:
      'L’arbre de procés mai té menys operacions que l’arbre sintàctic un cop optimitzat.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta:
      'L’arbre de procés mai té més operacions que l’arbre sintàctic un cop optimitzat.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta:
      'Què NO genera alternatives en l’espai de cerca de l’optimització basada en costos?',
    opcions: [
      'Les estructures d’accés disponibles',
      'Els algorismes existents per cada operació',
      'L’ordre de les joins',
      'La utilització de la cache',
    ],
    correcta: 3,
  },
  {
    pregunta:
      'Quines propietats de la join utilitza l’optimització física per a generar possibles alternatives d’execució?',
    opcions: [
      'Associativitat i transitivitat',
      'Commutativitat i transitivitat',
      'Commutativitat i associativitat',
      'Totes tres propietats',
    ],
    correcta: 2,
  },
  {
    pregunta:
      'L’encarrilament (pipelining) és una tècnica d’execució de consultes que evita la materialització de resultats intermitjos.',
    opcions: ['Cert', 'Fals'],
    correcta: 0,
  },
  {
    pregunta:
      'L’encarrilament (pipelining) es pot fer servir només quan tenim un esquema en estrella.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta:
      'Quan fem encarrilament (pipelining), l’ordre de les joins és ...',
    opcions: [
      'Decreixent (de més selectiva a menys selectiva)',
      'Creixent (de menys selectiva a més selectiva)',
      'Irrellevant',
      'El mateix que l’ordre dels atributs a la clau primària de la taula de fets',
    ],
    correcta: 0,
  },
  {
    pregunta:
      'El cost d’una operació de l’arbre de procés és el cost de llegir l’entrada i d’executar la pròpia operació.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta:
      'El cost d’una consulta és la suma dels costos de totes les operacions del seu arbre de procés.',
    opcions: ['Cert', 'Fals'],
    correcta: 0,
  },
  {
    pregunta:
      'L’optimitzador calcula el cost de totes les alternatives d’execució que genera.',
    opcions: ['Cert', 'Fals'],
    correcta: 0,
  },
  {
    pregunta:
      'El factor de selecció de qualsevol operació és el percentatge de files al resultat respecte a mínim de files que podem tenir.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta: 'Un factor de selecció “1” és el més selectiu que pot haver.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta:
      'La cardinalitat màxima d’una join coincideix amb la del producte cartesià.',
    opcions: ['Cert', 'Fals'],
    correcta: 0,
  },
  {
    pregunta:
      'El càlcul del factor de selecció de la UNION és el mateix que el de la UNION ALL.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta:
      'El càlcul del factor de selecció de la join és el mateix que el de la intersecció.',
    opcions: ['Cert', 'Fals'],
    correcta: 0,
  },
  {
    pregunta:
      'Les cardinalitats dels resultats intermitjos es calculen top-down a l’arbre de procés.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta:
      'El SGBD manté sempre actualitzades les estadístiques de les taules.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta:
      'El SGBD típicament assumeix una distribució normal dels valors de cada atribut.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta:
      'El SGBD típicament assumeix la independència estadística de tots els atributs de les taules.',
    opcions: ['Cert', 'Fals'],
    correcta: 0,
  },
  {
    pregunta:
      'El SGBD sempre calcula totes les estadístiques de la base de dades de cop.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta:
      'El SGBD pot calcular les estadístiques de la base de dades només a partir d’un mostreig.',
    opcions: ['Cert', 'Fals'],
    correcta: 0,
  },
  {
    pregunta: 'El factor de selecció d’un predicat mai pot ser “0”.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta: 'El factor de selecció d’un predicat mai pot ser “1”.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta:
      'El factor de selecció d’una clàusula “IN” és exactament el mateix que el d’un predicat complex amb la disjunció de les igualtats del mateix atribut amb cadascun dels valors al conjunt de la “IN”.',
    opcions: ['Cert', 'Fals'],
    correcta: 0,
  },
  {
    pregunta: 'Què NO afecta al factor de selecció d’una join?',
    opcions: [
      'Que un dels atributs sigui clau primària',
      'Que un dels atributs accepti valor nulls',
      'Que un dels atributs sigui clau forana',
      'Que un dels atributs tingui un check',
    ],
    correcta: 3,
  },
  {
    pregunta:
      'El factor de selecció de la θ-join amb “<>” és el mateix que el del producte cartesià.',
    opcions: ['Cert', 'Fals'],
    correcta: 0,
  },
  {
    pregunta:
      'La longitud d’un registre és la suma de les longituds dels seus atributs.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta:
      'Estimem el nombre de registres a un bloc com la grandària del bloc dividit per la longitud del registre arrodonit per excés.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta:
      'Estimem el nombre de blocs d’una taula com la cardinalitat de la taula dividida pel nombre de registres per bloc arrodonit per excés.',
    opcions: ['Cert', 'Fals'],
    correcta: 0,
  },
  {
    pregunta:
      'El primer pas per a processar una selecció d’un predicat complex és posar-ho en forma normal disjuntiva.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta:
      'Si després de posar el predicat lògic d’una selecció en forma normal conjuntiva una de les condicions dins d’un parèntesi no permet utilitzar cap índex, llavors no podem utilitzar-ne cap tampoc a les altres condicions dins del parèntesi.',
    opcions: ['Cert', 'Fals'],
    correcta: 0,
  },
  {
    pregunta:
      'Si després de posar el predicat lògic d’una selecció en forma normal conjuntiva un dels parèntesi queda negat, simplement l’eliminem del procés.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta:
      'La resolució de predicats de selecció amb operacions de llistes de RID, fa que no haguem de fer mai cap comprovació sobre les dades.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta:
      'La resolució de predicats de selecció amb operacions de llistes de RID, fa que no haguem de fer mai un table scan.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta:
      'Els índexs tipus arbre serveixen per avaluar clàusules lògiques amb qualsevol tipus de comparació.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta:
      'Els índexs tipus hash serveixen per avaluar clàusules lògiques només amb comparacions per igualtat.',
    opcions: ['Cert', 'Fals'],
    correcta: 0,
  },
  {
    pregunta: 'Un bitmap guarda un bit per cada fila de la taula.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta:
      'Un bitmap guarda una llista de bits per cada valor diferent de la taula.',
    opcions: ['Cert', 'Fals'],
    correcta: 0,
  },
  {
    pregunta:
      'Les operacions amb bitmaps són equivalents a les operacions de llistes de RIDs.',
    opcions: ['Cert', 'Fals'],
    correcta: 0,
  },
  {
    pregunta:
      'Els índexs tipus bitmaps serveixen per avaluar clàusules lògiques amb qualsevol tipus de comparació.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta:
      'Un índex tipus arbre multi-atribut no necessàriament utilitza més espai que si indexem només el primer dels seus atributs.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta:
      'Un índex tipus arbre multi-atribut permet resoldre qualsevol selecció amb un predicat lògic que involucri tots els atributs indexats.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta:
      'L’ordre dels atributs en un índex tipus arbre multi-atribut és irrellevant per a les consultes que es puguin fer amb ell.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta:
      'L’operació d’ordenació pot aparèixer en l’arbre de procés de consultes que NO tinguin ORDER BY.',
    opcions: ['Cert', 'Fals'],
    correcta: 0,
  },
  {
    pregunta: 'Un índex tipus arbre es pot utilitzar per ordenar les dades.',
    opcions: ['Cert', 'Fals'],
    correcta: 0,
  },
  {
    pregunta: 'Un índex tipus hash es pot utilitzar per ordenar les dades.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta:
      'Quin algorisme d’ordenació a memòria utilitza el External Merge Sort?',
    opcions: ['Bubble Sort', 'Quick Sort', 'Cap', 'Es irrellevant'],
    correcta: 3,
  },
  {
    pregunta:
      'El External Merge Sort requereix d’una zona d’espai temporal per a realitzar l’ordenació, de l’ordre de la grandària de la pròpia taula.',
    opcions: ['Cert', 'Fals'],
    correcta: 0,
  },
  {
    pregunta:
      'El nombre de vegades que l’algorisme External Merge Sort ha de llegir i escriure la taula és logarítmic respecte a la grandària de la pròpia taula.',
    opcions: ['Cert', 'Fals'],
    correcta: 0,
  },
  {
    pregunta:
      'L’operació de projecció sense eliminació de repetits no té cap cost associat quan la consulta té alguna altra operació.',
    opcions: ['Cert', 'Fals'],
    correcta: 0,
  },
  {
    pregunta:
      'L’eliminació de repetits considera les mateixes alternatives d’algorismes que l’ordenació.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta:
      'Una estructura cluster incrementa l’espai requetis per les taules que l’ocupen.',
    opcions: ['Cert', 'False'],
    correcta: 0,
  },
  {
    pregunta:
      'Una estructura cluster incrementa el cost d’accedir les dades de només una de les taules que l’ocupen.',
    opcions: ['Cert', 'False'],
    correcta: 0,
  },
  {
    pregunta:
      'L’opció que dona el cost més baix per a fer una join és sempre tenir les dues taules en una estructura cluster.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta: 'L’algorisme de Row Nested Loops és simètric.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta:
      'L’algorisme de Row Nested Loops requereix l’existència d’un índex a priori.',
    opcions: ['Cert', 'Fals'],
    correcta: 0,
  },
  {
    pregunta:
      'L’algorisme de Row Nested Loops només es pot utilitzar si, en l’arbre de procés, l’operació de join està situada directament sobre la taula de l’índex utilitzat.',
    opcions: ['Cert', 'Fals'],
    correcta: 0,
  },
  {
    pregunta:
      'L’algorisme de Row Nested Loops només es pot utilitzar si la comparació de la join és la igualtat.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta:
      'El cost de l’algorisme de Row Nested Loops és sempre més baix si no hem d’accedir atributs de la taula interna que no siguin els del propi índex utilitzat per l’algorisme.',
    opcions: ['Cert', 'Fals'],
    correcta: 0,
  },
  {
    pregunta:
      'L’algorisme de Row Nested Loops només permet utilitzar un índex tipus cluster si requerim atributs de la taula interna que no siguin els del propi índex.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta: 'L’algorisme de Block Nested Loops sempre es pot utilitzar.',
    opcions: ['Cert', 'Fals'],
    correcta: 0,
  },
  {
    pregunta: 'L’algorisme de Block Nested Loops és simètric.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta:
      'L’algorisme de Block Nested Loops sempre té un cost més baix si posem la taula més gran al bucle extern.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta:
      'L’algorisme de Block Nested Loops requereix que una de les taules càpiga a memòria.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta:
      'L’algorisme de Hash-join requereix l’existència d’un índex tipus hash a priori.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta:
      'L’algorisme de Hash-join només es pot utilitzar si la comparació de la join és la igualtat.',
    opcions: ['Cert', 'Fals'],
    correcta: 0,
  },
  {
    pregunta: 'L’algorisme de Hash-join és simètric.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta:
      'L’algorisme de Hash-join requereix que una de les taules càpiga a memòria.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta:
      'L’algorisme de Hash-join requereix dues passades si una de les taules no hi cap a memòria.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta:
      'Si alguna de les dues taules no hi cap a memòria, l’algorisme de Hash-join particiona les dues.',
    opcions: ['Cert', 'Fals'],
    correcta: 0,
  },
  {
    pregunta:
      'L’algorisme de Sort-Match només es pot utilitzar si la comparació de la join és la igualtat.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta:
      'El cost de l’algorisme de Sort-Match depèn de la comparació de la join.',
    opcions: ['Cert', 'Fals'],
    correcta: 0,
  },
  {
    pregunta:
      'L’algorisme de Sort-Match requereix que alguna de les taules estigui ordenada a priori.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta:
      'L’algorisme de Sort-Match requereix l’existència d’un índex cluster a priori.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta:
      'L’algorisme de Sort-Match deixa el resultat ordenat per l’atribut de join.',
    opcions: ['Cert', 'Fals'],
    correcta: 0,
  },
  {
    pregunta: 'Quin NO és un dels tres espais d’un SGBD?',
    opcions: ['Lògic', 'Físic', 'Conceptual', 'Virtual'],
    correcta: 2,
  },
  {
    pregunta: 'Què NO hi ha a l’espai lògic d’un SGBD?',
    opcions: ['Files', 'Vistes', 'Columnes', 'Taules'],
    correcta: 1,
  },
  {
    pregunta: 'Què NO hi ha a l’espai virtual d’un SGBD?',
    opcions: [
      'Pàgines',
      'Clusters',
      'Particions',
      'Índexs',
      'Vistes',
      'Taules',
      'Tablespaces',
    ],
    correcta: 5,
  },
  {
    pregunta: 'Què NO hi ha a l’espai físic d’un SGBD?',
    opcions: ['Fitxers', 'Índexs', 'Blocks', 'Extensions'],
    correcta: 1,
  },
  {
    pregunta:
      'Les extensions serveixen per a garantir que el sistema operatiu assigni espai físicament consecutiu al disc.',
    opcions: ['Cert', 'Fals'],
    correcta: 0,
  },
  {
    pregunta: 'Un Tablespace pot tenir associats més d’un fitxer.',
    opcions: ['Cert', 'Fals'],
    correcta: 0,
  },
  {
    pregunta:
      'Els Tablespaces faciliten disposar d’espai il·limitat a la base de dades.',
    opcions: ['Cert', 'Fals'],
    correcta: 0,
  },
  {
    pregunta: 'Cal definir un Tablespace per a cada usuari del sistema.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta:
      'Cal definir un Tablespace per a cada patró d’accés diferent al sistema.',
    opcions: ['Cert', 'Fals'],
    correcta: 0,
  },
  {
    pregunta:
      'Els paràmetres del SGBD serveixen per a configurar el comportament dels seus subsistemes.',
    opcions: ['Cert', 'Fals'],
    correcta: 0,
  },
  {
    pregunta:
      'El fillfactor és el percentatge màxim que pot tenir mai ple un bloc de la taula.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta: 'Reduir el fillfactor sempre fa que les taules ocupin més espai.',
    opcions: ['Cert', 'Fals'],
    correcta: 0,
  },
  {
    pregunta:
      'Reduir el fillfactor fa que les modificacions de les dades sempre siguin més ràpides.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta:
      'El nombre de repeticions de cada valor és irrellevant per a la utilitat d’un índex tipus arbre.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta:
      'Un cop s’ha creat un índex tipus bitmap, es poden continuar fent insercions a la taula, però no de valors nous de l’atribut indexat.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta:
      'Fer una inserció a una taula que té un índex tipus bitmap no incrementa la grandària de l’índex, tret que el valor de l’atribut corresponent no existís abans a la taula.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta:
      'Fer una modificació (UPDATE) a una taula que té un índex tipus bitmap no incrementa la grandària de l’índex, tret que el nou valor assignat a l’atribut corresponent no existís abans a la taula.',
    opcions: ['Cert', 'Fals'],
    correcta: 0,
  },
  {
    pregunta:
      'En el cas de l’índex bitmap, el factor de selecció indica el percentatge de blocs de la taula que caldrà accedir.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta: 'L’índex tipus bitmap és especialment útil en atributs UNIQUE.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta:
      'Quin tipus d’índex és millor en cas de consultes que involucrin múltiples valors d’un atribut?',
    opcions: ['Hash', 'Bitmap', 'Arbre', 'Cluster'],
    correcta: 1,
  },
  {
    pregunta:
      'Quin tipus d’índex és millor en cas que l’atribut indexat tingui moltes repeticions?',
    opcions: ['Bitmap', 'Cluster', 'Hash', 'Arbre'],
    correcta: 0,
  },
  {
    pregunta:
      'L’índex tipus bitmap millora el temps de resposta d’una consulta quan el factor de selecció és inferior al 50%.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta:
      'L’índex tipus bitmap incrementa el grau de concurrència del sistema.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta:
      'L’índex tipus bitmap no es pot utilitzar si l’atribut indexat conté valors null.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta:
      'L’índex tipus bitmap facilita la comprovació d’unicitat en l’atribut corresponent.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta: 'Quin tipus d’usuari s’encarrega del tuning de la base de dades?',
    opcions: [
      'Dissenyador',
      'Programador d’aplicacions',
      'Administrador',
      'Tots els anteriors',
    ],
    correcta: 3,
  },
  {
    pregunta:
      'Què NO forma part de l’entrada del procés de millora del rendiment del sistema?',
    opcions: [
      "Llista d'operacions de modificació, juntament amb les seves freqüències",
      'Espai de disc disponible',
      'Llista d’operacions de consulta, juntament amb les seves freqüències',
      'Llista de restriccions d’integritat, juntament amb les probabilitats de ser violades',
      'Objectiu de rendiment a assolir',
    ],
    correcta: 3,
  },
  {
    pregunta:
      'Què NO forma part de la sortida del procés de millora del rendiment del sistema?',
    opcions: [
      'Rescriptura de cada consulta  (segons els criteris de l’optimització semàntica)',
      'Normalització/Desnormalització de les taules',
      'Conjunt de vistes materialitzades',
      'Conjunt d’índexs',
      'Particionament de les taules',
    ],
    correcta: 0,
  },
  {
    pregunta:
      'Quina dada del pla d’accés NO és rellevant per a fer tuning de l’execució de les consultes?',
    opcions: [
      'Nombre d’abraçades mortals',
      'Temps en les cues de bloquejos',
      'Grandària del dietari (log)',
      'Nombre de bloquejos',
      'Hits a la cache',
    ],
    correcta: 2,
  },
  {
    pregunta:
      'El nombre d’índexs que podem crear a una base de dades és lineal respecte al nombre de taules i atributs existents.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta:
      'L’única limitació que tenim per a crear índexs és l’espai de disc disponible.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta:
      'Un índex que no sigui de tipus cluster mai empitjorarà l’estimació del temps d’execució d’una consulta.',
    opcions: ['Cert', 'Fals'],
    correcta: 0,
  },
  {
    pregunta: 'És millor no posar índexos a les taules petites.',
    opcions: ['Cert', 'Fals'],
    correcta: 0,
  },
  {
    pregunta:
      'Pot ser que un índex no millori el rendiment de cap operació DML concreta, però tot i així sigui bo crear-ho des del punt de vista del rendiment del sistema.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta:
      'El predicat de les consultes és irrellevant per a triar el tipus d’índex d’una taula.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta:
      'L’ordre dels atributs d’un índex multiatribut afecta a la seva utilitat.',
    opcions: ['Cert', 'Fals'],
    correcta: 0,
  },
  {
    pregunta: 'Una taula pot tenir com a màxim un índex tipus cluster.',
    opcions: ['Cert', 'Fals'],
    correcta: 0,
  },
  {
    pregunta:
      'Com més repeticions tingui un atribut, millor serà posar un índex tipus hash en comptes d’un arbre.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta:
      'Com més repeticions tingui un atribut, millor serà posar un índex tipus bitmap en comptes d’un arbre.',
    opcions: ['Cert', 'Fals'],
    correcta: 0,
  },
  {
    pregunta:
      'L’algorisme greedy de selecció d’índexs és bàsicament el mateix que el de selecció de vistes materialitzades.',
    opcions: ['Cert', 'Fals'],
    correcta: 0,
  },
  {
    pregunta:
      'Quan utilitzem l’algorisme greedy, cal calcular el temps d’execució considerant també les estructures que no hi càpiguen, perque podem guanyar l’espai necessari per elles eliminant una altra estructura que haguem triat amb anterioritat.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta: 'Pel que fa a l’aïllament, volem tenir només històries serials.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta:
      'El nivell d’aïllament read uncommitted només bloqueja escriptures.',
    opcions: ['Cert', 'Fals'],
    correcta: 0,
  },
  {
    pregunta:
      'El nivell d’aïllament read committed manté tots els bloquejos fins al final de la transacció.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta:
      'El nivell d’aïllament repeatable read genera dos bloquejos per cada lectura.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta:
      'El nivell d’aïllament serializable sempre bloqueja tota la taula fins al final de la transacció.',
    opcions: ['Cert', 'Fals'],
    correcta: 0,
  },
  {
    pregunta:
      'Com més garanties d’aïllament tinguem, millor serà el rendiment del sistema.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta:
      'Quin dels següents conceptes NO afecta al temps d’execució de la transacció?',
    opcions: [
      'Tipus de bloquejos',
      'Moment d’assignació del timestamp',
      'Nombre de bloquejos',
      'Moment d’alliberament dels bloquejos',
    ],
    correcta: 1,
  },
  {
    pregunta:
      'Quina de les següents accions NO serveix per millorar el rendiment de les transaccions?',
    opcions: [
      'Trossejar les transaccions',
      'Assignar el timestamp el més tard possible',
      'Relaxar el nivell d’aïllament',
      'Eliminar bloquejos innecessaris',
      'Configurar l’interval de detecció de deadlock adequat',
      'Evitar (o endarrerir) l’accés a grànuls molt demandats',
      'Utilitzar les sentencies de DDL quan hi hagi pocs usuaris',
    ],
    correcta: 1,
  },
  {
    pregunta:
      'El control de concurrència multi-versió fa que dues transaccions que s’executin concurrentment puguin llegir dades diferents.',
    opcions: ['Cert', 'Fals'],
    correcta: 0,
  },
  {
    pregunta:
      'Amb control de concurrència multi-versió, cada operació d’escriptura genera una nova versió del grànul.',
    opcions: ['Cert', 'Fals'],
    correcta: 0,
  },
  {
    pregunta:
      'Amb control de concurrència multi-versió, l’usuari ha de decidir quina versió del grànul llegeix.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta:
      'Amb control de concurrència multi-versió, les operacions de lectura no bloquegen mai res.',
    opcions: ['Cert', 'Fals'],
    correcta: 0,
  },
  {
    pregunta:
      'Amb control de concurrència multi-versió, només hi ha bloquejos entre escriptures.',
    opcions: ['Cert', 'Fals'],
    correcta: 0,
  },
  {
    pregunta:
      'Amb control de concurrència multi-versió, fer rollback d’una transacció és equivalent a eliminar les versions generades per la transacció.',
    opcions: ['Cert', 'Fals'],
    correcta: 0,
  },
  {
    pregunta:
      'Amb control de concurrència multi-versió, tenim implícit una base de dades temporal amb temps de transacció.',
    opcions: ['Cert', 'Fals'],
    correcta: 0,
  },
  {
    pregunta:
      'El principal problema del control de concurrència multi-versió, és que hem d’esborrar les versions obsoletes dels grànuls per a mantenir la grandària de la base de dades dins d’uns límits.',
    opcions: ['Cert', 'Fals'],
    correcta: 0,
  },
  {
    pregunta:
      'Fent vacuum, eliminem les versions obsoletes de les dades en el control de concurrència multi-versió.',
    opcions: ['Cert', 'Fals'],
    correcta: 0,
  },
  {
    pregunta:
      'Amb un control de concurrència multi-versió basat en bloquejos, s’aplica un control de concurrència diferent depenent de si la transacció és read-only o read-write.',
    opcions: ['Cert', 'Fals'],
    correcta: 0,
  },
  {
    pregunta:
      'Amb un control de concurrència multi-versió basat en bloquejos, les transaccions read-only assignen un timestamp ...',
    opcions: [
      'En acabar la transacció',
      'A l’inici de la transacció',
      'No n’assignen mai cap',
      'En intentar accedir un grànul bloquejat',
    ],
    correcta: 1,
  },
  {
    pregunta:
      'Amb un control de concurrència multi-versió basat en bloquejos, les transaccions read-write assignen un timestamp ...',
    opcions: [
      'En intentar accedir un grànul bloquejat',
      'En acabar la transacció',
      'A l’inici de la transacció',
      'No n’assignen mai cap',
      'Al fer la primera operació d’escriptura',
    ],
    correcta: 1,
  },
  {
    pregunta: 'Quina NO és una raó per a necessitar una reconstrucció?',
    opcions: [
      'Incendi',
      'Fallada del disc',
      'Fallada elèctrica',
      'Totes les anteriors ho són',
    ],
    correcta: 2,
  },
  {
    pregunta:
      'Quina de les quatre propietats ACID està relacionada principalment amb la restauració?',
    opcions: ['Atomicitat', 'Consistència', 'Aïllament', 'Durabilitat'],
    correcta: 0,
  },
  {
    pregunta:
      'Quina de les quatre propietats ACID està relacionada principalment amb la reconstrucció?',
    opcions: ['Atomicitat', 'Consistència', 'Aïllament', 'Durabilitat'],
    correcta: 3,
  },
  {
    pregunta: 'Què fa el gestor de la cache quan rep una petició de Fetch?',
    opcions: [
      'Llegeix de la memòria i escriu al disc',
      'Llegeix del disc i la memòria',
      'Llegeix del disc i escriu a la memòria',
      'Escriu tant al disc com a la memòria',
    ],
    correcta: 2,
  },
  {
    pregunta: 'Què fa el gestor de la cache quan rep una petició de Flush?',
    opcions: [
      'Escriu tant al disc com a la memòria',
      'Llegeix del disc i la memòria',
      'Llegeix de la memòria i escriu al disc',
      'Llegeix del disc i escriu a la memòria',
    ],
    correcta: 2,
  },
  {
    pregunta: 'Què NO es guarda al dietari?',
    opcions: [
      'Tipus d’operació',
      'Pla d’accés de la consulta',
      'Punter a l’operació anterior de la transacció',
      'Valor vell del grànul modificat',
      'Identificador de l’objecte',
      'Punter a l’operació següent de la transacció',
      'Valor nou del grànul modificat',
    ],
    correcta: 1,
  },
  {
    pregunta: 'Quan NO es fa un flush dels buffers del SGBD?',
    opcions: [
      'Durant un backup',
      'Quan el nombre de pàgines de memòria modificades supera un cert llindar',
      'Quan el dietari s’omple',
      'A intervals regulars',
      'Durant una operació de DDL',
    ],
    correcta: 4,
  },
  {
    pregunta:
      'El Write Ahead Log Protocol estableix que abans de confirmar qualsevol operació de DML, aquesta s’ha d’escriure al dietari (log).',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta: 'Com evita el SGBD que s’ompli el dietari (log)?',
    opcions: [
      'Dedicant-li un disc de forma exclusiva',
      'Limitant el nombre d’escriptures al mínim indispensable',
      'Esborrant-ho i creant-ho de nou a intervals regulars',
      'Gestionant el fitxer com si fos cíclic',
    ],
    correcta: 3,
  },
  {
    pregunta:
      'Si fem backups de forma regular, no ens cal el dietari (log) per a reconstruir la base de dades.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta:
      'Just quan acabem de fer un backup, podem esborrar el dietari (log).',
    opcions: ['Cert', 'Fals'],
    correcta: 0,
  },
  {
    pregunta:
      'Si configurem de forma adequada el dietari (log), no ens cal fer backups.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta: 'Mentre s’executa un backup, el rendiment del sistema empitjora.',
    opcions: ['Cert', 'Fals'],
    correcta: 0,
  },
  {
    pregunta:
      'És important posar el dietari (log) en un disc dedicat exclusivament per a ell, perquè així evitem moviments innecessaris del capçal i afavorim la seva escriptura seqüencial.',
    opcions: ['Cert', 'Fals'],
    correcta: 0,
  },
  {
    pregunta:
      'Endarrerir els flush tan com sigui possible millora el rendiment del sistema.',
    opcions: ['Cert', 'Fals'],
    correcta: 0,
  },
  {
    pregunta:
      'Quin NO és un problema de que les transaccions read-write siguin innecessàriament llargues?',
    opcions: [
      'És més probable que el sistema falli durant la seva execució',
      'La pròpia transacció és probable que es bloquegi',
      'Altres transaccions han d’esperar massa',
      'En cas de fallida, la transacció trigara molt a recuperar-se',
      'Totes les anteriors ho són',
    ],
    correcta: 4,
  },
  {
    pregunta:
      'El fet que trossejar una transacció afecti o no al seu aıllament depen nomes d’ella mateixa i no de cap altra transaccio que es pugui executar de forma concurrent',
    opcions: ['Cert', 'Fals'],
    correcta: 0,
  },
  {
    pregunta:
      'Trossejar una transacció afecta només a ella mateixa i no a cap altra transacció concurrent.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta:
      'Les transaccions llargues són un problema tant pel control de concurrència, com per a la recuperació.',
    opcions: ['Cert', 'Fals'],
    correcta: 0,
  },
  {
    pregunta:
      'Si concatenem (chain) dues transaccions, no s’alliberen els bloquejos de la primera fins que acaba la segona.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta:
      "Si concatenem (chain) dues transaccions, no s’alliberen els recursos de la primera (p.e., memoria) de la primera i aquests es reutilitzen en la segona, que manté la mateixa configuració (p.e., nivell d'aïllament).",
    opcions: ['Cert', 'Fals'],
    correcta: 0,
  },
  {
    pregunta:
      'Si totes les transaccions són prou curtes, no cal paral·lelitzar les escriptures i podem substituir el control de concurrència per un sistema de cues.',
    opcions: ['Cert', 'Fals'],
    correcta: 0,
  },
  {
    pregunta:
      'Si tenim prou memòria com per a contenir tota la base de dades, podem fer directament allà totes les operacions i no cal escriure mai al disc.',
    opcions: ['Cert', 'Fals'],
    correcta: 1,
  },
  {
    pregunta:
      'Si tenim un sistema que només fa lectures, podem prescindir tant dels mecanismes de control de concurrència com dels de recuperació.',
    opcions: ['Cert', 'Fals'],
    correcta: 0,
  },
]
