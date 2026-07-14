export interface TitlePart {
  text: string;
  em?: boolean;
  breakBefore?: boolean;
}

export interface NavLink {
  label: string;
  href: string;
  isCta?: true;
}

export const navLinks: NavLink[] = [
  { label: "À propos", href: "#about" },
  { label: "Compétences", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Tarifs", href: "#pricing" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Me contacter", href: "#contact", isCta: true },
];

const titleParts = (parts: TitlePart[]) => parts;

export const hero = {
  tagline: "Fondatrice · Développeuse · Consultante",
  titleParts: titleParts([
    { text: "Des systèmes" },
    { text: "qui font ", breakBefore: true },
    { text: "gagner", em: true },
    { text: "du temps.", breakBefore: true },
  ]),
  subtitle:
    "J'aide les entreprises à développer leur activité grâce à la technologie, l'automatisation, la prospection commerciale et des processus plus intelligents.",
  buttons: [
    { label: "Découvrir mes services", href: "#services", variant: "primary" as const },
    { label: "Prendre rendez-vous", href: "#contact", variant: "outline" as const },
  ],
  floatingCards: [
    { label: "Projets livrés", value: "20+" },
    { label: "Clients satisfaits", value: "30+", sub: "entreprises accompagnées" },
    { label: "Heures d'appels", value: "10000+" },
  ],
};

export const about = {
  imagePath: "/assets/me-dans-jamais.jpeg",
  name: "Annie Tsironiaina",
  role: "Co-fondatrice et CEO",
  badges: [
    { num: "7+ ans", txt: "d'expérience", className: "b1" },
    { num: "100%", txt: "Sur-mesure", className: "b2" },
  ],
  tag: "À propos",
  titleParts: titleParts([
    { text: "Je suis " },
    { text: "Annie", em: true },
    { text: "," },
    { text: "co-fondatrice de Ellah Services.", breakBefore: true },
  ]),
  description:
    "Je combine développement, automatisation, communication et gestion opérationnelle pour aider les entreprises à se structurer, trouver des clients et gagner en efficacité.\n\nJe travaille à l'intersection entre :",
  intersectionPills: ["Technologie", "Humain", "Organisation", "Croissance", "Innovation"],
  ctaText: "Travaillons ensemble →",
  ctaHref: "#contact",
};

export const skills = {
  tag: "Compétences",
  titleParts: titleParts([
    { text: "Un spectre complet" },
    { text: "de ", breakBefore: true },
    { text: "savoir-faire", em: true },
  ]),
  cards: [
    {
      name: "Développement",
      tags: ["Sites vitrines", "Applications web", "Apps desktop", "APIs", "Bases de données", "Architecture logicielle"],
    },
    {
      name: "Automatisation",
      tags: ["CRM", "Workflows", "IA", "Auto. commerciale", "Intégrations"],
    },
    {
      name: "Business Development",
      tags: ["Prospection B2B", "Téléprospection", "Qualification leads", "Prise de RDV"],
    },
    {
      name: "Gestion d'équipe",
      tags: ["Management agents", "Formation", "Reporting", "Qualité", "Process"],
    },
  ],
};

export const services = {
  tag: "Services",
  titleParts: titleParts([
    { text: "Ce que je peux" },
    { text: "faire pour vous", breakBefore: true },
  ]),
  cards: [
    {
      num: "01",
      name: "Développement sur mesure",
      desc: "Transformer une idée en produit fonctionnel. Du concept à la mise en production.",
      variant: "light" as const,
      hasBlob: true,
    },
    {
      num: "02",
      name: "Prospection commerciale",
      desc: "Créer un flux constant de prospects qualifiés pour alimenter votre pipeline.",
      variant: "dark" as const,
    },
    {
      num: "03",
      name: "Automatisation",
      desc: "Supprimer les tâches répétitives et libérer du temps pour l'essentiel.",
      variant: "accent" as const,
    },
    {
      num: "04",
      name: "Réception d'appel",
      desc: "Gestion professionnelle des appels entrants avec un service client réactif et efficace.",
      variant: "light" as const,
    },
  ],
};

export const pricing = {
  tag: "Tarifs",
  titleParts: titleParts([
    { text: "Des tarifs" },
    { text: "clairs et ", breakBefore: true },
    { text: "transparents", em: true },
  ]),
  cards: [
    {
      tag: "Call Center",
      role: "Agents call center",
      fromLabel: "À partir de",
      amount: "8€",
      unit: "/ heure",
      desc: "Agents formés et encadrés pour la gestion des appels entrants, avec suivi qualité et reporting régulier.",
    },
    {
      tag: "Développement",
      role: "Développeurs",
      fromLabel: "À partir de",
      amount: "15€",
      unit: "/ heure",
      desc: "Développeurs expérimentés pour vos projets sur mesure, du concept à la mise en production.",
    },
  ],
  note: "Tarifs indicatifs, ajustés selon la complexité du projet, le volume et la durée de la mission. Contactez-moi pour un devis personnalisé.",
};

export const process = {
  tag: "Méthode",
  titleParts: titleParts([
    { text: "Une approche" },
    { text: "structurée", breakBefore: true, em: true },
  ]),
  steps: [
    { num: 1, name: "Analyse", desc: "Comprendre vos enjeux et objectifs réels", svgId: "step-analyse" },
    { num: 2, name: "Stratégie", desc: "Définir la feuille de route optimale", svgId: "step-strategie" },
    { num: 3, name: "Développement", desc: "Développer les solutions sur mesure", svgId: "step-developpement" },
    { num: 4, name: "Automatisation", desc: "Connecter et automatiser les flux", svgId: "step-automatisation" },
    { num: 5, name: "Optimisation", desc: "Mesurer, ajuster et faire croître", svgId: "step-optimisation" },
  ],
};

export const stats = [
  { target: 25, label: "Projets réalisés" },
  { target: 2000, label: "Leads générés" },
  { target: 10000, label: "Heures d'appels" },
  { target: 1000, label: "Contribution Github" },
  { target: 25, label: "Collaborateurs" },
];

export const portfolio = {
  tag: "Portfolio",
  titleParts: titleParts([
    { text: "Quelques " },
    { text: "réalisations", em: true },
  ]),
  filters: [
    { key: "tout", label: "Tout" },
    { key: "web", label: "Web" },
    { key: "systeme", label: "Système & Réseau" },
    { key: "algo", label: "Algorithmes" },
    { key: "jeux", label: "Jeux" },
    { key: "devops", label: "DevOps" },
  ],
  projects: [
    {
      id: "ft_transcendence", filter: "web", image: "/assets/app.webp", schoolBadge: "Projet Ecole 42 Antananarivo",
      cat: "Web · Gestion de projet", name: "AxisPace", title: "AxisPace",
      subtitle: "ft_transcendence — plateforme de gestion de projet collaborative",
      desc: "Plus qu'un simple outil de gestion de projet : une interface intuitive, des fonctionnalités puissantes et une collaboration fluide, pensées pour aider les équipes à avancer efficacement et à se concentrer sur l'essentiel — livrer des résultats.",
      problem: "Construire un système de gestion de projet complet où les équipes suivent leur avancement et collaborent en temps réel, avec un « Pace system » propre à l'application pour fluidifier le rythme de travail, et un suivi où chaque action est enregistrée et partagée avec l'équipe.",
      retro: "Une vraie réflexion produit autour de l'expérience utilisateur et de la collaboration en temps réel — comprendre qu'un bon outil de gestion de projet doit se faire oublier pour laisser la place au travail d'équipe.",
      tags: ["Web", "Gestion de projet", "Collaboration temps réel", "Full-stack"], link: "https://github.com/WAROL52/42-transcendence",
    },
    {
      id: "ellah_crochet", filter: "web", image: "/assets/projet-web.png", schoolBadge: "Projet Personnel",
      cat: "Web · E-commerce", name: "Ellah Crochet", title: "Ellah Crochet",
      subtitle: "Site vitrine & prise de commande",
      desc: "Un site vitrine pour une marque de peluches en crochet éco-responsables, pensé pour donner envie et simplifier la commande.",
      problem: "Présenter des créations artisanales avec justesse, tout en rendant le parcours client fluide — de la découverte des peluches jusqu'à la demande de devis personnalisée.",
      retro: "Concevoir pour un vrai client avec de vrais besoins : trouver l'équilibre entre esthétique douce, temps de chargement rapide et formulaire de commande sans friction.",
      tags: ["Développement Web", "UX/UI", "Formulaire de devis", "E-commerce"], link: "https://github.com/ellah2202/ellah",
    },
    {
      id: "minishell", filter: "systeme", image: "/assets/42-minishell.png", schoolBadge: "Projet Ecole 42 Antananarivo",
      cat: "Shell · UNIX", name: "Minishell", title: "Minishell",
      subtitle: "Shell UNIX en C",
      desc: "Un interpréteur de commandes inspiré de bash, capable de parser des pipelines complexes, gérer les redirections et survivre aux signaux sans fuite mémoire.",
      problem: "Reproduire le comportement d'un shell UNIX — parsing avancé, gestion des pipes (|), redirections (<, >, <<), traitement des signaux (SIGINT, SIGQUIT) et allocation mémoire dynamique sans fuites.",
      retro: "Une compréhension intime des processus UNIX, de la gestion des signaux et de la mémoire bas niveau. Chaque segmentation fault était une leçon.",
      tags: ["C", "Parsing", "Signaux UNIX", "Gestion mémoire"], link: "https://github.com/ellah2202/minishell",
    },
    {
      id: "minitalk", filter: "systeme", image: "/assets/42-minitalk.png", schoolBadge: "Projet Ecole 42 Antananarivo",
      cat: "IPC · Signaux UNIX", name: "Minitalk", title: "Minitalk",
      subtitle: "Communication inter-processus en C",
      desc: "Un client et un serveur qui s'échangent des messages sans tuyau ni socket — uniquement à coups de signaux UNIX.",
      problem: "Faire voyager une chaîne de caractères, bit par bit, entre deux processus indépendants via SIGUSR1 et SIGUSR2, sans perdre un seul caractère même sur de longs messages.",
      retro: "Une vision très concrète de ce qu'est un signal UNIX, et à quel point synchroniser deux processus peut vite devenir plus subtil qu'il n'y paraît.",
      tags: ["C", "Signaux UNIX", "IPC", "Bitwise"], link: "https://github.com/ellah2202/minitalk",
    },
    {
      id: "webserv", filter: "systeme", image: "/assets/42-webserv.png", schoolBadge: "Projet Ecole 42 Antananarivo",
      cat: "Réseau · Serveur Web", name: "Webserv", title: "Webserv",
      subtitle: "Serveur HTTP en C++",
      desc: "Un serveur HTTP écrit de zéro, capable de gérer plusieurs clients en simultané et de servir des sites comme le ferait NGINX.",
      problem: "Implémenter le protocole HTTP à la main, gérer des sockets non-bloquants et le multiplexage des connexions (poll), tout en respectant un fichier de configuration inspiré de NGINX.",
      retro: "Comprendre de l'intérieur ce qui se passe entre un navigateur et un serveur à chaque requête — et pourquoi un bon serveur ne laisse jamais un client bloquer les autres.",
      tags: ["C++", "Sockets", "HTTP", "Réseau"], link: "https://github.com/WAROL52/42-webserv",
    },
    {
      id: "push_swap", filter: "algo", image: "/assets/42-pushswap.jpg", schoolBadge: "Projet Ecole 42 Antananarivo",
      cat: "Algorithmes · Tri", name: "Push_swap", title: "Push_swap",
      subtitle: "Algorithme de tri optimisé en C",
      desc: "Un programme qui trie une pile de nombres à l'aide de deux piles et d'un nombre d'opérations limité.",
      problem: "Trouver une stratégie de tri qui reste efficace à grande échelle — moins de 5000 opérations pour trier 500 nombres, en combinant plusieurs structures de données et algorithmes de tri.",
      retro: "Un vrai raisonnement algorithmique : réfléchir en complexité avant d'écrire une ligne de code, et accepter de tout recommencer quand une stratégie plus simple apparaît.",
      tags: ["C", "Algorithmique", "Structures de données", "Complexité"], link: "https://github.com/ellah2202/push_swap",
    },
    {
      id: "cub3d", filter: "jeux", image: "/assets/42-cub3d.gif", schoolBadge: "Projet Ecole 42 Antananarivo",
      cat: "Jeux · Raycasting", name: "Cub3D", title: "Cub3D",
      subtitle: "Moteur de raycasting en C",
      desc: "Un moteur de rendu 3D en vue à la première personne, façon Wolfenstein 3D, construit entièrement à la main.",
      problem: "Transformer une carte 2D en un monde 3D explorable en temps réel — calculer des rayons de vue, plaquer des textures et gérer les déplacements de la caméra sans latence.",
      retro: "Des bases solides en trigonométrie et en vecteurs appliqués, et la satisfaction de voir un labyrinthe en 2D prendre vie en 3D pour la première fois.",
      tags: ["C", "Raycasting", "MinilibX", "Mathématiques"], link: "https://github.com/warol52/42-cub3d",
    },
    {
      id: "so_long", filter: "jeux", image: "/assets/42-solong.gif", schoolBadge: "Projet Ecole 42 Antananarivo",
      cat: "Jeu 2D · C", name: "So_long", title: "So_long",
      subtitle: "Jeu 2D en C avec MinilibX",
      desc: "Un petit jeu où il faut ramasser tous les objets et atteindre la sortie en un minimum de déplacements.",
      problem: "Charger une carte depuis un fichier, vérifier qu'elle est jouable (murs fermés, chemin existant), gérer les déplacements et l'affichage — sans la moindre fuite mémoire.",
      retro: "Mes premiers pas en programmation graphique, et l'importance de valider rigoureusement chaque donnée d'entrée avant de faire confiance à son programme.",
      tags: ["C", "MinilibX", "Algorithmique", "Gestion mémoire"], link: "https://github.com/ellah2202/so_long",
    },
    {
      id: "inception", filter: "devops", image: "/assets/42-inception.png", schoolBadge: "Projet Ecole 42 Antananarivo",
      cat: "DevOps · Docker", name: "Inception", title: "Inception",
      subtitle: "Infrastructure conteneurisée avec Docker",
      desc: "Une infrastructure complète — NGINX, WordPress, MariaDB — où chaque service tourne isolé dans son propre conteneur.",
      problem: "Faire communiquer plusieurs services indépendants à travers des conteneurs, des volumes et des réseaux Docker, tout en sécurisant les échanges (SSL, variables d'environnement, aucun mot de passe en clair).",
      retro: "Une vraie autonomie sur l'administration système et le déploiement — comprendre ce qui se passe derrière un docker compose up plutôt que de le subir.",
      tags: ["Docker", "Docker Compose", "NGINX", "Administration système"], link: "https://github.com/ellah2202/inception",
    },
  ],
};

export const vision = {
  tag: "Vision",
  quote: "La technologie au service\nde l'humain.",
  text: "Je crois que les meilleurs systèmes sont ceux qui disparaissent\nderrière une expérience simple, fluide et efficace.\n\nMon objectif n'est pas seulement de créer des outils.\nMon objectif est de permettre aux entreprises de ",
  highlight: "travailler mieux.",
  values: ["Humaine", "Moderne", "Créative", "Organisée", "Efficace"],
};

export const contact = {
  tag: "Contact",
  titleParts: titleParts([
    { text: "Parlons de" },
    { text: "votre ", breakBefore: true },
    { text: "projet", em: true },
  ]),
  description:
    "Vous avez un projet, une idée ou une question ? Je réponds à toutes les demandes sérieuses et m'engage à trouver la solution adaptée à votre contexte.",
  email: "madame.fifie@gmail.com",
  phone: "+261 32 05 050 87",
  socials: [
    { href: "https://www.linkedin.com/in/annie-tsironiaina/", title: "LinkedIn", image: "/assets/linkedin.png" },
    { href: "https://github.com/ellah2202", title: "GitHub", image: "/assets/github.png" },
    { href: "https://web.facebook.com/profile.php?id=61591813078591&locale=fr_FR", title: "Facebook", image: "/assets/facebook.png" },
    { href: "https://www.instagram.com/ellah_tsiro/", title: "Instagram", image: "/assets/instagram.png" },
  ],
  formFields: [
    { id: "cf-prenom", label: "Prénom", type: "text" as const, placeholder: "Marie" },
    { id: "cf-nom", label: "Nom", type: "text" as const, placeholder: "Dupont" },
    { id: "cf-email", label: "Email", type: "email" as const, placeholder: "marie@entreprise.com" },
    {
      id: "cf-service", label: "Service souhaité", type: "select" as const, placeholder: "Choisir un service...",
      options: ["Développement sur mesure", "Prospection commerciale", "Automatisation", "Gestion d'équipe", "Conseil digital"],
    },
    { id: "cf-message", label: "Votre message", type: "textarea" as const, placeholder: "Décrivez votre projet ou besoin..." },
  ],
};

export const footer = {
  logo: "/assets/logo_alt_1.png",
  copyright: "© 2026 Ellah Services. Tous droits réservés.",
  tagline: "Fluidifier · Organiser · Accompagner",
};
