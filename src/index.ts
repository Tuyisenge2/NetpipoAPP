import app from "./app";
import * as http from "http";

export const PORT = process.env.PORT;
const startServer = async () => {

	const server = http.createServer(app);

	server.listen(PORT, async () => {
		console.log(`Server is running at http://localhost:${PORT}`);
	});
};

startServer();
