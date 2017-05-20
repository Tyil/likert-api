const likert = require("../../models").likert_template,
	likert_values = require("../../models").likert_template_result;
module.exports = (likertTemplateId, userId, songId, moodId, scaleId, scaleScore) => {

	return likert.findOne({
		where: {
			id: likertTemplateId
		}
	}).then(result => {

	});
};
