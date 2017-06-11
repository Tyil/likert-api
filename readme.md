# MoodIO
MoodIO is a (set of) application(s) to get an insight in the mental and
possibly phisical state of people. Primarily aimed at children to assist their
doctor in evaluating their well being.

## Installation
TODO

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

## Contributing
### Code style
- Indent using tabs.
	- Alignment using spaces, if you want alignment at all.

## License
TODO

