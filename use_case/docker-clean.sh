#!/usr/bin/env bash
docker stop mongodb_2
docker rm -v mongodb_2
docker stop node_2
docker rm -v node_2
