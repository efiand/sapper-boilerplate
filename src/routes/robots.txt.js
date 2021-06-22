import { StatusCodes } from 'http-status-codes';

export const get = async (req, res, _next) => {
	res.writeHead(StatusCodes.OK, {
		'Content-Type': 'text/plain'
	});

	res.end(`disallow: /`);
};
