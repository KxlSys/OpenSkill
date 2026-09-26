# 🚀 OpenSkill

Une bibliothèque open source de compétences ("Skills") réutilisables pour les agents IA.

L'objectif est simple : permettre à chacun de partager ses meilleures méthodes, workflows, prompts et expertises sous forme de Skills installables via `npx`.

---

## 🌍 Vision

Aujourd'hui, chacun recrée les mêmes prompts, procédures et workflows dans son coin.

OpenSkills vise à devenir un dépôt communautaire où les développeurs, administrateurs systèmes, experts cybersécurité, designers, marketeurs et passionnés d'IA peuvent partager leurs compétences avec le monde.

Une Skill peut représenter :

- Une méthodologie d'audit
- Un workflow DevOps
- Une procédure de réponse à incident
- Une méthode d'analyse OSINT
- Un assistant métier
- Un framework de réflexion
- Un processus de rédaction

---

## 📂 Structure recommandée du dépôt

```text
OpenSkill/
├── skills/
│   ├── cybersecurity/
│   │   ├── phishing-analysis/
│   │   │   └── SKILL.md
│   │   ├── ad-audit/
│   │   │   └── SKILL.md
│   │   └── devsecops-complete-audit/
│   │       └── SKILL.md
│   ├── sysadmin/
│   │   └── linux-hardening/
│   │       └── SKILL.md
│   ├── devops/
│   │   └── kubernetes-review/
│   │       └── SKILL.md
│   ├── ai/
│   │   ├── prompt-engineering/
│   │   │   └── SKILL.md
│   │   └── openpua/
│   │       └── SKILL.md
│   └── ...
├── docs/
│   ├── CONTRIBUTING.md
│   ├── CLI.md
│   ├── SKILL-TEMPLATE.md
│   └── ...
├── bin/
├── registry.json
├── package.json
├── README.md
└── LICENSE
```

---

## 📖 Exemple de Skill amélioré

```yaml
---
name: phishing-analysis
author: KxlSys
version: 1.0.0
description: Analyse complète d'un email suspect.
tags:
  - cybersecurity
  - phishing
category: cybersecurity
triggers:
  - "analyse phishing"
  - "email suspect"
  - "vérifier phishing"
compatibility:
  - claude-code
  - cursor
  - codex
difficulty: intermediate
estimated_time: 5-10 min
license: MIT
---
```

```md
# Phishing Analysis

## Objectif
Identifier les signes d'un email ou d'une page de phishing et produire un rapport clair, actionnable et hiérarchisé.

## Quand l'utiliser
- Un email suspect est reçu par un utilisateur
- Un lien ou un message semble frauduleux
- Un rapport d'incident demande une validation rapide

## Instructions

### Étape 1 – Analyser l'expéditeur
- Vérifier l'identité du domaine, l'absence de spoofing et les signatures SPF/DKIM/DMARC.

### Étape 2 – Vérifier les URLs
- Examiner les liens, les redirections, les attaques de domaine proche et la réputation.

### Étape 3 – Évaluer le risque
- Repérer urgence, menaces, fautes d'orthographe, demandes de données sensibles.

## Format de sortie attendu

```markdown
### Résumé
...

### Indicateurs
- ...

### Niveau de risque
Faible / Moyen / Élevé

### Recommandations
1. ...
2. ...
```
```

---

## 📦 Installation

Installer l'ensemble du dépôt :

```bash
npx openskill add KxlSys/OpenSkill
```

Installer une Skill spécifique :

```bash
npx openskill add KxlSys/OpenSkill --skill phishing-analysis
```

---

## 🤝 Comment contribuer

1. Fork le dépôt
2. Crée une branche : `git checkout -b feat/ma-nouvelle-skill`
3. Ajoute ta skill dans le bon dossier :

```text
skills/<category>/<skill-name>/SKILL.md
```

4. Utilise le [template officiel](./docs/SKILL-TEMPLATE.md)
5. Mets à jour `registry.json`
6. Ouvre une Pull Request

### Règles
- Nom de skill uniquement en `a-z` et `0-9` (ex. : `linux-hardening`)
- Frontmatter obligatoire
- Instructions claires + exemple d'utilisation
- Licence MIT

Pour une procédure plus détaillée, consultez [docs/CONTRIBUTING.md](./docs/CONTRIBUTING.md).

---

## 📋 Convention de nommage

Utiliser uniquement :

```text
a-z
0-9
-
```

Exemples :

✅ linux-hardening

✅ active-directory-audit

✅ phishing-analysis

❌ Linux Hardening

❌ ActiveDirectoryAudit

---

## 🏷️ Catégories disponibles

- Cybersecurity
- SysAdmin
- DevOps
- Cloud
- Linux
- Windows
- Networking
- OSINT
- AI
- Web Development
- Mobile Development
- Design
- Productivity
- Business
- Debugging

---

## ⭐ Pourquoi contribuer ?

Chaque Skill publiée :

- aide la communauté ;
- évite de réinventer la roue ;
- met en valeur votre expertise ;
- peut être utilisée par des milliers d'utilisateurs.

---

## 📜 Licence

MIT License

---

## 🗺️ Roadmap d'amélioration – OpenSkill

### Phase 1 – Fondations (2-3 semaines)
- [ ] Finaliser le CLI (`openskill add`, `list`, `search`, `update`)
- [ ] Publier le package NPM
- [ ] Atteindre 25-30 skills de qualité
- [ ] Standardiser le template SKILL.md
- [ ] Ajouter support multi-agents (Claude Code, Cursor, Codex)

### Phase 2 – Adoption (3-5 semaines)
- [ ] Recherche de skills
- [ ] Mise à jour automatique
- [ ] Scopes projet / global
- [ ] Documentation FR + EN
- [ ] Système de contribution simplifié

### Phase 3 – Différenciation
- [ ] Scanner de sécurité basique
- [ ] Score de qualité des skills
- [ ] Site de découverte / registry public
- [ ] Progressive disclosure
- [ ] Badges et statistiques

---

## 🔥 Notre ambition

Construire la plus grande collection francophone et internationale de Skills open source pour les agents IA.

Créer une fois.
Partager avec tous.
Améliorer ensemble.
