// ═══════════════════════════════════════
// F1 MANAGER — ROLETA.JS
// Lógica de sorteio e raridade
// ═══════════════════════════════════════

// ── ESTADO DO JOGO ───────────────────────
// Quais itens foram escolhidos
const chosen = { p1: null, p2: null, chassi: null, motor: null }

// Quais itens estão travados
const locked = { p1: false, p2: false, chassi: false, motor: false }

// Fase atual: 'idle' | 'choosing' | 'done'
let phase = 'idle'

// Quantos slots ainda estão girando
let spinningCount = 0

// ── FUNÇÕES AUXILIARES ───────────────────

// Retorna o array correto para cada slot
function poolOf(key) {
  if (key === 'p1' || key === 'p2') return pilotos
  if (key === 'chassi') return chassis
  return motores
}

// Gera estrelas baseado no score
function toStars(score) {
  const n = score >= 95 ? 5 : score >= 85 ? 4 : score >= 72 ? 3 : score >= 60 ? 2 : 1
  return "★".repeat(n) + "☆".repeat(5 - n)
}

// Sorteia item aleatório simples
function rand(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

// Sorteia item com peso por raridade (itens melhores aparecem menos)
function weightedRand(arr) {
  // calcula peso de cada item
  const weights = arr.map(item => {
    if (item.score >= 95) return 5   // lendário → 5% de chance
    if (item.score >= 85) return 15  // raro → 15%
    if (item.score >= 72) return 30  // incomum → 30%
    return 50                         // comum → 50%
  })

  // soma total dos pesos
  const total = weights.reduce((a, b) => a + b, 0)

  // sorteia um número entre 0 e total
  let r = Math.random() * total

  // percorre até encontrar o item sorteado
  for (let i = 0; i < arr.length; i++) {
    r -= weights[i]
    if (r <= 0) return arr[i]
  }

  return arr[arr.length - 1]
}

// Sorteia sem repetir o piloto 1 no slot 2
function randExcluding(arr, exclude) {
  let result = weightedRand(arr)
  let attempts = 0
  while (result.nome === exclude?.nome && result.ano === exclude?.ano && attempts < 30) {
    result = weightedRand(arr)
    attempts++
  }
  return result
}

// Retorna dados da raridade baseado no score
function getRarity(score) {
  if (score >= 95) return { label: 'LENDÁRIO', cls: 'rarity-legendary' }
  if (score >= 85) return { label: 'RARO',     cls: 'rarity-rare' }
  if (score >= 72) return { label: 'INCOMUM',  cls: 'rarity-uncommon' }
  return                  { label: 'COMUM',    cls: 'rarity-common' }
}

// ── ATUALIZA VISUAL DO CARD ──────────────
function setCard(key, item) {
  const isDriver = key === 'p1' || key === 'p2'

  // atualiza textos
  document.getElementById(key + '-nome').textContent =
    item.nome + (isDriver ? ` '${item.ano}` : '')

  document.getElementById(key + '-sub').textContent =
    isDriver ? `${item.nac} · Score ${item.score}` : item.sub

  document.getElementById(key + '-stars').textContent = toStars(item.score)

  // badge de raridade
  const card = document.getElementById('card-' + key)
  let badge = card.querySelector('.rarity-badge')
  if (!badge) {
    badge = document.createElement('span')
    card.appendChild(badge)
  }
  const rarity = getRarity(item.score)
  badge.className = 'rarity-badge ' + rarity.cls
  badge.textContent = rarity.label

  // barrinhas de atributos
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

// Gera HTML de uma barrinha de atributo
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
    // mostra nomes aleatórios enquanto gira
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

    // limpa classes anteriores
    card.classList.remove('active-choice', 'locked', 'spinning')
    btn.style.display = 'none'
    btn.classList.remove('locked-state')

    if (locked[key]) {
      // travado
      card.classList.add('locked')
      btn.style.display = 'block'
      btn.textContent = 'travado ✓'
      btn.classList.add('locked-state')

    } else if (phase === 'choosing') {
      // aguardando escolha do jogador
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

  // reseta estado
  document.getElementById('btn-rolar').disabled = true
  document.getElementById('btn-simular').disabled = true
  document.getElementById('campanha').classList.remove('show')
  document.getElementById('btn-nova').classList.remove('show')

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

  // se todos travados, termina
  if (livres.length === 0) {
    terminar()
    return
  }

  // rola os restantes
  phase = 'idle'
  updateCardStates()
  setHint('Sorteando...')

  rolarLivres(() => {
    phase = 'choosing'
    updateCardStates()
    const restantes = livres.length
    setHint(`Escolha mais um para travar (${restantes} restantes)`)
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

    // remove badge de raridade
    const badge = card.querySelector('.rarity-badge')
    if (badge) badge.remove()

    const isD = key === 'p1' || key === 'p2'
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