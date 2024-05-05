const request = require("supertest");
const app = require("../server");

describe("Cheeses API", () => {
  it("GET /cheeses - should return all cheeses", async () => {
    const res = await request(app).get("/cheeses");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveLength(5);
  });

  it("GET /cheeses/:id - should return specific cheese", async () => {
    const res = await request(app).get("/cheeses/1");
    expect(res.statusCode).toEqual(200);
    expect(res.body.name).toBe("Camembert");
  });

  it("POST /cheeses - should add a new cheese", async () => {
    const newCheese = {
      name: "Camembert",
      pricePerKilo: 32,
      colour: "Pale Yellow",
      imageUrl: "camembert.jpeg",
    };
    const res = await request(app).post("/cheeses").send(newCheese);
    expect(res.statusCode).toEqual(201);
    expect(res.body.name).toBe("Camembert");
  });

  it("PUT /cheeses/:id - should update a cheese", async () => {
    const updatedCheese = {
      name: "Updated Cheese",
      pricePerKilo: 50,
      colour: "Yellow",
      imageUrl: "updated.jpeg",
    };
    const res = await request(app).put("/cheeses/1").send(updatedCheese);
    expect(res.statusCode).toEqual(200);
    expect(res.body.name).toBe("Updated Cheese");
  });

  it("DELETE /cheeses/:id - should delete a cheese", async () => {
    const res = await request(app).delete("/cheeses/1");
    expect(res.statusCode).toEqual(204);
  });
});
