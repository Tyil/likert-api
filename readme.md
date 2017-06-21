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
### Auth
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
### Genres
#### GET [/](https://mood-io.herokuapp.com/genres/)
Request Body | Type
--- | ---

#### POST [/](https://mood-io.herokuapp.com/genres/)
Request Body | Type
--- | ---
genreName | String

#### DELETE [/](https://mood-io.herokuapp.com/genres/)
Request Body | Type
--- | ---
genreName | String

#### POST [/dislike](https://mood-io.herokuapp.com/genres/dislike)
Request Body | Type
--- | ---
genreName | String

#### DELETE [/dislike](https://mood-io.herokuapp.com/genres/dislike)
Request Body | Type
--- | ---
genreName | String

#### POST [/like](https://mood-io.herokuapp.com/genres/like)
Request Body | Type
--- | ---
genreName | String

#### DELETE [/like](https://mood-io.herokuapp.com/genres/like)
Request Body | Type
--- | ---
genreName | String

### Moods
#### GET [/](https://mood-io.herokuapp.com/moods/)
Request Body | Type
--- | ---

#### POST [/](https://mood-io.herokuapp.com/moods/)
Request Body | Type
--- | ---
mood | String

#### PUT [/](https://mood-io.herokuapp.com/moods/)
Request Body | Type
--- | ---
newMood | String

#### DELETE [/](https://mood-io.herokuapp.com/moods/)
Request Body | Type
--- | ---
mood | String

#### GET [/:moodName](https://mood-io.herokuapp.com/mood/happy)
Request Body | Type
--- | ---

### Users
#### GET [/](https://mood-io.herokuapp.com/users/)
Request Body | Type
--- | ---

#### PUT [/](https://mood-io.herokuapp.com/users/)
Request Body | Type
--- | ---
username | String
password | String

#### GET [/:userId](https://mood-io.herokuapp.com/users/0)
Request Body | Type
--- | ---

#### PUT [/:userId](https://mood-io.herokuapp.com/users/0)
Request Body | Type
--- | ---
username | String
password | String

### Likerts
#### GET [/:id](https://mood-io.herokuapp.com/likerts/0)
Request Body | Type
--- | ---

#### GET [/:id/scale](https://mood-io.herokuapp.com/likerts/0/scale)
Request Body | Type
--- | ---

#### GET [/:id/:userId](https://mood-io.herokuapp.com/likerts/0/0)
Request Body | Type
--- | ---

#### POST [/](https://mood-io.herokuapp.com/likerts/)
Request Body | Type
--- | ---
name | String
description | String
scaleItems | String (Comma Seperated Values)

#### POST [/:id](https://mood-io.herokuapp.com/likerts/0)
Request Body | Type
--- | ---
songId | INT
moodId | INT
scaleScore | String

#### PUT [/](https://mood-io.herokuapp.com/likerts/)
Request Body | Type
--- | ---
updateItems | Array (id, name, description, scaleItems)

#### PATCH [/](https://mood-io.herokuapp.com/likerts/)
Request Body | Type
--- | ---
removeItems | Array (id)

### Songs
#### GET [/recent](https://mood-io.herokuapp.com/songs/recent)
Returns the previously listened to song of the current user.

Request Body | Type
--- | ---

#### GET [/recent/:count](https://mood-io.herokuapp.com/songs/recent/1)
Returns a list of the previously listened to songs of the current user. The
size of the list is dependant on `:count`.

Request Body | Type
--- | ---

## Contributing
### Code style
- Indent using tabs.
	- Alignment using spaces, if you want alignment at all.

## License
TODO

