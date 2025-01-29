import { Sequelize } from "sequelize";

import user_model from "./user";
import Role_model from "./role";

const Models = (sequelize: Sequelize) => {
	const User = user_model(sequelize);
	const role = Role_model(sequelize);
	
	return {	
    User,
    role
  };
};

export default Models;
