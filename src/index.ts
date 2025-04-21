import app from "./app";

import { connectionToDatabase } from "./database/config/db.config";

export const PORT = process.env.PORT;
const startServer = async () => {
	await connectionToDatabase();

	const server = http.createServer(app);

	server.listen(PORT, async () => {
		console.log(`Server is running at http://localhost:${PORT}`);
	});
};

startServer();
