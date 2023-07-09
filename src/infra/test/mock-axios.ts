import axios from 'axios'
import { faker } from '@faker-js/faker'

export const mockHttpResponse = (): unknown => ({
  status: faker.number.int({ min: 0, max: 500 }),
  data: {
    [faker.lorem.word()]: faker.lorem.word(),
    [faker.lorem.word()]: faker.lorem.word(),
    [faker.lorem.word()]: faker.lorem.word(),
  },
})

export const mockAxiosPost = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>
  mockedAxios.post.mockResolvedValue(mockHttpResponse())

  return mockedAxios
}
