import Toast from "react-native-toast-message";

export type MessageType = "success" | "error" | "info";

export const customMessage = (
  type: MessageType,
  message: string,
  description?: string
) => {
  if (message.length > 0) {
    Toast.show({
      type,
      text1: message,
      ...(description && { text2: description }),
    });
  }
};
