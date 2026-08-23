const spatialElements = Object.freeze({
  dance: { name: 'Pista', role: 'Ponto focal energético e área de atmosfera reativa à mídia.' },
  vj: { name: 'VJ Screen', role: 'Superfície de apresentação visual do sistema DJ/VJ.' },
  lounge: { name: 'Lounge', role: 'Área de permanência e apoio espacial ao Record Wall.' },
});

const residentSet = Object.freeze({
  id: 'lS0KhEyuu-g',
  title: 'DJ GOGH — Salve Home Office | Kebra Burnout | Not Brain Rot',
  url: 'https://youtu.be/lS0KhEyuu-g?si=cRZnye232YLru_-y',
  type: 'Resident set',
});

const richHouseSelection = Object.freeze([
  {
    id: '2D4UeOpNRXU',
    title: 'Home Office 4 — Soft Power / Rich House',
    url: 'https://youtu.be/2D4UeOpNRXU?si=0HVP7tO2ZmCwMkSF',
    type: 'Música',
  },
  {
    id: 'JqRM69-OtRc',
    title: 'Reunião Toma — Soft Power / Rich House',
    url: 'https://youtu.be/JqRM69-OtRc?si=JeqFYWZP7DA85l4-',
    type: 'Música',
  },
  {
    id: 'hmOAihNtgd0',
    title: 'Eu Não Viralizo, Eu Converto 2 — Primeiro Milhão / Rich House',
    url: 'https://youtu.be/hmOAihNtgd0?si=a8XFPERmXVZ-Mj37',
    type: 'Vídeo',
  },
]);

const recordAlbums = Object.freeze([
  {
    id: 'primeiro-milhao',
    title: 'Primeiro Milhão',
    artist: 'Bomba Trends',
    curatorial: 'Música, ambição e cultura digital transformadas em manifesto sonoro.',
    coverSrc: 'assets/record-wall/primeiro-milhao-bomba-trends.png',
    spotifyUrl: 'https://open.spotify.com/intl-pt/album/6DyOXvS69hpavHem8P73WP?si=z23uQN3NR_mTUtiu3qxQzQ',
  },
  {
    id: 'soft-power',
    title: 'Soft Power',
    artist: 'Bomba Trends',
    curatorial: 'Trabalho, comportamento e poder contemporâneo vistos pela lente pop da Bomba.',
    coverSrc: 'assets/record-wall/soft-power-bomba-trends.png',
    spotifyUrl: 'https://open.spotify.com/intl-pt/album/4QV49cJ328CkRhfGgIIfnv?si=FO5lV29QSoicV0W1rcHHqQ',
  },
  {
    id: 'tech-polis-ii',
    title: 'Tech Polis II',
    artist: 'Bomba Trends',
    curatorial: 'Tecnologia, código e vida digital convertidos em paisagem musical.',
    coverSrc: 'assets/record-wall/tech-polis-ii-bomba-trends.png',
    spotifyUrl: 'https://open.spotify.com/intl-pt/album/0GzMiopKeq6O0w86dOdqPy?si=6b4U8H9sQdu_htRvZUMQ8A',
  },
  {
    id: 'shine-people',
    title: 'Shine People',
    artist: 'Bomba Trends',
    curatorial: 'Luz, presença e transformação convertidas em uma experiência sonora sobre aquilo que fazemos brilhar no mundo.',
    coverSrc: 'assets/record-wall/shine-people-bomba-trends.png',
    spotifyUrl: 'https://open.spotify.com/intl-pt/album/2gk3SRtetFTupuvGt0KDqd?si=qpY6Sjd4S_WxSjeeuCXAqQ',
  },
]);

const survivalItems = Object.freeze([
  {
    id: 'energy',
    name: 'ENERGY',
    assetSrc: 'assets/bombar/energy-bombar.png',
    copy: '+100% coragem para começar o que você está enrolando há 3 horas.',
    powerUp: {
      label: 'ATIVAR SUPER POWER',
      status: 'EXECUTION MODE: ON',
      effect: 'energy',
    },
  },
  {
    id: 'pizza',
    name: 'PIZZA',
    assetSrc: 'assets/bombar/pizza-bombar.png',
    copy: '+3 horas de energia questionável e decisões surpreendentemente confiantes.',
    powerUp: {
      label: 'ATIVAR SUPER POWER',
      status: 'OVERTIME FUEL: LOADED',
      effect: 'pizza',
    },
  },
  {
    id: 'chocolate',
    name: 'CHOCOLATE',
    assetSrc: 'assets/bombar/chocolate-bombar.png',
    copy: 'Restaura criatividade após o terceiro “só um ajuste”.',
    powerUp: {
      label: 'ATIVAR SUPER POWER',
      status: 'CREATIVITY RESTORED',
      effect: 'chocolate',
    },
  },
  {
    id: 'phaser',
    name: 'PHASER',
    assetSrc: 'assets/bombar/phaser-bombar.png',
    copy: 'Desintegra reuniões que poderiam ser um e-mail.',
    powerUp: {
      label: 'ATIVAR SUPER POWER',
      status: 'CONVERTIDA EM E-MAIL · 2 MIN',
      effect: 'phaser',
      scene: {
        detected: 'REUNIÃO DESNECESSÁRIA DETECTADA',
        resolved: 'CONVERTIDA EM E-MAIL · 2 MIN',
      },
    },
  },
]);

const interactiveSystems = Object.freeze({
  media: {
    name: 'DJ Deck',
    listName: 'DJ Deck',
    copy: 'DJ Gogh é o residente: o DJ Deck seleciona a mídia, a VJ Screen apresenta e a Pista reage.',
    resident: residentSet,
    selection: richHouseSelection,
  },
  bar: {
    name: 'BOMBAR — SOS HOME OFFICE',
    listName: 'BOMBAR — SOS HOME OFFICE',
    copy: 'Kit de sobrevivência para quando o Home Office pede reforço.',
    items: survivalItems,
  },
  records: {
    name: 'Record Wall',
    listName: 'Record Wall',
    copy: 'Discografia tratada como paisagem física, não como lista plana.',
    albums: recordAlbums,
  },
  exit: {
    name: 'Saída',
    listName: 'Saída',
    copy: 'Retorne à Bomba Land.',
    items: [['Retorno', 'Voltar à Bomba Land']],
  },
});

const select = (selector) => document.querySelector(selector);
const mountMediaGallery = () => {
  const gallery = document.createElement('section');
  gallery.className = 'media-gallery';
  gallery.id = 'media-gallery';
  gallery.setAttribute('aria-labelledby', 'media-gallery-title');
  gallery.hidden = true;
  gallery.innerHTML = `
    <p class="media-gallery__eyebrow">DJ DECK</p>
    <h2 id="media-gallery-title">Resident DJ: DJ Gogh</h2>
    <h3>Resident Set</h3>
    <div class="media-gallery__resident" id="media-resident"></div>
    <h3>Rich House Selection</h3>
    <div class="media-gallery__selection" id="media-selection"></div>
    <div class="media-gallery__actions"><button id="media-gallery-close" type="button">Voltar à Rich House</button></div>
  `;
  select('#house').after(gallery);
  return gallery;
};

const mediaGallery = mountMediaGallery();
const mediaResident = mediaGallery.querySelector('#media-resident');
const mediaSelection = mediaGallery.querySelector('#media-selection');
const closeMediaGalleryButton = mediaGallery.querySelector('#media-gallery-close');
const mediaGalleryStyle = document.createElement('style');
mediaGalleryStyle.textContent = `
  .media-gallery{position:absolute;z-index:16;bottom:30px;left:50%;width:min(850px,calc(100% - 48px));padding:16px;border:1px solid #fffef04a;border-radius:18px;background:linear-gradient(145deg,#fffdf86e,#e9e2f57a);box-shadow:0 12px 34px #0b081334;color:#17131e;backdrop-filter:blur(5px);transform:translateX(-50%)}
  .media-gallery[hidden]{display:none}.media-gallery__eyebrow{margin:0;color:#55357a;font-size:.68rem;font-weight:800;letter-spacing:.14em;text-transform:uppercase}.media-gallery h2{margin:.35rem 0 .2rem;font-size:1.2rem}.media-gallery__resident,.media-gallery__selection{display:grid;gap:10px}.media-gallery__selection{grid-template-columns:repeat(3,minmax(0,1fr))}.media-gallery h3{margin:1rem 0 .45rem;font-size:.72rem;letter-spacing:.12em;text-transform:uppercase}.media-thumbnail{display:grid;gap:8px;padding:8px;border:1px solid #17131e45;border-radius:13px;background:#fffdf8;color:#17131e;text-align:left;font:inherit;font-weight:800;cursor:pointer;transition:transform .18s,box-shadow .18s,border-color .18s}.media-thumbnail:hover,.media-thumbnail:focus-visible{border-color:#55357a;box-shadow:0 0 0 3px #9580ff55;transform:translateY(-3px)}.media-thumbnail:focus-visible{outline-offset:2px}.media-thumbnail img{display:block;width:100%;aspect-ratio:16/9;object-fit:cover;border-radius:8px;background:#0b0813}.media-thumbnail__meta{display:grid;gap:3px}.media-thumbnail__meta span{font-size:.86rem}.resident-player{display:grid;gap:10px}.resident-player iframe{display:block;width:100%;aspect-ratio:16/9;border:0;border-radius:8px;background:#0b0813}.resident-player button,.vj-return{justify-self:start;padding:8px 11px;border:1px solid #17131e55;border-radius:999px;background:#fffffff0;color:#17131e;font:inherit;font-size:.82rem;font-weight:700;cursor:pointer}.media-gallery__actions{margin-top:14px}.media-gallery__actions button{padding:8px 11px;border:1px solid #17131e55;border-radius:999px;background:#fffffff0;color:#17131e;font:inherit;font-size:.82rem;font-weight:700;cursor:pointer}
  @media(max-width:680px){.media-gallery{position:static;width:100%;margin-top:12px;padding:12px;transform:none}.media-gallery h2{font-size:1.08rem}.media-gallery__selection{grid-template-columns:1fr;gap:10px}.media-thumbnail{grid-template-columns:minmax(110px,38%) 1fr;align-items:center}.media-thumbnail img{height:auto}.media-thumbnail__meta span{font-size:.84rem}}
`;
document.head.append(mediaGalleryStyle);
const mountBombar = () => {
  const gallery = document.createElement('section');
  gallery.className = 'bombar-gallery';
  gallery.id = 'bombar-gallery';
  gallery.setAttribute('aria-labelledby', 'bombar-gallery-title');
  gallery.hidden = true;
  gallery.innerHTML = `
    <p class="bombar__eyebrow">BOMBAR — SOS HOME OFFICE</p>
    <h2 id="bombar-gallery-title">Kit de sobrevivência Home Office</h2>
    <p class="bombar__intro">Kit de sobrevivência para quando o Home Office pede reforço.</p>
    <div class="bombar-grid" id="bombar-grid"></div>
    <div class="bombar__actions"><button id="bombar-gallery-close" type="button">Voltar à Rich House</button></div>
  `;

  select('#house').after(gallery);
  return { gallery };
};

const bombar = mountBombar();
const bombarGallery = bombar.gallery;
const bombarGrid = bombarGallery.querySelector('#bombar-grid');
const closeBombarGalleryButton = bombarGallery.querySelector('#bombar-gallery-close');
const bombarActions = closeBombarGalleryButton.parentElement;
const bombarEyebrow = bombarGallery.querySelector('.bombar__eyebrow');
const bombarGalleryTitle = bombarGallery.querySelector('#bombar-gallery-title');
const bombarIntro = bombarGallery.querySelector('.bombar__intro');
const bombarPowerUpStatus = document.createElement('p');
bombarPowerUpStatus.className = 'bombar-powerup-status';
bombarPowerUpStatus.setAttribute('role', 'status');
bombarPowerUpStatus.setAttribute('aria-live', 'polite');
bombarIntro.after(bombarPowerUpStatus);
let bombarExhibitOpen = false;
const bombarStyle = document.createElement('style');
bombarStyle.textContent = `
  .bombar-gallery{position:absolute;z-index:16;bottom:30px;left:50%;width:min(850px,calc(100% - 48px));padding:16px;border:1px solid #fffef04a;border-radius:18px;background:linear-gradient(145deg,#fffdf86e,#e9e2f57a);box-shadow:0 12px 34px #0b081334;color:#17131e;backdrop-filter:blur(5px);transform:translateX(-50%)}.bombar-gallery[hidden]{display:none}.bombar__eyebrow{margin:0;color:#55357a;font-size:.68rem;font-weight:800;letter-spacing:.14em;text-transform:uppercase}.bombar-gallery h2{margin:.35rem 0 .2rem;font-size:1.2rem}.bombar__intro{margin:.2rem 0 .9rem;font-size:.88rem}.bombar-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px}.bombar-card{position:relative;display:grid;grid-template-rows:112px auto 1fr;gap:8px;min-height:252px;padding:14px;border:1px solid #17131e45;border-radius:13px;background:#fffdf8;color:#17131e;text-align:left;font:inherit;cursor:pointer;overflow:hidden;transition:transform .18s,box-shadow .18s,border-color .18s}.bombar-card:hover,.bombar-card:focus-visible{border-color:#55357a;box-shadow:0 0 0 3px #9580ff55;transform:translateY(-3px)}.bombar-card:focus-visible{outline-offset:2px}.bombar-card__icon{position:relative;display:grid;place-items:center;width:100%;height:112px}.bombar-card__icon img,.bombar-prop-stage img{position:relative;z-index:1;display:block;width:100%;height:100%;object-fit:contain}.bombar-card h3{margin:0;font-size:.9rem;letter-spacing:.1em}.bombar-card p{margin:0;font-size:.82rem;line-height:1.35}.bombar-card--energy .bombar-card__icon{animation:bombar-pulse 2.6s ease-in-out infinite}.bombar-card--pizza .bombar-card__icon::after{content:'';position:absolute;z-index:2;top:8%;left:58%;width:17%;height:40%;border-left:2px solid #fff8;border-radius:50%;filter:blur(.35px);animation:bombar-steam 2.8s ease-in-out infinite}.bombar-card--chocolate .bombar-card__icon{filter:drop-shadow(0 0 8px #ffb45a99);animation:bombar-glow 3s ease-in-out infinite}.bombar-card--phaser .bombar-card__icon::after{content:'';position:absolute;z-index:0;top:28%;left:-5%;width:27%;height:30%;border-radius:50%;background:#5be4ffcc;filter:blur(8px);animation:bombar-glow 2.2s ease-in-out infinite}.bombar-prop-stage{display:grid;place-items:center;min-height:290px;padding:8px}.bombar-prop-stage img{width:min(100%,270px);height:270px}.bombar__actions{margin-top:14px}.bombar__actions button{padding:8px 11px;border:1px solid #17131e55;border-radius:999px;background:#fffffff0;color:#17131e;font:inherit;font-size:.82rem;font-weight:700;cursor:pointer}.bombar-gallery.is-exhibit .bombar__actions button{display:grid;place-items:center;width:39px;height:39px;padding:0;border-radius:50%;font-size:1.15rem}@keyframes bombar-pulse{50%{transform:scale(1.06);filter:brightness(1.2)}}@keyframes bombar-steam{50%{transform:translateY(-8px);opacity:.35}}@keyframes bombar-glow{50%{filter:brightness(1.16);transform:scale(1.04)}}@media(prefers-reduced-motion:reduce){.bombar-card__icon,.bombar-card__icon::after{animation:none!important}}@media(max-width:680px){.bombar-gallery{position:static;width:100%;margin-top:12px;padding:12px;transform:none}.bombar-gallery h2{font-size:1.08rem}.bombar-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.bombar-card{grid-template-rows:92px auto 1fr;min-height:224px;padding:11px}.bombar-card__icon{height:92px}.bombar-card p{font-size:.78rem}.bombar-prop-stage{min-height:230px}.bombar-prop-stage img{width:min(100%,220px);height:220px}}
`;
document.head.append(bombarStyle);
const bombarCompositionStyle = document.createElement('style');
bombarCompositionStyle.textContent = `
  @media (min-width:681px){
    .bombar-gallery{bottom:min(280px,calc(100% - 460px))}
    .bombar-gallery.is-exhibit{bottom:min(190px,calc(100% - 540px));width:min(430px,calc(100% - 48px));min-height:500px}
    .bombar-prop-stage{min-height:340px;padding:4px}
    .bombar-prop-stage img{width:min(100%,340px);height:340px}
  }
  @media (max-width:680px){
    .bombar-gallery.is-exhibit{width:100%;min-height:0;bottom:auto}
    .bombar-prop-stage{min-height:260px}
    .bombar-prop-stage img{width:min(100%,250px);height:250px}
  }
`;
document.head.append(bombarCompositionStyle);
const mobileHotspotLegibilityStyle = document.createElement('style');
mobileHotspotLegibilityStyle.textContent = `
  @media (max-width:680px){
    .zone strong{font-size:.74rem;font-weight:800;color:#100d16;text-shadow:-1px -1px 0 #fff9,1px -1px 0 #fff9,-1px 1px 0 #fff9,1px 1px 0 #fff9,0 1px 4px #ffffffcc}
    .zone::before{width:20px;height:20px;filter:drop-shadow(0 0 5px #d9ff45d9);transform:scale(1)}
    .zone:hover::before,.zone:focus-visible::before,.zone.active::before{transform:scale(1.28)}
  }
`;
document.head.append(mobileHotspotLegibilityStyle);
const bombarPowerUpStyle = document.createElement('style');
bombarPowerUpStyle.textContent = `
  .bombar-powerup{border:0;border-radius:999px;padding:10px 14px;background:linear-gradient(100deg,#5be4ff,#ff4fac 55%,#d9ff45);color:#100d16;font:inherit;font-size:.8rem;font-weight:900;letter-spacing:.05em;cursor:pointer;box-shadow:0 5px 18px #5be4ff66}.bombar-powerup:hover,.bombar-powerup:focus-visible{filter:brightness(1.08);box-shadow:0 0 0 3px #5be4ff55,0 7px 24px #ff4fac66}.bombar-powerup:disabled{opacity:.65;cursor:wait}.bombar-powerup-status{min-height:0;margin:0;color:#38215c;font-size:.78rem;font-weight:900;letter-spacing:.1em}.bombar-powerup-status:not(:empty){min-height:1.4em;margin:.15rem 0 .2rem}.powerup-flash{position:absolute;z-index:4;inset:0;pointer-events:none;opacity:0;background:linear-gradient(112deg,transparent 0 9%,#00d9ffb8 9% 28%,transparent 28% 47%,#ff321ad1 47% 70%,transparent 70%),linear-gradient(28deg,transparent 0 24%,#ff9d00b5 24% 34%,transparent 34% 61%,#006dffc4 61% 77%,transparent 77%),linear-gradient(90deg,transparent 0 39%,#ff4fac87 39% 44%,transparent 44% 80%,#d9ff4580 80% 86%,transparent 86%);mix-blend-mode:hard-light}.powerup-flash.is-active{animation:energy-flash 3s steps(1,end) both}.house.powerup-energy .art{animation:energy-surge 3s steps(1,end) both}.house.powerup-energy::after{background:linear-gradient(118deg,transparent 0 14%,#00d9ff4d 14% 36%,transparent 36% 55%,#ff321a67 55% 77%,transparent 77%),linear-gradient(26deg,transparent 0 42%,#ffdf4a45 42% 50%,transparent 50%)}@keyframes energy-flash{0%{opacity:0;clip-path:inset(48% 48% 48% 48%)}8%{opacity:.92;clip-path:inset(0)}18%,72%{opacity:.74;clip-path:inset(0)}84%{opacity:.38;clip-path:inset(0)}100%{opacity:0;clip-path:inset(48% 48% 48% 48%)}}@keyframes energy-surge{0%,100%{filter:saturate(.92) contrast(1.04) brightness(1)}8%,18%{filter:saturate(1.55) contrast(1.18) brightness(1.1)}28%,60%{filter:saturate(1.9) contrast(1.3) brightness(1.08)}72%{filter:saturate(1.38) contrast(1.13) brightness(1.03)}84%{filter:saturate(1.12) contrast(1.07) brightness(1.01)}}.reduced .powerup-flash.is-active,.reduced .house.powerup-energy .art{animation:none}.reduced .powerup-flash.is-active{opacity:.18}.reduced .house.powerup-energy .art{filter:saturate(1.22) contrast(1.1) brightness(1.03)}@media(prefers-reduced-motion:reduce){.powerup-flash.is-active,.house.powerup-energy .art{animation:none}.powerup-flash.is-active{opacity:.18}.house.powerup-energy .art{filter:saturate(1.22) contrast(1.1) brightness(1.03)}}
`;
document.head.append(bombarPowerUpStyle);
const pizzaPowerUpStyle = document.createElement('style');
pizzaPowerUpStyle.textContent = `
  .powerup-flash.is-pizza{background:linear-gradient(108deg,transparent 0 8%,#f22f10d6 8% 31%,transparent 31% 46%,#ddff00c7 46% 65%,transparent 65%),linear-gradient(24deg,transparent 0 20%,#ffc400c9 20% 35%,transparent 35% 56%,#ff4b18ca 56% 76%,transparent 76%),linear-gradient(90deg,transparent 0 37%,#7dff00a8 37% 44%,transparent 44% 78%,#ffea00a8 78% 86%,transparent 86%);animation:pizza-flash 3s steps(1,end) both}.house.powerup-pizza .art{animation:pizza-surge 3s steps(1,end) both}.house.powerup-pizza::after{background:linear-gradient(116deg,transparent 0 12%,#f22f1059 12% 34%,transparent 34% 52%,#ddff0068 52% 75%,transparent 75%),linear-gradient(24deg,transparent 0 41%,#ffc40052 41% 50%,transparent 50%)}.bombar-gallery.powerup-pizza .bombar-prop-stage img{animation:pizza-pulse .36s steps(2,end) 5 both}@keyframes pizza-flash{0%{opacity:0;clip-path:inset(50% 50% 50% 50%)}7%{opacity:.92;clip-path:inset(0)}18%,73%{opacity:.76;clip-path:inset(0)}85%{opacity:.34;clip-path:inset(0)}100%{opacity:0;clip-path:inset(50% 50% 50% 50%)}}@keyframes pizza-surge{0%,100%{filter:saturate(.92) contrast(1.04) brightness(1)}7%,17%{filter:saturate(1.58) contrast(1.18) brightness(1.11)}28%,62%{filter:saturate(1.96) contrast(1.31) brightness(1.09)}74%{filter:saturate(1.36) contrast(1.13) brightness(1.03)}86%{filter:saturate(1.1) contrast(1.07) brightness(1.01)}}@keyframes pizza-pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.055)}}.reduced .powerup-flash.is-pizza,.reduced .house.powerup-pizza .art,.reduced .bombar-gallery.powerup-pizza .bombar-prop-stage img{animation:none}.reduced .powerup-flash.is-pizza{opacity:.18}.reduced .house.powerup-pizza .art{filter:saturate(1.22) contrast(1.1) brightness(1.03)}@media(prefers-reduced-motion:reduce){.powerup-flash.is-pizza,.house.powerup-pizza .art,.bombar-gallery.powerup-pizza .bombar-prop-stage img{animation:none}.powerup-flash.is-pizza{opacity:.18}.house.powerup-pizza .art{filter:saturate(1.22) contrast(1.1) brightness(1.03)}}
`;
document.head.append(pizzaPowerUpStyle);
const chocolatePowerUpStyle = document.createElement('style');
chocolatePowerUpStyle.textContent = `
  .powerup-flash.is-chocolate{background:linear-gradient(114deg,transparent 0 10%,#78ff00cd 10% 29%,transparent 29% 46%,#ff1faaD1 46% 69%,transparent 69%),linear-gradient(27deg,transparent 0 23%,#7dff00b8 23% 34%,transparent 34% 61%,#b128ffd0 61% 76%,transparent 76%),linear-gradient(90deg,transparent 0 38%,#ffe6009c 38% 44%,transparent 44% 79%,#ff36b99c 79% 85%,transparent 85%);animation:chocolate-flash 3s steps(1,end) both}.powerup-flash.is-chocolate::before,.powerup-flash.is-chocolate::after{position:absolute;z-index:1;color:#fff7b0;font-family:Arial,sans-serif;line-height:1;text-shadow:0 0 8px #fff,0 0 20px #ff37c9;opacity:0}.powerup-flash.is-chocolate::before{content:'✦';left:28%;top:26%;font-size:2rem;animation:chocolate-sparkle 3s steps(1,end) both}.powerup-flash.is-chocolate::after{content:'✦';right:24%;bottom:30%;font-size:1.5rem;animation:chocolate-sparkle 3s steps(1,end) .24s both}.house.powerup-chocolate .art{animation:chocolate-surge 3s steps(1,end) both}.house.powerup-chocolate::after{background:linear-gradient(118deg,transparent 0 14%,#78ff0057 14% 35%,transparent 35% 54%,#ff1faa63 54% 76%,transparent 76%),linear-gradient(29deg,transparent 0 44%,#b128ff50 44% 52%,transparent 52%)}.bombar-gallery.powerup-chocolate .bombar-prop-stage img{animation:chocolate-shine .6s steps(2,end) 3 both}@keyframes chocolate-flash{0%{opacity:0;clip-path:inset(49% 49% 49% 49%)}8%{opacity:.9;clip-path:inset(0)}18%,68%{opacity:.7;clip-path:inset(0)}80%{opacity:.38;clip-path:inset(0)}100%{opacity:0;clip-path:inset(49% 49% 49% 49%)}}@keyframes chocolate-surge{0%,100%{filter:saturate(.92) contrast(1.04) brightness(1)}8%,18%{filter:saturate(1.54) contrast(1.18) brightness(1.1)}29%,60%{filter:saturate(1.9) contrast(1.29) brightness(1.08)}72%{filter:saturate(1.34) contrast(1.12) brightness(1.03)}84%{filter:saturate(1.1) contrast(1.06) brightness(1.01)}}@keyframes chocolate-sparkle{0%,18%{opacity:0;transform:scale(.4)}30%,58%{opacity:1;transform:scale(1)}74%{opacity:.35;transform:scale(.7)}100%{opacity:0;transform:scale(.4)}}@keyframes chocolate-shine{0%,100%{filter:brightness(1) saturate(1)}50%{filter:brightness(1.24) saturate(1.2) drop-shadow(0 0 14px #fff5a8)}}.reduced .powerup-flash.is-chocolate,.reduced .house.powerup-chocolate .art,.reduced .bombar-gallery.powerup-chocolate .bombar-prop-stage img,.reduced .powerup-flash.is-chocolate::before,.reduced .powerup-flash.is-chocolate::after{animation:none}.reduced .powerup-flash.is-chocolate{opacity:.16}.reduced .powerup-flash.is-chocolate::before,.reduced .powerup-flash.is-chocolate::after{opacity:0}.reduced .house.powerup-chocolate .art{filter:saturate(1.2) contrast(1.09) brightness(1.03)}@media(prefers-reduced-motion:reduce){.powerup-flash.is-chocolate,.house.powerup-chocolate .art,.bombar-gallery.powerup-chocolate .bombar-prop-stage img,.powerup-flash.is-chocolate::before,.powerup-flash.is-chocolate::after{animation:none}.powerup-flash.is-chocolate{opacity:.16}.powerup-flash.is-chocolate::before,.powerup-flash.is-chocolate::after{opacity:0}.house.powerup-chocolate .art{filter:saturate(1.2) contrast(1.09) brightness(1.03)}}
`;
document.head.append(chocolatePowerUpStyle);
const phaserPowerUpStyle = document.createElement('style');
phaserPowerUpStyle.textContent = `
  .powerup-flash.is-phaser{background:linear-gradient(112deg,transparent 0 10%,#243cffcf 10% 30%,transparent 30% 47%,#ff6515d6 47% 70%,transparent 70%),linear-gradient(25deg,transparent 0 22%,#00e6ffd0 22% 34%,transparent 34% 59%,#ff8b00ba 59% 78%,transparent 78%),linear-gradient(90deg,transparent 0 39%,#a542ff9b 39% 46%,transparent 46% 79%,#ffdf0096 79% 85%,transparent 85%);animation:phaser-flash 3.8s steps(1,end) both}.house.powerup-phaser .art{animation:phaser-surge 3.8s steps(1,end) both}.house.powerup-phaser::after{background:linear-gradient(117deg,transparent 0 13%,#243cff5c 13% 35%,transparent 35% 53%,#ff651568 53% 77%,transparent 77%),linear-gradient(25deg,transparent 0 42%,#00e6ff55 42% 50%,transparent 50%)}.bombar-gallery.powerup-phaser .bombar-prop-stage img{animation:phaser-emitter .5s steps(2,end) 3 both}.phaser-scene{position:absolute;z-index:2;inset:0;pointer-events:none;font-size:clamp(.62rem,1.5vw,.78rem);font-weight:900;letter-spacing:.08em;text-transform:uppercase}.phaser-target,.phaser-result{position:absolute;left:7%;right:7%;top:24%;padding:6px 8px;border:1px solid currentColor;border-radius:999px;text-align:center;line-height:1.2}.phaser-target{color:#ff4b21;background:#180c34cc;opacity:0}.phaser-result{color:#eaffe8;background:#183d34e6;opacity:0}.phaser-beam{position:absolute;top:56%;left:12%;width:72%;height:5px;border-radius:999px;background:#5be4ff;box-shadow:0 0 8px #fff,0 0 18px #5be4ff,0 0 28px #a542ff;opacity:0;transform-origin:left center}.phaser-impact{position:absolute;top:49%;right:12%;width:42px;height:42px;border:4px solid #ff8b00;border-radius:50%;box-shadow:0 0 12px #ffdf00,0 0 25px #ff6515;opacity:0}.phaser-scene.is-active .phaser-target{animation:phaser-target 3.8s steps(1,end) both}.phaser-scene.is-active .phaser-beam{animation:phaser-beam 3.8s steps(1,end) both}.phaser-scene.is-active .phaser-impact{animation:phaser-impact 3.8s steps(1,end) both}.phaser-scene.is-active .phaser-result{animation:phaser-result 3.8s steps(1,end) both}@keyframes phaser-flash{0%{opacity:0;clip-path:inset(50% 50% 50% 50%)}7%{opacity:.9;clip-path:inset(0)}20%,77%{opacity:.72;clip-path:inset(0)}88%{opacity:.3;clip-path:inset(0)}100%{opacity:0;clip-path:inset(50% 50% 50% 50%)}}@keyframes phaser-surge{0%,100%{filter:saturate(.92) contrast(1.04) brightness(1)}7%,19%{filter:saturate(1.56) contrast(1.2) brightness(1.1)}30%,68%{filter:saturate(1.9) contrast(1.3) brightness(1.08)}79%{filter:saturate(1.34) contrast(1.12) brightness(1.03)}89%{filter:saturate(1.1) contrast(1.06) brightness(1.01)}}@keyframes phaser-emitter{0%,100%{filter:brightness(1) saturate(1)}50%{filter:brightness(1.3) saturate(1.25) drop-shadow(-8px 0 12px #5be4ff)}}@keyframes phaser-target{0%,10%{opacity:0;transform:scale(.86)}12%,34%{opacity:1;transform:scale(1)}43%{opacity:0;transform:scale(.2)}}@keyframes phaser-beam{0%,29%{opacity:0;transform:scaleX(.04)}31%,40%{opacity:1;transform:scaleX(1)}45%,100%{opacity:0;transform:scaleX(1)}}@keyframes phaser-impact{0%,37%{opacity:0;transform:scale(.3)}40%,49%{opacity:1;transform:scale(1.25)}54%,100%{opacity:0;transform:scale(1.8)}}@keyframes phaser-result{0%,48%{opacity:0;transform:scale(.8)}55%,82%{opacity:1;transform:scale(1)}92%,100%{opacity:0;transform:scale(.94)}}.reduced .powerup-flash.is-phaser,.reduced .house.powerup-phaser .art,.reduced .bombar-gallery.powerup-phaser .bombar-prop-stage img,.reduced .phaser-scene *{animation:none}.reduced .powerup-flash.is-phaser{opacity:.16}.reduced .house.powerup-phaser .art{filter:saturate(1.2) contrast(1.09) brightness(1.03)}.reduced .phaser-scene.is-active .phaser-target{opacity:1}.reduced .phaser-scene.is-active.is-resolved .phaser-target{opacity:0}.reduced .phaser-scene.is-active.is-resolved .phaser-result{opacity:1}@media(prefers-reduced-motion:reduce){.powerup-flash.is-phaser,.house.powerup-phaser .art,.bombar-gallery.powerup-phaser .bombar-prop-stage img,.phaser-scene *{animation:none}.powerup-flash.is-phaser{opacity:.16}.house.powerup-phaser .art{filter:saturate(1.2) contrast(1.09) brightness(1.03)}.phaser-scene.is-active .phaser-target{opacity:1}.phaser-scene.is-active.is-resolved .phaser-target{opacity:0}.phaser-scene.is-active.is-resolved .phaser-result{opacity:1}}
`;
document.head.append(phaserPowerUpStyle);
const powerUpAccessibilityStyle = document.createElement('style');
powerUpAccessibilityStyle.textContent = `.bombar-powerup-status.is-sr-only{position:absolute!important;width:1px!important;height:1px!important;min-height:1px!important;margin:-1px!important;padding:0!important;overflow:hidden!important;clip:rect(0 0 0 0)!important;white-space:nowrap!important;border:0!important}`;
document.head.append(powerUpAccessibilityStyle);
const bombarPowerUpLayoutStyle = document.createElement('style');
bombarPowerUpLayoutStyle.textContent = `.bombar-gallery.is-exhibit .bombar__actions .bombar-powerup{display:inline-block;width:auto;height:auto;padding:10px 14px;border-radius:999px;font-size:.8rem}.bombar-gallery.is-exhibit .bombar__actions .bombar-back{display:grid;place-items:center;width:39px;height:39px;padding:0;border-radius:50%;font-size:1.15rem}`;
document.head.append(bombarPowerUpLayoutStyle);
const bombarPowerUpFinishStyle = document.createElement('style');
bombarPowerUpFinishStyle.textContent = `
  .bombar-gallery.is-exhibit{text-align:center}
  .bombar-gallery.is-exhibit .bombar__eyebrow{margin-inline:auto}
  .bombar-gallery.is-exhibit h2{margin:.55rem auto .38rem;font-size:clamp(1.45rem,4vw,2rem);line-height:1.04;letter-spacing:.1em}
  .bombar-gallery.is-exhibit .bombar__intro{max-width:32ch;margin:.15rem auto .55rem;color:#251b35;font-size:clamp(.98rem,1.8vw,1.12rem);font-weight:800;line-height:1.42}
  .bombar-gallery.is-exhibit .bombar-powerup-status{max-width:30ch;margin:.35rem auto .7rem;color:#38215c;font-size:.84rem;line-height:1.35;text-align:center}
  .bombar-gallery.is-exhibit .bombar-prop-stage{margin:.15rem auto .7rem}
  .bombar-gallery.is-exhibit .bombar__actions{position:relative;display:flex;justify-content:center;align-items:center;min-height:40px;margin-top:.65rem}
  .bombar-gallery.is-exhibit .bombar__actions .bombar-back{position:absolute;left:0}
  .bombar-gallery.is-exhibit .phaser-scene{text-align:center}
  @media(max-width:680px){
    .bombar-gallery.is-exhibit h2{font-size:1.38rem}
    .bombar-gallery.is-exhibit .bombar__intro{max-width:28ch;font-size:.98rem}
    .bombar-gallery.is-exhibit .bombar-powerup-status{font-size:.78rem}
    .bombar-gallery.is-exhibit .bombar-prop-stage{margin-bottom:.55rem}
  }
`;
document.head.append(bombarPowerUpFinishStyle);
const zoneButtons = [...document.querySelectorAll('.zone')];
const house = select('#house');
const powerUpFlash = document.createElement('div');
powerUpFlash.className = 'powerup-flash';
powerUpFlash.setAttribute('aria-hidden', 'true');
house.append(powerUpFlash);
const mediaZone = zoneButtons.find((button) => button.dataset.id === 'media');
mediaZone?.querySelector('strong')?.replaceChildren('DJ Deck');
mediaZone?.querySelector('small')?.replaceChildren('Resident DJ: DJ Gogh');
const exitZone = zoneButtons.find((button) => button.dataset.id === 'exit');
exitZone?.querySelector('small')?.replaceChildren('Voltar à Bomba Land');
const detail = select('#detail');
const threshold = select('#threshold');
const content = select('#content');
const listOverlay = select('#list-overlay');
const richList = select('#rich-list');
const listToggle = select('#list-toggle');
const closeList = select('#close-list');
const enterButton = select('#enter');
const backButton = select('#back');
const returnButton = select('#return');
const motionButton = select('#motion');
const projection = select('#vj-projection');
const projectionTitle = select('#vj-projection-title');
const projectionStatus = select('#vj-status');
const playerShell = select('#vj-player-shell');
const playButton = select('#vj-play');
const audioButton = select('#vj-audio');
const closeProjectionButton = select('#vj-close');
const returnToDeckButton = document.createElement('button');
returnToDeckButton.className = 'vj-return';
returnToDeckButton.type = 'button';
returnToDeckButton.textContent = '←';
returnToDeckButton.setAttribute('aria-label', 'Voltar ao DJ Deck');
returnToDeckButton.title = 'Voltar ao DJ Deck';
closeProjectionButton.parentElement.append(returnToDeckButton);
const fallbackLink = select('#vj-fallback');
const recordGallery = select('#record-gallery');
const albumGallery = select('#album-gallery');
const closeRecordGalleryButton = select('#record-gallery-close');
const recordExhibit = select('#record-exhibit');
const recordExhibitTitle = select('#record-exhibit-title');
const recordExhibitArtist = select('#record-exhibit-artist');
const recordExhibitCuratorial = select('#record-exhibit-curatorial');
const recordExhibitCover = select('#record-exhibit-cover');
const recordExhibitSpotify = select('#record-exhibit-spotify');
const closeRecordExhibitButton = select('#record-exhibit-close');

let currentSystemId = null;
let lastTrigger = null;
let youtubeApiPromise = null;
let pilotPlayer = null;
let playerReady = false;
let playerIsPlaying = false;
let audioMuted = false;
let selectedAlbumButton = null;
let selectedMediaButton = null;
let selectedMedia = residentSet;
let residentSetPlaying = false;
let selectedBombarButton = null;
const bombaClubUrl = window.RICH_HOUSE_CONFIG?.bombaClubUrl || '/';

const setProjectionStatus = (message) => {
  projectionStatus.textContent = message;
};

const resetPlayerMount = () => {
  playerShell.replaceChildren(Object.assign(document.createElement('div'), { id: 'vj-player-mount' }));
};

const updatePlaybackUI = () => {
  playButton.disabled = !playerReady;
  audioButton.disabled = !playerReady;
  playButton.dataset.state = playerIsPlaying ? 'playing' : 'paused';
  playButton.setAttribute('aria-pressed', String(playerIsPlaying));
  playButton.setAttribute('aria-label', playerIsPlaying ? 'Pausar transmissão' : 'Reproduzir transmissão');
  playButton.title = playerIsPlaying ? 'Pausar transmissão' : 'Reproduzir transmissão';
  audioButton.dataset.state = audioMuted ? 'muted' : 'audible';
  audioButton.setAttribute('aria-label', audioMuted ? 'Ativar áudio' : 'Silenciar áudio');
  audioButton.title = audioMuted ? 'Ativar áudio' : 'Silenciar áudio';
  audioButton.setAttribute('aria-pressed', String(audioMuted));
  house.classList.toggle('media-playing', playerIsPlaying);
};

const showFallback = (message) => {
  setProjectionStatus(message);
  fallbackLink.hidden = false;
  playerReady = false;
  playerIsPlaying = false;
  updatePlaybackUI();
};

const destroyTransmission = ({ restoreFocus = false } = {}) => {
  try {
    pilotPlayer?.stopVideo?.();
    pilotPlayer?.destroy?.();
  } catch {
    // The embed can already be unavailable when a network failure occurs.
  }

  pilotPlayer = null;
  playerReady = false;
  playerIsPlaying = false;
  audioMuted = false;
  projection.hidden = true;
  fallbackLink.hidden = true;
  fallbackLink.href = selectedMedia.url;
  resetPlayerMount();
  updatePlaybackUI();
  setProjectionStatus('Nenhuma transmissão preparada.');
  if (restoreFocus) zoneButtons.find((button) => button.dataset.id === 'media')?.focus();
};

const closeResidentSet = ({ restoreFocus = false } = {}) => {
  if (!residentSetPlaying) return;
  residentSetPlaying = false;
  mediaResident.replaceChildren(createResidentCard());
  if (restoreFocus) mediaResident.querySelector('button')?.focus();
};

const showAlbumExhibit = (album) => {
  recordGallery.hidden = true;
  recordExhibitTitle.textContent = album.title;
  recordExhibitArtist.textContent = album.artist;
  recordExhibitCuratorial.textContent = album.curatorial;
  recordExhibitCover.src = album.coverSrc;
  recordExhibitCover.alt = `Capa do álbum ${album.title}, de ${album.artist}.`;

  if (album.spotifyUrl) {
    recordExhibitSpotify.href = album.spotifyUrl;
    recordExhibitSpotify.hidden = false;
  } else {
    recordExhibitSpotify.hidden = true;
  }

  recordExhibit.hidden = false;
  closeRecordExhibitButton.focus();
};

const closeAlbumExhibit = ({ restoreFocus = false } = {}) => {
  recordExhibit.hidden = true;
  recordGallery.hidden = false;
  if (restoreFocus) selectedAlbumButton?.focus();
};

const loadYoutubeApi = () => {
  if (window.YT?.Player) return Promise.resolve(window.YT);
  if (youtubeApiPromise) return youtubeApiPromise;

  youtubeApiPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    const timeout = window.setTimeout(() => reject(new Error('A API do YouTube não respondeu.')), 15000);
    const previousReady = window.onYouTubeIframeAPIReady;

    window.onYouTubeIframeAPIReady = () => {
      window.clearTimeout(timeout);
      previousReady?.();
      resolve(window.YT);
    };

    script.src = 'https://www.youtube.com/iframe_api';
    script.async = true;
    script.onerror = () => {
      window.clearTimeout(timeout);
      reject(new Error('A API do YouTube não carregou.'));
    };
    document.head.append(script);
  });

  return youtubeApiPromise;
};

const onPlayerStateChange = (event) => {
  const state = event.data;
  playerIsPlaying = state === window.YT.PlayerState.PLAYING;
  updatePlaybackUI();

  if (state === window.YT.PlayerState.PLAYING) setProjectionStatus(`Reproduzindo ${selectedMedia.title}.`);
  if (state === window.YT.PlayerState.PAUSED) setProjectionStatus('Vídeo pausado.');
  if (state === window.YT.PlayerState.ENDED) setProjectionStatus('Vídeo finalizado.');
};

const prepareTransmission = async (media) => {
  closeResidentSet();
  try {
    pilotPlayer?.stopVideo?.();
    pilotPlayer?.destroy?.();
  } catch {
    // A transmissão anterior pode já ter sido removida pelo próprio embed.
  }

  pilotPlayer = null;
  selectedMedia = media;
  mediaGallery.hidden = true;
  content.hidden = true;
  projection.hidden = false;
  projectionTitle.textContent = `VJ Screen · ${selectedMedia.title}`;
  fallbackLink.hidden = true;
  fallbackLink.href = selectedMedia.url;
  playerReady = false;
  playerIsPlaying = false;
  audioMuted = false;
  updatePlaybackUI();
  setProjectionStatus('Preparando transmissão no VJ Screen.');
  resetPlayerMount();

  try {
    const YT = await loadYoutubeApi();

    pilotPlayer = new YT.Player('vj-player-mount', {
      width: '100%',
      height: '100%',
      videoId: selectedMedia.id,
      playerVars: {
        autoplay: 0,
        controls: 1,
        enablejsapi: 1,
        origin: window.location.origin,
        playsinline: 1,
        rel: 0,
      },
      events: {
        onReady: (event) => {
          event.target.cueVideoById(selectedMedia.id);
          playerReady = true;
          updatePlaybackUI();
          setProjectionStatus('Vídeo preparado. Pressione Reproduzir para iniciar.');
          playButton.focus();
        },
        onStateChange: onPlayerStateChange,
        onError: () => showFallback('Não foi possível carregar a transmissão aqui.'),
        onAutoplayBlocked: () => setProjectionStatus('A reprodução precisa ser iniciada pelo botão Reproduzir ou pelo player do YouTube.'),
      },
    });
  } catch {
    showFallback('Não foi possível carregar a transmissão aqui.');
  }
};

const togglePlayback = () => {
  if (!pilotPlayer || !playerReady) return;
  if (playerIsPlaying) pilotPlayer.pauseVideo();
  else pilotPlayer.playVideo();
};

const toggleAudio = () => {
  if (!pilotPlayer || !playerReady) return;
  audioMuted = !audioMuted;
  if (audioMuted) pilotPlayer.mute();
  else pilotPlayer.unMute();
  updatePlaybackUI();
  setProjectionStatus(audioMuted ? 'Áudio silenciado.' : 'Áudio ativado.');
};

const createItem = ([label, value]) => {
  const item = document.createElement('div');
  item.className = 'item';
  const heading = document.createElement('b');
  heading.textContent = label;
  const copy = document.createElement('span');
  copy.textContent = value;
  item.append(heading, copy);
  return item;
};

const createAlbumCover = (album) => {
  const item = document.createElement('button');
  item.className = 'album-cover-card';
  item.type = 'button';
  item.setAttribute('aria-label', `Abrir ficha de ${album.title}, Bomba Trends`);
  const image = document.createElement('img');
  image.src = album.coverSrc;
  image.alt = `Capa do álbum ${album.title}, de Bomba Trends`;
  const title = document.createElement('span');
  title.textContent = album.title;
  item.append(image, title);
  item.addEventListener('click', () => {
    selectedAlbumButton = item;
    showAlbumExhibit(album);
  });
  return item;
};

const openRecordGallery = ({ focusFirst = true } = {}) => {
  recordExhibit.hidden = true;
  content.hidden = true;
  discover('records');
  albumGallery.replaceChildren(...recordAlbums.map(createAlbumCover));
  recordGallery.hidden = false;
  if (focusFirst) albumGallery.querySelector('button')?.focus();
};

const closeRecordGallery = ({ restoreFocus = false } = {}) => {
  recordGallery.hidden = true;
  clearDiscovery();
  if (restoreFocus) lastTrigger?.focus();
};

const createBombarCard = (item) => {
  const card = document.createElement('button');
  card.className = `bombar-card bombar-card--${item.id}`;
  card.type = 'button';
  card.dataset.itemId = item.id;
  card.setAttribute('aria-label', `Abrir ${item.name}: ${item.copy}`);

  const icon = document.createElement('span');
  icon.className = 'bombar-card__icon';
  icon.setAttribute('aria-hidden', 'true');
  const image = document.createElement('img');
  image.src = item.assetSrc;
  image.alt = '';
  icon.append(image);
  const title = document.createElement('h3');
  title.textContent = item.name;
  const copy = document.createElement('p');
  copy.textContent = item.copy;
  card.append(icon, title, copy);
  card.addEventListener('click', () => {
    selectedBombarButton = card;
    showBombarExhibit(item);
  });
  return card;
};

let powerUpTimer = null;
let phaserSceneTimer = null;
let currentPowerUpButton = null;
let powerUpAudioContext = null;

const resetPowerUp = () => {
  window.clearTimeout(powerUpTimer);
  window.clearTimeout(phaserSceneTimer);
  powerUpTimer = null;
  phaserSceneTimer = null;
  house.classList.remove('powerup-energy', 'powerup-pizza', 'powerup-chocolate', 'powerup-phaser');
  powerUpFlash.classList.remove('is-active', 'is-pizza', 'is-chocolate', 'is-phaser');
  bombarGallery.classList.remove('powerup-pizza', 'powerup-chocolate', 'powerup-phaser');
  bombarGrid.querySelector('.phaser-scene')?.classList.remove('is-active', 'is-resolved');
  bombarPowerUpStatus.classList.remove('is-sr-only');
  bombarPowerUpStatus.textContent = '';
  if (currentPowerUpButton) currentPowerUpButton.disabled = false;
};

const playEnergySfx = async () => {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return;

  try {
    if (!powerUpAudioContext || powerUpAudioContext.state === 'closed') {
      powerUpAudioContext = new AudioContextClass();
    }
    const context = powerUpAudioContext;
    if (context.state === 'suspended') {
      await context.resume();
    }
    if (context.state !== 'running') return;

    const now = context.currentTime + 0.015;
    const master = context.createGain();
    master.gain.setValueAtTime(0.0001, now);
    master.gain.exponentialRampToValueAtTime(0.27, now + 0.025);
    master.gain.setValueAtTime(0.24, now + 0.58);
    master.gain.exponentialRampToValueAtTime(0.08, now + 0.95);
    master.gain.exponentialRampToValueAtTime(0.0001, now + 2.96);
    master.connect(context.destination);

    const charge = context.createOscillator();
    const impact = context.createOscillator();
    const tail = context.createOscillator();
    const chargeGain = context.createGain();
    const impactGain = context.createGain();
    const tailGain = context.createGain();
    charge.type = 'sawtooth';
    impact.type = 'triangle';
    tail.type = 'sine';
    charge.frequency.setValueAtTime(220, now);
    charge.frequency.exponentialRampToValueAtTime(980, now + 0.52);
    impact.frequency.setValueAtTime(220, now + 0.44);
    impact.frequency.exponentialRampToValueAtTime(86, now + 0.9);
    tail.frequency.setValueAtTime(520, now + 0.88);
    tail.frequency.exponentialRampToValueAtTime(255, now + 1.48);
    tail.frequency.exponentialRampToValueAtTime(115, now + 2.9);
    chargeGain.gain.setValueAtTime(0.0001, now);
    chargeGain.gain.exponentialRampToValueAtTime(0.72, now + 0.05);
    chargeGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.58);
    impactGain.gain.setValueAtTime(0.0001, now + 0.42);
    impactGain.gain.exponentialRampToValueAtTime(0.88, now + 0.48);
    impactGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.92);
    tailGain.gain.setValueAtTime(0.0001, now + 0.86);
    tailGain.gain.exponentialRampToValueAtTime(0.44, now + 0.96);
    tailGain.gain.exponentialRampToValueAtTime(0.0001, now + 2.94);
    charge.connect(chargeGain).connect(master);
    impact.connect(impactGain).connect(master);
    tail.connect(tailGain).connect(master);
    charge.start(now);
    impact.start(now + 0.42);
    tail.start(now + 0.86);
    charge.stop(now + 0.6);
    impact.stop(now + 0.94);
    tail.stop(now + 2.97);
  } catch {
    // The visible live status is the accessible fallback when audio is unavailable.
  }
};

const playPizzaSfx = async () => {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return;

  try {
    if (!powerUpAudioContext || powerUpAudioContext.state === 'closed') {
      powerUpAudioContext = new AudioContextClass();
    }
    const context = powerUpAudioContext;
    if (context.state === 'suspended') await context.resume();
    if (context.state !== 'running') return;

    const now = context.currentTime + 0.015;
    const master = context.createGain();
    master.gain.setValueAtTime(0.0001, now);
    master.gain.exponentialRampToValueAtTime(0.24, now + 0.03);
    master.gain.setValueAtTime(0.2, now + 0.82);
    master.gain.exponentialRampToValueAtTime(0.07, now + 1.08);
    master.gain.exponentialRampToValueAtTime(0.0001, now + 2.96);
    master.connect(context.destination);

    const ignition = context.createOscillator();
    const turbo = context.createOscillator();
    const ding = context.createOscillator();
    const tail = context.createOscillator();
    const ignitionGain = context.createGain();
    const turboGain = context.createGain();
    const dingGain = context.createGain();
    const tailGain = context.createGain();
    ignition.type = 'square';
    turbo.type = 'sawtooth';
    ding.type = 'triangle';
    tail.type = 'sine';
    ignition.frequency.setValueAtTime(108, now);
    ignition.frequency.exponentialRampToValueAtTime(315, now + 0.3);
    turbo.frequency.setValueAtTime(150, now + 0.24);
    turbo.frequency.exponentialRampToValueAtTime(760, now + 0.82);
    ding.frequency.setValueAtTime(1180, now + 0.82);
    ding.frequency.exponentialRampToValueAtTime(1780, now + 0.97);
    tail.frequency.setValueAtTime(460, now + 1.02);
    tail.frequency.exponentialRampToValueAtTime(205, now + 1.72);
    tail.frequency.exponentialRampToValueAtTime(92, now + 2.9);
    ignitionGain.gain.setValueAtTime(0.0001, now);
    ignitionGain.gain.exponentialRampToValueAtTime(0.56, now + 0.05);
    ignitionGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.32);
    turboGain.gain.setValueAtTime(0.0001, now + 0.22);
    turboGain.gain.exponentialRampToValueAtTime(0.62, now + 0.32);
    turboGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.88);
    dingGain.gain.setValueAtTime(0.0001, now + 0.8);
    dingGain.gain.exponentialRampToValueAtTime(0.72, now + 0.84);
    dingGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.04);
    tailGain.gain.setValueAtTime(0.0001, now + 1);
    tailGain.gain.exponentialRampToValueAtTime(0.34, now + 1.1);
    tailGain.gain.exponentialRampToValueAtTime(0.0001, now + 2.94);
    ignition.connect(ignitionGain).connect(master);
    turbo.connect(turboGain).connect(master);
    ding.connect(dingGain).connect(master);
    tail.connect(tailGain).connect(master);
    ignition.start(now);
    turbo.start(now + 0.22);
    ding.start(now + 0.8);
    tail.start(now + 1);
    ignition.stop(now + 0.34);
    turbo.stop(now + 0.9);
    ding.stop(now + 1.05);
    tail.stop(now + 2.97);
  } catch {
    // The visible live status is the accessible fallback when audio is unavailable.
  }
};

const playChocolateSfx = async () => {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return;

  try {
    if (!powerUpAudioContext || powerUpAudioContext.state === 'closed') {
      powerUpAudioContext = new AudioContextClass();
    }
    const context = powerUpAudioContext;
    if (context.state === 'suspended') await context.resume();
    if (context.state !== 'running') return;

    const now = context.currentTime + 0.015;
    const master = context.createGain();
    master.gain.setValueAtTime(0.0001, now);
    master.gain.exponentialRampToValueAtTime(0.2, now + 0.035);
    master.gain.setValueAtTime(0.16, now + 0.9);
    master.gain.exponentialRampToValueAtTime(0.055, now + 1.28);
    master.gain.exponentialRampToValueAtTime(0.0001, now + 2.96);
    master.connect(context.destination);

    const pop = context.createOscillator();
    const crystal = context.createOscillator();
    const shimmer = context.createOscillator();
    const tail = context.createOscillator();
    const popGain = context.createGain();
    const crystalGain = context.createGain();
    const shimmerGain = context.createGain();
    const tailGain = context.createGain();
    pop.type = 'triangle';
    crystal.type = 'sine';
    shimmer.type = 'triangle';
    tail.type = 'sine';
    pop.frequency.setValueAtTime(285, now);
    pop.frequency.exponentialRampToValueAtTime(510, now + 0.18);
    crystal.frequency.setValueAtTime(640, now + 0.16);
    crystal.frequency.exponentialRampToValueAtTime(1480, now + 0.68);
    shimmer.frequency.setValueAtTime(980, now + 0.56);
    shimmer.frequency.exponentialRampToValueAtTime(2140, now + 1.05);
    tail.frequency.setValueAtTime(540, now + 1);
    tail.frequency.exponentialRampToValueAtTime(250, now + 1.7);
    tail.frequency.exponentialRampToValueAtTime(108, now + 2.9);
    popGain.gain.setValueAtTime(0.0001, now);
    popGain.gain.exponentialRampToValueAtTime(0.38, now + 0.035);
    popGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.23);
    crystalGain.gain.setValueAtTime(0.0001, now + 0.14);
    crystalGain.gain.exponentialRampToValueAtTime(0.42, now + 0.23);
    crystalGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.76);
    shimmerGain.gain.setValueAtTime(0.0001, now + 0.54);
    shimmerGain.gain.exponentialRampToValueAtTime(0.36, now + 0.66);
    shimmerGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.12);
    tailGain.gain.setValueAtTime(0.0001, now + 0.98);
    tailGain.gain.exponentialRampToValueAtTime(0.27, now + 1.12);
    tailGain.gain.exponentialRampToValueAtTime(0.0001, now + 2.94);
    pop.connect(popGain).connect(master);
    crystal.connect(crystalGain).connect(master);
    shimmer.connect(shimmerGain).connect(master);
    tail.connect(tailGain).connect(master);
    pop.start(now);
    crystal.start(now + 0.14);
    shimmer.start(now + 0.54);
    tail.start(now + 0.98);
    pop.stop(now + 0.24);
    crystal.stop(now + 0.78);
    shimmer.stop(now + 1.14);
    tail.stop(now + 2.97);
  } catch {
    // The visible live status is the accessible fallback when audio is unavailable.
  }
};

const playPhaserSfx = async () => {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return;

  try {
    if (!powerUpAudioContext || powerUpAudioContext.state === 'closed') {
      powerUpAudioContext = new AudioContextClass();
    }
    const context = powerUpAudioContext;
    if (context.state === 'suspended') await context.resume();
    if (context.state !== 'running') return;

    const now = context.currentTime + 0.015;
    const master = context.createGain();
    master.gain.setValueAtTime(0.0001, now);
    master.gain.exponentialRampToValueAtTime(0.24, now + 0.03);
    master.gain.setValueAtTime(0.2, now + 1.12);
    master.gain.exponentialRampToValueAtTime(0.065, now + 1.68);
    master.gain.exponentialRampToValueAtTime(0.0001, now + 3.72);
    master.connect(context.destination);

    const alert = context.createOscillator();
    const charge = context.createOscillator();
    const pew = context.createOscillator();
    const confirm = context.createOscillator();
    const tail = context.createOscillator();
    const alertGain = context.createGain();
    const chargeGain = context.createGain();
    const pewGain = context.createGain();
    const poofGain = context.createGain();
    const confirmGain = context.createGain();
    const tailGain = context.createGain();
    alert.type = 'square';
    charge.type = 'sine';
    pew.type = 'sawtooth';
    confirm.type = 'triangle';
    tail.type = 'sine';
    alert.frequency.setValueAtTime(880, now);
    alert.frequency.exponentialRampToValueAtTime(660, now + 0.13);
    charge.frequency.setValueAtTime(160, now + 0.16);
    charge.frequency.exponentialRampToValueAtTime(980, now + 0.74);
    pew.frequency.setValueAtTime(1180, now + 0.76);
    pew.frequency.exponentialRampToValueAtTime(145, now + 0.98);
    confirm.frequency.setValueAtTime(660, now + 1.4);
    confirm.frequency.exponentialRampToValueAtTime(1320, now + 1.7);
    tail.frequency.setValueAtTime(410, now + 1.7);
    tail.frequency.exponentialRampToValueAtTime(172, now + 2.4);
    tail.frequency.exponentialRampToValueAtTime(82, now + 3.65);
    alertGain.gain.setValueAtTime(0.0001, now);
    alertGain.gain.exponentialRampToValueAtTime(0.42, now + 0.025);
    alertGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.15);
    chargeGain.gain.setValueAtTime(0.0001, now + 0.14);
    chargeGain.gain.exponentialRampToValueAtTime(0.46, now + 0.25);
    chargeGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.78);
    pewGain.gain.setValueAtTime(0.0001, now + 0.74);
    pewGain.gain.exponentialRampToValueAtTime(0.9, now + 0.8);
    pewGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.04);
    confirmGain.gain.setValueAtTime(0.0001, now + 1.38);
    confirmGain.gain.exponentialRampToValueAtTime(0.46, now + 1.45);
    confirmGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.82);
    tailGain.gain.setValueAtTime(0.0001, now + 1.68);
    tailGain.gain.exponentialRampToValueAtTime(0.25, now + 1.8);
    tailGain.gain.exponentialRampToValueAtTime(0.0001, now + 3.7);
    const poofBuffer = context.createBuffer(1, Math.floor(context.sampleRate * 0.28), context.sampleRate);
    const poofData = poofBuffer.getChannelData(0);
    for (let index = 0; index < poofData.length; index += 1) poofData[index] = (Math.random() * 2 - 1) * (1 - index / poofData.length);
    const poof = context.createBufferSource();
    poof.buffer = poofBuffer;
    poofGain.gain.setValueAtTime(0.0001, now + 1);
    poofGain.gain.exponentialRampToValueAtTime(0.34, now + 1.03);
    poofGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.3);
    alert.connect(alertGain).connect(master);
    charge.connect(chargeGain).connect(master);
    pew.connect(pewGain).connect(master);
    poof.connect(poofGain).connect(master);
    confirm.connect(confirmGain).connect(master);
    tail.connect(tailGain).connect(master);
    alert.start(now);
    charge.start(now + 0.14);
    pew.start(now + 0.74);
    poof.start(now + 1);
    confirm.start(now + 1.38);
    tail.start(now + 1.68);
    alert.stop(now + 0.16);
    charge.stop(now + 0.8);
    pew.stop(now + 1.05);
    confirm.stop(now + 1.84);
    tail.stop(now + 3.74);
  } catch {
    // The visible live status is the accessible fallback when audio is unavailable.
  }
};

const activatePowerUp = (item, button) => {
  if (!item.powerUp) return;
  resetPowerUp();
  currentPowerUpButton = button;
  button.disabled = true;
  if (item.powerUp.effect === 'energy') {
    void playEnergySfx();
    house.classList.add('powerup-energy');
  } else if (item.powerUp.effect === 'pizza') {
    void playPizzaSfx();
    house.classList.add('powerup-pizza');
    powerUpFlash.classList.add('is-pizza');
    bombarGallery.classList.add('powerup-pizza');
  } else if (item.powerUp.effect === 'chocolate') {
    void playChocolateSfx();
    house.classList.add('powerup-chocolate');
    powerUpFlash.classList.add('is-chocolate');
    bombarGallery.classList.add('powerup-chocolate');
  } else if (item.powerUp.effect === 'phaser') {
    void playPhaserSfx();
    house.classList.add('powerup-phaser');
    powerUpFlash.classList.add('is-phaser');
    bombarGallery.classList.add('powerup-phaser');
    const scene = bombarGrid.querySelector('.phaser-scene');
    scene?.classList.add('is-active');
    bombarPowerUpStatus.classList.add('is-sr-only');
    bombarPowerUpStatus.textContent = item.powerUp.scene.detected;
    phaserSceneTimer = window.setTimeout(() => {
      scene?.classList.add('is-resolved');
      bombarPowerUpStatus.textContent = item.powerUp.scene.resolved;
    }, 2050);
  } else {
    return;
  }
  powerUpFlash.classList.add('is-active');
  if (item.powerUp.effect !== 'phaser') bombarPowerUpStatus.textContent = item.powerUp.status;
  powerUpTimer = window.setTimeout(resetPowerUp, item.powerUp.effect === 'phaser' ? 3850 : 3050);
};

const renderBombarCollection = () => {
  resetPowerUp();
  bombarExhibitOpen = false;
  bombarGallery.classList.remove('is-exhibit');
  bombarEyebrow.textContent = 'BOMBAR — SOS HOME OFFICE';
  bombarGalleryTitle.textContent = 'Kit de sobrevivência Home Office';
  bombarIntro.textContent = 'Kit de sobrevivência para quando o Home Office pede reforço.';
  bombarGrid.className = 'bombar-grid';
  bombarGrid.replaceChildren(...survivalItems.map(createBombarCard));
  closeBombarGalleryButton.textContent = 'Voltar à Rich House';
  closeBombarGalleryButton.classList.remove('bombar-back');
  closeBombarGalleryButton.removeAttribute('aria-label');
  closeBombarGalleryButton.removeAttribute('title');
  bombarActions.replaceChildren(closeBombarGalleryButton);
};

const openBombarGallery = ({ focusFirst = true } = {}) => {
  threshold.hidden = true;
  content.hidden = true;
  discover('bar');
  renderBombarCollection();
  bombarGallery.hidden = false;
  if (focusFirst) bombarGrid.querySelector('button')?.focus();
};

const showBombarExhibit = (item) => {
  resetPowerUp();
  bombarExhibitOpen = true;
  bombarGallery.classList.add('is-exhibit');
  bombarEyebrow.textContent = 'Objeto selecionado · SOS HOME OFFICE';
  bombarGalleryTitle.textContent = item.name;
  bombarIntro.textContent = item.copy;
  const image = document.createElement('img');
  image.src = item.assetSrc;
  image.alt = '';
  bombarGrid.className = 'bombar-prop-stage';
  const phaserScene = item.powerUp?.effect === 'phaser' ? document.createElement('div') : null;
  if (phaserScene) {
    phaserScene.className = 'phaser-scene';
    phaserScene.setAttribute('aria-hidden', 'true');
    phaserScene.innerHTML = `
      <span class="phaser-target">${item.powerUp.scene.detected}</span>
      <span class="phaser-beam"></span>
      <span class="phaser-impact"></span>
      <span class="phaser-result">${item.powerUp.scene.resolved}</span>
    `;
  }
  bombarGrid.replaceChildren(image, ...(phaserScene ? [phaserScene] : []));
  closeBombarGalleryButton.textContent = '←';
  closeBombarGalleryButton.classList.add('bombar-back');
  closeBombarGalleryButton.setAttribute('aria-label', 'Voltar ao BOMBAR');
  closeBombarGalleryButton.title = 'Voltar ao BOMBAR';
  bombarActions.replaceChildren(closeBombarGalleryButton);
  if (item.powerUp) {
    const powerUpButton = document.createElement('button');
    powerUpButton.className = 'bombar-powerup';
    powerUpButton.type = 'button';
    powerUpButton.textContent = item.powerUp.label;
    powerUpButton.setAttribute('aria-label', `${item.powerUp.label}: ${item.name}`);
    powerUpButton.addEventListener('click', () => activatePowerUp(item, powerUpButton));
    bombarActions.prepend(powerUpButton);
  }
  closeBombarGalleryButton.focus();
};

const closeBombarExhibit = ({ restoreFocus = false } = {}) => {
  const itemId = selectedBombarButton?.dataset.itemId;
  renderBombarCollection();
  if (restoreFocus) bombarGrid.querySelector(`button[data-item-id="${itemId}"]`)?.focus();
};

const closeBombarGallery = ({ restoreFocus = false } = {}) => {
  resetPowerUp();
  bombarExhibitOpen = false;
  bombarGallery.hidden = true;
  clearDiscovery();
  if (restoreFocus) lastTrigger?.focus();
};

const thumbnailUrl = (media, variant = 'maxresdefault') => `https://i.ytimg.com/vi/${media.id}/${variant}.jpg`;

const createMediaThumbnail = (media, { onSelect, ariaLabel } = {}) => {
  const item = document.createElement('button');
  item.className = 'media-thumbnail';
  item.type = 'button';
  item.dataset.mediaId = media.id;
  item.setAttribute('aria-label', ariaLabel ?? `Preparar ${media.title} no VJ Screen`);

  const image = document.createElement('img');
  image.src = thumbnailUrl(media);
  image.alt = '';
  image.addEventListener('error', () => {
    if (!image.dataset.fallback) {
      image.dataset.fallback = 'true';
      image.src = thumbnailUrl(media, 'hqdefault');
    }
  });

  const meta = document.createElement('span');
  meta.className = 'media-thumbnail__meta';
  const title = document.createElement('span');
  title.textContent = media.title;
  meta.append(title);
  item.append(image, meta);
  item.addEventListener('click', () => {
    selectedMediaButton = item;
    (onSelect ?? (() => prepareTransmission(media)))();
  });
  return item;
};

const createResidentCard = () => {
  return createMediaThumbnail(residentSet, {
    ariaLabel: `Reproduzir ${residentSet.title} diretamente no DJ Deck`,
    onSelect: startResidentSet,
  });
};

const startResidentSet = () => {
  destroyTransmission();
  residentSetPlaying = true;
  const player = document.createElement('div');
  player.className = 'resident-player';
  const iframe = document.createElement('iframe');
  iframe.title = residentSet.title;
  iframe.allow = 'autoplay; encrypted-media; picture-in-picture';
  iframe.referrerPolicy = 'strict-origin-when-cross-origin';
  iframe.src = `https://www.youtube-nocookie.com/embed/${residentSet.id}?autoplay=1&controls=1&playsinline=1&rel=0`;
  const closeButton = document.createElement('button');
  closeButton.type = 'button';
  closeButton.textContent = 'Encerrar Resident Set';
  closeButton.addEventListener('click', () => closeResidentSet({ restoreFocus: true }));
  player.append(iframe, closeButton);
  mediaResident.replaceChildren(player);
  closeButton.focus();
};

const openMediaGallery = ({ focusFirst = true } = {}) => {
  threshold.hidden = true;
  content.hidden = true;
  discover('media');
  residentSetPlaying = false;
  mediaResident.replaceChildren(createResidentCard());
  mediaSelection.replaceChildren(...richHouseSelection.map(createMediaThumbnail));
  mediaGallery.hidden = false;
  if (focusFirst) mediaResident.querySelector('button')?.focus();
};

const closeMediaGallery = ({ restoreFocus = false } = {}) => {
  closeResidentSet();
  mediaGallery.hidden = true;
  clearDiscovery();
  if (restoreFocus) lastTrigger?.focus();
};

const returnToDeck = () => {
  destroyTransmission();
  openMediaGallery({ focusFirst: false });
  mediaGallery.querySelector(`[data-media-id="${selectedMedia.id}"]`)?.focus();
};

const renderContentItems = (system) => {
  const items = select('#items');
  items.replaceChildren(...system.items.map(createItem));
};

const discover = (id) => {
  const system = interactiveSystems[id];
  currentSystemId = id;
  house.dataset.active = id;
  zoneButtons.forEach((button) => button.classList.toggle('active', button.dataset.id === id));
  select('#dname').textContent = system.name;
  select('#dcopy').textContent = system.copy;
  detail.hidden = false;
};

const clearDiscovery = () => {
  house.dataset.active = '';
  zoneButtons.forEach((button) => button.classList.remove('active'));
  detail.hidden = true;
};

const openThreshold = (id) => {
  lastTrigger = zoneButtons.find((button) => button.dataset.id === id) ?? null;
  if (id === 'media') {
    openMediaGallery();
    return;
  }
  if (id === 'records') {
    openRecordGallery();
    return;
  }
  if (id === 'bar') {
    openBombarGallery();
    return;
  }
  if (id === 'exit') {
    destroyTransmission();
    closeResidentSet();
  }
  discover(id);
  const system = interactiveSystems[id];
  select('#tname').textContent = system.name;
  select('#tcopy').textContent = system.copy;
  const isExit = id === 'exit';
  enterButton.textContent = isExit ? 'VOLTAR À BOMBA LAND' : 'Explorar conteúdo';
  backButton.textContent = isExit ? 'VOLTAR À RICH HOUSE' : 'Voltar à Rich House';
  threshold.hidden = false;
  enterButton.focus();
};

const closeThreshold = () => {
  threshold.hidden = true;
  lastTrigger?.focus();
};

const openContent = () => {
  const system = interactiveSystems[currentSystemId];
  threshold.hidden = true;
  select('#cname').textContent = system.name;
  select('#ccopy').textContent = system.copy;
  renderContentItems(system);
  content.hidden = false;
  returnButton.focus();
};

const returnToHouse = () => {
  content.hidden = true;
  threshold.hidden = true;
  clearDiscovery();
  lastTrigger?.focus();
};

const closeAccessibleList = () => {
  listOverlay.hidden = true;
  listToggle.focus();
};

const currentDialog = () => {
  if (!threshold.hidden) return threshold;
  if (!content.hidden) return content;
  if (!listOverlay.hidden) return listOverlay;
  return null;
};

const routes = {
  media: { ArrowRight: 'bar', ArrowDown: 'records' },
  bar: { ArrowLeft: 'media', ArrowDown: 'exit' },
  records: { ArrowUp: 'media', ArrowRight: 'exit' },
  exit: { ArrowUp: 'bar', ArrowLeft: 'records' },
};

document.addEventListener('keydown', (event) => {
  const dialog = currentDialog();

  if (dialog) {
    if (event.key === 'Escape') {
      event.preventDefault();
      if (dialog === threshold) closeThreshold();
      else if (dialog === content) returnToHouse();
      else closeAccessibleList();
      return;
    }

    if (event.key === 'Tab') {
      const focusable = [...dialog.querySelectorAll('button:not([disabled])')];
      const first = focusable[0];
      const last = focusable.at(-1);

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
    return;
  }

  if (event.key === 'Escape' && !projection.hidden) {
    event.preventDefault();
    returnToDeck();
    return;
  }

  if (event.key === 'Escape' && residentSetPlaying) {
    event.preventDefault();
    closeResidentSet({ restoreFocus: true });
    return;
  }

  if (event.key === 'Escape' && !mediaGallery.hidden) {
    event.preventDefault();
    closeMediaGallery({ restoreFocus: true });
    return;
  }

  if (event.key === 'Escape' && !recordExhibit.hidden) {
    event.preventDefault();
    closeAlbumExhibit({ restoreFocus: true });
    return;
  }

  if (event.key === 'Escape' && !bombarGallery.hidden && bombarExhibitOpen) {
    event.preventDefault();
    closeBombarExhibit({ restoreFocus: true });
    return;
  }

  if (event.key === 'Escape' && !bombarGallery.hidden) {
    event.preventDefault();
    closeBombarGallery({ restoreFocus: true });
    return;
  }

  if (event.key === 'Escape' && !recordGallery.hidden) {
    event.preventDefault();
    closeRecordGallery({ restoreFocus: true });
    return;
  }

  const nextId = routes[document.activeElement?.dataset?.id]?.[event.key];
  if (nextId) {
    event.preventDefault();
    zoneButtons.find((button) => button.dataset.id === nextId)?.focus();
  }
});

zoneButtons.forEach((button) => {
  button.addEventListener('mouseenter', () => discover(button.dataset.id));
  button.addEventListener('focus', () => discover(button.dataset.id));
  button.addEventListener('mouseleave', () => {
    if (document.activeElement !== button) clearDiscovery();
  });
  button.addEventListener('click', () => openThreshold(button.dataset.id));
});

enterButton.addEventListener('click', () => {
  if (currentSystemId === 'exit') {
    window.location.assign(bombaClubUrl);
    return;
  }
  openContent();
});
backButton.addEventListener('click', closeThreshold);
returnButton.addEventListener('click', returnToHouse);
playButton.addEventListener('click', togglePlayback);
audioButton.addEventListener('click', toggleAudio);
closeProjectionButton.addEventListener('click', returnToDeck);
returnToDeckButton.addEventListener('click', returnToDeck);
closeRecordExhibitButton.addEventListener('click', () => closeAlbumExhibit({ restoreFocus: true }));
closeRecordGalleryButton.addEventListener('click', () => closeRecordGallery({ restoreFocus: true }));
closeBombarGalleryButton.addEventListener('click', () => {
  if (bombarExhibitOpen) {
    closeBombarExhibit({ restoreFocus: true });
    return;
  }
  closeBombarGallery({ restoreFocus: true });
});
closeMediaGalleryButton.addEventListener('click', () => closeMediaGallery({ restoreFocus: true }));

Object.entries(interactiveSystems).forEach(([id, system]) => {
  const listItem = document.createElement('li');
  const button = document.createElement('button');
  const title = document.createElement('strong');
  const description = document.createElement('small');

  title.textContent = system.listName;
  description.textContent = system.copy;
  button.append(title, description);
  button.addEventListener('click', () => {
    listOverlay.hidden = true;
    openThreshold(id);
  });
  listItem.append(button);
  richList.append(listItem);
});

listToggle.addEventListener('click', () => {
  listOverlay.hidden = false;
  richList.querySelector('button')?.focus();
});

closeList.addEventListener('click', closeAccessibleList);

motionButton.addEventListener('click', () => {
  const reduced = document.body.classList.toggle('reduced');
  motionButton.setAttribute('aria-pressed', String(reduced));
  motionButton.textContent = reduced ? 'Ativar movimento' : 'Reduzir movimento';
});
