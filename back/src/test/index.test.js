const app = require("../app");
const session = require("supertest");
const agent = session(app);

describe("Test de RUTAS.", () => {
  xdescribe("GET /onsearch/{id}.", () => {
    it("Responde con status: 200.", async () => {
      await agent.get("/onsearch/1").expect(200);
    });
    it('Responde un objeto con las propiedades: "id", "name", "species", "gender" e "image".', async () => {
      const { body } = await agent.get("/onsearch/1");
      const keys = Object.keys(body);
      expect(keys).toContain("id");
      expect(keys).toContain("name");
      expect(keys).toContain("species");
      expect(keys).toContain("gender");
      expect(keys).toContain("image");
    });
    it("Si hay un error responde con status: 500.", async () => {
      await agent.get("/onsearch/1000").expect(500);
    });
  });

  xdescribe("GET /detail/{id}.", () => {
    it("Responde con status: 200.", async () => {
      await agent.get("/detail/1").expect(200);
    });
    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "image", "status", "origin".', async () => {
      const { body } = await agent.get("/detail/1");
      const keys = Object.keys(body);
      expect(keys).toContain("id");
      expect(keys).toContain("name");
      expect(keys).toContain("species");
      expect(keys).toContain("gender");
      expect(keys).toContain("image");
      expect(keys).toContain("status");
      expect(keys).toContain("origin");
    });
    it("Si hay un error responde con status: 500.", async () => {
      await agent.get("/detail/1000").expect(500);
    });
  });

  xdescribe("GET /fav.", () => {
    it("Responde con status: 200.", async () => {
      await agent.get("/fav").expect(200);
    });
    it("Responde con un array de favoritos.", async () => {
      const { body } = await agent.get("/fav");
      expect(body).toBeDefined();
      expect(body).toBeInstanceOf(Array);
      expect(body).toMatchObject([]);
    });
    it("Si hay un error responde con status: 404.", async () => {
      await agent.get("/favv").expect(404);
    });
  });

  xdescribe("POST /fav.", () => {
    it("Responde con status: 200.", async () => {
      const char = {
        id: 1,
        name: "Rick Sanchez",
        species: "Human",
        gender: "Male",
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      };
      await agent.post("/fav").send(char);
      expect(200);
    });
    it("Responde con objeto de un personaje guardado.", async () => {
      const char = {
        id: 1,
        name: "Rick Sanchez",
        species: "Human",
        gender: "Male",
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      };
      const { body } = await agent.post("/fav").send(char);
      expect(body).toMatchObject(char);
    });
    it("Si hay un error responde con status: 500.", async () => {
      const char = {
        id: 1,
        name: "Rick Sanchez",
        species: "Human",
        gender: "Male",
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      };
      await agent.post("/favv").send(char);
      expect(500);
    });
  });

  xdescribe("DELETE /fav/{id}.", () => {
    it("Responde con status: 200.", async () => {
      await agent.delete("/fav/1");
      expect(200);
    });
    it("Responde con un objeto con propiedad succes en TRUE.", async () => {
      const { body } = await agent.delete("/fav/1");
      expect(body.success).toBe(true);
    });
    it("Si hay un error responde con status: 500.", async () => {
      await agent.delete("/fav/1000");
      expect(500);
    });
  });
});
