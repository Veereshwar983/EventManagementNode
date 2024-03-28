import {HttpStatusCodes} from '../constants';
import {UserService} from '../services';

export const userRegister = async (request, response) => {
	try {
		const user = await UserService.userRegister(request.body);
		response.status(HttpStatusCodes.OK).json(user);
	} catch (error) {
		response.status(HttpStatusCodes.INTERNAL_SERVER_ERROR)
			.json({message: error});
	}
};
