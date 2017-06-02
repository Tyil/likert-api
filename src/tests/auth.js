const loginAction = require("../actions/auth/login");

describe("Authentication", () => {
	it("fails gracefully when user does not exist", () => {
		loginAction("Esidisi", "hot").then(response => {
			expect(response.ok).toBe(false);
			expect(response.message).toBe("Username or password is incorrect");
		});
	});
});
