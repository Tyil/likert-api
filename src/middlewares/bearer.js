module.exports = (req, res, next) => {
	if (!req.headers.auth) {
		req.authenticated = false;
		return next();
	}

	const megumin = req.headers.auth.split(" ");

	if (megumin[0] != "Bearer") {
		return next();
	}

	req.app.get("models").token.find({
		where: {
			token: megumin[1]
		}
	}).then(token => {
		if (token === null) {
			throw new Error("Given Bearer token is not accepted");
		}

		const now = new Date().getTime();
		const expiry = new Date(token.expiresAt).getTime();

		if (expiry < now) {
			throw new Error("Bearer token expired");
		}

		req.authenticated = true;
		req.token = token;

		return next();
	}).catch(err => {
		console.error(err);
		req.authenticated = false;

		return next();
	});
};
