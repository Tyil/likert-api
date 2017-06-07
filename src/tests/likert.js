const likert = require("../models").likert_template,
	likert_result = require("../models").likert_template_result,
	likert_values = require("../models").likert_template_value,
	song = require("../models").song,
	find_likert = require("../actions/likert/find-likert"),
	create_likert = require("../actions/likert/create-likert"),
	alter_likert = require("../actions/likert/alter-likert"),
	delete_likert = require("../actions/likert/remove-likert"),
	add_response = require("../actions/likert/add-likert-response"),
	get_scale = require("../actions/likert/get-scale"),
	find = require("../actions/likert/find-likert-scale");

describe("Likert route", () => {
	beforeAll(() => {
		likert.create({
			id: 1,
			name: "MoodMusic track rating",
			max_value: 5,
			description: "A likert-scale to let the user rate the track he is currently listening to"
		});
		likert_values.create({
			templateId: 1,
			name: JSON.stringify(["Depression", "Sad", "Neutral", "Happy", "Euphoric"])
		});
		song.create({
			id: 1,
			name: "",
			path: "",
			genreId: 1,
			moodId: 1
		});
	});

	it("returns a default likert scale", () => {
		find(1).then(result => {
			expect(result.ok).toBe(true);
		});
	});

	it("returns the scale for a likert scale", () => {
		get_scale(1).then(result => {
			expect(result.ok).toBe(true);
			expect(result.message).toBe(["Depression", "Sad", "Neutral", "Happy", "Euphoric"]);
		});
	});

	it("finds likert scale values for user", () => {
		find_likert(1, 1).then(result => {
			expect(result.ok).toBe(true);
		});
	});

	it("adds a likert response", () => {
		add_response(1, 1, 1, 1, "Happy").then(result => {
			expect(result.ok).toBe(true);
		});
	});

	it("creates a new likert scale", () => {
		create_likert("test", "This is my new description", 5, ["Bad", "Good"]).then(result => {
			expect(result.ok).toBe(true);
		});
	});

	it("update a likert scale", () => {
		alter_likert(1, {
			name: "Test",
			description: "Asdhasdhasdhsah",
			max_value: 3
		}).then(result => {
			expect(result.ok).toBe(true);
		});
	});

	it("remove a likert scale", () => {
		delete_likert(1).then(result => {
			expect(result.ok).toBe(true);
		});
	});
});
