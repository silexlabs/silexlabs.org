---
layout: post
title: Découverte de Kali Linux avec le framework Metasploit

parent_id: '0'
published: false
password: ''
status: draft
categories: []
tags: []

_oembed_1e993875a4eb5e3c35d24fa30c6701da: "{{unknown}}"
_oembed_74f180533f19410281d2ec7557fa4c74: "{{unknown}}"
_oembed_017140d2bc479705db32880269529c4f: "{{unknown}}"
_EventDuration: '7200'



_EventShowMap: '1'

_EventShowMapLink: '1'
_oembed_25e61a65c66289ecf7d9ff64bb6946f5: "{{unknown}}"
_edit_last: '2429'
_EventVenueID: '203812'
_yoast_wpseo_primary_post_cat: ''
_EventTimezoneAbbr: CET
_EventTimezone: Europe/Paris
_EventURL: ''
_EventCost: ''
_EventCurrencyPosition: suffix
_EventCurrencySymbol: ''
_EventOrigin: events-calendar
_oembed_334d64c2c80f239efb572ce551483d70: "{{unknown}}"
_oembed_91d1e399a294e52bc73a819358bc6a5d: "{{unknown}}"

display_name: donov
first_name: ''
last_name: ''
permalink: "/"
---

Nous allons découvrir Kali Linux, une distribution GNU/Linux qui regroupe les outils nécessaires pour tester la sécurité et pour auditer des systèmes informatiques.

Site Kali Linux
: [Kali Linux](https://www.kali.org/)

Déroulement de
l'atelier: -------------------------

Je vais d'abord, vous présenter les outils populaires au sein de cette distribution et ensuite, nous allons utiliser l'un d'entre eux "Metasploit Framework" pour tester un environnement de test.

Metasploit Framework (Inclut dans
Kali): ----------------------------------------

Metasploit Framework est un projet informatique qui permet de tester des systèmes informatiques ainsi que d'exploiter, à l'aide de modules, les failles connues des logiciels vulnérables.  
Nous allons, aussi, l'utiliser pour récolter des informations venant de l'internet et ce que l'on peut faire une fois une machine corrompue.

[Metasploit](https://www.metasploit.com/)  
[Tutoriel Metasploit](https://www.offensive-security.com/metasploit-unleashed/)

Installation du laboratoire de
test: ------------------------------------

Je vous propose 2 solutions pour installer votre laboratoire de
test: 
I - Méthode 1 (la plus
simple): -------------------------------

La procédure est, d'abord, de télécharger et d'installer Virtualbox dans votre machine.  
Ensuite de charger deux images virtuelles au format .ova via le menu de Virtualbox.

### Virtualbox

*   [Téléchargement Virtualbox](https://www.virtualbox.org/wiki/Downloads)
*   [Importation d'une machine virtuelle dans Virtualbox](https://docs.oracle.com/cd/E26217_01/E35193/html/qs-import-vm.html)

### Kali Linux pour Virtualbox

*   [Image virtuelle Kali Linux (2018.4)](https://www.offensive-security.com/kali-linux-vm-vmware-virtualbox-image-download/)
*   Sous le titre
: Download Kali Linux VMware and VirtualBox Images => **Kali Linux Virtualbox Images**

### Windows 7 pour Virtualbox

*   [Image virtuelle de Windows 7 (Valable 90 jours)](https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/)
*   Sous le titre "**Virtual machine**" => "**Virtual machine IE8 on Win7 (x86)**"
*   Sous le titre "**Select platform**" => "**Virtualbox**"

### II - Méthode
2: 
La procédure est, d'abord, d'installer Kali Linux comme système d'exploitation et ensuite de charger l'image virtuelle de Windows 7 entant que machine virtuelle.

*   [Téléchargement de Kali Linux (2018.4)](https://www.kali.org/downloads/)
*   [Virtualbox pour linux (Debian-based Linux distributions)](https://www.virtualbox.org/wiki/Linux_Downloads)

Pré-requis:
-----------

*   Avoir des bases avec la ligne de commande (cat, less, tail...)
*   Avoir des bases avec la pile TCP/IP et les commandes réseaux (telnet, ip, ...)

_*** Si vous n'avez pas ces connaissances, vous pouvez venir quand même  
car nous sommes là pour découvrir et apprendre des choses. ***_

Liens
utiles: -------------

[Les bases de Linux (OpenClassRooms)](https://openclassrooms.com/fr/courses/43538-reprenez-le-controle-a-laide-de-linux)  
[Protocoles réseaux (FrameIP)](https://www.frameip.com/)

A propos de
moi: ----------------

![Donovan]({{ site.baseurl }}/assets/0?e=1546473600&v=beta&t=tq1m3qfy1UslH1zWCfedZGlFQjZWNTDPVngs0nQt0Wk)

Je m’appelle Donovan, je suis dessinateur-projeteur en bureaux d’études en électricité et en structure de bâtiment.  
En parallèle, je me passionne pour les projets open source comme Debian et ses dérivés, le framework Metasploit ou la base de données MySQL.