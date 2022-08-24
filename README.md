# Template HTML/CSS du blog levelup.re

Basé sur Tailwind CSS, le template du blog de levelup.re est désormais rendu opensource sous licence MIT. Il est fourni en tant que tel et ne fait pas l'objet d'un quelconque support technique

## Contenu 
Le projet inclus les 3 pages suivantes, que vous trouverez dans le répertoire `html` : 
- `index.html` : vue générale
- `article.html` : vue d'un article en particulier
- `archives.html` : vue pour une liste d'articles pour une catégorie données ou les archives


## Récupérer le projet en local sur votre machine

````
git clone https://github.com/levelup-re/template-blog.git
````


## Installation des dépendances

Ce projet requiert quelques dépendances pour fonctionner et nécessite de lancer la commande suivante :

````
npm install
````

La liste des dépendances nécessaires peut être consultée depuis le fichier `package.json`


## Démarrer le process de build TailwindCLI

Après l'installation des dépendances, lancer la commande suivante :

````
npm run dev
````

Cela aura pour effet de compiler Tailwind CSS dans un fichier accessible par le chemin `./dist/css/main.css` et qui pourra être utilisé en production

## Configuration Tailwind CSS

Le fichier de configuration de Tailwind CSS `./tailwind.config.js` est accessible à la racine du projet et comporte les deux ajouts suivants par rapport à une configuration classique :

### Breackpoint personnalisés
Au lieu d'utiliser les breakpoints par défaut, je spécifie des breackpoints plus explicites :
- mobile : > 640px et < 800px (pour les terminaux de type smartphones)
- tablette : > 800px et < 1200px (pour les terminaux de type tablettes)
- desktop : > 1200px (pour les terminaux de type tablettes)

### Plugins
Le plugin officiel `Typography' de Tailwind CSS est également requis. Vous trouverez plus de détails quant à son utilité [sur cette page](https://tailwindcss.com/docs/typography-plugin)

## Crédits

Les différentes icônes utilisées pour ce projet, au format SVG, sont issus de la librairie [Phosphor](https://phosphoricons.com/)

La photo utilisée pour illustrer l'article est issue de [Unsplash](https://images.unsplash.com/photo-1604537466158-719b1972feb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80) (je ne retrouve pas l'auteur, n'hésitez pas à faire une PR si vous le connaissez)

Le contenu a été généré à l'aide de [SAMUEL L. IPSUM](https://slipsum.com/)
