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
    yazaki2: 'Calculs de dimensionnement validés sous PVsyst : couverture simulée de 41 % en été et de 31 % en hiver.',
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
    yazaki2: 'Validated sizing calculations in PVsyst: simulated demand coverage of 41% in summer and 31% in winter.',
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
  designCredit: 'Design inspiré d’Asher Vale par Asad Khaleel', projectDetails: 'Détails du projet', closeProject: 'Fermer le projet',
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
  designCredit: 'Design inspired by Asher Vale by Asad Khaleel', projectDetails: 'Project details', closeProject: 'Close project',
  illustrationNote: 'The visuals are project illustrations. Technical details are based on my résumé.'
});

function setLanguage(language, announce = true) {
  const lang = Object.hasOwn(translations, language) ? language : 'fr';
  const copy = translations[lang];
  document.documentElement.lang = lang;
  document.title = copy.title;
  document.querySelector('meta[name="description"]').content = copy.description;
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const value = copy[element.dataset.i18n];
    if (value !== undefined) element.textContent = value;
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(element => {
    element.setAttribute('aria-label', copy[element.dataset.i18nAria]);
  });
  document.querySelectorAll('[data-i18n-alt]').forEach(element => {
    element.alt = copy[element.dataset.i18nAlt];
  });
  const toggle = document.querySelector('.menu-toggle');
  if (toggle && toggle.getAttribute('aria-expanded') === 'true') toggle.setAttribute('aria-label', copy.closeMenu);
  document.querySelectorAll('[data-lang]').forEach(button => {
    button.setAttribute('aria-pressed', String(button.dataset.lang === lang));
  });
  document.querySelectorAll('.cv-link').forEach(link => {
    link.href = `cv-${lang}.pdf`;
    link.download = `Abderrahmane-FERRATI-${lang === 'fr' ? 'CV-FR' : 'Resume-EN'}.pdf`;
  });
  const metrics = document.querySelectorAll('.pv-metrics strong');
  metrics[0].firstChild.textContent = lang === 'fr' ? '1,20 ' : '1.20 ';
  metrics[1].firstChild.textContent = lang === 'fr' ? '2,18 ' : '2.18 ';
  metrics[1].querySelector('small').textContent = lang === 'fr' ? 'GWh/an' : 'GWh/year';
  metrics[2].firstChild.textContent = lang === 'fr' ? '1 656 ' : '1,656 ';
  try { localStorage.setItem('portfolio-language', lang); } catch (_) { /* Still works with storage disabled. */ }
  try {
    const url = new URL(window.location.href);
    url.searchParams.set('lang', lang);
    history.replaceState(null, '', url.pathname + url.search + url.hash);
  } catch (_) { /* Local file previews may restrict history. */ }
  if (announce) document.getElementById('language-announcement').textContent = copy.announcement;
}

let initialLanguage = new URLSearchParams(window.location.search).get('lang');
if (!initialLanguage) {
  try { initialLanguage = localStorage.getItem('portfolio-language'); } catch (_) { /* Default to French. */ }
}
setLanguage(initialLanguage || 'fr', false);
document.querySelectorAll('[data-lang]').forEach(button => {
  button.addEventListener('click', () => { setLanguage(button.dataset.lang); updateClock(); });
});

const menuToggle = document.querySelector('.menu-toggle');
const siteMenu = document.getElementById('site-menu');
function setMenu(open, restoreFocus = true) {
  siteMenu.hidden = !open;
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', translations[document.documentElement.lang][open ? 'closeMenu' : 'openMenu']);
  document.body.classList.toggle('menu-open', open);
  document.querySelector('main').inert = open;
  document.querySelector('footer').inert = open;
  if (open) siteMenu.querySelector('.menu-inner > a').focus();
  else if (restoreFocus) menuToggle.focus();
}
menuToggle.addEventListener('click', () => setMenu(siteMenu.hidden));
siteMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false, false)));
document.querySelector('.brand').addEventListener('click', () => setMenu(false, false));
document.addEventListener('keydown', event => {
  if (siteMenu.hidden) return;
  if (event.key === 'Escape') { event.preventDefault(); setMenu(false); }
  if (event.key === 'Tab') {
    const controls = [...document.querySelectorAll('.header-actions button'), ...siteMenu.querySelectorAll('a')];
    const first = controls[0], last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }
});

document.querySelectorAll('[data-open-project]').forEach(link => {
  link.addEventListener('click', event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    const dialog = document.getElementById(link.dataset.openProject);
    if (dialog && !dialog.open) { dialog.showModal(); document.body.classList.add('dialog-open'); }
  });
});
document.querySelectorAll('.project-dialog').forEach(dialog => {
  dialog.querySelector('.close-project').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => document.body.classList.remove('dialog-open'));
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const box = dialog.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
  });
});
const directProject = document.getElementById(window.location.hash.slice(1));
if (directProject && directProject.matches('.project-dialog')) { directProject.showModal(); document.body.classList.add('dialog-open'); }

function updateClock() {
  const clock = document.querySelector('.local-clock');
  if (clock) clock.textContent = new Intl.DateTimeFormat(document.documentElement.lang === 'fr' ? 'fr-MA' : 'en-GB', { timeZone: 'Africa/Casablanca', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }).format(new Date());
}
updateClock();
setInterval(updateClock, 60000);

if ('IntersectionObserver' in window) {
  const navLinks = [...document.querySelectorAll('nav a')];
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) navLinks.forEach(link => {
        const active = link.hash === `#${entry.target.id}`;
        link.classList.toggle('active', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-20% 0px -60% 0px', threshold: 0 });
  document.querySelectorAll('main > section').forEach(section => observer.observe(section));
}
