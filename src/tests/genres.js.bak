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
	genreCreationTest = {
		genreName: "test_genre"
	},
	genreLikeDislike = {
		genreName: "default_test_genre"
	};

describe("[Genre]", function () {
	it("The API should give a list of genres", done => {
		request
			.get(baseUri + '/')
			.expect('Content-Type', 'application/json', done);
	});

	it("An admin should be able to add a genre.", done => {
		request
			.post(baseUri + '/add')
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
			.set('Authorization', 'Bearer token')
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
			.send(genreLikeDislike)
			.end((err, result) => {
				assert.equal(result.body.ok, true);
				assert.equal(result.body.message, "Preference got removed.");
				done();
			});
	});
});
