const projects = [
  {cat:"integration", client:"Bpifrance", logo:"assets/logos/Logo_Bpifrance.svg.png", title:"Le parcours du porteur de projet",
    goals:"Présenter l'ensemble des métiers, des offres et des solutions de Bpifrance aux nouveaux collaborateurs.",
    solution:"Un jeu physique et numérique de 90 minutes en équipe dans lequel les joueurs accompagnent un porteur de projet à travers les grandes étapes du développement de son entreprise.",
    imgs:["assets/image24.png","assets/image21.png"]},
  {cat:"integration", client:"Nestlé", logo:"assets/logos/Logo_Nestle.svg.png", title:"La capsule temporelle One Nestlé",
    goals:"Présenter le siège et l'ensemble des entreprises du Groupe Nestlé aux nouvelles équipes pour créer un esprit One Nestlé.",
    solution:"Une journée immersive autour d'une capsule temporelle envoyée par une ingénieure Nestlé du futur. 4 temps de jeu : parcours dans le siège, jeu de cartes sur les valeurs, jeu de dés sur l'éthique, escape game en kit.",
    imgs:["assets/image11.jpg","assets/image6.jpg"]},
  {cat:"integration", client:"SEMCODA", logo:"assets/logos/Logo_Semcoda.svg.png", title:"La station spatiale des métiers",
    goals:"Fidéliser les nouveaux arrivants lors d'un temps fort et présenter les principaux pôles de l'entreprise.",
    solution:"Jeu physique de 60 min en format mallette : les joueurs découvrent une station spatiale et résolvent les problèmes de ses habitants extraterrestres à travers les métiers de la SEMCODA.",
    imgs:["assets/image12.jpg","assets/image3.jpg"]},
  {cat:"integration", client:"Bouygues Telecom", logo:"assets/logos/bouygues_telecom.png", title:"La ville du futur",
    goals:"Présenter les innovations technologiques aux nouveaux techniciens et replacer la télécommunication au cœur des défis de la ville de demain.",
    solution:"Serious game alternant physique et numérique : défis avec éléments physiques + tablette pour les énigmes. Chaque défi illumine une plaquette pour reconstituer la ville du futur.",
    imgs:["assets/image29.png","assets/image14.png","assets/image7.jpg"]},
  {cat:"integration", client:"Derichebourg × Elior", logo:"assets/logos/DERICHEBOURG-multiservices.png", title:"Trois jeux pour une fusion",
    goals:"Remodeler le parcours d'intégration pour unir les équipes issues de la fusion en mettant en avant les points communs.",
    solution:"Trois jeux, trois formats : tableau magnétique d'énigmes pour identifier les entreprises du groupe, jeu de cartes sur les métiers, escape game en sac à dos sur l'excellence de service.",
    imgs:["assets/image13.png","assets/image35.png"]},

  {cat:"sensibilisation", client:"Cap Métiers", logo:"assets/logos/cap-metiers-na-b1f21a95.png", title:"L'enquête des métiers",
    goals:"Permettre aux jeunes de s'interroger de manière ludique sur leurs représentations en matière de formation et d'orientation professionnelle.",
    solution:"Jeu de plateau narratif en équipe dans un monde fantaisiste. Les joueurs mènent une enquête sur l'univers des métiers et découvrent qu'en matière de parcours, les apparences sont trompeuses.",
    imgs:["assets/image31.jpg","assets/image23.jpg"]},
  {cat:"sensibilisation", client:"Enedis", logo:"assets/logos/Logo_enedis_header.png", title:"Consignation à la carte",
    goals:"Sensibiliser les équipes terrain sur l'importance et les enjeux de la consignation électrique.",
    solution:"Jeu de cartes rapide (10 min/partie) façon 1000 bornes : les joueurs doivent réussir leur consignation électrique en jouant les cartes dans l'ordre, avec aléas et bonus pour pimenter la course.",
    imgs:["assets/image33.png","assets/image26.png"]},
  {cat:"sensibilisation", client:"PAPI", logo:"assets/logos/Papi.jpg", title:"Risques inondation : escape room mobile",
    goals:"Sensibiliser les élus locaux aux risques inondations et aux actions à mettre en place en cas d'urgence.",
    solution:"Escape room mobile installable directement en mairie. Le jeu se déroule dans 3 villes (amont, aval, éloignée du cours d'eau) pour aborder des situations et dispositifs adaptés à chacune.",
    imgs:["assets/image47.jpg","assets/image32.jpg"]},
  {cat:"sensibilisation", client:"Sécurité Sociale", logo:"assets/logos/logo-ucanss-bleu.jpg", title:"Désinsertion professionnelle",
    goals:"Sensibiliser les managers d'équipe à la désinsertion professionnelle : comment la repérer et comment réagir.",
    solution:"Jeu digital immersif de 30 min, conçu sur le principe d'une « histoire dont vous êtes le héros ». L'apprenant incarne un manager confronté à une baisse d'efficacité dans son équipe.",
    imgs:["assets/image28.png","assets/image42.png","assets/image37.jpg"]},

  {cat:"formation", client:"L'Oréal", logo:"assets/logos/LOreal-Logo.jpg", title:"Innovation R&D : journée serious game",
    goals:"Former les nouveaux directeur·rices de la section Innovation sur les grands chantiers R&D de L'Oréal et les méthodes de travail.",
    solution:"Deux serious games sur une journée : matin, parcours d'énigmes sur les enjeux et projets d'innovation ; après-midi, jeu de stratégie de 3h pour créer un nouveau produit selon les contraintes du marché.",
    imgs:["assets/image36.jpg","assets/image40.jpg"]},
  {cat:"formation", client:"SFPI", logo:"assets/logos/SFPI.PA_BIG-63956f61.png", title:"Le cycle de vie commercial",
    goals:"Former les équipes commerciales sur les nouveaux processus de gestion de clientèle.",
    solution:"3 mini-jeux narratifs de 15 min en individuel : transformation du prospect, modification de commande, gestion d'imprévu. Chaque choix amène à des embranchements différents. Chaque apprenant vit une histoire unique.",
    imgs:["assets/image61.png","assets/image45.png","assets/image38.png"]},
  {cat:"formation", client:"Spie Batignolles", logo:"assets/logos/Spie_Batignolles_Logo.svg.png", title:"Onboarding digital ludique",
    goals:"Digitaliser le parcours de formation en le rendant plus ludique, dynamique et impactant. Former les nouveaux arrivants sur les fondamentaux de l'entreprise.",
    solution:"Plusieurs mini-jeux numériques accessibles chaque semaine pour jalonner la progression. Capsules d'interviews de la Direction et visite vidéo interactive d'un chantier en histoire dont vous êtes le héros.",
    imgs:["assets/image41.jpg","assets/image66.jpg"]},

  {cat:"communication", client:"Piscine Waterair", logo:"assets/logos/Logo-waterair-petit.png", title:"Les Bottogans · 50 ans en 6 jeux",
    goals:"Fêter les 50 ans de Piscine Waterair en contexte post-Covid, avec 6 jeux étalés sur 6 mois.",
    solution:"6 serious games de 15 à 45 min en équipe, dans un univers de SF. Les joueurs accompagnent la famille extraterrestre des Bottogans à travers tout le cycle d'acquisition d'une piscine.",
    imgs:["assets/image46.png","assets/image53.png"]},
  {cat:"communication", client:"Michelin", logo:"assets/logos/Michelin-Logo.jpg", title:"Innovation Challenge · 8 stations",
    goals:"Présenter les principales innovations de Michelin à l'ensemble des équipes.",
    solution:"Jeu interactif en 8 étapes pour plusieurs centaines de participants en simultané, dans un grand espace cylindrique. Validation par QR code, classement général. Redéployé en Inde et aux États-Unis.",
    imgs:["assets/image55.jpg","assets/image43.png"]},
  {cat:"communication", client:"Cartier", logo:"assets/logos/images.png", title:"World Meeting · 7 escape rooms",
    goals:"Présenter les réussites annuelles du département Manufacturing aux autres départements de Cartier.",
    solution:"7 escape rooms de 15 min. Coopération + compétition entre équipes pour le meilleur temps, tout en découvrant les principaux travaux annuels du département Manufacturing.",
    imgs:["assets/image52.jpg","assets/image58.png"]},
  {cat:"communication", client:"Vilebrequin", logo:"assets/logos/Vilebrequin-logo.jpg", title:"Merguez Tuning Show",
    goals:"Célébrer la chaîne YouTube Vilebrequin lors de son festival du Merguez Tuning Show.",
    solution:"10 escape games de 10 min à bord d'une voiture. Équipes de 2 à 4 joueurs s'affrontent sur leurs connaissances de l'univers de la chaîne automobile Vilebrequin.",
    imgs:["assets/image70.jpg","assets/image50.jpg","assets/image57.jpg"]},
  {cat:"communication", client:"Signia Hearing", logo:"assets/logos/signia-new-logo.jpg", title:"4 énigmes sonores",
    goals:"Présenter les nouvelles solutions Signia Hearing aux étudiants audioprothésistes.",
    solution:"Sur le salon de l'audioprothèse, expérience interactive : 4 énigmes sonores chronométrées sur 10 min, chacune mettant en lumière une fonctionnalité clé d'un nouveau produit Signia.",
    imgs:["assets/image54.jpg","assets/image62.jpg"]},

  {cat:"changement", client:"La Poste", logo:"assets/logos/La_Poste_2022.svg", title:"Plan stratégique 2025 · La ville de demain",
    goals:"Présenter le plan stratégique 2025 à l'ensemble des équipes terrain de La Poste (130 000 personnes).",
    solution:"Jeu en équipe de 40 min, sans points ni classement, dans un univers familier. Les équipes parcourent la ville de demain et rencontrent les habitants pour comprendre comment La Poste les aide au quotidien.",
    imgs:["assets/image59.jpg","assets/image72.png"]},
  {cat:"changement", client:"La Poste", logo:"assets/logos/La_Poste_2022.svg", title:"Évolutions Courrier & Colis",
    goals:"Présenter les évolutions de l'offre Courrier et Colis aux équipes terrain.",
    solution:"Jeu digital de 45 min : les équipes vont à la rencontre de clients particuliers et professionnels pour répondre à leurs interrogations et présenter les nouveaux produits et services.",
    imgs:["assets/image78.png","assets/image71.png"]},
  {cat:"changement", client:"Enedis (Linky)", logo:"assets/logos/Logo_enedis_header.png", title:"L'Odyssée Lunaire",
    goals:"Présenter Linky et ses apports aux équipes en contact avec les clients.",
    solution:"Jeu digital immersif et collaboratif de 30 min. En 2219, les joueurs incarnent une équipe de techniciens devant rétablir les connexions vitales d'une cité lunaire après une tempête solaire. Métaphore engageante des capacités de Linky.",
    imgs:["assets/image64.jpg","assets/image73.png"]},
  {cat:"changement", client:"DynamiKmood", logo:"assets/logos/dynamickmood.webp", title:"Théorie du renversement",
    goals:"Accompagner les changements par le coaching.",
    solution:"Jeu de cartes basé sur la théorie du renversement. À partir d'une carte situation, identification des rôles, émotions et motivations du quotidien. Mettre des mots sur des ressentis et trouver des solutions avec le coach.",
    imgs:["assets/image77.jpg","assets/image76.png"]},

  {cat:"recrutement", client:"Société Générale", logo:"assets/logos/logo-societe-generale.png", title:"Choix sous pression",
    goals:"Avant-dernière étape du recrutement de contrôleurs de gestion : mettre les candidats en situation de stress pour identifier des compétences clefs.",
    solution:"Jeu numérique de 45 min en équipe : choisir laquelle des deux banques est la plus prometteuse. Particularité : les joueurs n'auront pas le temps d'accéder à tous les éléments. Ils doivent prioriser sous pression.",
    imgs:["assets/image80.png","assets/image69.png"]},
  {cat:"recrutement", client:"Cartier", logo:"assets/logos/images.png", title:"Tech & Luxe · détection de talents",
    goals:"Présenter les enjeux technologiques de la joaillerie et l'horlogerie de luxe à des étudiants en école d'ingénieurs et déceler les meilleurs talents.",
    solution:"Jeu numérique de 60 min en équipe permettant aux recruteurs d'observer les soft skills des candidats : organisation, leadership, observation, rigueur, capacité d'analyse, prise de décision.",
    imgs:["assets/image67.png","assets/image75.jpg"]},
];

const projectsEl = document.getElementById('projects');
const catLabels = {
  integration:"Intégration",
  sensibilisation:"Sensibilisation",
  formation:"Formation",
  communication:"Communication",
  changement:"Conduite du changement",
  recrutement:"Recrutement"
};

function brandSlide(p, active=true){
  return `<div class="slide brand${active?' active':''}">
    <div class="brand-card">
      <img class="logo-img" src="${p.logo}" alt="${p.client} logo">
    </div>
  </div>`;
}

function renderProjects(filter='all'){
  if(!projectsEl) return;
  projectsEl.innerHTML = projects
    .filter(p => filter === 'all' || p.cat === filter)
    .map(p => {
      const idx = projects.indexOf(p);
      const total = p.imgs.length + 1;
      const imgSlides = p.imgs.map(src=>`<div class="slide"><img loading="lazy" src="${src}" alt="${p.title}"></div>`).join('');
      const slides = brandSlide(p, true) + imgSlides;
      const dots = `<div class="carousel-dots">${Array.from({length:total},(_,i)=>`<button class="carousel-dot${i===0?' active':''}" data-i="${i}" aria-label="Slide ${i+1}"></button>`).join('')}</div>`;
      const arrows = `<button class="carousel-arrow carousel-prev" aria-label="Précédent">‹</button><button class="carousel-arrow carousel-next" aria-label="Suivant">›</button>`;
      const counter = `<div class="carousel-counter"><span class="cur">1</span> / ${total}</div>`;
      return `
      <article class="project reveal" data-cat="${p.cat}" data-i="${idx}">
        <div class="img-wrap">
          <span class="cat-tag">${catLabels[p.cat]}</span>
          ${counter}
          <div class="carousel">${slides}</div>
          ${arrows}
          ${dots}
        </div>
        <div class="body">
          <span class="client">${p.client}</span>
          <h3>${p.title}</h3>
          <p>${p.goals}</p>
          <span class="more">Voir le projet</span>
        </div>
      </article>`;
    }).join('');
  document.querySelectorAll('.project').forEach(setupCardCarousel);
  if(window.observer) document.querySelectorAll('.reveal').forEach(el => window.observer.observe(el));
}

function setupCardCarousel(card){
  const slides = card.querySelectorAll('.carousel .slide');
  if(slides.length <= 1) return;
  const dots = card.querySelectorAll('.carousel-dot');
  const counter = card.querySelector('.carousel-counter .cur');
  let i = 0, autoTimer;
  const show = (idx) => {
    i = (idx + slides.length) % slides.length;
    slides.forEach((s,k)=>s.classList.toggle('active',k===i));
    dots.forEach((d,k)=>d.classList.toggle('active',k===i));
    if(counter) counter.textContent = i+1;
  };
  card.querySelector('.carousel-prev')?.addEventListener('click', e => {
    e.stopPropagation(); clearInterval(autoTimer); show(i-1);
  });
  card.querySelector('.carousel-next')?.addEventListener('click', e => {
    e.stopPropagation(); clearInterval(autoTimer); show(i+1);
  });
  dots.forEach((d,k)=> d.addEventListener('click', e => {
    e.stopPropagation(); clearInterval(autoTimer); show(k);
  }));
  card.addEventListener('mouseenter', () => {
    autoTimer = setInterval(()=>show(i+1), 1800);
  });
  card.addEventListener('mouseleave', () => clearInterval(autoTimer));
}

document.querySelectorAll('.filter button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProjects(btn.dataset.filter);
  });
});

const modal = document.getElementById('modal');
const modalCarousel = document.getElementById('modalCarousel');
const modalClient = document.getElementById('modalClient');
const modalTitle = document.getElementById('modalTitle');
const modalGoals = document.getElementById('modalGoals');
const modalSolution = document.getElementById('modalSolution');
let modalCarouselCleanup = null;

function buildModalCarousel(p){
  if(modalCarouselCleanup) modalCarouselCleanup();
  const imgs = p.imgs;
  const total = imgs.length + 1;
  const imgSlides = imgs.map(src=>`<div class="slide"><img src="${src}" alt=""></div>`).join('');
  const slides = brandSlide(p, true) + imgSlides;
  const dots = `<div class="carousel-dots">${Array.from({length:total},(_,i)=>`<button class="carousel-dot${i===0?' active':''}" data-i="${i}"></button>`).join('')}</div>`;
  const arrows = `<button class="carousel-arrow carousel-prev">‹</button><button class="carousel-arrow carousel-next">›</button>`;
  const counter = `<div class="carousel-counter"><span class="cur">1</span> / ${total}</div>`;
  modalCarousel.innerHTML = slides + arrows + dots + counter;

  const slideEls = modalCarousel.querySelectorAll('.slide');
  const dotEls = modalCarousel.querySelectorAll('.carousel-dot');
  const cur = modalCarousel.querySelector('.carousel-counter .cur');
  let i = 0;
  const show = (idx) => {
    i = (idx + slideEls.length) % slideEls.length;
    slideEls.forEach((s,k)=>s.classList.toggle('active',k===i));
    dotEls.forEach((d,k)=>d.classList.toggle('active',k===i));
    cur.textContent = i+1;
  };
  const onKey = e => {
    if(!modal.classList.contains('open')) return;
    if(e.key === 'ArrowLeft') show(i-1);
    if(e.key === 'ArrowRight') show(i+1);
  };
  modalCarousel.querySelector('.carousel-prev').addEventListener('click', () => show(i-1));
  modalCarousel.querySelector('.carousel-next').addEventListener('click', () => show(i+1));
  dotEls.forEach((d,k) => d.addEventListener('click', () => show(k)));
  document.addEventListener('keydown', onKey);
  modalCarouselCleanup = () => document.removeEventListener('keydown', onKey);
}

if(projectsEl){
  projectsEl.addEventListener('click', e => {
    if(e.target.closest('.carousel-arrow') || e.target.closest('.carousel-dot')) return;
    const card = e.target.closest('.project');
    if(!card) return;
    const p = projects[+card.dataset.i];
    buildModalCarousel(p);
    modalClient.textContent = p.client;
    modalTitle.innerHTML = p.title;
    modalGoals.textContent = p.goals;
    modalSolution.textContent = p.solution;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
}

function closeModal(){
  if(!modal) return;
  modal.classList.remove('open');
  document.body.style.overflow = '';
}
if(modal){
  document.getElementById('modalClose').addEventListener('click', closeModal);
  modal.addEventListener('click', e => { if(e.target === modal) closeModal(); });
  document.addEventListener('keydown', e => { if(e.key === 'Escape') closeModal(); });
}

renderProjects();
