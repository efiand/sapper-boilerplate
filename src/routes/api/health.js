import {StatusCodes} from 'http-status-codes';

export const get = (req, res, _next) => {
	res.writeHead(StatusCodes.OK, {
		'Content-Type': 'application/json'
	});

	res.end(JSON.stringify({
		ok: true,
		timestamp: new Date().toISOString()
	}));
};
