export namespace Storage {
  export interface Get {
    get: (key: string) => Promise<string | null>
  }
  export interface Set {
    set: (key: string, value: string) => Promise<void>
  }
  export interface Remove {
    remove: (key: string) => Promise<void>
  }
  export type Client = Storage.Get & Storage.Set & Storage.Remove
}
