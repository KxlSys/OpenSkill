# OpenSkill CLI

## Commande disponible

```bash
npx openskill add KxlSys/OpenSkill
npx openskill add KxlSys/OpenSkill --skill phishing-analysis
npx openskill add ./mon-depot-local
```

`add` accepte un dépôt GitHub au format `owner/repo`, une URL Git ou un chemin local. Sans `--skill`, toutes les skills du dépôt sont installées. Utilisez `--skill <nom>` (ou `-s <nom>`) pour n'en installer qu'une.

## Aide

```bash
npx openskill --help
```

Les commandes `list`, `search` et `update` ne sont pas encore disponibles.

- Préférer un `registry.json` propre et stable.
- Vérifier les chemins et les noms de skills avant de publier.
- Garder les `SKILL.md` structurés et cohérents entre catégories.
