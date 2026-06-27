// ═══════════════════════════════════════
// F1 MANAGER — SHARE_CARD.JS
// Gera card via Canvas API puro
// ═══════════════════════════════════════

function getRaridadeCard(score, nome) {
  if (nome === 'Ayrton Senna') return { label: 'ETERNO',   cor: '#FFD700', bg: '#3a2800' }
  if (score >= 95) return { label: 'LENDÁRIO', cor: '#c4b5fd', bg: '#3b1f7a' }
  if (score >= 85) return { label: 'RARO',     cor: '#93c5fd', bg: '#1e3a6e' }
  if (score >= 72) return { label: 'INCOMUM',  cor: '#6ee7b7', bg: '#14462e' }
  return                  { label: 'COMUM',    cor: '#9ca3af', bg: '#2a2a35' }
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
  const { pontos, vitorias, podeio, abandonos, p1, p2, chassi, motor, nomeEquipe, posP1, posP2, top3, posEquipe, ptsEquipe } = dadosCard

  const W = 680
  const PAD = 32
  const HEADER_H = 76
  const CONST_H = 52 * 3 + 8 * 2
  const NOSSA_H = posEquipe > 3 ? 68 : 0
  const PILOTOS_H = 48
  const STATS_H = 60
  const ITEM_H = 80
  const ITEMS_H = ITEM_H * 4 + 8 * 3
  const FOOTER_H = 80
  const SL = 32 // section label height
  const DIV = 16

  const H = HEADER_H
    + DIV + SL + CONST_H
    + (posEquipe > 3 ? DIV + NOSSA_H : 0)
    + DIV + PILOTOS_H
    + DIV + SL + STATS_H
    + DIV + SL + ITEMS_H
    + DIV + FOOTER_H

  const canvas = document.createElement('canvas')
  canvas.width  = W
  canvas.height = H
  const ctx = canvas.getContext('2d')

  ctx.fillStyle = '#0f0f13'
  ctx.fillRect(0, 0, W, H)

  // ── Header ──
  ctx.fillStyle = '#E24B4A'
  ctx.fillRect(0, 0, W, HEADER_H)

  ctx.fillStyle = '#fff'
  ctx.font = 'bold 20px Arial'
  ctx.fillText('F1 MANAGER', PAD, 30)
  ctx.fillStyle = 'rgba(255,255,255,0.65)'
  ctx.font = '14px Arial'
  ctx.fillText('1994–2025', PAD, 52)
  ctx.fillStyle = '#fff'
  ctx.font = 'bold 18px Arial'
  ctx.textAlign = 'right'
  ctx.fillText(nomeEquipe, W - PAD, 42)
  ctx.textAlign = 'left'

  let y = HEADER_H + DIV

  // ── Top 3 construtores ──
  ctx.fillStyle = '#55556a'
  ctx.font = 'bold 11px Arial'
  ctx.fillText('TOP 3 CONSTRUTORES', PAD, y + 14)
  y += SL

  const medals = ['🥇', '🥈', '🥉']
  const medalColors = ['#FFD700', '#C0C0C0', '#CD7F32']

  top3.forEach((eq, i) => {
    const ey = y + i * (52 + 8)
    ctx.fillStyle = '#1a1a20'
    roundRect(ctx, PAD, ey, W - PAD * 2, 52, 8)
    ctx.fill()

    ctx.fillStyle = medalColors[i]
    ctx.font = 'bold 18px Arial'
    ctx.fillText(medals[i], PAD + 14, ey + 32)

    ctx.fillStyle = eq.nossa ? '#FFD700' : '#f0f0f0'
    ctx.font = eq.nossa ? 'bold 15px Arial' : '15px Arial'
    ctx.fillText(eq.nome, PAD + 48, ey + 22)

    ctx.fillStyle = '#888899'
    ctx.font = '12px Arial'
    ctx.fillText(eq.pilotos, PAD + 48, ey + 40)

    ctx.fillStyle = eq.nossa ? '#FFD700' : '#E24B4A'
    ctx.font = 'bold 15px Arial'
    ctx.textAlign = 'right'
    ctx.fillText(eq.pts + ' pts', W - PAD - 14, ey + 32)
    ctx.textAlign = 'left'
  })

  y += CONST_H

  // ── Minha equipe (fora do top 3) ──
  if (posEquipe > 3) {
    y += DIV
    ctx.fillStyle = 'rgba(255,215,0,0.06)'
    roundRect(ctx, PAD, y, W - PAD * 2, 52, 8)
    ctx.fill()
    ctx.strokeStyle = 'rgba(255,215,0,0.25)'
    ctx.lineWidth = 1
    roundRect(ctx, PAD, y, W - PAD * 2, 52, 8)
    ctx.stroke()

    ctx.fillStyle = '#FFD700'
    ctx.font = 'bold 22px Arial'
    ctx.fillText(posEquipe + 'º', PAD + 14, y + 33)

    ctx.fillStyle = '#FFD700'
    ctx.font = 'bold 15px Arial'
    ctx.fillText(nomeEquipe, PAD + 58, y + 22)

    ctx.fillStyle = '#888899'
    ctx.font = '12px Arial'
    ctx.fillText(ptsEquipe + ' pts', PAD + 58, y + 40)

    y += NOSSA_H
  }

  y += DIV

  // ── Posições dos pilotos ──
  ctx.fillStyle = '#FFD700'
  ctx.font = 'bold 26px Arial'
  ctx.fillText(posP1 + 'º', PAD, y + 28)

  const p1w = ctx.measureText(posP1 + 'º').width + 10
  ctx.fillStyle = '#f0f0f0'
  ctx.font = '15px Arial'
  ctx.fillText(p1.nome, PAD + p1w, y + 28)

  const p1nw = ctx.measureText(p1.nome).width + 24
  ctx.fillStyle = '#55556a'
  ctx.font = '15px Arial'
  ctx.fillText('·', PAD + p1w + p1nw, y + 28)

  ctx.fillStyle = '#FFD700'
  ctx.font = 'bold 26px Arial'
  ctx.fillText(posP2 + 'º', PAD + p1w + p1nw + 20, y + 28)

  const p2x = PAD + p1w + p1nw + 20 + ctx.measureText(posP2 + 'º').width + 10
  ctx.fillStyle = '#f0f0f0'
  ctx.font = '15px Arial'
  ctx.fillText(p2.nome, p2x, y + 28)

  y += PILOTOS_H + DIV

  // Divisor
  ctx.strokeStyle = 'rgba(255,255,255,0.06)'
  ctx.lineWidth = 1
  ctx.beginPath()
  ctx.moveTo(PAD, y); ctx.lineTo(W - PAD, y); ctx.stroke()
  y += DIV

  // ── Stats ──
  ctx.fillStyle = '#55556a'
  ctx.font = 'bold 11px Arial'
  ctx.fillText('TEMPORADA', PAD, y + 14)
  y += SL

  const stats = [
    { val: vitorias,  lbl: 'VITÓRIAS' },
    { val: podeio,    lbl: 'PÓDIOS'   },
    { val: abandonos, lbl: 'DNF'      },
  ]

  let sx = PAD
  stats.forEach(s => {
    ctx.fillStyle = '#E24B4A'
    ctx.font = 'bold 28px Arial'
    ctx.fillText(s.val, sx, y + 28)
    ctx.fillStyle = '#55556a'
    ctx.font = '11px Arial'
    ctx.fillText(s.lbl, sx, y + 46)
    sx += 180
  })

  y += STATS_H + DIV

  // Divisor
  ctx.strokeStyle = 'rgba(255,255,255,0.06)'
  ctx.lineWidth = 1
  ctx.beginPath()
  ctx.moveTo(PAD, y); ctx.lineTo(W - PAD, y); ctx.stroke()
  y += DIV

  // ── Equipe sorteada ──
  ctx.fillStyle = '#55556a'
  ctx.font = 'bold 11px Arial'
  ctx.fillText('EQUIPE SORTEADA', PAD, y + 14)
  y += SL

  const itens = [
    { sigla: 'P1', label: 'PILOTO 1', nome: p1.nome + " '" + p1.ano, sub: p1.nac + ' · Score ' + p1.score, score: p1.score, nomePiloto: p1.nome },
    { sigla: 'P2', label: 'PILOTO 2', nome: p2.nome + " '" + p2.ano, sub: p2.nac + ' · Score ' + p2.score, score: p2.score, nomePiloto: p2.nome },
    { sigla: 'CH', label: 'CHASSI',   nome: chassi.nome,              sub: chassi.sub,                      score: chassi.score, nomePiloto: '' },
    { sigla: 'MT', label: 'MOTOR',    nome: motor.nome,               sub: motor.sub,                       score: motor.score,  nomePiloto: '' },
  ]

  itens.forEach((item, i) => {
    const iy = y + i * (ITEM_H + 8)
    const r = getRaridadeCard(item.score, item.nomePiloto)

    ctx.fillStyle = '#1a1a20'
    roundRect(ctx, PAD, iy, W - PAD * 2, ITEM_H, 8)
    ctx.fill()

    ctx.fillStyle = '#22222a'
    roundRect(ctx, PAD + 12, iy + 14, 48, 48, 6)
    ctx.fill()

    ctx.fillStyle = '#888899'
    ctx.font = 'bold 13px Arial'
    ctx.textAlign = 'center'
    ctx.fillText(item.sigla, PAD + 36, iy + 43)
    ctx.textAlign = 'left'

    const tx = PAD + 74
    ctx.fillStyle = '#55556a'
    ctx.font = '10px Arial'
    ctx.fillText(item.label, tx, iy + 22)

    ctx.fillStyle = '#f0f0f0'
    ctx.font = 'bold 16px Arial'
    ctx.fillText(item.nome, tx, iy + 42)

    ctx.fillStyle = '#888899'
    ctx.font = '12px Arial'
    ctx.fillText(item.sub, tx, iy + 62)

    ctx.font = 'bold 10px Arial'
    const bw = ctx.measureText(r.label).width + 18
    const bx = W - PAD - 14 - bw
    const bh = 22
    const by = iy + (ITEM_H - bh) / 2

    ctx.fillStyle = r.bg
    roundRect(ctx, bx, by, bw, bh, 4)
    ctx.fill()

    ctx.fillStyle = r.cor
    ctx.textAlign = 'center'
    ctx.fillText(r.label, bx + bw / 2, by + 15)
    ctx.textAlign = 'left'
  })

  y += ITEMS_H + DIV

  // Divisor
  ctx.strokeStyle = 'rgba(255,255,255,0.06)'
  ctx.lineWidth = 1
  ctx.beginPath()
  ctx.moveTo(PAD, y); ctx.lineTo(W - PAD, y); ctx.stroke()
  y += 14

  // ── Footer ──
  ctx.fillStyle = '#55556a'
  ctx.font = '13px Arial'
  ctx.fillText('Monte o seu em', PAD, y + 18)

  ctx.fillStyle = '#E24B4A'
  ctx.font = 'bold 13px Arial'
  ctx.textAlign = 'right'
  ctx.fillText('arthurcarneiro16.github.io/f1-manager', W - PAD, y + 18)
  ctx.textAlign = 'left'

  return canvas
}

async function compartilhar() {
  if (!chosen.p1 || !chosen.p2 || !chosen.chassi || !chosen.motor) return

  const inputNome = document.getElementById('input-nome-equipe')
  const nomeEquipe = inputNome?.value.trim() || 'Minha Equipe'

  const statsEls  = document.querySelectorAll('.stat-val')
  const vitorias  = statsEls[0]?.textContent || '0'
  const podeio    = statsEls[1]?.textContent || '0'
  const pontos    = statsEls[2]?.textContent || '0'
  const abandonos = statsEls[3]?.textContent || '0'

  const posEls = document.querySelectorAll('.final-piloto-num')
  const posP1 = posEls[0]?.textContent?.replace('º','') || ''
  const posP2 = posEls[1]?.textContent?.replace('º','') || ''

  const constRows = document.querySelectorAll('.const-row')
  const top3 = Array.from(constRows).slice(0, 3).map(row => ({
    nome:    row.querySelector('.const-nome')?.textContent || '',
    pilotos: row.querySelector('.const-pilotos')?.textContent || '',
    pts:     row.querySelector('.const-pts')?.textContent?.replace(' pts','') || '',
    nossa:   row.classList.contains('nossa-equipe'),
  }))

  const nossaDestaque = document.querySelector('.nossa-equipe-destaque')
  const posEquipe = nossaDestaque ? parseInt(nossaDestaque.querySelector('.nossa-equipe-pos')?.textContent) : 0
  const ptsEquipe = nossaDestaque ? nossaDestaque.querySelector('.nossa-equipe-pts')?.textContent?.replace(' pts','') : pontos

  const canvas = gerarCardCanvas({
    pontos, vitorias, podeio, abandonos,
    nomeEquipe, posP1, posP2,
    top3, posEquipe, ptsEquipe,
    p1: chosen.p1, p2: chosen.p2,
    chassi: chosen.chassi, motor: chosen.motor,
  })

  canvas.toBlob(async (blob) => {
    const file = new File([blob], 'f1-manager-resultado.png', { type: 'image/png' })
    try {
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          title: 'F1 Manager',
          text: vitorias + ' vitórias · ' + podeio + ' pódios · ' + pontos + ' pts\narthurcarneiro16.github.io/f1-manager',
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