import request from "supertest";
import app from "../app";

jest.setTimeout(30000);


describe("USER API TEST", () => {
  it("should display  home page and return 200", async () => {
    const { body } = await request(app).get("/api/v1/").expect(200);
    expect(body.message).toBe("Welcome to  employees management app");
  });

 
});
