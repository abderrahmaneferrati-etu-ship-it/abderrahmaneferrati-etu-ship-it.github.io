'use strict';
// Editable bilingual profile, availability and case studies. Publish only authorized evidence.
window.portfolioData = {
  "profile": {
    "name": "Abderrahmane FERRATI",
    "institution": "ENSET Mohammedia",
    "email": "abderrahmaneferrati@gmail.com",
    "engineeringStart": 2024,
    "prepStart": 2022,
    "prepEnd": 2024
  },
  "availability": {
    "start": "2027-01-15",
    "startLabel": {
      "fr": "Mi-janvier 2027",
      "en": "Mid-January 2027"
    },
    "duration": {
      "fr": "5–6 mois ou plus",
      "en": "5–6 months or longer"
    },
    "mobility": {
      "fr": "Mobilité géographique ouverte",
      "en": "Open geographic mobility"
    }
  },
  "projects": [
    {
      "id": "pv",
      "title": {
        "fr": "Centrale photovoltaïque industrielle",
        "en": "Industrial rooftop solar study"
      },
      "context": {
        "fr": "YAZAKI Morocco Meknes · Stage PFA · Juin–août 2026",
        "en": "YAZAKI Morocco Meknes · Engineering internship · June–August 2026"
      },
      "summary": {
        "fr": "Dimensionnement d’une installation en autoconsommation et implantation BIM sur une toiture industrielle.",
        "en": "Self-consumption PV sizing study and BIM layout for an industrial rooftop."
      },
      "role": {
        "fr": "Projet individuel : analyse des besoins, dimensionnement, simulation PVsyst et modélisation Revit.",
        "en": "Individual project: requirements analysis, sizing, PVsyst simulation and Revit modeling."
      },
      "status": {
        "fr": "Étude de conception · Résultats simulés",
        "en": "Design study · Simulated results"
      },
      "objective": {
        "fr": "Étudier une solution photovoltaïque adaptée à la consommation du site et aux contraintes de sa toiture.",
        "en": "Study a photovoltaic solution suited to the site’s electricity demand and roof constraints."
      },
      "metrics": [
        {
          "value": {
            "fr": "1,20 MWc",
            "en": "1.20 MWp"
          },
          "label": {
            "fr": "Puissance dimensionnée",
            "en": "Sized capacity"
          }
        },
        {
          "value": {
            "fr": "2,18 GWh/an",
            "en": "2.18 GWh/year"
          },
          "label": {
            "fr": "Production annuelle simulée",
            "en": "Simulated annual production"
          }
        },
        {
          "value": {
            "fr": "1 656",
            "en": "1,656"
          },
          "label": {
            "fr": "Modules de l’étude",
            "en": "Modules in the study"
          }
        },
        {
          "value": "7",
          "label": {
            "fr": "Onduleurs de l’étude",
            "en": "Inverters in the study"
          }
        }
      ],
      "tools": [
        "PVsyst",
        "Autodesk Revit",
        "BIM"
      ],
      "sections": [
        {
          "title": {
            "fr": "Contexte et contraintes",
            "en": "Context and constraints"
          },
          "text": {
            "fr": "Analyse des factures d’électricité, des besoins d’autoconsommation et des contraintes de toiture. Une fixation lestée a été considérée dans l’étude.",
            "en": "Analysis of electricity bills, self-consumption needs and roof constraints. A ballasted mounting approach was considered in the study."
          }
        },
        {
          "title": {
            "fr": "Démarche de dimensionnement",
            "en": "Sizing approach"
          },
          "text": {
            "fr": "Calculs de dimensionnement et sélection des composants, puis comparaison avec la simulation sous PVsyst. L’étude porte sur 1 656 modules et 7 onduleurs.",
            "en": "Sizing calculations and component selection, followed by comparison with PVsyst simulation. The study considers 1,656 modules and 7 inverters."
          }
        },
        {
          "title": {
            "fr": "Simulation PVsyst",
            "en": "PVsyst simulation"
          },
          "text": {
            "fr": "La production annuelle de 2,18 GWh et les couvertures de consommation de 56,9 % en été et 41,2 % en hiver (temps froid) sont des résultats simulés rapportés dans mon CV.",
            "en": "The annual production of 2.18 GWh and demand coverage of 56.9% in summer and 41.2% in winter (cold weather) are simulated results reported in my résumé."
          }
        },
        {
          "title": {
            "fr": "Implantation BIM sous Revit",
            "en": "Revit BIM layout"
          },
          "text": {
            "fr": "Modélisation de l’implantation en toiture et création de rendus sous Revit pour représenter la solution étudiée.",
            "en": "Modeling of the rooftop layout and creation of Revit renders to represent the proposed solution."
          }
        },
        {
          "title": {
            "fr": "Suivi : prototype en développement",
            "en": "Monitoring: prototype in development"
          },
          "text": {
            "fr": "Tableau de bord de démonstration en développement : puissance, énergie et anomalies simulées. Il ne s’agit pas de télémétrie industrielle en direct.",
            "en": "Demonstration dashboard in development: power, energy and simulated faults. This is not live industrial telemetry."
          }
        }
      ],
      "limits": {
        "fr": "Ces résultats caractérisent une étude et des simulations. Aucune production mesurée, mise en service ou exploitation de cette installation n’est revendiquée.",
        "en": "These results describe a study and simulations. No measured generation, commissioning or operation of this installation is claimed."
      },
      "cover": "project-solar.svg",
      "evidence": []
    },
    {
      "id": "automation",
      "title": {
        "fr": "Remplissage & bouchage automatisés",
        "en": "Automated filling & capping"
      },
      "context": {
        "fr": "Projet académique · Siemens S7-300",
        "en": "Academic project · Siemens S7-300"
      },
      "summary": {
        "fr": "Étude de séquences de commande, programmation LADDER et simulation des modes de fonctionnement.",
        "en": "Control-sequence study, LADDER programming and simulation of operating modes."
      },
      "role": {
        "fr": "Projet individuel : GRAFCET PO/PC, programmation STEP 7, étude du câblage et simulation.",
        "en": "Individual project: PO/PC GRAFCET, STEP 7 programming, wiring study and simulation."
      },
      "status": {
        "fr": "Programmation · Simulation",
        "en": "Programming · Simulation"
      },
      "objective": {
        "fr": "Décrire et programmer la séquence de remplissage et de bouchage, puis étudier son comportement dans différents modes.",
        "en": "Describe and program the filling and capping sequence, then study its behavior in different operating modes."
      },
      "metrics": [
        {
          "value": "S7-300",
          "label": {
            "fr": "Automate étudié",
            "en": "PLC studied"
          }
        }
      ],
      "tools": [
        "STEP 7",
        "GRAFCET PO/PC",
        "LADDER",
        "PLCSim",
        "FluidSim"
      ],
      "sections": [
        {
          "title": {
            "fr": "Procédé et architecture de commande",
            "en": "Process and control architecture"
          },
          "text": {
            "fr": "Le procédé associe remplissage et bouchage sous la commande d’un Siemens S7-300. Le GRAFCET PO/PC structure les séquences avant leur traduction en LADDER.",
            "en": "The process combines filling and capping under Siemens S7-300 control. PO/PC GRAFCET structures the sequences before their translation into LADDER."
          }
        },
        {
          "title": {
            "fr": "Programmation et schémas",
            "en": "Programming and diagrams"
          },
          "text": {
            "fr": "Programmation LADDER sous STEP 7 et étude du câblage électrique. Les références détaillées des capteurs, actionneurs et adresses d’entrées/sorties ne sont pas publiées ici.",
            "en": "LADDER programming in STEP 7 and electrical wiring study. Detailed sensor, actuator and I/O address references are not published here."
          }
        },
        {
          "title": {
            "fr": "Modes et gestion des défauts",
            "en": "Modes and fault handling"
          },
          "text": {
            "fr": "Étude des modes normal, manuel et défaut, ainsi que d’un scénario d’arrêt d’urgence simulé.",
            "en": "Study of normal, manual and fault modes, plus a simulated emergency-stop scenario."
          }
        },
        {
          "title": {
            "fr": "Simulation",
            "en": "Simulation"
          },
          "text": {
            "fr": "Simulations intégrées sous PLCSim et FluidSim pour examiner la logique et les scénarios de fonctionnement.",
            "en": "Integrated PLCSim and FluidSim simulations to examine the logic and operating scenarios."
          }
        }
      ],
      "limits": {
        "fr": "La simulation ne démontre ni une mise en service sur ligne réelle, ni une fonction d’arrêt d’urgence certifiée. Aucun résultat de test matériel n’est présenté.",
        "en": "Simulation does not demonstrate commissioning on a real line or a certified emergency-stop function. No hardware test results are presented."
      },
      "cover": "project-automation.svg",
      "evidence": []
    },
    {
      "id": "power",
      "title": {
        "fr": "Convertisseur Push-Pull 24 V / 15 V",
        "en": "24 V / 15 V Push-Pull converter"
      },
      "context": {
        "fr": "Projet académique · Électronique de puissance",
        "en": "Academic project · Power electronics"
      },
      "summary": {
        "fr": "Conception et simulation d’une conversion DC/DC à 50 kHz, avec étude du circuit imprimé.",
        "en": "Design and simulation of 50 kHz DC/DC conversion, including PCB design."
      },
      "role": {
        "fr": "Projet individuel : conception du circuit, simulation Proteus et routage PCB sous ARES.",
        "en": "Individual project: circuit design, Proteus simulation and PCB layout in ARES."
      },
      "status": {
        "fr": "Conception · Simulation · PCB",
        "en": "Design · Simulation · PCB"
      },
      "objective": {
        "fr": "Étudier une conversion de 24 V DC vers 15 V DC avec une topologie Push-Pull commandée à 50 kHz.",
        "en": "Study 24 V DC to 15 V DC conversion using a Push-Pull topology controlled at 50 kHz."
      },
      "metrics": [
        {
          "value": "24 V → 15 V",
          "label": {
            "fr": "Objectif de conversion",
            "en": "Conversion target"
          }
        },
        {
          "value": "50 kHz",
          "label": {
            "fr": "Fréquence de découpage étudiée",
            "en": "Studied switching frequency"
          }
        }
      ],
      "tools": [
        "Proteus ISIS",
        "ARES",
        "UC2525",
        "IRF3205"
      ],
      "sections": [
        {
          "title": {
            "fr": "Topologie et architecture",
            "en": "Topology and architecture"
          },
          "text": {
            "fr": "Topologie Push-Pull comprenant un transformateur haute fréquence, des MOSFET IRF3205 et un redressement par diodes Schottky.",
            "en": "Push-Pull topology including a high-frequency transformer, IRF3205 MOSFETs and Schottky diode rectification."
          }
        },
        {
          "title": {
            "fr": "Commande PWM",
            "en": "PWM control"
          },
          "text": {
            "fr": "Étude de la commande par UC2525 pour le fonctionnement à 50 kHz. Les valeurs de courant maximal et de puissance ne sont pas revendiquées.",
            "en": "Study of UC2525 control for 50 kHz operation. No maximum current or power rating is claimed."
          }
        },
        {
          "title": {
            "fr": "Simulation et conception PCB",
            "en": "Simulation and PCB design"
          },
          "text": {
            "fr": "Simulation du circuit sous Proteus ISIS et conception du circuit imprimé sous ARES. Ces travaux sont distincts de la fabrication d’une carte.",
            "en": "Circuit simulation in Proteus ISIS and PCB layout in ARES. These activities are distinct from manufacturing a board."
          }
        },
        {
          "title": {
            "fr": "Protections étudiées",
            "en": "Protection concepts studied"
          },
          "text": {
            "fr": "Étude de concepts de protection contre les surintensités et la surchauffe, ainsi que du démarrage progressif.",
            "en": "Study of overcurrent and overtemperature protection concepts, together with soft-start."
          }
        }
      ],
      "limits": {
        "fr": "Aucune efficacité, ondulation de sortie, mesure thermique ou validation sur prototype n’est annoncée. Les résultats présentés restent au niveau conception et simulation.",
        "en": "No efficiency, output ripple, thermal measurement or prototype validation is claimed. The work presented remains at design and simulation level."
      },
      "cover": "project-converter.svg",
      "evidence": []
    },
    {
      "id": "bench",
      "title": {
        "fr": "Banc d’essai modulaire",
        "en": "Modular electrotechnical test bench"
      },
      "context": {
        "fr": "Projet académique en groupe · Électrotechnique",
        "en": "Group academic project · Electrotechnics"
      },
      "summary": {
        "fr": "Rétro-ingénierie d’un banc pédagogique triphasé et étude d’une architecture modulaire.",
        "en": "Reverse engineering of a three-phase educational bench and study of a modular architecture."
      },
      "role": {
        "fr": "Travail en groupe. Ma contribution : analyse du banc existant, étude de l’architecture modulaire, reconception sous SolidWorks et étude du redresseur à six diodes.",
        "en": "Group work. My contribution: analysis of the existing bench, study of the modular architecture, SolidWorks redesign and study of the six-diode rectifier."
      },
      "status": {
        "fr": "Rétro-ingénierie · Conception",
        "en": "Reverse engineering · Design"
      },
      "objective": {
        "fr": "Étudier une architecture permettant différentes configurations pédagogiques monophasées et triphasées.",
        "en": "Study an architecture enabling different single-phase and three-phase educational configurations."
      },
      "metrics": [
        {
          "value": "3 × 100 VA",
          "label": {
            "fr": "Transformateurs monophasés considérés",
            "en": "Single-phase transformers considered"
          }
        }
      ],
      "tools": [
        "SolidWorks"
      ],
      "sections": [
        {
          "title": {
            "fr": "Problème initial et analyse",
            "en": "Initial problem and analysis"
          },
          "text": {
            "fr": "Rétro-ingénierie d’un banc d’essai triphasé pédagogique afin d’étudier son évolution vers une structure modulaire.",
            "en": "Reverse engineering of a three-phase educational test bench to study its evolution toward a modular structure."
          }
        },
        {
          "title": {
            "fr": "Architecture électrique",
            "en": "Electrical architecture"
          },
          "text": {
            "fr": "Étude de trois transformateurs monophasés indépendants de 100 VA, à prises multiples, pour des configurations monophasées et triphasées.",
            "en": "Study of three independent multi-tap 100 VA single-phase transformers for single-phase and three-phase configurations."
          }
        },
        {
          "title": {
            "fr": "Modélisation mécanique",
            "en": "Mechanical modeling"
          },
          "text": {
            "fr": "Reconception mécanique sous SolidWorks pour représenter l’organisation modulaire proposée.",
            "en": "Mechanical redesign in SolidWorks to represent the proposed modular arrangement."
          }
        },
        {
          "title": {
            "fr": "Redressement",
            "en": "Rectification"
          },
          "text": {
            "fr": "Étude d’un concept de redresseur universel à six diodes associé au banc.",
            "en": "Study of a universal six-diode rectifier concept associated with the bench."
          }
        }
      ],
      "limits": {
        "fr": "La fabrication, les essais électriques et la conformité de sécurité ne sont pas établis par les éléments disponibles. Aucune validation expérimentale n’est revendiquée.",
        "en": "Manufacturing, electrical tests and safety compliance are not established by the available material. No experimental validation is claimed."
      },
      "cover": "project-bench.svg",
      "evidence": []
    }
  ],
  "copy": {
    "fr": {
      "heroRole": "Élève-ingénieur en Génie Électrique et Contrôle des Systèmes Industriels",
      "pfeGoal": "Je recherche un stage de fin d’études en génie électrique, automatisme ou énergie.",
      "institution": "ENSET Mohammedia · Cycle d’ingénieur depuis 2024",
      "availabilityLabel": "Stage PFE",
      "heroPortraitCaption": "Énergie · Automatisme · Systèmes industriels",
      "projectsCta": "Explorer les projets",
      "downloadCv": "Télécharger mon CV",
      "contactCta": "Me contacter ↗",
      "credEducation": "Formation d’ingénieur",
      "credExperience": "2 stages industriels",
      "credStudy": "Étude PV · 1,20 MWc",
      "selectedWorks": "Projets d’ingénierie",
      "viewProject": "Lire l’étude de cas ↗",
      "galleryNote": "Visuels de couverture conceptuels. Les études de cas précisent les méthodes, contributions et limites.",
      "yazakiSummary": "Étude individuelle d’un système photovoltaïque en autoconsommation : analyse des besoins, dimensionnement sous PVsyst et implantation BIM sous Revit.",
      "oncfRole": "Stage d’initiation · Étude de systèmes ferroviaires et simulation de lois de commande",
      "oncf1": "Étude des équipements de signalisation et de la détection de défauts sur les circuits de voie.",
      "oncf2": "Simulation de correcteurs P, PI, PD et PID sous MATLAB/Simulink, dans le cadre d’une étude de commande du freinage.",
      "oncfScope": "Périmètre : étude et simulation. Aucune modification du freinage opérationnel ni mise en service ERTMS revendiquée.",
      "engineeringDate": "2024 – en cours",
      "skillsIntro": "Des outils reliés à des travaux précis, puis les autres compétences mentionnées dans mon CV.",
      "otherTools": "Autres outils et bases techniques du CV",
      "otherToolsCopy": "TIA Portal · S7-1500 · CANECO BT · AutoCAD Electrical · Arduino · Capteurs et IHM · Python · C · Structured Text. Leur présence dans le CV ne signifie pas qu’ils ont tous été utilisés dans les quatre projets ci-dessus.",
      "standards": "Référentiels étudiés et sensibilisation",
      "standardsDescription": "IEC 60364 · IEC 61131-3 · NF C 15-100 · ISO 50001. Connaissances de référence ; aucune qualification de conformité ou habilitation n’est revendiquée.",
      "profileCopy": "Mes stages chez YAZAKI et à l’ONCF relient mes études à des questions industrielles : dimensionner une solution énergétique, représenter une implantation et analyser une commande. Je souhaite poursuivre cette démarche dans un PFE encadré.",
      "contactEyebrow": "Un sujet de PFE en génie électrique, automatisme ou énergie ?",
      "contactDescription": "Échangeons sur votre besoin, le sujet et l’encadrement du stage.",
      "objective": "Objectif",
      "personalRole": "Ma contribution",
      "approach": "Démarche technique",
      "limits": "Limites et niveau de validation",
      "tools": "Outils et composants",
      "evidence": "Documents et visuels techniques",
      "illustrationNote": "Illustration conceptuelle de couverture, distincte des documents techniques du projet.",
      "nextProject": "Projet suivant",
      "discussProject": "Échanger sur ce projet ↗",
      "closeProject": "Fermer le projet",
      "projectDetails": "Étude de cas",
      "closeMedia": "Fermer le visuel",
      "openImage": "Agrandir le visuel",
      "openPdf": "Ouvrir le document PDF ↗",
      "projectMediaAlt": "Illustration conceptuelle du projet",
      "title": "Abderrahmane FERRATI | Élève-ingénieur · Stage PFE",
      "description": "Élève-ingénieur à l’ENSET Mohammedia. Projets en génie électrique, automatisme et énergie. Stage PFE dès mi-janvier 2027, 5–6 mois ou plus."
    },
    "en": {
      "heroRole": "Electrical Engineering and Industrial Control Systems Student",
      "pfeGoal": "Seeking a final-year internship in electrical engineering, automation or energy.",
      "institution": "ENSET Mohammedia · Engineering program since 2024",
      "availabilityLabel": "Final-year internship",
      "heroPortraitCaption": "Energy · Automation · Industrial systems",
      "projectsCta": "Explore projects",
      "downloadCv": "Download my résumé",
      "contactCta": "Contact me ↗",
      "credEducation": "Engineering education",
      "credExperience": "2 industrial internships",
      "credStudy": "PV study · 1.20 MWp",
      "selectedWorks": "Engineering projects",
      "viewProject": "Read case study ↗",
      "galleryNote": "Conceptual cover illustrations. Case studies explain methods, contributions and limitations.",
      "yazakiSummary": "Individual study of a self-consumption PV system: requirements analysis, PVsyst sizing and Revit BIM layout.",
      "oncfRole": "Introductory internship · Railway systems study and control-law simulation",
      "oncf1": "Study of signaling equipment and fault detection in track circuits.",
      "oncf2": "Simulation of P, PI, PD and PID controllers in MATLAB/Simulink as part of a braking-control study.",
      "oncfScope": "Scope: study and simulation. No operational braking modification or ERTMS commissioning is claimed.",
      "engineeringDate": "2024 – present",
      "skillsIntro": "Tools connected to specific work, followed by the other skills listed in my résumé.",
      "otherTools": "Other tools and technical foundations in my résumé",
      "otherToolsCopy": "TIA Portal · S7-1500 · CANECO BT · AutoCAD Electrical · Arduino · Sensors and HMI · Python · C · Structured Text. Their inclusion in my résumé does not mean they were all used in the four projects above.",
      "standards": "Reference standards and awareness",
      "standardsDescription": "IEC 60364 · IEC 61131-3 · NF C 15-100 · ISO 50001. Reference knowledge; no compliance qualification or authorization is claimed.",
      "profileCopy": "My internships at YAZAKI and ONCF connect my studies with industrial questions: sizing an energy solution, representing a layout and analyzing control systems. I want to continue this approach in a supervised final-year project.",
      "contactEyebrow": "A final-year project in electrical engineering, automation or energy?",
      "contactDescription": "Let’s discuss your needs, the project and internship supervision.",
      "objective": "Objective",
      "personalRole": "My contribution",
      "approach": "Technical approach",
      "limits": "Limitations and validation status",
      "tools": "Tools and components",
      "evidence": "Technical documents and visuals",
      "illustrationNote": "Conceptual cover illustration, separate from the project’s technical documents.",
      "nextProject": "Next project",
      "discussProject": "Discuss this project ↗",
      "closeProject": "Close project",
      "projectDetails": "Case study",
      "closeMedia": "Close image",
      "openImage": "Enlarge image",
      "openPdf": "Open PDF document ↗",
      "projectMediaAlt": "Conceptual project illustration",
      "title": "Abderrahmane FERRATI | Engineering student · Final-year internship",
      "description": "Engineering student at ENSET Mohammedia. Electrical engineering, automation and energy projects. Final-year internship from mid-January 2027, 5–6 months or longer."
    }
  }
};
