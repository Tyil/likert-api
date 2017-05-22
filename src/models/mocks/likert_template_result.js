module.exports = function (SequelizeMock) {
	return SequelizeMock.define('likert_template_result', {
		userId: 1,
		templateId: 1,
		score: 5
	});
};
