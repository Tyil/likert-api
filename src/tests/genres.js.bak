var app = require('../../index.js'),
	request = require('supertest')(app),
	mock = require('sequelize-mock'),
	rs = require('randomstring'),
	assert = require('assert'),
	token = require('../../models').token,
	genre = require('../../models').genre;

var db = new mock(),
	date = new Date(),
	baseUri = "/genre",
	commonHeader = {
		'token': {
			'userId': 1,
			'token': rs.generate(60),
			'expires': date.setHours(date.getHours() + 1)
		}
	},
	genreCreationTest = {
		genreName: "test_genre"
	},
	genreLikeDislike = {
		genreName: "default_test_genre"
	};

describe("[Genre]", function () {
	beforeAll(function () {
		token.create({
			userId: commonHeader.token.userId,
			token: commonHeader.token.token,
			expiresAt: commonHeader.token.expires
		});
		genre.findOne({
			where: {
				name: genreLikeDislike
			}
		}).then(result => {
			if (result === null) {
				genre.create({
					name: genreLikeDislike
				});
			}
		});

	});

	it("The API should give a list of genres", done => {
		request
			.get(baseUri + '/')
			.expect('Content-Type', 'application/json', done);
	});

	it("An admin should be able to add a genre.", done => {
		request
			.post(baseUri + '/add')
			.set(commonHeader)
			.send(genreCreationTest)
			.end((err, result) => {
				assert.equal(result.body.ok, true);
				assert.equal(result.body.message, "This genre has been added.");
				done();
			});
	});

	it("An admin should be able to remove a genre.", done => {
		request
			.delete(baseUri + '/remove')
			.set(commonHeader)
			.send(genreCreationTest)
			.end((err, result) => {
				assert.equal(result.body.ok, true);
				assert.equal(result.body.message, "The genre has been removed.");
				done();
			});
	});

	it("A user should be able to like a genre", done => {
		request
			.post(baseUri + '/like')
			.set(commonHeader)
			.send(genreLikeDislike)
			.end((err, result) => {
				assert.equal(result.body.ok, true);
				assert.equal(result.body.message, "Preference has been added.");
				done();
			});
	});

	it("A user should be able to dislike a genre", done => {
		request
			.post(baseUri + '/dislike')
			.set(commonHeader)
			.send(genreLikeDislike)
			.end((err, result) => {
				assert.equal(result.body.ok, true);
				assert.equal(result.body.message, "Preference has been added.");
				done();
			});
	});

	it("A user should be able to unlike a genre", done => {
		request
			.delete(baseUri + '/like')
			.set(commonHeader)
			.send(genreLikeDislike)
			.end((err, result) => {
				assert.equal(result.body.ok, true);
				assert.equal(result.body.message, "Preference got removed.");
				done();
			});
	});

	it("A user should be able to unlike a disliked a genre", done => {
		request
			.delete(baseUri + '/dislike')
			.set(commonHeader)
			.send(genreLikeDislike)
			.end((err, result) => {
				assert.equal(result.body.ok, true);
				assert.equal(result.body.message, "Preference got removed.");
				done();
			});
	});

	afterAll(function () {
		token.findOne({
			where: {
				userId: 1
			}
		}).then(result => {
			result.destroy();
		});

		genre.findOne({
			where: {
				name: genreLikeDislike
			}
		}).then(result => {
			result.destroy();
		});
	});
});
