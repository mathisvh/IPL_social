# IPL social

## Informations étudiant
- Vander Heyden Mathis
- mathis.vander.student.vinci.be 
- **Repository GitHub :** https://github.com/mathishv/IPL_social

## Description du projet
Ce projet "IPL social" contient une fonction TypeScript `validateEmail` qui permet de valider une adresse email **sans utiliser de fonctions préconçues** de validation d’email.

La validation respecte les règles suivantes :
- l’adresse doit contenir **au moins un `@`**
- il doit y avoir **du texte avant et après le `@`**
- le nom de domaine doit contenir **au moins un point `.`**
- le point ne peut **pas être le dernier caractère**
- l’adresse ne peut contenir **aucun espace**

Le développement a été réalisé en **TDD (Test Driven Development)** : les tests Jest ont été écrits en premier, puis la fonction a été implémentée jusqu’à ce que tous les tests passent.

## Installation
```bash
npm install
