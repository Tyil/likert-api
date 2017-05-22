module.exports = (SequelizeMock) => {
	return SequelizeMock.define('mood', {
		id: 1,
		name: "Happy"
	}, {
		timestamps: false
	});
};
