[FR]


Ce repo est un exercice dans lequel j'essaye de créer automatiquement un conteneur de mongodb avec docker.

12/10/2018: Le problème est l'erreur suivante que j'obtiens en lançant la commande de compilation `docker-compose up --build`

```
MongoDB shell version v4.0.3
connecting to: mongodb://127.0.0.1:27017
2018-10-12T17:03:18.848+0000 E QUERY    [js] Error: couldn't connect to server 127.0.0.1:27017, connection attempt failed: SocketException: Error connecting to 127.0.0.1:27017 :: caused by :: Connection refused :
connect@src/mongo/shell/mongo.js:257:13
@(connect):1:6
exception: connect failed
ERROR: Service 'mongo' failed to build: The command '/bin/sh -c mongo /data/bus.json' returned a non-zero code: 1
```

Pourtant en entrant manuellement dans un conteneur similaire et en saisissant les mêmes commandes, l'ajout des données se fait sans problème.


