import express, { Request, Response } from "express";
import cors from "cors";
import router from "./routes";
import swaggerUi from "swagger-ui-express";
import docs from "./documentation"
const app = express();
const swaggerOptions = {
	validatorUrl: null,
};
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use(
	"/api/v1/docs",
	swaggerUi.serve,
	swaggerUi.setup(docs, { swaggerOptions: swaggerOptions }),
);

app.use("/api/v1", router);
app.get("/api/v1", (_req: Request, res: Response) => {
	res.status(200).json({
		message: "Welcome to  employees management app",
	});
});

export default app;
