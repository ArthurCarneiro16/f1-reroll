// ═══════════════════════════════════════
// F1 MANAGER — ROLETA.JS
// Lógica de sorteio e raridade
// ═══════════════════════════════════════

// ── ESTADO DO JOGO ───────────────────────
const chosen = { p1: null, p2: null, chassi: null, motor: null }
const locked  = { p1: false, p2: false, chassi: false, motor: false }
let phase = 'idle'
let spinningCount = 0

// estado do boost
let boostAtivo = false

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
      // com boost: lendário e raro têm muito mais chance
      if (item.score >= 95) return 30
      if (item.score >= 85) return 50
      if (item.score >= 72) return 15
      return 5
    } else {
      // sem boost: pesos normais
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
function toggleBoost() {
  boostAtivo = !boostAtivo
  const btn = document.getElementById('btn-boost')
  const hint = document.getElementById('boost-hint')

  if (boostAtivo) {
    btn.classList.add('ativo')
    btn.textContent = '⚡ Boost Ativado!'
    hint.textContent = 'próxima rolagem garante itens raros ou lendários'
    hint.style.color = '#FBBF24'
  } else {
    btn.classList.remove('ativo')
    btn.textContent = '⚡ Ativar Boost de Raridade'
    hint.textContent = 'aumenta chance de itens raros por 1 rolagem'
    hint.style.color = ''
  }
}

// filtra o excluído antes de sortear — garante que nunca repete
function randExcluding(arr, exclude) {
  const disponiveis = exclude
    ? arr.filter(p => !(p.nome === exclude.nome && p.ano === exclude.ano))
    : arr
  return weightedRand(disponiveis)
}

function getRarity(score) {
  if (score >= 95) return { label: 'LENDÁRIO', cls: 'rarity-legendary' }
  if (score >= 85) return { label: 'RARO',     cls: 'rarity-rare' }
  if (score >= 72) return { label: 'INCOMUM',  cls: 'rarity-uncommon' }
  return                  { label: 'COMUM',    cls: 'rarity-common' }
}

// ── ATUALIZA VISUAL DO CARD ──────────────
function setCard(key, item) {
  const isDriver = key === 'p1' || key === 'p2'

  document.getElementById(key + '-nome').textContent =
    item.nome + (isDriver ? ` '${item.ano}` : '')

  document.getElementById(key + '-sub').textContent =
    isDriver ? `${item.nac} · Score ${item.score}` : item.sub

  document.getElementById(key + '-stars').textContent = toStars(item.score)

  const card = document.getElementById('card-' + key)
  let badge = card.querySelector('.rarity-badge')
  if (!badge) {
    badge = document.createElement('span')
    card.appendChild(badge)
  }
  const rarity = getRarity(item.score)
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
    } else if (phase === 'choosing') {
      card.classList.add('active-choice')
      btn.style.display = 'block'
      btn.textContent = 'travar'
      btn.disabled = false
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

  livres.forEach(key => {
    const pool = poolOf(key)
    const finalItem = key === 'p2'
      ? randExcluding(pool, chosen.p1)
      : weightedRand(pool)

    spinCard(key, finalItem, () => {
      spinningCount--
      if (spinningCount === 0 && onDone) onDone()
    })
  })
}

// ── INICIA ROLAGEM ───────────────────────
function iniciarRolagem() {
  if (spinningCount > 0) return

  document.getElementById('btn-rolar').disabled = true
  document.getElementById('btn-simular').disabled = true
  document.getElementById('campanha').classList.remove('show')
  document.getElementById('btn-nova').classList.remove('show')

  phase = 'idle'
  const keys = ['p1', 'p2', 'chassi', 'motor']
  keys.forEach(k => locked[k] = false)
  updateCardStates()

  setHint('Sorteando...')

  // desativa boost após usar
if (boostAtivo) {
  boostAtivo = false
  const btn = document.getElementById('btn-boost')
  btn.classList.remove('ativo')
  btn.textContent = '⚡ Ativar Boost de Raridade'
  document.getElementById('boost-hint').textContent = 'aumenta chance de itens raros por 1 rolagem'
  document.getElementById('boost-hint').style.color = ''
}

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
  setHint('Equipe montada! Clique em Simular.')
  document.getElementById('btn-rolar').disabled = false
  document.getElementById('btn-simular').disabled = false
}

// ── RESET COMPLETO ───────────────────────
function resetar() {
  const keys = ['p1', 'p2', 'chassi', 'motor']

  keys.forEach(key => {
    locked[key] = false
    chosen[key] = null

    const btn = document.getElementById('lock-' + key)
    btn.style.display = 'none'
    btn.classList.remove('locked-state')

    const card = document.getElementById('card-' + key)
    card.classList.remove('locked', 'active-choice', 'spinning')

    const badge = card.querySelector('.rarity-badge')
    if (badge) badge.remove()

    document.getElementById(key + '-nome').textContent = '—'
    document.getElementById(key + '-sub').textContent = 'role para sortear'
    document.getElementById(key + '-stars').textContent = ''
    document.getElementById(key + '-attrs').innerHTML = ''
  })

  phase = 'idle'
  spinningCount = 0

  document.getElementById('campanha').classList.remove('show')
  document.getElementById('btn-nova').classList.remove('show')
  document.getElementById('card-final').classList.remove('show')
  document.getElementById('btn-simular').disabled = true
  document.getElementById('btn-rolar').disabled = false

  // limpa o input do nome da equipe
  const inputNome = document.getElementById('input-nome-equipe')
  if (inputNome) inputNome.value = ''

  setHint('Clique em "Rolar tudo" para começar')
}

// ── ATUALIZA O HINT ──────────────────────
function setHint(texto) {
  document.getElementById('phase-hint').textContent = texto
}

// ── CONECTA OS BOTÕES ────────────────────
document.getElementById('btn-rolar').addEventListener('click', iniciarRolagem)
document.getElementById('lock-p1').addEventListener('click',     () => travar('p1'))
document.getElementById('lock-p2').addEventListener('click',     () => travar('p2'))
document.getElementById('lock-chassi').addEventListener('click', () => travar('chassi'))
document.getElementById('lock-motor').addEventListener('click',  () => travar('motor'))