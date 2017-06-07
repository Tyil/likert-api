const likert = require("../../models").likert_template,
	likert_results = require("../../models").likert_template_result,
	likert_values = require("../../models").likert_values;
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
		return likert_values.findOne({
			where: {
				templateId: likertTemplateId
			}
		}).then(x => {
			var arr = JSON.parse(x.value);
			var counter = 0;
			for (var i in arr) {
				if (arr[i] == scaleScore) {
					counter = i;
				}
			}
			return likert_results.create({
				userId: userId,
				templateId: likertTemplateId,
				songId: songId,
				moodId: moodId,
				scaleScore: counter
			}).then(result => {
				response.ok = true;
				response.message = '';
				return response;
			}).catch(err => {
				return {
					ok: false,
					message: err
				};
			});
		});
	});
};
