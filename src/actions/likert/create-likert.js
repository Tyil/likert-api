const likert = require("../../models").likert_template,
	likert_result = require("../../models").likert_template_result,
	likert_value = require("../../models").likert_template_value;

module.exports = (name, description, scaleItems) => {
	var response = {
		ok: false,
		message: 'I have encountered the following error: '
	};
	let l = scaleItems.split(',').length;
	return likert.create({
		name: name,
		description: description,
		max_value: l
	}).then(x => {
		return likert_value.create({
			templateId: x.id,
			value: scaleItems
		}).then(y => {
			response.ok = true;
			response.message = x.id;
			return response;
		});
	}).catch(err => {
		response.message += err;
		return response;
	});
};
