module.exports = (SequelizeMock) => {
	return SequelizeMock.define("user", {
		id: 1,
		username: "MoodAPI",
		password: "mocked"
	});
};
