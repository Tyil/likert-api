const likert = require("../../models").likert_template,
	likert_results = require("../../models").likert_template_result,
	likert_values = require("../../models").likert_template_value;

module.exports = (likertTemplateId, userId, songId, moodId, scaleScore) => {
	return likert.findOne({
		where: {
			id: likertTemplateId
		}
	}).then(result => {
		const response = {
			ok: false,
			message: "The likert template could not be found."
		};

		if (result === null) {
			return response;
		}

		return likert_values.findOne({
			where: {
				templateId: likertTemplateId
			}
		}).then(x => {
			const arr = x.get("value").split(',');
			let found = -1;

			for (i = 0; i < arr.length; i++) {
				if (arr[i] == scaleScore) {
					found = i;

					break;
				}
			}

			return likert_results.create({
				userId: userId,
				templateId: likertTemplateId,
				songId: songId,
				moodId: moodId,
				scaleScore: found
			}).then(result => {
				response.ok = true;
				response.message = "";

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
