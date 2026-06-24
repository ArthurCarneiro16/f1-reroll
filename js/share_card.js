// ═══════════════════════════════════════
// F1 MANAGER — SHARE_CARD.JS
// Gera card via Canvas API puro
// ═══════════════════════════════════════

function getRaridadeCard(score) {
  if (score >= 95) return { label: 'LENDÁRIO', cor: '#c4b5fd', bg: '#3b1f7a' }
  if (score >= 85) return { label: 'RARO',     cor: '#93c5fd', bg: '#1e3a6e' }
  if (score >= 72) return { label: 'INCOMUM',  cor: '#6ee7b7', bg: '#14462e' }
  return                  { label: 'COMUM',    cor: '#9ca3af', bg: '#2a2a35' }
}

function estrelas(score) {
  const n = score >= 95 ? 5 : score >= 85 ? 4 : score >= 72 ? 3 : score >= 60 ? 2 : 1
  return '★'.repeat(n) + '☆'.repeat(5 - n)
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath()
  ctx.moveTo(x + r, y)
  ctx.lineTo(x + w - r, y)
  ctx.quadraticCurveTo(x + w, y, x + w, y + r)
  ctx.lineTo(x + w, y + h - r)
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h)
  ctx.lineTo(x + r, y + h)
  ctx.quadraticCurveTo(x, y + h, x, y + h - r)
  ctx.lineTo(x, y + r)
  ctx.quadraticCurveTo(x, y, x + r, y)
  ctx.closePath()
}

function gerarCardCanvas(dadosCard) {
  const { titulo, pontos, vitorias, podeio, abandonos, p1, p2, chassi, motor, nomeEquipe } = dadosCard

  const W = 680
  const ITEM_H = 90
  const HEADER_H = 80
  const RESULT_H = 160
  const LABEL_H = 36
  const FOOTER_H = 48
  const PAD = 32
  const ITEMS_H = ITEM_H * 4 + 12 * 3 + 28 + 24
  const H = HEADER_H + RESULT_H + ITEMS_H + FOOTER_H + 16

  const canvas = document.createElement('canvas')
  canvas.width  = W
  canvas.height = H
  const ctx = canvas.getContext('2d')

  // Fundo geral
  ctx.fillStyle = '#0f0f13'
  ctx.fillRect(0, 0, W, H)

  // ── Header vermelho ──────────────────
  ctx.fillStyle = '#E24B4A'
  ctx.fillRect(0, 0, W, HEADER_H)

  ctx.fillStyle = '#fff'
  ctx.font = 'bold 22px Arial'
  ctx.letterSpacing = '4px'
  ctx.fillText('F1 MANAGER', PAD, 34)
  ctx.letterSpacing = '0px'

  ctx.fillStyle = 'rgba(255,255,255,0.7)'
  ctx.font = '18px Arial'
  ctx.fillText('1994–2025', PAD, 58)

  ctx.fillStyle = '#fff'
  ctx.font = 'bold 22px Arial'
  ctx.textAlign = 'right'
  ctx.fillText(nomeEquipe, W - PAD, 46)
  ctx.textAlign = 'left'

  // ── Resultado ────────────────────────
  let y = HEADER_H + 24

  ctx.fillStyle = '#55556a'
  ctx.font = '14px Arial'
  ctx.fillText('RESULTADO DA TEMPORADA', PAD, y)
  y += 28

  ctx.fillStyle = '#f0f0f0'
  ctx.font = 'bold 34px Arial'
  ctx.fillText(titulo, PAD, y)
  y += 44

  // Stats
  const stats = [
    { val: pontos,   lbl: 'PONTOS',   cor: '#E24B4A' },
    { val: vitorias, lbl: 'VITÓRIAS', cor: '#E24B4A' },
    { val: podeio,   lbl: 'PÓDIOS',   cor: '#E24B4A' },
    { val: abandonos,lbl: 'DNF',      cor: '#55556a' },
  ]

  let sx = PAD
  stats.forEach(s => {
    ctx.fillStyle = s.cor
    ctx.font = 'bold 38px Arial'
    ctx.fillText(s.val, sx, y)

    ctx.fillStyle = '#55556a'
    ctx.font = '13px Arial'
    ctx.fillText(s.lbl, sx, y + 20)

    sx += 140
  })

  y += 44

  // Divisor
  ctx.strokeStyle = 'rgba(255,255,255,0.06)'
  ctx.lineWidth = 1
  ctx.beginPath()
  ctx.moveTo(PAD, y)
  ctx.lineTo(W - PAD, y)
  ctx.stroke()
  y += 20

  // ── Label equipe ─────────────────────
  ctx.fillStyle = '#55556a'
  ctx.font = '14px Arial'
  ctx.fillText('EQUIPE SORTEADA', PAD, y + 16)
  y += LABEL_H

  // ── Itens ────────────────────────────
  const itens = [
    { sigla: 'P1', label: 'PILOTO 1', nome: p1.nome + " '" + p1.ano,    sub: p1.nac + ' · Score ' + p1.score,   score: p1.score },
    { sigla: 'P2', label: 'PILOTO 2', nome: p2.nome + " '" + p2.ano,    sub: p2.nac + ' · Score ' + p2.score,   score: p2.score },
    { sigla: 'CH', label: 'CHASSI',   nome: chassi.nome,                 sub: chassi.sub,                        score: chassi.score },
    { sigla: 'MT', label: 'MOTOR',    nome: motor.nome,                  sub: motor.sub,                         score: motor.score },
  ]

  itens.forEach((item, i) => {
    const iy = y + i * (ITEM_H + 12)
    const r = getRaridadeCard(item.score)

    // Card de fundo
    ctx.fillStyle = '#1a1a20'
    roundRect(ctx, PAD, iy, W - PAD * 2, ITEM_H, 10)
    ctx.fill()

    // Quadrado sigla
    ctx.fillStyle = '#22222a'
    roundRect(ctx, PAD + 14, iy + 18, 54, 54, 8)
    ctx.fill()

    ctx.fillStyle = '#888899'
    ctx.font = 'bold 18px Arial'
    ctx.textAlign = 'center'
    ctx.fillText(item.sigla, PAD + 41, iy + 52)
    ctx.textAlign = 'left'

    // Textos
    const tx = PAD + 84
    ctx.fillStyle = '#55556a'
    ctx.font = '12px Arial'
    ctx.fillText(item.label, tx, iy + 28)

    ctx.fillStyle = '#f0f0f0'
    ctx.font = 'bold 18px Arial'
    ctx.fillText(item.nome, tx, iy + 50)

    ctx.fillStyle = '#888899'
    ctx.font = '14px Arial'
    ctx.fillText(item.sub, tx, iy + 70)

    // Badge raridade
    const bw = item.score >= 95 ? 100 : item.score >= 85 ? 70 : item.score >= 72 ? 94 : 76
    const bx = W - PAD - 14 - bw
    const by = iy + 16

    ctx.fillStyle = r.bg
    roundRect(ctx, bx, by, bw, 26, 5)
    ctx.fill()

    ctx.fillStyle = r.cor
    ctx.font = 'bold 13px Arial'
    ctx.textAlign = 'center'
    ctx.fillText(r.label, bx + bw / 2, by + 17)
    ctx.textAlign = 'left'

    // Estrelas
    ctx.fillStyle = '#E24B4A'
    ctx.font = '16px Arial'
    ctx.textAlign = 'right'
    ctx.fillText(estrelas(item.score), W - PAD - 14, iy + 68)
    ctx.textAlign = 'left'
  })

  y += itens.length * (ITEM_H + 12) - 12 + 20

  // ── Footer ───────────────────────────
  ctx.strokeStyle = 'rgba(255,255,255,0.06)'
  ctx.lineWidth = 1
  ctx.beginPath()
  ctx.moveTo(PAD, y)
  ctx.lineTo(W - PAD, y)
  ctx.stroke()
  y += 20

  ctx.fillStyle = '#55556a'
  ctx.font = '14px Arial'
  ctx.fillText('monte o seu em', PAD, y + 16)

  ctx.fillStyle = '#E24B4A'
  ctx.font = 'bold 14px Arial'
  ctx.textAlign = 'right'
  ctx.fillText('arthurcarneiro16.github.io/f1-manager', W - PAD, y + 16)
  ctx.textAlign = 'left'

  return canvas
}

async function compartilhar() {
  if (!chosen.p1 || !chosen.p2 || !chosen.chassi || !chosen.motor) return

  const inputNome = document.getElementById('input-nome-equipe')
  const nomeEquipe = inputNome?.value.trim() || 'Minha Equipe'

  const titulo    = document.getElementById('final-titulo')?.textContent || ''
  const statsEls  = document.querySelectorAll('.stat-val')
  const pontos    = statsEls[0]?.textContent || '0'
  const vitorias  = statsEls[1]?.textContent || '0'
  const podeio    = statsEls[2]?.textContent || '0'
  const abandonos = statsEls[3]?.textContent || '0'

  const canvas = gerarCardCanvas({
    titulo, pontos, vitorias, podeio, abandonos,
    nomeEquipe,
    p1:     chosen.p1,
    p2:     chosen.p2,
    chassi: chosen.chassi,
    motor:  chosen.motor,
  })

  canvas.toBlob(async (blob) => {
    const file = new File([blob], 'f1-manager-resultado.png', { type: 'image/png' })

    try {
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          title: 'F1 Manager',
          text: titulo + ' — ' + pontos + ' pts · ' + vitorias + ' vitórias\narthurcarneiro16.github.io/f1-manager',
          files: [file],
        })
      } else {
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = 'f1-manager-resultado.png'
        a.click()
        URL.revokeObjectURL(url)
      }
    } catch (err) {
      console.error('Erro ao compartilhar:', err)
    }
  }, 'image/png')
}