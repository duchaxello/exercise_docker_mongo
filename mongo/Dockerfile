FROM mongo
EXPOSE 27017
ADD ./database/ /data/

RUN mongod --logpath /data/db.log --fork
RUN mongo /data/bus.json
#RUN /data/import.sh
##RUN mongo /database/bus.json
