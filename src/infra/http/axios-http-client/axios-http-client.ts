import type { HttpGetClient, HttpResponse } from 'src/data/protocols/http'
import axios, { type AxiosError, type AxiosResponse } from 'axios'

export class AxiosHttpClient implements HttpGetClient {
  async get<Response = object, Params = object>(
    url: string,
    params?: Params,
  ): Promise<HttpResponse<Response>> {
    let httpResponse: AxiosResponse<Response>

    try {
      httpResponse = await axios.get<Response>(url, { params })
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      httpResponse = (error as AxiosError<Response>).response!
    }

    return {
      statusCode: httpResponse.status,
      body: httpResponse.data,
    }
  }
}
