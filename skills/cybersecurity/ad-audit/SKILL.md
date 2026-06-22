---
name: ad-audit
author: KxlSys
version: 1.0.0
tags:
  - cybersecurity
  - active-directory
  - audit
description: Méthodologie d'audit de sécurité Active Directory.
---

# Active Directory Audit

Cette compétence définit les étapes pour mener un audit de sécurité d'un environnement Active Directory (AD).

## Procédure d'audit

1. **Collecte d'informations (Reconnaissance)** :
   - Cartographier le domaine, les relations d'approbation et les contrôleurs de domaine.
   - Lister les utilisateurs, groupes et ordinateurs.

2. **Analyse de la Politique de Mots de Passe & Comptes** :
   - Vérifier la robustesse de la politique de mots de passe fine (FGPP).
   - Identifier les comptes inactifs, expirés ou sans expiration de mot de passe.

3. **Recherche de Vulnérabilités & Mauvaises Configurations** :
   - Analyser les délégations de droits non sécurisées (Kerberoasting, AS-REP Roasting).
   - Analyser les mauvaises configurations de ACLs (Access Control Lists).
   - Détecter les vulnérabilités courantes (ex: LDAP signing non requis, serveurs obsolètes).

4. **Analyse des Droits d'Administration** :
   - Auditer les membres des groupes hautement privilégiés (Domain Admins, Enterprise Admins, Schema Admins).
   - Identifier les chemins de compromission (ex: via BloodHound / SharpHound).

5. **Évaluation de la Politique de GPO** :
   - Analyser les stratégies de groupe appliquées pour détecter les faiblesses de configuration.

## Rapport d'Audit AD

### Synthèse Exécutive
### Constats & Vulnérabilités (Classés par criticité)
### Plan d'Action & Remédiation
