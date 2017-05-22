module.exports = (SequelizeMock) => {
	return SequelizeMock.define("genre", {
		id: 1,
		name: "rock"
	}, {
		timestamps: false
	});
};
