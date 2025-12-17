import { set, get } from "idb-keyval";

export const saveFeedbackAudio = async (
  sessionId: string,
  questionIndex: number,
  attempt: number,
  base64: string
) => {
  const key = `${sessionId}_q${questionIndex}_a${attempt}`;
  await set(key, base64);
  return key;
};

export const getFeedbackAudio = async (key: string) => {
  return await get<string>(key);
};

