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

## 📂 Structure du dépôt

```text
OpenSkill/
│
├── skills/
│   ├── cybersecurity/
│   │   ├── phishing-analysis/
│   │   │   └── SKILL.md
│   │   │
│   │   └── ad-audit/
│   │       └── SKILL.md
│   │
│   ├── sysadmin/
│   │   └── linux-hardening/
│   │       └── SKILL.md
│   │
│   ├── devops/
│   │   └── kubernetes-review/
│   │       └── SKILL.md
│   │
│   └── ai/
│       ├── prompt-engineering/
│       │   └── SKILL.md
│       │
│       └── openpua/
│           └── SKILL.md
│
├── registry.json
├── package.json
└── README.md
```

---

## 📖 Exemple de Skill

```yaml
---
name: phishing-analysis
author: Black Angel
version: 1.0.0
tags:
  - cybersecurity
  - phishing
description: Analyse complète d'un email suspect.
---
```

```md
# Phishing Analysis

Lorsque l'utilisateur fournit un email :

1. Analyser l'expéditeur
2. Vérifier les URLs
3. Identifier les indicateurs de phishing
4. Evaluer le risque
5. Produire un rapport détaillé

## Rapport

### Résumé

### Indicateurs

### Risque

### Recommandations
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

## 🤝 Contribution

Les contributions sont les bienvenues.

### Étapes

1. Forker le dépôt
2. Créer une branche

```bash
git checkout -b add-new-skill
```

3. Ajouter votre Skill

```text
category/
└── skill-name/
    └── SKILL.md
```

4. Commit

```bash
git commit -m "feat: add new skill"
```

5. Ouvrir une Pull Request

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

## 📋 Roadmap

### Phase 1
- [x] Création du dépôt GitHub
- [x] Ajout des premières Skills
- [x] Standardisation des métadonnées
- [x] Création du registry.json

### Phase 2
- [x] Développement du CLI OpenSkill
- [ ] Publication sur NPM
- [x] Support GitHub Repository Import

### Phase 3
- [ ] Installation via NPX (package global)
- [ ] Recherche de Skills
- [ ] Mise à jour automatique
- [ ] Vérification des Skills

---

## 🔥 Notre ambition

Construire la plus grande collection francophone et internationale de Skills open source pour les agents IA.

Créer une fois.
Partager avec tous.
Améliorer ensemble.
