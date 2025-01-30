
const PORT = process.env.PORT;
const SERVER_URL=process.env.SERVER_URL
const DEPLOYED_URL=process.env.DEPLOYED_URL
const basicInfo = {
	openapi: "3.0.0",
	info: {
		title: "Employee Management APP",
		description: "Employee management api",
		version: "1.0.0",
	},

	servers: [
		
		{
			url: DEPLOYED_URL,
			description: "Production server (HTTPS)",
		},
        {
			url: SERVER_URL || `http://localhost:${PORT}`,
			description: "Development server",
		}
	],
	security: [
		{
			google_auth: [],
		},
	],

	components: {
		securitySchemes: {
			bearerAuth: {
				type: "http",
				scheme: "bearer",
				bearerFormat: "JWT",
			},
		},
	},
};

export default basicInfo;
