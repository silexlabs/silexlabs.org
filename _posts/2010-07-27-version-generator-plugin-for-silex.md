---
layout: post
title: Version Generator plugin for Silex

type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- Plugins
tags:
- plugin

_wp_old_slug: ''
_epLastMessage: ''
_itemCurrentVersion: v1.0
_epLastError: ''

_itemCurrentFileName: version_generator.zip
_selectedProject: Silex
_selectedVersionsArray: v1.6.0,v1.6.1

display_name: koala
first_name: ''
last_name: ''
permalink: "/version-generator-plugin-for-silex/"
---

![]({{ site.baseurl }}/assets/plugin5.png)

The version generator plugin is used to generate a new version of Silex for the user to update from.

It is not reserved to Silex core


### PRINCIPLE

The update system will is made of three parts
: 
- Silex plugin that generates the version.xml file for a given Silex version. It is used only by the publisher of a new Silex versions.  
- php service on the update server, that distributes the files to update  
- Silex plugin, client part of the updater. This plugin does the main jobs of the updating tasks
: it calls the remote update service, find out which files are to update, manage user modifyed/added files during the update…

### USE INSTRUCTIONS

Ci-dessous les étapes à suivre pour générer un version.xml correct avec la version du plugin generator actuelle
: 
**Faire une copie** du plugin_server.php (dans l’état dans lequel on veut le distribuer aux utilisateurs lors de leurs updates)

**Activer et paramétrer** le version_generator (ne pas oublier de renseigner le paramètre version_tag)

**Lancer la première étape** de la génération (listing des fichiers/dossiers) en cliquant sur “LAUNCH FILE ACCESS RIGHTS CHECK”

A ce moment, si les droits d’accès aux fichiers le permettent, une liste des dossiers et fichiers devrait apparaître. A ce moment, remplacer le fichier plugin_server.php de votre silex_server par celui que vous avez sauvegardé à l’étape 1.

**Cocher-décocher** les fichiers et dossiers selon ce que l’on veut inclure dans la version.

La première checkbox correspond à “est-ce que l’on inclue le fichier/dossier dans la version ? coché=>oui, décoché=>non” et la deuxièmecheckbox correspond à “est-ce que ce fichier devra être absolument updater par les utilisateurs ? coché=>oui, décoché=>non”.

**A cette étape**, vérifier que le fichier pass.php et le dossier plugins/version_generator ne sont pas inclus (première checkbox décochée, deuxième disabled).

**Lorsque** toutes les inclusions et tags updateRequired vous conviennent, lancez la generation du version.xml en cliquant sur SUBMIT en bas de la liste.

**Allez vérifier** ensuite si le version.xml a bien été généré (en principe oui, mais comme on est en phase de test…) en vérifiant la date et l’heure de création du fichier et en vérifiant son contenu (il ne doit pas contenir pass.php ni /plugins/version_generator).

[Download the Version Generator plugin for Silex](https://www.silexlabs.org/?attachment_id=1013)