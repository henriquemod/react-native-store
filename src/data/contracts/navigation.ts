/* eslint-disable @typescript-eslint/no-explicit-any */
export namespace Navigation {
  export interface Route<Params extends Record<string, any> = any> {
    key: string
    name: string
    params: Params
  }
  export interface Navigation {
    goBack: () => void
    navigate: (name: string, params?: any) => void
    // NOTE - The following are not used in this project, but are included for reference
    // addListener: (event: string, callback: () => void) => void
    // canGoBack: () => boolean
    // dangerouslyGetParent: () => Navigation
    // dangerouslyGetState: () => { routes: Route[] }
    // dispatch: (action: any) => void
    // isFocused: () => boolean
    // pop: () => void
    // popToTop: () => void
    // push: (name: string, params?: any) => void
    // removeListener: (event: string, callback: () => void) => void
    // replace: (name: string, params?: any) => void
    // reset: (state: any) => void
    // setOptions: (options: any) => void
    // setParams: (params: any) => void
  }
  export interface Props<RouteParams extends Record<string, any> = any> {
    navigation: Navigation
    route: Route<RouteParams>
  }
}
