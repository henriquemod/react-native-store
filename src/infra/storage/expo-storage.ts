import AsyncStorage from '@react-native-async-storage/async-storage'
import type { Storage } from 'src/data/contracts/storage'

export class ExpoStorage implements Storage.Client {
  async get(key: string): Promise<string | null> {
    const value = await AsyncStorage.getItem(key)
    return value
  }

  async set(key: string, value: string): Promise<void> {
    await AsyncStorage.setItem(key, value)
  }

  async remove(key: string): Promise<void> {
    await AsyncStorage.removeItem(key)
  }
}
