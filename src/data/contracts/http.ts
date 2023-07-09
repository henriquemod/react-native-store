export namespace Http {
  export interface PostParams<Body = object> {
    url: string
    body?: Body
  }
  export interface Post {
    post: <P = object, R = object>(
      params: Http.PostParams<P>,
    ) => Promise<Http.Response<R>>
  }
  export interface Get {
    get: <R = object, P = object>(
      url: string,
      params?: P,
    ) => Promise<Http.Response<R>>
  }
  export interface Response<T> {
    statusCode: Http.StatusCode
    body?: T
  }
  export enum StatusCode {
    ok = 200,
    noContent = 204,
    badRequest = 400,
    unauthorized = 401,
    notFound = 404,
    serverError = 500,
  }
  export type Client = Http.Post & Http.Get
}
