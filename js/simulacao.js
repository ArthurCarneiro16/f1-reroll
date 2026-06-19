// ═══════════════════════════════════════
// F1 MANAGER — SIMULACAO.JS
// Motor de corrida e campeonato
// ═══════════════════════════════════════

function scoreIndividual(piloto, chassi, motor, chuvaProbabilidade, isDecisiva) {
  const choveu = Math.random() < chuvaProbabilidade
  const bonusChuva = choveu ? (piloto.chuva - 75) * 0.18 : 0
  const bonusPressao = isDecisiva ? (piloto.pressao - 80) * 0.12 : 0
  const scorePiloto = piloto.corrida + bonusChuva + bonusPressao
  const scoreCarro = chassi.score * 0.55 + motor.score * 0.45
  const variancia = (Math.random() * 24) - 12
  const scoreFinal = scorePiloto * 0.40 + scoreCarro * 0.60 + variancia
  return { score: scoreFinal, choveu }
}

function scoreParaPosicao(meuScore, scoresAdversarios) {
  const posicao = scoresAdversarios.filter(s => s > meuScore).length + 1
  return Math.max(1, Math.min(20, posicao))
}

function simularCorrida(corrida, indice, totalCorridas, gridAdversarios) {
  const isDecisiva = indice >= totalCorridas - 5

  const scoresAdversarios = gridAdversarios.map(a =>
    a.score + (Math.random() * 20 - 10)
  )

  const resultA = scoreIndividual(chosen.p1, chosen.chassi, chosen.motor, corrida.chuva, isDecisiva)
  const resultB = scoreIndividual(chosen.p2, chosen.chassi, chosen.motor, corrida.chuva, isDecisiva)

  const [pFrente, pAtras, sFrente, sAtras] = resultA.score >= resultB.score
    ? [chosen.p1, chosen.p2, resultA.score, resultB.score]
    : [chosen.p2, chosen.p1, resultB.score, resultA.score]

  let posFrente = scoreParaPosicao(sFrente, scoresAdversarios)
  let posAtras  = scoreParaPosicao(sAtras,  scoresAdversarios)

  if (posAtras <= posFrente) {
    posAtras = Math.min(20, posFrente + Math.floor(Math.random() * 3) + 1)
  }

  const chanceDNF = (1 - chosen.motor.durabi / 100) * 0.22
  const dnf = Math.random() < chanceDNF
  if (dnf) posAtras = Math.floor(Math.random() * 7) + 14

  const win = posFrente === 1 && !dnf
  const evPool = dnf ? evD : win ? evW : evO
  const evento = Math.random() < 0.65
    ? evPool[Math.floor(Math.random() * evPool.length)]
    : ''

  return { corrida, pFrente, pAtras, posFrente, posAtras, win, dnf, choveu: resultA.choveu, evento }
}

function renderCorrida(resultado, indice) {
  const { corrida, pFrente, pAtras, posFrente, posAtras, win, dnf, choveu, evento } = resultado
  const row = document.createElement('div')
  row.className = 'corrida-row'

  const cls = dnf ? 'r-loss' : win ? 'r-win' : posFrente <= 5 ? 'r-ok' : ''
  const resTexto = dnf
    ? `P${posFrente}/ABN ✗`
    : win
      ? `P${posFrente}/P${posAtras} ✓`
      : `P${posFrente}/P${posAtras}`

  row.innerHTML = `
    <div class="corrida-top">
      <div class="corrida-track" style="color: var(--text-muted)">
        ${tracks[corrida.track] || ''}
      </div>
      <div class="corrida-info">
        <div class="corrida-nome-row">
          <span class="corrida-flag">${corrida.pais}</span>
          <span class="corrida-nome">${corrida.gp}</span>
          ${choveu ? ' 🌧️' : ''}
        </div>
        <div class="corrida-pilotos">
          ${pFrente.nome}: P${posFrente}
          · ${pAtras.nome}: P${posAtras}
          ${dnf ? ' (ABN)' : ''}
        </div>
        ${evento ? `<div class="corrida-evento">${evento}</div>` : ''}
      </div>
      <span class="corrida-resultado ${cls}">${resTexto}</span>
    </div>
  `

  setTimeout(() => row.classList.add('visible'), indice * 260)
  return row
}

function simularTemporada() {
  if (!chosen.p1 || !chosen.p2 || !chosen.chassi || !chosen.motor) return

  // Item 2 adicionado aqui
  irParaTela('temporada')

  // pega nome da equipe — usa o que o jogador digitou ou "Nossa Equipe"
  const inputNome = document.getElementById('input-nome-equipe')
  const nomeNossaEquipe = inputNome?.value.trim() || 'Nossa Equipe'

  // Item 1 adicionado aqui
  document.getElementById('btn-simular').disabled = true
  document.getElementById('btn-rolar').disabled = true
  
  document.getElementById('seed-txt').textContent =
    'seed #' + Math.random().toString(36).substr(2, 5).toUpperCase()
  document.getElementById('corridas-list').innerHTML = ''
  document.getElementById('card-final').classList.remove('show')
  document.getElementById('campanha').classList.add('show')
  document.getElementById('btn-nova').classList.remove('show')

  const nomeP1 = chosen.p1.nome + ` '${chosen.p1.ano}`
  const nomeP2 = chosen.p2.nome + ` '${chosen.p2.ano}`

  // ── MONTA GRID SEM DUPLICATAS ──
  const pilotosDisponiveis = pilotos.filter(p =>
    !(p.nome === chosen.p1.nome && p.ano === chosen.p1.ano) &&
    !(p.nome === chosen.p2.nome && p.ano === chosen.p2.ano)
  )

  const porNome = {}
  pilotosDisponiveis.forEach(p => {
    if (!porNome[p.nome] || p.score > porNome[p.nome].score) {
      porNome[p.nome] = p
    }
  })
  const semDuplicatas = Object.values(porNome)

  const gridAdversarios = [...semDuplicatas]
    .sort(() => Math.random() - 0.5)
    .slice(0, 18)

  // ── 9 EQUIPES ADVERSÁRIAS DE 2 PILOTOS CADA ──
  const nomesEquipes = [
    'Scuderia Alpha', 'Team Omega',   'Apex Racing',
    'Veloce F1',      'Storm GP',     'Circuit Works',
    'Delta Racing',   'Nova Team',    'Frontier F1'
  ]

  const equipes = {}
  nomesEquipes.forEach((nome, i) => {
    equipes[nome] = {
      pilotos: [gridAdversarios[i * 2], gridAdversarios[i * 2 + 1]],
      pts: 0
    }
  })

  // nossa equipe com nome personalizado
  equipes[nomeNossaEquipe] = {
    pilotos: [chosen.p1, chosen.p2],
    pts: 0,
    nossa: true
  }

  // ── ACUMULADORES DE PILOTOS ──
  const campPilotos = {}
  gridAdversarios.forEach(p => {
    campPilotos[p.nome + ` '${p.ano}`] = 0
  })
  campPilotos[nomeP1] = 0
  campPilotos[nomeP2] = 0

  let vitorias = 0, podeio = 0, abandonos = 0, pontos = 0

  // ── SIMULA AS 21 CORRIDAS ──
  const resultados = corridas.map((c, i) => simularCorrida(c, i, corridas.length, gridAdversarios))
  const lista = document.getElementById('corridas-list')

  resultados.forEach((r, i) => {
    lista.appendChild(renderCorrida(r, i))

    // pontos dos nossos pilotos
    const ptsFrente = !r.dnf ? (PTS[r.posFrente - 1] || 0) : 0
    const ptsAtras  = !r.dnf ? (PTS[r.posAtras  - 1] || 0) : 0

    const nomeFrente = r.pFrente === chosen.p1 ? nomeP1 : nomeP2
    const nomeAtras  = r.pAtras  === chosen.p1 ? nomeP1 : nomeP2

    campPilotos[nomeFrente] = (campPilotos[nomeFrente] || 0) + ptsFrente
    campPilotos[nomeAtras]  = (campPilotos[nomeAtras]  || 0) + ptsAtras

    // pontos dos adversários — simula corrida por corrida
    const advNaCorrida = [...gridAdversarios]
      .map(a => ({ ...a, scoreCorr: a.score + (Math.random() * 20 - 10) }))
      .sort((a, b) => b.scoreCorr - a.scoreCorr)

    advNaCorrida.forEach((a, idx) => {
      const pts = PTS[idx] || 0
      const nomeAdv = a.nome + ` '${a.ano}`
      campPilotos[nomeAdv] = (campPilotos[nomeAdv] || 0) + pts
    })

    if (r.win)                      vitorias++
    if (r.posFrente <= 3 && !r.dnf) podeio++
    if (r.dnf)                      abandonos++
    pontos += ptsFrente + ptsAtras
  })

  // ── CALCULA PONTOS DOS CONSTRUTORES PELA SOMA DOS 2 PILOTOS ──
  Object.entries(equipes).forEach(([nomeEq, eq]) => {
    if (eq.nossa) {
      eq.pts = (campPilotos[nomeP1] || 0) + (campPilotos[nomeP2] || 0)
    } else {
      eq.pilotos.forEach(p => {
        if (p) eq.pts += campPilotos[p.nome + ` '${p.ano}`] || 0
      })
    }
  })

  const delay = resultados.length * 260 + 500
  setTimeout(() => mostrarCardFinal(
    vitorias, podeio, abandonos, pontos,
    campPilotos, equipes,
    nomeP1, nomeP2,
    nomeNossaEquipe,
    gridAdversarios
  ), delay)
}

// Item 3 modificado diretamente na assinatura da função original
function mostrarCardFinal(vitorias, podeio, abandonos, pontos, campPilotos, equipes, nomeP1, nomeP2, nomeNossaEquipe, gridAdversarios) {
  // Item 4 adicionado aqui
  irParaTela('resultado')

  document.getElementById('card-final').classList.add('show')

  // posição real no campeonato de pilotos
  const gridOrdenadoTemp = Object.entries(campPilotos)
    .sort((a, b) => b[1] - a[1])

  const posP1 = gridOrdenadoTemp.findIndex(([nome]) => nome === nomeP1) + 1
  const posP2 = gridOrdenadoTemp.findIndex(([nome]) => nome === nomeP2) + 1
  const melhorPos = Math.min(posP1, posP2)
  const melhorPiloto = posP1 <= posP2 ? nomeP1 : nomeP2

  let titulo, desc
  if (melhorPos === 1)      { titulo = 'Campeão mundial 🏆';       desc = `${melhorPiloto} dominou a temporada com ${pontos} pts e ${vitorias} vitórias.` }
  else if (melhorPos === 2) { titulo = 'Vice-campeão 🥈';           desc = `${vitorias} vitórias e ${podeio} pódios. Ficou a um passo do título.` }
  else if (melhorPos === 3) { titulo = 'Pódio no campeonato 🥉';   desc = `${vitorias} vitórias e ${podeio} pódios. Temporada sólida.` }
  else if (melhorPos <= 6)  { titulo = `${melhorPos}º no campeonato`; desc = `${pontos} pts no total. Competitivo mas sem brilho suficiente.` }
  else if (melhorPos <= 10) { titulo = `${melhorPos}º no campeonato`; desc = `Meio do grid. Pontuou em algumas corridas mas ficou longe da briga.` }
  else                      { titulo = `${melhorPos}º no campeonato`; desc = `Temporada difícil. Combinação desequilibrada para brigar na frente.` }

  document.getElementById('final-titulo').textContent = titulo
  document.getElementById('final-desc').textContent   = desc

  document.getElementById('final-stats').innerHTML = `
    <div class="stat-item">
      <div class="stat-val">${pontos}</div>
      <div class="stat-lbl">pontos</div>
    </div>
    <div class="stat-item">
      <div class="stat-val">${vitorias}</div>
      <div class="stat-lbl">vitórias</div>
    </div>
    <div class="stat-item">
      <div class="stat-val">${podeio}</div>
      <div class="stat-lbl">pódios</div>
    </div>
    <div class="stat-item">
      <div class="stat-val">${abandonos}</div>
      <div class="stat-lbl">dnf</div>
    </div>
  `

  const ritmo = Math.min(99, Math.round((chosen.p1.corrida + chosen.p2.corrida) / 2 * 0.88 + Math.random() * 8))
  const pit   = Math.min(99, Math.round(55 + (chosen.p1.score - 70) * 0.45 + Math.random() * 12))
  const conf  = Math.min(99, Math.round(chosen.motor.durabi * 0.88 + Math.random() * 10))
  const dev   = Math.min(99, Math.round(chosen.chassi.downforce * 0.78 + Math.random() * 14))

  document.getElementById('final-bars').innerHTML = [
    ['Ritmo de corrida', ritmo],
    ['Pit strategy',     pit],
    ['Confiabilidade',   conf],
    ['Desenvolvimento',  dev],
  ].map(([label, val], i) => `
    <div class="perf-row">
      <span class="perf-label">${label}</span>
      <div class="perf-track">
        <div class="perf-fill" id="perf-${i}"></div>
      </div>
      <span class="perf-val">${val}</span>
    </div>
  `).join('')

  setTimeout(() => {
    [ritmo, pit, conf, dev].forEach((val, i) => {
      document.getElementById('perf-' + i).style.width = val + '%'
    })
  }, 100)

  // ── CAMPEONATO DE PILOTOS — TOP 20 ──
  const gridOrdenado = Object.entries(campPilotos)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 20)

  document.getElementById('grid-list').innerHTML = gridOrdenado.map(([nome, pts], i) => {
    const pos = i + 1
    const isNosso = nome === nomeP1 || nome === nomeP2
    const posLabel = pos === 1 ? '🥇' : pos === 2 ? '🥈' : pos === 3 ? '🥉' : pos
    const medalCls = pos === 1 ? 'pos-1' : pos === 2 ? 'pos-2' : pos === 3 ? 'pos-3' : ''

    const nomeBase = nome.replace(/ '\d+$/, '')
    const adv = gridAdversarios.find(a => a.nome === nomeBase)
    const nac = nome === nomeP1 ? chosen.p1.nac
              : nome === nomeP2 ? chosen.p2.nac
              : adv ? adv.nac : '🏁'

    return `
      <div class="grid-row ${medalCls} ${isNosso ? 'nossa-equipe' : ''}">
        <span class="grid-pos">${posLabel}</span>
        <span class="grid-nac">${nac}</span>
        <span class="grid-nome">
          ${nome}
          ${isNosso ? `<span class="grid-tag">${nomeNossaEquipe.toUpperCase()}</span>` : ''}
        </span>
        <span class="grid-pts">${pts} pts</span>
      </div>
    `
  }).join('')

  // ── TOP 3 CONSTRUTORES ──
  const constOrdenados = Object.entries(equipes)
    .sort((a, b) => b[1].pts - a[1].pts)
    .slice(0, 3)

  const medals = ['🥇', '🥈', '🥉']

  document.getElementById('const-list').innerHTML = constOrdenados.map(([nome, info], i) => {
    const nomes = info.pilotos
      .filter(Boolean)
      .map(p => p.nome)
      .join(' · ')

    const isNossa = info.nossa === true

    return `
      <div class="const-row ${isNossa ? 'nossa-equipe' : ''}">
        <span class="const-medal">${medals[i]}</span>
        <div class="const-info">
          <div class="const-nome">${nome}</div>
          <div class="const-pilotos">${nomes}</div>
        </div>
        <span class="const-pts">${info.pts} pts</span>
      </div>
    `
  }).join('')

  document.getElementById('btn-nova').classList.add('show')
  document.getElementById('btn-rolar').disabled = false
}

document.getElementById('btn-simular').addEventListener('click', simularTemporada)