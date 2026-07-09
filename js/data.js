// ═══════════════════════════════════════
// F1 REROLL — DATA.JS
// ═══════════════════════════════════════

const pilotos = [

  // Lenda especial
  { nome:"Ayrton Senna",       nac:"🇧🇷", ano:1993, score:99, corrida:99, quali:99, pneus:99, chuva:99, pressao:99 },

  // Era V10
  { nome:"M. Schumacher",      nac:"🇩🇪", ano:2004, score:98, corrida:98, quali:93, pneus:96, chuva:88, pressao:98 },
  { nome:"Mika Häkkinen",      nac:"🇫🇮", ano:1998, score:92, corrida:92, quali:93, pneus:86, chuva:85, pressao:88 },
  { nome:"Juan P. Montoya",    nac:"🇨🇴", ano:2003, score:88, corrida:88, quali:87, pneus:76, chuva:82, pressao:78 },
  { nome:"Kimi Räikkönen",     nac:"🇫🇮", ano:2005, score:88, corrida:88, quali:88, pneus:84, chuva:86, pressao:84 },
  { nome:"Damon Hill",         nac:"🇬🇧", ano:1996, score:87, corrida:87, quali:85, pneus:83, chuva:80, pressao:84 },
  { nome:"Rubens Barrichello", nac:"🇧🇷", ano:2004, score:86, corrida:86, quali:83, pneus:85, chuva:80, pressao:72 },
  { nome:"Jacques Villeneuve", nac:"🇨🇦", ano:1997, score:86, corrida:86, quali:86, pneus:80, chuva:78, pressao:82 },
  { nome:"Fernando Alonso",    nac:"🇪🇸", ano:2005, score:86, corrida:86, quali:86, pneus:82, chuva:80, pressao:82 },
  { nome:"David Coulthard",    nac:"🇬🇧", ano:2001, score:84, corrida:84, quali:85, pneus:80, chuva:82, pressao:76 },
  { nome:"Jarno Trulli",       nac:"🇮🇹", ano:2004, score:78, corrida:78, quali:82, pneus:72, chuva:70, pressao:65 },
  { nome:"Mark Webber",        nac:"🇦🇺", ano:2005, score:78, corrida:78, quali:76, pneus:74, chuva:74, pressao:68 },
  { nome:"Jenson Button",      nac:"🇬🇧", ano:2004, score:74, corrida:74, quali:76, pneus:76, chuva:78, pressao:66 },

  // Era V8
  { nome:"Fernando Alonso",    nac:"🇪🇸", ano:2012, score:94, corrida:94, quali:90, pneus:92, chuva:89, pressao:96 },
  { nome:"Lewis Hamilton",     nac:"🇬🇧", ano:2012, score:94, corrida:94, quali:93, pneus:88, chuva:92, pressao:94 },
  { nome:"Sebastian Vettel",   nac:"🇩🇪", ano:2013, score:93, corrida:93, quali:91, pneus:88, chuva:80, pressao:91 },
  { nome:"Kimi Räikkönen",     nac:"🇫🇮", ano:2007, score:90, corrida:90, quali:87, pneus:90, chuva:84, pressao:82 },
  { nome:"Jenson Button",      nac:"🇬🇧", ano:2009, score:86, corrida:86, quali:82, pneus:88, chuva:88, pressao:82 },
  { nome:"Mark Webber",        nac:"🇦🇺", ano:2010, score:85, corrida:85, quali:86, pneus:80, chuva:80, pressao:74 },
  { nome:"Robert Kubica",      nac:"🇵🇱", ano:2010, score:84, corrida:84, quali:84, pneus:80, chuva:78, pressao:76 },
  { nome:"Felipe Massa",       nac:"🇧🇷", ano:2008, score:83, corrida:83, quali:84, pneus:82, chuva:76, pressao:74 },
  { nome:"Nico Rosberg",       nac:"🇩🇪", ano:2012, score:82, corrida:82, quali:86, pneus:78, chuva:74, pressao:72 },
  { nome:"M. Schumacher",      nac:"🇩🇪", ano:2012, score:82, corrida:82, quali:80, pneus:78, chuva:74, pressao:74 },
  { nome:"Daniel Ricciardo",   nac:"🇦🇺", ano:2013, score:80, corrida:80, quali:82, pneus:78, chuva:78, pressao:72 },
  { nome:"Nico Hülkenberg",    nac:"🇩🇪", ano:2012, score:78, corrida:78, quali:82, pneus:74, chuva:70, pressao:66 },
  { nome:"Sergio Pérez",       nac:"🇲🇽", ano:2012, score:78, corrida:78, quali:74, pneus:86, chuva:76, pressao:68 },
  { nome:"Valtteri Bottas",    nac:"🇫🇮", ano:2013, score:76, corrida:76, quali:80, pneus:74, chuva:68, pressao:58 },
  { nome:"Romain Grosjean",    nac:"🇫🇷", ano:2013, score:74, corrida:74, quali:76, pneus:64, chuva:68, pressao:60 },
  { nome:"Pastor Maldonado",   nac:"🇻🇪", ano:2012, score:66, corrida:66, quali:72, pneus:56, chuva:60, pressao:52 },
  { nome:"Vitaly Petrov",      nac:"🇷🇺", ano:2010, score:62, corrida:62, quali:64, pneus:62, chuva:60, pressao:54 },

  // Era V6
  { nome:"Lewis Hamilton",     nac:"🇬🇧", ano:2020, score:96, corrida:96, quali:95, pneus:90, chuva:93, pressao:96 },
  { nome:"Max Verstappen",     nac:"🇳🇱", ano:2021, score:94, corrida:94, quali:92, pneus:88, chuva:84, pressao:93 },
  { nome:"Fernando Alonso",    nac:"🇪🇸", ano:2014, score:92, corrida:92, quali:86, pneus:91, chuva:88, pressao:95 },
  { nome:"Sebastian Vettel",   nac:"🇩🇪", ano:2017, score:91, corrida:91, quali:88, pneus:86, chuva:78, pressao:86 },
  { nome:"Nico Rosberg",       nac:"🇩🇪", ano:2016, score:88, corrida:88, quali:90, pneus:84, chuva:78, pressao:82 },
  { nome:"Daniel Ricciardo",   nac:"🇦🇺", ano:2016, score:87, corrida:87, quali:88, pneus:82, chuva:84, pressao:80 },
  { nome:"Charles Leclerc",    nac:"🇲🇨", ano:2019, score:87, corrida:87, quali:93, pneus:78, chuva:80, pressao:82 },
  { nome:"Max Verstappen",     nac:"🇳🇱", ano:2016, score:84, corrida:84, quali:82, pneus:78, chuva:82, pressao:80 },
  { nome:"Kimi Räikkönen",     nac:"🇫🇮", ano:2018, score:84, corrida:84, quali:82, pneus:88, chuva:80, pressao:74 },
  { nome:"Valtteri Bottas",    nac:"🇫🇮", ano:2019, score:84, corrida:84, quali:86, pneus:80, chuva:72, pressao:62 },
  { nome:"Sergio Pérez",       nac:"🇲🇽", ano:2020, score:84, corrida:84, quali:78, pneus:88, chuva:80, pressao:72 },
  { nome:"Carlos Sainz",       nac:"🇪🇸", ano:2021, score:84, corrida:84, quali:83, pneus:90, chuva:82, pressao:82 },
  { nome:"Lando Norris",       nac:"🇬🇧", ano:2021, score:83, corrida:83, quali:88, pneus:82, chuva:80, pressao:76 },
  { nome:"George Russell",     nac:"🇬🇧", ano:2021, score:81, corrida:81, quali:86, pneus:80, chuva:78, pressao:76 },
  { nome:"Pierre Gasly",       nac:"🇫🇷", ano:2020, score:78, corrida:78, quali:80, pneus:74, chuva:72, pressao:70 },
  { nome:"Esteban Ocon",       nac:"🇫🇷", ano:2021, score:76, corrida:76, quali:77, pneus:74, chuva:72, pressao:68 },
  { nome:"Kevin Magnussen",    nac:"🇩🇰", ano:2018, score:76, corrida:76, quali:74, pneus:72, chuva:70, pressao:68 },
  { nome:"Daniil Kvyat",       nac:"🇷🇺", ano:2019, score:74, corrida:74, quali:74, pneus:70, chuva:68, pressao:62 },
  { nome:"Lance Stroll",       nac:"🇨🇦", ano:2020, score:66, corrida:66, quali:64, pneus:70, chuva:78, pressao:52 },
  { nome:"Romain Grosjean",    nac:"🇫🇷", ano:2019, score:74, corrida:74, quali:76, pneus:64, chuva:68, pressao:60 },
  { nome:"Mick Schumacher",    nac:"🇩🇪", ano:2022, score:68, corrida:68, quali:68, pneus:70, chuva:66, pressao:60 },
  { nome:"Antonio Giovinazzi", nac:"🇮🇹", ano:2021, score:68, corrida:68, quali:70, pneus:68, chuva:64, pressao:58 },
  { nome:"Robert Kubica",      nac:"🇵🇱", ano:2019, score:58, corrida:58, quali:60, pneus:64, chuva:62, pressao:55 },
  { nome:"Nicholas Latifi",    nac:"🇨🇦", ano:2021, score:56, corrida:56, quali:58, pneus:62, chuva:60, pressao:50 },

  // Era 2022–2025
  { nome:"Max Verstappen",     nac:"🇳🇱", ano:2023, score:97, corrida:97, quali:95, pneus:91, chuva:86, pressao:97 },
  { nome:"Lewis Hamilton",     nac:"🇬🇧", ano:2024, score:93, corrida:93, quali:92, pneus:89, chuva:92, pressao:94 },
  { nome:"Fernando Alonso",    nac:"🇪🇸", ano:2023, score:88, corrida:88, quali:83, pneus:89, chuva:87, pressao:93 },
  { nome:"Charles Leclerc",    nac:"🇲🇨", ano:2024, score:87, corrida:87, quali:93, pneus:78, chuva:80, pressao:82 },
  { nome:"Lando Norris",       nac:"🇬🇧", ano:2024, score:87, corrida:87, quali:89, pneus:84, chuva:82, pressao:82 },
  { nome:"Carlos Sainz",       nac:"🇪🇸", ano:2024, score:85, corrida:85, quali:84, pneus:91, chuva:83, pressao:84 },
  { nome:"George Russell",     nac:"🇬🇧", ano:2024, score:82, corrida:82, quali:86, pneus:81, chuva:79, pressao:78 },
  { nome:"Oscar Piastri",      nac:"🇦🇺", ano:2024, score:82, corrida:82, quali:83, pneus:80, chuva:76, pressao:76 },
  { nome:"Sergio Pérez",       nac:"🇲🇽", ano:2022, score:84, corrida:84, quali:78, pneus:86, chuva:78, pressao:72 },
  { nome:"Yuki Tsunoda",       nac:"🇯🇵", ano:2024, score:74, corrida:74, quali:76, pneus:68, chuva:70, pressao:66 },
  { nome:"Pierre Gasly",       nac:"🇫🇷", ano:2023, score:76, corrida:76, quali:78, pneus:72, chuva:70, pressao:68 },
  { nome:"Nico Hülkenberg",    nac:"🇩🇪", ano:2024, score:65, corrida:65, quali:68, pneus:69, chuva:64, pressao:60 },
  { nome:"Lance Stroll",       nac:"🇨🇦", ano:2024, score:66, corrida:66, quali:64, pneus:70, chuva:78, pressao:52 },
  { nome:"Valtteri Bottas",    nac:"🇫🇮", ano:2022, score:63, corrida:63, quali:66, pneus:70, chuva:68, pressao:56 },
  { nome:"Logan Sargeant",     nac:"🇺🇸", ano:2023, score:54, corrida:54, quali:56, pneus:60, chuva:58, pressao:48 },
  { nome:"Gabriel Bortoleto",  nac:"🇧🇷", ano:2025, score:76, corrida:75, quali:78, pneus:72, chuva:70, pressao:74 },
  { nome:"Franco Colapinto",   nac:"🇦🇷", ano:2025, score:74, corrida:73, quali:76, pneus:70, chuva:72, pressao:70 },
  { nome:"Oliver Bearman",     nac:"🇬🇧", ano:2025, score:72, corrida:71, quali:74, pneus:68, chuva:66, pressao:68 },
  { nome:"Kimi Antonelli",     nac:"🇮🇹", ano:2025, score:78, corrida:76, quali:82, pneus:70, chuva:72, pressao:72 },
  { nome:"Isack Hadjar",       nac:"🇫🇷", ano:2025, score:73, corrida:72, quali:75, pneus:68, chuva:66, pressao:68 },
  { nome:"Arvid Lindblad",     nac:"🇸🇪", ano:2025, score:70, corrida:69, quali:72, pneus:66, chuva:64, pressao:65 },
];

const chassis = [
  // V10
  { nome:"Ferrari F2004",      sub:"Ferrari · 2004",       score:95, downforce:94, estab:92 },
  { nome:"Williams FW18",      sub:"Williams · 1996",      score:89, downforce:90, estab:88 },
  { nome:"McLaren MP4/20",     sub:"McLaren · 2005",       score:87, downforce:88, estab:86 },
  // V8
  { nome:"Red Bull RB9",       sub:"Red Bull · 2013",      score:95, downforce:94, estab:92 },
  { nome:"Ferrari F150°",      sub:"Ferrari · 2011",       score:89, downforce:90, estab:86 },
  { nome:"Brawn BGP 001",      sub:"Brawn GP · 2009",      score:87, downforce:86, estab:88 },
  { nome:"McLaren MP4-26",     sub:"McLaren · 2011",       score:82, downforce:84, estab:82 },
  { nome:"Renault R25",        sub:"Renault · 2005",       score:82, downforce:82, estab:84 },
  { nome:"Williams FW33",      sub:"Williams · 2011",      score:66, downforce:68, estab:70 },
  // V6
  { nome:"Mercedes F1 W11",    sub:"Mercedes · 2020",      score:96, downforce:96, estab:95 },
  { nome:"Red Bull RB16B",     sub:"Red Bull · 2021",      score:93, downforce:93, estab:90 },
  { nome:"Ferrari SF70H",      sub:"Ferrari · 2017",       score:87, downforce:88, estab:84 },
  { nome:"Racing Point RP20",  sub:"Racing Point · 2020",  score:83, downforce:84, estab:86 },
  { nome:"McLaren MCL35M",     sub:"McLaren · 2021",       score:82, downforce:82, estab:85 },
  { nome:"Renault R.S.20",     sub:"Renault · 2020",       score:77, downforce:78, estab:80 },
  { nome:"Haas VF-18",         sub:"Haas · 2018",          score:72, downforce:74, estab:72 },
  { nome:"Williams FW43B",     sub:"Williams · 2021",      score:66, downforce:68, estab:70 },
  // 2022-2025
  { nome:"Red Bull RB19",      sub:"Red Bull · 2023",      score:98, downforce:98, estab:97 },
  { nome:"McLaren MCL38",      sub:"McLaren · 2024",       score:91, downforce:91, estab:90 },
  { nome:"Mercedes W16",       sub:"Mercedes · 2025",      score:91, downforce:90, estab:93 },
  { nome:"Ferrari F1-75",      sub:"Ferrari · 2022",       score:88, downforce:92, estab:80 },
  { nome:"Aston Martin AMR23", sub:"Aston Martin · 2023",  score:80, downforce:82, estab:80 },
  { nome:"Williams FW46",      sub:"Williams · 2024",      score:75, downforce:76, estab:78 },
  { nome:"Alpine A522",        sub:"Alpine · 2022",        score:71, downforce:72, estab:74 },
  { nome:"Haas VF-25",         sub:"Haas · 2025",          score:52, downforce:56, estab:58 },
];

const motores = [
  // V10
  { nome:"Ferrari Tipo 049",   sub:"Ferrari · 2004",           score:93, potencia:96, durabi:84 },
  { nome:"Mercedes FO110H",    sub:"Mercedes/McLaren · 2005",  score:92, potencia:94, durabi:88 },
  { nome:"Renault RS5",        sub:"Renault · 2005",           score:91, potencia:93, durabi:86 },
  { nome:"BMW P84",            sub:"BMW/Williams · 2004",      score:88, potencia:97, durabi:72 },
  { nome:"Honda RA000E",       sub:"Honda/BAR · 2004",         score:84, potencia:88, durabi:78 },
  // V8
  { nome:"Mercedes FO108X",    sub:"Mercedes · 2012",          score:92, potencia:93, durabi:90 },
  { nome:"Renault RS27",       sub:"Renault · 2013",           score:91, potencia:92, durabi:88 },
  { nome:"Ferrari 056",        sub:"Ferrari · 2012",           score:89, potencia:91, durabi:86 },
  { nome:"BMW P86",            sub:"BMW · 2008",               score:86, potencia:93, durabi:74 },
  { nome:"Honda RA808E",       sub:"Honda · 2008",             score:81, potencia:84, durabi:78 },
  // V6
  { nome:"Mercedes M12E",      sub:"Mercedes · 2020",          score:96, potencia:96, durabi:94 },
  { nome:"Honda RA621H",       sub:"Honda/Red Bull · 2021",    score:93, potencia:94, durabi:90 },
  { nome:"Ferrari 065/6",      sub:"Ferrari · 2021",           score:87, potencia:89, durabi:85 },
  { nome:"Renault E-tech 20",  sub:"Renault · 2020",           score:80, potencia:82, durabi:80 },
  { nome:"Honda RA615H",       sub:"Honda/McLaren · 2015",     score:55, potencia:62, durabi:52 },
  // 2022-2025
  { nome:"Honda RBPTH002",     sub:"Red Bull PT · 2023",       score:97, potencia:97, durabi:95 },
  { nome:"Mercedes M16",       sub:"Mercedes · 2025",          score:95, potencia:95, durabi:94 },
  { nome:"Ferrari 066/12",     sub:"Ferrari · 2025",           score:90, potencia:91, durabi:88 },
  { nome:"Renault E-tech RE25",sub:"Alpine · 2025",            score:75, potencia:78, durabi:74 },
];

const corridas = [
  { gp:"Bahrein",        pais:"🇧🇭", track:"bahrain",   chuva:0.10, perfil:"resistencia" },
  { gp:"Arábia Saudita", pais:"🇸🇦", track:"arabia",    chuva:0.05, perfil:"potencia"    },
  { gp:"Austrália",      pais:"🇦🇺", track:"australia",  chuva:0.35, perfil:"misto"       },
  { gp:"Japão",          pais:"🇯🇵", track:"japao",      chuva:0.30, perfil:"tecnico"     },
  { gp:"China",          pais:"🇨🇳", track:"china",      chuva:0.15, perfil:"misto"       },
  { gp:"Mônaco",         pais:"🇲🇨", track:"monaco",     chuva:0.30, perfil:"tecnico"     },
  { gp:"Canadá",         pais:"🇨🇦", track:"canada",     chuva:0.35, perfil:"misto"       },
  { gp:"Espanha",        pais:"🇪🇸", track:"espanha",    chuva:0.10, perfil:"misto"       },
  { gp:"Áustria",        pais:"🇦🇹", track:"austria",    chuva:0.30, perfil:"potencia"    },
  { gp:"Grã-Bretanha",   pais:"🇬🇧", track:"gb",         chuva:0.40, perfil:"misto"       },
  { gp:"Bélgica",        pais:"🇧🇪", track:"belgica",    chuva:0.45, perfil:"potencia"    },
  { gp:"Hungria",        pais:"🇭🇺", track:"hungria",    chuva:0.15, perfil:"tecnico"     },
  { gp:"Holanda",        pais:"🇳🇱", track:"holanda",    chuva:0.35, perfil:"tecnico"     },
  { gp:"Itália",         pais:"🇮🇹", track:"italia",     chuva:0.10, perfil:"potencia"    },
  { gp:"Azerbaijão",     pais:"🇦🇿", track:"azerbaijao", chuva:0.05, perfil:"potencia"    },
  { gp:"Singapura",      pais:"🇸🇬", track:"singapore",  chuva:0.50, perfil:"resistencia" },
  { gp:"Estados Unidos", pais:"🇺🇸", track:"eua",        chuva:0.15, perfil:"misto"       },
  { gp:"México",         pais:"🇲🇽", track:"mexico",     chuva:0.10, perfil:"resistencia" },
  { gp:"Brasil",         pais:"🇧🇷", track:"brasil",     chuva:0.45, perfil:"misto"       },
  { gp:"Las Vegas",      pais:"🇺🇸", track:"lasvegas",   chuva:0.05, perfil:"potencia"    },
  { gp:"Abu Dhabi",      pais:"🇦🇪", track:"abudhabi",   chuva:0.00, perfil:"resistencia" },
];

const evW = [
  "Undercut perfeito 🎯",
  "DRS decisivo na reta 💨",
  "Pit stop relâmpago ⚡",
  "Pneu aguentou até o fim",
  "Ultrapassagem cirúrgica no freio",
  "Estratégia impecável",
  "Ritmo dominante do início ao fim",
];

const evO = [
  "Safety car atrapalhou o ritmo",
  "Pneu médio não aguentou",
  "Perdeu posição no pit stop",
  "Corrida difícil, mas pontuou",
  "Degradação acima do esperado",
  "Ritmo oscilante ao longo das voltas",
];

const evD = [
  "Falha na caixa de câmbio 🔧",
  "Motor perdeu potência 💥",
  "Acidente no início da corrida",
  "Pneu furado na reta principal",
  "Superaquecimento forçou abandono",
];

// Eventos específicos por perfil de circuito
const evCircuito = {
  tecnico: [
    "Trajetória perfeita nas curvas lentas 🎯",
    "Setup técnico se destacou no setor 2",
    "Downforce extra fez diferença nas chicanes",
  ],
  potencia: [
    "Motor respondeu bem nas retas longas 💨",
    "DRS explorado ao máximo na reta principal",
    "Vantagem de potência decisiva na frenagem",
  ],
  resistencia: [
    "Gerenciamento impecável dos pneus 🏁",
    "Degradação controlada ao longo da corrida",
    "Estratégia de 1 parada funcionou perfeitamente",
  ],
  misto: [],
};

const tracks = {
  bahrain:    `<svg viewBox="0 0 120 80" fill="none"><path d="M57.6 71.8 L32.2 71.0 L15.6 70.3 L14.8 69.9 L14.7 69.2 L14.9 68.4 L15.3 67.8 L18.8 64.0 L19.1 62.9 L19.1 61.8 L17.1 55.1 L17.0 53.5 L17.1 52.1 L24.6 8.5 L25.0 7.0 L25.8 6.2 L26.7 6.0 L27.6 6.2 L28.7 6.6 L29.7 7.6 L30.5 8.7 L31.6 10.2 L35.1 15.4 L39.0 19.7 L39.9 20.7 L41.2 21.5 L45.1 23.4 L45.9 24.1 L46.5 25.1 L47.0 26.1 L47.1 27.6 L46.4 32.4 L46.5 33.7 L46.7 35.0 L47.2 36.1 L48.3 37.5 L59.3 47.1 L60.1 48.1 L60.3 49.4 L59.7 50.3 L58.5 50.6 L56.7 50.5 L44.2 48.2 L36.4 46.8 L34.8 46.6 L33.4 46.9 L32.3 47.2 L31.3 47.9 L28.2 51.9 L28.0 52.5 L28.1 53.1 L28.7 53.4 L38.3 54.8 L44.8 55.2 L56.3 55.9 L68.4 56.4 L79.5 56.9 L81.3 56.7 L82.4 55.9 L82.9 54.7 L83.3 53.0 L83.1 51.2 L82.7 48.9 L81.8 46.6 L80.5 44.7 L78.8 42.8 L77.1 41.7 L72.1 39.6 L70.0 38.4 L68.8 37.2 L67.7 35.7 L66.7 33.9 L66.1 31.5 L66.1 28.7 L66.5 26.8 L67.6 24.2 L70.6 17.4 L71.6 16.0 L72.6 14.8 L73.6 14.2 L74.7 13.5 L75.7 13.5 L76.7 14.1 L77.8 15.3 L78.9 16.9 L104.8 68.4 L105.2 69.4 L105.3 70.9 L104.7 71.5 L100.4 73.8 L98.6 74.0 L95.4 73.9 L77.4 73.3 L57.6 71.8" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  arabia:    `<svg viewBox="0 0 120 80" fill="none"><path d="M88.4 26.5 L70.2 31.3 L69.7 31.2 L69.5 30.9 L69.0 29.5 L68.7 29.2 L68.4 29.0 L67.9 29.0 L67.4 29.1 L66.5 30.1 L64.5 32.8 L64.2 33.2 L63.4 33.7 L61.1 34.8 L53.8 38.2 L52.4 39.0 L51.8 39.1 L50.5 38.1 L49.7 37.8 L49.0 37.6 L47.7 37.6 L46.5 37.9 L45.4 38.6 L44.6 39.4 L44.3 40.0 L43.7 41.7 L43.3 42.5 L42.7 43.1 L41.6 43.8 L39.5 44.6 L38.3 44.6 L37.8 44.4 L36.7 44.0 L36.2 43.8 L35.6 43.7 L34.7 44.0 L31.3 46.5 L30.7 47.1 L30.3 48.6 L30.3 49.5 L30.8 51.3 L30.9 51.8 L30.5 52.9 L29.2 54.2 L28.2 55.3 L26.9 57.0 L26.1 58.2 L24.6 59.7 L23.5 60.7 L22.1 61.6 L16.7 65.1 L9.6 69.4 L9.0 69.5 L8.2 69.5 L7.5 69.2 L6.6 68.5 L6.2 67.6 L6.0 66.9 L6.0 66.1 L6.5 65.0 L7.5 64.0 L8.5 63.4 L9.5 63.0 L12.4 62.8 L13.8 62.8 L15.6 62.4 L16.6 62.0 L18.0 61.3 L18.9 60.6 L19.9 59.7 L20.8 58.5 L21.4 57.3 L22.2 55.8 L22.9 54.5 L24.0 53.4 L24.9 52.8 L25.5 52.3 L25.9 51.7 L26.0 51.0 L25.9 50.2 L25.4 48.7 L25.4 47.2 L25.8 46.3 L26.2 45.8 L27.2 44.8 L28.4 43.9 L29.3 43.3 L30.3 42.7 L31.4 42.2 L33.0 41.7 L36.2 41.3 L38.5 40.8 L40.3 40.1 L41.8 39.4 L43.1 38.4 L43.8 37.7 L45.6 36.6 L46.1 36.3 L47.0 35.9 L48.8 35.4 L50.0 35.2 L51.4 35.2 L53.5 35.1 L55.1 35.0 L56.7 34.7 L58.8 34.0 L60.3 33.2 L61.8 32.2 L63.1 31.2 L64.3 30.2 L65.7 28.7 L66.1 28.1 L66.5 27.6 L67.0 27.3 L67.6 27.1 L68.4 27.1 L69.1 27.3 L70.5 27.8 L71.4 27.9 L72.5 27.8 L75.8 26.5 L76.5 26.0 L77.2 25.1 L77.8 23.6 L80.2 18.8 L81.0 17.5 L82.1 16.1 L83.0 15.3 L83.8 14.6 L86.0 13.4 L88.3 12.5 L89.8 12.0 L91.2 11.6 L93.0 11.0 L95.1 10.7 L97.6 10.5 L99.2 10.5 L101.0 10.7 L103.3 11.0 L106.0 11.7 L108.1 12.6 L112.7 14.5 L113.7 15.2 L113.9 15.9 L114.0 16.7 L113.7 17.4 L113.1 17.8 L108.8 19.5 L100.0 23.1 L96.5 24.2 L93.5 25.1 L88.4 26.5" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  australia:    `<svg viewBox="0 0 120 80" fill="none"><path d="M59.0 66.5 L52.0 66.2 L41.5 65.5 L40.9 65.4 L40.4 65.1 L40.3 64.9 L40.3 64.6 L40.2 64.0 L40.2 63.2 L40.0 62.4 L39.5 61.5 L39.1 60.8 L38.1 59.8 L37.3 59.4 L36.4 59.1 L35.5 59.0 L33.7 58.9 L31.6 58.8 L28.5 58.7 L24.6 58.4 L23.1 58.2 L18.6 57.5 L16.4 57.0 L13.9 56.3 L8.9 54.5 L7.5 54.0 L6.6 53.5 L6.4 53.1 L6.4 52.6 L6.8 52.0 L8.4 50.5 L11.5 47.5 L11.8 47.1 L11.9 46.8 L12.0 46.5 L11.8 45.8 L11.4 45.1 L7.5 40.0 L6.1 38.1 L6.0 37.9 L6.3 36.7 L6.6 35.9 L9.7 29.4 L10.5 28.1 L14.6 22.7 L16.1 20.7 L17.3 18.6 L18.2 17.0 L18.8 16.5 L19.3 16.2 L19.9 16.1 L20.9 16.2 L21.9 16.2 L23.3 16.0 L24.8 15.5 L26.5 14.6 L28.0 13.6 L29.4 12.9 L31.0 12.3 L32.6 11.9 L34.5 11.7 L35.8 11.7 L37.4 12.0 L39.1 12.6 L40.4 13.5 L41.3 14.2 L42.0 14.8 L47.0 19.3 L47.4 19.9 L47.9 20.8 L48.1 21.9 L48.2 22.8 L48.0 24.1 L47.8 25.2 L47.7 26.4 L47.7 27.2 L47.8 28.0 L48.1 28.9 L50.8 35.7 L51.2 36.5 L51.7 37.4 L52.2 38.2 L53.3 39.5 L54.3 40.5 L55.5 41.5 L56.9 42.4 L58.2 43.0 L59.5 43.5 L61.5 44.1 L62.8 44.4 L65.0 44.6 L72.0 44.6 L73.0 44.5 L73.9 44.3 L74.6 44.2 L75.7 43.7 L76.7 43.1 L77.8 42.3 L78.9 41.6 L79.9 40.8 L80.7 40.2 L81.6 39.9 L82.5 39.6 L83.1 39.5 L84.5 39.5 L92.1 39.4 L94.9 39.3 L96.4 39.5 L97.6 39.7 L99.0 40.1 L100.7 41.0 L102.8 42.2 L108.7 46.3 L112.4 49.0 L113.3 49.8 L113.8 50.2 L114.0 50.5 L113.8 50.9 L113.0 51.9 L109.5 56.5 L105.8 61.3 L105.5 61.7 L104.9 62.1 L104.2 62.6 L103.2 62.9 L102.2 63.0 L101.6 63.0 L100.8 62.8 L95.1 60.6 L91.9 59.7 L91.5 59.5 L91.1 59.5 L90.8 59.6 L90.4 59.9 L90.2 60.2 L89.1 65.1 L88.9 65.7 L88.6 66.2 L88.1 66.8 L87.7 67.3 L87.2 67.6 L86.6 67.9 L85.7 68.2 L84.9 68.3 L84.6 68.3 L59.0 66.5" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  japao:    `<svg viewBox="0 0 120 80" fill="none"><path d="M98.2 41.6 L112.7 56.0 L113.8 57.7 L114.0 59.3 L113.0 62.2 L111.9 63.2 L110.4 63.7 L108.6 63.4 L106.8 61.7 L101.4 55.3 L99.5 54.9 L95.9 54.6 L94.4 53.5 L93.1 49.5 L91.9 48.0 L90.0 47.1 L86.2 46.9 L84.0 46.3 L82.5 44.9 L81.9 43.4 L82.1 42.0 L83.6 38.3 L83.5 37.0 L82.6 35.5 L80.4 34.4 L77.6 33.4 L75.3 33.0 L72.5 33.0 L70.7 33.5 L68.1 34.6 L65.3 36.6 L60.0 42.0 L51.8 42.7 L50.8 42.3 L50.5 41.5 L47.9 30.5 L47.5 28.6 L47.7 27.2 L48.5 25.7 L49.8 23.1 L49.5 22.5 L48.6 22.2 L47.7 22.5 L45.6 25.4 L43.2 28.4 L41.8 29.6 L39.5 30.8 L36.1 31.4 L32.5 31.4 L28.6 30.6 L24.9 29.3 L22.5 28.0 L20.0 26.0 L18.4 23.9 L15.6 18.1 L14.4 16.8 L12.5 16.3 L10.0 16.5 L7.7 17.1 L6.2 18.4 L6.1 20.0 L6.7 21.4 L8.6 22.9 L11.6 25.1 L15.7 27.5 L20.5 29.6 L25.1 31.3 L33.0 33.7 L42.9 36.4 L50.8 38.8 L52.8 39.0 L54.9 38.6 L58.5 37.3 L61.5 35.6 L68.1 30.5 L69.9 29.4 L71.1 28.7 L71.7 28.9 L73.2 29.9 L74.2 30.0 L75.7 29.0 L77.9 27.9 L80.6 27.9 L83.4 28.6 L86.1 29.9 L88.8 32.2 L98.2 41.6" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  china:    `<svg viewBox="0 0 120 80" fill="none"><path d="M62.2 17.6 L65.8 10.7 L66.6 9.6 L67.7 8.3 L69.0 7.4 L69.9 6.9 L71.3 6.3 L72.5 6.0 L73.7 6.0 L74.8 6.2 L75.9 6.5 L76.7 7.2 L77.6 8.0 L78.2 8.7 L78.7 9.5 L78.9 10.5 L78.8 11.6 L78.2 13.4 L77.1 14.8 L75.9 15.5 L75.1 15.6 L74.5 15.5 L73.8 15.1 L73.2 14.1 L72.2 12.6 L71.8 12.1 L71.0 11.9 L70.0 12.0 L68.8 12.8 L68.0 14.1 L67.8 15.0 L68.1 15.8 L68.3 16.7 L68.8 17.7 L69.5 18.6 L70.4 19.5 L71.4 20.0 L72.7 20.2 L73.6 20.2 L75.8 20.1 L81.3 19.4 L86.1 19.2 L89.6 18.8 L94.1 18.3 L95.9 18.5 L97.0 18.8 L105.6 21.6 L108.2 22.4 L110.7 23.3 L111.2 23.7 L111.4 24.3 L111.0 25.2 L109.9 26.1 L108.3 26.7 L106.9 27.1 L105.2 27.3 L102.8 27.7 L100.4 27.6 L95.5 27.1 L89.0 26.4 L87.1 26.3 L85.5 26.4 L83.8 26.7 L82.3 27.4 L80.8 28.4 L79.5 29.5 L78.3 31.0 L77.4 32.5 L76.7 34.1 L76.3 35.9 L76.2 37.9 L76.3 39.6 L77.4 42.3 L78.9 46.3 L79.2 47.7 L79.2 48.9 L78.9 50.2 L78.3 51.9 L77.4 53.2 L76.4 54.2 L75.2 54.9 L74.0 55.4 L73.1 55.6 L72.2 55.7 L65.6 54.7 L64.4 54.8 L63.6 55.5 L63.1 56.3 L62.7 57.2 L63.5 62.3 L63.8 63.2 L64.3 63.6 L65.1 63.8 L79.8 65.3 L88.8 65.9 L98.7 66.7 L99.4 66.3 L99.8 65.5 L99.8 64.6 L99.7 63.4 L99.6 62.2 L99.7 61.3 L100.2 60.4 L100.9 59.7 L102.2 59.4 L103.9 59.2 L105.0 59.3 L105.8 59.6 L106.9 60.3 L107.7 61.1 L108.4 62.0 L109.0 63.0 L109.2 64.6 L109.1 65.9 L108.5 67.4 L107.7 68.8 L107.0 69.8 L106.0 70.9 L104.4 72.2 L103.2 72.9 L101.8 73.5 L99.5 74.0 L97.0 74.0 L67.9 72.7 L49.9 72.0 L40.6 71.6 L32.2 71.1 L21.4 70.8 L10.1 70.5 L9.2 70.3 L8.7 69.8 L8.6 69.0 L9.3 68.3 L11.2 67.3 L12.5 66.9 L14.0 66.4 L34.9 66.2 L35.5 65.9 L36.3 65.1 L44.6 49.8 L62.2 17.6" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  monaco:    `<svg viewBox="0 0 120 80" fill="none"><path d="M76.8 18.1 L77.3 16.5 L79.1 15.1 L94.4 6.5 L96.4 6.1 L98.4 7.4 L98.7 9.4 L98.4 10.8 L99.2 12.5 L100.5 15.2 L101.0 16.4 L102.3 16.7 L103.2 15.9 L102.2 14.6 L100.0 10.8 L100.5 9.8 L102.3 9.4 L105.4 9.5 L108.1 9.5 L110.6 10.4 L108.8 17.0 L103.8 25.8 L98.6 30.4 L90.4 34.3 L80.3 35.6 L68.5 36.0 L57.5 34.7 L54.7 34.8 L54.3 35.6 L52.9 36.0 L50.2 34.8 L37.5 32.5 L26.1 30.8 L23.6 30.4 L21.2 32.0 L18.6 34.6 L17.2 37.4 L16.1 41.5 L16.8 42.9 L18.8 45.0 L19.0 46.8 L18.9 55.6 L18.7 56.5 L17.1 57.0 L15.8 57.5 L16.1 61.1 L17.3 64.6 L20.2 69.0 L23.2 71.1 L24.4 72.1 L24.2 73.9 L19.6 73.7 L16.3 73.1 L14.5 72.1 L14.4 70.9 L14.2 69.3 L11.7 65.0 L10.4 60.7 L9.4 50.9 L9.7 45.0 L11.1 37.6 L12.8 33.3 L14.9 30.6 L15.8 29.1 L16.2 27.2 L17.5 26.8 L21.4 27.4 L27.4 28.5 L38.6 29.3 L47.2 30.2 L52.2 30.8 L61.7 30.3 L69.1 31.2 L74.2 31.7 L78.8 30.4 L81.0 28.4 L81.2 25.8 L80.4 22.8 L78.2 20.4 L77.1 19.3 L76.8 18.1" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  canada:    `<svg viewBox="0 0 120 80" fill="none"><path d="M35.0 56.4 L28.8 56.6 L24.2 56.8 L20.9 56.7 L18.3 56.1 L11.7 53.1 L10.9 53.1 L10.1 53.7 L8.5 56.4 L8.0 56.9 L7.3 57.0 L6.8 56.8 L6.3 56.2 L6.0 55.3 L6.0 54.2 L6.3 52.9 L7.0 51.5 L8.6 48.3 L9.7 46.1 L11.2 44.1 L12.7 42.2 L17.0 38.1 L19.7 35.7 L20.4 35.3 L21.0 35.3 L21.4 35.5 L22.4 36.3 L23.0 36.6 L23.6 36.7 L24.2 36.5 L30.5 32.1 L31.3 31.3 L32.8 29.7 L33.7 28.7 L35.2 27.8 L36.6 27.4 L38.0 27.3 L39.0 27.4 L46.5 29.4 L47.1 29.6 L47.7 29.3 L48.3 28.8 L48.8 27.6 L49.0 25.9 L49.1 25.0 L49.7 23.9 L50.3 23.1 L51.0 22.5 L51.7 22.0 L52.4 21.8 L53.5 21.6 L54.9 21.4 L56.7 21.4 L58.0 21.7 L63.9 22.5 L67.0 23.4 L69.4 24.2 L72.1 25.2 L74.1 26.2 L75.7 27.1 L83.1 32.2 L83.7 32.8 L83.8 33.6 L83.7 34.4 L83.5 35.4 L83.5 36.3 L83.6 37.2 L84.0 38.2 L84.5 39.1 L85.4 39.9 L92.8 44.9 L96.9 47.2 L99.8 48.5 L103.0 49.5 L104.0 49.7 L105.1 49.8 L112.9 49.7 L113.4 49.7 L113.7 49.9 L114.0 50.5 L113.9 51.4 L113.6 52.0 L113.1 52.3 L112.8 52.4 L111.1 52.2 L108.6 51.9 L107.7 51.8 L106.7 52.0 L104.1 52.9 L101.9 53.7 L87.8 57.2 L86.0 57.6 L49.7 58.6 L48.2 58.6 L47.8 58.4 L47.5 57.9 L47.5 57.0 L47.3 56.4 L47.0 56.1 L46.4 56.0 L40.1 56.3 L35.0 56.4" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  espanha:    `<svg viewBox="0 0 120 80" fill="none"><path d="M81.4 56.6 L63.6 56.6 L53.6 56.7 L43.4 56.6 L32.6 56.7 L28.9 56.7 L27.9 56.5 L27.1 56.3 L26.6 55.9 L25.9 55.2 L25.3 54.4 L24.9 53.8 L24.7 53.1 L24.1 50.6 L23.8 49.8 L23.1 48.6 L22.4 47.8 L21.2 46.8 L20.3 46.4 L13.2 43.7 L12.3 43.2 L11.5 42.6 L10.4 41.8 L9.6 41.0 L8.9 40.2 L8.2 39.3 L7.5 38.2 L6.9 37.1 L6.4 35.6 L6.2 34.7 L6.1 33.9 L6.0 33.1 L6.2 30.8 L6.6 29.3 L7.3 27.9 L8.0 27.2 L8.8 26.3 L9.8 25.5 L11.0 24.8 L13.1 24.0 L15.0 23.5 L16.5 23.2 L17.9 23.3 L35.8 23.3 L36.6 23.5 L37.6 24.0 L39.0 25.1 L39.6 26.0 L40.1 26.9 L40.4 28.0 L40.6 29.4 L40.6 30.4 L40.1 32.0 L39.6 32.9 L38.4 34.0 L37.6 34.6 L36.5 35.0 L35.3 35.3 L33.3 35.4 L20.5 35.3 L19.8 35.6 L19.4 35.9 L19.0 36.5 L18.8 37.1 L18.8 37.7 L19.0 38.4 L19.3 39.2 L19.7 39.8 L20.5 40.5 L20.9 40.7 L32.2 47.6 L34.0 48.4 L35.8 49.1 L37.9 49.7 L39.5 49.9 L47.2 49.9 L48.3 49.8 L48.9 49.6 L49.5 48.8 L49.7 47.8 L49.6 46.6 L48.9 44.2 L48.7 42.7 L48.7 41.8 L48.8 40.9 L49.0 40.2 L51.3 34.2 L53.8 27.5 L54.4 26.5 L55.3 25.8 L56.0 25.4 L56.8 25.0 L58.0 25.0 L58.8 25.0 L60.3 25.2 L61.6 25.7 L99.0 46.4 L100.3 47.1 L101.2 47.3 L101.9 47.2 L102.5 46.8 L102.9 46.1 L103.0 45.4 L103.0 44.6 L102.8 43.4 L102.1 41.9 L101.6 41.0 L100.9 39.9 L100.2 39.0 L99.4 38.1 L98.3 37.3 L96.7 36.3 L95.5 35.7 L93.6 35.1 L91.8 34.4 L90.7 33.8 L89.5 32.5 L88.9 31.5 L88.5 30.2 L88.3 29.0 L88.5 28.0 L88.8 27.1 L89.4 26.4 L89.7 26.1 L90.9 25.5 L92.0 25.5 L93.1 25.8 L103.7 29.3 L104.8 29.6 L106.0 30.2 L106.9 30.8 L108.0 31.9 L108.9 33.0 L109.7 34.1 L110.1 35.2 L110.7 37.6 L111.4 40.3 L111.9 42.7 L112.4 44.2 L113.7 49.2 L114.0 50.5 L114.0 51.4 L113.9 52.4 L113.7 53.2 L113.2 54.2 L112.6 55.0 L111.6 55.9 L110.5 56.5 L108.1 56.8 L81.4 56.6" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  austria:    `<svg viewBox="0 0 120 80" fill="none"><path d="M78.0 58.3 L70.5 59.7 L52.1 63.1 L50.8 63.1 L50.0 62.6 L48.6 60.7 L44.1 56.6 L39.2 51.9 L35.3 47.7 L31.8 43.6 L26.1 35.1 L24.5 32.8 L22.0 30.1 L18.3 27.0 L12.1 22.8 L6.3 18.9 L6.0 18.4 L6.0 17.8 L6.7 17.5 L8.2 17.4 L12.9 17.0 L17.6 16.9 L22.5 16.9 L27.1 17.2 L32.5 17.8 L48.8 19.9 L56.3 20.6 L72.5 21.1 L73.8 21.4 L74.6 22.0 L74.9 22.7 L74.8 23.4 L74.4 24.0 L72.8 25.6 L71.5 26.7 L69.2 28.1 L66.6 29.0 L63.4 29.7 L60.1 30.1 L56.5 29.9 L42.7 28.4 L40.9 28.6 L39.4 29.0 L38.1 29.6 L36.9 30.4 L36.2 31.4 L35.8 32.5 L35.7 33.4 L36.0 34.5 L36.4 35.3 L43.1 43.2 L44.2 44.1 L45.9 44.8 L48.0 45.1 L50.0 45.0 L52.0 44.4 L53.3 43.7 L54.6 42.6 L55.9 41.6 L57.2 40.6 L58.7 39.9 L60.6 39.2 L63.2 38.5 L65.9 38.1 L87.2 37.8 L103.7 37.5 L105.4 37.6 L107.1 38.0 L108.5 38.7 L109.6 39.6 L110.4 40.9 L113.8 48.6 L114.0 49.3 L113.8 49.8 L113.4 50.2 L112.1 50.9 L110.4 51.6 L108.1 52.4 L105.6 53.1 L102.6 53.8 L78.0 58.3" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  gb:    `<svg viewBox="0 0 120 80" fill="none"><path d="M25.8 33.5 L25.1 21.2 L25.2 19.0 L25.5 17.3 L26.0 16.2 L26.9 14.9 L28.0 14.1 L29.3 13.4 L31.6 12.5 L33.8 11.5 L36.3 10.9 L37.9 10.7 L41.6 10.4 L44.9 10.2 L46.1 10.0 L47.3 9.2 L48.9 7.8 L49.9 7.1 L50.6 7.2 L51.4 7.4 L54.8 9.5 L56.2 9.7 L57.2 9.3 L58.0 8.6 L59.8 6.5 L60.6 6.1 L61.5 6.0 L62.4 6.3 L63.4 7.6 L64.1 9.2 L64.9 11.4 L65.5 13.1 L66.2 14.3 L67.6 15.7 L70.8 18.5 L87.8 33.5 L92.5 38.4 L93.7 39.8 L94.3 40.9 L94.7 42.2 L94.9 43.6 L94.8 44.9 L94.6 46.3 L94.3 47.4 L93.8 48.5 L93.0 49.4 L92.7 49.6 L90.9 51.0 L89.3 52.5 L88.0 54.1 L87.2 55.2 L86.3 56.4 L85.0 58.6 L81.4 63.4 L81.2 63.9 L81.2 64.6 L81.4 65.3 L82.5 67.3 L82.6 68.0 L82.6 68.7 L82.4 69.3 L82.0 70.1 L81.4 71.0 L80.5 72.1 L79.5 72.9 L78.6 73.5 L77.5 73.9 L77.0 74.0 L76.6 73.9 L76.1 73.5 L75.2 72.5 L63.3 57.7 L60.7 54.4 L60.2 53.7 L59.7 52.5 L59.5 51.0 L59.5 49.9 L59.6 48.2 L60.0 43.7 L60.1 42.2 L60.1 40.6 L60.0 38.8 L59.7 37.2 L59.3 35.8 L54.6 26.4 L54.4 25.7 L54.2 25.0 L54.1 24.2 L54.2 23.6 L54.5 23.1 L54.9 22.8 L58.3 21.2 L58.8 20.7 L59.1 20.0 L59.1 19.2 L58.9 18.4 L58.5 17.8 L58.0 17.5 L56.9 16.8 L55.9 16.3 L55.0 15.9 L54.1 15.7 L53.1 15.5 L52.1 15.6 L51.7 16.0 L51.1 16.8 L33.9 47.4 L33.6 48.2 L33.3 49.4 L33.1 50.8 L33.2 52.2 L33.7 53.7 L34.1 54.3 L34.7 54.7 L37.8 55.3 L38.4 55.6 L39.0 56.4 L39.3 57.5 L39.4 58.7 L39.2 60.1 L38.8 61.1 L38.3 61.6 L37.8 62.1 L37.2 62.2 L36.5 62.0 L35.5 61.2 L30.7 57.3 L29.8 56.0 L29.0 54.8 L28.1 53.0 L27.4 51.6 L27.0 49.8 L26.6 48.2 L26.4 44.8 L25.8 33.5" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  belgica:    `<svg viewBox="0 0 120 80" fill="none"><path d="M30.5 44.4 L22.8 49.3 L22.5 49.3 L22.3 49.0 L22.3 48.4 L22.5 47.8 L23.5 45.9 L25.8 41.4 L27.1 39.3 L28.6 37.1 L30.1 35.1 L31.6 33.6 L40.2 25.7 L40.7 25.2 L41.3 24.1 L42.5 22.3 L43.2 21.5 L44.0 20.9 L44.8 20.6 L45.6 20.4 L47.0 20.4 L47.6 20.3 L48.1 20.1 L48.7 19.7 L54.1 16.0 L57.6 13.7 L58.8 13.1 L59.7 12.7 L61.1 12.3 L69.8 10.1 L82.9 6.8 L86.1 6.0 L86.5 6.0 L87.0 6.2 L87.4 6.8 L87.6 7.5 L87.8 8.3 L88.0 8.9 L88.3 9.3 L88.8 9.6 L89.3 9.7 L92.6 9.1 L93.2 9.2 L93.6 9.5 L94.1 10.2 L94.3 11.0 L97.7 24.6 L97.7 25.4 L97.6 26.2 L97.3 27.0 L96.9 27.6 L96.3 28.0 L95.8 28.1 L95.3 28.1 L94.9 27.8 L94.5 27.3 L94.3 26.6 L93.1 20.7 L92.8 20.0 L92.5 19.6 L92.0 19.4 L91.5 19.4 L86.8 20.9 L84.9 21.3 L79.3 22.0 L76.1 22.2 L75.5 22.3 L74.9 22.6 L74.3 23.0 L73.7 23.7 L73.2 24.6 L72.7 25.5 L72.5 26.5 L71.7 29.8 L71.6 31.0 L71.6 32.2 L71.7 33.5 L72.0 34.5 L72.4 35.7 L72.9 36.5 L73.7 37.5 L78.2 41.5 L82.1 45.0 L82.7 45.7 L83.0 46.5 L83.2 47.6 L83.2 48.6 L83.1 49.5 L82.8 50.4 L82.4 51.1 L81.7 52.3 L81.3 53.1 L81.0 54.1 L80.9 55.1 L80.9 56.1 L81.1 56.9 L81.4 57.5 L81.9 58.2 L86.1 64.2 L86.3 64.8 L86.4 65.5 L86.4 66.2 L86.2 67.1 L85.8 67.8 L83.6 70.9 L82.3 72.8 L81.8 73.2 L81.2 73.7 L80.7 73.9 L80.0 74.0 L79.4 73.9 L78.7 73.7 L78.2 73.2 L77.5 72.6 L76.4 71.7 L75.2 70.3 L74.3 68.7 L73.2 66.5 L71.7 62.8 L71.1 60.7 L70.8 58.9 L69.5 49.9 L69.2 48.6 L68.8 47.3 L68.4 46.1 L67.8 45.1 L67.2 44.1 L66.1 42.7 L64.9 41.5 L62.3 38.9 L61.7 38.4 L61.1 38.0 L60.2 37.8 L59.3 37.9 L57.1 38.8 L54.5 39.8 L51.4 40.9 L50.3 41.2 L49.0 41.3 L47.8 41.4 L46.8 41.4 L42.1 41.0 L41.8 40.9 L41.7 40.6 L41.7 40.1 L41.9 39.4 L42.0 38.6 L42.0 38.1 L41.8 37.7 L41.6 37.5 L41.2 37.7 L37.9 39.9 L30.5 44.4" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  hungria:    `<svg viewBox="0 0 120 80" fill="none"><path d="M44.2 73.2 L23.5 73.8 L17.4 74.0 L16.7 73.8 L16.2 73.4 L16.0 72.9 L16.1 72.3 L16.3 71.7 L16.8 71.2 L17.7 70.6 L19.0 69.8 L22.6 67.8 L25.2 66.7 L27.7 65.9 L30.3 65.1 L32.5 64.8 L34.2 64.6 L51.0 64.1 L52.2 63.9 L53.2 63.5 L54.1 63.0 L54.7 62.3 L55.4 61.7 L55.9 61.0 L56.2 60.3 L56.3 59.7 L56.3 59.0 L56.0 58.3 L55.8 57.9 L55.2 57.5 L54.6 57.2 L48.5 55.1 L47.7 54.5 L47.2 53.9 L47.1 53.3 L47.0 52.4 L47.0 51.6 L47.9 43.8 L49.5 29.7 L49.9 27.4 L50.6 25.2 L51.6 22.6 L51.8 22.0 L51.8 21.4 L51.6 20.9 L51.1 20.4 L42.9 14.0 L42.5 13.4 L42.2 12.7 L42.1 11.9 L42.2 11.1 L42.6 10.2 L43.2 9.3 L43.9 8.5 L44.7 7.9 L45.8 7.3 L47.0 6.9 L48.5 6.5 L50.3 6.3 L51.6 6.2 L53.1 6.1 L54.7 6.0 L57.0 6.2 L66.5 7.2 L67.1 7.5 L67.5 7.8 L67.6 8.2 L67.5 8.8 L67.1 9.5 L66.9 10.0 L66.8 10.4 L67.2 10.9 L67.7 11.4 L73.7 16.2 L74.7 16.7 L75.3 16.8 L75.9 16.9 L76.6 16.9 L77.3 16.7 L78.6 16.1 L84.0 13.7 L85.2 13.4 L86.0 13.3 L86.8 13.3 L87.6 13.5 L88.0 13.9 L88.5 14.3 L88.9 15.0 L89.1 15.7 L91.3 22.5 L91.9 23.6 L92.4 24.2 L93.1 24.7 L93.8 25.2 L101.9 27.6 L102.9 28.2 L103.3 28.7 L103.7 29.2 L103.9 29.8 L104.0 30.5 L104.0 31.2 L103.7 32.0 L98.9 43.4 L94.7 53.8 L93.2 57.2 L92.7 57.9 L92.2 58.3 L91.6 58.5 L91.0 58.6 L90.3 58.6 L82.8 57.6 L81.6 57.6 L76.4 57.7 L75.6 57.8 L74.8 58.0 L73.9 58.4 L73.2 58.9 L72.3 59.8 L72.0 60.6 L71.9 61.3 L71.9 61.9 L72.1 62.5 L72.5 63.0 L73.2 63.3 L73.9 63.4 L84.2 63.2 L86.1 63.2 L86.8 63.5 L87.5 64.0 L88.1 64.7 L88.4 65.4 L88.5 66.3 L88.4 67.1 L88.0 68.0 L87.2 69.1 L86.2 70.0 L85.1 70.9 L83.7 71.5 L82.4 71.9 L81.0 72.0 L44.2 73.2" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  holanda:    `<svg viewBox="0 0 120 80" fill="none"><path d="M100.8 42.4 L88.7 60.3 L84.1 66.8 L83.1 67.6 L81.7 68.0 L80.1 68.1 L78.7 67.9 L77.3 67.3 L76.4 66.6 L75.9 65.8 L75.9 64.8 L77.2 62.9 L81.0 57.2 L82.3 54.5 L82.8 51.8 L82.5 49.2 L82.9 48.1 L83.9 47.4 L85.7 46.5 L87.8 46.0 L93.4 44.7 L94.8 44.0 L95.2 43.0 L95.3 42.1 L94.7 41.2 L93.6 40.6 L92.2 40.3 L90.2 40.3 L79.9 42.3 L75.1 42.8 L71.0 42.9 L67.4 42.7 L63.9 42.4 L61.5 41.9 L57.5 41.4 L53.8 41.2 L51.1 41.5 L48.0 42.1 L44.2 43.2 L39.7 45.0 L36.7 45.9 L34.0 46.4 L30.5 46.6 L27.7 46.6 L16.0 46.1 L13.3 45.7 L10.8 45.0 L9.0 44.1 L7.9 43.1 L6.8 41.9 L6.2 40.6 L6.0 39.2 L6.2 37.9 L6.9 36.5 L8.3 35.0 L13.6 30.6 L15.6 28.6 L20.1 22.7 L22.2 22.2 L24.9 22.0 L27.4 22.1 L30.4 22.4 L33.5 23.1 L36.9 24.0 L40.2 25.5 L42.2 26.8 L42.6 27.7 L42.2 28.6 L41.0 29.7 L39.2 30.4 L36.5 31.0 L31.9 31.4 L27.6 32.1 L23.6 33.0 L21.4 34.0 L20.5 35.1 L20.4 36.4 L21.1 37.6 L23.0 38.7 L24.6 39.1 L33.3 39.7 L41.9 39.7 L51.2 39.0 L59.0 37.8 L63.8 36.9 L69.1 35.7 L74.2 34.4 L78.3 32.9 L79.9 32.5 L81.0 32.6 L82.0 33.5 L83.1 34.7 L84.6 35.3 L86.5 35.3 L88.3 34.8 L89.3 34.0 L89.8 33.1 L89.3 31.3 L85.2 16.4 L85.1 15.4 L85.5 14.4 L86.3 13.5 L87.0 13.0 L88.8 12.3 L90.6 12.0 L98.7 11.9 L100.3 12.0 L102.7 12.2 L105.2 12.7 L107.2 13.2 L109.9 14.5 L111.6 16.0 L112.8 17.2 L113.7 18.9 L114.0 20.3 L113.8 22.7 L113.0 24.4 L101.4 41.5 L100.8 42.4" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  italia:    `<svg viewBox="0 0 120 80" fill="none"><path d="M71.1 71.8 L54.9 69.8 L48.1 68.9 L47.8 68.8 L47.6 68.5 L47.6 68.2 L47.6 67.8 L47.6 67.4 L47.6 67.0 L47.5 66.7 L47.3 66.6 L47.1 66.5 L46.9 66.5 L43.2 67.9 L42.2 68.1 L41.3 68.2 L40.3 68.1 L35.4 67.5 L34.6 67.3 L33.9 67.1 L33.1 66.7 L32.3 66.2 L31.4 65.7 L30.5 64.8 L29.7 63.9 L28.9 62.8 L28.1 61.5 L27.4 60.1 L26.8 58.6 L26.2 56.8 L25.7 55.1 L25.4 53.2 L25.1 51.1 L25.0 48.9 L24.5 40.3 L24.0 29.9 L24.0 29.3 L23.9 28.9 L23.7 28.7 L22.8 28.3 L22.6 28.2 L22.4 27.9 L22.3 27.5 L22.1 26.1 L21.9 24.5 L21.4 22.3 L19.1 12.6 L19.0 11.7 L19.0 10.9 L19.1 10.1 L19.2 9.6 L19.4 9.1 L19.7 8.6 L20.1 7.9 L20.5 7.6 L21.0 7.3 L21.5 7.2 L24.7 6.8 L30.3 6.0 L30.8 6.0 L31.1 6.2 L31.4 6.3 L31.6 6.7 L31.9 7.3 L34.3 13.7 L36.3 18.9 L37.6 22.1 L38.2 23.7 L39.1 25.5 L39.8 26.7 L40.4 27.8 L43.9 33.5 L46.4 37.5 L51.6 46.1 L54.8 51.2 L55.3 51.9 L55.6 52.2 L55.9 52.2 L56.3 52.2 L57.1 52.0 L57.6 52.0 L58.3 52.0 L58.6 52.1 L59.1 52.3 L59.6 52.6 L60.1 53.1 L60.7 53.7 L61.1 54.5 L61.5 55.1 L61.7 55.4 L62.1 55.7 L62.8 55.9 L65.8 56.4 L68.9 57.0 L97.6 61.2 L98.6 61.4 L99.1 61.6 L99.6 61.9 L100.0 62.4 L100.3 62.9 L100.7 63.7 L100.9 64.6 L101.0 65.5 L101.0 66.4 L100.9 67.1 L100.6 68.0 L100.4 68.9 L100.0 69.5 L99.6 70.3 L99.0 71.2 L98.4 71.8 L97.7 72.3 L97.0 72.8 L96.2 73.2 L95.3 73.5 L94.6 73.7 L93.5 73.8 L92.4 73.8 L91.3 73.9 L89.2 73.9 L87.4 74.0 L85.4 73.9 L82.8 73.6 L74.6 72.4 L71.1 71.8" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  azerbaijao:    `<svg viewBox="0 0 120 80" fill="none"><path d="M85.1 68.8 L89.7 73.7 L90.0 73.9 L90.4 74.0 L90.7 73.9 L91.0 73.6 L92.8 71.4 L94.8 68.0 L96.9 65.1 L96.9 64.8 L96.8 64.4 L92.5 59.7 L87.4 53.8 L79.9 46.1 L73.4 39.5 L72.8 39.1 L72.2 39.4 L68.3 44.4 L67.9 44.6 L67.4 44.3 L63.6 40.6 L61.4 38.5 L58.1 35.9 L57.8 35.8 L57.5 36.0 L56.8 37.0 L56.5 37.1 L56.2 36.9 L54.7 36.0 L46.4 30.3 L44.9 29.4 L44.3 29.0 L44.1 28.4 L44.2 27.8 L47.9 23.6 L48.0 23.2 L47.9 22.8 L47.7 22.3 L47.7 21.4 L47.5 20.9 L47.3 20.4 L47.1 20.0 L47.0 19.4 L47.1 19.0 L48.0 18.1 L48.1 17.7 L48.2 17.4 L48.0 16.9 L45.5 14.0 L41.1 9.6 L37.9 6.9 L37.2 6.4 L36.4 6.1 L35.3 6.0 L30.1 6.4 L29.5 6.5 L23.6 9.9 L23.3 10.3 L23.1 10.9 L23.6 19.3 L23.9 21.7 L24.1 22.9 L24.3 23.5 L24.7 24.2 L25.2 24.6 L25.6 24.8 L29.7 25.5 L30.6 25.7 L31.4 26.0 L38.6 30.2 L39.3 30.4 L40.0 30.4 L43.0 29.6 L43.7 29.6 L44.4 29.8 L45.0 30.2 L54.4 36.6 L55.5 37.5 L56.7 38.6 L57.7 39.6 L60.9 43.0 L63.8 46.0 L70.6 53.3 L73.5 56.2 L80.5 63.8 L85.1 68.8" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  singapore:    `<svg viewBox="0 0 120 80" fill="none"><path d="M110.2 31.9 L112.3 47.8 L112.5 49.9 L112.3 50.9 L111.7 51.8 L109.1 55.8 L108.7 56.4 L108.2 56.6 L107.6 56.7 L106.1 56.6 L99.6 56.3 L89.5 55.2 L88.2 54.9 L87.4 54.4 L86.7 53.7 L86.2 52.3 L86.1 50.9 L86.2 50.1 L85.9 49.7 L84.5 49.6 L83.1 49.6 L75.6 49.1 L54.6 48.0 L52.1 47.7 L50.3 47.2 L48.5 46.3 L41.0 39.8 L37.9 37.1 L37.3 36.6 L36.6 36.5 L35.6 36.7 L34.9 37.2 L34.4 37.6 L33.1 41.7 L32.4 44.8 L30.6 54.1 L26.9 72.8 L26.7 73.2 L26.5 73.5 L26.0 73.9 L25.4 74.0 L24.6 74.0 L24.3 73.8 L23.4 72.8 L22.6 71.5 L21.9 70.2 L21.2 69.5 L18.0 66.9 L16.4 65.4 L15.4 64.4 L14.8 63.6 L14.1 61.4 L14.2 60.4 L14.4 59.7 L14.9 58.8 L14.6 58.3 L13.8 58.0 L12.3 57.5 L11.0 56.6 L9.4 55.5 L8.2 54.4 L7.8 53.5 L7.6 52.3 L7.5 51.2 L8.8 49.0 L13.8 40.1 L20.2 28.5 L21.3 26.4 L22.4 25.4 L22.9 25.1 L24.3 24.8 L25.6 25.6 L27.3 26.7 L34.0 33.8 L34.6 34.1 L35.1 34.0 L35.6 33.1 L38.2 27.9 L41.8 21.9 L42.4 20.9 L43.1 20.7 L44.2 21.2 L44.9 21.6 L63.8 32.5 L66.9 33.7 L69.0 34.1 L95.7 35.7 L96.8 35.5 L98.1 34.9 L99.2 34.1 L99.9 32.8 L100.1 31.5 L99.9 28.6 L99.1 24.6 L96.8 18.2 L96.2 16.8 L95.8 15.7 L95.5 14.3 L95.5 12.5 L95.9 8.6 L96.6 7.0 L97.5 6.1 L98.3 6.0 L99.0 6.2 L99.8 7.1 L100.2 7.6 L100.7 8.2 L101.4 8.8 L103.1 9.7 L104.5 10.1 L106.3 9.9 L107.2 10.3 L107.7 10.9 L107.9 11.9 L108.6 20.7 L110.2 31.9" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  eua:    `<svg viewBox="0 0 120 80" fill="none"><path d="M102.7 36.0 L96.1 22.5 L94.3 19.9 L93.8 19.5 L93.1 19.6 L92.8 20.1 L91.6 28.3 L91.0 29.6 L90.1 30.8 L88.7 31.8 L86.9 32.4 L84.8 32.4 L75.7 32.1 L74.4 32.5 L73.3 33.0 L71.6 34.3 L70.3 34.8 L68.9 34.7 L66.4 34.3 L65.1 34.5 L64.1 35.3 L62.9 36.7 L61.9 37.6 L60.7 38.2 L59.1 38.4 L57.2 38.4 L55.4 38.0 L54.4 37.4 L50.0 32.0 L49.1 31.3 L47.4 31.2 L44.5 31.6 L42.2 32.3 L40.7 32.2 L39.5 31.7 L38.4 30.4 L38.1 29.3 L38.0 28.3 L37.5 27.4 L27.4 23.8 L26.3 23.6 L17.7 26.1 L7.6 29.1 L6.1 30.1 L6.1 30.6 L6.5 31.2 L7.4 31.5 L25.7 36.5 L43.2 42.6 L54.4 47.2 L71.6 54.9 L72.1 54.8 L72.1 54.2 L70.6 46.8 L70.4 43.6 L71.2 43.0 L72.0 43.1 L75.3 45.1 L75.6 45.7 L75.7 46.5 L75.5 48.8 L76.5 52.1 L76.9 52.7 L78.8 54.1 L79.5 54.3 L80.1 54.0 L79.7 46.6 L79.8 42.9 L80.6 41.9 L81.9 40.8 L83.6 39.9 L85.2 40.0 L89.3 40.7 L90.8 41.6 L92.5 43.1 L94.0 45.0 L94.4 46.6 L96.3 56.5 L96.8 57.3 L97.7 57.9 L99.2 58.3 L112.4 60.5 L113.6 60.3 L114.0 59.7 L113.7 58.9 L102.7 36.0" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  mexico:    `<svg viewBox="0 0 120 80" fill="none"><path d="M22.6 25.6 L49.2 19.7 L57.8 17.7 L66.7 15.3 L71.1 14.3 L82.4 11.8 L102.1 7.6 L106.3 6.9 L107.0 6.9 L107.5 7.1 L107.8 7.5 L108.0 7.9 L108.9 12.5 L109.1 12.9 L109.5 13.1 L111.8 13.4 L112.5 13.5 L113.0 13.8 L113.1 14.3 L113.7 17.1 L114.0 19.8 L113.9 22.5 L113.6 25.1 L110.0 42.0 L105.2 61.1 L104.9 62.4 L105.1 63.0 L105.4 63.5 L105.9 63.8 L109.6 64.5 L110.0 64.6 L110.2 65.1 L110.1 65.5 L109.8 66.2 L105.5 72.4 L105.0 72.8 L104.5 73.1 L104.1 73.1 L102.8 72.8 L102.4 72.5 L102.1 71.7 L97.7 51.3 L97.5 50.7 L97.0 50.2 L96.4 49.9 L95.7 49.7 L91.9 49.1 L90.5 48.5 L89.6 48.1 L88.5 47.2 L87.2 45.7 L86.1 44.9 L85.0 44.4 L83.9 44.2 L82.6 44.2 L72.6 46.3 L71.4 46.3 L70.6 46.0 L70.1 45.8 L69.7 45.4 L67.1 42.3 L66.5 41.7 L65.6 41.3 L63.8 40.9 L55.4 39.9 L53.1 39.9 L49.9 40.3 L25.2 45.6 L24.6 45.6 L24.3 45.4 L23.9 45.1 L23.6 44.5 L21.1 38.9 L19.2 35.1 L18.9 34.8 L18.4 34.6 L17.8 34.5 L17.3 34.8 L16.8 35.6 L16.4 37.1 L16.0 37.6 L15.5 38.1 L14.9 38.3 L14.0 38.2 L13.0 38.2 L12.1 38.2 L7.9 39.3 L7.2 39.3 L6.8 39.2 L6.3 38.8 L6.1 38.4 L6.0 37.2 L6.1 35.5 L6.4 34.1 L6.9 32.2 L7.9 30.8 L9.2 29.4 L10.6 28.5 L12.0 27.9 L14.2 27.4 L22.6 25.6" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  brasil:    `<svg viewBox="0 0 120 80" fill="none"><path d="M38.5 12.6 L14.9 19.3 L11.7 21.3 L10.7 23.1 L10.9 25.4 L12.8 27.9 L15.2 30.4 L15.5 32.3 L13.5 36.6 L12.2 40.7 L11.9 43.7 L12.5 47.4 L14.1 51.3 L16.9 54.6 L19.9 56.7 L30.2 60.3 L41.9 63.6 L66.8 70.5 L76.3 73.3 L79.3 74.0 L81.1 73.6 L82.7 71.8 L83.5 68.5 L84.8 60.5 L84.5 57.4 L83.3 54.3 L81.5 51.6 L78.1 48.5 L66.4 39.2 L58.7 33.0 L54.9 30.0 L53.4 28.1 L52.8 25.1 L53.0 21.1 L53.9 18.7 L55.6 15.8 L57.5 14.5 L61.3 13.5 L67.1 12.3 L70.2 12.3 L72.0 13.3 L72.4 14.4 L72.3 16.0 L70.4 19.2 L69.6 20.8 L69.4 22.4 L69.9 24.2 L71.8 26.2 L73.8 26.7 L75.7 26.1 L77.9 24.2 L82.5 19.3 L86.1 17.4 L90.3 16.4 L92.8 16.4 L94.1 17.3 L94.4 18.5 L94.0 20.0 L86.5 27.3 L85.2 29.2 L84.5 31.3 L84.2 33.6 L84.4 36.8 L85.7 39.9 L88.0 42.5 L93.0 46.0 L102.3 52.2 L103.5 52.4 L104.9 51.9 L106.3 49.4 L108.9 41.9 L109.3 39.7 L108.7 34.9 L107.2 28.5 L105.4 23.7 L102.6 18.4 L100.4 15.9 L98.0 13.9 L94.4 12.3 L86.0 10.1 L77.0 7.9 L71.0 6.3 L66.8 6.0 L61.8 6.5 L55.7 8.1 L38.5 12.6" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  lasvegas:    `<svg viewBox="0 0 120 80" fill="none"><path d="M95.5 11.7 L92.6 8.5 L92.0 7.8 L91.4 7.3 L90.6 7.2 L89.9 7.6 L89.4 8.3 L89.0 9.5 L88.9 10.6 L88.9 11.7 L89.2 12.8 L90.3 15.0 L92.0 17.1 L92.4 17.9 L92.7 19.7 L92.7 20.7 L92.2 22.4 L91.8 23.3 L91.2 24.2 L89.6 25.7 L88.2 26.3 L48.0 26.7 L47.4 26.4 L47.1 25.8 L47.3 15.5 L47.3 12.4 L47.0 10.8 L46.5 10.2 L45.1 8.4 L44.1 7.5 L43.1 6.9 L42.3 6.5 L41.1 6.2 L39.8 6.0 L39.0 6.1 L38.7 6.6 L38.5 8.1 L38.3 8.6 L37.7 9.1 L36.8 9.2 L36.2 9.2 L34.2 7.7 L33.7 7.5 L32.7 6.9 L31.8 7.1 L31.1 8.3 L30.9 10.4 L30.6 26.7 L29.9 32.7 L29.1 34.7 L27.3 36.9 L24.3 38.8 L18.8 41.7 L17.2 43.5 L16.1 45.4 L15.6 47.4 L14.8 50.4 L14.2 53.9 L14.3 54.4 L14.6 54.8 L15.5 55.2 L16.2 55.5 L21.9 59.1 L25.2 61.4 L26.9 62.5 L28.6 63.7 L31.5 65.8 L35.4 67.9 L38.3 69.0 L41.7 70.3 L44.1 71.1 L46.6 71.7 L49.0 72.2 L52.6 72.7 L54.7 72.9 L57.2 73.0 L63.9 73.0 L67.8 72.9 L70.7 72.9 L86.0 73.6 L93.8 73.8 L97.7 73.8 L102.4 74.0 L102.8 73.7 L102.9 73.2 L102.9 72.2 L103.2 71.4 L104.6 69.6 L105.3 68.0 L105.6 66.0 L105.8 56.9 L105.7 45.2 L105.7 35.5 L105.7 30.7 L105.2 26.8 L104.6 22.8 L104.2 21.7 L103.8 20.9 L103.3 20.2 L95.5 11.7" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  abudhabi:    `<svg viewBox="0 0 120 80" fill="none"><path d="M54.6 41.6 L55.2 58.0 L55.4 58.8 L55.9 59.5 L56.7 60.0 L57.6 60.2 L58.5 60.0 L68.7 58.3 L69.8 58.0 L70.7 57.4 L71.6 56.5 L72.0 55.7 L73.7 51.2 L74.6 49.7 L75.4 48.7 L76.3 47.7 L77.2 47.0 L78.0 46.5 L79.5 45.9 L80.7 45.8 L82.0 45.9 L83.5 46.3 L85.0 47.0 L88.9 48.4 L91.8 49.1 L93.9 49.3 L95.7 49.3 L105.2 48.8 L111.1 48.5 L111.8 48.4 L112.4 48.3 L113.0 47.9 L113.7 47.1 L113.9 46.6 L114.0 46.0 L114.0 45.5 L113.8 44.9 L113.4 44.4 L113.1 44.1 L112.5 43.7 L109.9 42.5 L106.0 41.2 L84.8 31.2 L76.5 27.3 L71.9 25.1 L68.4 23.5 L63.9 21.7 L55.8 18.1 L48.4 14.6 L47.7 14.3 L47.2 14.1 L46.9 14.2 L46.5 14.5 L46.4 15.2 L46.5 17.8 L46.4 18.3 L45.9 18.7 L40.7 19.8 L39.7 20.0 L37.6 20.7 L36.0 21.4 L33.4 23.0 L31.1 24.9 L28.8 27.3 L19.9 37.6 L17.9 40.0 L16.4 41.8 L14.6 44.3 L13.2 46.5 L11.3 50.0 L9.7 53.2 L7.1 58.0 L6.1 60.1 L6.0 61.3 L6.1 62.6 L6.6 63.8 L7.1 64.4 L7.6 64.9 L8.4 65.4 L9.1 65.7 L9.8 65.9 L11.0 65.9 L11.9 65.7 L12.7 65.4 L13.5 64.9 L14.2 64.2 L14.9 63.3 L15.4 62.3 L15.7 60.9 L17.6 49.4 L17.9 48.0 L18.1 47.3 L18.3 46.7 L22.4 40.8 L22.9 40.2 L23.4 39.8 L24.5 39.5 L30.8 38.6 L31.3 38.7 L31.6 39.1 L31.7 39.6 L31.9 44.8 L32.1 45.4 L32.3 45.8 L32.6 46.3 L33.3 46.8 L34.1 46.9 L38.4 47.3 L39.2 47.0 L39.6 46.6 L40.0 45.9 L40.2 45.0 L40.4 44.1 L40.5 43.0 L40.6 41.9 L40.0 31.0 L40.0 30.0 L40.2 28.9 L40.4 27.7 L40.7 26.9 L41.2 26.5 L41.8 26.0 L47.0 23.4 L49.3 22.1 L50.0 21.8 L50.9 21.7 L51.7 21.7 L52.6 21.7 L53.2 22.0 L53.6 22.4 L53.8 22.9 L53.9 24.0 L54.6 41.6" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
};

const PTS = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1];