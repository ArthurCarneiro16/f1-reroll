// ═══════════════════════════════════════
// F1 MANAGER — DATA.JS
// Todos os pilotos, chassi e motores
// ═══════════════════════════════════════

// ── PILOTOS ──────────────────────────────
const pilotos = [

  // Lenda especial
  { nome:"Ayrton Senna",      nac:"🇧🇷", ano:1993, score:99, corrida:99, quali:99, pneus:99, chuva:99, pressao:99 },

  // Era V10
  { nome:"M. Schumacher",     nac:"🇩🇪", ano:2004, score:98, corrida:98, quali:93, pneus:96, chuva:88, pressao:98 },
  { nome:"Mika Häkkinen",     nac:"🇫🇮", ano:1998, score:92, corrida:92, quali:93, pneus:86, chuva:85, pressao:88 },
  { nome:"Juan P. Montoya",   nac:"🇨🇴", ano:2003, score:88, corrida:88, quali:87, pneus:76, chuva:82, pressao:78 },
  { nome:"Kimi Räikkönen",    nac:"🇫🇮", ano:2005, score:88, corrida:88, quali:88, pneus:84, chuva:86, pressao:84 },
  { nome:"Damon Hill",        nac:"🇬🇧", ano:1996, score:87, corrida:87, quali:85, pneus:83, chuva:80, pressao:84 },
  { nome:"Rubens Barrichello", nac:"🇧🇷", ano:2004, score:86, corrida:86, quali:83, pneus:85, chuva:80, pressao:72 },
  { nome:"Jacques Villeneuve", nac:"🇨🇦", ano:1997, score:86, corrida:86, quali:86, pneus:80, chuva:78, pressao:82 },
  { nome:"Fernando Alonso",   nac:"🇪🇸", ano:2005, score:86, corrida:86, quali:86, pneus:82, chuva:80, pressao:82 },
  { nome:"David Coulthard",   nac:"🇬🇧", ano:2001, score:84, corrida:84, quali:85, pneus:80, chuva:82, pressao:76 },
  { nome:"Ralf Schumacher",   nac:"🇩🇪", ano:2003, score:82, corrida:82, quali:80, pneus:78, chuva:74, pressao:72 },
  { nome:"H-H Frentzen",      nac:"🇩🇪", ano:1999, score:82, corrida:82, quali:80, pneus:78, chuva:76, pressao:72 },
  { nome:"Eddie Irvine",      nac:"🇬🇧", ano:1999, score:80, corrida:80, quali:78, pneus:78, chuva:72, pressao:70 },
  { nome:"Jarno Trulli",      nac:"🇮🇹", ano:2004, score:78, corrida:78, quali:82, pneus:72, chuva:70, pressao:65 },
  { nome:"Mark Webber",       nac:"🇦🇺", ano:2005, score:78, corrida:78, quali:76, pneus:74, chuva:74, pressao:68 },
  { nome:"Jenson Button",     nac:"🇬🇧", ano:2004, score:74, corrida:74, quali:76, pneus:76, chuva:78, pressao:66 },

  // Era V8
  { nome:"Fernando Alonso",   nac:"🇪🇸", ano:2012, score:94, corrida:94, quali:90, pneus:92, chuva:89, pressao:96 },
  { nome:"Lewis Hamilton",    nac:"🇬🇧", ano:2012, score:94, corrida:94, quali:93, pneus:88, chuva:92, pressao:94 },
  { nome:"Sebastian Vettel",  nac:"🇩🇪", ano:2013, score:93, corrida:93, quali:91, pneus:88, chuva:80, pressao:91 },
  { nome:"Kimi Räikkönen",    nac:"🇫🇮", ano:2007, score:90, corrida:90, quali:87, pneus:90, chuva:84, pressao:82 },
  { nome:"Jenson Button",     nac:"🇬🇧", ano:2009, score:86, corrida:86, quali:82, pneus:88, chuva:88, pressao:82 },
  { nome:"Mark Webber",       nac:"🇦🇺", ano:2010, score:85, corrida:85, quali:86, pneus:80, chuva:80, pressao:74 },
  { nome:"Robert Kubica",     nac:"🇵🇱", ano:2010, score:84, corrida:84, quali:84, pneus:80, chuva:78, pressao:76 },
  { nome:"Felipe Massa",      nac:"🇧🇷", ano:2008, score:83, corrida:83, quali:84, pneus:82, chuva:76, pressao:74 },
  { nome:"Nico Rosberg",      nac:"🇩🇪", ano:2012, score:82, corrida:82, quali:86, pneus:78, chuva:74, pressao:72 },
  { nome:"M. Schumacher",     nac:"🇩🇪", ano:2012, score:82, corrida:82, quali:80, pneus:78, chuva:74, pressao:74 },
  { nome:"Daniel Ricciardo",  nac:"🇦🇺", ano:2013, score:80, corrida:80, quali:82, pneus:78, chuva:78, pressao:72 },
  { nome:"Nico Hülkenberg",   nac:"🇩🇪", ano:2012, score:78, corrida:78, quali:82, pneus:74, chuva:70, pressao:66 },
  { nome:"Sergio Pérez",      nac:"🇲🇽", ano:2012, score:78, corrida:78, quali:74, pneus:86, chuva:76, pressao:68 },
  { nome:"Valtteri Bottas",   nac:"🇫🇮", ano:2013, score:76, corrida:76, quali:80, pneus:74, chuva:68, pressao:58 },
  { nome:"Romain Grosjean",   nac:"🇫🇷", ano:2013, score:74, corrida:74, quali:76, pneus:64, chuva:68, pressao:60 },
  { nome:"Pastor Maldonado",  nac:"🇻🇪", ano:2012, score:66, corrida:66, quali:72, pneus:56, chuva:60, pressao:52 },
  { nome:"Vitaly Petrov",     nac:"🇷🇺", ano:2010, score:62, corrida:62, quali:64, pneus:62, chuva:60, pressao:54 },

  // Era V6
  { nome:"Lewis Hamilton",    nac:"🇬🇧", ano:2020, score:96, corrida:96, quali:95, pneus:90, chuva:93, pressao:96 },
  { nome:"Max Verstappen",    nac:"🇳🇱", ano:2021, score:94, corrida:94, quali:92, pneus:88, chuva:84, pressao:93 },
  { nome:"Fernando Alonso",   nac:"🇪🇸", ano:2014, score:92, corrida:92, quali:86, pneus:91, chuva:88, pressao:95 },
  { nome:"Sebastian Vettel",  nac:"🇩🇪", ano:2017, score:91, corrida:91, quali:88, pneus:86, chuva:78, pressao:86 },
  { nome:"Nico Rosberg",      nac:"🇩🇪", ano:2016, score:88, corrida:88, quali:90, pneus:84, chuva:78, pressao:82 },
  { nome:"Daniel Ricciardo",  nac:"🇦🇺", ano:2016, score:87, corrida:87, quali:88, pneus:82, chuva:84, pressao:80 },
  { nome:"Charles Leclerc",   nac:"🇲🇨", ano:2019, score:87, corrida:87, quali:93, pneus:78, chuva:80, pressao:82 },
  { nome:"Max Verstappen",    nac:"🇳🇱", ano:2016, score:84, corrida:84, quali:82, pneus:78, chuva:82, pressao:80 },
  { nome:"Kimi Räikkönen",    nac:"🇫🇮", ano:2018, score:84, corrida:84, quali:82, pneus:88, chuva:80, pressao:74 },
  { nome:"Valtteri Bottas",   nac:"🇫🇮", ano:2019, score:84, corrida:84, quali:86, pneus:80, chuva:72, pressao:62 },
  { nome:"Sergio Pérez",      nac:"🇲🇽", ano:2020, score:84, corrida:84, quali:78, pneus:88, chuva:80, pressao:72 },
  { nome:"Carlos Sainz",      nac:"🇪🇸", ano:2021, score:84, corrida:84, quali:83, pneus:90, chuva:82, pressao:82 },
  { nome:"Lando Norris",      nac:"🇬🇧", ano:2021, score:83, corrida:83, quali:88, pneus:82, chuva:80, pressao:76 },
  { nome:"George Russell",    nac:"🇬🇧", ano:2021, score:81, corrida:81, quali:86, pneus:80, chuva:78, pressao:76 },
  { nome:"Pierre Gasly",      nac:"🇫🇷", ano:2020, score:78, corrida:78, quali:80, pneus:74, chuva:72, pressao:70 },
  { nome:"Esteban Ocon",      nac:"🇫🇷", ano:2021, score:76, corrida:76, quali:77, pneus:74, chuva:72, pressao:68 },
  { nome:"Kevin Magnussen",   nac:"🇩🇰", ano:2018, score:76, corrida:76, quali:74, pneus:72, chuva:70, pressao:68 },
  { nome:"Daniil Kvyat",      nac:"🇷🇺", ano:2019, score:74, corrida:74, quali:74, pneus:70, chuva:68, pressao:62 },
  { nome:"Lance Stroll",      nac:"🇨🇦", ano:2020, score:66, corrida:66, quali:64, pneus:70, chuva:78, pressao:52 },
  { nome:"Romain Grosjean",   nac:"🇫🇷", ano:2019, score:74, corrida:74, quali:76, pneus:64, chuva:68, pressao:60 },
  { nome:"Mick Schumacher",   nac:"🇩🇪", ano:2022, score:68, corrida:68, quali:68, pneus:70, chuva:66, pressao:60 },
  { nome:"Antonio Giovinazzi",nac:"🇮🇹", ano:2021, score:68, corrida:68, quali:70, pneus:68, chuva:64, pressao:58 },
  { nome:"Robert Kubica",     nac:"🇵🇱", ano:2019, score:58, corrida:58, quali:60, pneus:64, chuva:62, pressao:55 },
  { nome:"Nicholas Latifi",   nac:"🇨🇦", ano:2021, score:56, corrida:56, quali:58, pneus:62, chuva:60, pressao:50 },

  // Era 2022–2025
  { nome:"Max Verstappen",    nac:"🇳🇱", ano:2023, score:97, corrida:97, quali:95, pneus:91, chuva:86, pressao:97 },
  { nome:"Lewis Hamilton",    nac:"🇬🇧", ano:2024, score:93, corrida:93, quali:92, pneus:89, chuva:92, pressao:94 },
  { nome:"Fernando Alonso",   nac:"🇪🇸", ano:2023, score:88, corrida:88, quali:83, pneus:89, chuva:87, pressao:93 },
  { nome:"Charles Leclerc",   nac:"🇲🇨", ano:2024, score:87, corrida:87, quali:93, pneus:78, chuva:80, pressao:82 },
  { nome:"Lando Norris",      nac:"🇬🇧", ano:2024, score:87, corrida:87, quali:89, pneus:84, chuva:82, pressao:82 },
  { nome:"Carlos Sainz",      nac:"🇪🇸", ano:2024, score:85, corrida:85, quali:84, pneus:91, chuva:83, pressao:84 },
  { nome:"George Russell",    nac:"🇬🇧", ano:2024, score:82, corrida:82, quali:86, pneus:81, chuva:79, pressao:78 },
  { nome:"Oscar Piastri",     nac:"🇦🇺", ano:2024, score:82, corrida:82, quali:83, pneus:80, chuva:76, pressao:76 },
  { nome:"Sergio Pérez",      nac:"🇲🇽", ano:2022, score:84, corrida:84, quali:78, pneus:86, chuva:78, pressao:72 },
  { nome:"Yuki Tsunoda",      nac:"🇯🇵", ano:2024, score:74, corrida:74, quali:76, pneus:68, chuva:70, pressao:66 },
  { nome:"Pierre Gasly",      nac:"🇫🇷", ano:2023, score:76, corrida:76, quali:78, pneus:72, chuva:70, pressao:68 },
  { nome:"Nico Hülkenberg",   nac:"🇩🇪", ano:2024, score:65, corrida:65, quali:68, pneus:69, chuva:64, pressao:60 },
  { nome:"Lance Stroll",      nac:"🇨🇦", ano:2024, score:66, corrida:66, quali:64, pneus:70, chuva:78, pressao:52 },
  { nome:"Valtteri Bottas",   nac:"🇫🇮", ano:2022, score:63, corrida:63, quali:66, pneus:70, chuva:68, pressao:56 },
  { nome:"Logan Sargeant",    nac:"🇺🇸", ano:2023, score:54, corrida:54, quali:56, pneus:60, chuva:58, pressao:48 },
];

// ── CHASSI ───────────────────────────────
const chassis = [
  // V10
  { nome:"Ferrari F2004",     sub:"Ferrari · 2004",          score:95, downforce:94, estab:92 },
  { nome:"Williams FW18",     sub:"Williams · 1996",         score:89, downforce:90, estab:88 },
  { nome:"McLaren MP4/20",    sub:"McLaren · 2005",          score:87, downforce:88, estab:86 },
  { nome:"Jordan 198",        sub:"Jordan · 1998",           score:73, downforce:74, estab:76 },
  { nome:"Minardi M02",       sub:"Minardi · 2000",          score:42, downforce:44, estab:50 },
  // V8
  { nome:"Red Bull RB9",      sub:"Red Bull · 2013",         score:95, downforce:94, estab:92 },
  { nome:"Brawn BGP 001",     sub:"Brawn GP · 2009",         score:87, downforce:86, estab:88 },
  { nome:"Ferrari F150°",     sub:"Ferrari · 2011",          score:89, downforce:90, estab:86 },
  { nome:"McLaren MP4-26",    sub:"McLaren · 2011",          score:82, downforce:84, estab:82 },
  { nome:"Renault R25",       sub:"Renault · 2005",          score:82, downforce:82, estab:84 },
  { nome:"Williams FW33",     sub:"Williams · 2011",         score:66, downforce:68, estab:70 },
  // V6
  { nome:"Mercedes F1 W11",   sub:"Mercedes · 2020",         score:96, downforce:96, estab:95 },
  { nome:"Red Bull RB16B",    sub:"Red Bull · 2021",         score:93, downforce:93, estab:90 },
  { nome:"Ferrari SF70H",     sub:"Ferrari · 2017",          score:87, downforce:88, estab:84 },
  { nome:"Racing Point RP20", sub:"Racing Point · 2020",     score:83, downforce:84, estab:86 },
  { nome:"McLaren MCL35M",    sub:"McLaren · 2021",          score:82, downforce:82, estab:85 },
  { nome:"Renault R.S.20",    sub:"Renault · 2020",          score:77, downforce:78, estab:80 },
  { nome:"Haas VF-18",        sub:"Haas · 2018",             score:72, downforce:74, estab:72 },
  { nome:"Williams FW43B",    sub:"Williams · 2021",         score:66, downforce:68, estab:70 },
  // 2022-2025
  { nome:"Red Bull RB19",     sub:"Red Bull · 2023",         score:98, downforce:98, estab:97 },
  { nome:"McLaren MCL38",     sub:"McLaren · 2024",          score:91, downforce:91, estab:90 },
  { nome:"Mercedes W16",      sub:"Mercedes · 2025",         score:91, downforce:90, estab:93 },
  { nome:"Ferrari F1-75",     sub:"Ferrari · 2022",          score:88, downforce:92, estab:80 },
  { nome:"Aston Martin AMR23",sub:"Aston Martin · 2023",     score:80, downforce:82, estab:80 },
  { nome:"Williams FW46",     sub:"Williams · 2024",         score:75, downforce:76, estab:78 },
  { nome:"Alpine A522",       sub:"Alpine · 2022",           score:71, downforce:72, estab:74 },
  { nome:"Haas VF-25",        sub:"Haas · 2025",             score:52, downforce:56, estab:58 },
];

// ── MOTORES ──────────────────────────────
const motores = [
  // V10
  { nome:"Ferrari Tipo 049",  sub:"Ferrari · 2004",          score:93, potencia:96, durabi:84 },
  { nome:"Mercedes FO110H",   sub:"Mercedes/McLaren · 2005", score:92, potencia:94, durabi:88 },
  { nome:"Renault RS5",       sub:"Renault · 2005",          score:91, potencia:93, durabi:86 },
  { nome:"BMW P84",           sub:"BMW/Williams · 2004",     score:88, potencia:97, durabi:72 },
  { nome:"Honda RA000E",      sub:"Honda/BAR · 2004",        score:84, potencia:88, durabi:78 },
  { nome:"Ford Cosworth CR3", sub:"Ford/Jaguar · 2003",      score:80, potencia:82, durabi:80 },
  // V8
  { nome:"Mercedes FO108X",   sub:"Mercedes · 2012",         score:92, potencia:93, durabi:90 },
  { nome:"Renault RS27",      sub:"Renault · 2013",          score:91, potencia:92, durabi:88 },
  { nome:"Ferrari 056",       sub:"Ferrari · 2012",          score:89, potencia:91, durabi:86 },
  { nome:"BMW P86",           sub:"BMW · 2008",              score:86, potencia:93, durabi:74 },
  { nome:"Honda RA808E",      sub:"Honda · 2008",            score:81, potencia:84, durabi:78 },
  { nome:"Cosworth CA2010",   sub:"Cosworth · 2010",         score:77, potencia:76, durabi:82 },
  // V6
  { nome:"Mercedes M12E",     sub:"Mercedes · 2020",         score:96, potencia:96, durabi:94 },
  { nome:"Honda RA621H",      sub:"Honda/Red Bull · 2021",   score:93, potencia:94, durabi:90 },
  { nome:"Ferrari 065/6",     sub:"Ferrari · 2021",          score:87, potencia:89, durabi:85 },
  { nome:"Renault E-tech 20", sub:"Renault · 2020",          score:80, potencia:82, durabi:80 },
  { nome:"Honda RA615H",      sub:"Honda/McLaren · 2015",    score:55, potencia:62, durabi:52 },
  // 2022-2025
  { nome:"Honda RBPTH002",    sub:"Red Bull PT · 2023",      score:97, potencia:97, durabi:95 },
  { nome:"Mercedes M16",      sub:"Mercedes · 2025",         score:95, potencia:95, durabi:94 },
  { nome:"Ferrari 066/12",    sub:"Ferrari · 2025",          score:90, potencia:91, durabi:88 },
  { nome:"Renault E-tech RE25",sub:"Alpine · 2025",          score:75, potencia:78, durabi:74 },
];

// ── CORRIDAS ─────────────────────────────
const corridas = [
  { gp:"Bahrein",        pais:"🇧🇭", track:"bahrain",    chuva:0.10 },
  { gp:"Arábia Saudita", pais:"🇸🇦", track:"arabia",     chuva:0.05 },
  { gp:"Austrália",      pais:"🇦🇺", track:"australia",   chuva:0.35 },
  { gp:"Japão",          pais:"🇯🇵", track:"japao",       chuva:0.30 },
  { gp:"China",          pais:"🇨🇳", track:"china",       chuva:0.15 },
  { gp:"Mônaco",         pais:"🇲🇨", track:"monaco",      chuva:0.30 },
  { gp:"Canadá",         pais:"🇨🇦", track:"canada",      chuva:0.35 },
  { gp:"Espanha",        pais:"🇪🇸", track:"espanha",     chuva:0.10 },
  { gp:"Áustria",        pais:"🇦🇹", track:"austria",     chuva:0.30 },
  { gp:"Grã-Bretanha",   pais:"🇬🇧", track:"gb",          chuva:0.40 },
  { gp:"Bélgica",        pais:"🇧🇪", track:"belgica",     chuva:0.45 },
  { gp:"Hungria",        pais:"🇭🇺", track:"hungria",     chuva:0.15 },
  { gp:"Holanda",        pais:"🇳🇱", track:"holanda",     chuva:0.35 },
  { gp:"Itália",         pais:"🇮🇹", track:"italia",      chuva:0.10 },
  { gp:"Azerbaijão",     pais:"🇦🇿", track:"azerbaijao",  chuva:0.05 },
  { gp:"Singapura",      pais:"🇸🇬", track:"singapore",   chuva:0.50 },
  { gp:"Estados Unidos", pais:"🇺🇸", track:"eua",         chuva:0.15 },
  { gp:"México",         pais:"🇲🇽", track:"mexico",      chuva:0.10 },
  { gp:"Brasil",         pais:"🇧🇷", track:"brasil",      chuva:0.45 },
  { gp:"Las Vegas",      pais:"🇺🇸", track:"lasvegas",    chuva:0.05 },
  { gp:"Abu Dhabi",      pais:"🇦🇪", track:"abudhabi",    chuva:0.00 },
];

// ── GRID ADVERSÁRIOS ─────────────────────
const gridAdversarios = [
  { nome:"M. Schumacher '04", nac:"🇩🇪", score:97 },
  { nome:"Hamilton '20",      nac:"🇬🇧", score:95 },
  { nome:"Verstappen '23",    nac:"🇳🇱", score:96 },
  { nome:"Alonso '12",        nac:"🇪🇸", score:93 },
  { nome:"Vettel '13",        nac:"🇩🇪", score:92 },
  { nome:"Häkkinen '98",      nac:"🇫🇮", score:91 },
  { nome:"Räikkönen '07",     nac:"🇫🇮", score:89 },
  { nome:"Leclerc '24",       nac:"🇲🇨", score:87 },
  { nome:"Norris '24",        nac:"🇬🇧", score:86 },
  { nome:"Ricciardo '16",     nac:"🇦🇺", score:86 },
  { nome:"Rosberg '16",       nac:"🇩🇪", score:87 },
  { nome:"Sainz '24",         nac:"🇪🇸", score:84 },
  { nome:"Russell '24",       nac:"🇬🇧", score:82 },
  { nome:"Pérez '22",         nac:"🇲🇽", score:83 },
  { nome:"Button '09",        nac:"🇬🇧", score:85 },
  { nome:"Webber '10",        nac:"🇦🇺", score:84 },
  { nome:"Bottas '19",        nac:"🇫🇮", score:83 },
  { nome:"Gasly '20",         nac:"🇫🇷", score:77 },
];

// ── EVENTOS NARRATIVOS ───────────────────
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

// ── TRAÇADOS SVG ─────────────────────────
const tracks = {
  bahrain:    `<svg viewBox="0 0 80 56" fill="none"><path d="M10 44 L10 30 Q10 24 16 24 L30 24 Q36 24 36 18 L36 10 Q36 6 40 6 L60 6 Q66 6 66 12 L66 20 Q66 26 60 26 L54 26 Q50 26 50 30 L50 38 Q50 44 44 44 L16 44 Q10 44 10 38" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  arabia:     `<svg viewBox="0 0 80 56" fill="none"><path d="M8 48 L8 16 Q8 8 16 8 L50 8 Q58 8 58 16 L58 22 Q58 28 52 28 L44 28 Q38 28 38 34 L38 40 Q38 46 44 46 L70 46 Q74 46 74 42 L74 36" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  australia:  `<svg viewBox="0 0 80 56" fill="none"><path d="M12 28 Q12 10 28 10 L52 10 Q64 10 68 20 L68 28 Q68 36 60 38 L48 40 Q44 40 44 44 L44 48 L28 48 Q20 48 16 42 Q12 38 12 34 Z" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/></svg>`,
  japao:      `<svg viewBox="0 0 80 56" fill="none"><path d="M10 30 Q10 10 26 10 Q34 10 34 18 Q34 26 26 26 Q18 26 18 34 Q18 46 32 48 L64 48 Q72 48 72 40 L72 28 Q72 20 64 18 L48 16" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  china:      `<svg viewBox="0 0 80 56" fill="none"><path d="M10 46 L10 30 L30 30 L30 10 Q30 6 36 6 L60 6 Q66 6 68 12 L70 22 Q70 30 62 32 L50 34 Q44 34 44 40 L44 48 L16 48 Q10 48 10 46" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  monaco:     `<svg viewBox="0 0 80 56" fill="none"><path d="M12 46 L12 36 Q12 28 18 24 L28 18 Q34 14 34 8 L54 8 Q62 8 66 14 L70 22 Q72 30 66 36 L58 42 Q52 46 44 46 Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  canada:     `<svg viewBox="0 0 80 56" fill="none"><path d="M10 46 L10 20 Q10 10 20 10 L40 10 L40 24 L60 24 Q70 24 70 34 L70 46 L40 46 L40 38 L24 38 L24 46 Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  espanha:    `<svg viewBox="0 0 80 56" fill="none"><path d="M8 42 L8 20 Q8 10 18 10 L52 10 Q62 10 64 20 L66 30 Q66 38 58 40 L42 42 L42 48 L16 48 Q8 48 8 44" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  austria:    `<svg viewBox="0 0 80 56" fill="none"><path d="M14 42 Q10 34 12 24 Q14 12 26 10 L50 10 Q60 10 66 18 Q72 26 70 36 Q68 46 56 48 L32 50 Q20 50 14 42" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  gb:         `<svg viewBox="0 0 80 56" fill="none"><path d="M14 34 Q10 26 14 18 Q20 8 32 8 L56 8 Q66 8 68 18 Q70 28 62 36 L50 44 Q44 48 36 46 L28 42 Q20 40 14 34" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  belgica:    `<svg viewBox="0 0 80 56" fill="none"><path d="M8 30 Q8 16 18 10 L34 8 Q42 8 46 16 L50 24 Q54 30 62 28 L72 26 L72 38 Q72 48 62 50 L36 52 Q20 52 12 44 Q8 40 8 36 Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  hungria:    `<svg viewBox="0 0 80 56" fill="none"><path d="M10 44 L10 28 Q10 20 18 16 L28 12 Q36 8 44 14 L52 20 Q58 24 66 22 L72 20 L72 36 Q72 44 64 46 L40 48 Q28 50 18 46 Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  holanda:    `<svg viewBox="0 0 80 56" fill="none"><path d="M12 40 Q8 30 10 20 Q14 8 28 8 L52 8 Q66 8 70 20 Q74 32 66 42 L52 50 L28 50 Q14 50 12 40" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  italia:     `<svg viewBox="0 0 80 56" fill="none"><path d="M10 40 L10 16 Q10 8 20 8 L60 8 Q70 8 70 18 L70 28 Q70 36 62 36 L50 36 L50 46 L24 46 Q14 46 10 40" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  azerbaijao: `<svg viewBox="0 0 80 56" fill="none"><path d="M10 46 L10 14 Q10 6 18 6 L44 6 Q52 6 52 14 L52 20 Q52 26 46 28 L36 30 Q30 30 30 36 L30 48 L16 48 Q10 48 10 46" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  singapore:  `<svg viewBox="0 0 80 56" fill="none"><path d="M8 46 L8 24 Q8 14 16 10 L36 8 L36 20 L56 20 Q66 20 68 28 L70 38 Q70 46 62 48 L24 50 Q12 50 8 46" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  eua:        `<svg viewBox="0 0 80 56" fill="none"><path d="M12 44 L10 22 Q10 10 22 10 L56 10 Q68 10 70 22 L70 34 Q70 44 58 46 L36 48 Q20 48 12 44" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  mexico:     `<svg viewBox="0 0 80 56" fill="none"><path d="M10 42 L10 20 Q10 8 22 8 L58 8 Q70 8 70 20 L70 36 Q70 46 58 48 L22 48 Q10 48 10 42" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  brasil:     `<svg viewBox="0 0 80 56" fill="none"><path d="M10 44 L10 28 Q10 16 20 10 L40 8 Q54 8 62 18 L68 28 Q72 38 64 46 L48 52 L28 50 Q14 50 10 44" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  lasvegas:   `<svg viewBox="0 0 80 56" fill="none"><path d="M10 46 L10 16 Q10 8 18 8 L62 8 Q70 8 70 16 L70 40 Q70 48 62 48 L38 48 L38 38 L22 38 L22 48 Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  abudhabi:   `<svg viewBox="0 0 80 56" fill="none"><path d="M10 40 L10 24 Q10 12 22 10 L44 8 Q58 8 64 18 L68 28 L68 38 Q60 48 48 48 L28 46 L20 42 Q10 40 10 38" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
};

// ── SISTEMA DE PONTOS F1 ─────────────────
const PTS = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1];