#!/bin/bash

./indexer ./assets/frontend >./assets/frontend/bundle/.index-xhr
./indexer ./assets/cores >./assets/cores/.index-xhr
./indexer ./system >./system/.index-xhr
