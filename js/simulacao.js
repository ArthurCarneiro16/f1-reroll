// ═══════════════════════════════════════
// F1 MANAGER — SIMULACAO.JS
// Motor de corrida e campeonato
// ═══════════════════════════════════════

function scoreIndividual(piloto, chassi, motor, corrida, isDecisiva) {
  const choveu = Math.random() < corrida.chuva
  const bonusChuva    = choveu ? (piloto.chuva - 75) * 0.18 : 0
  const bonusPressao  = isDecisiva ? (piloto.pressao - 80) * 0.12 : 0

  let bonusCircuito = 0
  if (corrida.perfil === 'tecnico') {
    bonusCircuito = (piloto.quali - 80) * 0.08 + (chassi.estab - 80) * 0.06
  } else if (corrida.perfil === 'potencia') {
    bonusCircuito = (motor.potencia - 80) * 0.10
  } else if (corrida.perfil === 'resistencia') {
    bonusCircuito = (motor.durabi - 80) * 0.08 + (piloto.pneus - 80) * 0.05
  }

  const scorePiloto = piloto.corrida + bonusChuva + bonusPressao + bonusCircuito
  const scoreCarro  = chassi.score * 0.55 + motor.score * 0.45
  const variancia   = (Math.random() * 24) - 12
  const scoreFinal  = scorePiloto * 0.40 + scoreCarro * 0.60 + variancia
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

  const resultA = scoreIndividual(chosen.p1, chosen.chassi, chosen.motor, corrida, isDecisiva)
  const resultB = scoreIndividual(chosen.p2, chosen.chassi, chosen.motor, corrida, isDecisiva)

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

  let evento = ''
  const poolCircuito = evCircuito[corrida.perfil] || []
  const temEventoCircuito = poolCircuito.length > 0 && Math.random() < 0.40

  if (temEventoCircuito) {
    evento = poolCircuito[Math.floor(Math.random() * poolCircuito.length)]
  } else if (Math.random() < 0.65) {
    const evPool = dnf ? evD : win ? evW : evO
    evento = evPool[Math.floor(Math.random() * evPool.length)]
  }

  return { corrida, pFrente, pAtras, posFrente, posAtras, win, dnf, choveu: resultA.choveu, evento }
}

function renderCorrida(resultado, indice) {
  const { corrida, pFrente, pAtras, posFrente, posAtras, win, dnf, choveu, evento } = resultado
  const row = document.createElement('div')
  row.className = 'corrida-row'

  const cls = dnf ? 'r-loss' : win ? 'r-win' : posFrente <= 3 ? 'r-ok' : ''
  const resTexto = dnf
    ? `P${posFrente}/DNF ✗`
    : win
      ? `P${posFrente}/P${posAtras} ✓`
      : `P${posFrente}/P${posAtras}`

  const perfilLabels = {
    tecnico:    '⚙️ Técnico',
    potencia:   '💨 Potência',
    resistencia:'🏁 Resistência',
    misto:      '',
  }
  const perfilBadge = perfilLabels[corrida.perfil]
    ? `<span class="corrida-perfil">${perfilLabels[corrida.perfil]}</span>`
    : ''

  row.innerHTML = `
    <div class="corrida-top">
      <div class="corrida-track" style="color: var(--text-muted)">
        ${tracks[corrida.track] || ''}
      </div>
      <div class="corrida-info">
        <div class="corrida-nome-row">
          <span class="corrida-flag">${corrida.pais}</span>
          <span class="corrida-nome">${corrida.gp}</span>
          ${perfilBadge}
          ${choveu ? ' 🌧️' : ''}
        </div>
        <div class="corrida-pilotos">
          ${pFrente.nome}: P${posFrente}
          · ${pAtras.nome}: P${posAtras}
          ${dnf ? ' (DNF)' : ''}
        </div>
        ${evento ? `<div class="corrida-evento">${evento}</div>` : ''}
      </div>
      <span class="corrida-resultado ${cls}">${resTexto}</span>
    </div>
  `

  setTimeout(() => {
    row.classList.add('visible')
    row.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, indice * 260)

  return row
}

function simularTemporada() {
  if (!chosen.p1 || !chosen.p2 || !chosen.chassi || !chosen.motor) return

  irParaTela('temporada')
  telaSimulada = true

  const inputNome = document.getElementById('input-nome-equipe')
  const nomeNossaEquipe = inputNome?.value.trim() || 'Nossa Equipe'

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

  equipes[nomeNossaEquipe] = {
    pilotos: [chosen.p1, chosen.p2],
    pts: 0,
    nossa: true
  }

  const campPilotos = {}
  gridAdversarios.forEach(p => {
    campPilotos[p.nome + ` '${p.ano}`] = 0
  })
  campPilotos[nomeP1] = 0
  campPilotos[nomeP2] = 0

  let vitorias = 0, podeio = 0, abandonos = 0, pontos = 0

  const resultados = corridas.map((c, i) => simularCorrida(c, i, corridas.length, gridAdversarios))
  const lista = document.getElementById('corridas-list')

  resultados.forEach((r, i) => {
    lista.appendChild(renderCorrida(r, i))

    const ptsFrente = !r.dnf ? (PTS[r.posFrente - 1] || 0) : 0
    const ptsAtras  = !r.dnf ? (PTS[r.posAtras  - 1] || 0) : 0

    const nomeFrente = r.pFrente === chosen.p1 ? nomeP1 : nomeP2
    const nomeAtras  = r.pAtras  === chosen.p1 ? nomeP1 : nomeP2

    campPilotos[nomeFrente] = (campPilotos[nomeFrente] || 0) + ptsFrente
    campPilotos[nomeAtras]  = (campPilotos[nomeAtras]  || 0) + ptsAtras

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
  setTimeout(() => {
    mostrarCardFinal(
      vitorias, podeio, abandonos, pontos,
      campPilotos, equipes,
      nomeP1, nomeP2,
      nomeNossaEquipe,
      gridAdversarios
    )
    // Botão exibido com transição suave (ver estilo #btn-ver-resultado-final.show no CSS)
    document.getElementById('btn-ver-resultado-final').classList.add('show')
  }, delay)
}

function animarContador(elemento, valorFinal, duracao = 1200) {
  const inicio = performance.now()
  const update = (agora) => {
    const progresso = Math.min((agora - inicio) / duracao, 1)
    const ease = 1 - Math.pow(1 - progresso, 3)
    elemento.textContent = Math.round(ease * valorFinal)
    if (progresso < 1) requestAnimationFrame(update)
  }
  requestAnimationFrame(update)
}

let contadoresPendentes = null
let contadoresJaAnimados = false

function mostrarCardFinal(vitorias, podeio, abandonos, pontos, campPilotos, equipes, nomeP1, nomeP2, nomeNossaEquipe, gridAdversarios) {
  // irParaTela('resultado') // Comentado para não mudar de tela automaticamente
  telaResultado = true

  document.getElementById('card-final').classList.add('show')

  const gridOrdenadoTemp = Object.entries(campPilotos).sort((a, b) => b[1] - a[1])
  const posP1 = gridOrdenadoTemp.findIndex(([nome]) => nome === nomeP1) + 1
  const posP2 = gridOrdenadoTemp.findIndex(([nome]) => nome === nomeP2) + 1

  const constOrdenadosFull = Object.entries(equipes).sort((a, b) => b[1].pts - a[1].pts)
  const posEquipe = constOrdenadosFull.findIndex(([n, e]) => e.nossa) + 1
  const noTop3 = posEquipe <= 3

  const medals = ['🥇', '🥈', '🥉']

  const top3 = constOrdenadosFull.slice(0, 3)
  document.getElementById('const-list').innerHTML = top3.map(([nome, info], i) => {
    const nomes = info.pilotos.filter(Boolean).map(p => p.nome).join(' · ')
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

  const nossaEquipeInfo = constOrdenadosFull.find(([n, e]) => e.nossa)
  document.getElementById('final-titulo').innerHTML = noTop3 ? '' : `
    <div class="nossa-equipe-destaque">
      <span class="nossa-equipe-pos">${posEquipe}º</span>
      <div class="nossa-equipe-info">
        <div class="nossa-equipe-nome">${nomeNossaEquipe}</div>
        <div class="nossa-equipe-pts">${nossaEquipeInfo ? nossaEquipeInfo[1].pts : pontos} pts</div>
      </div>
    </div>
  `

  document.getElementById('final-desc').innerHTML = `
    <div class="final-pilotos-pos">
      <div class="final-piloto-pos">
        <span class="final-piloto-num">${posP1}º</span>
        <span class="final-piloto-nome">${nomeP1.split(" '")[0]}</span>
      </div>
      <span class="final-piloto-sep">·</span>
      <div class="final-piloto-pos">
        <span class="final-piloto-num">${posP2}º</span>
        <span class="final-piloto-nome">${nomeP2.split(" '")[0]}</span>
      </div>

    </div>
  `

  const ritmo = Math.min(99, Math.round((chosen.p1.corrida + chosen.p2.corrida) / 2 * 0.88 + Math.random() * 8))
  const pit   = Math.min(99, Math.round(55 + (chosen.p1.score - 70) * 0.45 + Math.random() * 12))
  const conf  = Math.min(99, Math.round(chosen.motor.durabi * 0.88 + Math.random() * 10))
  const dev   = Math.min(99, Math.round(chosen.chassi.downforce * 0.78 + Math.random() * 14))

  document.getElementById('final-stats').innerHTML = `
    <div class="stat-item"><div class="stat-val" id="cnt-vitorias">0</div><div class="stat-lbl">vitórias</div></div>
    <div class="stat-item"><div class="stat-val" id="cnt-podeio">0</div><div class="stat-lbl">pódios</div></div>
    <div class="stat-item"><div class="stat-val" id="cnt-pontos">0</div><div class="stat-lbl">pontos</div></div>
    <div class="stat-item"><div class="stat-val" id="cnt-abandonos">0</div><div class="stat-lbl">dnf</div></div>
  `

  contadoresPendentes = {
    vitorias: parseInt(vitorias),
    podeio: parseInt(podeio),
    pontos: parseInt(pontos),
    abandonos: parseInt(abandonos)
  }
  contadoresJaAnimados = false

  document.getElementById('final-bars').innerHTML = [
    ['Ritmo de corrida', ritmo],
    ['Pit strategy',     pit],
    ['Confiabilidade',   conf],
    ['Desenvolvimento',  dev],
  ].map(([label, val]) => `
    <div class="perf-row">
      <span class="perf-label">${label}</span>
      <div class="perf-track"><div class="perf-fill" data-val="${val}"></div></div>
      <span class="perf-val">${val}</span>
    </div>
  `).join('')

  const gridOrdenado = gridOrdenadoTemp.slice(0, 20)
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

  document.getElementById('btn-nova').classList.add('show')
  document.getElementById('btn-rolar').disabled = false
}

document.getElementById('btn-simular').addEventListener('click', simularTemporada)

function toggleVerMais() {
  const wrap = document.getElementById('final-bars-wrap')
  const btn  = document.getElementById('final-ver-mais')
  const aberto = wrap.classList.toggle('aberto')
  btn.classList.toggle('aberto', aberto)
  btn.textContent = aberto ? '▴ fechar análise' : '▾ ver análise da equipe'

  if (aberto) {
    setTimeout(() => {
      document.querySelectorAll('.perf-fill').forEach(el => {
        el.style.width = el.dataset.val + '%'
      })
    }, 50)

    if (!contadoresJaAnimados && contadoresPendentes) {
      contadoresJaAnimados = true
      animarContador(document.getElementById('cnt-vitorias'),  contadoresPendentes.vitorias,  1000)
      animarContador(document.getElementById('cnt-podeio'),    contadoresPendentes.podeio,    1200)
      animarContador(document.getElementById('cnt-pontos'),    contadoresPendentes.pontos,    1500)
      animarContador(document.getElementById('cnt-abandonos'), contadoresPendentes.abandonos, 800)
    }
  }
}