import {
  HttpPostClient,
  HttpPostParams,
  HttpResponse,
} from "src/data/protocols/http";
import axios, { AxiosError, AxiosResponse } from "axios";

export class AxiosHttpClient implements HttpPostClient<any, any> {
  async post(params: HttpPostParams<any>): Promise<HttpResponse<any>> {
    let httpResponse: AxiosResponse<any>;

    try {
      httpResponse = await axios.post(params.url, params.body);
    } catch (error) {
      httpResponse = (error as AxiosError).response!;
    }

    return {
      statusCode: httpResponse.status,
      body: httpResponse.data,
    };
  }
}
