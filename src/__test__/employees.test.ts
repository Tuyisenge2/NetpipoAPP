import request from "supertest";
import app from "../app";
import database_models, {
  connectionToDatabase,
} from "../database/config/db.config";

jest.setTimeout(30000);



let token: string;
let admin_token: string;
let resetToken = "";
let id: string;
let userId: string;
let adminId: string;

describe("USER API TEST", () => {
  it("should display  home page and return 200", async () => {
    const { body } = await request(app).get("/api/v1/").expect(200);
    expect(body.message).toBe("Welcome to  employees management app");
  });
  it("should display  all employess and return 200", async () => {
    const res = await request(app).get("/api/v1/employees");
    console.log("res",res)
    expect(res.body.message).toBe("Employees fetched successfully");
    expect(res.body.status).toBe(200);
  });

  it("should provide jwt to employee", async () => {
    const newEmployee = {
        email: "johndoe@example.com",
        position: "Software Engineer"
      };
    const  {body}  = await request(app).post("/api/v1/auth") .send(newEmployee)
    .set("Content-Type", "application/json");
  //  console.log(body);
     expect(body.token).toBeDefined()
     expect(body.status).toBe(200);

     token=body.token;
  });
  it("should display create employees", async () => {
    const newEmployee = {
        name: "John Doe",
        email: "johndoe@example.com",
        position: "Software Engineer",
        salary: 50000
      };
  
      const response = await request(app)
        .post("/api/v1/employees")
        .send(newEmployee)
        .set("Content-Type", "application/json");
       // console.log(response)
    //   expect(response.status).toBe(201); // Assuming 201 for created
    //   expect(response.body.message).toBe("Employee created successfully");
  });

});
