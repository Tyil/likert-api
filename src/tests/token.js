const actionLogin = require("../actions/login");
const actionRefresh = require("../actions/refresh-token");
const token = require("../models").token;
const user = require("../models").user;
const bcrypt = require("bcrypt-nodejs");

describe("Authentication token", () => {
	beforeAll(() => {
		const expiry = new Date();
		expiry.setHours(expiry.getHours() + (1 * 24 * 7) - 10);

		user.create({
			UserId: 1,
			Username: "mood",
			Password: bcrypt.hashSync("test", bcrypt.genSaltSync(10)),
		});

		token.create({
			userId: 1,
			token: "testestestestestestest",
			expiresAt: expiry
		});
	});

	it("should expire after 1 week after creation", () => {
		const minTime = new Date();
		minTime.setHours(minTime.getHours() + (1 * 24 * 7) - 1);

		const maxTime = new Date();
		maxTime.setHours(maxTime.getHours() + (1 * 24 * 7) + 1);

		actionLogin("mood", "test").then((response) => {
			expect(response.ok).toBe(true);

			expect(response.expires).toBeGreaterThan(minTime);
			expect(response.expires).toBeLessThan(maxTime);
		});
	});

	it("should update expiry to 1 week after refreshing", () => {
		const minTime = new Date();
		minTime.setHours(minTime.getHours() + (1 * 24 * 7) - 1);

		const maxTime = new Date();
		maxTime.setHours(maxTime.getHours() + (1 * 24 * 7) + 1);

		actionRefresh("testestestestestestest").then((response) => {
			expect(response.ok).toBe(true);
			expect(response.expires).toBeGreaterThan(minTime);
			expect(response.expires).toBeLessThan(maxTime);
		});
	});
});

