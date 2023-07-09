import type { Storage } from 'src/data/contracts/storage'
import { ExpoStorage } from 'src/infra/storage/expo-storage'

const makeExpoStorage = (): Storage.Client => {
  return new ExpoStorage()
}

export default makeExpoStorage
