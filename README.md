# 🏎️ F1 Manager

Jogo de gerenciamento de Fórmula 1 inspirado no [7a0](https://7a0.com.br/play).
Monte sua equipe sorteando pilotos, chassi e motor de **1994 a 2025** e simule uma temporada completa corrida por corrida.

> Projeto desenvolvido como trabalho de faculdade, usando IA como ferramenta de aprendizado e desenvolvimento — não só para gerar código, mas para entender cada decisão técnica e de design ao longo do processo.

🔗 **[Jogar agora](https://arthurcarneiro16.github.io/f1-manager/)**

---

## 🎮 Como jogar

1. Clique em **🎲 Rolar tudo** para sortear sua equipe
2. Escolha **um item** para travar — os outros rolam automaticamente
3. Repita até montar os 4 slots: Piloto 1, Piloto 2, Chassi e Motor
4. Clique em **▶ Simular** e acompanhe os 21 GPs corrida por corrida
5. Veja o campeonato final de pilotos e construtores

---

## ⚙️ Sistema de raridade

Itens melhores aparecem com menos frequência — quanto mais raro, mais difícil de sortear:

| Raridade | Score | Chance |
|---|---|---|
| 🟣 LENDÁRIO | 95+ | 5% |
| 🔵 RARO | 85–94 | 15% |
| 🟢 INCOMUM | 72–84 | 30% |
| ⚫ COMUM | abaixo de 72 | 50% |

Sortear **Senna + Red Bull RB19 + Honda RBPTH002** é quase impossível — e é exatamente assim que deve ser.

---

## 🏁 O que tem no jogo

- **70+ pilotos** de 1994 a 2025 com atributos individuais calibrados
- **Ayrton Senna** como lenda especial com status 99 em tudo — uma homenagem
- **27 chassi** históricos das eras V10, V8, V6 híbrido e 2022+
- **21 motores** históricos com potência e durabilidade reais
- **21 GPs** com traçados SVG, probabilidade de chuva e perfil de circuito
- Bônus por perfil de circuito: técnico, potência, resistência e misto
- Bônus de chuva para pilotos como Hamilton e Senna
- Bônus de pressão nas últimas 5 corridas da temporada
- DNF probabilístico baseado na durabilidade do motor
- Campeonato de pilotos com os 20 classificados
- Top 3 construtores com pontuação acumulada

---

## 🧮 Como a simulação funciona

Cada corrida calcula individualmente o score dos dois pilotos:

```
score_piloto = corrida + bônus_chuva + bônus_pressão + bônus_circuito
score_carro  = chassi × 0.55 + motor × 0.45
score_final  = score_piloto × 0.40 + score_carro × 0.60 + variância (±12)
```

O carro vale **60%** do resultado — fiel à realidade da F1, onde o carro é determinante. O piloto com maior score sempre termina à frente do companheiro de equipe.

### Perfis de circuito

| Perfil | Circuitos | Bônus |
|---|---|---|
| ⚙️ Técnico | Mônaco, Japão, Hungria, Holanda | quali + estabilidade do chassi |
| 💨 Potência | Monza, Spa, Áustria, Azerbaijão, Las Vegas, Arábia Saudita | potência do motor |
| 🏁 Resistência | Bahrein, Singapura, México, Abu Dhabi | durabilidade + pneus |
| Misto | demais GPs | sem bônus extra |

---

## 🗂️ Estrutura do projeto

```
f1-manager/
├── css/
│   ├── reset.css       ← zera estilos do browser
│   ├── style.css       ← layout e componentes
│   └── variables.css   ← cores, fontes e tokens de design
├── js/
│   ├── data.js         ← pilotos, chassi, motores e corridas
│   ├── roleta.js       ← lógica de sorteio e raridade
│   └── simulacao.js    ← motor de corrida e campeonato
└── index.html          ← página principal
```

---

## 🛠️ Stack

| Camada | Tecnologia |
|---|---|
| Frontend | HTML · CSS · JavaScript |
| Backend *(em breve)* | Python · FastAPI |
| Simulação *(futuro)* | Rust → WebAssembly |
| Design | Figma *(planejado)* |

---

## 📌 Status do projeto

- [x] Sistema de roleta com raridade (gacha)
- [x] Mecânica de travar um → rolar os outros
- [x] 70+ pilotos históricos com atributos calibrados
- [x] Simulação de 21 GPs corrida por corrida
- [x] Perfis de circuito com bônus e eventos por pista
- [x] Bônus de chuva e pressão
- [x] Campeonato de pilotos e construtores
- [x] Publicado via GitHub Pages
- [ ] Card compartilhável da temporada
- [ ] Backend Python para salvar partidas
- [ ] Rust/WebAssembly no motor de simulação

---

## 🤖 Sobre o uso de IA

Este projeto foi desenvolvido com o auxílio do **Claude (Anthropic)** — não apenas para gerar código, mas como ferramenta de aprendizado. Cada parte foi discutida, explicada e implementada de forma que eu entendesse o que estava sendo feito e por quê.

A IA ajudou a:
- Definir a arquitetura do projeto
- Explicar conceitos de HTML, CSS, JavaScript e Git ao longo do desenvolvimento
- Calibrar os atributos dos pilotos e a matemática da simulação
- Sugerir melhorias de UX e mecânicas de jogo

O objetivo foi usar a IA como um professor e parceiro técnico, não como substituto do aprendizado.

---

## 👨‍💻 Autor

**Arthur Carneiro**

Projeto de faculdade · Unifecaf · ADS · 3° Semestre · 2026