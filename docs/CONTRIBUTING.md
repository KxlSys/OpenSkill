# Contributing to OpenSkill

Merci de vouloir contribuer à OpenSkill.

## Règles de contribution

1. Fork le dépôt.
2. Crée une branche dédiée : `git checkout -b feat/ma-nouvelle-skill`.
3. Ajoute ta skill dans le bon dossier : `skills/<categorie>/<nom-skill>/SKILL.md`.
4. Utilise le [template officiel](./SKILL-TEMPLATE.md).
5. Mets à jour `registry.json`.
6. Ouvre une pull request avec une description claire.

## Convention de nommage

- Utiliser uniquement des caractères `a-z`, `0-9` et `-`.
- Exemple : `linux-hardening`.
- Éviter les espaces, underscores et variantes de casse.

## Standards de qualité

- Frontmatter obligatoire.
- Instructions claires et structurées.
- Exemple d'utilisation fourni.
- Licence MIT.
- Le fichier `SKILL.md` doit être lisible et exploitable par un agent IA.

## Vérification rapide

Avant de soumettre une PR :

```bash
npm test
```

Et vérifiez que votre skill est bien listée dans `registry.json` et qu'elle respecte le template.
