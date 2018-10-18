const tumblrJs = require('tumblr.js');

module.exports = async (params) => {
	const { limit } = params;

	const tumblr = tumblrJs.createClient({
		credentials: params.credentials,
		returnPromises: true,
	});

	try {
		const { posts } = await tumblr.blogDrafts(params.blog, limit ? { limit } : {});
		console.log(posts);
		return posts;
	} catch (error) {
		console.error(error);
		return error;
	}
}
