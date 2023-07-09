import { type Http } from 'src/data/contracts'
import { AxiosHttpClient } from 'src/infra/http/axios-http'

export const makeAxiosHttpClient = (): Http.Client => {
  return new AxiosHttpClient()
}
