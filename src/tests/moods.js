const addRemoveMoods = require("../actions/moods/add-remove-moods"),
	specificMoods = require("../actions/moods/specific-moods"),
	updateMoods = require("../actions/moods/update-moods");

describe("Moods", () => {
	it("Add a mood.", () => {
		addRemoveMoods("TestTestTest", "add").then(result => {
			expect(result.ok).toBe(true);
			expect(result.message).toBe('The mood has been added.');
		});
	});
	it("Remove a mood.", () => {
		addRemoveMoods("Happy", "remove").then(result => {
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
