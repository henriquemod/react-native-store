import { faker } from '@faker-js/faker'
import type { Http } from '../contracts'

export const mockPostRequest = (): Http.PostParams => ({
  url: faker.internet.url(),
  body: {
    [faker.lorem.word()]: faker.lorem.word(),
    [faker.lorem.word()]: faker.lorem.word(),
    [faker.lorem.word()]: faker.lorem.word(),
  },
})
