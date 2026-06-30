// ═══════════════════════════════════════
// F1 MANAGER — ROLETA.JS
// Lógica de sorteio e raridade
// ═══════════════════════════════════════

// ── ESTADO DO JOGO ───────────────────────
const chosen = { p1: null, p2: null, chassi: null, motor: null }
const locked  = { p1: false, p2: false, chassi: false, motor: false }
let phase = 'idle'
let spinningCount = 0
let boostAtivo = false
let boostUsado = false
let telaSimulada = false
let telaResultado = false
let rolagemCount = 0
const MAX_ROLAGENS = 3

// ── FUNÇÕES AUXILIARES ───────────────────

function poolOf(key) {
  if (key === 'p1' || key === 'p2') return pilotos
  if (key === 'chassi') return chassis
  return motores
}

function toStars(score) {
  const n = score >= 95 ? 5 : score >= 85 ? 4 : score >= 72 ? 3 : score >= 60 ? 2 : 1
  return '★'.repeat(n) + '☆'.repeat(5 - n)
}

function rand(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function weightedRand(arr) {
  const weights = arr.map(item => {
    if (boostAtivo) {
      if (item.score >= 95) return 30
      if (item.score >= 85) return 50
      if (item.score >= 72) return 15
      return 5
    } else {
      if (item.score >= 95) return 5
      if (item.score >= 85) return 15
      if (item.score >= 72) return 30
      return 50
    }
  })
  const total = weights.reduce((a, b) => a + b, 0)
  let r = Math.random() * total
  for (let i = 0; i < arr.length; i++) {
    r -= weights[i]
    if (r <= 0) return arr[i]
  }
  return arr[arr.length - 1]
}

function randExcluding(arr, exclude) {
  const disponiveis = exclude
    ? arr.filter(p => !(p.nome === exclude.nome && p.ano === exclude.ano))
    : arr
  return weightedRand(disponiveis)
}

function getRarity(score, nome) {
  if (nome === 'Ayrton Senna') return { label: 'ETERNO', cls: 'rarity-eternal' }
  if (score >= 95) return { label: 'LENDÁRIO', cls: 'rarity-legendary' }
  if (score >= 85) return { label: 'RARO',     cls: 'rarity-rare' }
  if (score >= 72) return { label: 'INCOMUM',  cls: 'rarity-uncommon' }
  return                  { label: 'COMUM',    cls: 'rarity-common' }
}

function toggleBoost() {
  if (boostUsado) return
  boostAtivo = !boostAtivo
  const btn  = document.getElementById('btn-boost')
  const hint = document.getElementById('boost-hint')
  if (boostAtivo) {
    btn.classList.add('ativo')
    btn.textContent = '⚡ Boost Ativado!'
    hint.textContent = 'próxima rolagem garante itens raros ou lendários'
    hint.style.color = '#FBBF24'
  } else {
    btn.classList.remove('ativo')
    btn.textContent = '⚡ Ativar Boost'
    hint.textContent = 'aumenta chance de itens raros por 1 rolagem'
    hint.style.color = ''
  }
}

function consumirBoost() {
  if (boostAtivo) {
    boostUsado = true
    boostAtivo = false
    const btn  = document.getElementById('btn-boost')
    const hint = document.getElementById('boost-hint')
    if (btn)  { btn.classList.remove('ativo'); btn.classList.add('usado'); btn.textContent = '⚡ Boost Usado' }
    if (hint) { hint.textContent = 'boost disponível na próxima equipe'; hint.style.color = '' }
  }
}

function resetarBoost() {
  boostAtivo = false
  boostUsado = false
  const btn  = document.getElementById('btn-boost')
  const hint = document.getElementById('boost-hint')
  if (btn)  { btn.classList.remove('ativo', 'usado'); btn.textContent = '⚡ Ativar Boost' }
  if (hint) { hint.textContent = 'aumenta chance de itens raros por 1 rolagem'; hint.style.color = '' }
}

// ── ATUALIZA VISUAL DO CARD ──────────────
function setCard(key, item) {
  const isDriver = key === 'p1' || key === 'p2'

  document.getElementById(key + '-nome').textContent =
    item.nome + (isDriver ? ` '${item.ano}` : '')

  document.getElementById(key + '-sub').textContent =
    isDriver ? `${item.nac} · Score ${item.score}` : item.sub

  document.getElementById(key + '-stars').textContent = ''

  const card = document.getElementById('card-' + key)
  let badge = card.querySelector('.rarity-badge')
  if (!badge) {
    badge = document.createElement('span')
    card.appendChild(badge)
  }
  const rarity = getRarity(item.score, item.nome)
  badge.className = 'rarity-badge ' + rarity.cls
  badge.textContent = rarity.label

  const attrsEl = document.getElementById(key + '-attrs')
  if (isDriver) {
    attrsEl.innerHTML = `
      ${attrBar('corrida', item.corrida)}
      ${attrBar('quali',   item.quali)}
      ${attrBar('chuva',   item.chuva, '#60A5FA')}
    `
  } else if (key === 'chassi') {
    attrsEl.innerHTML = `
      ${attrBar('downforce', item.downforce)}
      ${attrBar('estab.',    item.estab)}
    `
  } else {
    attrsEl.innerHTML = `
      ${attrBar('potência', item.potencia)}
      ${attrBar('durabi.',  item.durabi)}
    `
  }
}

function attrBar(label, value, color = '#E24B4A') {
  return `
    <div class="attr-row">
      <span class="attr-lbl">${label}</span>
      <div class="attr-track">
        <div class="attr-fill" style="width:${value}%; background:${color}"></div>
      </div>
      <span class="attr-num">${value}</span>
    </div>
  `
}

// ── ANIMAÇÃO DE SPIN ─────────────────────
function spinCard(key, finalItem, onDone) {
  const pool = poolOf(key)
  let ticks = 0
  const maxTicks = 16

  document.getElementById('card-' + key).classList.add('spinning')

  const interval = setInterval(() => {
    ticks++
    document.getElementById(key + '-nome').textContent = rand(pool).nome
    if (ticks >= maxTicks) {
      clearInterval(interval)
      chosen[key] = finalItem
      setCard(key, finalItem)
      document.getElementById('card-' + key).classList.remove('spinning')
      if (onDone) onDone()
    }
  }, 65)
}

// ── ATUALIZA VISUAL DOS CARDS ────────────
function updateCardStates() {
  const keys = ['p1', 'p2', 'chassi', 'motor']
  keys.forEach(key => {
    const card = document.getElementById('card-' + key)
    const btn  = document.getElementById('lock-' + key)
    card.classList.remove('active-choice', 'locked', 'spinning')
    btn.style.display = 'none'
    btn.classList.remove('locked-state')
    if (locked[key]) {
      card.classList.add('locked')
      btn.style.display = 'block'
      btn.textContent = 'travado ✓'
      btn.classList.add('locked-state')
      card.style.cursor = 'default'
      card.onclick = null
    } else if (phase === 'choosing') {
      card.classList.add('active-choice')
      btn.style.display = 'block'
      btn.textContent = 'travar'
      btn.disabled = false
      card.style.cursor = 'pointer'
      card.onclick = () => travar(key)
    } else {
      card.style.cursor = 'default'
      card.onclick = null
    }
  })
}

// ── ROLA OS SLOTS NÃO TRAVADOS ───────────
function rolarLivres(onDone) {
  const livres = ['p1', 'p2', 'chassi', 'motor'].filter(k => !locked[k])

  if (livres.length === 0) {
    if (onDone) onDone()
    return
  }

  spinningCount = livres.length

  const finais = {}
  // Sorteia P1 primeiro se estiver livre, para garantir exclusão no P2
  const ordemSorteiro = ['p1', 'chassi', 'motor', 'p2'].filter(k => livres.includes(k))
  ordemSorteiro.forEach(key => {
    const pool = poolOf(key)
    if (key === 'p2') {
      const excludir = finais['p1'] || chosen.p1
      finais[key] = randExcluding(pool, excludir)
    } else {
      finais[key] = weightedRand(pool)
    }
  })

  consumirBoost()

  livres.forEach(key => {
    spinCard(key, finais[key], () => {
      spinningCount--
      if (spinningCount === 0 && onDone) onDone()
    })
  })
}

// ── INICIA ROLAGEM ───────────────────────
function iniciarRolagem() {
  if (spinningCount > 0) return

  // Se já terminou o draft, reseta tudo e rola de novo
  if (phase === 'done') {
    resetarCards()
  }

  document.getElementById('btn-rolar').disabled = true
  document.getElementById('btn-simular').disabled = true

  rolagemCount++
  if (rolagemCount >= MAX_ROLAGENS) {
    document.getElementById('btn-rolar').disabled = true
  }
  atualizarHintRolagens()

  phase = 'idle'
  const keys = ['p1', 'p2', 'chassi', 'motor']
  keys.forEach(k => locked[k] = false)
  updateCardStates()
  setHint('Sorteando...')

  rolarLivres(() => {
    phase = 'choosing'
    updateCardStates()
    const restantes = keys.filter(k => !locked[k]).length
    setHint(`Escolha um item para travar (${restantes} restantes)`)
  })
}

// ── TRAVA UM SLOT ────────────────────────
function travar(key) {
  if (phase !== 'choosing') return
  if (locked[key]) return
  if (spinningCount > 0) return

  locked[key] = true
  updateCardStates()

  const livres = ['p1', 'p2', 'chassi', 'motor'].filter(k => !locked[k])

  if (livres.length === 0) {
    terminar()
    return
  }

  phase = 'idle'
  updateCardStates()
  setHint('Sorteando...')

  rolarLivres(() => {
    phase = 'choosing'
    updateCardStates()
    setHint(`Escolha mais um para travar (${livres.length} restantes)`)
  })
}

// ── FINALIZA SELEÇÃO ─────────────────────
function terminar() {
  phase = 'done'
  updateCardStates()
  const restantes = MAX_ROLAGENS - rolagemCount
  const msgRolagens = rolagemCount >= MAX_ROLAGENS
    ? 'Limite de rolagens atingido. Simule!'
    : `Equipe montada! ${restantes} rolagem(ns) restante(s).`
  setHint(msgRolagens)
  if (rolagemCount < MAX_ROLAGENS) {
    document.getElementById('btn-rolar').disabled = false
  }
  document.getElementById('btn-simular').disabled = false
}

// ── RESETA SÓ OS CARDS (sem trocar de tela) ──
function resetarCards() {
  const keys = ['p1', 'p2', 'chassi', 'motor']

  keys.forEach(key => {
    locked[key] = false
    chosen[key] = null

    const btn = document.getElementById('lock-' + key)
    btn.style.display = 'none'
    btn.classList.remove('locked-state')

    const card = document.getElementById('card-' + key)
    card.classList.remove('locked', 'active-choice', 'spinning')
    card.style.cursor = 'default'
    card.onclick = null

    const badge = card.querySelector('.rarity-badge')
    if (badge) badge.remove()

    document.getElementById(key + '-nome').textContent = '—'
    document.getElementById(key + '-sub').textContent = 'role para sortear'
    document.getElementById(key + '-stars').textContent = ''
    document.getElementById(key + '-attrs').innerHTML = ''
  })

  resetarBoost()
}

// ── RESET COMPLETO (volta pra equipe) ────
function resetar() {
  resetarCards()

  phase = 'idle'
  telaSimulada = false
  telaResultado = false
  spinningCount = 0
  rolagemCount = 0

  document.getElementById('campanha').classList.remove('show')
  document.getElementById('btn-nova').classList.remove('show')
  document.getElementById('card-final').classList.remove('show')
  document.getElementById('btn-simular').disabled = true
  document.getElementById('btn-rolar').disabled = false

  const inputNome = document.getElementById('input-nome-equipe')
  if (inputNome) inputNome.value = ''

  setHint('Clique em "Rolar tudo" para começar')
  document.getElementById('btn-rolar').innerHTML = '🎲 Rolar tudo <span style="opacity:0.6;font-size:11px;font-weight:400">· 3 tentativas</span>'

  irParaTela('equipe')
}

function voltarParaEquipe() {
  resetar()
}

// ── ATUALIZA O HINT ──────────────────────
function setHint(texto) {
  document.getElementById('phase-hint').textContent = texto
}

// ── HINT DE ROLAGENS RESTANTES ──────────
function atualizarHintRolagens() {
  const restantes = MAX_ROLAGENS - rolagemCount
  const btn = document.getElementById('btn-rolar')
  if (rolagemCount >= MAX_ROLAGENS) {
    btn.textContent = '🎲 Rolar tudo · 0 tentativas'
  } else {
    btn.innerHTML = `🎲 Rolar tudo <span style="opacity:0.6;font-size:11px;font-weight:400">· ${restantes} tentativa${restantes !== 1 ? 's' : ''}</span>`
  }
}

// ── NAVEGAÇÃO ENTRE TELAS ────────────────
function irParaTela(nomeTela) {
  document.querySelectorAll('.tela').forEach(t => t.classList.remove('active'))

  const telaAlvo = document.getElementById('tela-' + nomeTela)
  if (telaAlvo) telaAlvo.classList.add('active')

  const progressoRow = document.getElementById('progresso-row')
  if (nomeTela === 'inicio') {
    progressoRow.style.display = 'none'
  } else {
    progressoRow.style.display = 'flex'
    document.querySelectorAll('.progresso-step').forEach(s => s.classList.remove('ativo'))
    const stepAlvo = document.getElementById('step-' + nomeTela)
    if (stepAlvo) stepAlvo.classList.add('ativo')
  }

  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// ── NAVEGAÇÃO PELAS BOLINHAS ─────────────
function ativarNavBolinhas() {
  const stepEquipe    = document.getElementById('step-equipe')
  const stepTemporada = document.getElementById('step-temporada')
  const stepResultado = document.getElementById('step-resultado')

  stepEquipe.style.cursor = 'pointer'
  stepEquipe.onclick = () => voltarParaEquipe()

  stepTemporada.onclick = () => {
    if (telaSimulada) irParaTela('temporada')
  }

  stepResultado.onclick = () => {
    if (telaResultado) irParaTela('resultado')
  }
}

ativarNavBolinhas()

// ── CONECTA OS BOTÕES ────────────────────
document.getElementById('btn-rolar').addEventListener('click', iniciarRolagem)
document.getElementById('lock-p1').addEventListener('click',     () => travar('p1'))
document.getElementById('lock-p2').addEventListener('click',     () => travar('p2'))
document.getElementById('lock-chassi').addEventListener('click', () => travar('chassi'))
document.getElementById('lock-motor').addEventListener('click',  () => travar('motor'))

// Inicializa texto do botão com tentativas
document.getElementById('btn-rolar').innerHTML = '🎲 Rolar tudo <span style="opacity:0.6;font-size:11px;font-weight:400">· 3 tentativas</span>'