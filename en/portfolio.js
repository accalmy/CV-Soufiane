const projects = [
  {cat:"integration", client:"Bpifrance", logo:"../assets/logos/Logo_Bpifrance.svg.png", title:"The entrepreneur's journey",
    goals:"Introduce Bpifrance's full range of roles, offers, and solutions to new hires.",
    solution:"A 90-minute physical-and-digital team game in which players support a project leader through the key stages of building a company.",
    imgs:["../assets/image24.png","../assets/image21.png"]},
  {cat:"integration", client:"Nestlé", logo:"../assets/logos/Logo_Nestle.svg.png", title:"The One Nestlé time capsule",
    goals:"Showcase the HQ and all Nestlé Group companies to new teams to build a One Nestlé mindset.",
    solution:"A full-day immersion around a time capsule sent by a future Nestlé engineer. 4 game phases: HQ tour, values card game, ethics dice game, kit-based escape game.",
    imgs:["../assets/image11.jpg","../assets/image6.jpg"]},
  {cat:"integration", client:"SEMCODA", logo:"../assets/logos/Logo_Semcoda.svg.png", title:"The space station of jobs",
    goals:"Engage new hires during a kickoff event and introduce the company's main divisions.",
    solution:"A 60-minute physical game in suitcase format: players discover a space station and solve the problems of its alien inhabitants through SEMCODA's various professions.",
    imgs:["../assets/image12.jpg","../assets/image3.jpg"]},
  {cat:"integration", client:"Bouygues Telecom", logo:"../assets/logos/bouygues_telecom.png", title:"The city of the future",
    goals:"Introduce technological innovations to new technicians and place telecommunications at the heart of tomorrow's urban challenges.",
    solution:"A serious game alternating physical and digital: in-room challenges with physical elements, paired with a tablet for puzzles. Each challenge lights up a tile that builds the city of the future.",
    imgs:["../assets/image29.png","../assets/image14.png","../assets/image7.jpg"]},
  {cat:"integration", client:"Derichebourg × Elior", logo:"../assets/logos/DERICHEBOURG-multiservices.png", title:"Three games for a merger",
    goals:"Redesign the onboarding journey to unite teams from the merger by highlighting common ground.",
    solution:"Three games, three formats: a magnetic puzzle board to identify the group's companies, a card game on roles and skills, and a backpack escape game about service excellence.",
    imgs:["../assets/image13.png","../assets/image35.png"]},

  {cat:"sensibilisation", client:"Cap Métiers", logo:"../assets/logos/cap-metiers-na-b1f21a95.png", title:"The job investigation",
    goals:"Help young people question their views on training, professional environments, and career paths in a playful way.",
    solution:"A narrative team board game set in a fantastical world. Players investigate the universe of professions and discover that career paths are often more flexible than they appear.",
    imgs:["../assets/image31.jpg","../assets/image23.jpg"]},
  {cat:"sensibilisation", client:"Enedis", logo:"../assets/logos/Logo_enedis_header.png", title:"Lockout/tagout card game",
    goals:"Raise awareness among field teams about the importance and stakes of electrical lockout/tagout procedures.",
    solution:"A fast card game (10 min per round), Mille Bornes-style: players must complete their lockout/tagout sequence in the right order, while playing hazard and bonus cards to slow opponents or speed themselves up.",
    imgs:["../assets/image33.png","../assets/image26.png"]},
  {cat:"sensibilisation", client:"PAPI", logo:"../assets/logos/Papi.jpg", title:"Flood risk: mobile escape room",
    goals:"Raise awareness among local officials about flood risks and emergency actions to take.",
    solution:"A mobile escape room deployed directly inside town halls. The game runs in 3 towns (upstream, downstream, far from the river) to cover situations and protocols specific to each.",
    imgs:["../assets/image47.jpg","../assets/image32.jpg"]},
  {cat:"sensibilisation", client:"Sécurité Sociale", logo:"../assets/logos/logo-ucanss-bleu.jpg", title:"Workplace disengagement",
    goals:"Help team managers recognize and respond to signs of workplace disengagement.",
    solution:"A 30-minute immersive digital game built on the choose-your-own-adventure model. The learner steps into the shoes of a manager facing a drop in team performance.",
    imgs:["../assets/image28.png","../assets/image42.png","../assets/image37.jpg"]},

  {cat:"formation", client:"L'Oréal", logo:"../assets/logos/LOreal-Logo.jpg", title:"Innovation R&D: serious game day",
    goals:"Train new Innovation directors on L'Oréal's major R&D programs and methods.",
    solution:"Two serious games over a single day: morning, a puzzle journey introducing innovation projects; afternoon, a 3-hour strategy game where teams design a new product under market constraints.",
    imgs:["../assets/image36.jpg","../assets/image40.jpg"]},
  {cat:"formation", client:"SFPI", logo:"../assets/logos/SFPI.PA_BIG-63956f61.png", title:"The sales lifecycle",
    goals:"Train sales teams on new client management processes.",
    solution:"3 individual narrative mini-games of 15 min: lead conversion, order modification, handling the unexpected. Each choice branches into a different storyline, so each learner experiences a unique journey.",
    imgs:["../assets/image61.png","../assets/image45.png","../assets/image38.png"]},
  {cat:"formation", client:"Spie Batignolles", logo:"../assets/logos/Spie_Batignolles_Logo.svg.png", title:"Playful digital onboarding",
    goals:"Digitize the training journey to make it more playful, dynamic, and impactful. Train new hires on company fundamentals.",
    solution:"Several digital mini-games released weekly to pace the onboarding journey. Includes capsule interviews with leadership and an interactive video tour of a construction site as a branching narrative.",
    imgs:["../assets/image41.jpg","../assets/image66.jpg"]},

  {cat:"communication", client:"Piscine Waterair", logo:"../assets/logos/Logo-waterair-petit.png", title:"The Bottogans · 50 years in 6 games",
    goals:"Celebrate Waterair's 50th anniversary post-Covid, with 6 games spread over 6 months.",
    solution:"6 team serious games of 15 to 45 min, set in a sci-fi universe. Players follow the alien Bottogan family through the full cycle of buying a swimming pool.",
    imgs:["../assets/image46.png","../assets/image53.png"]},
  {cat:"communication", client:"Michelin", logo:"../assets/logos/Michelin-Logo.jpg", title:"Innovation Challenge · 8 stations",
    goals:"Present Michelin's main innovations to all teams.",
    solution:"An 8-step interactive game for hundreds of participants at once, in a large cylindrical space. QR-code answer validation, leaderboard. Later redeployed in India and the United States.",
    imgs:["../assets/image55.jpg","../assets/image43.png"]},
  {cat:"communication", client:"Cartier", logo:"../assets/logos/images.png", title:"World Meeting · 7 escape rooms",
    goals:"Showcase the Manufacturing department's yearly achievements to Cartier's other departments.",
    solution:"7 escape rooms of 15 min. Coop and competition between teams for the best time, while discovering Manufacturing's key annual projects.",
    imgs:["../assets/image52.jpg","../assets/image58.png"]},
  {cat:"communication", client:"Vilebrequin", logo:"../assets/logos/Vilebrequin-logo.jpg", title:"Merguez Tuning Show",
    goals:"Celebrate the Vilebrequin YouTube channel at its Merguez Tuning Show festival.",
    solution:"10 escape games of 10 min played inside a car. Teams of 2 to 4 players compete on their knowledge of the Vilebrequin automotive universe.",
    imgs:["../assets/image70.jpg","../assets/image50.jpg","../assets/image57.jpg"]},
  {cat:"communication", client:"Signia Hearing", logo:"../assets/logos/signia-new-logo.jpg", title:"4 sound puzzles",
    goals:"Introduce Signia Hearing's new solutions to audiology students.",
    solution:"At an audiology trade show, an interactive experience: 4 sound-based puzzles timed over 10 min, each spotlighting a key feature of a new Signia product.",
    imgs:["../assets/image54.jpg","../assets/image62.jpg"]},

  {cat:"changement", client:"La Poste", logo:"../assets/logos/La_Poste_2022.svg", title:"2025 strategic plan · City of tomorrow",
    goals:"Present the 2025 strategic plan to all of La Poste's 130,000 field employees.",
    solution:"A 40-minute team game with no points or rankings, set in a familiar universe. Teams walk through the city of tomorrow and meet residents to see how La Poste supports them daily.",
    imgs:["../assets/image59.jpg","../assets/image72.png"]},
  {cat:"changement", client:"La Poste", logo:"../assets/logos/La_Poste_2022.svg", title:"Mail & Parcel offer updates",
    goals:"Present the latest Mail & Parcel offer changes to field teams.",
    solution:"A 45-minute digital game: teams meet individual and professional customers, answer their questions, and introduce new products and services.",
    imgs:["../assets/image78.png","../assets/image71.png"]},
  {cat:"changement", client:"Enedis (Linky)", logo:"../assets/logos/Logo_enedis_header.png", title:"The Lunar Odyssey",
    goals:"Introduce the Linky meter and its benefits to customer-facing teams.",
    solution:"A 30-minute immersive collaborative digital game. In 2219, players take on the role of a technician team that must restore vital connections to an isolated lunar city after a solar storm. An engaging metaphor for Linky's capabilities.",
    imgs:["../assets/image64.jpg","../assets/image73.png"]},
  {cat:"changement", client:"DynamiKmood", logo:"../assets/logos/dynamickmood.webp", title:"Reversal theory",
    goals:"Support change through coaching.",
    solution:"A card game based on reversal theory. Starting from a situation card, players identify the daily roles, emotions, and motivations at play. The goal: put words on feelings, surface uncomfortable situations, and work with the coach to find professional solutions.",
    imgs:["../assets/image77.jpg","../assets/image76.png"]},

  {cat:"recrutement", client:"Société Générale", logo:"../assets/logos/logo-societe-generale.png", title:"Decisions under pressure",
    goals:"Second-to-last step in the recruitment of management controllers: place candidates in a stressful situation to surface key skills.",
    solution:"A 45-minute digital team game: choose which of two banks is the most promising. The twist: players don't have time to access every element. They must prioritize under pressure.",
    imgs:["../assets/image80.png","../assets/image69.png"]},
  {cat:"recrutement", client:"Cartier", logo:"../assets/logos/images.png", title:"Tech & Luxury · talent detection",
    goals:"Introduce engineering students to the technological challenges of luxury jewelry and watchmaking, and surface top talent.",
    solution:"A 60-minute digital team game where recruiters can observe candidates' soft skills: organization, leadership, observation, rigor, analysis, and decision-making.",
    imgs:["../assets/image67.png","../assets/image75.jpg"]},
];

const projectsEl = document.getElementById('projects');
const catLabels = {
  integration:"Onboarding",
  sensibilisation:"Awareness",
  formation:"Training",
  communication:"Communication",
  changement:"Change management",
  recrutement:"Recruitment"
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
      const arrows = `<button class="carousel-arrow carousel-prev" aria-label="Previous">‹</button><button class="carousel-arrow carousel-next" aria-label="Next">›</button>`;
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
          <span class="more">See project</span>
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
