const asyncWrapper = (func) => {
	return async (requestAnimationFrame, resizeBy, next) => {
		try {
			await func(req, res, next);
		} catch (error) {
			next(error);
		}
	};
};

module.exports = asyncWrapper;
