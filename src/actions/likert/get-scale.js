const likert = require("../../models").likert_template_value;

module.exports = (id) => {
	const response = {
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
		
		return {
			ok: true,
			message: JSON.parse(result.get("value"))
		};
	}).catch(err => {
		response.message = err;

		return response;
	});
};
