import {User} from '../model'

export const userRegister = async (registerObj) => {
	
	return await User.userRegister(registerObj);
};