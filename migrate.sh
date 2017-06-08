#! /usr/bin/env bash

readonly DB_CONFIG_FILE=../config/database.json

pushd src

# write config from environment if on production
if [[ "${APP_ENV}" == "production" && ! -f "${DB_CONFIG_FILE}" ]]
then
	echo "{" > "${DB_CONFIG_FILE}"
	echo "  \"username\": \"${DB_USERNAME}\"," > "${DB_CONFIG_FILE}"
	echo "  \"password\": \"${DB_PASSWORD}\"," > "${DB_CONFIG_FILE}"
	echo "  \"database\": \"${DB_DATABASE}\"," > "${DB_CONFIG_FILE}"
	echo "  \"host\": \"${DB_HOST}\"," > "${DB_CONFIG_FILE}"
	echo "  \"dialect\": \"${DB_DIALECT}\"," > "${DB_CONFIG_FILE}"
	echo "}" > "${DB_CONFIG_FILE}"
fi

# run the migration scripts
node ../node_modules/.bin/sequelize --config="${DB_CONFIG_FILE}" db:migrate

popd

