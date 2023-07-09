import type { HttpResponse } from '.'

export interface HttpPostParams<T> {
  url: string
  body?: T
}

export interface HttpPostClient<T, R> {
  post: (params: HttpPostParams<T>) => Promise<HttpResponse<R>>
}

export interface HttpGetClient<T, R> {
  get: (url: string, params: T) => Promise<HttpResponse<R>>
}
