Ce dossier utilise docker-compose, il est nécessaire que celui-ci soit installé. 

Le conteneur se lance avec la commande `docker-compose up`.

Une fois le build terminé, il faut ouvrir son navigateur et saisir l'url "http://10.48.0.3:8888/". Il affichera alors une carte de Pau avec des lignes de bus.

Cet use_case est un exercice utilisant un conteneur de mongodb qui contient les informations relatives aux lignes de bus, et un conteneur de node qui s'occupe de la carte.
