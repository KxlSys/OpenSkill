---
name: linux-hardening
author: Providence Damba
version: 1.0.0
tags:
  - sysadmin
  - linux
  - security
  - hardening
description: Procédure de durcissement et sécurisation d'un serveur Linux.
---

# Linux Server Hardening

Cette compétence guide l'administrateur système ou l'agent dans la sécurisation d'un système d'exploitation Linux.

## Étapes de Durcissement

1. **Sécurisation des Accès & SSH** :
   - Désactiver la connexion en tant que `root` via SSH (`PermitRootLogin no`).
   - Changer le port par défaut si nécessaire et désactiver l'authentification par mot de passe au profit des clés SSH.
   - Installer et configurer `fail2ban` pour bloquer les attaques par force brute.

2. **Gestion des Utilisateurs & Privilèges** :
   - Supprimer les comptes et groupes par défaut inutilisés.
   - Restreindre l'utilisation de `sudo` aux seuls utilisateurs autorisés.
   - Configurer des politiques de mot de passe strictes dans `/etc/login.defs` et `/etc/pam.d/common-password`.

3. **Mises à jour & Gestion des Paquets** :
   - Activer les mises à jour de sécurité automatiques (`unattended-upgrades`).
   - Supprimer les services et logiciels non essentiels (ex: serveurs FTP ou HTTP inutilisés).

4. **Sécurisation du Réseau & Pare-feu** :
   - Configurer un pare-feu (`ufw` ou `firewalld`) avec une politique par défaut de rejet ("default deny").
   - N'autoriser que les ports explicitement requis pour les services en cours d'exécution.

5. **Sécurisation du Système de Fichiers & Noyau** :
   - Configurer les paramètres sysctl pour désactiver l'IP forwarding et bloquer les paquets ICMP suspects.
   - Monter les partitions temporaires (`/tmp`, `/var/tmp`) avec les options `nodev`, `nosuid` et `noexec`.

## Rapport de Durcissement

### État Initial & Diagnostic
### Mesures Appliquées
### Recommandations Post-Durcissement
