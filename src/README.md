# Routes
---
## AUTH
#### POST [/register](https://mood-io.herokuapp.com/auth/register)
Request Body | Type
--- | ---
username | String
password | String

### POST [/login](https://mood-io.herokuapp.com/auth/login)
Request Body | Type
--- | ---
username | String
password | String

#### POST [/refresh](https://mood-io.herokuapp.com/auth/refresh)
Request Body | Type
--- | ---
username | String
password | String

#### POST [/logout](https://mood-io.herokuapp.com/auth/refresh)
Request Body | Type
--- | ---

## USER
#### GET [/](https://mood-io.herokuapp.com/user/)
Request Body | Type
--- | ---

#### GET [/:userId](https://mood-io.herokuapp.com/user/0)
Request Body | Type
--- | ---

#### POST [/update](https://mood-io.herokuapp.com/user/update)
Request Body | Type
--- | ---
username | String
password | String

#### POST [/update/:id](https://mood-io.herokuapp.com/user/update/0)
Request Body | Type
--- | ---
username | String
password | String

## GENRE
#### GET [/](https://mood-io.herokuapp.com/genre/)
Request Body | Type
--- | ---

#### POST [/add](https://mood-io.herokuapp.com/genre/add)
Request Body | Type
--- | ---
genreName | String

#### DELETE [/remove](https://mood-io.herokuapp.com/genre/remove)
Request Body | Type
--- | ---
genreName | String

#### POST [/like](https://mood-io.herokuapp.com/genre/like)
Request Body | Type
--- | ---
genreName | String

#### POST [/dislike](https://mood-io.herokuapp.com/genre/dislike)
Request Body | Type
--- | ---
genreName | String

#### DELETE [/like](https://mood-io.herokuapp.com/genre/like)
Request Body | Type
--- | ---
genreName | String

#### DELETE [/dislike](https://mood-io.herokuapp.com/genre/dislike)
Request Body | Type
--- | ---
genreName | String

## MOOD
#### GET [/](https://mood-io.herokuapp.com/mood/)
Request Body | Type
--- | ---

#### GET [/:moodName](https://mood-io.herokuapp.com/mood/0)
Request Body | Type
--- | ---

#### POST [/add](https://mood-io.herokuapp.com/mood/add)
Request Body | Type
--- | ---
mood | String

#### POST [/update](https://mood-io.herokuapp.com/mood/update)
Request Body | Type
--- | ---
oldMood | String
newMood | String

#### DELETE [/remove](https://mood-io.herokuapp.com/mood/remove)
Request Body | Type
--- | ---
mood | String