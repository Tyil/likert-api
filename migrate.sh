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
		echo "{" > "${DB_CONFIG_FILE}"
		echo "  $(write_config_line "username" "${DB_USERNAME}")," >> "${DB_CONFIG_FILE}"
		echo "  $(write_config_line "password" "${DB_PASSWORD}")," >> "${DB_CONFIG_FILE}"
		echo "  $(write_config_line "database" "${DB_DATABASE}")," >> "${DB_CONFIG_FILE}"
		echo "  $(write_config_line "host" "${DB_HOST}")," >> "${DB_CONFIG_FILE}"
		echo "  $(write_config_line "dialect" "${DB_DIALECT}")" >> "${DB_CONFIG_FILE}"
		echo "}" >> "${DB_CONFIG_FILE}"
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

