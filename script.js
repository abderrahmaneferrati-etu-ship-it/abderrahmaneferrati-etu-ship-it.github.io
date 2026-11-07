'use strict';

const translations = {
  fr: {
    title: 'Abderrahmane FERRATI | Génie électrique & contrôle industriel',
    description: 'Portfolio d’Abderrahmane FERRATI, élève-ingénieur en génie électrique et contrôle des systèmes industriels à l’ENSET Mohammedia.',
    skip: 'Aller au contenu', navigation: 'Navigation principale', languageLabel: 'Langue du portfolio',
    navExperience: 'Expérience', navProjects: 'Projets', navEducation: 'Formation', navSkills: 'Compétences', navContact: 'Contact',
    portraitAlt: 'Portrait d’Abderrahmane FERRATI', availability: 'À la recherche d’un stage PFE',
    heroRole: 'Élève-ingénieur en génie électrique', heroSpecialty: 'Contrôle des systèmes industriels · ENSET Mohammedia',
    heroIntro: 'Modéliser, analyser et piloter les systèmes industriels. Je développe mes compétences à travers l’automatisation, l’électronique de puissance et les énergies renouvelables.',
    emailLabel: 'Envoyer un e-mail', phoneLabel: 'Téléphoner', contactCta: 'Me contacter', downloadCv: 'Télécharger mon CV', scrollLabel: 'Découvrir mon parcours',
    experienceEyebrow: 'Du terrain à la simulation', experienceTitle: 'Expériences professionnelles',
    yazakiRole: 'Stage PFA · Centrale photovoltaïque en toiture industrielle', yazakiDate: 'Juin – Août 2026',
    yazakiSummary: 'Conception en équipe d’un système photovoltaïque en autoconsommation, de l’analyse des besoins à l’implantation BIM en toiture.',
    pvCapacity: 'Puissance dimensionnée', pvOutput: 'Production annuelle simulée', pvEquipment: 'Panneaux / onduleurs',
    yazaki1: 'Analyse des factures d’électricité et des contraintes de toiture ; sélection des composants et d’une fixation lestée.',
    yazaki2: 'Calculs de dimensionnement validés sous PVsyst : couverture simulée de 56,9 % en été et de 41,2 % en hiver (temps froid).',
    yazaki3: 'Modélisation BIM et rendus sous Revit pour préparer l’implantation en toiture.',
    yazaki4: 'Tableau de bord de démonstration en développement : puissance instantanée, énergie produite et anomalies simulées.',
    pvTag: 'Autoconsommation', oncfRole: 'Stage d’initiation · Modernisation du freinage du RGV sous ERTMS', oncfDate: 'Juin – Août 2025',
    oncf1: 'Analyse des équipements de signalisation ferroviaire et détection de défauts sur les circuits de voie.',
    oncf2: 'Simulation de lois de commande P, PI, PD et PID sous MATLAB/Simulink pour étudier la stabilité du freinage.', railTag: 'Signalisation ferroviaire',
    projectsEyebrow: 'Concevoir. Programmer. Simuler.', projectsTitle: 'Projets académiques',
    automationCategory: 'Automatisme industriel', automationTitle: 'Remplissage & bouchage automatisés',
    automation1: 'Système piloté par un automate Siemens S7-300, avec modélisation GRAFCET PO/PC et programmation LADDER sous STEP 7.',
    automation2: 'Câblage électrique et simulations intégrées sous PLCSim et FluidSim : modes normal, défaut, manuel et arrêt d’urgence.',
    powerCategory: 'Électronique de puissance', powerTitle: 'Convertisseur Push-Pull 24 V / 15 V',
    power1: 'Convertisseur à découpage à 50 kHz basé sur l’UC2525, avec transformateur HF, MOSFETs IRF3205 et diodes Schottky.',
    power2: 'Simulation sous Proteus, conception du PCB et protections contre les surintensités et surchauffes (OCP, OTP), avec démarrage progressif.',
    benchCategory: 'Électrotechnique & conception', benchTitle: 'Banc d’essai modulaire',
    bench1: 'Rétro-ingénierie et refonte d’un banc triphasé avec trois transformateurs monophasés multi-prises indépendants de 100 VA.',
    bench2: 'Configurations mono- et triphasées, refonte mécanique sous SolidWorks et redresseur universel à six diodes.', benchTag: 'Transformateurs',
    educationEyebrow: 'Mon parcours', educationTitle: 'Formation', engineeringDegree: 'Cycle d’ingénieur · Génie électrique et contrôle des systèmes industriels', engineeringDate: '2023 – en cours',
    prepDegree: 'Classes préparatoires MPSI / MP', baccalaureate: 'Baccalauréat · Sciences mathématiques',
    skillsEyebrow: 'Outils & savoir-faire', skillsTitle: 'Compétences techniques', renewables: 'Énergies renouvelables', renewablesDescription: 'Conception PV en autoconsommation et analyse technico-économique.',
    automation: 'Automatisme', automationDescription: 'Automates Siemens S7-300 / S7-1500, programmation et simulation.',
    electrical: 'Génie électrique', electricalDescription: 'Schémas de puissance et de commande, dimensionnement de câbles.',
    embedded: 'Systèmes embarqués', embeddedDescription: 'Capteurs, acquisition de données et interfaces homme-machine.',
    simulation: 'Simulation & programmation', simulationDescription: 'Modélisation de systèmes et développement de solutions techniques.',
    standards: 'Normes & sécurité', standardsDescription: 'Référentiels en installations électriques, automatisme et gestion de l’énergie.',
    certificationsTitle: 'Certifications', isoAwareness: 'Sensibilisation au management de l’énergie', efLevel: 'Niveau C1', languagesTitle: 'Langues',
    arabic: 'Arabe', native: 'Langue maternelle', french: 'Français', fluent: 'Courant', english: 'Anglais',
    contactEyebrow: 'Une opportunité, un projet, un échange', contactTitle: 'Construisons la suite.',
    contactDescription: 'Je recherche un stage de fin d’études pour mettre mes compétences en génie électrique et contrôle industriel au service d’un projet concret.',
    downloadCvShort: 'Télécharger le CV ↓', footerText: 'Génie électrique · Contrôle industriel · Énergies renouvelables', backToTop: 'Retour en haut ↑', announcement: 'Le portfolio est maintenant en français.'
  },
  en: {
    title: 'Abderrahmane FERRATI | Electrical Engineering & Industrial Control',
    description: 'Portfolio of Abderrahmane FERRATI, electrical engineering and industrial systems control student at ENSET Mohammedia.',
    skip: 'Skip to content', navigation: 'Main navigation', languageLabel: 'Portfolio language',
    navExperience: 'Experience', navProjects: 'Projects', navEducation: 'Education', navSkills: 'Skills', navContact: 'Contact',
    portraitAlt: 'Portrait of Abderrahmane FERRATI', availability: 'Seeking a final-year internship',
    heroRole: 'Electrical engineering student', heroSpecialty: 'Industrial Systems Control · ENSET Mohammedia',
    heroIntro: 'Modeling, analyzing, and controlling industrial systems. I develop my engineering skills through automation, power electronics, and renewable energy.',
    emailLabel: 'Send an email', phoneLabel: 'Call by phone', contactCta: 'Get in touch', downloadCv: 'Download my résumé', scrollLabel: 'Explore my experience',
    experienceEyebrow: 'From the field to simulation', experienceTitle: 'Professional experience',
    yazakiRole: 'Project internship · Industrial rooftop PV system design', yazakiDate: 'Jun – Aug 2026',
    yazakiSummary: 'Team-based design of a self-consumption photovoltaic system, from electricity demand analysis to rooftop BIM layout.',
    pvCapacity: 'Designed system capacity', pvOutput: 'Simulated annual generation', pvEquipment: 'Panels / inverters',
    yazaki1: 'Analyzed electricity bills and roof constraints; selected components and a ballasted mounting system.',
    yazaki2: 'Validated sizing calculations in PVsyst: simulated demand coverage of 56.9% in summer and 41.2% in winter (cold weather).',
    yazaki3: 'Created BIM models and renders in Revit to plan the rooftop installation.',
    yazaki4: 'Developing a demonstration dashboard for instantaneous power, energy generation, and simulated faults.',
    pvTag: 'Self-consumption', oncfRole: 'Introductory internship · RGV braking system modernization under ERTMS', oncfDate: 'Jun – Aug 2025',
    oncf1: 'Analyzed railway signaling equipment and identified faults in track circuits.',
    oncf2: 'Simulated P, PI, PD, and PID control strategies in MATLAB/Simulink to study braking stability.', railTag: 'Railway signaling',
    projectsEyebrow: 'Design. Program. Simulate.', projectsTitle: 'Academic projects',
    automationCategory: 'Industrial automation', automationTitle: 'Automated filling & capping',
    automation1: 'Siemens S7-300 PLC-controlled system with GRAFCET process/control modeling and LADDER programming in STEP 7.',
    automation2: 'Electrical wiring and integrated PLCSim / FluidSim simulations covering normal, fault, and manual modes, plus emergency stop.',
    powerCategory: 'Power electronics', powerTitle: '24 V / 15 V Push-Pull converter',
    power1: '50 kHz switch-mode converter based on the UC2525, with a high-frequency transformer, IRF3205 MOSFETs, and Schottky diodes.',
    power2: 'Proteus simulation, PCB design, overcurrent and overtemperature protection (OCP, OTP), and soft-start.',
    benchCategory: 'Electrical engineering & design', benchTitle: 'Modular training test bench',
    bench1: 'Reverse-engineered and redesigned a three-phase test bench using three independent 100 VA multi-tap single-phase transformers.',
    bench2: 'Single- and three-phase configurations, mechanical redesign in SolidWorks, and a universal six-diode rectifier.', benchTag: 'Transformers',
    educationEyebrow: 'My background', educationTitle: 'Education', engineeringDegree: 'Engineering program · Electrical Engineering and Industrial Systems Control', engineeringDate: '2023 – present',
    prepDegree: 'Preparatory classes in mathematics and physics · MPSI / MP', baccalaureate: 'Baccalaureate · Mathematical Sciences',
    skillsEyebrow: 'Tools & expertise', skillsTitle: 'Technical skills', renewables: 'Renewable energy', renewablesDescription: 'Self-consumption PV system design and techno-economic analysis.',
    automation: 'Industrial automation', automationDescription: 'Siemens S7-300 / S7-1500 PLC programming and simulation.',
    electrical: 'Electrical engineering', electricalDescription: 'Power and control schematics, and cable sizing.',
    embedded: 'Embedded systems', embeddedDescription: 'Sensors, data acquisition, and human-machine interfaces.',
    simulation: 'Simulation & programming', simulationDescription: 'System modeling and development of technical solutions.',
    standards: 'Standards & safety', standardsDescription: 'Electrical installation, automation, and energy management standards.',
    certificationsTitle: 'Certifications', isoAwareness: 'Energy management system awareness', efLevel: 'C1 level', languagesTitle: 'Languages',
    arabic: 'Arabic', native: 'Native', french: 'French', fluent: 'Fluent', english: 'English',
    contactEyebrow: 'An opportunity, a project, a conversation', contactTitle: 'Let’s build what’s next.',
    contactDescription: 'I am seeking a final-year internship to apply my electrical engineering and industrial control skills to a practical project.',
    downloadCvShort: 'Download résumé ↓', footerText: 'Electrical Engineering · Industrial Control · Renewable Energy', backToTop: 'Back to top ↑', announcement: 'The portfolio is now in English.'
  }
};

Object.assign(translations.fr, {
  shortAvailability: 'Disponible pour un stage PFE', clockLabel: 'Heure au Maroc',
  openMenu: 'Ouvrir le menu', closeMenu: 'Fermer le menu', menuLabel: 'Explorer',
  navHome: 'Accueil', navAbout: 'À propos',
  heroPortraitCaption: 'Génie électrique & contrôle industriel',
  discipline1: 'Génie électrique', discipline2: 'Automatisme industriel', discipline3: 'Énergies renouvelables',
  newHeroIntro: 'Je modélise, analyse et conçois des systèmes électriques et industriels, avec un intérêt particulier pour l’automatisation et la transition énergétique.',
  discoverProjects: 'Découvrir mes projets', selectedWorks: 'Sélection de projets', seeExperience: 'Voir mon parcours',
  solarTitle: 'Centrale photovoltaïque industrielle', projectIllustration: 'Illustration conceptuelle du projet', viewProject: 'Voir le projet ↗',
  galleryNote: 'Visuels illustratifs · Ouvrez un projet pour découvrir sa démarche et ses détails techniques.',
  whoAmI: 'À propos de moi',
  profileLead: 'Élève-ingénieur à l’ENSET Mohammedia, je m’intéresse à la façon dont l’énergie, la commande et les systèmes industriels fonctionnent ensemble.',
  profileCopy: 'Mes stages chez YAZAKI et à l’ONCF ont nourri cette curiosité. Je recherche un projet de fin d’études pour approfondir mes connaissances et les appliquer dans un environnement industriel.',
  internshipCount: 'Stages en industrie', academicCount: 'Projets académiques', englishLevel: 'Anglais · EF SET',
  letsTalk: 'Parlons-en.', footerIntro: 'Génie électrique. Systèmes industriels. Nouvelles perspectives.',
  footerMenu: 'Navigation', footerConnect: 'Contact', footerEmail: 'E-mail ↗',
  projectDetails: 'Détails du projet', closeProject: 'Fermer le projet',
  illustrationNote: 'Les visuels sont des illustrations du projet. Les détails techniques proviennent de mon CV.'
});
Object.assign(translations.en, {
  shortAvailability: 'Available for a final-year internship', clockLabel: 'Time in Morocco',
  openMenu: 'Open menu', closeMenu: 'Close menu', menuLabel: 'Explore',
  navHome: 'Home', navAbout: 'About',
  heroPortraitCaption: 'Electrical Engineering & Industrial Control',
  discipline1: 'Electrical Engineering', discipline2: 'Industrial Automation', discipline3: 'Renewable Energy',
  newHeroIntro: 'I model, analyze, and design electrical and industrial systems, with a particular interest in automation and the energy transition.',
  discoverProjects: 'Explore my projects', selectedWorks: 'Selected projects', seeExperience: 'View my background',
  solarTitle: 'Industrial rooftop solar system', projectIllustration: 'Conceptual project illustration', viewProject: 'View project ↗',
  galleryNote: 'Illustrative visuals · Open a project to explore the approach and technical details.',
  whoAmI: 'About me',
  profileLead: 'As an engineering student at ENSET Mohammedia, I am interested in how energy, control, and industrial systems work together.',
  profileCopy: 'My internships at YAZAKI and ONCF have deepened this curiosity. I am seeking a final-year project internship to expand my knowledge and apply it in an industrial environment.',
  internshipCount: 'Industry internships', academicCount: 'Academic projects', englishLevel: 'English · EF SET',
  letsTalk: 'Let’s talk.', footerIntro: 'Electrical engineering. Industrial systems. New possibilities.',
  footerMenu: 'Navigation', footerConnect: 'Connect', footerEmail: 'Email ↗',
  projectDetails: 'Project details', closeProject: 'Close project',
  illustrationNote: 'The visuals are project illustrations. Technical details are based on my résumé.'
});

const content = window.portfolioData;
for (const lang of ['fr', 'en']) Object.assign(translations[lang], content.copy[lang]);
let language = 'fr';
let projectOpener = null;
const baseUrl = 'https://abderrahmaneferrati-etu-ship-it.github.io/';
const local = value => typeof value === 'string' ? value : value?.[language] || '';
const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const e = value => escapeHtml(local(value));
const t = key => translations[language][key] || '';
const projectFromRoute = () => content.projects.find(p => `#project-${p.id}` === location.hash);
const tags = values => `<div class="tags">${values.map(v => `<span>${e(v)}</span>`).join('')}</div>`;

// Only supplied project photos and report extracts are used as evidence.
// Supported types: image {src, alt, caption}, pdf {src, caption}, video {src, poster, caption}.
function renderEvidence(items) {
  if (!items?.length) return '';
  const media = items.map(item => {
    if (!item.src) return '';
    const src = escapeHtml(item.src), caption = e(item.caption);
    if (item.type === 'image') return `<figure><button type="button" class="evidence-image" data-image="${src}" data-caption="${caption}" data-alt="${e(item.alt)}" aria-label="${escapeHtml(t('openImage')+': '+local(item.alt))}"><img src="${src}" alt="${e(item.alt)}" loading="lazy" width="${Number(item.width)||960}" height="${Number(item.height)||640}"></button><figcaption>${caption}</figcaption></figure>`;
    if (item.type === 'pdf') return `<figure class="pdf-evidence"><a class="button button-outline" href="${src}" target="_blank" rel="noopener">${escapeHtml(t('openPdf'))}</a><figcaption>${caption}</figcaption></figure>`;
    if (item.type === 'video') return `<figure><video controls preload="metadata" ${item.poster ? `poster="${escapeHtml(item.poster)}"` : ''}><source src="${src}"></video><figcaption>${caption}</figcaption></figure>`;
    return '';
  }).join('');
  return media ? `<section class="case-evidence"><h3>${escapeHtml(t('evidence'))}</h3><div class="evidence-grid">${media}</div></section>` : '';
}
function renderProjects() {
  content.projects.forEach((p,index) => {
    const card = document.querySelector(`[data-card="${p.id}"]`);
    if (card) {
      card.innerHTML = `<span class="card-context">${e(p.context)}</span><span class="card-summary">${e(p.summary)}</span>${tags(p.tools.slice(0,3))}<span class="card-result">${e(p.metrics[0].value)} · ${e(p.metrics[0].label)}</span><span class="card-action">${escapeHtml(t('viewProject'))}</span>`;
      const visual=card.closest('.work-card');
      visual.querySelector('.work-title').textContent=local(p.title);
      visual.querySelector('img').src=p.cover;
      visual.querySelector('img').alt=local(p.coverAlt||p.title);
    }
    const skill = document.querySelector(`[data-skill-project="${p.id}"]`);
    if (skill) skill.textContent = `${local(p.title)} ↗`;
    const next = content.projects[(index+1)%content.projects.length];
    const coverNote=p.coverNote||(p.cover?.endsWith('.svg')?t('illustrationNote'):'');
    document.querySelector(`[data-case="${p.id}"]`).innerHTML = `
      <p class="case-context">${e(p.context)}</p>
      <h2 id="dialog-title-${p.id}" tabindex="-1">${e(p.title)}</h2>
      <p class="case-status">${e(p.status)}</p><p class="case-lead">${e(p.summary)}</p>
      <div class="case-overview"><section><h3>${escapeHtml(t('objective'))}</h3><p>${e(p.objective)}</p></section><section><h3>${escapeHtml(t('personalRole'))}</h3><p>${e(p.role)}</p></section></div>
      <div class="case-metrics">${p.metrics.map(m=>`<div><strong>${e(m.value)}</strong><span>${e(m.label)}</span></div>`).join('')}</div>
      <h3 class="case-section-title">${escapeHtml(t('approach'))}</h3><div class="case-method">${p.sections.map((s,i)=>`<details ${i===0?'open':''}><summary>${e(s.title)}</summary><p>${e(s.text)}</p></details>`).join('')}</div>
      ${renderEvidence(p.evidence)}
      <section class="case-limits"><h3>${escapeHtml(t('limits'))}</h3><p>${e(p.limits)}</p></section>
      <section class="case-tools"><h3>${escapeHtml(t('tools'))}</h3>${tags(p.tools)}</section>
      ${coverNote?`<p class="illustration-note">${e(coverNote)}</p>`:''}
      ${p.links?.length?`<div class="project-external-links">${p.links.map(link=>`<a class="text-link" href="${escapeHtml(link.href)}" target="_blank" rel="noopener noreferrer">${e(link.label)}</a>`).join('')}</div>`:''}
      <div class="case-actions"><a href="#project-${next.id}" data-open-project="project-${next.id}" class="text-link">${escapeHtml(t('nextProject'))} : ${e(next.title)} ↗</a><a href="mailto:${escapeHtml(content.profile.email)}?subject=${encodeURIComponent(local(p.title))}" class="button button-dark">${escapeHtml(t('discussProject'))}</a></div>`;
  });
}
function updateMetadata() {
  const p = projectFromRoute();
  const title = p ? `${local(p.title)} | Abderrahmane FERRATI` : t('title');
  const description = p ? local(p.summary) : t('description');
  document.title = title;
  document.querySelector('meta[name="description"]').content = description;
  document.querySelector('meta[property="og:title"]').content = title;
  document.querySelector('meta[property="og:description"]').content = description;
  document.querySelector('meta[property="og:locale"]').content = language==='fr'?'fr_FR':'en_US';
  // Hash dialogs share one static document: canonicalize the document, keep the full share URL in OG.
  document.querySelector('link[rel="canonical"]').href = `${baseUrl}?lang=${language}`;
  document.querySelector('meta[property="og:url"]').content = `${baseUrl}?lang=${language}${p?`#project-${p.id}`:''}`;
}
function setLanguage(requested, announce = true) {
  language = Object.hasOwn(translations, requested) ? requested : 'fr';
  const copy = translations[language];
  document.documentElement.lang = language;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const value = copy[el.dataset.i18n];
    if (value !== undefined) el.textContent = value;
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const value=copy[el.dataset.i18nAria]; if(value) el.setAttribute('aria-label',value);
  });
  document.querySelectorAll('[data-i18n-alt]').forEach(el => { if(copy[el.dataset.i18nAlt]) el.alt=copy[el.dataset.i18nAlt]; });
  document.querySelectorAll('[data-lang]').forEach(b => b.setAttribute('aria-pressed',String(b.dataset.lang===language)));
  document.querySelectorAll('.cv-link').forEach(a => { a.href=language==='en'?'ABDERRAHMANE_FERRATI_RESUME.pdf':'cv-fr.pdf'; a.download=language==='en'?'ABDERRAHMANE_FERRATI_RESUME.pdf':'Abderrahmane-FERRATI-CV-FR.pdf'; });
  const availability=content.availability;
  document.querySelectorAll('[data-availability]').forEach(el => el.textContent=[availability.startLabel,availability.duration,availability.mobility].map(local).filter(Boolean).join(' · '));
  document.querySelector('[data-i18n="engineeringDate"]').textContent=`${content.profile.engineeringStart} – ${language==='fr'?'en cours':'present'}`;
  document.querySelector('[data-i18n="institution"]').textContent=`${content.profile.institution} · ${language==='fr'?'Cycle d’ingénieur depuis':'Engineering program since'} ${content.profile.engineeringStart}`;
  const toggle=document.querySelector('.menu-toggle');
  if(toggle.getAttribute('aria-expanded')==='true') toggle.setAttribute('aria-label',copy.closeMenu);
  try { localStorage.setItem('portfolio-language',language); } catch (_) { /* Storage is optional. */ }
  const url=new URL(location.href);url.searchParams.set('lang',language);
  try {history.replaceState(history.state,'',url.pathname+url.search+url.hash);} catch (_) { /* File previews. */ }
  renderProjects();updateMetadata();
  if(announce) document.getElementById('language-announcement').textContent=copy.announcement;
}
const menuToggle=document.querySelector('.menu-toggle'), siteMenu=document.getElementById('site-menu');
function setMenu(open,restore=true) {
  siteMenu.hidden=!open;menuToggle.setAttribute('aria-expanded',String(open));
  menuToggle.setAttribute('aria-label',t(open?'closeMenu':'openMenu'));
  document.body.classList.toggle('menu-open',open);
  document.querySelector('main').inert=open;document.querySelector('footer').inert=open;
  document.querySelector('.quick-nav').inert=open;
  if(open) siteMenu.querySelector('.menu-inner > a').focus(); else if(restore) menuToggle.focus();
}
menuToggle.addEventListener('click',()=>setMenu(siteMenu.hidden));
siteMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenu(false,false)));
document.querySelector('.brand').addEventListener('click',()=>setMenu(false,false));
document.addEventListener('keydown',event=>{
  if(siteMenu.hidden)return;
  if(event.key==='Escape'){event.preventDefault();setMenu(false);}
  if(event.key==='Tab'){
    const controls=[...document.querySelectorAll('.header-actions a,.header-actions button'),...siteMenu.querySelectorAll('a')];
    const first=controls[0],last=controls.at(-1);
    if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}
    else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}
  }
});
function syncRoute() {
  const mediaViewer=document.getElementById('media-viewer');
  if(mediaViewer.open) mediaViewer.close();
  const routeLang=new URLSearchParams(location.search).get('lang');
  if(routeLang&&routeLang!==language)setLanguage(routeLang,false);
  const p=projectFromRoute();
  let closed=false;
  document.querySelectorAll('.project-dialog[open]').forEach(dialog=>{
    if(!p||dialog.id!==`project-${p.id}`){dialog.close();closed=true;}
  });
  if(p){
    if(!siteMenu.hidden)setMenu(false,false);
    const dialog=document.getElementById(`project-${p.id}`);
    if(!dialog.open){dialog.showModal();dialog.scrollTop=0;dialog.querySelector('h2').focus({preventScroll:true});}
  } else if(closed) (projectOpener?.isConnected?projectOpener:document.querySelector('.work-card')).focus({preventScroll:true});
  document.body.classList.toggle('dialog-open',!!p);
  updateMetadata();
}
function closeProject() {
  if(history.state?.portfolioModal){history.back();}
  else { const url=new URL(location.href);url.hash='projects';history.replaceState(history.state,'',url);syncRoute(); }
}
document.addEventListener('click',event=>{
  const langButton=event.target.closest('[data-lang]');
  if(langButton){setLanguage(langButton.dataset.lang);return;}
  const link=event.target.closest('[data-open-project]');
  if(link&&!event.ctrlKey&&!event.metaKey&&!event.shiftKey&&!event.altKey){
    event.preventDefault();projectOpener=link;
    if(location.hash!==link.hash){const url=new URL(location.href);url.hash=link.hash;history.pushState({portfolioModal:true},'',url);}
    syncRoute();return;
  }
  if(event.target.closest('.close-project'))closeProject();
  const image=event.target.closest('[data-image]');
  if(image){const viewer=document.getElementById('media-viewer');const img=viewer.querySelector('img');img.src=image.dataset.image;img.alt=image.dataset.alt||'';viewer.querySelector('figcaption').textContent=image.dataset.caption||'';viewer.setAttribute('aria-label',t('openImage'));viewer.showModal();}
  if(event.target.closest('.close-media'))document.getElementById('media-viewer').close();
});
document.querySelectorAll('.project-dialog').forEach(dialog=>{
  dialog.addEventListener('cancel',event=>{event.preventDefault();closeProject();});
  dialog.addEventListener('close',()=>{
    // Wait for the native dialog's own focus restoration before restoring our route opener.
    if(!projectFromRoute()) requestAnimationFrame(()=>{
      if(!projectFromRoute()) (projectOpener?.isConnected?projectOpener:document.querySelector('.work-card')).focus({preventScroll:true});
    });
  });
  dialog.addEventListener('keydown',event=>{
    if(event.key!=='Tab')return;
    const controls=[...dialog.querySelectorAll('a[href],button,summary')].filter(el=>el.getClientRects().length);
    const first=controls[0],last=controls.at(-1);
    if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}
    else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}
  });
  dialog.addEventListener('click',event=>{if(event.target!==dialog)return;const b=dialog.getBoundingClientRect();if(event.clientX<b.left||event.clientX>b.right||event.clientY<b.top||event.clientY>b.bottom)closeProject();});
});
window.addEventListener('popstate',syncRoute);window.addEventListener('hashchange',syncRoute);
let initial=new URLSearchParams(location.search).get('lang');
if(!initial){try{initial=localStorage.getItem('portfolio-language');}catch(_){}}
setLanguage(initial||'fr',false);syncRoute();
if('IntersectionObserver' in window){
  const links=[...document.querySelectorAll('nav a')];
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(entry.isIntersecting)links.forEach(a=>{const active=a.hash===`#${entry.target.id}`;a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});
  }),{rootMargin:'-20% 0px -60% 0px'});
  document.querySelectorAll('main > section').forEach(s=>observer.observe(s));
}
