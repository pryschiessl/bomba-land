# 💣 BOMBA LAND

### An interactive digital universe by Bomba Trends

**Berrini / Faria Lima Square · São Paulo reimagined**

BOMBA LAND é uma experiência digital interativa criada pela **Bomba Trends**, onde música, tecnologia, arte e cultura se encontram em uma cidade navegável.

🌎 Explore a cidade  
⚡ Ative o Bomba Energy Core  
🎧 Entre no Music Studio  
🏠 Descubra a Rich House 24H  
🎛️ Interaja com DJ Deck, Record Wall, BOMBAR e Super Powers

## 🚀 Explore a BOMBA LAND

**https://bomba-land.pages.dev/**

> THE MUSIC NEVER STOPS.

---

## 🌃 v1.0 — Berrini / Faria Lima Square

A primeira versão pública apresenta o primeiro distrito da **BOMBA LAND**: uma interpretação digital inspirada no eixo Berrini / Faria Lima, transformada em um universo de música, tecnologia, criatividade e experiências interativas.

### Experiências disponíveis

- ⚡ **Bomba Energy Core**
- 🎧 **Music Studio**
- 🏠 **Rich House 24H**
- 🎛️ **DJ Deck**
- 💿 **Record Wall**
- 🍸 **BOMBAR**
- 💥 **Super Powers**

### Em expansão

Novos territórios já fazem parte do mapa da BOMBA LAND:

- 💻 Tech Lab
- 🏡 Teachers House
- 🎨 Gallery
- 🎙️ Podcast Room
- ✨ Lounge

---

## ♿ Interação e acessibilidade

A experiência foi desenvolvida considerando diferentes formas de navegação e interação:

- navegação por teclado;
- estados de foco;
- suporte a `prefers-reduced-motion`;
- experiências sonoras iniciadas por ação do visitante;
- layouts adaptados para desktop e mobile;
- feedback acessível nas principais interações.

---

## 🛠️ Arquitetura da publicação

Este repositório contém a release pública da **BOMBA LAND**, separada das fontes de desenvolvimento, protótipos e checkpoints.

Todo o conteúdo publicado está em `site/`:

- `/` — mapa da BOMBA LAND;
- `/rich-house-24h/` — Rich House 24H;
- `assets/` — imagens e recursos estáticos;
- `INTEGRITY.sha256` — hashes SHA-256 da release;
- `DEPLOYMENT_MANIFEST.md` — manifesto técnico da publicação.

### Cloudflare Pages

| Campo | Valor |
| --- | --- |
| Projeto | `bomba-land` |
| Branch de produção | `main` |
| Framework preset | None / Static HTML |
| Build command | `exit 0` |
| Build output directory | `site` |
| Produção | `https://bomba-land.pages.dev/` |

O deploy de produção é realizado pelo **Cloudflare Pages** a partir da branch `main`.

---

## 🔄 Releases e rollback

Cada release aprovada é registrada em `RELEASES.md`.

A integridade do pacote publicado pode ser conferida por `site/INTEGRITY.sha256`, e versões anteriores permanecem recuperáveis pelo histórico Git e pelos deploys do Cloudflare Pages.

---

## 💣 Bomba Trends

**BOMBA LAND** é uma experiência digital da **Bomba Trends**.

Music · Technology · Art · Culture

> **Welcome to Bomba Land.**
