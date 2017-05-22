const likert = require("../../models").likert_template_value;

module.exports = (id) => {
	var response = {
		ok: false,
		message: 'Could not find the scale for the likert scale.'
	};
	return likert.findOne({
		where: {
			templateId: id
		}
	}).then(result => {
		if (result === null) {
			return response;
		}
		response.ok = true;
		response.message = result;
		return response;
	}).catch(err => {
		response.message = err;
		return response;
	});
};
