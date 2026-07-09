// ═══════════════════════════════════════
// F1 REROLL — COOKIE-CONSENT.JS
// Aviso de cookies + liberação do consentimento do Google Analytics
// ═══════════════════════════════════════

(function () {
  const CHAVE_CONSENTIMENTO = 'f1reroll_cookie_consent'
  const banner = document.getElementById('cookie-banner')
  const btnAceitar = document.getElementById('cookie-aceitar')

  function liberarAnalytics() {
    if (typeof gtag === 'function') {
      gtag('consent', 'update', {
        analytics_storage: 'granted'
      })
    }
  }

  function aceitarCookies() {
    localStorage.setItem(CHAVE_CONSENTIMENTO, 'granted')
    liberarAnalytics()
    banner.classList.remove('show')
  }

  const jaConsentiu = localStorage.getItem(CHAVE_CONSENTIMENTO) === 'granted'

  if (jaConsentiu) {
    liberarAnalytics()
  } else {
    // Pequeno delay para não competir com a animação de entrada da tela inicial
    setTimeout(() => banner.classList.add('show'), 600)
  }

  btnAceitar.addEventListener('click', aceitarCookies)
})()