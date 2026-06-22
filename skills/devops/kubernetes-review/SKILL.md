---
name: kubernetes-review
author: Providence Damba
version: 1.0.0
tags:
  - devops
  - kubernetes
  - review
  - yaml
description: Analyse et revue de sécurité de manifests Kubernetes.
---

# Kubernetes Manifest Review

Cette compétence fournit un workflow pour auditer et valider les fichiers de configuration (manifests YAML) de Kubernetes avant leur déploiement.

## Points de Contrôle

1. **Sécurité des Pods & Conteneurs** :
   - Vérifier que `runAsNonRoot` est défini à `true` et `allowPrivilegeEscalation` à `false`.
   - S'assurer que le système de fichiers racine est en lecture seule (`readOnlyRootFilesystem: true`).
   - Éviter d'utiliser le namespace `default` sans restrictions d'accès.

2. **Gestion des Ressources** :
   - Vérifier que les `limits` et `requests` de CPU et de mémoire sont bien spécifiées pour chaque conteneur afin d'éviter la saturation des nœuds.

3. **Réseau et NetworkPolicies** :
   - Vérifier l'existence et la configuration de `NetworkPolicies` pour isoler les flux réseau entre namespaces et pods.

4. **Secrets & Variables d'environnement** :
   - S'assurer qu'aucune donnée sensible n'est stockée en clair dans les variables d'environnement (préférer l'utilisation de `SecretKeyRef` ou de gestionnaires de secrets externes).

5. **Sondes de Disponibilité** :
   - Valider la présence des sondes `livenessProbe`, `readinessProbe` et `startupProbe`.

## Rapport de Revue Kubernetes

### Liste des Manifests Audités
### Problèmes Majeurs Identifiés (Sécurité & Stabilité)
### Manifests Corrigés (Exemples de correctifs)
