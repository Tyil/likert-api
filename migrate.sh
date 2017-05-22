#! /usr/bin/env bash

pushd src
node ../node_modules/.bin/sequelize --config=../config/database.json db:migrate
popd

