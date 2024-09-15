import AsyncStorage from '@react-native-async-storage/async-storage'

interface Props<T> {
  setItem: (key: string, value: string) => Promise<void>
  setObjectItem: (key: string, value: T) => Promise<void>
  getItem: (key: string) => Promise<string | undefined>
  getObjectItem: (key: string) => Promise<T | undefined>
  removeItem: (key: string) => Promise<void>
}

const useStorage = <T>(): Props<T> => {
  const setItem = async (key: string, value: string): Promise<void> => {
    try {
      await AsyncStorage.setItem(key, value)
    } catch (e) {
      console.error(e)
    }
  }

  const setObjectItem = async (
    key: string, value: T): Promise<void> => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value))
    } catch (e) {
      console.error(e)
    }
  }

  const getItem = async (key: string): Promise<string | undefined> => {
    try {
      const value = await AsyncStorage.getItem(key)
      if (value !== null) {
        return value
      }
    } catch (e) {
      console.error(e)
    }
  }

  const getObjectItem = async (
    key: string): Promise<T | undefined> => {
    try {
      const value = await AsyncStorage.getItem(key)
      if (value !== null) {
        return JSON.parse(value)
      }
    } catch (e) {
      console.error(e)
    }
  }

  const removeItem = async (key: string): Promise<void> => {
    try {
      await AsyncStorage.removeItem(key)
    } catch (e) {
      console.error(e)
    }
  }

  return { getItem, getObjectItem, removeItem, setItem, setObjectItem }
}

export default useStorage
