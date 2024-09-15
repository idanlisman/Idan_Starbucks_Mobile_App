import { RootStackParamList } from "@/consts/Types";

export const navigationHandler = async (navigate: (arg: keyof RootStackParamList) => void, screen: keyof RootStackParamList, startExecTimeMs: number, minDelayMs: number = 3500): Promise<void> => {
  const time = Date.now() - startExecTimeMs;
  if (time >= minDelayMs) return navigate(screen);
  else {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        navigate(screen);
        resolve();
      }, minDelayMs - time);
    });
  }
};
