const findUser = require("../actions/users/find-user"),
	updateUser = require("../actions/users/update-user"),
	bcrypt = require("bcrypt-nodejs");

describe("User routes", () => {
	it("can find the logged in user", () => {
		findUser(1).then(result => {
			expect(result.ok).toBe(true);
			expect(result.user.username).toBe("mood");
			expect(bcrypt.compareSync("test", result.user.password)).toBe(true);
		});
	});

	it("can update an existing user", () => {
		updateUser(1, "Mood", "Vis").then(result => {
			expect(result.ok).toBe(true);
			expect(result.message).toBe('The user has been updated.');
		});
	});
});
