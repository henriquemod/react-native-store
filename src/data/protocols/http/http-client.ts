import type { HttpResponse } from '.'

export interface HttpPostParams<T> {
  url: string
  body?: T
}

export interface HttpPostClient {
  post: <T = any, R = any>(
    params: HttpPostParams<T>,
  ) => Promise<HttpResponse<R>>
}

export interface HttpGetClient {
  get: <Response, Params>(
    url: string,
    params?: Params,
  ) => Promise<HttpResponse<Response>>
}
