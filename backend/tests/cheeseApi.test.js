const request = require("supertest");
const server = require("../server");

describe("GET /cheeses", () => {
  it("should return a list of cheeses", async () => {
    const res = await request(server).get("/api/cheeses");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it("should handle errors", async () => {
    const res = await request(server).get("/api/nonexistent");
    expect(res.statusCode).toEqual(404);
  });
});
