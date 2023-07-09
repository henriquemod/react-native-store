import {
  type HttpGetClient,
  type HttpPostClient,
  type HttpPostParams,
  type HttpResponse,
} from 'src/data/protocols/http'
import axios, { type AxiosError, type AxiosResponse } from 'axios'

export class AxiosHttpClient
  implements HttpPostClient<any, any>, HttpGetClient<any, any>
{
  async get(url: string, params?: any): Promise<HttpResponse<any>> {
    let httpResponse: AxiosResponse<any>

    try {
      httpResponse = await axios.get(url, params)
    } catch (error) {
      httpResponse = (error as AxiosError).response!
    }

    return {
      statusCode: httpResponse.status,
      body: httpResponse.data,
    }
  }

  async post(params: HttpPostParams<any>): Promise<HttpResponse<any>> {
    let httpResponse: AxiosResponse<any>

    try {
      httpResponse = await axios.post(params.url, params.body)
    } catch (error) {
      httpResponse = (error as AxiosError).response!
    }

    return {
      statusCode: httpResponse.status,
      body: httpResponse.data,
    }
  }
}
