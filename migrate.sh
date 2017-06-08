#! /usr/bin/env bash

readonly DB_CONFIG_FILE=../config/database.json

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
	node ../node_modules/.bin/sequelize --config="${DB_CONFIG_FILE}" db:migrate

	popd
}

main "$@"

