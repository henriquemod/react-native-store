import { HttpPostParams } from "src/data/protocols/http";
import { faker } from "@faker-js/faker";

export const mockPostRequest = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: {
    [faker.lorem.word()]: faker.lorem.word(),
    [faker.lorem.word()]: faker.lorem.word(),
    [faker.lorem.word()]: faker.lorem.word(),
  },
});
