const add = require("../actions/moods/add-moods"),
	remove = require("../actions/moods/remove-moods"),
	specificMoods = require("../actions/moods/specific-moods"),
	updateMoods = require("../actions/moods/update-moods"),
	mood = require("../models").mood;

describe("Moods", () => {
	beforeAll(() => {
		mood.create({
			name: "Vis"
		});
	});
	it("Add a mood.", () => {
		add("TestTestTest").then(result => {
			expect(result.ok).toBe(true);
			expect(result.message).toBe('The mood has been added.');
		});
	});
	it("Remove a mood.", () => {
		remove("Vis").then(result => {
			expect(result.ok).toBe(true);
			expect(result.message).toBe('The mood has been removed.');
		});
	});
	it("Get a specific mood.", () => {
		specificMoods("Happy").then(result => {
			expect(result.ok).toBe(true);
			expect(result.message).toBe('Happy');
		});
	});
	it("Update a mood.", () => {
		updateMoods("Happy", "Sad").then(result => {
			expect(result.ok).toBe(true);
			expect(result.message).toBe('The mood has been updated.');
		});
	});
});
