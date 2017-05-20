const likert = require("../../models").likert_template,
	likert_values = require("../../models").likert_template_result;
module.exports = (likertTemplateId, userId, songId, moodId, scaleScore) => {
	return likert.findOne({
		where: {
			id: likertTemplateId
		}
	}).then(result => {
		var response = {
			ok: false,
			message: 'The likert template could not be found.'
		};
		if (result === null) {
			return response;
		}
		return likert.create({
			userId: userId,
			templateId: likertTemplateId,
			songId: songId,
			moodId: moodId,
			scaleScore: scaleScore
		}).then(result => {
			response.ok = true;
			response.message = 'The score has been added.';
			return response;
		});
	});
};
