# MoodIO
MoodIO is a (set of) application(s) to get an insight in the mental and
possibly phisical state of people. Primarily aimed at children to assist their
doctor in evaluating their well being.

## Installation
TODO

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
#### GET [/genres](https://mood-io.herokuapp.com/genres/)
Request Body | Type
--- | ---

#### POST [/genres](https://mood-io.herokuapp.com/genres/add)
Request Body | Type
--- | ---
genreName | String

#### DELETE [/genres](https://mood-io.herokuapp.com/genres/remove)
Request Body | Type
--- | ---
genreName | String

#### POST [/genres/dislike](https://mood-io.herokuapp.com/genres/dislike)
Request Body | Type
--- | ---
genreName | String

#### DELETE [/genres/dislike](https://mood-io.herokuapp.com/genres/dislike)
Request Body | Type
--- | ---
genreName | String

#### POST [/genres/like](https://mood-io.herokuapp.com/genres/like)
Request Body | Type
--- | ---
genreName | String

#### DELETE [/genres/like](https://mood-io.herokuapp.com/genres/like)
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

### Likers
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

