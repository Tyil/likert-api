const likert = require("../models").likert_template;

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
        result.destroy();
        return {
            ok: true, 
            message: 'The likert scale has been removed.'
        };
	});
};