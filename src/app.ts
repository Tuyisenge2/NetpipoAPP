import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));


app.get("/api/v1", (_req: Request, res: Response) => {
	res.status(200).json({
		message: "Welcome to  employees management app",
	});
});

export default app;
