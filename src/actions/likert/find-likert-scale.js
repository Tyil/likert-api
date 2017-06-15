const likert = require("../../models").likert_template,
	likert_value = require("../../models").likert_template_value;

module.exports = (id) => {
	return likert.findOne({
		where: {
			id: id
		}
	}).then(likert => {
		return likert_value.findOne({
			where: {
				templateId: id
			}
		}).then(values => {
			return {
				ok: true,
				message: {
					likert,
					scale: values.get("value").split(',')
				}
			};
		});
	});
};
