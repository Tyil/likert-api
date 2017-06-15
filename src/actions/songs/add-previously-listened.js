const listened = require('../../models').previously_listened;

module.exports = (songId, userId) => {
	return listened.create({
		userId: userId,
		songId: songId
	}).then(result => {
		return {
			ok: true,
			message: 'The song has been added to previously-listened.'
		};
	}).catch(err => {
		return {
			ok: false,
			message: err
		};
	});
}