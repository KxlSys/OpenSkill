---
name: prompt-engineering
author: Providence Damba
version: 1.0.0
tags:
  - ai
  - prompt-engineering
  - prompt
description: Méthodologie d'optimisation et d'ingénierie de prompts.
---

# Prompt Engineering Methodology

Cette compétence définit un cadre pour concevoir, tester et optimiser les prompts destinés aux modèles de langage de grande taille (LLMs).

## Étapes de Conception d'un Prompt

1. **Définition de l'Objectif & du Rôle** :
   - Assigner un rôle ou un persona clair et précis au modèle (ex: "Vous êtes un expert en cybersécurité...").
   - Définir précisément la tâche attendue.

2. **Structuration du Prompt** :
   - Fournir des instructions claires et distinctes (en utilisant du Markdown, des balises XML comme `<instructions>`, `<context>`, etc.).
   - Spécifier le format de sortie souhaité (JSON, Markdown, liste à puces, ton formel/informel).

3. **Fourniture de Contexte et d'Exemples (Few-Shot Prompting)** :
   - Si possible, fournir un ou plusieurs exemples de couples entrée/sortie pour guider le modèle vers le comportement souhaité.

4. **Décomposition de la Réflexion (Chain of Thought)** :
   - Inciter le modèle à détailler ses étapes de réflexion avant de donner la réponse finale (ex: "Expliquez votre raisonnement étape par étape...").

5. **Gestion des Cas Limites (Fallback & Guardrails)** :
   - Ajouter des garde-fous pour éviter les hallucinations ou les comportements indésirables (ex: "Si vous ne connaissez pas la réponse, répondez simplement 'Je ne sais pas'").

## Rapport de Conception de Prompt

### Prompt Initial
### Analyse des Résultats & Limitations
### Prompt Optimisé (Version Finale)
### Résultats Comparatifs
