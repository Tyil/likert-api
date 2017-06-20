#! /usr/bin/env bash

readonly DB_CONFIG_FILE=../config/database.json

run_sequelize()
{
	node ../node_modules/.bin/sequelize --config="${DB_CONFIG_FILE}" "$@"
}

write_config_line()
{
	if [[ -z "$2" ]]
	then
		echo "\"$1\": null"

		return
	fi

	echo "\"$1\": \"$2\""
}

main()
{
	pushd src

	# make sure the config file exists
	if [[ ! -f "${DB_CONFIG_FILE}" ]]
	then
		echo "Writing database config file from environment"
		cat > "${DB_CONFIG_FILE}" <<EOF
{
	"username": "${DB_USERNAME}",
	"password": "${DB_PASSWORD}",
	"database": "${DB_DATABASE}",
	"host": "${DB_HOST}",
	"port": "${DB_PORT}",
	"dialect": "${DB_DIALECT}"
}
EOF
	fi

	# run the migration scripts
	run_sequelize db:migrate

	# reseed the database
	if [[ "${NODE_ENV}" == "development" ]]
	then
		run_sequelize db:seed:undo:all
		run_sequelize db:seed:all
	fi

	popd
}

main "$@"

