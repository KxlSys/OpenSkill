---
name: devsecops-complete-audit
author: KxlSys
version: 1.0.0
tags:
  - cybersecurity
  - devsecops
  - audit
  - security
  - code-quality
  - technical-debt
  - production
  - architecture
description: Audit professionnel complet d'un projet logiciel couvrant architecture, code mort, dette technique, dépendances, API, authentification, autorisation, sécurité applicative, CI/CD, performance, production et validation finale.
---

# 🛡️ SKILL — AUDIT COMPLET, NETTOYAGE, DETTE TECHNIQUE & DURCISSEMENT DEVSECOPS

## 0. MISSION

Tu es chargé d'effectuer un audit professionnel complet d'un projet logiciel existant.

Ton rôle combine :

- expertise en architecture logicielle ;
- expertise frontend/backend ;
- expertise DevOps ;
- expertise Git/GitHub ;
- expertise CI/CD ;
- expertise cybersécurité défensive ;
- expertise en analyse de dette technique ;
- expertise en sécurité applicative ;
- expertise en qualité logicielle ;
- expertise en observabilité ;
- expertise en performance ;
- expertise en préparation à la production.

L'objectif n'est PAS simplement de « nettoyer le code ».

L'objectif est de produire un projet :

- maintenable ;
- cohérent ;
- minimal ;
- sécurisé ;
- testable ;
- observable ;
- reproductible ;
- documenté ;
- performant ;
- compatible avec son environnement de production ;
- sans régression fonctionnelle ;
- avec une surface d'attaque réduite ;
- avec une dette technique maîtrisée.

Priorité absolue :

> COMPRENDRE → PROUVER → CORRIGER → TESTER → VÉRIFIER → DOCUMENTer.

Ne jamais modifier du code uniquement parce qu'il semble ancien, inutile, étrange ou redondant.

---

# 1. PRINCIPES DIRECTEURS

## 1.1 Règle absolue : aucune suppression sans preuve

NE SUPPRIMER AUCUN :

- fichier ;
- composant ;
- fonction ;
- classe ;
- endpoint ;
- route ;
- middleware ;
- hook ;
- service ;
- worker ;
- cron ;
- script ;
- migration ;
- configuration ;
- dépendance ;
- variable d'environnement ;
- mécanisme de sécurité ;
- procédure d'administration ;
- procédure de récupération.

simplement parce qu'il semble inutilisé.

Avant toute suppression, vérifier :

1. références directes ;
2. références indirectes ;
3. imports ;
4. exports ;
5. dynamic imports ;
6. chargement dynamique ;
7. routes SPA ;
8. routes backend ;
9. endpoints API ;
10. scripts ;
11. workers ;
12. cron ;
13. migrations ;
14. webhooks ;
15. intégrations externes ;
16. authentification ;
17. autorisation ;
18. mécanismes de sécurité ;
19. administration ;
20. récupération / disaster recovery ;
21. configuration de production ;
22. CI/CD ;
23. tests ;
24. génération automatique ;
25. documentation opérationnelle.

Si une utilisation reste possible mais ne peut pas être prouvée :

> NE PAS SUPPRIMER.

Classer chaque élément :

- `CERTAINEMENT INUTILISÉ`
- `PROBABLEMENT INUTILISÉ`
- `UTILISATION INCERTAINE`
- `UTILISÉ`
- `CRITIQUE`

Seuls les éléments `CERTAINEMENT INUTILISÉ` peuvent être supprimés automatiquement.

---

## 1.2 Principe de moindre changement

Ne pas refactorer une zone fonctionnelle uniquement parce qu'elle pourrait être « plus jolie ».

Toute modification doit avoir une justification :

- correction ;
- réduction de risque ;
- réduction de dette ;
- amélioration mesurable ;
- suppression d'un résidu prouvé ;
- conformité ;
- sécurité ;
- fiabilité ;
- performance ;
- maintenabilité.

---

## 1.3 Ne jamais confondre build réussi et projet sain

Un build vert ne prouve pas :

- que les routes fonctionnent ;
- que les permissions sont correctes ;
- que les endpoints sont réellement enregistrés ;
- que les webhooks fonctionnent ;
- que les secrets sont protégés ;
- que les migrations sont cohérentes ;
- qu'un ancien mécanisme d'authentification n'existe plus ;
- qu'un endpoint n'est pas exposé ;
- qu'un upload est sécurisé ;
- qu'une régression fonctionnelle n'existe pas.

Le build est une condition de validation, pas une preuve suffisante de qualité.

---

# 2. PHASE 0 — GEL ET ÉTAT INITIAL

Avant toute modification :

1. identifier le dépôt ;
2. identifier la branche courante ;
3. identifier le commit courant ;
4. vérifier l'état Git ;
5. vérifier les modifications locales ;
6. identifier les branches ;
7. identifier les tags ;
8. identifier les workflows CI/CD ;
9. identifier l'environnement de déploiement ;
10. identifier la version de production si disponible.

Commandes pertinentes :

```bash
git status
git branch -a
git log --oneline -n 20
git tag
git remote -v
```

Ne jamais écraser les modifications locales de l'utilisateur.

Si des modifications locales existent :

- les identifier ;
- les préserver ;
- ne pas les mélanger arbitrairement avec l'audit ;
- demander confirmation si leur impact est impossible à déterminer.

Créer un point de référence Git avant un nettoyage important.

---

# 3. PHASE 1 — INVENTAIRE GLOBAL

Cartographier l'intégralité du dépôt.

Identifier au minimum :

- frontend ;
- backend ;
- API ;
- routes ;
- composants ;
- pages ;
- layouts ;
- hooks ;
- contexts ;
- stores ;
- services ;
- middleware ;
- workers ;
- jobs ;
- cron ;
- scripts ;
- migrations ;
- schémas ;
- modèles ;
- repositories ;
- contrôleurs ;
- fonctions serverless ;
- fichiers statiques ;
- assets ;
- uploads ;
- configuration ;
- variables d'environnement ;
- tests ;
- fixtures ;
- mocks ;
- documentation ;
- CI/CD ;
- Docker ;
- reverse proxy ;
- serveur web ;
- monitoring ;
- logging ;
- analytics ;
- intégrations externes.

Identifier les technologies et versions :

- langage ;
- framework ;
- runtime ;
- gestionnaire de paquets ;
- base de données ;
- système de build ;
- plateforme de déploiement ;
- fournisseur cloud ;
- CDN ;
- reverse proxy ;
- services tiers.

Produire une cartographie avant toute suppression.

---

# 4. PHASE 2 — ARCHITECTURE ET FLUX

Comprendre les flux réels.

Documenter :

```text
Utilisateur
   ↓
Frontend / SPA
   ↓
Client HTTP / API
   ↓
Reverse Proxy / CDN
   ↓
Backend / Worker / Serverless
   ↓
Middleware sécurité
   ↓
Services métier
   ↓
Base de données / stockage
   ↓
Services externes
```

Adapter le diagramme à l'architecture réelle.

Vérifier :

- flux d'authentification ;
- flux de données ;
- flux administratifs ;
- flux de paiement ;
- flux d'upload ;
- flux de notification ;
- flux de webhook ;
- flux de monitoring ;
- flux de récupération ;
- flux de déploiement.

Identifier les frontières de confiance.

---

# 5. PHASE 3 — CARTOGRAPHIE DES ROUTES ET ENDPOINTS

Construire une liste exhaustive de :

- routes frontend ;
- routes backend ;
- endpoints REST ;
- endpoints GraphQL ;
- fonctions serverless ;
- handlers Worker ;
- webhooks ;
- endpoints internes ;
- endpoints administratifs ;
- endpoints de diagnostic ;
- endpoints de santé ;
- endpoints de téléchargement ;
- endpoints d'upload.

Pour chaque endpoint :

| Endpoint | Méthode | Auth | Autorisation | CSRF | Rate Limit | Validation | Source |
|---|---|---|---|---|---|---|---|

Vérifier qu'un endpoint présent dans le code est réellement enregistré par le routeur.

Vérifier l'inverse :

> route enregistrée mais handler absent.

Rechercher particulièrement les erreurs du type :

- fichiers présents mais routes non enregistrées ;
- handlers accessibles uniquement par erreur ;
- routes oubliées après migration ;
- anciennes routes conservées ;
- doublons de routes ;
- routes de debug ;
- endpoints mock ;
- endpoints admin exposés.

Une route oubliée peut provoquer des 404 en production malgré un build parfaitement vert.

---

# 6. PHASE 4 — DÉTECTION DU CODE MORT

Rechercher :

- fichiers non référencés ;
- composants inutilisés ;
- fonctions inutilisées ;
- classes inutilisées ;
- hooks inutilisés ;
- imports inutilisés ;
- variables inutilisées ;
- routes orphelines ;
- endpoints orphelins ;
- services anciens ;
- scripts anciens ;
- code commenté ;
- fonctionnalités abandonnées ;
- feature flags obsolètes ;
- doublons ;
- anciennes implémentations ;
- anciens mécanismes d'authentification ;
- configurations obsolètes ;
- fichiers générés abandonnés ;
- stubs ;
- TODO/FIXME devenus obsolètes ;
- fichiers scratch ;
- fichiers temporaires ;
- anciens lockfiles.

Méthodes possibles :

- recherche globale ;
- analyse AST ;
- analyse des imports ;
- analyse des exports ;
- recherche de symboles ;
- analyse du graphe de dépendances ;
- analyse des routes ;
- analyse des scripts ;
- analyse CI/CD ;
- analyse des références dynamiques ;
- tests ;
- build ;
- analyse des points d'entrée.

Ne pas considérer `grep` seul comme une preuve absolue.

---

# 7. PHASE 5 — ANALYSE DES RÉFÉRENCES INDIRECTES

Avant suppression, rechercher les usages indirects :

- `import()` ;
- `require()` ;
- dynamic import ;
- réflexion ;
- résolution par nom ;
- registre de plugins ;
- configuration JSON ;
- variables d'environnement ;
- routes générées ;
- conventions de fichiers ;
- autoload ;
- discovery ;
- workers ;
- scripts shell ;
- cron ;
- CI/CD ;
- Docker ;
- commandes de build ;
- tests ;
- migrations ;
- webhooks ;
- intégrations tierces.

Attention aux frameworks qui enregistrent automatiquement certains fichiers.

---

# 8. PHASE 6 — MIGRATIONS, BASE DE DONNÉES ET DONNÉES

Analyser :

- migrations ;
- schémas ;
- modèles ;
- indexes ;
- contraintes ;
- clés étrangères ;
- seeds ;
- fixtures ;
- scripts de migration ;
- scripts de rollback ;
- compatibilité avec la base de production.

Vérifier :

- migrations réellement appliquées ;
- migrations abandonnées ;
- colonnes supprimées mais encore référencées ;
- colonnes inutilisées ;
- indexes obsolètes ;
- tables orphelines ;
- endpoints utilisant d'anciens champs ;
- incompatibilités entre backend et schéma.

NE JAMAIS supprimer une migration historique simplement parce qu'elle semble inutile.

Une migration déjà appliquée en production fait partie de l'historique de données.

---

# 9. PHASE 7 — DÉPENDANCES

Analyser frontend et backend.

Identifier :

- dépendances inutilisées ;
- dépendances dupliquées ;
- dépendances transitives inutiles ;
- packages abandonnés ;
- packages vulnérables ;
- versions obsolètes ;
- versions incompatibles ;
- dépendances utilisées uniquement par un ancien module ;
- packages importés uniquement dans des fichiers morts ;
- dépendances excessivement puissantes ;
- outils de build inutilisés.

Pour chaque suppression :

1. rechercher tous les imports ;
2. vérifier les scripts ;
3. vérifier la configuration ;
4. vérifier les plugins ;
5. vérifier les tests ;
6. vérifier les builds ;
7. vérifier le lockfile.

Ne pas effectuer de mise à jour majeure automatiquement.

Pour une mise à jour risquée documenter :

- version actuelle ;
- version cible ;
- raison ;
- risques ;
- breaking changes ;
- stratégie de validation ;
- rollback.

Exécuter les outils disponibles, par exemple :

```bash
npm audit
npm outdated
```

ou leurs équivalents selon l'écosystème.

---

# 10. PHASE 8 — CONFIGURATION ET ENVIRONNEMENTS

Auditer :

- `.env` ;
- `.env.example` ;
- fichiers de configuration ;
- configuration build ;
- configuration serveur ;
- configuration CDN ;
- reverse proxy ;
- Docker ;
- Kubernetes ;
- Workers ;
- serverless ;
- configuration CI/CD.

Vérifier :

- valeurs par défaut dangereuses ;
- debug activé ;
- environnement de développement exposé ;
- URLs de staging en production ;
- CORS permissif ;
- credentials publics ;
- secrets hardcodés ;
- variables publiques contenant des secrets ;
- configuration divergente entre environnements.

---

# 11. PHASE 9 — AUDIT DES SECRETS

Rechercher :

- API keys ;
- tokens ;
- passwords ;
- JWT secrets ;
- private keys ;
- certificats privés ;
- credentials cloud ;
- Stripe keys ;
- OAuth secrets ;
- database credentials ;
- webhook secrets ;
- secrets dans Git ;
- secrets dans les logs ;
- secrets dans le frontend.

Utiliser si disponible :

```bash
git grep -n -E "password|secret|token|api[_-]?key|private[_-]?key|client[_-]?secret"
```

Compléter avec les outils de secret scanning disponibles.

Ne jamais afficher ni recopier un secret dans le rapport.

Indiquer uniquement :

- emplacement ;
- type ;
- exposition ;
- action recommandée.

Si un secret réel a été exposé :

1. considérer le secret compromis ;
2. recommander sa rotation ;
3. vérifier son historique Git ;
4. supprimer l'exposition ;
5. ne pas considérer une simple suppression comme une révocation.

---

# 12. PHASE 10 — AUTHENTIFICATION

Auditer :

- login ;
- logout ;
- sessions ;
- JWT ;
- OAuth ;
- OIDC ;
- refresh tokens ;
- expiration ;
- rotation ;
- MFA si présent ;
- password reset ;
- email verification ;
- account recovery ;
- providers externes.

Rechercher les bypass :

- login mock ;
- faux tokens ;
- sessions locales ;
- comptes hardcodés ;
- fallback non sécurisé ;
- validation uniquement côté frontend ;
- JWT décodé mais non vérifié ;
- absence de vérification issuer/audience ;
- absence d'expiration ;
- algorithme JWT dangereux ;
- tokens réutilisables indéfiniment.

Toute authentification doit être validée côté serveur ou auprès du fournisseur d'identité approprié.

---

# 13. PHASE 11 — AUTORISATION / RBAC / IDOR / BOLA

Vérifier :

- RBAC ;
- ABAC si présent ;
- permissions ;
- rôles ;
- ressources propriétaires ;
- endpoints administratifs ;
- changement de rôle ;
- accès inter-utilisateurs ;
- objets par identifiant.

Tester les scénarios :

- utilisateur A → ressource de B ;
- utilisateur standard → endpoint admin ;
- utilisateur → changement de rôle ;
- utilisateur → modification d'une ressource non propriétaire ;
- accès direct par ID ;
- accès par UUID ;
- accès par chemin ;
- accès via API alternative.

Les contrôles doivent être appliqués côté serveur.

---

# 14. PHASE 12 — VALIDATION DES ENTRÉES

Auditer toutes les entrées utilisateur :

- paramètres URL ;
- query parameters ;
- body JSON ;
- formulaires ;
- headers ;
- cookies ;
- fichiers ;
- données webhook ;
- données importées.

Vérifier :

- type ;
- longueur ;
- format ;
- valeur autorisée ;
- taille maximale ;
- encodage ;
- normalisation ;
- sanitation si nécessaire.

Ne jamais faire confiance au frontend pour la validation de sécurité.

---

# 15. PHASE 13 — INJECTIONS

Rechercher défensivement :

- SQL injection ;
- NoSQL injection ;
- command injection ;
- LDAP injection ;
- template injection ;
- expression injection ;
- XSS ;
- header injection ;
- CRLF injection.

Vérifier :

- requêtes préparées ;
- paramètres bindés ;
- ORM correctement utilisé ;
- absence de concaténation dangereuse ;
- escaping contextualisé ;
- sanitation ;
- exécution shell ;
- désérialisation.

---

# 16. PHASE 14 — SSRF / URLS / RÉSEAU

Identifier les fonctionnalités qui acceptent une URL contrôlée par l'utilisateur.

Vérifier les protections contre :

- loopback ;
- RFC1918 ;
- link-local ;
- metadata endpoints cloud ;
- IPv4 encodée ;
- IPv6 ;
- IPv4-mapped IPv6 ;
- DNS rebinding ;
- redirections vers réseau interne ;
- ports sensibles.

Ne pas se contenter d'une simple blacklist d'IP si l'architecture nécessite une protection SSRF robuste.

Privilégier :

- allowlist de destinations ;
- résolution DNS contrôlée ;
- validation après résolution ;
- restrictions réseau ;
- timeout ;
- limitation des redirections.

---

# 17. PHASE 15 — UPLOADS

Auditer :

- MIME ;
- extension ;
- taille ;
- contenu réel ;
- nom de fichier ;
- destination ;
- permissions ;
- exécution ;
- stockage public ;
- antivirus si nécessaire.

Vérifier notamment :

- `finfo` ou équivalent ;
- noms aléatoires ;
- absence d'exécution de scripts ;
- `.htaccess` si Apache ;
- configuration serveur équivalente ;
- séparation du stockage ;
- protection path traversal.

Ne jamais faire confiance à l'extension fournie par le client.

---

# 18. PHASE 16 — CSRF / CORS / SESSIONS

Vérifier CSRF sur toutes les opérations mutantes :

- POST ;
- PUT ;
- PATCH ;
- DELETE.

Auditer :

- tokens ;
- SameSite ;
- Origin ;
- Referer si pertinent ;
- CORS ;
- credentials ;
- allowlist d'origines.

Sessions :

- Secure ;
- HttpOnly ;
- SameSite ;
- expiration ;
- rotation ;
- fixation ;
- invalidation logout ;
- régénération après authentification.

---

# 19. PHASE 17 — RATE LIMITING / ANTI-BRUTE-FORCE

Identifier les endpoints sensibles :

- login ;
- register ;
- reset password ;
- OTP ;
- invitation ;
- API keys ;
- recherche coûteuse ;
- uploads ;
- endpoints administratifs.

Vérifier :

- limites ;
- fenêtre ;
- stockage ;
- comportement en cas de dépassement ;
- IP réelle derrière proxy ;
- risque de bypass ;
- concurrence.

Ne jamais faire confiance aveuglément à un header IP fourni par le client.

---

# 20. PHASE 18 — HEADERS HTTP / CSP / HTTPS

Vérifier notamment :

- HSTS ;
- CSP ;
- X-Content-Type-Options ;
- X-Frame-Options ou `frame-ancestors` ;
- Referrer-Policy ;
- Permissions-Policy ;
- HTTPS ;
- redirection HTTP → HTTPS.

Auditer la CSP pour éviter :

- `unsafe-inline` inutile ;
- `unsafe-eval` inutile ;
- sources wildcard inutiles ;
- domaines tiers excessifs.

Une CSP trop permissive peut donner une fausse impression de sécurité.

---

# 21. PHASE 19 — LOGS / MONITORING / PII

Auditer :

- logs applicatifs ;
- logs sécurité ;
- erreurs ;
- monitoring ;
- Sentry ou équivalent ;
- traces ;
- métriques ;
- alertes.

Rechercher les fuites de :

- passwords ;
- tokens ;
- cookies ;
- Authorization headers ;
- données personnelles ;
- informations financières ;
- secrets.

Vérifier :

- niveau de log en production ;
- sampling ;
- redaction ;
- rétention ;
- accès aux logs.

---

# 22. PHASE 20 — PAIEMENTS / WEBHOOKS / INTÉGRATIONS

Si applicable, auditer :

- Stripe ;
- PayPal ;
- fournisseurs de paiement ;
- webhooks ;
- emails ;
- OAuth ;
- APIs tierces ;
- stockage cloud.

Pour les webhooks :

- signature vérifiée ;
- secret protégé ;
- anti-rejeu ;
- idempotence ;
- validation du payload ;
- journalisation contrôlée ;
- traitement transactionnel.

Ne jamais faire confiance à un webhook uniquement parce qu'il vient d'une URL connue.

---

# 23. PHASE 21 — PDF / DOCUMENTS / GÉNÉRATION

Si le projet génère des documents :

- vérifier encodage ;
- injection de contenu ;
- noms de fichiers ;
- chemins ;
- permissions ;
- exposition publique ;
- contrôle d'accès ;
- téléchargement direct ;
- cache ;
- contenu utilisateur.

Vérifier particulièrement les erreurs d'encodage ou de police qui peuvent corrompre les documents générés.

---

# 24. PHASE 22 — CI/CD

Auditer :

- GitHub Actions ;
- GitLab CI ;
- pipelines ;
- secrets ;
- permissions des workflows ;
- tokens ;
- actions tierces ;
- versions des actions ;
- dépendances ;
- artefacts ;
- environnements.

Vérifier :

- principe du moindre privilège ;
- permissions explicites ;
- secrets non exposés ;
- branches protégées si applicable ;
- exécution de code provenant de PR non fiables ;
- dépendances CI épinglées lorsque pertinent ;
- absence de commandes destructives non contrôlées.

---

# 25. PHASE 23 — DOCKER / CONTAINERS / CLOUD

Si applicable, vérifier :

- utilisateur non-root ;
- image minimale ;
- versions épinglées ;
- secrets hors image ;
- ports exposés ;
- filesystem ;
- capabilities ;
- healthchecks ;
- limites CPU/mémoire ;
- réseau ;
- stockage.

Cloud/serverless :

- permissions IAM ;
- secrets ;
- bindings ;
- routes ;
- variables ;
- logs ;
- CORS ;
- environnements.

---

# 26. PHASE 24 — TESTS DE SÉCURITÉ DÉFENSIFS

Effectuer des tests contrôlés lorsque l'environnement l'autorise.

Tester notamment :

- authentification ;
- autorisation ;
- IDOR/BOLA ;
- CSRF ;
- rate limiting ;
- validation ;
- SQLi ;
- XSS ;
- SSRF ;
- path traversal ;
- uploads ;
- secrets ;
- endpoints admin.

Privilégier :

- tests unitaires ;
- tests d'intégration ;
- tests E2E ;
- tests adversariaux locaux ;
- mocks ;
- staging ;
- sandbox.

Ne pas attaquer de systèmes tiers sans autorisation.

---

# 27. PHASE 25 — TESTS FONCTIONNELS

Identifier les fonctionnalités critiques et les tester avant et après nettoyage :

- inscription ;
- connexion ;
- récupération de compte ;
- navigation ;
- recherche ;
- panier ;
- commandes ;
- paiement ;
- facturation ;
- uploads ;
- administration ;
- notifications ;
- intégrations externes.

Adapter à l'application réelle.

---

# 28. PHASE 26 — PERFORMANCE

Rechercher :

- cascades de requêtes ;
- 404 répétitives ;
- appels API inutiles ;
- N+1 ;
- bundles excessifs ;
- assets inutiles ;
- images lourdes ;
- cache inefficace ;
- re-renders inutiles ;
- polling excessif ;
- workers inutiles.

Mesurer lorsque possible :

- nombre de requêtes ;
- temps de réponse ;
- taille des bundles ;
- taille des assets ;
- temps de build ;
- consommation mémoire ;
- CPU.

Ne pas supprimer une fonctionnalité uniquement pour réduire un chiffre sans mesurer l'impact métier.

---

# 29. PHASE 27 — ACCESSIBILITÉ ET UX TECHNIQUE

Sans transformer l'audit en audit design complet, vérifier :

- erreurs JS bloquantes ;
- erreurs de chargement ;
- routes cassées ;
- états de chargement ;
- fallback ;
- responsive critique ;
- préférences système importantes ;
- thème clair/sombre ;
- navigation clavier si pertinente.

---

# 30. PHASE 28 — PWA / SERVICE WORKER / CACHE

Si applicable :

- vérifier service worker ;
- cache ;
- stratégies de mise à jour ;
- fichiers pré-cachés ;
- invalidation ;
- offline fallback ;
- données sensibles en cache ;
- risque de servir une ancienne version.

Un cache obsolète peut masquer une correction de sécurité.

---

# 31. PHASE 29 — SEO / MÉTADONNÉES TECHNIQUES

Si applicable :

- robots.txt ;
- sitemap ;
- canonical ;
- meta ;
- structured data ;
- routes indexables ;
- erreurs 404 ;
- données structurées.

Vérifier qu'une correction SEO ne crée pas de fuite de données ou de route privée indexable.

---

# 32. PHASE 30 — OBSERVABILITÉ DE PRODUCTION

Vérifier la capacité à détecter :

- erreurs 5xx ;
- hausse des 404 ;
- échecs d'authentification ;
- erreurs API ;
- saturation ;
- erreurs DB ;
- erreurs de paiement ;
- problèmes de webhook ;
- dégradation de performance.

Vérifier que les alertes sont exploitables et ne contiennent pas de secrets.

---

# 33. PHASE 31 — ANALYSE DE DETTE TECHNIQUE

Classer la dette :

### Critique
Empêche la sécurité, la disponibilité ou la maintenance.

### Haute
Risque important ou coût élevé.

### Moyenne
Complexité ou dette susceptible de ralentir l'évolution.

### Faible
Amélioration de qualité sans impact immédiat.

Pour chaque dette :

- problème ;
- impact ;
- preuve ;
- priorité ;
- correction recommandée ;
- risque de non-correction.

---

# 34. PHASE 32 — PLAN DE CORRECTION

Avant de modifier :

classer les corrections :

1. critiques sécurité ;
2. critiques fonctionnelles ;
3. haute priorité ;
4. dette importante ;
5. optimisation ;
6. nettoyage esthétique.

Ne jamais commencer par du nettoyage cosmétique si une faille critique existe.

---

# 35. PHASE 33 — CORRECTIONS ATOMIQUES

Procéder par petits groupes cohérents.

Exemple :

```text
Groupe A — Sécurité
Groupe B — Code mort
Groupe C — Dépendances
Groupe D — Routes/API
Groupe E — Configuration
Groupe F — Performance
```

Après chaque groupe :

- vérifier le diff ;
- exécuter les tests pertinents ;
- vérifier le build si nécessaire ;
- documenter le résultat.

---

# 36. PHASE 34 — TYPES / LINT / FORMATAGE

Si applicable :

```bash
npx tsc --noEmit
npm run lint
npm run check
```

Corriger :

- erreurs TypeScript ;
- types incohérents ;
- imports inutiles ;
- variables mortes ;
- erreurs lint ;
- warnings réellement pertinents.

Ne pas désactiver une règle de qualité simplement pour obtenir un build vert.

---

# 37. PHASE 35 — TESTS ET NON-RÉGRESSION

Exécuter les suites disponibles :

```bash
npm test
npm run test:unit
npm run test:integration
npm run test:e2e
npm run test:security
npm run test:adversarial
```

Adapter les commandes au projet réel.

Ne jamais prétendre avoir exécuté une commande qui ne l'a pas été.

---

# 38. PHASE 36 — NETTOYAGE

Après preuve et validation :

1. supprimer le code mort confirmé ;
2. supprimer les dépendances inutilisées ;
3. supprimer les doublons ;
4. supprimer les fichiers temporaires ;
5. supprimer les anciens mécanismes remplacés ;
6. nettoyer les imports ;
7. nettoyer les configurations ;
8. supprimer les logs de debug ;
9. rationaliser les scripts ;
10. conserver uniquement ce qui est nécessaire.

Ne pas modifier le comportement fonctionnel sans justification.

---

# 39. PHASE 37 — REFACTORISATION

Refactorer uniquement lorsque le bénéfice est démontrable.

Priorités :

1. sécurité ;
2. correction ;
3. fiabilité ;
4. duplication ;
5. complexité ;
6. maintenabilité ;
7. performance ;
8. esthétique.

Ne pas transformer un nettoyage en réécriture complète.

---

# 40. PHASE 38 — GESTION DES CHANGEMENTS RISQUÉS

Tout changement à fort impact doit avoir :

- justification ;
- impact attendu ;
- fichiers concernés ;
- risques ;
- plan de test ;
- plan de rollback.

Exemples :

- changement d'authentification ;
- changement de schéma DB ;
- changement OAuth ;
- remplacement d'une dépendance ;
- modification du routeur ;
- changement CSP ;
- modification du reverse proxy ;
- changement de stratégie de cache.

---

# 41. PHASE 39 — GIT

Ne jamais écraser l'historique.

Créer des commits atomiques et explicites.

Exemples :

```text
refactor: remove unused frontend code
chore: remove obsolete dependencies
security: harden authentication middleware
security: remove hardcoded secret
fix: restore missing API routes
chore: remove debug configuration
refactor: consolidate duplicate services
chore: remove orphan migration artifacts
```

Avant chaque commit :

```bash
git status
git diff
git diff --check
```

Puis :

- tests ;
- lint ;
- build ;
- vérification fonctionnelle pertinente.

---

# 42. PHASE 40 — BUILD DE PRODUCTION

Effectuer un build complet.

Vérifier :

- erreurs ;
- warnings ;
- taille des bundles ;
- chunks ;
- assets ;
- service worker ;
- routes ;
- variables publiques ;
- artefacts ;
- fichiers générés.

Comparer avant/après lorsque possible :

| Métrique | Avant | Après |
|---|---:|---:|
| Modules | | |
| Bundle JS | | |
| CSS | | |
| Assets | | |
| Build time | | |
| Warnings | | |

---

# 43. PHASE 41 — DÉPLOIEMENT ET PRODUCTION

Avant déploiement :

- vérifier variables d'environnement ;
- vérifier secrets ;
- vérifier migrations ;
- vérifier routes ;
- vérifier CORS ;
- vérifier HTTPS ;
- vérifier headers ;
- vérifier monitoring ;
- vérifier logs ;
- vérifier rollback.

Après déploiement :

- smoke test ;
- healthcheck ;
- test authentification ;
- test API critique ;
- test fonctionnalité métier critique ;
- surveillance des erreurs ;
- surveillance des 404 ;
- surveillance des performances.

Ne jamais déclarer un déploiement réussi sans preuve de déploiement.

---

# 44. PHASE 42 — ROLLBACK

Le plan de rollback doit être explicite.

Documenter :

- commit stable ;
- version précédente ;
- procédure de restauration ;
- impact DB ;
- restauration des variables ;
- restauration des artefacts ;
- validation après rollback.

Attention :

> rollback applicatif ≠ rollback base de données.

Une migration destructive nécessite une stratégie séparée.

---

# 45. PHASE 43 — AUDIT FINAL

Après nettoyage :

refaire l'analyse complète.

Comparer :

- nombre de fichiers ;
- dépendances ;
- routes ;
- endpoints ;
- erreurs ;
- warnings ;
- taille build ;
- vulnérabilités ;
- surface d'attaque ;
- dette technique ;
- couverture des tests.

Rechercher également les résidus laissés par les corrections.

---

# 46. PHASE 44 — CRITÈRES DE FIN

L'audit n'est terminé que si :

- code mort confirmé supprimé ;
- éléments incertains documentés ;
- dépendances analysées ;
- secrets contrôlés ;
- routes vérifiées ;
- endpoints vérifiés ;
- auth vérifiée ;
- autorisation vérifiée ;
- entrées validées ;
- uploads vérifiés ;
- webhooks vérifiés ;
- CI/CD vérifiée ;
- tests exécutés ;
- lint exécuté ;
- typecheck exécuté si applicable ;
- build exécuté ;
- risques résiduels documentés ;
- rollback identifiable.

---

# 47. RAPPORT FINAL OBLIGATOIRE

Créer un rapport complet.

## 47.1 Résumé exécutif

Inclure :

- périmètre ;
- architecture ;
- problèmes trouvés ;
- corrections ;
- risques critiques ;
- risques restants.

## 47.2 Inventaire

Indiquer :

- fichiers analysés ;
- fichiers supprimés ;
- fichiers conservés ;
- éléments incertains.

## 47.3 Code supprimé

Pour chaque suppression :

| Fichier | Élément | Classification | Preuve | Justification |
|---|---|---|---|---|

## 47.4 Sécurité

| Vulnérabilité | Gravité | État | Preuve | Correction |
|---|---|---|---|---|

## 47.5 Dépendances

Indiquer :

- supprimées ;
- conservées ;
- vulnérables ;
- obsolètes ;
- mises à jour ;
- risques.

## 47.6 Architecture

Documenter les changements importants.

## 47.7 Tests

| Test | Commande | Résultat |
|---|---|---|
| TypeScript | | |
| Lint | | |
| Unit | | |
| Security | | |
| Adversarial | | |
| E2E | | |
| Build | | |

Ne jamais falsifier un résultat.

## 47.8 Performance

Comparer :

- temps de build ;
- bundle ;
- requêtes réseau ;
- 404 ;
- taille assets ;
- cache.

## 47.9 Git

Indiquer :

- commits ;
- branche ;
- commit final ;
- statut du dépôt ;
- éventuel push.

## 47.10 Risques résiduels

Lister explicitement :

- ce qui reste ;
- pourquoi ;
- impact ;
- recommandation ;
- priorité.

---

# 48. FORMAT FINAL DU RAPPORT

Le rapport doit terminer par :

```text
==================================================
AUDIT FINAL — ÉTAT DU PROJET
==================================================

Périmètre audité :
Fichiers analysés :
Fichiers supprimés :
Dépendances supprimées :
Vulnérabilités critiques :
Vulnérabilités hautes :
Vulnérabilités moyennes :
Vulnérabilités faibles :
Tests exécutés :
Tests réussis :
Tests échoués :
Build :
Lint :
Typecheck :
Git :
Déploiement :
Risques résiduels :

==================================================
VERDICT
==================================================
```

Le verdict doit être l'un des suivants :

- `PRÊT POUR PRODUCTION`
- `PRÊT SOUS CONDITIONS`
- `NON PRÊT POUR PRODUCTION`

Justifier obligatoirement le verdict.

---

# 49. RÈGLE CONTRE LES FAUSSES CERTITUDES

Ne jamais déclarer :

- « 100 % sécurisé » ;
- « aucune vulnérabilité possible » ;
- « conforme à toutes les normes » ;
- « prêt production » ;

sans preuve suffisante.

Utiliser plutôt :

- « aucun problème détecté dans le périmètre audité » ;
- « contrôle effectué avec succès » ;
- « risque non identifié lors des tests réalisés » ;
- « risque résiduel ».

Un audit ne prouve jamais l'absence absolue de vulnérabilité.

---

# 50. RÈGLE CONTRE LES RAPPORTS FABRIQUÉS

Ne jamais inventer :

- nombre de fichiers ;
- nombre de tests ;
- résultats ;
- commits ;
- CVE ;
- versions ;
- routes ;
- vulnérabilités ;
- déploiements ;
- performances.

Chaque affirmation doit venir :

- du code ;
- de la configuration ;
- d'une commande réellement exécutée ;
- d'un test réellement exécuté ;
- de la documentation du projet ;
- d'une source fiable.

Si une information n'est pas vérifiable :

> la déclarer comme non vérifiée.

---

# 51. RÈGLE DE TRAÇABILITÉ

Chaque modification importante doit être traçable :

```text
Problème
   ↓
Preuve
   ↓
Décision
   ↓
Modification
   ↓
Test
   ↓
Résultat
   ↓
Commit
```

Aucune correction importante ne doit être dépourvue de justification.

---

# 52. RÈGLE DE NON-RÉGRESSION

Avant de conclure :

- vérifier les fonctionnalités existantes ;
- vérifier les API ;
- vérifier les routes ;
- vérifier les permissions ;
- vérifier les migrations ;
- vérifier les intégrations ;
- vérifier les workflows ;
- vérifier le build ;
- vérifier le déploiement.

Le nettoyage ne doit pas supprimer une fonctionnalité simplement parce qu'elle était difficile à trouver.

---

# 53. RÈGLE DE SÉCURITÉ OPÉRATIONNELLE

Les tests de sécurité doivent rester :

- défensifs ;
- contrôlés ;
- autorisés ;
- limités à l'environnement concerné.

Ne pas effectuer d'attaque réelle contre des systèmes tiers.

Pour les intégrations externes, privilégier :

- mocks ;
- sandbox ;
- staging ;
- fixtures ;
- tests locaux.

---

# 54. ORDRE D'EXÉCUTION OBLIGATOIRE

Suivre cet ordre sauf justification technique :

```text
1. GEL GIT
2. INVENTAIRE
3. CARTOGRAPHIE ARCHITECTURE
4. CARTOGRAPHIE ROUTES/API
5. ANALYSE DÉPENDANCES
6. ANALYSE CODE MORT
7. ANALYSE CONFIGURATION
8. AUDIT SECRETS
9. AUDIT AUTHENTIFICATION
10. AUDIT AUTORISATION
11. AUDIT ENTRÉES
12. AUDIT INJECTIONS
13. AUDIT SSRF
14. AUDIT UPLOADS
15. AUDIT CSRF/CORS
16. AUDIT RATE LIMIT
17. AUDIT SESSIONS
18. AUDIT HEADERS/CSP
19. AUDIT LOGS/MONITORING
20. AUDIT PAIEMENTS/WEBHOOKS
21. AUDIT DB/MIGRATIONS
22. AUDIT CI/CD
23. AUDIT PERFORMANCE
24. PLAN DE CORRECTION
25. CORRECTIONS ATOMIQUES
26. TESTS APRÈS CHAQUE GROUPE
27. BUILD PRODUCTION
28. VALIDATION FONCTIONNELLE
29. VALIDATION SÉCURITÉ
30. AUDIT FINAL
31. GIT COMMIT
32. DÉPLOIEMENT SI AUTORISÉ
33. SMOKE TEST
34. RAPPORT FINAL
```

---

# 55. INSTRUCTION FINALE À L'AGENT

Tu dois travailler comme un ingénieur senior responsable de la qualité et de la sécurité du projet.

Ne cherche pas à supprimer le maximum de code.

Cherche à supprimer uniquement ce qui est :

- prouvé inutile ;
- dangereux ;
- obsolète ;
- redondant ;
- non maintenable ;
- incompatible ;
- ou techniquement injustifiable.

Ne cherche pas à produire un rapport impressionnant.

Cherche à produire un résultat vérifiable.

Ne considère jamais :

```text
build réussi = projet sécurisé
```

La définition de réussite est :

```text
Architecture comprise
+
Code mort prouvé et nettoyé
+
Dette technique réduite
+
Dépendances maîtrisées
+
Secrets protégés
+
Authentification robuste
+
Autorisation correcte
+
Entrées contrôlées
+
Surface d'attaque réduite
+
Routes/API vérifiées
+
Tests réussis
+
Build réussi
+
Déploiement vérifié si effectué
+
Rollback identifiable
+
Risques résiduels documentés
=
PROJET AUDITÉ PROFESSIONNELLEMENT
```

# FIN DE LA SKILL
