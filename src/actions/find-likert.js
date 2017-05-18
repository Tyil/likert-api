const likert = require("../models").likert_template,
    likert_result = require("../models").likert_result,
    likert_steps = require("../models").likert_steps;

module.exports = (id) => {
	return likert.findOne({
		where: {
			id: id
		}
	}).then(result => {
		if (result === null) {
			return {
				ok: false,
				message: 'The likert scale could not be found.'
			};
		}
        return {
            ok: true, 
            message: result
        };
	});
};