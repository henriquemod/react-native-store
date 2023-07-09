import axios, { type AxiosError, type AxiosResponse } from 'axios'
import type { Http } from 'src/data/contracts'

export class AxiosHttpClient implements Http.Client {
  async post<P = object, R = object>(
    params: Http.PostParams<P>,
  ): Promise<Http.Response<R>> {
    throw new Error('Method not implemented.')
  }

  async get<R = object, p = object>(
    url: string,
    params?: p,
  ): Promise<Http.Response<R>> {
    let httpResponse: AxiosResponse<R>

    try {
      httpResponse = await axios.get<R>(url, { params })
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      httpResponse = (error as AxiosError<R>).response!
    }

    return {
      statusCode: httpResponse.status,
      body: httpResponse.data,
    }
  }
}
