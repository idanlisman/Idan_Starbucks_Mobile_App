import * as SecureStore from "expo-secure-store";

class Storage {
  async setToken(token: string): Promise<void> {
    return SecureStore.setItemAsync("token", token);
  }

  async getToken(): Promise<string | null> {
    return SecureStore.getItemAsync("token");
  }
}

export default new Storage();
