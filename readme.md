# MoodIO
MoodIO is a (set of) application(s) to get an insight in the mental and
possibly phisical state of people. Primarily aimed at children to assist their
doctor in evaluating their well being.

## Installation
TODO

### Environment
The application knows three environments, `testing`, `development` and
`production`. Depending on the environment, some aspects may behave
differently. You can set the environment by setting the `NODE_ENV` variable in
the shell starting the application.

In addition, the database configuration can be created using environment
variables as well. For this, you can use `DB_USERNAME`, `DB_PASSWORD`,
`DB_DATABASE`, `DB_HOST` and `DB_DIALECT`. Keep in mind that the config
generation only runs if the `config/database.json` does not exist yet.

## Usage
### Routes
#### POST [/auth/login](https://mood-io.herokuapp.com/auth/login)
Request Body | Type
--- | ---
username | String
password | String

#### POST [/auth/logout](https://mood-io.herokuapp.com/auth/refresh)
Request Body | Type
--- | ---

#### POST [/auth/refresh](https://mood-io.herokuapp.com/auth/refresh)
Request Body | Type
--- | ---

#### POST [/auth/register](https://mood-io.herokuapp.com/auth/register)
Request Body | Type
--- | ---
username | String
password | String

#### GET [/genre](https://mood-io.herokuapp.com/genre/)
Request Body | Type
--- | ---

#### POST [/genre](https://mood-io.herokuapp.com/genre/add)
Request Body | Type
--- | ---
genreName | String

#### DELETE [/genre](https://mood-io.herokuapp.com/genre/remove)
Request Body | Type
--- | ---
genreName | String

#### POST [/genre/dislike](https://mood-io.herokuapp.com/genre/dislike)
Request Body | Type
--- | ---
genreName | String

#### DELETE [/genre/dislike](https://mood-io.herokuapp.com/genre/dislike)
Request Body | Type
--- | ---
genreName | String

#### POST [/genre/like](https://mood-io.herokuapp.com/genre/like)
Request Body | Type
--- | ---
genreName | String

#### DELETE [/genre/like](https://mood-io.herokuapp.com/genre/like)
Request Body | Type
--- | ---
genreName | String

#### GET [/mood](https://mood-io.herokuapp.com/mood/)
Request Body | Type
--- | ---

#### POST [/mood](https://mood-io.herokuapp.com/mood/add)
Request Body | Type
--- | ---
mood | String

#### PUT [/mood](https://mood-io.herokuapp.com/mood/update)
Request Body | Type
--- | ---
newMood | String

#### DELETE [/mood](https://mood-io.herokuapp.com/mood/remove)
Request Body | Type
--- | ---
mood | String

#### GET [/mood/:moodName](https://mood-io.herokuapp.com/mood/0)
Request Body | Type
--- | ---

#### GET [/user](https://mood-io.herokuapp.com/user/)
Request Body | Type
--- | ---

#### PUT [/user](https://mood-io.herokuapp.com/user/update)
Request Body | Type
--- | ---
username | String
password | String

#### GET [/user/:userId](https://mood-io.herokuapp.com/user/0)
Request Body | Type
--- | ---

#### PUT [/user/:userId](https://mood-io.herokuapp.com/user/update/0)
Request Body | Type
--- | ---
username | String
password | String

## Contributing
### Code style
- Indent using tabs.
	- Alignment using spaces, if you want alignment at all.

## License
TODO

