import basicInfo from "./basicInfo";
import employee  from "../documentation/employee"

export default {
	...basicInfo,
	paths: {
		...employee as any
	},
};
