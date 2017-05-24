const actions = {
	create: require("../actions/artists/create"),
	delete: require("../actions/artists/delete"),
	findAll: require("../actions/artists/find-all"),
	findOne: require("../actions/artists/find-one"),
	update: require("../actions/artists/update"),
};

describe("Artist actions", () => {
	it("returns a list of artists", () => {
		actions.findAll().then(response => {
			expect(response.ok).toBe(true);
			expect(response.artists[0].get("name")).toBe("Micro Jackson");
		});
	});

	it("returns a single artist", () => {
		actions.findOne(1).then(response => {
			expect(response.ok).toBe(true);
			expect(response.artist.name).toBe("Micro Jackson");
		});
	});

	it("creates a new artist", () => {
		actions.create("Judy Brodelteen").then(response => {
			expect(response.ok).toBe(true);
			expect(response.id > 0).toBe(true);
		});
	});

	it("deletes an existing artist", () => {
		actions.delete(1).then(response => {
			expect(response.ok).toBe(true);
		});
	});

	it("updates an existing artist", () => {
		actions.update(1, "Nasheed").then(response => {
			expect(response.ok).toBe(true);
		});
	});
});
