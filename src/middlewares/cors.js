module.exports = (req, res, next) => {
	const headers = [
		"Origin",
		"X-Requested-With",
		"content-type",
		"Accept",
		"Authorization",
	];

	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", headers.join(" "));

	next();
};
