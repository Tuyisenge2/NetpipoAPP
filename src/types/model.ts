import { Optional } from "sequelize";

export interface roleModelAttributes {
	id: string;
	roleName: string;
}
export type roleCreationAttributes = Optional<roleModelAttributes, "id">;



export interface UserModelAttributes {
	id: string;
	name: string;
	salary: string;
	position: string;
	email: string;
    role: string;
    createdAt?: Date;
	updatedAt?: Date;
}

export interface UserModelInclude extends UserModelAttributes {
	Roles: any;
}

export type UserCreationAttributes = Optional<
	UserModelAttributes,"id" | "createdAt" | "updatedAt"
> ;