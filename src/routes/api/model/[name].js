import { StatusCodes } from 'http-status-codes';
import { capitalize } from '../../../lib/utils';
import connectDB from '../../../data/connect-db';

export const get = async (req, res, _next) => {
	const { db, ...models } = await connectDB();
	const { name } = req.params;
	const send = {};

	const Model = models[capitalize(name)];
	if (Model) {
		try {
			send.data = await Model.findAll();
		} catch (err) {
			send.status = 'INTERNAL_SERVER_ERROR';
			send.error = 'Ошибка получения данных';
		}
		send.status = 'OK';
	} else {
		send.status = 'NOT_FOUND';
		send.error = 'Неверное имя модели';
	}

	res.writeHead(StatusCodes[send.status], {
		'Content-Type': 'application/json'
	});

	res.end(JSON.stringify(send));
};
