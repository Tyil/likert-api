const findUser = require("../actions/users/find-user"),
	updateUser = require("../actions/users/update-user"),
	token = require("../models").token,
	user = require("../models").user,
	bcrypt = require("bcrypt-nodejs");

describe("Users", () => {
	beforeAll(() => {
		user.create({
			id: 999,
			username: "MoodAPI",
			password: bcrypt.hashSync("MoodAPI")
		});
	});

	it("Find the logged in user", () => {
		findUser(999).then(result => {
			expect(result.ok).toBe(true);
			expect(result.message.id).toBe(999);
			expect(result.message.username).toBe("MoodAPI");
			expect(result.message.password).toBe(bcrypt.compareSync("MoodAPI", result.password));
		});
	});

	it("Update an existing user", () => {
		updateUser(999, "Mood", "Vis").then(result => {
			expect(result.ok).toBe(true);
			expect(result.message).toBe('The user has been updated.');
		});
	});
});
