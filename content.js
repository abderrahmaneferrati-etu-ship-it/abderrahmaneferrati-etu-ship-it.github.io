'use strict';
// Bilingual profile, case studies and authentic project evidence.
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
        "fr": "Conception et simulation d’une machine à trois postes : transfert, remplissage volumétrique et bouchage, pilotés par un Siemens S7-300.",
        "en": "Design and simulation of a three-station machine: transfer, volumetric filling and capping, controlled by a Siemens S7-300."
      },
      "role": {
        "fr": "Projet individuel : analyse du cahier des charges, GRAFCET PO/PC, définition des E/S, programmation LADDER sous STEP 7 et simulation couplée PLCSim/FluidSim.",
        "en": "Individual project: requirements analysis, PO/PC GRAFCET, I/O definition, LADDER programming in STEP 7 and coupled PLCSim/FluidSim simulation."
      },
      "status": {
        "fr": "Conception de commande · Programmation · Simulation couplée",
        "en": "Control design · Programming · Coupled simulation"
      },
      "objective": {
        "fr": "Automatiser le cycle de remplissage et de bouchage et vérifier sa cohérence dans les modes automatique, défaut et manuel.",
        "en": "Automate the filling and capping cycle and check its consistency in automatic, fault and manual modes."
      },
      "metrics": [
        {
          "value": "S7-300",
          "label": {
            "fr": "Automate étudié",
            "en": "PLC studied"
          }
        },
        {
          "value": "3",
          "label": {
            "fr": "Postes du procédé",
            "en": "Process stations"
          }
        },
        {
          "value": "3",
          "label": {
            "fr": "Modes de fonctionnement",
            "en": "Operating modes"
          }
        }
      ],
      "tools": [
        "Siemens S7-300",
        "STEP 7",
        "GRAFCET PO/PC",
        "LADDER",
        "PLCSim",
        "FluidSim",
        "EzOPC"
      ],
      "sections": [
        {
          "title": {
            "fr": "Procédé et cahier des charges",
            "en": "Process and requirements"
          },
          "text": {
            "fr": "Le cycle associe un poste de transfert et chargement, un doseur volumétrique pour le remplissage, puis un poste de bouchage. Le fonctionnement des vérins, de la vanne et du moteur pneumatique doit être synchronisé avec les capteurs.",
            "en": "The cycle combines transfer and loading, volumetric dosing for filling, and a capping station. Cylinders, valve and pneumatic motor must be synchronized with sensor signals."
          }
        },
        {
          "title": {
            "fr": "GRAFCET PO et PC",
            "en": "PO and PC GRAFCET"
          },
          "text": {
            "fr": "La partie opérative est décrite par un GRAFCET de 18 étapes et 18 transitions. Le GRAFCET de commande traduit ensuite les conditions de transition et la synchronisation en logique exploitable par l’automate.",
            "en": "The operating sequence is described by a GRAFCET with 18 steps and 18 transitions. The control GRAFCET then translates transition conditions and synchronization into PLC logic."
          }
        },
        {
          "title": {
            "fr": "Entrées/sorties et programmation",
            "en": "I/O and programming"
          },
          "text": {
            "fr": "Définition des mnémoniques et des adresses d’E/S pour le SIMATIC S7-300 CPU 314C-2DP, puis programmation LADDER sous STEP 7. Le rapport relie notamment le capteur A0 à I124.0 et la commande A+ à Q124.0.",
            "en": "Definition of symbols and I/O addresses for the SIMATIC S7-300 CPU 314C-2DP, followed by LADDER programming in STEP 7. The report maps sensor A0 to I124.0 and command A+ to Q124.0."
          }
        },
        {
          "title": {
            "fr": "Modes et gestion des défauts",
            "en": "Modes and fault handling"
          },
          "text": {
            "fr": "Le mode normal exécute le cycle complet. En absence de bouchons, un mode dégradé permet le traitement prévu avec acquittement. Le mode manuel sert à la remise à zéro après un arrêt d’urgence simulé. L’arrêt normal termine le cycle en cours.",
            "en": "Normal mode runs the complete cycle. Missing caps trigger the specified degraded mode and acknowledgement sequence. Manual mode supports resetting after a simulated emergency stop. A normal stop completes the current cycle."
          }
        },
        {
          "title": {
            "fr": "Simulation PLCSim, FluidSim et EzOPC",
            "en": "PLCSim, FluidSim and EzOPC simulation"
          },
          "text": {
            "fr": "PLCSim exécute la logique de l’automate et FluidSim représente la partie opérative électropneumatique. Le serveur Festo EzOPC assure les échanges d’E/S virtuelles. Les essais portent sur le cycle, les défauts et la priorité des modes.",
            "en": "PLCSim executes the PLC logic while FluidSim represents the electropneumatic process. Festo EzOPC exchanges virtual I/O signals. Simulation tests cover the cycle, faults and mode priorities."
          }
        },
        {
          "title": {
            "fr": "Résultats et points d’attention",
            "en": "Results and engineering challenges"
          },
          "text": {
            "fr": "Le rapport documente le déroulement du cycle automatique et les réactions aux scénarios simulés. La synchronisation des étapes, l’adressage OPC et les priorités entre modes ont constitué les principaux points de mise au point.",
            "en": "The report documents automatic-cycle behavior and responses to simulated scenarios. Step synchronization, OPC addressing and priorities between modes were the main implementation challenges."
          }
        }
      ],
      "limits": {
        "fr": "La validation présentée est une simulation couplée. Une maquette physique reste une étape complémentaire ; le scénario d’arrêt d’urgence simulé ne constitue pas une certification de sécurité fonctionnelle.",
        "en": "The validation presented is a coupled simulation. A physical demonstrator remains a further step; the simulated emergency-stop scenario does not constitute functional-safety certification."
      },
      "cover": "evidence-automation-process.webp",
      "evidence": [
        {
          "type": "image",
          "src": "evidence-automation-process.webp",
          "width": 907,
          "height": 689,
          "sourcePage": 12,
          "caption": {
            "fr": "Procédé à trois postes : transfert, remplissage et bouchage. Rapport, figure 4, p. 12.",
            "en": "Three-station process: transfer, filling and capping. Report, figure 4, p. 12."
          },
          "alt": {
            "fr": "Schéma de principe du procédé",
            "en": "Process overview diagram"
          }
        },
        {
          "type": "image",
          "src": "evidence-automation-io.webp",
          "width": 1004,
          "height": 1010,
          "sourcePage": 16,
          "caption": {
            "fr": "Extrait du tableau des mnémoniques STEP 7 : capteurs, commandes et adresses d’E/S. Rapport, p. 16.",
            "en": "Extract from the STEP 7 symbol table: sensors, commands and I/O addresses. Report, p. 16."
          },
          "alt": {
            "fr": "Tableau des entrées et sorties STEP 7",
            "en": "STEP 7 input and output table"
          }
        },
        {
          "type": "image",
          "src": "evidence-automation-wiring.webp",
          "width": 794,
          "height": 955,
          "sourcePage": 37,
          "caption": {
            "fr": "Schéma de câblage de la partie commande autour du S7-300. Rapport, figure 7, p. 37.",
            "en": "Control wiring diagram around the S7-300. Report, figure 7, p. 37."
          },
          "alt": {
            "fr": "Schéma de câblage du S7-300",
            "en": "S7-300 wiring diagram"
          }
        }
      ],
      "coverAlt": {
        "fr": "Schéma de principe de la machine de remplissage et bouchage, extrait du rapport académique",
        "en": "Filling and capping process diagram from the academic report"
      },
      "coverNote": {
        "fr": "Schéma de principe extrait du rapport académique : il représente le procédé étudié et simulé.",
        "en": "Process diagram extracted from the academic report: it represents the process studied and simulated."
      }
    },
    {
      "id": "power",
      "title": {
        "fr": "Convertisseur Push-Pull à UC2525",
        "en": "UC2525 Push-Pull converter"
      },
      "context": {
        "fr": "Projet académique · Électronique de puissance",
        "en": "Academic project · Power electronics"
      },
      "summary": {
        "fr": "Conception d’une alimentation Push-Pull : dimensionnement de puissance, commande PWM, simulation Proteus et conception du circuit imprimé.",
        "en": "Push-Pull power-supply design: power-stage sizing, PWM control, Proteus simulation and PCB design."
      },
      "role": {
        "fr": "Projet individuel : étude de la topologie, dimensionnement des composants et du transformateur, commande UC2525, simulation sous ISIS et routage du PCB sous ARES.",
        "en": "Individual project: topology study, component and transformer sizing, UC2525 control, ISIS simulation and PCB layout in ARES."
      },
      "status": {
        "fr": "Conception · Simulation · PCB",
        "en": "Design · Simulation · PCB"
      },
      "objective": {
        "fr": "Étudier et concevoir une conversion DC/DC isolée à partir d’une source de 24 V, avec des sorties ±15 V visées dans le rapport, en reliant les calculs, la simulation et le PCB.",
        "en": "Study and design isolated DC/DC conversion from a 24 V source, with ±15 V outputs targeted in the report, connecting calculations, simulation and PCB design."
      },
      "metrics": [
        {
          "value": "24 V",
          "label": {
            "fr": "Source DC de l’étude",
            "en": "Study DC input"
          }
        },
        {
          "value": "±15 V",
          "label": {
            "fr": "Sorties visées dans le rapport",
            "en": "Output targets in the report"
          }
        },
        {
          "value": "50 kHz",
          "label": {
            "fr": "Fréquence cible de l’étude",
            "en": "Study switching-frequency target"
          }
        }
      ],
      "tools": [
        "UC2525",
        "Proteus ISIS",
        "ARES",
        "IRF3205",
        "Schottky"
      ],
      "sections": [
        {
          "title": {
            "fr": "Principe et architecture de puissance",
            "en": "Principle and power architecture"
          },
          "text": {
            "fr": "Étude de l’alimentation alternée des demi-primaires d’un transformateur à point milieu, puis du redressement et du filtrage LC en sortie. La démarche relie les phases de commutation aux grandeurs électriques du convertisseur.",
            "en": "Study of alternating excitation of a center-tapped transformer primary, followed by rectification and output LC filtering. The approach connects switching phases with the converter’s electrical quantities."
          }
        },
        {
          "title": {
            "fr": "Dimensionnement des composants",
            "en": "Component sizing"
          },
          "text": {
            "fr": "Analyse des contraintes des MOSFETs, choix des IRF3205, dimensionnement du transformateur haute fréquence et étude des diodes de redressement. Le rapport présente aussi les hypothèses de calcul des pertes et des courants.",
            "en": "Analysis of MOSFET stresses, IRF3205 selection, high-frequency transformer sizing and rectifier-diode study. The report also sets out assumptions used for loss and current calculations."
          }
        },
        {
          "title": {
            "fr": "Commande PWM et séquencement",
            "en": "PWM control and sequencing"
          },
          "text": {
            "fr": "Étude de la commande UC2525 : oscillateur RT/CT, sorties alternées, temps mort, démarrage progressif et boucle de retour. Ces fonctions organisent la commutation des deux interrupteurs.",
            "en": "Study of UC2525 control: RT/CT oscillator, alternating outputs, dead time, soft-start and feedback. These functions organize switching of the two power devices."
          }
        },
        {
          "title": {
            "fr": "Simulation sous Proteus ISIS",
            "en": "Proteus ISIS simulation"
          },
          "text": {
            "fr": "Saisie du schéma complet, paramétrage des sources et des modèles de composants, puis analyse des blocs de commande, de puissance et de sortie dans l’environnement de simulation.",
            "en": "Capture of the complete circuit, configuration of sources and component models, and analysis of the control, power and output blocks in the simulation environment."
          }
        },
        {
          "title": {
            "fr": "Conception PCB sous ARES",
            "en": "ARES PCB design"
          },
          "text": {
            "fr": "Passage du schéma à l’implantation et au routage : organisation des composants, séparation des chemins de puissance et de signal, réduction des boucles et visualisation 3D du PCB.",
            "en": "Transition from schematic to placement and routing: component organization, separation of power and signal paths, loop reduction and 3D PCB visualization."
          }
        },
        {
          "title": {
            "fr": "Livrables documentés",
            "en": "Documented deliverables"
          },
          "text": {
            "fr": "Rapport technique, calculs de dimensionnement, schéma de simulation, routage 2D et rendu 3D. Les vues ci-dessous sont extraites du travail fourni, et non des illustrations générées.",
            "en": "Technical report, sizing calculations, simulation schematic, 2D layout and 3D render. The views below are extracted from the supplied work rather than generated illustrations."
          }
        }
      ],
      "limits": {
        "fr": "Les éléments disponibles documentent la conception, la simulation et le PCB. Les hypothèses de dimensionnement ne sont pas des mesures de rendement ; les essais sur carte fabriquée restent distincts de ces résultats de conception.",
        "en": "The available material documents design, simulation and PCB layout. Sizing assumptions are not measured efficiency; tests on a manufactured board remain distinct from these design results."
      },
      "cover": "evidence-power-3d.webp",
      "evidence": [
        {
          "type": "image",
          "src": "evidence-power-schematic.webp",
          "width": 1077,
          "height": 600,
          "sourcePage": 28,
          "caption": {
            "fr": "Schéma du convertisseur simulé sous Proteus ISIS. Rapport, figure 4.2, p. 28.",
            "en": "Converter schematic simulated in Proteus ISIS. Report, figure 4.2, p. 28."
          },
          "alt": {
            "fr": "Schéma de simulation du convertisseur Push-Pull",
            "en": "Push-Pull converter simulation schematic"
          }
        },
        {
          "type": "image",
          "src": "evidence-power-pcb.webp",
          "width": 1077,
          "height": 558,
          "sourcePage": 30,
          "caption": {
            "fr": "Routage 2D sous ARES : implantation des composants et pistes du PCB. Rapport, figure 4.3, p. 30.",
            "en": "ARES 2D layout: component placement and PCB traces. Report, figure 4.3, p. 30."
          },
          "alt": {
            "fr": "Routage du PCB sous ARES",
            "en": "ARES PCB layout"
          }
        },
        {
          "type": "image",
          "src": "evidence-power-3d.webp",
          "width": 1077,
          "height": 482,
          "sourcePage": 31,
          "caption": {
            "fr": "Visualisation 3D du PCB assemblé virtuellement. Rapport, figure 4.4, p. 31.",
            "en": "3D visualization of the virtually assembled PCB. Report, figure 4.4, p. 31."
          },
          "alt": {
            "fr": "Rendu 3D du circuit imprimé",
            "en": "3D PCB render"
          }
        }
      ],
      "coverAlt": {
        "fr": "Rendu 3D du PCB du convertisseur dans Proteus ARES",
        "en": "3D render of the converter PCB in Proteus ARES"
      },
      "coverNote": {
        "fr": "Le visuel de couverture est un rendu 3D du PCB extrait du rapport, et non une photographie d’une carte fabriquée.",
        "en": "The cover visual is a 3D PCB render extracted from the report, rather than a photograph of a manufactured board."
      }
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
        "fr": "Rétro-ingénierie, conception et réalisation d’un banc pédagogique fonctionnel, avec essais pratiques et supports pour plus de 12 TP.",
        "en": "Reverse engineering, design and construction of a working educational bench, with practical tests and materials for more than 12 laboratory exercises."
      },
      "role": {
        "fr": "Projet en groupe. Ma contribution porte sur l’analyse du banc, l’architecture modulaire, la reconception sous SolidWorks et le redressement. Le travail a été mené en équipe jusqu’à l’approvisionnement, au montage, aux essais et aux supports pédagogiques.",
        "en": "Group project. My contribution covers bench analysis, modular architecture, SolidWorks redesign and rectification. The team carried the work through component sourcing, assembly, tests and teaching materials."
      },
      "status": {
        "fr": "Prototype fonctionnel · Validation pratique · Documentation",
        "en": "Working prototype · Practical validation · Documentation"
      },
      "objective": {
        "fr": "Concevoir et construire un banc modulaire utilisable en travaux pratiques d’électrotechnique, en reliant les calculs théoriques à la manipulation et à la mesure.",
        "en": "Design and build a modular bench for electrotechnical laboratory work, connecting theoretical calculations with hands-on experiments and measurements."
      },
      "metrics": [
        {
          "value": "1",
          "label": {
            "fr": "Prototype fonctionnel réalisé",
            "en": "Working prototype built"
          }
        },
        {
          "value": {
            "fr": "Plus de 12",
            "en": "Over 12"
          },
          "label": {
            "fr": "TP documentés dans le manuel",
            "en": "Laboratory exercises documented"
          }
        },
        {
          "value": "3 × 100 VA",
          "label": {
            "fr": "Transformateurs monophasés du banc",
            "en": "Bench single-phase transformers"
          }
        }
      ],
      "tools": [
        "SolidWorks",
        {
          "fr": "Électrotechnique",
          "en": "Electrotechnics"
        },
        {
          "fr": "Prototypage",
          "en": "Prototyping"
        }
      ],
      "sections": [
        {
          "title": {
            "fr": "Analyse et rétro-ingénierie",
            "en": "Analysis and reverse engineering"
          },
          "text": {
            "fr": "Analyse du banc pédagogique existant et définition d’une architecture modulaire permettant plusieurs configurations d’essais monophasés et triphasés.",
            "en": "Analysis of the existing educational bench and definition of a modular architecture supporting different single-phase and three-phase experiments."
          }
        },
        {
          "title": {
            "fr": "Architecture électrique et mécanique",
            "en": "Electrical and mechanical architecture"
          },
          "text": {
            "fr": "Intégration de trois transformateurs monophasés multi-prises de 100 VA, d’un redresseur à six diodes, de charges pédagogiques et d’une unité de mesure. La reconception mécanique a été menée sous SolidWorks.",
            "en": "Integration of three multi-tap 100 VA single-phase transformers, a six-diode rectifier, educational loads and a measurement unit. Mechanical redesign was carried out in SolidWorks."
          }
        },
        {
          "title": {
            "fr": "Approvisionnement et réalisation",
            "en": "Component sourcing and construction"
          },
          "text": {
            "fr": "Recherche et approvisionnement des composants, assemblage et intégration des éléments électriques et mécaniques jusqu’à l’obtention d’un prototype fonctionnel. Le projet est allé au-delà de l’étude de conception.",
            "en": "Component research and sourcing, assembly, and integration of electrical and mechanical elements into a working prototype. The project progressed beyond a design study."
          }
        },
        {
          "title": {
            "fr": "Essais et validation pratique",
            "en": "Testing and practical validation"
          },
          "text": {
            "fr": "Les calculs théoriques ont été confrontés aux essais et aux mesures pratiques. Le fonctionnement du prototype et la concordance des résultats avec les calculs ont été vérifiés pendant les manipulations.",
            "en": "Theoretical calculations were compared with practical tests and measurements. Prototype operation and agreement between the results and calculations were checked during the experiments."
          }
        },
        {
          "title": {
            "fr": "Manuel de TP et présentation",
            "en": "Laboratory manual and presentation"
          },
          "text": {
            "fr": "Réalisation d’un manuel couvrant plus de 12 travaux pratiques et d’un panneau de présentation expliquant le fonctionnement, les usages et les publics visés par le banc.",
            "en": "Creation of a manual covering more than 12 laboratory exercises and a presentation board explaining the bench’s operation, uses and intended audiences."
          }
        },
        {
          "title": {
            "fr": "Valorisation du prototype",
            "en": "Developing the prototype further"
          },
          "text": {
            "fr": "Le banc a été présenté comme une réalisation pédagogique concrète, avec une perspective de valorisation entrepreneuriale et de reproduction au-delà de l’exemplaire initial.",
            "en": "The bench was presented as a practical educational product, with a perspective of entrepreneurial development and reproduction beyond the initial unit."
          }
        }
      ],
      "limits": {
        "fr": "La principale limite rencontrée a été le manque de financement pour passer du prototype fonctionnel à une production reproductible et à une valorisation dans le cadre d’une startup.",
        "en": "The main limitation was the lack of funding to move from a working prototype to repeatable production and development as a startup venture."
      },
      "cover": "evidence-bench-prototype.jpg",
      "evidence": [
        {
          "type": "image",
          "src": "evidence-bench-prototype.jpg",
          "width": 1600,
          "height": 1200,
          "caption": {
            "fr": "Prototype réalisé : transformateurs, charges, redressement et unité de mesure sur le panneau du banc.",
            "en": "Completed prototype: transformers, loads, rectification and measurement unit on the bench panel."
          },
          "alt": {
            "fr": "Prototype physique du banc pédagogique",
            "en": "Physical educational bench prototype"
          }
        },
        {
          "type": "image",
          "src": "evidence-bench-outdoors.jpg",
          "width": 800,
          "height": 600,
          "caption": {
            "fr": "Vue d’ensemble du prototype et de son boîtier. Photographie de projet.",
            "en": "Overview of the prototype and its enclosure. Project photograph."
          },
          "alt": {
            "fr": "Vue d’ensemble du banc réalisé",
            "en": "Overview of the completed bench"
          }
        },
        {
          "type": "image",
          "src": "evidence-bench-layout.png",
          "width": 1392,
          "height": 782,
          "caption": {
            "fr": "Maquette graphique de la face avant : connexions, charges et fonctions de mesure.",
            "en": "Front-panel graphic layout: connections, loads and measurement functions."
          },
          "alt": {
            "fr": "Maquette de la face avant du banc",
            "en": "Bench front-panel layout"
          }
        }
      ],
      "coverAlt": {
        "fr": "Photographie du prototype réalisé du banc d’électrotechnique",
        "en": "Photograph of the completed electrotechnical bench prototype"
      },
      "coverNote": {
        "fr": "Photographies réelles du prototype et maquette de sa face avant fournies avec le projet.",
        "en": "Actual prototype photos and a front-panel layout supplied with the project."
      },
      "links": [
        {
          "href": "https://www.linkedin.com/feed/update/urn:li:activity:7473314897595019265/",
          "label": {
            "fr": "Présentation du projet sur LinkedIn ↗",
            "en": "Project presentation on LinkedIn ↗"
          }
        }
      ]
    },
    {
      "id": "oncf",
      "featured": false,
      "title": {
        "fr": "Signalisation ferroviaire et étude de régulation",
        "en": "Railway signaling and control study"
      },
      "context": {
        "fr": "ONCF · Rabat-Agdal · 1–30 juillet 2025",
        "en": "ONCF · Rabat-Agdal · 1–30 July 2025"
      },
      "summary": {
        "fr": "Étude des équipements de signalisation, analyse d’un défaut de circuit de voie et comparaison de lois de commande sous MATLAB/Simulink.",
        "en": "Study of signaling equipment, analysis of a track-circuit fault and comparison of control laws in MATLAB/Simulink."
      },
      "role": {
        "fr": "Stage d’initiation : observation des équipements, analyse du problème, modélisation et interprétation des réponses simulées dans le cadre du rapport de stage.",
        "en": "Introductory internship: equipment observation, problem analysis, modeling and interpretation of simulated responses for the internship report."
      },
      "status": {
        "fr": "Observation terrain · Analyse · Simulation",
        "en": "Field observation · Analysis · Simulation"
      },
      "objective": {
        "fr": "Comprendre les chaînes de détection et de commande ferroviaires, puis étudier des solutions de régulation dans un modèle de simulation.",
        "en": "Understand railway detection and control chains, then study control strategies in a simulation model."
      },
      "metrics": [
        {
          "value": "P · PI · PD · PID",
          "label": {
            "fr": "Correcteurs comparés en simulation",
            "en": "Controllers compared in simulation"
          }
        }
      ],
      "tools": [
        "MATLAB",
        "Simulink",
        "DMAIC",
        "Ziegler–Nichols"
      ],
      "sections": [
        {
          "title": {
            "fr": "Contexte du stage",
            "en": "Internship context"
          },
          "text": {
            "fr": "Stage au sein de la maintenance de la signalisation ferroviaire à Rabat-Agdal. Le rapport relie l’observation des équipements à la détection de présence des trains et à l’étude de chaînes de commande.",
            "en": "Internship within railway-signaling maintenance in Rabat-Agdal. The report connects equipment observation with train-presence detection and control-chain analysis."
          }
        },
        {
          "title": {
            "fr": "Analyse du circuit de voie",
            "en": "Track-circuit analysis"
          },
          "text": {
            "fr": "Étude du rôle des capteurs, relais, éléments de transmission et traitements logiques dans la détection, avec analyse d’un défaut de circuit de voie.",
            "en": "Study of sensors, relays, transmission elements and logic processing in detection, including analysis of a track-circuit fault."
          }
        },
        {
          "title": {
            "fr": "Démarche de résolution",
            "en": "Problem-solving approach"
          },
          "text": {
            "fr": "Structuration de l’étude avec DMAIC et QQOQCP, identification des critères de rapidité, stabilité et précision, puis modélisation de la boucle étudiée.",
            "en": "Study structured with DMAIC and QQOQCP, identification of speed, stability and accuracy criteria, and modeling of the control loop."
          }
        },
        {
          "title": {
            "fr": "Modélisation MATLAB/Simulink",
            "en": "MATLAB/Simulink modeling"
          },
          "text": {
            "fr": "Construction de modèles avec correcteurs P, PI, PD et PID et étude du réglage par Ziegler–Nichols. Les réponses à une consigne sont comparées dans le modèle.",
            "en": "Construction of P, PI, PD and PID controller models and study of Ziegler–Nichols tuning. Setpoint responses are compared within the model."
          }
        },
        {
          "title": {
            "fr": "Résultats de simulation",
            "en": "Simulation results"
          },
          "text": {
            "fr": "Dans l’étude, le correcteur P accélère la réponse tout en laissant une erreur statique ; le PI améliore la précision avec davantage de dépassement ; le PID présente un meilleur compromis entre rapidité, stabilité et précision dans le modèle considéré.",
            "en": "Within the study, P control speeds up the response while leaving steady-state error; PI improves accuracy with more overshoot; PID provides a better balance of speed, stability and accuracy in the model considered."
          }
        }
      ],
      "limits": {
        "fr": "Les conclusions portent sur les modèles de l’étude et leurs réponses simulées. Elles ne constituent pas une homologation ni une modification d’un système de freinage en exploitation.",
        "en": "The conclusions concern the study models and their simulated responses. They do not constitute approval or modification of an operational braking system."
      },
      "cover": null,
      "evidence": [
        {
          "type": "image",
          "src": "evidence-oncf-pid-model.webp",
          "width": 1098,
          "height": 404,
          "sourcePage": 51,
          "caption": {
            "fr": "Modèle de simulation avec correcteur PID, extrait du rapport de stage, figure 5.25, p. 51.",
            "en": "PID simulation model from the internship report, figure 5.25, p. 51."
          },
          "alt": {
            "fr": "Modèle MATLAB/Simulink avec correcteur PID",
            "en": "MATLAB/Simulink PID controller model"
          }
        },
        {
          "type": "image",
          "src": "evidence-oncf-pid-response.webp",
          "width": 659,
          "height": 283,
          "sourcePage": 52,
          "caption": {
            "fr": "Réponse simulée du modèle avec PID ; ce graphique ne représente pas un essai sur train. Rapport, figure 5.27, p. 52.",
            "en": "Simulated response of the PID model; this plot is not a train test. Report, figure 5.27, p. 52."
          },
          "alt": {
            "fr": "Courbe de réponse simulée du modèle PID",
            "en": "Simulated PID model response"
          }
        }
      ]
    }
  ],
  "copy": {
    "fr": {
      "heroRole": "Élève-ingénieur en Génie Électrique et Contrôle des Systèmes Industriels",
      "pfeGoal": "Je recherche un stage de fin d’études dans le domaine du génie électrique.",
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
      "galleryNote": "Photographies de projet, extraits de rapports et illustration conceptuelle pour l’étude PV. Chaque étude de cas précise la nature des visuels.",
      "yazakiSummary": "Étude individuelle d’un système photovoltaïque en autoconsommation : analyse des besoins, dimensionnement sous PVsyst et implantation BIM sous Revit.",
      "oncfRole": "Stage d’initiation · Étude de systèmes ferroviaires et simulation de lois de commande",
      "oncf1": "Étude des équipements de signalisation et analyse d’un défaut de circuit de voie, dans le cadre d’un stage d’initiation à Rabat-Agdal.",
      "oncf2": "Modélisation sous MATLAB/Simulink et comparaison de correcteurs P, PI, PD et PID avec une démarche DMAIC.",
      "oncfScope": "Périmètre : étude et simulation. Aucune modification du freinage opérationnel ni mise en service ERTMS revendiquée.",
      "engineeringDate": "2024 – en cours",
      "skillsIntro": "Des outils reliés à des travaux précis, puis les autres compétences mentionnées dans mon CV.",
      "otherTools": "Autres outils et bases techniques du CV",
      "otherToolsCopy": "TIA Portal · S7-1500 · CANECO BT · AutoCAD Electrical · Arduino · Capteurs et IHM · Python · C · Structured Text. Leur présence dans le CV ne signifie pas qu’ils ont tous été utilisés dans les quatre projets ci-dessus.",
      "standards": "Référentiels étudiés et sensibilisation",
      "standardsDescription": "IEC 60364 · IEC 61131-3 · NF C 15-100 · ISO 50001. Connaissances de référence ; aucune qualification de conformité ou habilitation n’est revendiquée.",
      "profileCopy": "Mes stages industriels et mes projets académiques m’ont permis de développer mes compétences en analyse, modélisation, conception et résolution de problèmes techniques. Je souhaite contribuer aux travaux d’une équipe d’ingénierie et approfondir mes compétences dans le cadre d’un projet de fin d’études.",
      "contactEyebrow": "Une opportunité de stage de fin d’études en génie électrique ?",
      "contactDescription": "Échangeons sur vos besoins techniques et sur la contribution que je pourrais apporter à votre équipe dans le cadre de mon PFE.",
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
      "description": "Élève-ingénieur à l’ENSET Mohammedia : stages industriels, projets en génie électrique et prototype pédagogique fonctionnel. Disponible pour un PFE dès mi-janvier 2027.",
      "credAcademic": "Projets académiques",
      "highlightAutomation": "Automatisme",
      "highlightPower": "Push-Pull",
      "profileLead": "Élève-ingénieur à l’ENSET Mohammedia, je m’intéresse aux différents domaines du génie électrique, de l’analyse des systèmes à la conception et à la réalisation de solutions techniques.",
      "footerIntro": "Génie électrique. Projets concrets. Nouvelles perspectives.",
      "oncfDate": "Juillet 2025",
      "projectPost": "Présentation du projet sur LinkedIn ↗"
    },
    "en": {
      "heroRole": "Electrical Engineering and Industrial Control Systems Student",
      "pfeGoal": "Seeking a final-year internship in electrical engineering.",
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
      "galleryNote": "Project photos, report extracts and a conceptual illustration for the PV study. Each case study identifies the nature of its visuals.",
      "yazakiSummary": "Individual study of a self-consumption PV system: requirements analysis, PVsyst sizing and Revit BIM layout.",
      "oncfRole": "Introductory internship · Railway systems study and control-law simulation",
      "oncf1": "Study of signaling equipment and analysis of a track-circuit fault during an introductory internship in Rabat-Agdal.",
      "oncf2": "MATLAB/Simulink modeling and comparison of P, PI, PD and PID controllers using a DMAIC approach.",
      "oncfScope": "Scope: study and simulation. No operational braking modification or ERTMS commissioning is claimed.",
      "engineeringDate": "2024 – present",
      "skillsIntro": "Tools connected to specific work, followed by the other skills listed in my résumé.",
      "otherTools": "Other tools and technical foundations in my résumé",
      "otherToolsCopy": "TIA Portal · S7-1500 · CANECO BT · AutoCAD Electrical · Arduino · Sensors and HMI · Python · C · Structured Text. Their inclusion in my résumé does not mean they were all used in the four projects above.",
      "standards": "Reference standards and awareness",
      "standardsDescription": "IEC 60364 · IEC 61131-3 · NF C 15-100 · ISO 50001. Reference knowledge; no compliance qualification or authorization is claimed.",
      "profileCopy": "My industrial internships and academic projects have developed my skills in analysis, modeling, design and technical problem-solving. I am seeking a final-year project where I can contribute to an engineering team, strengthen these skills and work on real technical challenges.",
      "contactEyebrow": "A final-year internship opportunity in electrical engineering?",
      "contactDescription": "Let’s discuss your engineering needs and how I could contribute to your team during my final-year internship.",
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
      "description": "Engineering student at ENSET Mohammedia: industrial internships, electrical engineering projects and a working educational prototype. Available for a final-year internship from mid-January 2027.",
      "credAcademic": "Academic projects",
      "highlightAutomation": "Automation",
      "highlightPower": "Push-Pull",
      "profileLead": "Engineering student at ENSET Mohammedia with a broad interest in electrical engineering, from analyzing systems to designing and building practical technical solutions.",
      "footerIntro": "Electrical engineering. Practical projects. New possibilities.",
      "oncfDate": "July 2025",
      "projectPost": "Project presentation on LinkedIn ↗"
    }
  }
};
